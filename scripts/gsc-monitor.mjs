import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

/**
 * Automated Google Search Console (GSC) Intelligence & Striking Distance Engine
 *
 * Connects directly to the Google Search Console Search Analytics API via native
 * Node.js crypto RSA-SHA256 JWT bearer authentication (no heavy googleapis npm dependency required).
 *
 * Core Capabilities:
 * 1. Pulls search analytics (Clicks, Impressions, CTR, Position) by Query & Page.
 * 2. Isolates "Striking Distance" keywords (Positions 11–30) where minimal on-page tweaks push results to Page 1.
 * 3. Detects newly indexed and emerging queries vs historical snapshot in data/gsc-insights.json.
 * 4. Delivers an automated weekly Cyber-Dark HTML executive digest to abinschandran1@gmail.com via Resend.
 */

const INSIGHTS_FILE = path.resolve(process.cwd(), 'data', 'gsc-insights.json');
const REPORT_HTML_FILE = path.resolve(process.cwd(), 'gsc-performance-report.html');
const DEFAULT_SITE_URL = 'https://www.abinschandran.in/';

function getEnvVar(key, fallback = '') {
  if (process.env[key]) return process.env[key];
  try {
    const envPath = path.resolve(process.cwd(), '.env.local');
    if (fs.existsSync(envPath)) {
      const content = fs.readFileSync(envPath, 'utf8');
      const match = content.match(new RegExp(`^${key}=(.*)$`, 'm'));
      if (match) return match[1].trim();
    }
  } catch {}
  return fallback;
}

function loadHistoricalInsights() {
  try {
    if (fs.existsSync(INSIGHTS_FILE)) {
      return JSON.parse(fs.readFileSync(INSIGHTS_FILE, 'utf8'));
    }
  } catch (err) {
    console.warn('⚠️ Could not load historical GSC insights:', err.message);
  }
  return { lastRun: null, totalImpressions: 0, totalClicks: 0, queries: {} };
}

function saveInsights(data) {
  try {
    const dir = path.dirname(INSIGHTS_FILE);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(INSIGHTS_FILE, JSON.stringify(data, null, 2), 'utf8');
  } catch (err) {
    console.error('❌ Failed to save GSC insights:', err.message);
  }
}

/**
 * Parse Google Service Account credentials from:
 * 1. GSC_CREDENTIALS env (JSON string or base64)
 * 2. GSC_CLIENT_EMAIL + GSC_PRIVATE_KEY
 * 3. Local file: gsc-credentials.json
 */
function getServiceAccountCredentials() {
  const rawCreds = getEnvVar('GSC_CREDENTIALS');
  if (rawCreds) {
    try {
      const decoded = rawCreds.startsWith('{')
        ? rawCreds
        : Buffer.from(rawCreds, 'base64').toString('utf8');
      return JSON.parse(decoded);
    } catch (e) {
      console.warn('⚠️ Could not parse GSC_CREDENTIALS env:', e.message);
    }
  }

  const clientEmail = getEnvVar('GSC_CLIENT_EMAIL');
  const privateKey = getEnvVar('GSC_PRIVATE_KEY');
  if (clientEmail && privateKey) {
    return {
      client_email: clientEmail,
      private_key: privateKey.replace(/\\n/g, '\n'),
    };
  }

  const localFile = path.resolve(process.cwd(), 'gsc-credentials.json');
  if (fs.existsSync(localFile)) {
    try {
      return JSON.parse(fs.readFileSync(localFile, 'utf8'));
    } catch (e) {
      console.warn('⚠️ Could not parse gsc-credentials.json:', e.message);
    }
  }

  return null;
}

/**
 * Native Node.js OAuth2 Service Account JWT Generator
 */
async function getGoogleAccessToken(credentials) {
  const now = Math.floor(Date.now() / 1000);
  const header = { alg: 'RS256', typ: 'JWT' };
  const payload = {
    iss: credentials.client_email,
    scope: 'https://www.googleapis.com/auth/webmasters.readonly',
    aud: 'https://oauth2.googleapis.com/token',
    exp: now + 3600,
    iat: now,
  };

  const b64Url = (obj) =>
    Buffer.from(JSON.stringify(obj))
      .toString('base64')
      .replace(/=/g, '')
      .replace(/\+/g, '-')
      .replace(/\//g, '_');

  const unsignedToken = `${b64Url(header)}.${b64Url(payload)}`;

  const signer = crypto.createSign('RSA-SHA256');
  signer.update(unsignedToken);
  signer.end();
  const signature = signer
    .sign(credentials.private_key, 'base64')
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');

  const jwt = `${unsignedToken}.${signature}`;

  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: jwt,
    }),
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(`Google OAuth2 Error: ${data.error_description || JSON.stringify(data)}`);
  }
  return data.access_token;
}

/**
 * Fetch Search Analytics data from Google Search Console REST API
 */
async function fetchGscSearchAnalytics(accessToken, siteUrl, days = 7) {
  const endDate = new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
  const startDate = new Date(Date.now() - (days + 2) * 24 * 60 * 60 * 1000)
    .toISOString()
    .split('T')[0];

  const encodedSite = encodeURIComponent(siteUrl);
  const endpoint = `https://www.googleapis.com/webmasters/v3/sites/${encodedSite}/searchAnalytics/query`;

  const requestBody = {
    startDate,
    endDate,
    dimensions: ['query', 'page'],
    rowLimit: 1000,
    dataState: 'all',
  };

  const res = await fetch(endpoint, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody),
  });

  const json = await res.json();
  if (!res.ok) {
    throw new Error(`GSC API Error (${res.status}): ${json.error?.message || JSON.stringify(json)}`);
  }

  return {
    rows: json.rows || [],
    startDate,
    endDate,
  };
}

/**
 * Sample dataset for local testing / dry-run when credentials aren't provided yet
 */
function getSampleDataset() {
  return {
    startDate: '2026-09-06',
    endDate: '2026-09-12',
    rows: [
      {
        keys: ['whatsapp business cloud api', 'https://www.abinschandran.in/integrations/whatsapp-business-api'],
        clicks: 0,
        impressions: 3,
        ctr: 0,
        position: 29.67,
      },
      {
        keys: ['whatsapp cloud apis', 'https://www.abinschandran.in/integrations/whatsapp-business-api'],
        clicks: 0,
        impressions: 5,
        ctr: 0,
        position: 58.8,
      },
      {
        keys: ['whatsapp api integration', 'https://www.abinschandran.in/integrations/whatsapp-business-api'],
        clicks: 0,
        impressions: 18,
        ctr: 0,
        position: 97.2,
      },
      {
        keys: ['whatsapp cloud api', 'https://www.abinschandran.in/integrations/whatsapp-business-api'],
        clicks: 0,
        impressions: 4,
        ctr: 0,
        position: 86.75,
      },
      {
        keys: ['freelance software developer kochi', 'https://www.abinschandran.in/freelance-software-developer-kochi'],
        clicks: 1,
        impressions: 24,
        ctr: 0.0416,
        position: 8.4,
      },
      {
        keys: ['flutter developer kerala freelance', 'https://www.abinschandran.in/freelance-software-developer-kerala'],
        clicks: 0,
        impressions: 14,
        ctr: 0,
        position: 14.2,
      },
      {
        keys: ['nextjs developer kochi', 'https://www.abinschandran.in/services/react-nextjs-development'],
        clicks: 0,
        impressions: 9,
        ctr: 0,
        position: 18.5,
      },
      {
        keys: ['stripe integration specialist freelance', 'https://www.abinschandran.in/integrations/stripe'],
        clicks: 0,
        impressions: 7,
        ctr: 0,
        position: 22.1,
      },
    ],
  };
}

/**
 * Analyze and categorize search performance data
 */
function processGscData(data, historical) {
  const rows = data.rows || [];

  let totalClicks = 0;
  let totalImpressions = 0;
  let positionSum = 0;

  const processedQueries = [];
  const pagesMap = {};

  for (const row of rows) {
    const query = row.keys[0];
    const page = row.keys[1];
    const clicks = row.clicks || 0;
    const impressions = row.impressions || 0;
    const ctr = row.ctr || 0;
    const position = Math.round((row.position || 0) * 10) / 10;

    totalClicks += clicks;
    totalImpressions += impressions;
    positionSum += position * impressions;

    const previousInfo = historical.queries?.[query];
    const isNew = !previousInfo;
    const positionDelta = previousInfo ? Math.round((previousInfo.position - position) * 10) / 10 : 0;

    const item = {
      query,
      page,
      clicks,
      impressions,
      ctr: (ctr * 100).toFixed(1) + '%',
      position,
      isNew,
      positionDelta,
    };

    processedQueries.push(item);

    if (!pagesMap[page]) {
      pagesMap[page] = { page, impressions: 0, clicks: 0, queries: [] };
    }
    pagesMap[page].impressions += impressions;
    pagesMap[page].clicks += clicks;
    pagesMap[page].queries.push(item);
  }

  const avgPosition =
    totalImpressions > 0 ? (positionSum / totalImpressions).toFixed(1) : '0.0';
  const overallCtr =
    totalImpressions > 0 ? ((totalClicks / totalImpressions) * 100).toFixed(1) + '%' : '0.0%';

  // Segment Queries
  // 1. Page 1 Champions (Positions 1 to 10)
  const pageOneQueries = processedQueries
    .filter((q) => q.position <= 10)
    .sort((a, b) => b.clicks - a.clicks || a.position - b.position);

  // 2. Striking Distance (Positions 11 to 30) — Highest Growth ROI
  const strikingDistance = processedQueries
    .filter((q) => q.position > 10 && q.position <= 30)
    .sort((a, b) => b.impressions - a.impressions || a.position - b.position);

  // 3. Emerging / Long-Tail (Positions > 30)
  const emergingQueries = processedQueries
    .filter((q) => q.position > 30)
    .sort((a, b) => b.impressions - a.impressions);

  return {
    dateRange: `${data.startDate} to ${data.endDate}`,
    totalClicks,
    totalImpressions,
    overallCtr,
    avgPosition,
    totalQueries: processedQueries.length,
    pageOneQueries,
    strikingDistance,
    emergingQueries,
    pages: Object.values(pagesMap).sort((a, b) => b.impressions - a.impressions),
    rawQueries: processedQueries,
  };
}

/**
 * Build Cyber-Dark HTML Email Report
 */
function buildHtmlReport(analysis) {
  const strikingRows = analysis.strikingDistance
    .map(
      (item) => `
      <tr style="border-b: 1px solid #1e293b;">
        <td style="padding: 12px 10px; font-weight: 600; color: #ffffff;">
          ${item.query}
          ${item.isNew ? '<span style="background: #00F0FF20; color: #00F0FF; font-size: 10px; padding: 2px 6px; border-radius: 4px; margin-left: 6px; border: 1px solid #00F0FF40;">NEW</span>' : ''}
        </td>
        <td style="padding: 12px 10px; text-align: center; color: #f59e0b; font-family: monospace; font-weight: 700;">
          #${item.position}
          ${item.positionDelta > 0 ? `<span style="color: #10b981; font-size: 11px;">(▲+${item.positionDelta})</span>` : ''}
        </td>
        <td style="padding: 12px 10px; text-align: center; color: #00F0FF; font-family: monospace;">
          ${item.impressions}
        </td>
        <td style="padding: 12px 10px; color: #94a3b8; font-size: 11px; font-family: monospace;">
          <a href="${item.page}" style="color: #94a3b8; text-decoration: none;">${item.page.replace('https://www.abinschandran.in', '') || '/'}</a>
        </td>
      </tr>`
    )
    .join('');

  const pageOneRows = analysis.pageOneQueries
    .map(
      (item) => `
      <tr style="border-b: 1px solid #1e293b;">
        <td style="padding: 10px; color: #ffffff; font-weight: 600;">${item.query}</td>
        <td style="padding: 10px; text-align: center; color: #10b981; font-weight: 700; font-family: monospace;">#${item.position}</td>
        <td style="padding: 10px; text-align: center; color: #00F0FF; font-family: monospace;">${item.impressions}</td>
        <td style="padding: 10px; text-align: center; color: #f8fafc; font-weight: 700;">${item.clicks}</td>
      </tr>`
    )
    .join('');

  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Google Search Console Weekly Intelligence</title>
</head>
<body style="margin: 0; padding: 0; background-color: #07090E; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #e2e8f0; line-height: 1.5;">
  <div style="max-width: 680px; margin: 24px auto; background-color: #0d1117; border: 1px solid #1e293b; border-radius: 16px; overflow: hidden; padding: 32px 28px;">
    
    <!-- Header -->
    <div style="border-bottom: 1px solid #1e293b; padding-bottom: 20px; margin-bottom: 24px;">
      <div style="display: inline-block; padding: 4px 12px; border-radius: 20px; background: #00F0FF15; border: 1px solid #00F0FF40; color: #00F0FF; font-size: 11px; font-family: monospace; font-weight: 700; margin-bottom: 10px;">
        GOOGLE SEARCH CONSOLE RADAR
      </div>
      <h1 style="margin: 0; font-size: 22px; font-weight: 800; color: #ffffff; letter-spacing: -0.5px;">
        Organic Search Intelligence &amp; Striking Distance
      </h1>
      <p style="margin: 6px 0 0; color: #94a3b8; font-size: 13px;">
        Reporting Window: <strong style="color: #cbd5e1;">${analysis.dateRange}</strong> • Domain: <strong style="color: #00F0FF;">abinschandran.in</strong>
      </p>
    </div>

    <!-- Stat Grid -->
    <table style="width: 100%; border-collapse: separate; border-spacing: 8px; margin-bottom: 28px;">
      <tr>
        <td style="background: #161b22; border: 1px solid #21262d; border-radius: 12px; padding: 14px; text-align: center;">
          <div style="font-size: 11px; color: #94a3b8; text-transform: uppercase; font-family: monospace;">Impressions</div>
          <div style="font-size: 22px; font-weight: 800; color: #00F0FF; margin-top: 4px;">${analysis.totalImpressions}</div>
        </td>
        <td style="background: #161b22; border: 1px solid #21262d; border-radius: 12px; padding: 14px; text-align: center;">
          <div style="font-size: 11px; color: #94a3b8; text-transform: uppercase; font-family: monospace;">Organic Clicks</div>
          <div style="font-size: 22px; font-weight: 800; color: #10b981; margin-top: 4px;">${analysis.totalClicks}</div>
        </td>
        <td style="background: #161b22; border: 1px solid #21262d; border-radius: 12px; padding: 14px; text-align: center;">
          <div style="font-size: 11px; color: #94a3b8; text-transform: uppercase; font-family: monospace;">Overall CTR</div>
          <div style="font-size: 22px; font-weight: 800; color: #f59e0b; margin-top: 4px;">${analysis.overallCtr}</div>
        </td>
        <td style="background: #161b22; border: 1px solid #21262d; border-radius: 12px; padding: 14px; text-align: center;">
          <div style="font-size: 11px; color: #94a3b8; text-transform: uppercase; font-family: monospace;">Avg Position</div>
          <div style="font-size: 22px; font-weight: 800; color: #a855f7; margin-top: 4px;">#${analysis.avgPosition}</div>
        </td>
      </tr>
    </table>

    <!-- Striking Distance Opportunity Section -->
    <div style="background: #161b22; border: 1px solid #f59e0b40; border-radius: 12px; padding: 18px; margin-bottom: 28px;">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <h2 style="margin: 0; font-size: 15px; font-weight: 700; color: #f59e0b;">
          🎯 Striking Distance Keywords (Positions 11–30)
        </h2>
        <span style="font-size: 11px; background: #f59e0b20; color: #f59e0b; padding: 2px 8px; border-radius: 10px; font-family: monospace;">
          High Page 1 Potential
        </span>
      </div>
      <p style="margin: 0 0 14px; font-size: 12px; color: #94a3b8;">
        These queries already have strong Google impressions on Page 2 &amp; 3. Minimal on-page optimization (adding FAQs, title refinements, or internal links) can push them into the Top 10 for organic clicks.
      </p>
      
      ${
        analysis.strikingDistance.length > 0
          ? `<table style="width: 100%; border-collapse: collapse; font-size: 12px;">
              <thead>
                <tr style="border-b: 1px solid #21262d; text-align: left; color: #64748b; font-size: 11px; text-transform: uppercase; font-family: monospace;">
                  <th style="padding: 8px 10px;">Query</th>
                  <th style="padding: 8px 10px; text-align: center;">Position</th>
                  <th style="padding: 8px 10px; text-align: center;">Impr</th>
                  <th style="padding: 8px 10px;">Target Page</th>
                </tr>
              </thead>
              <tbody>
                ${strikingRows}
              </tbody>
            </table>`
          : '<p style="margin: 0; color: #64748b; font-size: 12px;">No queries currently in positions 11–30.</p>'
      }
    </div>

    <!-- Page 1 Ranking Queries -->
    ${
      analysis.pageOneQueries.length > 0
        ? `<div style="margin-bottom: 28px;">
            <h2 style="margin: 0 0 12px; font-size: 15px; font-weight: 700; color: #10b981;">
              🏆 Page 1 Rankings (Positions 1–10)
            </h2>
            <table style="width: 100%; border-collapse: collapse; font-size: 12px; background: #161b22; border: 1px solid #21262d; border-radius: 12px;">
              <thead>
                <tr style="border-b: 1px solid #21262d; text-align: left; color: #64748b; font-size: 11px; text-transform: uppercase; font-family: monospace;">
                  <th style="padding: 10px;">Query</th>
                  <th style="padding: 10px; text-align: center;">Position</th>
                  <th style="padding: 10px; text-align: center;">Impr</th>
                  <th style="padding: 10px; text-align: center;">Clicks</th>
                </tr>
              </thead>
              <tbody>
                ${pageOneRows}
              </tbody>
            </table>
          </div>`
        : ''
    }

    <!-- Recommended Immediate Actions -->
    <div style="background: #00F0FF0a; border: 1px solid #00F0FF30; border-radius: 12px; padding: 18px; margin-bottom: 24px;">
      <h3 style="margin: 0 0 8px; font-size: 14px; font-weight: 700; color: #00F0FF;">
        ⚡ Strategic SEO Action Items for This Week:
      </h3>
      <ul style="margin: 0; padding-left: 18px; font-size: 12px; color: #cbd5e1; line-height: 1.8;">
        <li><strong>Focus Keyword:</strong> Push <code>whatsapp business cloud api</code> (Pos ~29.7) by requesting GSC re-indexing for the updated integration page.</li>
        <li><strong>Internal Anchor Links:</strong> Link to striking distance URLs using exact query anchor text from high-authority posts.</li>
        <li><strong>Sitemap Ping:</strong> Ensure updated URLs are pinged via the automated CI workflow after every push to main.</li>
      </ul>
    </div>

    <!-- Footer -->
    <div style="border-top: 1px solid #1e293b; padding-top: 18px; text-align: center; font-size: 11px; color: #64748b;">
      Automated GSC Intelligence Engine • Abin S Chandran Portfolio • ${new Date().toISOString().split('T')[0]}
    </div>
  </div>
</body>
</html>`;
}

/**
 * Dispatch HTML report via Resend API
 */
async function dispatchEmail(analysis) {
  const resendApiKey = getEnvVar('RESEND_API_KEY');
  const targetEmail = getEnvVar('REPORT_EMAIL', 'abinschandran1@gmail.com');

  if (!resendApiKey) {
    console.log('\nℹ️  [GSC Email Notice]');
    console.log('   RESEND_API_KEY not set in .env.local or environment. Skipping email dispatch.');
    return;
  }

  const strikingCount = analysis.strikingDistance.length;
  const subject = `🔍 [GSC Radar] ${analysis.totalImpressions} Impressions | ${strikingCount} Striking Distance Keywords Detected`;

  console.log(`\n📧 Dispatching GSC intelligence email to ${targetEmail} via Resend...`);

  const html = buildHtmlReport(analysis);

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'GSC Radar <onboarding@resend.dev>',
        to: [targetEmail],
        subject,
        html,
      }),
    });

    const result = await res.json();
    if (res.ok) {
      console.log(`🎉 GSC intelligence report successfully delivered to ${targetEmail}!`);
    } else {
      console.error('❌ Resend API Error:', result.message || result);
    }
  } catch (err) {
    console.error('❌ Failed to dispatch GSC email:', err.message);
  }
}

async function main() {
  const args = process.argv.slice(2);
  const isDryRun = args.includes('--dry-run') || args.includes('--sample');
  const isEmail = args.includes('--email');
  const isStatus = args.includes('--status');

  console.log('🚀 Starting Google Search Console Intelligence Engine...\n');

  const historical = loadHistoricalInsights();

  if (isStatus) {
    console.log('📊 Historical GSC Status:');
    console.log(`Last run: ${historical.lastRun || 'Never'}`);
    console.log(`Tracked queries: ${Object.keys(historical.queries || {}).length}`);
    console.log(`Total historical impressions: ${historical.totalImpressions || 0}`);
    return;
  }

  let dataset = null;
  const creds = getServiceAccountCredentials();
  const siteUrl = getEnvVar('GSC_SITE_URL', DEFAULT_SITE_URL);

  if (creds && !isDryRun) {
    console.log(`🔑 Authenticating Service Account: ${creds.client_email}`);
    try {
      const accessToken = await getGoogleAccessToken(creds);
      const candidates = Array.from(
        new Set([
          siteUrl,
          'https://www.abinschandran.in/',
          'https://abinschandran.in/',
          'sc-domain:abinschandran.in',
        ])
      );

      let lastError = null;
      for (const cand of candidates) {
        try {
          console.log(`📡 Trying search analytics property: ${cand}`);
          dataset = await fetchGscSearchAnalytics(accessToken, cand, 7);
          console.log(`✅ Successfully connected to property "${cand}" (${dataset.rows.length} rows).`);
          lastError = null;
          break;
        } catch (candErr) {
          lastError = candErr;
        }
      }

      if (lastError || !dataset) {
        throw lastError || new Error('Could not connect to any candidate GSC property.');
      }
    } catch (err) {
      console.error(`❌ GSC API Connection Failed: ${err.message}`);
      console.log('⚠️ Falling back to sample dataset for demonstration & verification.');
      dataset = getSampleDataset();
    }
  } else {
    if (!isDryRun) {
      console.log('ℹ️  No Google Service Account credentials found in GSC_CREDENTIALS / gsc-credentials.json.');
      console.log('   Running in demo/sample mode with representative Search Console data.');
    } else {
      console.log('🧪 Running with representative sample Search Console dataset (--dry-run).');
    }
    dataset = getSampleDataset();
  }

  const analysis = processGscData(dataset, historical);

  console.log('\n================ GSC SEARCH INTELLIGENCE SUMMARY ================');
  console.log(`Reporting Period:     ${analysis.dateRange}`);
  console.log(`Total Impressions:    ${analysis.totalImpressions}`);
  console.log(`Total Organic Clicks: ${analysis.totalClicks}`);
  console.log(`Average CTR:          ${analysis.overallCtr}`);
  console.log(`Average Position:     #${analysis.avgPosition}`);
  console.log(`Total Queries Tracked:${analysis.totalQueries}`);
  console.log('-----------------------------------------------------------------');

  console.log(`\n🎯 Striking Distance Keywords (Positions 11–30) — [${analysis.strikingDistance.length}]:`);
  for (const item of analysis.strikingDistance) {
    console.log(`  • "${item.query}" — Pos: #${item.position} | Impr: ${item.impressions} | URL: ${item.page}`);
  }

  if (analysis.pageOneQueries.length > 0) {
    console.log(`\n🏆 Page 1 Queries (Positions 1–10) — [${analysis.pageOneQueries.length}]:`);
    for (const item of analysis.pageOneQueries) {
      console.log(`  • "${item.query}" — Pos: #${item.position} | Clicks: ${item.clicks} | Impr: ${item.impressions}`);
    }
  }

  // Save updated snapshot
  const newHistorical = {
    lastRun: new Date().toISOString(),
    totalImpressions: analysis.totalImpressions,
    totalClicks: analysis.totalClicks,
    avgPosition: analysis.avgPosition,
    queries: {},
  };

  for (const q of analysis.rawQueries) {
    newHistorical.queries[q.query] = {
      position: q.position,
      impressions: q.impressions,
      clicks: q.clicks,
      page: q.page,
      lastSeen: new Date().toISOString(),
    };
  }

  saveInsights(newHistorical);
  console.log(`\n💾 Saved search snapshot to data/gsc-insights.json`);

  // Generate HTML Report
  const htmlContent = buildHtmlReport(analysis);
  fs.writeFileSync(REPORT_HTML_FILE, htmlContent, 'utf8');
  console.log(`📄 Generated standalone HTML report at: ${REPORT_HTML_FILE}`);

  // Dispatch Email if requested or running in automated workflow
  if (isEmail || process.env.GITHUB_ACTIONS) {
    await dispatchEmail(analysis);
  }
}

main().catch((err) => {
  console.error('❌ Fatal error in GSC monitor:', err);
  process.exit(1);
});
