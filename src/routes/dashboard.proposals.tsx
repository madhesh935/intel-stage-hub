import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { DashboardShell } from "@/components/DashboardShell";
import { BrainCircuit, BarChart3, Sparkles, Zap, Target, ShieldCheck, MessageSquare } from "lucide-react";
import { useState } from "react";
import { ProgressRing } from "@/components/ui/ProgressRing";
import { AIBadge } from "@/components/ui/AIBadge";

export const Route = createFileRoute("/dashboard/proposals")({
  head: () => ({ meta: [{ title: "Proposals — TalentStage" }] }),
  component: Proposals,
});

const PROPOSALS = [
  { id: "pr1", project: "Build an AI dashboard for analytics SaaS", status: "Pending", bid: "$9,500", aiScore: 87, clarity: 82, relevance: 91, value: 88, submitted: "2025-06-20", client: "Lumen Labs", proposals: 18 },
  { id: "pr2", project: "RAG chatbot over product docs", status: "Accepted", bid: "$7,200", aiScore: 94, clarity: 95, relevance: 96, value: 91, submitted: "2025-06-18", client: "Docu AI", proposals: 14 },
  { id: "pr3", project: "Design system for B2B SaaS", status: "Pending", bid: "$8,800", aiScore: 79, clarity: 76, relevance: 82, value: 79, submitted: "2025-06-17", client: "Basecamp AI", proposals: 7 },
  { id: "pr4", project: "Mobile app for habit coaching", status: "Rejected", bid: "$5,500", aiScore: 64, clarity: 60, relevance: 68, value: 64, submitted: "2025-06-15", client: "HabitFlow Inc", proposals: 11 },
];

const STATUS_STYLES: Record<string, string> = {
  Pending: "bg-amber-400/10 border-amber-400/30 text-amber-400",
  Accepted: "bg-neon-green/10 border-neon-green/30 text-neon-green",
  Rejected: "bg-destructive/10 border-destructive/30 text-destructive",
};

function Proposals() {
  const [selected, setSelected] = useState(PROPOSALS[0]);

  return (
    <DashboardShell variant="freelancer" title="My Proposals" subtitle="Track and optimize your active proposals with AI scoring.">
      <div className="grid gap-4 lg:grid-cols-[1fr_360px]">
        {/* List */}
        <div className="space-y-3">
          {/* Summary stats */}
          <div className="grid grid-cols-3 gap-3 mb-4">
            {[
              { label: "Total Sent", value: "24", icon: Target },
              { label: "Accepted", value: "8", icon: ShieldCheck },
              { label: "Avg AI Score", value: "81", icon: BrainCircuit },
            ].map(({ label, value, icon: Icon }) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-card/60 p-4 text-center backdrop-blur-xl">
                <Icon className="h-4 w-4 text-accent mx-auto mb-1.5" />
                <div className="text-xl font-bold font-display">{value}</div>
                <div className="text-xs text-muted-foreground">{label}</div>
              </div>
            ))}
          </div>

          {PROPOSALS.map((p, i) => (
            <motion.button
              key={p.id}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.06 }}
              onClick={() => setSelected(p)}
              className={`w-full text-left rounded-2xl border p-4 backdrop-blur-xl transition ${
                selected.id === p.id
                  ? "border-primary/40 bg-primary/10"
                  : "border-white/10 bg-card/60 hover:border-white/20"
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold line-clamp-1">{p.project}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{p.client} · {p.proposals} proposals · {p.submitted}</div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className={`rounded-full border px-2.5 py-0.5 text-[10px] font-bold ${STATUS_STYLES[p.status]}`}>
                    {p.status}
                  </span>
                  <span className="text-sm font-bold text-primary">{p.bid}</span>
                </div>
              </div>

              {/* AI Score bar */}
              <div className="mt-3 flex items-center gap-2">
                <span className="text-[10px] text-muted-foreground">AI Score</span>
                <div className="flex-1 h-1.5 rounded-full bg-white/8">
                  <div
                    className="h-full rounded-full bg-gradient-primary"
                    style={{ width: `${p.aiScore}%` }}
                  />
                </div>
                <span className="text-[10px] font-bold text-primary">{p.aiScore}/100</span>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Detail panel */}
        <div className="rounded-2xl border border-white/10 bg-card/60 p-5 backdrop-blur-xl h-fit sticky top-6">
          <div className="flex items-center gap-2 mb-4">
            <BrainCircuit className="h-4 w-4 text-accent" />
            <span className="text-sm font-semibold">AI Proposal Analysis</span>
          </div>

          <div className="text-sm font-medium line-clamp-2 mb-3">{selected.project}</div>

          <div className="flex items-center justify-center my-4">
            <ProgressRing value={selected.aiScore} size={88} strokeWidth={7} color={selected.aiScore >= 85 ? "green" : selected.aiScore >= 70 ? "accent" : "pink"} label="Overall" />
          </div>

          <div className="space-y-3">
            {[
              { label: "Clarity", value: selected.clarity, desc: "How clear your writing is" },
              { label: "Relevance", value: selected.relevance, desc: "How well you matched the brief" },
              { label: "Value", value: selected.value, desc: "Your pricing vs. market rate" },
            ].map(({ label, value, desc }) => (
              <div key={label}>
                <div className="flex items-center justify-between text-xs mb-1">
                  <div>
                    <span className="font-medium">{label}</span>
                    <span className="text-muted-foreground ml-2">{desc}</span>
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

          <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-3">
            <div className="flex items-center gap-1.5 text-xs font-semibold mb-1.5">
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              AI Recommendation
            </div>
            <p className="text-xs text-muted-foreground">
              {selected.aiScore >= 85
                ? "Strong proposal! Consider following up in 24h to reinforce your interest."
                : selected.aiScore >= 70
                ? "Good proposal. Add a specific example of similar past work to improve clarity."
                : "Needs improvement. Tailor more specifically to the client's brief and restate key deliverables."}
            </p>
          </div>

          <div className="mt-3 grid grid-cols-2 gap-2">
            <button className="rounded-xl border border-white/10 bg-white/5 py-2 text-xs font-medium hover:bg-white/10 transition">
              Edit Proposal
            </button>
            <button className="rounded-xl bg-gradient-primary py-2 text-xs font-semibold text-white shadow-glow hover:opacity-90 transition">
              <MessageSquare className="inline h-3 w-3 mr-1" />
              Message Client
            </button>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
