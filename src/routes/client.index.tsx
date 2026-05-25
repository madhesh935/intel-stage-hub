import { createFileRoute } from "@tanstack/react-router";
import { DashboardShell } from "@/components/DashboardShell";
import { StatCard } from "@/components/StatCard";
import { Briefcase, Users, FileText, CreditCard, Sparkles } from "lucide-react";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { budgetSeries, freelancers } from "@/data/mock";
import { FreelancerCard } from "@/components/FreelancerCard";

export const Route = createFileRoute("/client/")({
  head: () => ({ meta: [{ title: "Client Dashboard — TalentStage" }] }),
  component: ClientDashboard,
});

function ClientDashboard() {
  return (
    <DashboardShell variant="client" title="Welcome back" subtitle="Your hiring overview, at a glance.">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Open projects" value="4" icon={<Briefcase className="h-4 w-4 text-primary" />} accent="primary" />
        <StatCard label="Proposals received" value="58" delta="12 new today" icon={<FileText className="h-4 w-4 text-accent" />} accent="accent" />
        <StatCard label="Active contracts" value="9" icon={<Users className="h-4 w-4 text-chart-3" />} accent="chart-3" />
        <StatCard label="Pending payments" value="$24,800" delta="3 milestones" icon={<CreditCard className="h-4 w-4 text-chart-5" />} accent="chart-5" />
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2 rounded-2xl border border-white/10 bg-card/60 p-6 backdrop-blur-xl">
          <h3 className="text-base font-semibold">Budget analytics</h3>
          <p className="text-xs text-muted-foreground">Project spend by month</p>
          <div className="mt-4 h-64">
            <ResponsiveContainer>
              <BarChart data={budgetSeries}>
                <XAxis dataKey="m" stroke="rgba(248,250,252,0.4)" fontSize={11} tickLine={false} axisLine={false} />
                <YAxis stroke="rgba(248,250,252,0.4)" fontSize={11} tickLine={false} axisLine={false} />
                <Tooltip contentStyle={{ background: "rgba(15,23,42,0.95)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12 }} />
                <Bar dataKey="v" fill="#06B6D4" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-primary/15 to-accent/10 p-6 backdrop-blur-xl">
          <div className="flex items-center gap-2 text-sm font-semibold"><Sparkles className="h-4 w-4 text-accent" /> Milestone payments</div>
          <ul className="mt-4 space-y-3 text-sm">
            {[
              { p: "AI Dashboard MVP", m: "Milestone 2 — $4,500", s: "Ready to release" },
              { p: "Brand identity", m: "Milestone 1 — $2,000", s: "In review" },
              { p: "Mobile app", m: "Milestone 3 — $6,200", s: "Awaiting delivery" },
            ].map((x) => (
              <li key={x.p} className="rounded-xl border border-white/10 bg-white/5 p-3">
                <div className="text-sm font-medium">{x.p}</div>
                <div className="text-xs text-muted-foreground">{x.m}</div>
                <div className="mt-1 text-xs text-accent">{x.s}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-white/10 bg-card/60 p-6 backdrop-blur-xl">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-accent" />
          <h3 className="text-base font-semibold">AI-recommended freelancers</h3>
        </div>
        <p className="text-xs text-muted-foreground">Based on your last project: "AI dashboard for analytics SaaS"</p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {freelancers.slice(0, 3).map((f, i) => <FreelancerCard key={f.id} f={f} index={i} />)}
        </div>
      </div>
    </DashboardShell>
  );
}
