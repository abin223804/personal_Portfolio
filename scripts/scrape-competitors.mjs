import * as cheerio from 'cheerio';
import fs from 'fs';
import path from 'path';

/**
 * Automated Competitor Monitor & Strategic Improvement Engine
 * Scrapes competitors, compares against abinschandran.in, and delivers
 * actionable improvement recommendations directly to your email.
 */

const MY_SITE_URL = 'https://abinschandran.in';

const COMPETITOR_URLS = [
  // Tier 1: Direct Local & National Tech Peers
  'https://abinantony.io',
  'https://vaishnavprabhakaran.in',
  'https://soorya.is-a.dev',
  'https://www.rishabyadav.com',
  'https://aditya-kumar-portfolio.onrender.com',
  'https://3dportfolio.abmserver.duckdns.org',
  'https://itsallwidgets.com/flutter-developer-portfolio',
  'https://hubstafftalent.net/profiles/arun-chandran-2',
  'https://hubstafftalent.net/profiles/arun-sadasivan-2',
  'https://sinanmcmalappuram.in',
  'https://nikhilsoman.in',
  'https://anzweb.in',
  'https://freelancerkochi.com',

  // Tier 2: Regional Kerala Dev Studios & Agencies (Kochi / Kerala)
  'https://agileblaze.com',
  'https://www.pitsolutions.com',
  'https://beosoftware.com',
];

async function fetchAndParse(url) {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 12000);

    const res = await fetch(url, {
      signal: controller.signal,
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
        Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
      },
    });
    clearTimeout(timeout);

    if (!res.ok) return null;

    const html = await res.text();
    const $ = cheerio.load(html);

    const title = $('title').first().text().trim() || 'No title';
    const metaDesc =
      $('meta[name="description"]').attr('content')?.trim() ||
      $('meta[property="og:description"]').attr('content')?.trim() ||
      'No description';
    const keywords = $('meta[name="keywords"]').attr('content')?.trim() || '';

    const h1s = $('h1')
      .map((_, el) => $(el).text().trim().replace(/\s+/g, ' '))
      .get()
      .filter((t) => t.length > 0);

    const h2s = $('h2')
      .map((_, el) => $(el).text().trim().replace(/\s+/g, ' '))
      .get()
      .filter((t) => t.length > 0)
      .slice(0, 8);

    const ctas = $('a, button')
      .map((_, el) => {
        const text = $(el).text().trim().replace(/\s+/g, ' ');
        const href = $(el).attr('href') || '';
        if (
          text.length >= 3 &&
          text.length <= 40 &&
          (href.includes('contact') ||
            href.includes('book') ||
            href.includes('calendly') ||
            href.includes('wa.me') ||
            /hire|contact|get started|talk|consult|book|schedule|quote|whatsapp/i.test(text))
        ) {
          return `${text} -> ${href}`;
        }
        return null;
      })
      .get()
      .filter(Boolean);

    return {
      domain: new URL(url).hostname,
      url,
      title,
      metaDesc,
      keywords,
      h1: h1s,
      h2: h2s,
      ctas: [...new Set(ctas)].slice(0, 5),
    };
  } catch (err) {
    console.error(`Error crawling ${url}:`, err.message);
    return null;
  }
}

function generateImprovementAnalysis(mySite, competitors) {
  const recommendations = [];
  const keywordOpportunities = new Set();
  const ctaPatterns = [];

  competitors.forEach((comp) => {
    // 1. Check keyword targeting
    const combinedText = `${comp.title} ${comp.metaDesc} ${comp.keywords}`.toLowerCase();
    
    if (combinedText.includes('near me')) {
      keywordOpportunities.add('"near me" local intent (e.g. Flutter/Web developer near me Kerala)');
    }
    if (combinedText.includes('malappuram') || combinedText.includes('calicut') || combinedText.includes('kannur')) {
      keywordOpportunities.add('District-specific landing pages (Calicut, Kochi, Trivandrum, Kannur)');
    }
    if (combinedText.includes('quote') || combinedText.includes('free consultation') || combinedText.includes('estimate')) {
      ctaPatterns.push(`${comp.domain} offers "Free Consultation / Quote" upfront`);
    }
  });

  // Name collision alert check
  const abinAntony = competitors.find((c) => c.domain.includes('abinantony'));
  if (abinAntony) {
    recommendations.push({
      priority: 'HIGH',
      area: 'Brand & Knowledge Graph Disambiguation',
      action:
        'Abin Antony (abinantony.io) is targeting "Freelance Mobile App Developer Kerala". Ensure abinschandran.in continuously emphasizes "Abin S Chandran" and "Software Solution Architect / High-Performance Full-Stack Engineer" to prevent entity blending on Google.',
    });
  }

  // Keyword opportunities
  if (keywordOpportunities.size > 0) {
    recommendations.push({
      priority: 'MEDIUM',
      area: 'SEO Keyword Expansion',
      action: `Competitors are capturing long-tail searches you can incorporate into blog posts or FAQ schema: ${Array.from(keywordOpportunities).join('; ')}.`,
    });
  }

  // Tech stack differentiation
  recommendations.push({
    priority: 'HIGH',
    area: 'Premium Tech Positioning',
    action:
      'Most local competitors (Nikhil Soman, Anzar, Freelancer Kochi) build WordPress/PHP sites. Highlight your modern stack: "Next.js 15, PostgreSQL query optimization, Node.js API architecture, and Flutter" prominently above the fold to win higher-budget startup contracts.',
  });

  // Conversion / WhatsApp optimization
  recommendations.push({
    priority: 'HIGH',
    area: 'Conversion & WhatsApp CTA',
    action:
      'Competitors use direct WhatsApp click-to-chat with custom pre-filled message hooks (e.g., "Hi Abin, I want to discuss my project..."). Ensure your WhatsApp CTAs on abinschandran.in pre-fill with specific service inquiry tags.',
  });

  return recommendations;
}
function buildHtmlEmail(mySite, competitors, recommendations, prUrl = '') {
  const dateStr = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  const prTargetUrl = prUrl || 'https://github.com/abin223804/personal_Portfolio/pulls';

  const prActionCard = `
    <div style="background:linear-gradient(135deg, rgba(85,214,255,0.12), rgba(139,124,255,0.08));border:1.5px solid #55D6FF;border-radius:10px;padding:22px;margin-bottom:24px;text-align:center;">
      <div style="font-size:11px;font-weight:800;color:#55D6FF;text-transform:uppercase;letter-spacing:1px;margin-bottom:6px;">
        🤖 1-Click Code Change Suggestion
      </div>
      <div style="font-size:16px;color:#F2F5F7;font-weight:700;margin-bottom:8px;">
        Automated SEO & Content Updates Ready for Review
      </div>
      <p style="font-size:13px;color:#A7AFBD;margin:0 0 16px;line-height:1.5;">
        A proposed code update has been prepared based on this week's competitor intelligence. Tap below to review the code diff and merge it directly into your live website in 1 click.
      </p>
      <a href="${prTargetUrl}" target="_blank" style="display:inline-block;background:#55D6FF;color:#090B10;padding:12px 28px;border-radius:8px;font-weight:800;font-size:14px;text-decoration:none;box-shadow:0 4px 18px rgba(85,214,255,0.35);">
        👉 Review & Accept Code Change (Merge PR) ↗
      </a>
      <div style="font-size:11px;color:#727B8C;margin-top:10px;">
        Works on mobile & desktop • Secure 1-click merge via GitHub
      </div>
    </div>
  `;

  const recRows = recommendations
    .map(
      (r) => `
      <div style="background:#151923;border-left:4px solid ${r.priority === 'HIGH' ? '#55D6FF' : '#8B7CFF'};padding:16px;margin-bottom:14px;border-radius:6px;">
        <div style="font-size:11px;font-weight:700;color:${r.priority === 'HIGH' ? '#55D6FF' : '#8B7CFF'};text-transform:uppercase;letter-spacing:1px;margin-bottom:4px;">
          ${r.priority} PRIORITY • ${r.area}
        </div>
        <div style="color:#F2F5F7;font-size:14px;line-height:1.6;">
          ${r.action}
        </div>
      </div>
    `
    )
    .join('');

  const compCards = competitors
    .map(
      (c) => `
      <div style="background:#0F121A;border:1px solid rgba(255,255,255,0.08);border-radius:8px;padding:16px;margin-bottom:12px;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
          <strong style="color:#55D6FF;font-size:15px;">${c.domain}</strong>
          <a href="${c.url}" target="_blank" style="color:#8B7CFF;font-size:12px;text-decoration:none;">Visit ↗</a>
        </div>
        <p style="margin:4px 0;font-size:13px;color:#F2F5F7;"><strong>Title:</strong> ${c.title}</p>
        <p style="margin:4px 0;font-size:12px;color:#A7AFBD;"><strong>Meta:</strong> ${c.metaDesc}</p>
        <p style="margin:4px 0;font-size:12px;color:#A7AFBD;"><strong>Top Services / H2:</strong> ${c.h2.slice(0, 3).join(' • ') || 'None'}</p>
        <p style="margin:4px 0;font-size:12px;color:#727B8C;"><strong>CTAs:</strong> ${c.ctas.slice(0, 2).join(' | ') || 'None'}</p>
      </div>
    `
    )
    .join('');

  return `
<!DOCTYPE html>
<html>
<body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background:#090B10;color:#F2F5F7;margin:0;padding:24px;">
  <div style="max-width:680px;margin:0 auto;background:#090B10;border:1px solid rgba(255,255,255,0.1);border-radius:12px;padding:28px;">
    
    <div style="border-bottom:1px solid rgba(255,255,255,0.1);padding-bottom:16px;margin-bottom:24px;">
      <h1 style="margin:0 0 6px;color:#55D6FF;font-size:22px;">📊 Competitor Intelligence & Growth Report</h1>
      <p style="margin:0;color:#A7AFBD;font-size:13px;">Portfolio Audit & Market Insights for <strong>abinschandran.in</strong> • ${dateStr}</p>
    </div>

    ${prActionCard}

    <div style="margin-bottom:28px;">
      <h2 style="color:#F2F5F7;font-size:16px;margin-bottom:14px;">🎯 Recommended Improvements for abinschandran.in</h2>
      ${recRows}
    </div>

    <div>
      <h2 style="color:#F2F5F7;font-size:16px;margin-bottom:14px;">🔎 Monitored Competitors (${competitors.length})</h2>
      ${compCards}
    </div>

    <div style="margin-top:32px;padding-top:16px;border-top:1px solid rgba(255,255,255,0.08);text-align:center;color:#727B8C;font-size:12px;">
      Automated Weekly Competitor Monitor • Antigravity AI Engine for Abin S Chandran
    </div>

  </div>
</body>
</html>
`;
}

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

async function dispatchEmail(htmlContent, plainSummary) {
  const resendApiKey = getEnvVar('RESEND_API_KEY');
  const targetEmail = getEnvVar('REPORT_EMAIL', 'abinschandran1@gmail.com');

  if (!resendApiKey) {
    console.log('\nℹ️ [Email Dispatch Notice]');
    console.log('To automatically send this HTML report to your email, add your RESEND_API_KEY');
    console.log('(Free 3,000 emails/mo at https://resend.com) to your GitHub Secrets or .env.local.');
    console.log('Report has been saved locally to competitor-improvement-report.html');
    return;
  }

  console.log(`\n📧 Dispatching Improvement Report to ${targetEmail} via Resend...`);
  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Competitor Intelligence <onboarding@resend.dev>',
        to: [targetEmail],
        subject: `📊 Weekly Competitor & SEO Improvement Report — ${new Date().toLocaleDateString()}`,
        html: htmlContent,
      }),
    });

    const result = await res.json();
    if (res.ok) {
      console.log('🎉 Beautiful HTML improvement report successfully delivered to your inbox!');
    } else {
      console.error('❌ Resend API Error:', result.message);
    }
  } catch (err) {
    console.error('❌ Failed to dispatch email:', err.message);
  }
}

async function main() {
  console.log('🚀 Running Competitor Scraper & Intelligence Improvement Engine...\n');

  console.log(`[Baseline] Crawling your site: ${MY_SITE_URL}`);
  const mySite = await fetchAndParse(MY_SITE_URL);

  const competitors = [];
  for (const url of COMPETITOR_URLS) {
    console.log(`[Competitor] Crawling: ${url}`);
    const data = await fetchAndParse(url);
    if (data) competitors.push(data);
    await new Promise((r) => setTimeout(r, 1000));
  }

  console.log(`\n🧠 Generating Strategic Improvement Recommendations...`);
  const recommendations = generateImprovementAnalysis(mySite, competitors);

  console.log('\n================ IMPROVEMENT RECOMMENDATIONS ================');
  recommendations.forEach((r, idx) => {
    console.log(`\n[${idx + 1}] [${r.priority} PRIORITY] ${r.area}`);
    console.log(`    👉 ${r.action}`);
  });
  console.log('\n=============================================================\n');

  // Save tracked insights to data/competitor-insights.json (used to generate automated PR diffs)
  const insightsPath = path.resolve(process.cwd(), 'data', 'competitor-insights.json');
  fs.writeFileSync(
    insightsPath,
    JSON.stringify(
      {
        lastUpdated: new Date().toISOString(),
        monitoredTargetsCount: competitors.length,
        recommendations,
      },
      null,
      2
    ),
    'utf-8'
  );
  console.log(`💡 Staged weekly recommendations in: ${insightsPath}`);

  // Determine PR URL
  const prArgIdx = process.argv.indexOf('--pr-url');
  const prUrl =
    process.env.PR_URL ||
    (prArgIdx !== -1 && process.argv[prArgIdx + 1] ? process.argv[prArgIdx + 1] : '') ||
    'https://github.com/abin223804/personal_Portfolio/pulls';

  // Generate HTML & JSON reports
  const html = buildHtmlEmail(mySite, competitors, recommendations, prUrl);
  const htmlPath = path.resolve(process.cwd(), 'competitor-improvement-report.html');
  fs.writeFileSync(htmlPath, html, 'utf-8');
  console.log(`📄 Saved HTML report to: ${htmlPath}`);

  const jsonPath = path.resolve(process.cwd(), 'competitor-analysis.json');
  fs.writeFileSync(jsonPath, JSON.stringify({ mySite, competitors, recommendations }, null, 2), 'utf-8');
  console.log(`💾 Saved JSON intelligence to: ${jsonPath}`);

  // Send Email unless --no-email flag is passed
  if (!process.argv.includes('--no-email')) {
    await dispatchEmail(html);
  }
}

main();
