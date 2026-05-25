import { createFileRoute } from "@tanstack/react-router";
import { DashboardShell } from "@/components/DashboardShell";
import { earningsSeries } from "@/data/mock";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Button } from "@/components/ui/button";

const txns = [
  { d: "Nov 12", p: "AI Dashboard SaaS · M2", a: "+$4,500" },
  { d: "Nov 04", p: "Brand identity · M1", a: "+$2,000" },
  { d: "Oct 28", p: "Withdrawal to bank", a: "-$6,200" },
  { d: "Oct 18", p: "Mobile app · M3", a: "+$6,200" },
];

export const Route = createFileRoute("/dashboard/earnings")({
  head: () => ({ meta: [{ title: "Earnings — TalentStage" }] }),
  component: () => (
    <DashboardShell variant="freelancer" title="Earnings" subtitle="Track payouts, milestones, and withdrawals.">
      <div className="grid gap-4 sm:grid-cols-3">
        {[
          ["Available", "$8,420"],
          ["In escrow", "$15,800"],
          ["Lifetime", "$148,210"],
        ].map(([l, v]) => (
          <div key={l} className="rounded-2xl border border-white/10 bg-card/60 p-5 backdrop-blur-xl">
            <div className="text-xs uppercase tracking-wider text-muted-foreground">{l}</div>
            <div className="mt-2 text-2xl font-semibold">{v}</div>
          </div>
        ))}
      </div>
      <div className="mt-6 rounded-2xl border border-white/10 bg-card/60 p-6 backdrop-blur-xl">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-semibold">Cashflow</h3>
          <Button size="sm" className="bg-gradient-primary text-white">Withdraw</Button>
        </div>
        <div className="mt-4 h-64">
          <ResponsiveContainer>
            <AreaChart data={earningsSeries}>
              <defs>
                <linearGradient id="g2" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#06B6D4" stopOpacity={0.6} />
                  <stop offset="100%" stopColor="#06B6D4" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="m" stroke="rgba(248,250,252,0.4)" fontSize={11} tickLine={false} axisLine={false} />
              <YAxis stroke="rgba(248,250,252,0.4)" fontSize={11} tickLine={false} axisLine={false} />
              <Tooltip contentStyle={{ background: "rgba(15,23,42,0.95)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12 }} />
              <Area type="monotone" dataKey="v" stroke="#06B6D4" strokeWidth={2} fill="url(#g2)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-card/60 backdrop-blur-xl">
        <table className="w-full text-sm">
          <thead className="bg-white/5 text-left text-xs uppercase text-muted-foreground"><tr><th className="px-5 py-3">Date</th><th className="px-5 py-3">Description</th><th className="px-5 py-3 text-right">Amount</th></tr></thead>
          <tbody className="divide-y divide-white/5">
            {txns.map((t) => (
              <tr key={t.d + t.p}><td className="px-5 py-3 text-muted-foreground">{t.d}</td><td className="px-5 py-3">{t.p}</td><td className={`px-5 py-3 text-right font-semibold ${t.a.startsWith("+") ? "text-emerald-400" : "text-foreground"}`}>{t.a}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardShell>
  ),
});
