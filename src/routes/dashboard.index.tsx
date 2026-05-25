import { createFileRoute, Link } from "@tanstack/react-router";
import { DashboardShell } from "@/components/DashboardShell";
import { StatCard } from "@/components/StatCard";
import { Wallet, Briefcase, Target, ShieldCheck, Sparkles, TrendingUp, MessageSquare } from "lucide-react";
import { earningsSeries, messages, projects } from "@/data/mock";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/dashboard/")({
  head: () => ({ meta: [{ title: "Dashboard — TalentStage" }] }),
  component: FreelancerDashboard,
});

function FreelancerDashboard() {
  return (
    <DashboardShell variant="freelancer" title="Good evening, Alex" subtitle="Here's what's happening with your work today.">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Total earnings" value="$48,210" delta="+12.4% MoM" icon={<Wallet className="h-4 w-4 text-primary" />} accent="primary" />
        <StatCard label="Active contracts" value="6" delta="2 ending this week" icon={<Briefcase className="h-4 w-4 text-accent" />} accent="accent" />
        <StatCard label="Proposal success" value="68%" delta="+4 pts" icon={<Target className="h-4 w-4 text-chart-3" />} accent="chart-3" />
        <StatCard label="Profile score" value="92/100" delta="Verified" icon={<ShieldCheck className="h-4 w-4 text-chart-5" />} accent="chart-5" />
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2 rounded-2xl border border-white/10 bg-card/60 p-6 backdrop-blur-xl">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-semibold">Earnings analytics</h3>
              <p className="text-xs text-muted-foreground">Last 12 months</p>
            </div>
            <div className="inline-flex items-center gap-1 rounded-md bg-accent/10 px-2 py-1 text-xs text-accent">
              <TrendingUp className="h-3 w-3" /> +24% YoY
            </div>
          </div>
          <div className="mt-4 h-64">
            <ResponsiveContainer>
              <AreaChart data={earningsSeries}>
                <defs>
                  <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#7C3AED" stopOpacity={0.6} />
                    <stop offset="100%" stopColor="#7C3AED" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="m" stroke="rgba(248,250,252,0.4)" fontSize={11} tickLine={false} axisLine={false} />
                <YAxis stroke="rgba(248,250,252,0.4)" fontSize={11} tickLine={false} axisLine={false} />
                <Tooltip contentStyle={{ background: "rgba(15,23,42,0.95)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12 }} />
                <Area type="monotone" dataKey="v" stroke="#A78BFA" strokeWidth={2} fill="url(#g1)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-primary/15 to-accent/10 p-6 backdrop-blur-xl">
          <div className="flex items-center gap-2 text-sm font-semibold"><Sparkles className="h-4 w-4 text-accent" /> AI Suggestions</div>
          <ul className="mt-4 space-y-3 text-sm">
            {[
              "Add a case study for your fintech work to lift portfolio score by ~8 pts.",
              "Your proposals win 22% more often when sent within 2 hours of posting.",
              "Verify 'TypeScript' to unlock 14 new high-budget matches this week.",
            ].map((t, i) => (
              <li key={i} className="rounded-xl border border-white/10 bg-white/5 p-3">{t}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2 rounded-2xl border border-white/10 bg-card/60 p-6 backdrop-blur-xl">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-semibold">Recommended projects</h3>
            <Link to="/marketplace" className="text-xs text-accent hover:underline">View all</Link>
          </div>
          <div className="mt-4 divide-y divide-white/5">
            {projects.slice(0, 4).map((p) => (
              <div key={p.id} className="flex items-center justify-between py-3">
                <div>
                  <div className="text-sm font-medium">{p.title}</div>
                  <div className="text-xs text-muted-foreground">{p.budget} · {p.deadline} · {p.proposals} proposals</div>
                </div>
                <Button size="sm" variant="outline" className="border-white/10 bg-white/5">Apply</Button>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-card/60 p-6 backdrop-blur-xl">
          <div className="flex items-center gap-2 text-sm font-semibold"><MessageSquare className="h-4 w-4 text-accent" /> Messages</div>
          <ul className="mt-4 space-y-3">
            {messages.map((m) => (
              <li key={m.id} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-3">
                <div className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-primary text-xs font-semibold text-white">{m.from.split(" ").map(w=>w[0]).join("")}</div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <div className="truncate text-sm font-medium">{m.from}</div>
                    <div className="text-xs text-muted-foreground">{m.time}</div>
                  </div>
                  <div className="truncate text-xs text-muted-foreground">{m.preview}</div>
                </div>
                {m.unread && <span className="mt-1 h-2 w-2 rounded-full bg-accent" />}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </DashboardShell>
  );
}
