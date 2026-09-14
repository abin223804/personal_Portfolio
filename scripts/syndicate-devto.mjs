import fs from 'fs';
import path from 'path';
import { BLOG_POSTS } from '../data/blog.js';

/**
 * Automated High-Authority Backlink & Content Syndication Engine (DEV.to)
 *
 * Automatically syndicates blog posts from data/blog.ts to DEV.to (DA 91)
 * with official canonical_url and embedded geo-targeted backlinks to:
 * - https://www.abinschandran.in
 * - https://www.abinschandran.in/freelance-software-developer-kochi
 * - https://www.abinschandran.in/freelance-software-developer-kerala
 * - https://www.abinschandran.in/hire-web-developer
 */

const SYNDICATION_FILE = path.resolve(process.cwd(), 'data', 'syndication-status.json');
const BASE_URL = 'https://www.abinschandran.in';

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

function loadSyndicationStatus() {
  try {
    if (fs.existsSync(SYNDICATION_FILE)) {
      return JSON.parse(fs.readFileSync(SYNDICATION_FILE, 'utf8'));
    }
  } catch (err) {
    console.warn('⚠️ Could not load syndication status:', err.message);
  }
  return { devto: {}, hashnode: {}, medium: {} };
}

function saveSyndicationStatus(status) {
  try {
    fs.writeFileSync(SYNDICATION_FILE, JSON.stringify(status, null, 2), 'utf8');
  } catch (err) {
    console.error('❌ Failed to save syndication status:', err.message);
  }
}

/**
 * Clean & map tags to valid DEV.to tags (max 4, lowercase, alphanumeric only)
 */
function normalizeTags(post) {
  const defaultCategoryTags = {
    Flutter: ['flutter', 'mobile', 'dart', 'architecture'],
    'Node.js': ['nodejs', 'javascript', 'backend', 'api'],
    'Next.js': ['nextjs', 'react', 'webdev', 'typescript'],
    Architecture: ['architecture', 'webdev', 'programming', 'devops'],
    SaaS: ['saas', 'webdev', 'startups', 'nextjs'],
  };

  const rawTags = [
    ...(defaultCategoryTags[post.category] || []),
    ...(post.tags || []).map((t) =>
      t.toLowerCase().replace(/[^a-z0-9]/g, '').trim()
    ),
  ];

  const uniqueTags = [...new Set(rawTags.filter((t) => t && t.length <= 20))];
  return uniqueTags.slice(0, 4);
}

/**
 * Build rich markdown with canonical attribution and contextual authority backlinks
 */
function buildMarkdownPayload(post) {
  const canonicalUrl = `${BASE_URL}/blog/${post.slug}`;

  const backlinkFooter = `
---

### 🏛️ About the Author & Original Publication

This architectural guide was originally published on [**abinschandran.in**](${canonicalUrl}).

**Abin S Chandran** is a **Senior Freelance Software Developer & Solution Architect** serving clients in [**Kochi & Infopark**](${BASE_URL}/freelance-software-developer-kochi), [**Kerala**](${BASE_URL}/freelance-software-developer-kerala), and worldwide. He specializes in high-velocity Next.js 15 SaaS platforms, 60fps Flutter mobile applications, sub-10ms Node.js enterprise APIs, and production AI/RAG integrations.

👉 **Planning a custom software project or SaaS MVP?** [**Hire Abin or Request an Architecture Consultation ↗**](${BASE_URL}/hire-web-developer)
`;

  return `${post.content.trim()}

${backlinkFooter.trim()}
`;
}

async function publishToDevTo(post, isDraft = false, isDryRun = false) {
  const canonicalUrl = `${BASE_URL}/blog/${post.slug}`;
  const tags = normalizeTags(post);
  const markdown = buildMarkdownPayload(post);

  console.log(`\n───────────────────────────────────────────────────`);
  console.log(`📌 Post: "${post.title}"`);
  console.log(`🔗 Canonical: ${canonicalUrl}`);
  console.log(`🏷️  Tags: ${tags.join(', ')}`);
  console.log(`📄 Mode: ${isDraft ? 'Draft' : 'Live Publication'}`);

  if (isDryRun) {
    console.log(`\n[DRY RUN] Would post payload:`);
    console.log(`Title: ${post.title}`);
    console.log(`Canonical URL: ${canonicalUrl}`);
    console.log(`Description: ${post.subtitle || post.excerpt}`);
    console.log(`Body characters: ${markdown.length}`);
    console.log(`✅ [DRY RUN] Payload valid. (No network request sent)`);
    return {
      success: true,
      dryRun: true,
      data: { id: 0, url: 'https://dev.to/preview-dry-run' },
    };
  }

  const apiKey = getEnvVar('DEVTO_API_KEY') || getEnvVar('DEVT0_API_KEY');
  if (!apiKey) {
    console.error('\n❌ DEVTO_API_KEY is not set!');
    console.log('   To get your free DEV.to API key in 10 seconds:');
    console.log('   1. Log in to https://dev.to');
    console.log('   2. Go to https://dev.to/settings/extensions');
    console.log('   3. Under "DEV Community API Keys", generate a key.');
    console.log('   4. Add DEVTO_API_KEY to your .env.local or GitHub Secrets.');
    return { success: false, error: 'MISSING_API_KEY' };
  }

  const payload = {
    article: {
      title: post.title,
      published: !isDraft,
      body_markdown: markdown,
      tags,
      canonical_url: canonicalUrl,
      description: post.subtitle || post.excerpt,
    },
  };

  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const res = await fetch('https://dev.to/api/articles', {
        method: 'POST',
        headers: {
          'api-key': apiKey,
          'Content-Type': 'application/json',
          'User-Agent': 'AbinSChandran-Portfolio-Syndicator/1.0',
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.status === 429) {
        console.warn(`⏳ Rate limit reached (429). Waiting 32 seconds before attempt ${attempt + 1}/3...`);
        await new Promise((r) => setTimeout(r, 32000));
        continue;
      }

      if (!res.ok) {
        console.error(`❌ DEV.to Error (${res.status}):`, data.error || data.message || data);
        return { success: false, error: data };
      }

      console.log(`🎉 Successfully published on DEV.to!`);
      console.log(`🔗 Live Article URL: ${data.url}`);
      console.log(`🆔 Article ID: ${data.id}`);

      return { success: true, data, post, tags, canonicalUrl };
    } catch (err) {
      console.error('❌ Network error syndicating to DEV.to:', err.message);
      if (attempt < 3) {
        console.log('Retrying in 5 seconds...');
        await new Promise((r) => setTimeout(r, 5000));
      } else {
        return { success: false, error: err.message };
      }
    }
  }
  return { success: false, error: 'RATE_LIMIT_EXCEEDED' };
}

/**
 * Generate responsive, dark-cyber HTML email for syndication notifications
 */
function buildSyndicationEmailHtml(articles) {
  const count = articles.length;
  const status = loadSyndicationStatus();
  const totalDevTo = Object.keys(status.devto || {}).length;

  const articleCards = articles
    .map((item) => {
      const title = item.title || item.post?.title;
      const tags = item.tags || normalizeTags(item.post || {});
      const tagsHtml = tags
        .map(
          (t) =>
            `<span style="display: inline-block; background: #1e293b; color: #38bdf8; font-size: 11px; padding: 2px 8px; border-radius: 4px; margin-right: 6px; margin-bottom: 4px;">#${t}</span>`
        )
        .join('');

      return `
    <div style="background: #0d121f; border: 1px solid #1e293b; border-radius: 12px; padding: 18px; margin-bottom: 16px;">
      <div style="font-size: 16px; font-weight: 700; color: #ffffff; line-height: 1.4; margin-bottom: 8px;">
        ${title}
      </div>
      <div style="margin-bottom: 12px;">
        ${tagsHtml}
      </div>
      <div style="font-size: 12px; color: #94a3b8; margin-bottom: 14px; line-height: 1.6;">
        <strong style="color: #cbd5e1;">Canonical Source:</strong><br/>
        <a href="${item.canonicalUrl}" style="color: #38bdf8; text-decoration: none; word-break: break-all;">${item.canonicalUrl}</a>
      </div>
      <table cellpadding="0" cellspacing="0" border="0" style="margin-top: 6px;">
        <tr>
          <td style="padding-right: 10px;">
            <a href="${item.url}" target="_blank" style="display: inline-block; background: #00E5FF; color: #07090e; font-size: 12px; font-weight: 700; padding: 9px 16px; border-radius: 6px; text-decoration: none;">
              Read on DEV.to (DA 91) ↗
            </a>
          </td>
          <td>
            <a href="${item.canonicalUrl}" target="_blank" style="display: inline-block; background: #1e293b; color: #e2e8f0; font-size: 12px; font-weight: 600; padding: 9px 16px; border-radius: 6px; text-decoration: none; border: 1px solid #334155;">
              View on Portfolio ↗
            </a>
          </td>
        </tr>
      </table>
    </div>`;
    })
    .join('');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New High-Authority Backlink Published on DEV.to</title>
</head>
<body style="margin: 0; padding: 0; background-color: #06080d; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #e2e8f0; line-height: 1.6;">
  <div style="max-width: 640px; margin: 0 auto; padding: 32px 20px;">
    <!-- Top Badge & Header -->
    <div style="text-align: center; margin-bottom: 28px;">
      <div style="display: inline-block; padding: 6px 14px; background: rgba(0, 229, 255, 0.1); border: 1px solid rgba(0, 229, 255, 0.3); border-radius: 9999px; font-size: 11px; font-weight: 700; color: #00E5FF; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 12px;">
        🚀 High-Authority Backlink Engine
      </div>
      <h1 style="margin: 0; font-size: 24px; font-weight: 800; color: #ffffff; letter-spacing: -0.5px;">
        ${count} New Article${count > 1 ? 's' : ''} Published on DEV.to
      </h1>
      <p style="margin: 8px 0 0; font-size: 14px; color: #94a3b8;">
        Domain Authority 91 Backlinks & Canonical Equity Synced to <strong style="color: #ffffff;">abinschandran.in</strong>
      </p>
    </div>

    <!-- SEO Metric Grid -->
    <div style="background: linear-gradient(145deg, #0d121f, #090d16); border: 1px solid #1e293b; border-radius: 14px; padding: 18px 12px; margin-bottom: 24px;">
      <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse: collapse;">
        <tr>
          <td align="center" style="padding: 6px; border-right: 1px solid #1e293b; width: 33%;">
            <div style="font-size: 11px; color: #64748b; text-transform: uppercase; font-weight: 600;">Platform DA</div>
            <div style="font-size: 22px; font-weight: 800; color: #00E5FF; margin-top: 2px;">DA 91</div>
            <div style="font-size: 11px; color: #10b981; font-weight: 600;">High Authority</div>
          </td>
          <td align="center" style="padding: 6px; border-right: 1px solid #1e293b; width: 33%;">
            <div style="font-size: 11px; color: #64748b; text-transform: uppercase; font-weight: 600;">Canonical Status</div>
            <div style="font-size: 22px; font-weight: 800; color: #10b981; margin-top: 2px;">Active</div>
            <div style="font-size: 11px; color: #10b981; font-weight: 600;">100% Link Equity</div>
          </td>
          <td align="center" style="padding: 6px; width: 33%;">
            <div style="font-size: 11px; color: #64748b; text-transform: uppercase; font-weight: 600;">Total Live</div>
            <div style="font-size: 22px; font-weight: 800; color: #a855f7; margin-top: 2px;">${totalDevTo} / ${BLOG_POSTS.length}</div>
            <div style="font-size: 11px; color: #94a3b8;">Articles Synced</div>
          </td>
        </tr>
      </table>
    </div>

    <!-- Article Cards List -->
    <div style="margin-bottom: 24px;">
      <div style="font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #94a3b8; margin: 0 0 12px 4px;">
        Published Technical Guides
      </div>
      ${articleCards}
    </div>

    <!-- Contextual Backlinks Verified -->
    <div style="background: #0d121f; border: 1px solid #1e293b; border-radius: 12px; padding: 18px 20px; margin-bottom: 24px;">
      <div style="font-size: 13px; font-weight: 700; color: #ffffff; margin-bottom: 10px;">
        🏛️ Verified Backlinks Injected in Every Article:
      </div>
      <table cellpadding="0" cellspacing="0" width="100%" style="font-size: 12px; line-height: 1.8;">
        <tr>
          <td style="color: #64748b; width: 22px; vertical-align: top;">•</td>
          <td style="color: #cbd5e1;"><strong style="color: #ffffff;">Root Portfolio:</strong> <a href="${BASE_URL}" style="color: #00E5FF; text-decoration: none;">abinschandran.in</a> <span style="color: #64748b;">(Brand Equity)</span></td>
        </tr>
        <tr>
          <td style="color: #64748b; width: 22px; vertical-align: top;">•</td>
          <td style="color: #cbd5e1;"><strong style="color: #ffffff;">Kochi Regional Hub:</strong> <a href="${BASE_URL}/freelance-software-developer-kochi" style="color: #00E5FF; text-decoration: none;">/freelance-software-developer-kochi</a> <span style="color: #64748b;">(Infopark Ranking)</span></td>
        </tr>
        <tr>
          <td style="color: #64748b; width: 22px; vertical-align: top;">•</td>
          <td style="color: #cbd5e1;"><strong style="color: #ffffff;">Kerala Regional Hub:</strong> <a href="${BASE_URL}/freelance-software-developer-kerala" style="color: #00E5FF; text-decoration: none;">/freelance-software-developer-kerala</a> <span style="color: #64748b;">(Statewide Geo-Targeting)</span></td>
        </tr>
        <tr>
          <td style="color: #64748b; width: 22px; vertical-align: top;">•</td>
          <td style="color: #cbd5e1;"><strong style="color: #ffffff;">Commercial Inquiry:</strong> <a href="${BASE_URL}/hire-web-developer" style="color: #00E5FF; text-decoration: none;">/hire-web-developer</a> <span style="color: #64748b;">(Architecture Consultation)</span></td>
        </tr>
      </table>
    </div>

    <!-- Footer -->
    <div style="text-align: center; border-top: 1px solid #1e293b; padding-top: 20px;">
      <p style="margin: 0; font-size: 12px; color: #64748b;">
        Automated High-Authority Backlink Engine • Abin S Chandran Portfolio
      </p>
      <p style="margin: 6px 0 0; font-size: 11px; color: #475569;">
        Powered by Resend & DEV.to Syndicator • Zero-effort automated ranking boost
      </p>
    </div>
  </div>
</body>
</html>`;
}

async function dispatchSyndicationEmail(articles) {
  const resendApiKey = getEnvVar('RESEND_API_KEY');
  const targetEmail = getEnvVar('REPORT_EMAIL', 'abinschandran1@gmail.com');

  if (!resendApiKey) {
    console.log('\nℹ️  [Syndication Email Notice]');
    console.log('   RESEND_API_KEY not set in .env.local or environment. Skipping email dispatch.');
    return;
  }

  const count = articles.length;
  const firstTitle = articles[0]?.title || articles[0]?.post?.title || 'Technical Guide';
  const subject =
    count === 1
      ? `🚀 [DEV.to DA 91 Backlink] "${firstTitle.slice(0, 45)}..." is Live!`
      : `🚀 [DEV.to DA 91] ${count} New Technical Articles Published & Backlinked!`;

  console.log(`\n📧 Dispatching syndication notification to ${targetEmail} via Resend...`);

  const html = buildSyndicationEmailHtml(articles);

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Backlink Engine <onboarding@resend.dev>',
        to: [targetEmail],
        subject,
        html,
      }),
    });

    const result = await res.json();
    if (res.ok) {
      console.log(`🎉 Syndication notification successfully delivered to ${targetEmail}!`);
    } else {
      console.error('❌ Resend API Error:', result.message || result);
    }
  } catch (err) {
    console.error('❌ Failed to dispatch syndication email:', err.message);
  }
}

function showStatus() {
  const status = loadSyndicationStatus();
  const devtoPosts = status.devto || {};

  console.log('\n📊 DEV.to Content Syndication & Backlink Status:');
  console.log('═════════════════════════════════════════════════════════════════════════');
  console.log(`Total local engineering articles: ${BLOG_POSTS.length}`);
  console.log(`Syndicated to DEV.to (DA 91):     ${Object.keys(devtoPosts).length}`);
  console.log('─────────────────────────────────────────────────────────────────────────');

  BLOG_POSTS.forEach((post, i) => {
    const info = devtoPosts[post.slug];
    const isPublished = !!info;
    const marker = isPublished ? '✅ SYNDICATED' : '⏳ PENDING';
    console.log(`[${i + 1}] ${marker} | ${post.title.slice(0, 50)}...`);
    if (info) {
      console.log(`     ↳ Live DEV.to URL: ${info.url}`);
      console.log(`     ↳ Canonical: ${info.canonicalUrl}`);
    } else {
      console.log(`     ↳ Slug: ${post.slug}`);
    }
  });
  console.log('═════════════════════════════════════════════════════════════════════════\n');
}

async function main() {
  const args = process.argv.slice(2);
  const isStatus = args.includes('--status');
  const isDryRun = args.includes('--dry-run');
  const isDraft = args.includes('--draft');
  const isAll = args.includes('--all');
  const isTestEmail = args.includes('--test-email');
  const targetSlugArg = args.find((a) => a.startsWith('--post='));
  const targetSlug = targetSlugArg ? targetSlugArg.split('=')[1] : null;

  if (isStatus) {
    showStatus();
    return;
  }

  const status = loadSyndicationStatus();
  status.devto = status.devto || {};

  if (isTestEmail) {
    const slugs = Object.keys(status.devto);
    if (slugs.length === 0) {
      console.log('No syndicated posts found to test email.');
      return;
    }
    const sampleSlugs = slugs.slice(-2);
    const sampleItems = sampleSlugs.map((slug) => {
      const item = status.devto[slug];
      const post = BLOG_POSTS.find((p) => p.slug === slug);
      return {
        title: post?.title || slug,
        tags: post ? normalizeTags(post) : ['architecture', 'saas'],
        url: item.url,
        canonicalUrl: item.canonicalUrl,
        post,
      };
    });

    console.log(`🧪 Sending test syndication notification for ${sampleItems.length} article(s)...`);
    await dispatchSyndicationEmail(sampleItems);
    return;
  }

  console.log('🚀 DEV.to Backlink & Content Syndication Engine Starting...\n');

  let postsToProcess = [];

  if (targetSlug) {
    const post = BLOG_POSTS.find((p) => p.slug === targetSlug);
    if (!post) {
      console.error(`❌ Blog post with slug "${targetSlug}" not found in data/blog.ts!`);
      process.exit(1);
    }
    postsToProcess = [post];
  } else if (isAll) {
    // Process all pending posts
    postsToProcess = BLOG_POSTS.filter((p) => !status.devto[p.slug]);
    if (postsToProcess.length === 0) {
      console.log('✨ All articles have already been syndicated to DEV.to! No action needed.');
      return;
    }
    console.log(`Found ${postsToProcess.length} pending articles to syndicate.`);
  } else {
    // Default: process the first pending article or show instructions
    const pending = BLOG_POSTS.filter((p) => !status.devto[p.slug]);
    if (pending.length === 0) {
      console.log('✨ All articles are already syndicated to DEV.to!');
      showStatus();
      return;
    }
    postsToProcess = [pending[0]];
    console.log(`Default mode: Syndicating 1 pending article: "${postsToProcess[0].title}"`);
    console.log(`(Use --all to syndicate all pending posts, or --post=<slug> for a specific post)`);
  }

  let publishedCount = 0;
  const newlyPublished = [];

  for (const post of postsToProcess) {
    const result = await publishToDevTo(post, isDraft, isDryRun);

    if (result.success && !isDryRun) {
      status.devto[post.slug] = {
        id: result.data.id,
        url: result.data.url,
        publishedAt: new Date().toISOString(),
        canonicalUrl: `${BASE_URL}/blog/${post.slug}`,
      };
      saveSyndicationStatus(status);
      publishedCount++;

      newlyPublished.push({
        title: post.title,
        tags: result.tags || normalizeTags(post),
        url: result.data.url,
        canonicalUrl: `${BASE_URL}/blog/${post.slug}`,
        post,
      });

      // Rate-limit pause if syndicating multiple (DEV.to limits to 1 post per 30s)
      if (postsToProcess.length > 1 && publishedCount < postsToProcess.length) {
        console.log('⏳ Pausing 31 seconds to respect DEV.to rate limits...');
        await new Promise((r) => setTimeout(r, 31000));
      }
    } else if (!result.success) {
      console.warn(`⚠️ Skipped recording status for "${post.slug}" due to error.`);
    }
  }

  console.log(`\n🏁 Done! Published ${publishedCount} article(s) to DEV.to.`);
  if (isDryRun) {
    console.log('ℹ️  Run was in --dry-run mode. Add DEVTO_API_KEY to publish live.');
  }

  if (newlyPublished.length > 0 && !isDryRun) {
    console.log(`\n📧 Dispatching automatic notification email for ${newlyPublished.length} new article(s)...`);
    await dispatchSyndicationEmail(newlyPublished);
  }
}

main();
