import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { DashboardShell } from "@/components/DashboardShell";
import { contracts } from "@/data/mock";
import { FileSignature, DollarSign, Clock, CheckCircle, AlertCircle } from "lucide-react";

export const Route = createFileRoute("/dashboard/contracts")({
  head: () => ({ meta: [{ title: "Contracts — TalentStage" }] }),
  component: Contracts,
});

function Contracts() {
  return (
    <DashboardShell variant="freelancer" title="Contracts" subtitle="Track your active and completed contracts.">
      <div className="space-y-4">
        {contracts.map((c, i) => {
          const progress = (c.completedMilestones / c.milestones) * 100;
          const paidPct = (c.paid / parseInt(c.budget.replace(/[$,]/g, ""))) * 100;

          return (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl border border-white/10 bg-card/60 p-5 backdrop-blur-xl"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                <div className="flex items-start gap-3">
                  <div className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${
                    c.status === "Active" ? "bg-primary/15 border border-primary/25" : "bg-neon-green/15 border border-neon-green/25"
                  }`}>
                    <FileSignature className={`h-5 w-5 ${c.status === "Active" ? "text-primary" : "text-neon-green"}`} />
                  </div>
                  <div>
                    <h3 className="font-semibold font-display">{c.project}</h3>
                    <p className="text-xs text-muted-foreground">{c.client} · Started {c.startDate}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`rounded-full border px-3 py-1 text-xs font-bold ${
                    c.status === "Active"
                      ? "bg-primary/10 border-primary/30 text-primary"
                      : "bg-neon-green/10 border-neon-green/30 text-neon-green"
                  }`}>
                    {c.status}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                  <div className="text-[10px] text-muted-foreground flex items-center gap-1">
                    <DollarSign className="h-3 w-3" /> Total Budget
                  </div>
                  <div className="text-sm font-bold mt-0.5">{c.budget}</div>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                  <div className="text-[10px] text-muted-foreground flex items-center gap-1">
                    <CheckCircle className="h-3 w-3" /> Paid Out
                  </div>
                  <div className="text-sm font-bold mt-0.5 text-neon-green">${c.paid.toLocaleString()}</div>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                  <div className="text-[10px] text-muted-foreground flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" /> Milestones
                  </div>
                  <div className="text-sm font-bold mt-0.5">{c.completedMilestones}/{c.milestones}</div>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                  <div className="text-[10px] text-muted-foreground flex items-center gap-1">
                    <Clock className="h-3 w-3" /> Deadline
                  </div>
                  <div className="text-sm font-bold mt-0.5">{c.deadline}</div>
                </div>
              </div>

              {/* Milestone progress */}
              <div className="mb-3">
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="text-muted-foreground">Milestone Progress</span>
                  <span className="font-semibold">{c.completedMilestones}/{c.milestones} complete</span>
                </div>
                <div className="flex gap-1.5">
                  {Array.from({ length: c.milestones }).map((_, mi) => (
                    <div
                      key={mi}
                      className={`h-2.5 flex-1 rounded-full transition-all ${
                        mi < c.completedMilestones
                          ? "bg-gradient-primary"
                          : "bg-white/10"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Payment progress */}
              <div>
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="text-muted-foreground">Payment Progress</span>
                  <span className="font-semibold text-neon-green">{Math.round(paidPct)}% paid</span>
                </div>
                <div className="h-1.5 rounded-full bg-white/8">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${paidPct}%` }}
                    transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-neon-green to-accent"
                  />
                </div>
              </div>

              {c.status === "Active" && (
                <div className="mt-4 flex gap-2">
                  <button className="flex-1 rounded-xl border border-white/10 bg-white/5 py-2 text-xs font-medium hover:bg-white/10 transition">
                    View Details
                  </button>
                  <button className="flex-1 rounded-xl bg-gradient-primary py-2 text-xs font-semibold text-white shadow-glow hover:opacity-90 transition">
                    Request Milestone Release
                  </button>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </DashboardShell>
  );
}
