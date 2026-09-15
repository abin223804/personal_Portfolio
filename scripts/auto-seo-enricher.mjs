import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { GoogleGenerativeAI } from '@google/generative-ai';

/**
 * Autonomous SEO Content Enricher (GSC + Gemini AI)
 *
 * Workflow:
 * 1. Reads striking-distance queries (Positions 11–30) from data/gsc-insights.json.
 * 2. Groups queries by target landing page (e.g. /integrations/razorpay, /blog/...).
 * 3. Uses Gemini AI to draft authoritative, technically grounded FAQs addressing the exact queries.
 * 4. Merges generated FAQs into data/seo-enrichments.json.
 * 5. Executes a mandatory `npm run build` safeguard. If build fails, auto-rolls back.
 * 6. Dispatches an executive notification to abinschandran1@gmail.com via Resend.
 */

const INSIGHTS_FILE = path.resolve(process.cwd(), 'data', 'gsc-insights.json');
const ENRICHMENTS_FILE = path.resolve(process.cwd(), 'data', 'seo-enrichments.json');

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

function loadJson(file, fallback = {}) {
  try {
    if (fs.existsSync(file)) {
      return JSON.parse(fs.readFileSync(file, 'utf8'));
    }
  } catch (e) {
    console.warn(`⚠️ Could not load ${file}:`, e.message);
  }
  return fallback;
}

function saveJson(file, data) {
  const dir = path.dirname(file);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(file, JSON.stringify(data, null, 2), 'utf8');
}

/**
 * System prompt instructing Gemini to act as Abin S Chandran
 */
const SYSTEM_PROMPT = `
You are the AI SEO Engineering Copilot for Abin S Chandran (https://www.abinschandran.in).
Abin is a Senior Freelance Software Developer & Solution Architect based in Kochi / Kerala, India, delivering enterprise-grade Next.js 15, Flutter, Node.js, and API integrations worldwide.

Your task:
Analyze a list of real Google search queries where one of Abin's pages is ranking on Page 2 or 3 (positions 11–30, high opportunity).
Generate 1 to 2 high-impact, technical FAQ questions and answers that directly solve the searcher's intent.

Strict Guidelines:
1. Technical depth: Speak like a seasoned principal engineer. Include architectural nuance, security, latency, protocols, or official API mechanics (Meta Graph API, Razorpay Webhook Signatures, Flutter BLoC, etc.).
2. Zero marketing fluff: No generic buzzwords ("revolutionary", "cutting-edge", "game-changer"). Be concise, authoritative, and direct.
3. Local/Regional relevance when applicable: If query mentions Kerala, India, or UPI, reflect Indian payment/compliance realities accurately.
4. Return ONLY a valid JSON array of objects with "question" and "answer" properties.
Example format:
[
  {
    "question": "How do you verify Razorpay webhook signatures in Node.js to prevent spoofing?",
    "answer": "Razorpay sends an X-Razorpay-Signature header containing an HMAC-SHA256 hash. In Node.js, you compute the digest of the raw request body using your webhook secret via crypto.createHmac('sha256', secret).update(rawBody).digest('hex') and perform a constant-time comparison."
  }
]
`;

async function generateFaqsWithGemini(pageUrl, queries, apiKey) {
  if (!apiKey) {
    return queries.slice(0, 2).map((q) => ({
      question: `What are the production requirements for ${q.query}?`,
      answer: `Implementing ${q.query} in high-throughput applications requires strict state synchronization, cryptographic request verification, and queue-buffered rate limit handling to prevent dropped events and latency spikes.`,
    }));
  }

  const genAI = new GoogleGenerativeAI(apiKey);
  
  // Try newer models first with fallback
  const models = ['gemini-2.5-flash', 'gemini-1.5-flash'];
  let lastError = null;

  const prompt = `
Landing Page URL: ${pageUrl}
Target Search Queries to Answer:
${queries.map((q) => `- "${q.query}" (Current Position: #${q.position}, Impressions: ${q.impressions})`).join('\n')}

Generate 1 or 2 targeted FAQs directly addressing these queries.
Return ONLY valid JSON matching: [{"question": "...", "answer": "..."}]
`;

  for (const modelName of models) {
    try {
      const model = genAI.getGenerativeModel({
        model: modelName,
        systemInstruction: SYSTEM_PROMPT,
        generationConfig: {
          responseMimeType: 'application/json',
          temperature: 0.2,
        },
      });

      const result = await model.generateContent(prompt);
      const text = result.response.text();
      const parsed = JSON.parse(text);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    } catch (err) {
      lastError = err;
    }
  }

  throw lastError || new Error('Failed to generate FAQs with Gemini');
}

/**
 * Dispatch Email Report via Resend
 */
async function dispatchEnrichmentEmail(updatedPages) {
  const resendApiKey = getEnvVar('RESEND_API_KEY');
  const targetEmail = getEnvVar('REPORT_EMAIL', 'abinschandran1@gmail.com');

  if (!resendApiKey) {
    console.log('ℹ️  RESEND_API_KEY not found. Skipping auto-enrichment email.');
    return;
  }

  const pageCount = Object.keys(updatedPages).length;
  let totalFaqs = 0;
  for (const p of Object.values(updatedPages)) {
    totalFaqs += p.newFaqs.length;
  }

  const subject = `🤖 [Auto-SEO Engine] ${totalFaqs} New FAQs Auto-Enriched across ${pageCount} Pages`;

  const sectionsHtml = Object.entries(updatedPages)
    .map(
      ([url, data]) => `
    <div style="background: #161b22; border: 1px solid #21262d; border-radius: 12px; padding: 18px; margin-bottom: 20px;">
      <div style="margin-bottom: 12px;">
        <span style="font-size: 11px; font-family: monospace; background: #00F0FF15; color: #00F0FF; padding: 2px 8px; border-radius: 4px; border: 1px solid #00F0FF40;">TARGET PAGE</span>
        <h3 style="margin: 8px 0 4px; font-size: 15px; color: #ffffff;">
          <a href="${url}" style="color: #00E5FF; text-decoration: none;">${url.replace('https://www.abinschandran.in', '') || '/'}</a>
        </h3>
        <p style="margin: 0; font-size: 12px; color: #94a3b8;">
          Triggered by queries: ${data.queries.map((q) => `<code>"${q}"</code>`).join(', ')}
        </p>
      </div>

      <div style="border-top: 1px solid #21262d; padding-top: 12px;">
        ${data.newFaqs
          .map(
            (faq) => `
          <div style="margin-bottom: 14px;">
            <div style="font-size: 13px; font-weight: 700; color: #f8fafc; margin-bottom: 4px;">Q: ${faq.question}</div>
            <div style="font-size: 12px; color: #cbd5e1; line-height: 1.6;">A: ${faq.answer}</div>
          </div>`
          )
          .join('')}
      </div>
    </div>`
    )
    .join('');

  const html = `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin: 0; padding: 0; background-color: #07090E; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #e2e8f0;">
  <div style="max-width: 680px; margin: 24px auto; background-color: #0d1117; border: 1px solid #1e293b; border-radius: 16px; padding: 32px 28px;">
    
    <div style="border-bottom: 1px solid #1e293b; padding-bottom: 20px; margin-bottom: 24px;">
      <div style="display: inline-block; padding: 4px 12px; border-radius: 20px; background: #10b98115; border: 1px solid #10b98140; color: #10b981; font-size: 11px; font-family: monospace; font-weight: 700; margin-bottom: 10px;">
        AUTONOMOUS SEO ENGINE • OPTION A
      </div>
      <h1 style="margin: 0; font-size: 22px; font-weight: 800; color: #ffffff;">
        Live Content Auto-Enriched &amp; Verified
      </h1>
      <p style="margin: 6px 0 0; color: #94a3b8; font-size: 13px;">
        GSC Striking Distance radar matched high-opportunity queries and automatically enriched live website structured FAQs.
      </p>
    </div>

    ${sectionsHtml}

    <div style="background: #10b9810a; border: 1px solid #10b98130; border-radius: 12px; padding: 14px; margin-bottom: 24px; font-size: 12px; color: #cbd5e1;">
      🛡️ <strong>Safety Build Verified:</strong> <code>npm run build</code> passed with 0 errors before deployment. Vercel is now deploying these changes automatically.
    </div>

    <div style="border-top: 1px solid #1e293b; padding-top: 18px; text-align: center; font-size: 11px; color: #64748b;">
      Autonomous Content Pipeline • Abin S Chandran Portfolio
    </div>
  </div>
</body>
</html>`;

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Auto-SEO Engine <onboarding@resend.dev>',
        to: [targetEmail],
        subject,
        html,
      }),
    });
    if (res.ok) {
      console.log(`🎉 Auto-enrichment notification successfully sent to ${targetEmail}!`);
    } else {
      const err = await res.json();
      console.error('❌ Resend API Error:', err.message || err);
    }
  } catch (e) {
    console.error('❌ Failed to send email:', e.message);
  }
}

async function main() {
  const args = process.argv.slice(2);
  const isDryRun = args.includes('--dry-run');
  const isForce = args.includes('--force');

  console.log('⚡ Starting Autonomous SEO Content Enricher...\n');

  const insights = loadJson(INSIGHTS_FILE);
  if (!insights || !insights.queries || Object.keys(insights.queries).length === 0) {
    console.log('ℹ️  No search queries found in data/gsc-insights.json. Run "npm run gsc:monitor" first.');
    return;
  }

  const enrichments = loadJson(ENRICHMENTS_FILE, {});
  const geminiApiKey = getEnvVar('GEMINI_API_KEY');

  if (!geminiApiKey && !isDryRun) {
    console.error('❌ GEMINI_API_KEY not found in environment or .env.local!');
    console.log('   Please add GEMINI_API_KEY to enable autonomous live content generation.');
    console.log('   (Tip: You can run with --dry-run to simulate generation with built-in templates.)');
    process.exit(1);
  } else if (!geminiApiKey && isDryRun) {
    console.log('ℹ️  GEMINI_API_KEY not set locally. Running --dry-run simulation with template generation.');
  }

  // 1. Filter queries in striking distance (Positions 11 to 30)
  const candidateQueries = Object.entries(insights.queries)
    .filter(([_, q]) => q.position > 10 && q.position <= 30)
    .map(([text, q]) => ({
      query: text,
      page: q.page,
      position: q.position,
      impressions: q.impressions,
    }));

  console.log(`Found ${candidateQueries.length} striking-distance query events.`);

  // 2. Group by target URL
  const byPage = {};
  for (const q of candidateQueries) {
    if (!byPage[q.page]) byPage[q.page] = [];
    byPage[q.page].push(q);
  }

  const updatedPages = {};
  let totalNewFaqs = 0;

  for (const [pageUrl, queries] of Object.entries(byPage)) {
    const normUrl = pageUrl.replace('https://www.abinschandran.in', '') || '/';
    const existing = enrichments[normUrl] || { faqs: [], sourceQueries: [] };
    const existingFaqs = existing.faqs || [];
    const processedQueries = new Set(existing.sourceQueries || []);

    // Filter queries not yet processed
    const newQueries = queries.filter((q) => !processedQueries.has(q.query));

    if (newQueries.length === 0 && !isForce) {
      console.log(`✨ Page "${normUrl}" is already up-to-date. Skipping.`);
      continue;
    }

    console.log(`\n🧠 Generating AI FAQs for "${normUrl}" based on ${newQueries.length} queries...`);
    newQueries.forEach((q) => console.log(`   ↳ "${q.query}" (Pos #${q.position}, Impr: ${q.impressions})`));

    try {
      const generated = await generateFaqsWithGemini(pageUrl, newQueries, geminiApiKey);
      console.log(`✅ Gemini drafted ${generated.length} high-quality FAQ(s).`);

      const combinedFaqs = [...existingFaqs, ...generated];
      const combinedQueries = Array.from(new Set([...Array.from(processedQueries), ...newQueries.map((q) => q.query)]));

      enrichments[normUrl] = {
        faqs: combinedFaqs,
        sourceQueries: combinedQueries,
        lastEnriched: new Date().toISOString(),
      };

      updatedPages[pageUrl] = {
        newFaqs: generated,
        queries: newQueries.map((q) => q.query),
      };

      totalNewFaqs += generated.length;
    } catch (err) {
      console.error(`❌ Failed to enrich "${normUrl}":`, err.message);
    }
  }

  if (totalNewFaqs === 0) {
    console.log('\n✨ All striking-distance pages are already enriched! No new content needed.');
    return;
  }

  // 3. Save backup before testing build
  const backup = JSON.stringify(loadJson(ENRICHMENTS_FILE, {}));

  // Write new enrichments
  saveJson(ENRICHMENTS_FILE, enrichments);
  console.log(`\n💾 Saved updated enrichments to data/seo-enrichments.json (${totalNewFaqs} new FAQs).`);

  if (isDryRun) {
    console.log('🧪 Run was in --dry-run mode. Reverting file changes...');
    fs.writeFileSync(ENRICHMENTS_FILE, backup, 'utf8');
    return;
  }

  // 4. Run Build Safeguard Test
  console.log('\n🛡️ Running build safeguard verification (`npm run build`)...');
  try {
    execSync('npm run build', { stdio: 'inherit' });
    console.log('✅ Build safeguard passed with 0 errors! Changes are production-safe.');
  } catch (buildErr) {
    console.error('❌ Build failed! Rolling back data/seo-enrichments.json to prevent site breakage...');
    fs.writeFileSync(ENRICHMENTS_FILE, backup, 'utf8');
    process.exit(1);
  }

  // 5. Dispatch Email Notification
  console.log('\n📧 Dispatching auto-enrichment digest email...');
  await dispatchEnrichmentEmail(updatedPages);

  console.log('\n🏁 Autonomous SEO Enrichment Complete! 🚀');
}

main().catch((err) => {
  console.error('❌ Fatal error in auto-seo-enricher:', err);
  process.exit(1);
});
