import * as cheerio from 'cheerio';
import fs from 'fs';
import path from 'path';
import { GoogleGenerativeAI } from '@google/generative-ai';

/**
 * AI-Powered Competitor Monitor & Strategic Intelligence Engine
 * Scrapes 30+ competitors, feeds real data to Gemini AI for analysis,
 * and delivers actionable insights to your inbox with a 1-click PR.
 */

const MY_SITE_URL = 'https://abinschandran.in';

const COMPETITOR_URLS = [
  // Tier 1: Direct Local & National Tech Peers
  'https://abinantony.io',
  'https://abin.edgesys.tech',
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

  // Tier 3: Karunagappally & Kollam Local Software & Web Studios
  'https://techaxlabs.com/custom-software-development/india/kerala/kollam/karunagappally',
  'https://www.webxcrafting.in/locations/web-development-company-in-karunagappally',
  'https://somskilltech.in/develop-erp-software-in-karunagappally',
  'https://www.websitevale.com/website-designing-company-in-karunagappally-north',
  'https://orangedice.org/',
  'http://tiffanysoftwaresolutions.com/',
  'https://innogreets.com/',
  'https://a1webdesignteam.com/',
  'https://www.inspirezesttechnologies.com/',
  'https://t7labs.com/',
  'https://webtraze.com/about.php',
  'https://srvinfotech.com/',
  'https://softverses.com/',
];

// ─── Scraping ─────────────────────────────────────────────────────────────────

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

// ─── Gemini AI Analysis ────────────────────────────────────────────────────────

async function runGeminiAnalysis(mySite, competitors) {
  const apiKey = getEnvVar('GEMINI_API_KEY');

  if (!apiKey) {
    console.warn('\n⚠️  GEMINI_API_KEY not set — falling back to rule-based analysis.');
    console.warn('   Add GEMINI_API_KEY to your GitHub Secrets or .env.local for AI-powered insights.\n');
    return getFallbackAnalysis(competitors);
  }

  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

  const competitorSummaries = competitors
    .slice(0, 20) // Keep prompt size manageable
    .map(
      (c) =>
        `DOMAIN: ${c.domain}
Title: ${c.title}
Meta: ${c.metaDesc}
Keywords: ${c.keywords || 'none'}
H1s: ${c.h1.join(' | ') || 'none'}
H2s: ${c.h2.join(' | ') || 'none'}
CTAs: ${c.ctas.join(' | ') || 'none'}`
    )
    .join('\n\n---\n\n');

  const mySiteSummary = `DOMAIN: ${mySite?.domain || 'abinschandran.in'}
Title: ${mySite?.title || 'N/A'}
Meta: ${mySite?.metaDesc || 'N/A'}
Keywords: ${mySite?.keywords || 'none'}
H1s: ${mySite?.h1?.join(' | ') || 'none'}
H2s: ${mySite?.h2?.join(' | ') || 'none'}
CTAs: ${mySite?.ctas?.join(' | ') || 'none'}`;

  const prompt = `You are an expert SEO strategist and conversion rate optimisation consultant.

I am Abin S Chandran — a Freelance Software Developer & Solution Architect based in Kerala, India (Karunagappally / Kollam). I specialise in Next.js SaaS apps, Node.js REST APIs, Flutter mobile apps, and AI/RAG systems. My target clients are Indian startups, small businesses in Kerala, and international founders.

Below is scraped data from my portfolio website and ${competitors.length} competitor websites.

=== MY SITE ===
${mySiteSummary}

=== COMPETITORS (${Math.min(competitors.length, 20)} shown) ===
${competitorSummaries}

Analyse this data and return a JSON object (no markdown, just raw JSON) with this exact structure:
{
  "brandHealthScore": <number 0-100, how well my site is positioned vs competitors>,
  "weekSummary": "<2-3 sentence plain-English executive summary of the competitive landscape this week>",
  "recommendations": [
    {
      "priority": "<HIGH|MEDIUM|LOW>",
      "area": "<short area name, e.g. SEO, CTA, Content, Tech Positioning>",
      "action": "<specific, actionable instruction — not generic advice>"
    }
  ],
  "keywordGaps": [
    "<keyword or phrase competitors use that I'm missing>"
  ],
  "contentOpportunities": [
    "<specific blog post title or landing page idea based on competitor gaps>"
  ]
}

Rules:
- recommendations: provide 4–6, ordered HIGH to LOW priority
- keywordGaps: provide 5–8 specific keyword phrases, not generic categories
- contentOpportunities: provide 3–5 specific, actionable content ideas
- All advice must be specific to Kerala freelance software market
- brandHealthScore: be honest, don't inflate it
- Return ONLY valid JSON, nothing else`;

  try {
    console.log('\n🤖 Sending competitor data to Gemini AI for analysis...');
    const result = await model.generateContent(prompt);
    const text = result.response.text().trim();

    // Strip markdown code fences if Gemini wraps with them
    const cleaned = text.replace(/^```(?:json)?\n?/, '').replace(/\n?```$/, '').trim();
    const parsed = JSON.parse(cleaned);

    console.log(`✅ Gemini analysis complete! Brand Health Score: ${parsed.brandHealthScore}/100`);
    console.log(`   ${parsed.weekSummary}`);

    return parsed;
  } catch (err) {
    console.error('❌ Gemini analysis failed:', err.message);
    console.warn('   Falling back to rule-based analysis...');
    return getFallbackAnalysis(competitors);
  }
}

// ─── Fallback rule-based analysis (used if no API key) ────────────────────────

function getFallbackAnalysis(competitors) {
  const keywordOpportunities = new Set();
  const ctaPatterns = [];

  competitors.forEach((comp) => {
    const combinedText = `${comp.title} ${comp.metaDesc} ${comp.keywords}`.toLowerCase();
    if (combinedText.includes('near me')) keywordOpportunities.add('"near me" local intent searches');
    if (combinedText.includes('malappuram') || combinedText.includes('calicut') || combinedText.includes('kannur'))
      keywordOpportunities.add('District landing pages: Calicut, Kochi, Trivandrum, Kannur');
    if (combinedText.includes('karunagappally') || combinedText.includes('kollam'))
      keywordOpportunities.add('Local ERP & billing software keywords for Karunagappally / Kollam');
    if (/quote|free consultation|estimate/i.test(combinedText))
      ctaPatterns.push(`${comp.domain} offers "Free Consultation / Quote"`);
  });

  return {
    brandHealthScore: 65,
    weekSummary:
      'Rule-based analysis (GEMINI_API_KEY not set). Your site covers the key Kerala freelance dev market but competitors are targeting local near-me searches. Add your Gemini API key for AI-powered insights.',
    recommendations: [
      {
        priority: 'HIGH',
        area: 'Brand Disambiguation',
        action:
          'Abin Antony (abinantony.io) targets "Freelance Laravel & PHP Developer in Kerala". Continuously emphasise "Abin S Chandran" + "Next.js / Flutter / AI/RAG" to prevent Google entity blending.',
      },
      {
        priority: 'HIGH',
        area: 'Tech Positioning',
        action:
          'Most local competitors use WordPress/PHP. Highlight your modern stack (Next.js 15, Node.js, Flutter, AI/RAG) above the fold to win higher-budget startup contracts.',
      },
      {
        priority: 'MEDIUM',
        area: 'SEO Keywords',
        action: `Expand into: ${Array.from(keywordOpportunities).join('; ') || '"near me" local intent and district-specific pages'}.`,
      },
      {
        priority: 'HIGH',
        area: 'WhatsApp CTA',
        action:
          'Competitors use direct WhatsApp CTAs with pre-filled messages. Ensure your WhatsApp links pre-fill with specific service inquiry tags.',
      },
    ],
    keywordGaps: [
      'freelance software developer near me kerala',
      'custom software development kollam',
      'web developer karunagappally',
      'flutter app developer kerala price',
      'saas mvp developer india',
    ],
    contentOpportunities: [
      'Blog: "Cost of Building a SaaS MVP with a Freelance Developer in Kerala in 2025"',
      'Blog: "Flutter vs React Native for Kerala Small Business Apps"',
      'Landing page: Freelance Software Developer Kochi',
    ],
  };
}

// ─── HTML Email Builder ────────────────────────────────────────────────────────

function buildHtmlEmail(analysis, competitors, prUrl = '') {
  const { brandHealthScore, weekSummary, recommendations, keywordGaps, contentOpportunities } = analysis;
  const dateStr = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  const prTargetUrl = prUrl || 'https://github.com/abin223804/personal_Portfolio/pulls';

  const scoreColor =
    brandHealthScore >= 75 ? '#22c55e' : brandHealthScore >= 50 ? '#55D6FF' : '#f59e0b';
  const scoreBar = `
    <div style="margin-bottom:28px;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
        <span style="color:#F2F5F7;font-size:15px;font-weight:700;">🏆 Brand Health Score vs Competitors</span>
        <span style="color:${scoreColor};font-size:22px;font-weight:900;">${brandHealthScore}<span style="font-size:14px;color:#727B8C;">/100</span></span>
      </div>
      <div style="background:#1a1f2e;border-radius:999px;height:10px;overflow:hidden;">
        <div style="background:linear-gradient(90deg,${scoreColor}80,${scoreColor});width:${brandHealthScore}%;height:100%;border-radius:999px;transition:width 0.3s;"></div>
      </div>
      <p style="color:#A7AFBD;font-size:13px;margin-top:10px;line-height:1.6;">${weekSummary}</p>
    </div>`;

  const prActionCard = `
    <div style="background:linear-gradient(135deg,rgba(34,197,94,0.12),rgba(85,214,255,0.08));border:1.5px solid #22c55e;border-radius:10px;padding:22px;margin-bottom:24px;text-align:center;">
      <div style="font-size:11px;font-weight:800;color:#22c55e;text-transform:uppercase;letter-spacing:1px;margin-bottom:6px;">⚡ Auto-Updated & Deployed to Production</div>
      <div style="font-size:16px;color:#F2F5F7;font-weight:700;margin-bottom:8px;">Live SEO & Competitor Insights Synced</div>
      <p style="font-size:13px;color:#A7AFBD;margin:0 0 16px;line-height:1.5;">
        This week's competitor intelligence and Gemini AI analysis have been automatically committed and deployed directly to <strong>main</strong>. Google and Bing have been pinged.
      </p>
      <div style="display:flex;justify-content:center;gap:12px;flex-wrap:wrap;">
        <a href="https://www.abinschandran.in" target="_blank" style="display:inline-block;background:#22c55e;color:#090B10;padding:12px 24px;border-radius:8px;font-weight:800;font-size:13px;text-decoration:none;box-shadow:0 4px 18px rgba(34,197,94,0.35);">
          👉 View Live Site (abinschandran.in) ↗
        </a>
        <a href="https://github.com/abin223804/personal_Portfolio/commits/main" target="_blank" style="display:inline-block;background:#151923;border:1px solid rgba(255,255,255,0.15);color:#F2F5F7;padding:12px 24px;border-radius:8px;font-weight:700;font-size:13px;text-decoration:none;">
          View Git Commit History ↗
        </a>
      </div>
    </div>`;

  const recRows = recommendations
    .map(
      (r) => `
    <div style="background:#151923;border-left:4px solid ${r.priority === 'HIGH' ? '#55D6FF' : r.priority === 'MEDIUM' ? '#8B7CFF' : '#727B8C'};padding:16px;margin-bottom:14px;border-radius:6px;">
      <div style="font-size:11px;font-weight:700;color:${r.priority === 'HIGH' ? '#55D6FF' : r.priority === 'MEDIUM' ? '#8B7CFF' : '#727B8C'};text-transform:uppercase;letter-spacing:1px;margin-bottom:4px;">
        ${r.priority} PRIORITY • ${r.area}
      </div>
      <div style="color:#F2F5F7;font-size:14px;line-height:1.6;">${r.action}</div>
    </div>`
    )
    .join('');

  const keywordGapRows = (keywordGaps || [])
    .map(
      (kw) =>
        `<li style="color:#A7AFBD;font-size:13px;margin-bottom:6px;line-height:1.5;">🔍 <code style="background:#1a1f2e;padding:2px 6px;border-radius:4px;color:#55D6FF;font-size:12px;">${kw}</code></li>`
    )
    .join('');

  const contentRows = (contentOpportunities || [])
    .map(
      (c) =>
        `<li style="color:#A7AFBD;font-size:13px;margin-bottom:6px;line-height:1.5;">✍️ ${c}</li>`
    )
    .join('');

  const compCards = competitors
    .slice(0, 15)
    .map(
      (c) => `
    <div style="background:#0F121A;border:1px solid rgba(255,255,255,0.08);border-radius:8px;padding:16px;margin-bottom:12px;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
        <strong style="color:#55D6FF;font-size:15px;">${c.domain}</strong>
        <a href="${c.url}" target="_blank" style="color:#8B7CFF;font-size:12px;text-decoration:none;">Visit ↗</a>
      </div>
      <p style="margin:4px 0;font-size:13px;color:#F2F5F7;"><strong>Title:</strong> ${c.title}</p>
      <p style="margin:4px 0;font-size:12px;color:#A7AFBD;"><strong>Meta:</strong> ${c.metaDesc}</p>
      <p style="margin:4px 0;font-size:12px;color:#A7AFBD;"><strong>H2s:</strong> ${c.h2.slice(0, 3).join(' • ') || 'None'}</p>
      <p style="margin:4px 0;font-size:12px;color:#727B8C;"><strong>CTAs:</strong> ${c.ctas.slice(0, 2).join(' | ') || 'None'}</p>
    </div>`
    )
    .join('');

  return `<!DOCTYPE html>
<html>
<body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background:#090B10;color:#F2F5F7;margin:0;padding:24px;">
  <div style="max-width:680px;margin:0 auto;background:#090B10;border:1px solid rgba(255,255,255,0.1);border-radius:12px;padding:28px;">

    <div style="border-bottom:1px solid rgba(255,255,255,0.1);padding-bottom:16px;margin-bottom:24px;">
      <h1 style="margin:0 0 6px;color:#55D6FF;font-size:22px;">📊 AI Competitor Intelligence Report</h1>
      <p style="margin:0;color:#A7AFBD;font-size:13px;">Powered by Gemini AI • <strong>abinschandran.in</strong> • ${dateStr}</p>
    </div>

    ${scoreBar}
    ${prActionCard}

    <div style="margin-bottom:28px;">
      <h2 style="color:#F2F5F7;font-size:16px;margin-bottom:14px;">🎯 AI-Generated Recommendations</h2>
      ${recRows}
    </div>

    ${keywordGaps?.length ? `
    <div style="margin-bottom:28px;">
      <h2 style="color:#F2F5F7;font-size:16px;margin-bottom:14px;">🔑 Keyword Gaps (Competitors Rank, You Don't)</h2>
      <ul style="padding-left:0;list-style:none;margin:0;">${keywordGapRows}</ul>
    </div>` : ''}

    ${contentOpportunities?.length ? `
    <div style="margin-bottom:28px;">
      <h2 style="color:#F2F5F7;font-size:16px;margin-bottom:14px;">✍️ Content Opportunities</h2>
      <ul style="padding-left:0;list-style:none;margin:0;">${contentRows}</ul>
    </div>` : ''}

    <div>
      <h2 style="color:#F2F5F7;font-size:16px;margin-bottom:14px;">🔎 Monitored Competitors (${competitors.length})</h2>
      ${compCards}
    </div>

    <div style="margin-top:32px;padding-top:16px;border-top:1px solid rgba(255,255,255,0.08);text-align:center;color:#727B8C;font-size:12px;">
      AI-Powered Competitor Monitor • Gemini 1.5 Flash • abinschandran.in
    </div>
  </div>
</body>
</html>`;
}

// ─── Utilities ─────────────────────────────────────────────────────────────────

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

async function dispatchEmail(htmlContent) {
  const resendApiKey = getEnvVar('RESEND_API_KEY');
  const targetEmail = getEnvVar('REPORT_EMAIL', 'abinschandran1@gmail.com');

  if (!resendApiKey) {
    console.log('\nℹ️  [Email Dispatch Notice]');
    console.log('   RESEND_API_KEY not set. Report saved locally to competitor-improvement-report.html');
    return;
  }

  console.log(`\n📧 Dispatching AI Intelligence Report to ${targetEmail} via Resend...`);
  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'AI Competitor Monitor <onboarding@resend.dev>',
        to: [targetEmail],
        subject: `🤖 Live SEO & AI Competitor Intelligence (Auto-Updated) — ${new Date().toLocaleDateString()}`,
        html: htmlContent,
      }),
    });

    const result = await res.json();
    if (res.ok) {
      console.log('🎉 AI-powered report successfully delivered to your inbox!');
    } else {
      console.error('❌ Resend API Error:', result.message);
    }
  } catch (err) {
    console.error('❌ Failed to dispatch email:', err.message);
  }
}

// ─── Main ──────────────────────────────────────────────────────────────────────

async function main() {
  console.log('🚀 Running AI-Powered Competitor Intelligence Engine...\n');

  // 1. Scrape my site
  console.log(`[Baseline] Crawling my site: ${MY_SITE_URL}`);
  const mySite = await fetchAndParse(MY_SITE_URL);

  // 2. Scrape competitors
  const competitors = [];
  for (const url of COMPETITOR_URLS) {
    console.log(`[Competitor] Crawling: ${url}`);
    const data = await fetchAndParse(url);
    if (data) competitors.push(data);
    await new Promise((r) => setTimeout(r, 800));
  }

  console.log(`\n✅ Scraped ${competitors.length} / ${COMPETITOR_URLS.length} competitors successfully.`);

  // 3. Gemini AI analysis
  const analysis = await runGeminiAnalysis(mySite, competitors);

  // 4. Log recommendations to console
  console.log('\n================ AI INTELLIGENCE REPORT ================');
  console.log(`\n🏆 Brand Health Score: ${analysis.brandHealthScore}/100`);
  console.log(`📝 ${analysis.weekSummary}`);
  console.log('\n🎯 Recommendations:');
  analysis.recommendations.forEach((r, idx) => {
    console.log(`\n  [${idx + 1}] [${r.priority}] ${r.area}`);
    console.log(`      👉 ${r.action}`);
  });
  if (analysis.keywordGaps?.length) {
    console.log('\n🔑 Keyword Gaps:');
    analysis.keywordGaps.forEach((kw) => console.log(`  - ${kw}`));
  }
  if (analysis.contentOpportunities?.length) {
    console.log('\n✍️  Content Opportunities:');
    analysis.contentOpportunities.forEach((c) => console.log(`  - ${c}`));
  }
  console.log('\n=========================================================\n');

  // 5. Save enriched insights JSON
  const insightsPath = path.resolve(process.cwd(), 'data', 'competitor-insights.json');
  fs.writeFileSync(
    insightsPath,
    JSON.stringify(
      {
        lastUpdated: new Date().toISOString(),
        monitoredTargetsCount: competitors.length,
        brandHealthScore: analysis.brandHealthScore,
        weekSummary: analysis.weekSummary,
        recommendations: analysis.recommendations,
        keywordGaps: analysis.keywordGaps || [],
        contentOpportunities: analysis.contentOpportunities || [],
      },
      null,
      2
    ),
    'utf-8'
  );
  console.log(`💡 Saved AI insights to: ${insightsPath}`);

  // 6. Determine PR URL
  const prArgIdx = process.argv.indexOf('--pr-url');
  const prUrl =
    process.env.PR_URL ||
    (prArgIdx !== -1 && process.argv[prArgIdx + 1] ? process.argv[prArgIdx + 1] : '') ||
    'https://github.com/abin223804/personal_Portfolio/pulls';

  // 7. Generate HTML report
  const html = buildHtmlEmail(analysis, competitors, prUrl);
  const htmlPath = path.resolve(process.cwd(), 'competitor-improvement-report.html');
  fs.writeFileSync(htmlPath, html, 'utf-8');
  console.log(`📄 Saved HTML report to: ${htmlPath}`);

  // 8. Save full JSON snapshot
  const jsonPath = path.resolve(process.cwd(), 'competitor-analysis.json');
  fs.writeFileSync(
    jsonPath,
    JSON.stringify({ mySite, competitors, analysis }, null, 2),
    'utf-8'
  );
  console.log(`💾 Saved full JSON snapshot to: ${jsonPath}`);

  // 9. Send email (unless --no-email flag)
  if (!process.argv.includes('--no-email')) {
    await dispatchEmail(html);
  }
}

main();
