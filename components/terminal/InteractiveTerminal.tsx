"use client";

import React, { useState, useRef, useEffect } from "react";
import { Terminal, CornerDownLeft, Copy, Check, Send, Mail, MapPin, Phone, Github, Linkedin } from "lucide-react";
import { PROJECTS } from "@/data/projects";

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
          <div className="text-copper font-bold">
            Abin S Chandran Architecture CLI Shell v5.2.0 [x86_64-apple-darwin]
          </div>
          <div className="text-titanium">
            Type <span className="text-amber-400 font-bold">help</span> to see available commands or click quick chips below.
          </div>
        </div>
      ),
    },
  ]);

  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase();
    let response: React.ReactNode = null;

    switch (trimmed) {
      case "help":
        response = (
          <div className="space-y-1 text-xs font-mono text-titanium">
            <div className="text-ivory font-bold mb-1">Available System Commands:</div>
            <div><span className="text-amber-400 font-bold">about</span> - Brief architectural summary & philosophy</div>
            <div><span className="text-amber-400 font-bold">skills</span> - Core technical competencies matrix</div>
            <div><span className="text-amber-400 font-bold">projects</span> - Production case studies list</div>
            <div><span className="text-amber-400 font-bold">contact</span> - Direct email & contact info</div>
            <div><span className="text-amber-400 font-bold">resume</span> - Career experience overview link</div>
            <div><span className="text-amber-400 font-bold">linkedin</span> - Open LinkedIn profile link</div>
            <div><span className="text-amber-400 font-bold">github</span> - Open GitHub repository profile</div>
            <div><span className="text-amber-400 font-bold">konami</span> - Trigger secret architecture mode</div>
            <div><span className="text-amber-400 font-bold">clear</span> - Reset terminal screen history</div>
          </div>
        );
        break;

      case "about":
        response = (
          <div className="text-xs font-mono text-titanium space-y-2">
            <div className="text-ivory font-bold">Abin S Chandran | Solution Architect</div>
            <p>5+ years of experience designing multi-region cloud platforms, microservices, and zero-downtime financial engines. Focused on high-availability, clean domain boundaries, and sub-10ms latencies.</p>
          </div>
        );
        break;

      case "skills":
        response = (
          <div className="text-xs font-mono text-titanium space-y-1">
            <div className="text-copper font-bold">Core Stack & Architectures:</div>
            <div>• Systems: Microservices, Event Sourcing (Kafka), gRPC, Envoy Gateway</div>
            <div>• Backend: Node.js, TypeScript, Go (Golang), Python (FastAPI)</div>
            <div>• Frontend: Next.js 15, React 19, Tailwind CSS, Framer Motion</div>
            <div>• Infrastructure: AWS (EKS/Lambda), Kubernetes, Docker, Terraform, Redis, Postgres/pgvector</div>
          </div>
        );
        break;

      case "projects":
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
        break;

      case "contact":
      case "email":
        response = (
          <div className="text-xs font-mono text-titanium space-y-1">
            <div className="text-emerald-400 font-bold">Contact Channel Details:</div>
            <div>Email: <span className="text-ivory">abin.chandran@gamail.com</span></div>
            <div>Location: Remote / Open to Global Consultation</div>
            <div>Status: <span className="text-emerald-400 font-bold">Available for Solution Advisory</span></div>
          </div>
        );
        break;

      case "resume":
        response = (
          <div className="text-xs font-mono text-titanium">
            Direct Web Resume path: <a href="/resume" className="text-copper underline font-bold">/resume</a>
          </div>
        );
        break;

      case "linkedin":
        response = (
          <div className="text-xs font-mono text-titanium">
            LinkedIn Profile: <a href="https://linkedin.com/in/abinschandran" target="_blank" rel="noreferrer" className="text-copper underline">https://linkedin.com/in/abinschandran</a>
          </div>
        );
        break;

      case "github":
        response = (
          <div className="text-xs font-mono text-titanium">
            GitHub Profile: <a href="https://github.com/abinschandran" target="_blank" rel="noreferrer" className="text-copper underline">https://github.com/abinschandran</a>
          </div>
        );
        break;

      case "clear":
        setHistory([]);
        return;

      default:
        response = (
          <div className="text-xs font-mono text-rose-400">
            command not found: &quot;{cmdStr}&quot;. Type <span className="text-amber-400 font-bold">help</span> for valid commands.
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

  const copyEmail = () => {
    navigator.clipboard.writeText("abinschandran@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 bg-obsidian-surface border-t border-obsidian-border/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-copper/10 border border-copper/30 text-copper text-xs font-mono mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>Interactive CLI & Contact Channel</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ivory tracking-tight">
            Consult Solution Architect
          </h2>
          <p className="text-titanium text-sm mt-2 font-sans">
            Type commands in the UNIX terminal shell below or submit a traditional query via the fallback contact form.
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
              <span className="text-[10px] font-mono text-copper">TTY /dev/pts/0</span>
            </div>

            {/* Quick Command Chips */}
            <div className="bg-obsidian-surface px-4 py-2 border-b border-obsidian-border flex flex-wrap gap-2 text-[11px] font-mono">
              <span className="text-titanium">Quick commands:</span>
              {["help", "about", "skills", "projects", "contact", "clear"].map((c) => (
                <button
                  key={c}
                  onClick={() => handleCommand(c)}
                  className="px-2 py-0.5 rounded bg-obsidian-card hover:bg-copper/20 hover:text-copper border border-obsidian-border text-titanium transition-colors"
                >
                  {c}
                </button>
              ))}
            </div>

            {/* Terminal Content Screen */}
            <div className="p-4 sm:p-6 min-h-[320px] max-h-[420px] overflow-y-auto space-y-4 font-mono">
              {history.map((h, i) => (
                <div key={i} className="space-y-1">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="text-emerald-400 font-bold">asc@architect:~$</span>
                    <span className="text-ivory font-bold">{h.command}</span>
                  </div>
                  <div className="pl-4">{h.output}</div>
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Terminal Command Input Bar */}
            <form onSubmit={handleSubmit} className="border-t border-obsidian-border p-3 bg-obsidian-card flex items-center gap-2 font-mono">
              <span className="text-emerald-400 font-bold text-xs pl-2">asc@architect:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type command ('help', 'contact', etc)..."
                className="w-full bg-transparent text-xs text-ivory placeholder-titanium focus:outline-none"
              />
              <button type="submit" className="p-1.5 rounded-lg bg-copper text-white hover:bg-copper-light transition-colors">
                <CornerDownLeft className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>

          {/* Right: Traditional Fallback Contact Form & Direct Links */}
          <div className="lg:col-span-5 bg-obsidian-bg border border-obsidian-border rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl">
            <h3 className="text-lg font-bold text-ivory font-sans">Direct Architectural Inquiry</h3>

            <div className="space-y-4">
              <div className="p-3.5 rounded-xl bg-obsidian-surface border border-obsidian-border flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-copper" />
                  <div>
                    <div className="text-[11px] text-titanium font-mono">Email Address</div>
                    <div className="text-xs font-mono font-semibold text-ivory">abinschandran@gmail.com</div>
                  </div>
                </div>
                <button
                  onClick={copyEmail}
                  className="p-1.5 rounded-lg bg-obsidian-card hover:bg-copper/20 text-titanium hover:text-copper transition-colors"
                  title="Copy email"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Form Input */}
              <div className="space-y-3 font-sans">
                <div>
                  <label className="block text-xs font-mono text-titanium mb-1">Your Name / Organization</label>
                  <input
                    type="text"
                    placeholder="Jane Doe (Lead Architect @ SaaS Corp)"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-obsidian-surface border border-obsidian-border text-xs text-ivory placeholder-titanium focus:outline-none focus:border-copper"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-titanium mb-1">Architecture / Project Scope</label>
                  <textarea
                    rows={3}
                    placeholder="Describe your microservices overhaul, cloud migration, or consulting requirement..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-obsidian-surface border border-obsidian-border text-xs text-ivory placeholder-titanium focus:outline-none focus:border-copper"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => alert("Thank you! Your message has been logged to the architecture queue.")}
                  className="w-full py-3 rounded-xl bg-copper hover:bg-copper-light text-white text-xs font-mono font-bold transition-all shadow-lg shadow-copper/20 flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Transmit Inquiry</span>
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
