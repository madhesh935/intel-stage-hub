import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { FloatingParticles } from "@/components/ui/FloatingParticles";
import { ProgressRing } from "@/components/ui/ProgressRing";
import { AIBadge } from "@/components/ui/AIBadge";
import {
  BrainCircuit, ShieldCheck, Star, Target, BarChart3,
  Sparkles, Check, X, Play, Send,
} from "lucide-react";

export const Route = createFileRoute("/ai")({
  head: () => ({ meta: [
    { title: "AI Features — TalentStage" },
    { name: "description", content: "Explore TalentStage's AI-powered matching, proposal scoring, skill verification, and project scoping." },
  ]}),
  component: AIFeatures,
});

const TABS = [
  { id: "match", label: "Smart Match", icon: BrainCircuit },
  { id: "proposal", label: "Proposal Evaluator", icon: Star },
  { id: "portfolio", label: "Portfolio Reviewer", icon: BarChart3 },
  { id: "skill", label: "Skill Verification", icon: ShieldCheck },
  { id: "scoping", label: "Project Scoping", icon: Target },
];

function AIFeatures() {
  const [tab, setTab] = useState("match");

  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-hero-radial opacity-30" />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-16 text-center">
        <FloatingParticles count={30} className="opacity-40" />
        <div className="absolute inset-0 -z-10 bg-grid opacity-15" />
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary mb-5">
            <Sparkles className="h-3.5 w-3.5" />
            AI Features
          </div>
          <h1 className="text-4xl font-bold font-display sm:text-5xl">
            AI that works{" "}
            <span className="text-gradient">for you</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Five powerful AI tools built into every part of TalentStage — from skill verification to project scoping.
          </p>
        </motion.div>
      </section>

      <main className="mx-auto max-w-6xl px-6 pb-24">
        {/* Tab navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {TABS.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setTab(id)}
              className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition ${
                tab === id ? "bg-gradient-primary text-white shadow-glow" : "border border-white/10 bg-card/60 text-muted-foreground hover:text-foreground backdrop-blur-xl"
              }`}
            >
              <Icon className="h-4 w-4" />
              {label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {tab === "match" && <MatchDemo key="match" />}
          {tab === "proposal" && <ProposalDemo key="proposal" />}
          {tab === "portfolio" && <PortfolioDemo key="portfolio" />}
          {tab === "skill" && <SkillDemo key="skill" />}
          {tab === "scoping" && <ScopingDemo key="scoping" />}
        </AnimatePresence>
      </main>
      <SiteFooter />
    </div>
  );
}

function MatchDemo() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
      <div className="rounded-3xl border border-white/10 bg-card/60 p-8 backdrop-blur-xl">
        <h2 className="text-2xl font-bold font-display mb-2">AI Smart Freelancer Match</h2>
        <p className="text-sm text-muted-foreground mb-8">Our model analyzes skill overlap, portfolio quality, and project history to surface the best candidates.</p>

        <div className="grid gap-6 lg:grid-cols-3">
          {[
            { name: "Yuki Tanaka", title: "AI/ML Engineer", match: 98, skills: 9.5, quality: 9.8, speed: "Fast", avatar: "YT" },
            { name: "Priya Nair", title: "Data Scientist", match: 94, skills: 9.1, quality: 9.3, speed: "Fast", avatar: "PN" },
            { name: "Mateo Rivera", title: "Full-Stack Dev", match: 89, skills: 8.7, quality: 9.0, speed: "Medium", avatar: "MR" },
          ].map((f, i) => (
            <motion.div
              key={f.name}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-2xl border p-5 ${i === 0 ? "border-primary/40 bg-primary/10" : "border-white/10 bg-white/5"}`}
            >
              {i === 0 && <div className="absolute -top-2.5 left-4 rounded-full bg-gradient-primary px-2.5 py-0.5 text-[10px] font-bold text-white">Best Match</div>}
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-2xl bg-gradient-primary flex items-center justify-center font-bold text-white">{f.avatar}</div>
                <div className="flex-1">
                  <div className="font-semibold">{f.name}</div>
                  <div className="text-xs text-muted-foreground">{f.title}</div>
                </div>
                <ProgressRing value={f.match} size={52} strokeWidth={4} color={i === 0 ? "green" : "primary"} />
              </div>
              <div className="grid grid-cols-3 gap-2 text-center text-[11px]">
                {[["Skills", f.skills + "/10"], ["Quality", f.quality + "/10"], ["Speed", f.speed]].map(([k, v]) => (
                  <div key={k} className="rounded-lg border border-white/10 bg-white/5 p-2">
                    <div className="text-muted-foreground">{k}</div>
                    <div className="font-bold mt-0.5">{v as string}</div>
                  </div>
                ))}
              </div>
              <button className={`mt-4 w-full rounded-xl py-2 text-xs font-semibold transition ${i === 0 ? "bg-gradient-primary text-white shadow-glow hover:opacity-90" : "border border-white/10 bg-white/5 hover:bg-white/10"}`}>
                View Profile
              </button>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-accent/25 bg-accent/8 p-4">
          <div className="flex items-center gap-2 text-sm font-semibold text-accent mb-2">
            <BrainCircuit className="h-4 w-4" />
            AI Explanation
          </div>
          <p className="text-sm text-muted-foreground">Yuki Tanaka ranks #1 because their portfolio includes 3 production RAG systems with verifiable GitHub activity, their verified PyTorch score is 94/100, and they responded to 5 similar projects within 2 hours historically.</p>
        </div>
      </div>
    </motion.div>
  );
}

function ProposalDemo() {
  const [score] = useState({ overall: 91, clarity: 88, relevance: 95, value: 90 });
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-card/60 p-6 backdrop-blur-xl">
          <h3 className="text-lg font-bold font-display mb-4">Sample Proposal</h3>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-muted-foreground leading-relaxed space-y-2">
            <p>Hi! I'm Mateo, a full-stack engineer with 6 years building SaaS products using React, TypeScript, and Recharts.</p>
            <p>For your AI analytics dashboard, I'll deliver: a responsive dashboard with 8+ chart types, real-time data streaming via WebSockets, AI insights panel powered by OpenAI, and full dark mode.</p>
            <p>Timeline: 5 weeks. Budget: $9,500. Available to start immediately.</p>
          </div>
        </div>
        <div className="rounded-3xl border border-white/10 bg-card/60 p-6 backdrop-blur-xl">
          <h3 className="text-lg font-bold font-display mb-4">AI Analysis</h3>
          <div className="flex justify-center mb-6">
            <ProgressRing value={score.overall} size={96} strokeWidth={7} color="green" label="Overall" />
          </div>
          <div className="space-y-4">
            {[
              { label: "Relevance", value: score.relevance, desc: "Addresses all requirements" },
              { label: "Clarity", value: score.clarity, desc: "Clear deliverables & timeline" },
              { label: "Value", value: score.value, desc: "Competitive pricing" },
            ].map(({ label, value, desc }) => (
              <div key={label}>
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <div>
                    <span className="font-medium">{label}</span>
                    <span className="text-muted-foreground ml-2 text-[10px]">{desc}</span>
                  </div>
                  <span className="font-bold text-primary">{value}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-white/8">
                  <motion.div
                    className="h-full rounded-full bg-gradient-primary"
                    initial={{ width: 0 }}
                    animate={{ width: `${value}%` }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center gap-2 rounded-xl bg-neon-green/10 border border-neon-green/20 p-3">
            <Check className="h-4 w-4 text-neon-green shrink-0" />
            <span className="text-xs text-neon-green font-semibold">Strong proposal — recommended to shortlist</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function PortfolioDemo() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
      <div className="rounded-3xl border border-white/10 bg-card/60 p-8 backdrop-blur-xl">
        <h2 className="text-2xl font-bold font-display mb-6">AI Portfolio Reviewer</h2>
        <div className="grid gap-6 lg:grid-cols-[auto_1fr]">
          <div className="flex flex-col items-center gap-3">
            <ProgressRing value={94} size={120} strokeWidth={8} color="primary" label="Health" />
            <div className="text-center">
              <div className="font-bold text-neon-green">Excellent</div>
              <div className="text-xs text-muted-foreground">Top 6% in your category</div>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { label: "Project Diversity", score: 96, status: "great" },
              { label: "Impact Statements", score: 78, status: "ok" },
              { label: "Recency", score: 92, status: "great" },
              { label: "SEO Optimization", score: 61, status: "needs-work" },
              { label: "Case Studies", score: 85, status: "good" },
              { label: "Client Testimonials", score: 70, status: "ok" },
            ].map(({ label, score, status }) => (
              <div key={label} className="rounded-xl border border-white/10 bg-white/5 p-3">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-medium">{label}</span>
                  <span className={`text-xs font-bold ${status === "great" ? "text-neon-green" : status === "good" ? "text-accent" : status === "ok" ? "text-amber-400" : "text-destructive"}`}>
                    {score}
                  </span>
                </div>
                <div className="h-1.5 rounded-full bg-white/8">
                  <div
                    className={`h-full rounded-full ${status === "great" || status === "good" ? "bg-gradient-primary" : status === "ok" ? "bg-amber-400" : "bg-destructive"}`}
                    style={{ width: `${score}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6 space-y-2">
          <div className="text-sm font-semibold mb-2">💡 AI Suggestions</div>
          {[
            { tip: "Add measurable results to your FinanceAI Dashboard case study (e.g., '40% faster page load')", impact: "+8 pts" },
            { tip: "Optimize your profile title with top search terms: 'TypeScript', 'SaaS', 'React'", impact: "+5 pts" },
            { tip: "Request testimonials from your last 3 completed clients", impact: "+7 pts" },
          ].map(({ tip, impact }) => (
            <div key={tip} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-3 text-xs">
              <Sparkles className="h-3.5 w-3.5 text-accent mt-0.5 shrink-0" />
              <span className="flex-1">{tip}</span>
              <span className="text-neon-green font-bold shrink-0">{impact}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function SkillDemo() {
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (i: number) => {
    setSelected(i);
    setTimeout(() => setShowResult(true), 800);
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-card/60 p-6 backdrop-blur-xl">
          <div className="flex items-center gap-2 mb-1">
            <ShieldCheck className="h-5 w-5 text-primary" />
            <h3 className="text-lg font-bold font-display">TypeScript Expert Test</h3>
          </div>
          <p className="text-xs text-muted-foreground mb-5">Question 1 of 10 · Time remaining: 3:45</p>

          <div className="h-1.5 rounded-full bg-white/8 mb-5">
            <div className="h-full w-[10%] rounded-full bg-gradient-primary" />
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm font-medium mb-5">
            Which TypeScript utility creates an object type with all properties of T set to optional?
          </div>

          <div className="space-y-2.5">
            {["Partial<T>", "Required<T>", "Readonly<T>", "Omit<T, K>"].map((opt, i) => {
              const isSelected = selected === i;
              const isCorrect = i === 0;
              const showFeedback = selected !== null;

              return (
                <button
                  key={i}
                  disabled={selected !== null}
                  onClick={() => handleAnswer(i)}
                  className={`w-full rounded-xl border p-3 text-left text-sm transition flex items-center justify-between ${
                    showFeedback && isCorrect ? "border-neon-green/40 bg-neon-green/10 text-neon-green" :
                    showFeedback && isSelected && !isCorrect ? "border-destructive/40 bg-destructive/10 text-destructive" :
                    "border-white/10 bg-white/5 hover:border-primary/30 hover:bg-primary/10"
                  }`}
                >
                  <span><strong className="text-[11px] mr-2">{String.fromCharCode(65 + i)}.</strong>{opt}</span>
                  {showFeedback && isCorrect && <Check className="h-4 w-4 text-neon-green" />}
                  {showFeedback && isSelected && !isCorrect && <X className="h-4 w-4 text-destructive" />}
                </button>
              );
            })}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-card/60 p-6 backdrop-blur-xl">
          <h3 className="text-lg font-bold font-display mb-4">Live Progress</h3>
          <div className="flex justify-center mb-6">
            <ProgressRing value={showResult ? 100 : 0} size={100} strokeWidth={7} color="green" label="Score" />
          </div>
          {showResult ? (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center space-y-4">
              <div className="text-4xl">🎯</div>
              <div className="text-lg font-bold text-neon-green">Correct!</div>
              <AIBadge label="TypeScript Expert" state="verified" size="lg" className="mx-auto" />
              <p className="text-xs text-muted-foreground">Keep going — 9 questions remaining to unlock your badge!</p>
            </motion.div>
          ) : (
            <div className="text-center text-sm text-muted-foreground py-8">
              Answer the question to see your live score.
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function ScopingDemo() {
  const [messages, setMessages] = useState([
    { from: "ai", text: "Hi! Describe your project idea and I'll generate a complete scope, timeline, and budget estimate." }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg = input;
    setInput("");
    setMessages((prev) => [...prev, { from: "user", text: userMsg }]);
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setMessages((prev) => [...prev, {
      from: "ai",
      text: `Based on "${userMsg}", here's your AI-generated scope:\n\n📋 Deliverables: Web app, Mobile app (iOS + Android), Admin dashboard, API\n⏱️ Timeline: 12–16 weeks\n💰 Budget: $18k–$28k\n👥 Team: 2 engineers + 1 designer\n⚡ Skills: React Native, Node.js, PostgreSQL, AWS`
    }]);
    setLoading(false);
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
      <div className="rounded-3xl border border-white/10 bg-card/60 p-6 backdrop-blur-xl">
        <h2 className="text-2xl font-bold font-display mb-2">AI Project Scoping Assistant</h2>
        <p className="text-sm text-muted-foreground mb-6">Describe your project in plain English. Get a full scope, timeline, and budget instantly.</p>

        <div className="rounded-2xl border border-white/10 bg-background/50 p-4 min-h-[300px] max-h-[400px] overflow-y-auto space-y-3 mb-4">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm whitespace-pre-line ${
                m.from === "user" ? "bg-gradient-primary text-white rounded-br-sm" : "bg-card border border-white/10 rounded-bl-sm"
              }`}>
                {m.text}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="bg-card border border-white/10 rounded-2xl rounded-bl-sm px-4 py-3 flex items-center gap-1">
                {[0, 1, 2].map((i) => (
                  <motion.span key={i} animate={{ y: [0, -4, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                    className="h-1.5 w-1.5 rounded-full bg-muted-foreground" />
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="flex gap-3">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="e.g. I need a food delivery app with real-time tracking…"
            className="flex-1 rounded-2xl border border-white/12 bg-white/5 px-4 py-3 text-sm outline-none focus:border-primary/40 placeholder:text-muted-foreground"
          />
          <button
            onClick={handleSend}
            className="rounded-2xl bg-gradient-primary px-5 py-3 text-white shadow-glow hover:opacity-90 transition"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
