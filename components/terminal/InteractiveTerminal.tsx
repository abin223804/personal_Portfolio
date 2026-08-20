"use client";

import React, { useState, useRef, useEffect } from "react";
import { Terminal, CornerDownLeft, Copy, Check, Send, Mail, Github, Linkedin, Loader2, Sparkles, MessageSquare, ExternalLink } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

interface HistoryItem {
  command: string;
  output: React.ReactNode;
}

export const InteractiveTerminal: React.FC = () => {
  const [input, setInput] = useState("");
  const [copied, setCopied] = useState(false);
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      command: "welcome",
      output: (
        <div className="space-y-2 text-xs font-mono">
          <div className="text-copper-light font-extrabold">
            Abin S Chandran Architecture CLI Shell v5.2.0 [x86_64-apple-darwin]
          </div>
          <div className="text-titanium">
            Type <span className="text-amber-400 font-bold">help</span> to see available commands, type <span className="text-emerald-400 font-bold">whatsapp</span> to chat on WhatsApp, or type <span className="text-emerald-400 font-bold">send &lt;your message&gt;</span> to email Abin S Chandran directly.
          </div>
        </div>
      ),
    },
  ]);

  // Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [scope, setScope] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle");

  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (history.length <= 1) return; // Don't scroll on initial welcome message render
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  // Pure Client-side Web3Forms Email Dispatcher
  const sendEmailFromFrontend = async (data: { name?: string; email?: string; message: string; channel: string }) => {
    try {
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "";
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `Portfolio Contact via ${data.channel} from ${data.name || 'Visitor'}`,
          from_name: data.name || "Portfolio Visitor",
          replyto: data.email || undefined,
          name: data.name || "Anonymous Visitor",
          email: data.email || "cli-visitor@abinschandran.in",
          message: data.message,
          channel: data.channel
        })
      });
      const result = await res.json();
      return result.success;
    } catch (err) {
      console.error("Web3Forms email transmission error:", err);
      return false;
    }
  };

  const handleCommand = async (cmdStr: string) => {
    const trimmed = cmdStr.trim();
    const lower = trimmed.toLowerCase();
    let response: React.ReactNode = null;

    if (lower === "help") {
      response = (
        <div className="space-y-1 text-xs font-mono text-titanium">
          <div className="text-ivory font-bold mb-1">Available System Commands:</div>
          <div><span className="text-emerald-400 font-bold">crm</span> - Open live CRM SaaS platform (crm.abinschandran.in)</div>
          <div><span className="text-emerald-400 font-bold">whatsapp</span> - Open direct WhatsApp chat to discuss project</div>
          <div><span className="text-emerald-400 font-bold">send &lt;msg&gt;</span> - Transmit direct email to Abin&apos;s inbox</div>
          <div><span className="text-amber-400 font-bold">about</span> - Brief architectural summary &amp; philosophy</div>
          <div><span className="text-amber-400 font-bold">skills</span> - Core technical competencies matrix</div>
          <div><span className="text-amber-400 font-bold">projects</span> - Production case studies list</div>
          <div><span className="text-amber-400 font-bold">contact</span> - Direct email &amp; contact info</div>
          <div><span className="text-amber-400 font-bold">linkedin</span> - Open LinkedIn profile link</div>
          <div><span className="text-amber-400 font-bold">github</span> - Open GitHub repository profile</div>
          <div><span className="text-amber-400 font-bold">clear</span> - Reset terminal screen history</div>
        </div>
      );
    } else if (lower === "crm" || lower === "saas") {
      response = (
        <div className="text-xs font-mono text-emerald-400 space-y-1">
          <div>Live CRM SaaS Platform:</div>
          <a href="https://crm.abinschandran.in/" target="_blank" rel="noopener noreferrer" className="underline font-bold text-ivory flex items-center gap-1.5 pt-1">
            <span>Launch crm.abinschandran.in</span>
            <ExternalLink className="w-3.5 h-3.5 text-copper" />
          </a>
        </div>
      );
    } else if (lower === "whatsapp" || lower === "chat") {
      const rawNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919000000000";
      const cleanNumber = rawNumber.replace(/[^0-9]/g, "");
      const msg = "Hi Abin, I found your portfolio and I'd like to discuss a software development project.";
      const waUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(msg)}`;
      response = (
        <div className="text-xs font-mono text-emerald-400 space-y-1">
          <div>Direct WhatsApp Chat:</div>
          <a href={waUrl} target="_blank" rel="noopener noreferrer" className="underline font-bold text-ivory flex items-center gap-1.5 pt-1">
            <span>Discuss Your Project on WhatsApp</span>
            <ExternalLink className="w-3.5 h-3.5 text-copper" />
          </a>
        </div>
      );
    } else if (lower.startsWith("send ") || lower.startsWith("msg ")) {
      const msgText = trimmed.replace(/^(send|msg)\s+/i, "").trim();
      if (!msgText) {
        response = <div className="text-xs font-mono text-rose-400">Usage: send &lt;your message here&gt;</div>;
      } else {
        // Append initial sending log
        setHistory((prev) => [
          ...prev,
          {
            command: cmdStr,
            output: <div className="text-xs font-mono text-amber-400 animate-pulse">[HTTP POST] Transmitting packet to abinschandran1@gmail.com...</div>,
          },
        ]);

        const success = await sendEmailFromFrontend({
          message: msgText,
          channel: "CLI Terminal Command"
        });

        response = success ? (
          <div className="text-xs font-mono text-emerald-400 space-y-0.5">
            <div>✓ HTTP 200 OK — Packet delivered directly to abinschandran1@gmail.com!</div>
            <div className="text-titanium text-[11px]">Thank you for connecting. I will review and reply shortly.</div>
          </div>
        ) : (
          <div className="text-xs font-mono text-rose-400">
            ✕ Transmission failed. Please try WhatsApp or the inquiry form on the right.
          </div>
        );

        // Replace the sending state output
        setHistory((prev) => [
          ...prev.slice(0, prev.length - 1),
          { command: cmdStr, output: response },
        ]);
        return;
      }
    } else if (lower === "about") {
      response = (
        <div className="text-xs font-mono text-titanium space-y-2">
          <div className="text-ivory font-bold">Abin S Chandran | Freelance Software Developer</div>
          <p>5+ years of experience building full-stack web applications, Node.js REST APIs, Next.js SaaS platforms, and custom admin dashboards.</p>
        </div>
      );
    } else if (lower === "skills") {
      response = (
        <div className="text-xs font-mono text-titanium space-y-1">
          <div className="text-copper font-bold">Core Stack &amp; Architectures:</div>
          <div>• Systems: Microservices, REST APIs, GraphQL, Event Sourcing</div>
          <div>• Backend: Node.js, Express.js, TypeScript, Go (Golang), Python</div>
          <div>• Frontend: Next.js 15, React 19, Tailwind CSS, Framer Motion</div>
          <div>• Databases: PostgreSQL, MongoDB, Redis, pgvector</div>
        </div>
      );
    } else if (lower === "projects") {
      response = (
        <div className="text-xs font-mono text-titanium space-y-1">
          <div className="text-ivory font-bold">Featured Production Case Studies:</div>
          {PROJECTS.map((p) => (
            <div key={p.slug}>
              - <span className="text-copper font-semibold">{p.title}</span> ({p.category})
            </div>
          ))}
        </div>
      );
    } else if (lower === "contact" || lower === "email") {
      response = (
        <div className="text-xs font-mono text-titanium space-y-1">
          <div className="text-emerald-400 font-bold">Contact Channel Details:</div>
          <div>Email: <span className="text-ivory">abinschandran1@gmail.com</span></div>
          <div>WhatsApp: <span className="text-emerald-400 font-bold">Available for Instant Project Discussion</span></div>
          <div>Location: Kerala, India (Remote Worldwide)</div>
        </div>
      );
    } else if (lower === "resume") {
      response = (
        <div className="text-xs font-mono text-titanium">
          Direct Web Resume path: <a href="/resume" className="text-copper underline font-bold">/resume</a>
        </div>
      );
    } else if (lower === "linkedin") {
      response = (
        <div className="text-xs font-mono text-titanium">
          LinkedIn Profile: <a href="https://www.linkedin.com/in/abinschandran/" target="_blank" rel="noreferrer" className="text-copper underline">https://www.linkedin.com/in/abinschandran/</a>
        </div>
      );
    } else if (lower === "github") {
      response = (
        <div className="text-xs font-mono text-titanium">
          GitHub Profile: <a href="https://github.com/abin223804" target="_blank" rel="noreferrer" className="text-copper underline">https://github.com/abin223804</a>
        </div>
      );
    } else if (lower === "clear") {
      setHistory([]);
      return;
    } else {
      response = (
        <div className="text-xs font-mono text-rose-400">
          command not found: &quot;{cmdStr}&quot;. Type <span className="text-amber-400 font-bold">help</span> or <span className="text-emerald-400 font-bold">whatsapp</span>.
        </div>
      );
    }

    setHistory((prev) => [...prev, { command: cmdStr, output: response }]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    handleCommand(input);
    setInput("");
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!scope.trim()) return;

    setIsSubmitting(true);
    setFormStatus("idle");

    const success = await sendEmailFromFrontend({
      name: name.trim() || undefined,
      email: email.trim() || undefined,
      message: scope.trim(),
      channel: "Architectural Inquiry Form"
    });

    setIsSubmitting(false);

    if (success) {
      setFormStatus("success");
      setName("");
      setEmail("");
      setScope("");
    } else {
      setFormStatus("error");
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("abinschandran1@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 bg-obsidian-surface border-t border-obsidian-border/80 relative" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-copper/10 border border-copper/30 text-copper-light font-semibold text-xs font-mono mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>Interactive CLI &amp; Direct Channel</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ivory tracking-tight">
            Consult Freelance Developer
          </h2>
          <p className="text-titanium text-sm mt-2 font-sans">
            Start a project discussion on WhatsApp, use the UNIX CLI shell, or submit a direct inquiry form below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left: Interactive UNIX Terminal */}
          <div className="lg:col-span-7 bg-obsidian-bg border border-obsidian-border rounded-2xl overflow-hidden shadow-2xl">
            {/* Terminal Window Top Bar */}
            <div className="bg-obsidian-card px-4 py-3 border-b border-obsidian-border flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500" />
                <div className="w-3 h-3 rounded-full bg-amber-500" />
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
                <span className="ml-2 text-xs font-mono text-titanium">asc_shell ~ bash</span>
              </div>
              <span className="text-[10px] font-mono text-copper-light font-bold">TTY /dev/pts/0</span>
            </div>

            {/* Quick Command Chips */}
            <div className="bg-obsidian-surface px-4 py-2 border-b border-obsidian-border flex flex-wrap gap-2 text-[11px] font-mono">
              <span className="text-titanium">Quick commands:</span>
              {[
                { label: "crm (live saas)", cmd: "crm" },
                { label: "whatsapp", cmd: "whatsapp" },
                { label: "help", cmd: "help" },
                { label: "about", cmd: "about" },
                { label: "skills", cmd: "skills" },
                { label: "projects", cmd: "projects" },
                { label: "contact", cmd: "contact" },
                { label: "clear", cmd: "clear" },
              ].map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleCommand(item.cmd)}
                  className="px-2 py-0.5 rounded bg-obsidian-card hover:bg-copper/20 hover:text-copper border border-obsidian-border text-titanium transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Terminal Content Screen */}
            <div className="p-4 sm:p-6 min-h-[320px] max-h-[420px] overflow-y-auto space-y-4 font-mono">
              {history.map((h, i) => (
                <div key={i} className="space-y-1">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="text-emerald-400 font-bold">asc@developer:~$</span>
                    <span className="text-ivory font-bold">{h.command}</span>
                  </div>
                  <div className="pl-4">{h.output}</div>
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Terminal Command Input Bar */}
            <form onSubmit={handleSubmit} className="border-t border-obsidian-border p-3 bg-obsidian-card flex items-center gap-2 font-mono">
              <span className="text-emerald-400 font-bold text-xs pl-2">asc@developer:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type command like 'whatsapp' or 'send hello'..."
                aria-label="Terminal CLI command prompt input"
                className="w-full bg-transparent text-xs text-ivory placeholder-titanium focus:outline-none"
              />
              <button type="submit" aria-label="Execute Terminal Command" className="p-1.5 rounded-lg bg-copper text-white hover:bg-copper-light transition-colors">
                <CornerDownLeft className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>

          {/* Right: Traditional Contact Form & WhatsApp CTA */}
          <div className="lg:col-span-5 bg-obsidian-bg border border-obsidian-border rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl">
            <h3 className="text-lg font-bold text-ivory font-sans flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-copper" />
              <span>Direct Project Consultation</span>
            </h3>

            {/* WhatsApp Featured Banner */}
            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 space-y-2">
              <div className="text-xs font-mono font-bold text-emerald-400 flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                <span>Instant Project Discussion</span>
              </div>
              <p className="text-xs text-titanium leading-relaxed font-sans">
                Prefer immediate messaging? Start a project discussion directly on WhatsApp.
              </p>
              <div className="pt-1">
                <WhatsAppButton variant="primary" size="md" className="w-full" />
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-3.5 rounded-xl bg-obsidian-surface border border-obsidian-border flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-copper" />
                  <div>
                    <div className="text-[11px] text-titanium font-mono">Direct Email</div>
                    <div className="text-xs font-mono font-semibold text-ivory">abinschandran1@gmail.com</div>
                  </div>
                </div>
                <button
                  onClick={copyEmail}
                  aria-label="Copy email address to clipboard"
                  className="p-1.5 rounded-lg bg-obsidian-card hover:bg-copper/20 text-titanium hover:text-copper transition-colors"
                  title="Copy email"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Status alerts */}
              {formStatus === "success" && (
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
                  ✓ Inquiry transmitted directly to abinschandran1@gmail.com!
                </div>
              )}
              {formStatus === "error" && (
                <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-mono">
                  ✕ Transmission failed. Please use WhatsApp or email abinschandran1@gmail.com directly.
                </div>
              )}

              {/* Form Input */}
              <form onSubmit={handleFormSubmit} className="space-y-3 font-sans">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-mono text-titanium mb-1">Your Name / Organization</label>
                  <input
                    id="contact-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jane Doe (Founder / Lead Architect)"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-obsidian-surface border border-obsidian-border text-xs text-ivory placeholder-titanium focus:outline-none focus:border-copper transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs font-mono text-titanium mb-1">Your Email Address</label>
                  <input
                    id="contact-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jane@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-obsidian-surface border border-obsidian-border text-xs text-ivory placeholder-titanium focus:outline-none focus:border-copper transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-scope" className="block text-xs font-mono text-titanium mb-1">Project Scope *</label>
                  <textarea
                    id="contact-scope"
                    required
                    rows={3}
                    value={scope}
                    onChange={(e) => setScope(e.target.value)}
                    placeholder="Describe your web application, Node.js API, or Next.js SaaS requirement..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-obsidian-surface border border-obsidian-border text-xs text-ivory placeholder-titanium focus:outline-none focus:border-copper transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || !scope.trim()}
                  className="w-full py-3 rounded-xl bg-copper hover:bg-copper-light disabled:opacity-50 text-obsidian-bg text-xs font-mono font-extrabold transition-all shadow-lg shadow-copper/20 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>Transmitting Packet...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Transmit Inquiry to Inbox</span>
                    </>
                  )}
                </button>
              </form>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
