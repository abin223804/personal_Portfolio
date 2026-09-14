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

  const apiKey = getEnvVar('DEVTO_API_KEY');
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

    if (!res.ok) {
      console.error(`❌ DEV.to Error (${res.status}):`, data.error || data.message || data);
      return { success: false, error: data };
    }

    console.log(`🎉 Successfully published on DEV.to!`);
    console.log(`🔗 Live Article URL: ${data.url}`);
    console.log(`🆔 Article ID: ${data.id}`);

    return { success: true, data };
  } catch (err) {
    console.error('❌ Network error syndicating to DEV.to:', err.message);
    return { success: false, error: err.message };
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
  const targetSlugArg = args.find((a) => a.startsWith('--post='));
  const targetSlug = targetSlugArg ? targetSlugArg.split('=')[1] : null;

  if (isStatus) {
    showStatus();
    return;
  }

  console.log('🚀 DEV.to Backlink & Content Syndication Engine Starting...\n');

  const status = loadSyndicationStatus();
  status.devto = status.devto || {};

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

      // Rate-limit pause if syndicating multiple
      if (postsToProcess.length > 1) {
        console.log('⏳ Pausing 3 seconds to respect DEV.to rate limits...');
        await new Promise((r) => setTimeout(r, 3000));
      }
    } else if (!result.success) {
      console.warn(`⚠️ Skipped recording status for "${post.slug}" due to error.`);
    }
  }

  console.log(`\n🏁 Done! Published ${publishedCount} article(s) to DEV.to.`);
  if (isDryRun) {
    console.log('ℹ️  Run was in --dry-run mode. Add DEVTO_API_KEY to publish live.');
  }
}

main();
