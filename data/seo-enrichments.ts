import rawEnrichments from "./seo-enrichments.json";

export interface SeoFaq {
  question: string;
  answer: string;
}

export interface PageEnrichment {
  faqs?: SeoFaq[];
  lastEnriched?: string;
  sourceQueries?: string[];
}

export function getPageEnrichment(pathOrUrl: string): PageEnrichment | undefined {
  const norm = pathOrUrl.replace(/^https?:\/\/[^\/]+/, "").replace(/\/$/, "") || "/";
  const records = rawEnrichments as Record<string, PageEnrichment>;
  return records[norm] || records[`https://www.abinschandran.in${norm}`];
}

export function getEnrichedFaqs(pathOrUrl: string, baseFaqs: SeoFaq[] = []): SeoFaq[] {
  const enrichment = getPageEnrichment(pathOrUrl);
  if (!enrichment?.faqs || enrichment.faqs.length === 0) return baseFaqs;
  const existingQuestions = new Set(baseFaqs.map((f) => f.question.toLowerCase().trim()));
  const newFaqs = enrichment.faqs.filter((f) => !existingQuestions.has(f.question.toLowerCase().trim()));
  return [...baseFaqs, ...newFaqs];
}
