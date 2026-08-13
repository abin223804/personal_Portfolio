"use client";

import React, { useState } from "react";
import { HelpCircle, ChevronDown, ChevronUp, Sparkles } from "lucide-react";
import { FAQS } from "@/data/faq";
import { JsonLd } from "@/components/seo/JsonLd";

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-obsidian-surface border-y border-obsidian-border/80 relative" id="faq">
      <JsonLd type="FAQPage" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-copper/10 border border-copper/30 text-copper text-xs font-mono mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ivory tracking-tight">
            Client FAQ & Working Process
          </h2>
          <p className="text-titanium text-sm mt-2 font-sans">
            Common questions about hiring me for freelance software development, tech stack, remote collaboration across India & worldwide, and project estimation.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4 font-sans">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-obsidian-bg border border-obsidian-border rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  id={`faq-button-${index}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-sans text-ivory hover:text-copper transition-colors focus:outline-none"
                >
                  <span className="text-base font-bold tracking-tight">{faq.question}</span>
                  <div className="w-8 h-8 rounded-lg bg-obsidian-card border border-obsidian-border flex items-center justify-center shrink-0 text-copper">
                    {isOpen ? <ChevronUp className="w-4 h-4" aria-hidden="true" /> : <ChevronDown className="w-4 h-4" aria-hidden="true" />}
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-button-${index}`}
                    className="px-5 pb-6 text-xs sm:text-sm text-titanium leading-relaxed border-t border-obsidian-border/50 pt-4 font-sans space-y-2"
                  >
                    <p>{faq.answer}</p>
                    <div className="pt-2">
                      <span className="text-[10px] font-mono text-copper bg-copper/10 px-2.5 py-0.5 rounded border border-copper/30">
                        Category: {faq.category}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
