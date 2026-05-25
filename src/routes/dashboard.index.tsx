import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { DashboardShell } from "@/components/DashboardShell";
import {
  Wallet, Briefcase, Target, ShieldCheck, Sparkles, TrendingUp,
  MessageSquare, ArrowRight, Zap, BarChart3, Star, Clock,
} from "lucide-react";
import {
  earningsSeries, messages, projects, proposals,
} from "@/data/mock";
import {
  Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis,
  BarChart, Bar, Cell,
} from "recharts";
import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { ProgressRing } from "@/components/ui/ProgressRing";

export const Route = createFileRoute("/dashboard/")({
  head: () => ({ meta: [{ title: "Dashboard — TalentStage" }] }),
  component: FreelancerDashboard,
});

function StatWidget({
  label, value, delta, icon, trend = "up", accent = "primary",
}: {
  label: string; value: string; delta: string; icon: React.ReactNode;
  trend?: "up" | "down" | "neutral"; accent?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -2 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-card/60 p-5 backdrop-blur-xl transition hover:border-primary/20"
    >
      <div className="pointer-events-none absolute -right-6 -bottom-6 h-20 w-20 rounded-full bg-primary/10 blur-2xl opacity-0 transition group-hover:opacity-100" />
      <div className="flex items-start justify-between">
        <div className={`grid h-10 w-10 place-items-center rounded-xl bg-${accent}/15 border border-${accent}/20`}>
          {icon}
        </div>
        <span className={`text-xs font-semibold ${trend === "up" ? "text-neon-green" : trend === "down" ? "text-destructive" : "text-muted-foreground"}`}>
          {delta}
        </span>
      </div>
      <div className="mt-3 text-2xl font-bold font-display">{value}</div>
      <div className="text-xs text-muted-foreground mt-0.5">{label}</div>
    </motion.div>
  );
}

function FreelancerDashboard() {
  const hour = new Date().getHours();
  const greeting = hour < 12 ? "Good morning" : hour < 17 ? "Good afternoon" : "Good evening";

  return (
    <DashboardShell
      variant="freelancer"
      title={`${greeting}, Alex 👋`}
      subtitle="Here's what's happening with your work today."
    >
      {/* Quick action bar */}
      <div className="mb-6 flex flex-wrap gap-2">
        {[
          { label: "Post availability", icon: Zap },
          { label: "Browse projects", icon: Target },
          { label: "Send proposal", icon: ArrowRight },
        ].map(({ label, icon: Icon }) => (
          <button
            key={label}
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-muted-foreground transition hover:border-primary/30 hover:bg-primary/10 hover:text-primary"
          >
            <Icon className="h-3.5 w-3.5" />
            {label}
          </button>
        ))}
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatWidget
          label="Total earnings"
          value="$48,210"
          delta="+12.4% MoM"
          icon={<Wallet className="h-5 w-5 text-primary" />}
          accent="primary"
        />
        <StatWidget
          label="Active contracts"
          value="6"
          delta="2 ending soon"
          icon={<Briefcase className="h-5 w-5 text-accent" />}
          accent="accent"
          trend="neutral"
        />
        <StatWidget
          label="Proposal success"
          value="68%"
          delta="+4 pts"
          icon={<Target className="h-5 w-5 text-chart-4" />}
          accent="chart-4"
        />
        <StatWidget
          label="AI Profile Score"
          value="92/100"
          delta="Top 8%"
          icon={<ShieldCheck className="h-5 w-5 text-neon-green" />}
          accent="neon-green"
        />
      </div>

      {/* Row 2 */}
      <div className="mt-4 grid gap-4 lg:grid-cols-3">
        {/* Earnings chart */}
        <div className="lg:col-span-2 rounded-2xl border border-white/10 bg-card/60 p-6 backdrop-blur-xl">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-base font-semibold font-display">Earnings analytics</h3>
              <p className="text-xs text-muted-foreground">Last 12 months</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 rounded-full bg-neon-green/10 border border-neon-green/20 px-2.5 py-1 text-xs font-semibold text-neon-green">
                <TrendingUp className="h-3 w-3" /> +24% YoY
              </span>
            </div>
          </div>
          <div className="h-64">
            <ResponsiveContainer>
              <AreaChart data={earningsSeries}>
                <defs>
                  <linearGradient id="earn-grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#8B5CF6" stopOpacity={0.5} />
                    <stop offset="100%" stopColor="#8B5CF6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="m" stroke="rgba(248,250,252,0.3)" fontSize={11} tickLine={false} axisLine={false} />
                <YAxis stroke="rgba(248,250,252,0.3)" fontSize={11} tickLine={false} axisLine={false} tickFormatter={(v) => `$${v / 1000}k`} />
                <Tooltip
                  contentStyle={{
                    background: "rgba(9,11,17,0.95)", border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: 12, fontSize: 12,
                  }}
                  formatter={(v: number) => [`$${v.toLocaleString()}`, "Earnings"]}
                />
                <Area type="monotone" dataKey="v" stroke="#A78BFA" strokeWidth={2.5} fill="url(#earn-grad)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* AI Suggestions + Profile */}
        <div className="space-y-4">
          {/* Profile completion */}
          <div className="rounded-2xl border border-white/10 bg-card/60 p-4 backdrop-blur-xl">
            <div className="flex items-center justify-between mb-3">
              <div className="text-sm font-semibold">Profile completion</div>
              <span className="text-xs text-accent font-bold">92%</span>
            </div>
            <div className="flex items-center gap-4">
              <ProgressRing value={92} size={72} strokeWidth={5} color="primary" label="Score" />
              <div className="flex-1 space-y-1.5">
                {[
                  { label: "Portfolio", done: true },
                  { label: "Skills verified", done: true },
                  { label: "LinkedIn linked", done: false },
                ].map(({ label, done }) => (
                  <div key={label} className="flex items-center gap-2 text-xs">
                    <div className={`h-3.5 w-3.5 rounded-full flex items-center justify-center shrink-0 ${done ? "bg-neon-green/20 border border-neon-green/40" : "bg-white/8 border border-white/15"}`}>
                      {done && <span className="text-neon-green text-[8px]">✓</span>}
                    </div>
                    <span className={done ? "text-foreground" : "text-muted-foreground"}>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* AI Suggestions */}
          <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/12 to-accent/8 p-4 backdrop-blur-xl">
            <div className="flex items-center gap-2 text-sm font-semibold mb-3">
              <Sparkles className="h-4 w-4 text-accent" />
              AI Suggestions
            </div>
            <ul className="space-y-2 text-xs">
              {[
                "Add a fintech case study to lift portfolio score by ~8 pts.",
                "Proposals sent within 2h win 22% more often.",
                "Verify TypeScript to unlock 14 new matches this week.",
              ].map((t, i) => (
                <li key={i} className="flex items-start gap-2 rounded-xl border border-white/10 bg-white/5 p-2.5">
                  <Sparkles className="h-3 w-3 text-accent mt-0.5 shrink-0" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Row 3 */}
      <div className="mt-4 grid gap-4 lg:grid-cols-3">
        {/* Projects */}
        <div className="lg:col-span-2 rounded-2xl border border-white/10 bg-card/60 p-6 backdrop-blur-xl">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-semibold font-display">Recommended projects</h3>
            <Link to="/marketplace" className="text-xs text-accent hover:underline flex items-center gap-1">
              View all <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
          <div className="divide-y divide-white/5">
            {projects.slice(0, 4).map((p) => (
              <div key={p.id} className="flex items-center justify-between py-3 group">
                <div className="flex-1 min-w-0 pr-3">
                  <div className="text-sm font-medium group-hover:text-primary transition line-clamp-1">{p.title}</div>
                  <div className="text-xs text-muted-foreground flex items-center gap-2 mt-0.5">
                    <span>{p.budget}</span>
                    <span>·</span>
                    <span>{p.deadline}</span>
                    <span>·</span>
                    <span>{p.proposals} proposals</span>
                  </div>
                </div>
                <Button size="sm" variant="outline" className="border-white/10 bg-white/5 text-xs hover:border-primary/30 hover:bg-primary/10 shrink-0">
                  Apply
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Messages */}
        <div className="rounded-2xl border border-white/10 bg-card/60 p-5 backdrop-blur-xl">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 text-sm font-semibold">
              <MessageSquare className="h-4 w-4 text-accent" />
              Messages
            </div>
            <span className="rounded-full bg-primary px-2 py-0.5 text-[10px] font-bold text-white">3</span>
          </div>
          <ul className="space-y-2.5">
            {messages.map((m) => (
              <li key={m.id} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/4 p-2.5 transition hover:border-primary/20 cursor-pointer">
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-primary text-xs font-bold text-white">
                  {m.avatar}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <div className="text-xs font-semibold truncate">{m.from}</div>
                    <div className="text-[10px] text-muted-foreground shrink-0 ml-1">{m.time}</div>
                  </div>
                  <div className="text-[11px] text-muted-foreground truncate">{m.preview}</div>
                </div>
                {m.unread && <span className="h-2 w-2 rounded-full bg-accent mt-1 shrink-0" />}
              </li>
            ))}
          </ul>
          <Link to="/dashboard/messages">
            <button className="mt-3 w-full rounded-xl border border-white/10 bg-white/5 py-1.5 text-xs text-center text-muted-foreground hover:text-foreground transition">
              Open all messages
            </button>
          </Link>
        </div>
      </div>

      {/* Row 4 — Proposals */}
      <div className="mt-4 rounded-2xl border border-white/10 bg-card/60 p-6 backdrop-blur-xl">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base font-semibold font-display">Recent proposals</h3>
          <Link to="/dashboard/proposals" className="text-xs text-accent hover:underline flex items-center gap-1">
            View all <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {proposals.slice(0, 4).map((p) => (
            <div key={p.id} className="rounded-xl border border-white/10 bg-white/4 p-3">
              <div className="flex items-center justify-between mb-2">
                <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold border ${
                  p.status === "Accepted" ? "bg-neon-green/10 border-neon-green/30 text-neon-green" :
                  p.status === "Rejected" ? "bg-destructive/10 border-destructive/30 text-destructive" :
                  "bg-amber-400/10 border-amber-400/30 text-amber-400"
                }`}>
                  {p.status}
                </span>
                <span className="text-xs font-bold text-primary">{p.aiScore}</span>
              </div>
              <div className="text-xs font-medium line-clamp-2">{p.project}</div>
              <div className="text-[10px] text-muted-foreground mt-1">{p.bid} · {p.client}</div>
              {/* AI score bar */}
              <div className="mt-2 h-1 rounded-full bg-white/8">
                <div
                  className="h-full rounded-full bg-gradient-primary"
                  style={{ width: `${p.aiScore}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardShell>
  );
}
