"use client";

import React from "react";
import { CheckCircle2, Terminal, Info } from "lucide-react";

interface ArticleContentProps {
  content: string;
}

export const ArticleContent: React.FC<ArticleContentProps> = ({ content }) => {
  // Simple custom parser for markdown structured headings, code blocks, and lists
  const renderFormattedContent = () => {
    const lines = content.trim().split("\n");
    const elements: React.ReactNode[] = [];
    let inCodeBlock = false;
    let codeLanguage = "";
    let codeBuffer: string[] = [];

    lines.forEach((line, index) => {
      // Code block start/end
      if (line.startsWith("```")) {
        if (inCodeBlock) {
          elements.push(
            <div key={`code-${index}`} className="my-6 rounded-xl overflow-hidden border border-obsidian-border bg-obsidian-bg shadow-2xl">
              <div className="bg-obsidian-surface px-4 py-2 border-b border-obsidian-border flex items-center justify-between text-xs font-mono text-titanium">
                <div className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-copper" />
                  <span>{codeLanguage || "code"}</span>
                </div>
                <span className="text-[10px] text-titanium/60">Snippet</span>
              </div>
              <pre className="p-4 overflow-x-auto text-xs font-mono text-emerald-400 leading-relaxed bg-[#0B0D10]">
                <code>{codeBuffer.join("\n")}</code>
              </pre>
            </div>
          );
          codeBuffer = [];
          inCodeBlock = false;
        } else {
          inCodeBlock = true;
          codeLanguage = line.replace("```", "").trim();
        }
        return;
      }

      if (inCodeBlock) {
        codeBuffer.push(line);
        return;
      }

      // Headings
      if (line.startsWith("### ")) {
        elements.push(
          <h3 key={`h3-${index}`} className="text-xl sm:text-2xl font-extrabold text-ivory mt-8 mb-4 tracking-tight border-b border-obsidian-border/60 pb-2">
            {line.replace("### ", "")}
          </h3>
        );
        return;
      }

      if (line.startsWith("#### ")) {
        elements.push(
          <h4 key={`h4-${index}`} className="text-base sm:text-lg font-bold text-copper mt-6 mb-3 flex items-center gap-2">
            <Info className="w-4 h-4 text-copper" />
            <span>{line.replace("#### ", "")}</span>
          </h4>
        );
        return;
      }

      // Horizontal Rule
      if (line === "---") {
        elements.push(<hr key={`hr-${index}`} className="my-8 border-obsidian-border/80" />);
        return;
      }

      // Bullet Lists
      if (line.startsWith("- ")) {
        elements.push(
          <li key={`li-${index}`} className="flex items-start gap-2 text-titanium text-sm sm:text-base leading-relaxed my-1.5 pl-2">
            <CheckCircle2 className="w-4 h-4 text-copper shrink-0 mt-1" />
            <span>{formatText(line.replace("- ", ""))}</span>
          </li>
        );
        return;
      }

      // Paragraphs
      if (line.trim().length > 0) {
        elements.push(
          <p key={`p-${index}`} className="text-titanium text-sm sm:text-base leading-relaxed my-4 font-sans">
            {formatText(line)}
          </p>
        );
      }
    });

    return elements;
  };

  // Inline formatting helper for **bold** and `code`
  const formatText = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*|`.*?`)/g);
    return parts.map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={i} className="font-semibold text-ivory">{part.slice(2, -2)}</strong>;
      }
      if (part.startsWith("`") && part.endsWith("`")) {
        return <code key={i} className="px-1.5 py-0.5 rounded bg-obsidian-surface border border-obsidian-border text-copper text-xs font-mono">{part.slice(1, -1)}</code>;
      }
      return part;
    });
  };

  return <div className="article-body font-sans text-titanium leading-relaxed">{renderFormattedContent()}</div>;
};
