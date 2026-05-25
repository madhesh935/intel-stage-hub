import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { DashboardShell } from "@/components/DashboardShell";
import {
  TrendingUp, Users, Briefcase, DollarSign, Sparkles, Star, ArrowRight, Zap,
} from "lucide-react";
import { freelancers, budgetSeries } from "@/data/mock";
import { FreelancerCard } from "@/components/FreelancerCard";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid,
} from "recharts";

export const Route = createFileRoute("/client/")({
  head: () => ({ meta: [{ title: "Client Dashboard — TalentStage" }] }),
  component: ClientDashboard,
});

function ClientDashboard() {
  return (
    <DashboardShell variant="client" title="Client Dashboard" subtitle="Manage your projects, proposals, and team.">
      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-5">
        {[
          { label: "Active Projects", value: "4", delta: "2 near deadline", icon: Briefcase, color: "text-primary" },
          { label: "Pending Proposals", value: "31", delta: "8 new today", icon: Users, color: "text-accent" },
          { label: "Budget Spent", value: "$28.4k", delta: "of $45k budget", icon: DollarSign, color: "text-neon-green" },
          { label: "Avg AI Match", value: "91%", delta: "Across all hires", icon: Sparkles, color: "text-neon-pink" },
        ].map(({ label, value, delta, icon: Icon, color }) => (
          <div key={label} className="rounded-2xl border border-white/10 bg-card/60 p-5 backdrop-blur-xl">
            <Icon className={`h-5 w-5 ${color} mb-3`} />
            <div className="text-2xl font-bold font-display">{value}</div>
            <div className="text-xs text-muted-foreground">{label}</div>
            <div className="text-[10px] text-muted-foreground mt-0.5">{delta}</div>
          </div>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-3 mb-4">
        {/* Budget chart */}
        <div className="lg:col-span-2 rounded-2xl border border-white/10 bg-card/60 p-5 backdrop-blur-xl">
          <h3 className="text-sm font-semibold font-display mb-4">Budget Analytics (6 months)</h3>
          <div className="h-52">
            <ResponsiveContainer>
              <BarChart data={budgetSeries}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
                <XAxis dataKey="m" stroke="rgba(248,250,252,0.3)" fontSize={11} tickLine={false} axisLine={false} />
                <YAxis stroke="rgba(248,250,252,0.3)" fontSize={11} tickLine={false} axisLine={false} tickFormatter={(v) => `$${v / 1000}k`} />
                <Tooltip
                  contentStyle={{ background: "rgba(9,11,17,0.95)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12, fontSize: 12 }}
                  formatter={(v: number) => [`$${v.toLocaleString()}`, "Spend"]}
                />
                <Bar dataKey="v" name="Spend" fill="#8B5CF6" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Active projects */}
        <div className="rounded-2xl border border-white/10 bg-card/60 p-5 backdrop-blur-xl">
          <h3 className="text-sm font-semibold font-display mb-4">Active Projects</h3>
          <div className="space-y-3">
            {[
              { name: "AI Dashboard SaaS", progress: 40, freelancer: "Mateo Rivera", deadline: "Jul 15" },
              { name: "Brand Identity", progress: 65, freelancer: "Aria Okafor", deadline: "Jul 1" },
              { name: "RAG Chatbot", progress: 20, freelancer: "Yuki Tanaka", deadline: "Jul 22" },
            ].map((proj) => (
              <div key={proj.name} className="rounded-xl border border-white/10 bg-white/5 p-3">
                <div className="flex items-center justify-between mb-1.5">
                  <div className="text-xs font-medium line-clamp-1">{proj.name}</div>
                  <div className="text-[10px] text-muted-foreground">{proj.deadline}</div>
                </div>
                <div className="text-[10px] text-muted-foreground mb-2">{proj.freelancer}</div>
                <div className="h-1.5 rounded-full bg-white/8">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${proj.progress}%` }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-primary"
                  />
                </div>
                <div className="text-[10px] text-right text-muted-foreground mt-1">{proj.progress}%</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AI Recommended Freelancers */}
      <div className="rounded-2xl border border-white/10 bg-card/60 p-5 backdrop-blur-xl mb-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-accent" />
            <h3 className="text-sm font-semibold font-display">AI Recommended Freelancers</h3>
          </div>
          <button className="text-xs text-accent hover:underline">View all</button>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {freelancers.slice(0, 3).map((f, i) => (
            <FreelancerCard key={f.id} f={f} index={i} />
          ))}
        </div>
      </div>

      {/* Payment milestones */}
      <div className="rounded-2xl border border-white/10 bg-card/60 p-5 backdrop-blur-xl">
        <h3 className="text-sm font-semibold font-display mb-4">Upcoming Payment Milestones</h3>
        <div className="space-y-2.5">
          {[
            { project: "AI Dashboard SaaS", milestone: "M3: Charts + AI panel", amount: 3500, due: "Jun 28", status: "Due soon" },
            { project: "Brand Identity", milestone: "M2: Final delivery", amount: 2750, due: "Jun 30", status: "Pending" },
            { project: "RAG Chatbot", milestone: "M1: Data pipeline", amount: 2000, due: "Jul 10", status: "Pending" },
          ].map((m) => (
            <div key={m.milestone} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              <div>
                <div className="text-xs font-semibold">{m.project}</div>
                <div className="text-[10px] text-muted-foreground">{m.milestone} · Due {m.due}</div>
              </div>
              <div className="flex items-center gap-3">
                <span className={`rounded-full border px-2 py-0.5 text-[10px] font-bold ${
                  m.status === "Due soon" ? "bg-amber-400/10 border-amber-400/30 text-amber-400" : "bg-white/5 border-white/15 text-muted-foreground"
                }`}>{m.status}</span>
                <div className="text-sm font-bold text-neon-green">${m.amount.toLocaleString()}</div>
                <button className="rounded-lg bg-gradient-primary px-3 py-1.5 text-[10px] font-bold text-white shadow-glow">
                  Release
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardShell>
  );
}
