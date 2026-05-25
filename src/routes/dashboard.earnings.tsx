import { createFileRoute } from "@tanstack/react-router";
import { DashboardShell } from "@/components/DashboardShell";
import { motion } from "framer-motion";
import {
  TrendingUp, DollarSign, Download, ArrowUpRight,
} from "lucide-react";
import {
  AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend,
} from "recharts";
import { earningsSeries, proposalSeries, categoryRevenue, transactions } from "@/data/mock";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

export const Route = createFileRoute("/dashboard/earnings")({
  head: () => ({ meta: [{ title: "Earnings — TalentStage" }] }),
  component: Earnings,
});

const TOOLTIP_STYLE = {
  contentStyle: {
    background: "rgba(9,11,17,0.95)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: 12,
    fontSize: 12,
  },
};

function Earnings() {
  return (
    <DashboardShell variant="freelancer" title="Earnings & Finance" subtitle="Track your income, withdrawals, and platform analytics.">
      {/* Top stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-6">
        {[
          { label: "Total lifetime", value: 48210, prefix: "$", delta: "+24% YoY", color: "text-primary" },
          { label: "This month", value: 9184, prefix: "$", delta: "+18%", color: "text-accent" },
          { label: "In escrow", value: 3500, prefix: "$", delta: "2 milestones", color: "text-amber-400" },
          { label: "Avg per project", value: 7200, prefix: "$", delta: "Last 6 projects", color: "text-neon-green" },
        ].map(({ label, value, prefix, delta, color }) => (
          <div key={label} className="rounded-2xl border border-white/10 bg-card/60 p-5 backdrop-blur-xl">
            <div className="text-xs text-muted-foreground">{label}</div>
            <div className={`mt-2 text-2xl font-bold font-display ${color}`}>
              {prefix}<AnimatedCounter to={value} />
            </div>
            <div className="text-[10px] text-muted-foreground mt-0.5">{delta}</div>
          </div>
        ))}
      </div>

      {/* Charts row */}
      <div className="grid gap-4 lg:grid-cols-3 mb-4">
        {/* Monthly earnings */}
        <div className="lg:col-span-2 rounded-2xl border border-white/10 bg-card/60 p-5 backdrop-blur-xl">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-sm font-semibold font-display">Monthly Earnings</h3>
              <p className="text-xs text-muted-foreground">Full year 2025</p>
            </div>
            <span className="inline-flex items-center gap-1 text-xs font-bold text-neon-green bg-neon-green/10 border border-neon-green/20 rounded-full px-2.5 py-1">
              <TrendingUp className="h-3 w-3" /> +24% YoY
            </span>
          </div>
          <div className="h-52">
            <ResponsiveContainer>
              <AreaChart data={earningsSeries}>
                <defs>
                  <linearGradient id="eg1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#8B5CF6" stopOpacity={0.55} />
                    <stop offset="100%" stopColor="#8B5CF6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
                <XAxis dataKey="m" stroke="rgba(248,250,252,0.3)" fontSize={11} tickLine={false} axisLine={false} />
                <YAxis stroke="rgba(248,250,252,0.3)" fontSize={11} tickLine={false} axisLine={false} tickFormatter={(v) => `$${v / 1000}k`} />
                <Tooltip {...TOOLTIP_STYLE} formatter={(v: number) => [`$${v.toLocaleString()}`, "Earnings"]} />
                <Area type="monotone" dataKey="v" stroke="#A78BFA" strokeWidth={2.5} fill="url(#eg1)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Revenue by category (pie) */}
        <div className="rounded-2xl border border-white/10 bg-card/60 p-5 backdrop-blur-xl">
          <h3 className="text-sm font-semibold font-display mb-4">Revenue by Category</h3>
          <div className="h-44">
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={categoryRevenue}
                  cx="50%"
                  cy="50%"
                  innerRadius={42}
                  outerRadius={68}
                  paddingAngle={3}
                  dataKey="value"
                >
                  {categoryRevenue.map((entry, i) => (
                    <Cell key={i} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip {...TOOLTIP_STYLE} formatter={(v: number) => [`$${v.toLocaleString()}`, ""]} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-1.5">
            {categoryRevenue.map((c) => (
              <div key={c.name} className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full" style={{ background: c.color }} />
                  {c.name}
                </div>
                <span className="font-semibold">${(c.value / 1000).toFixed(0)}k</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Proposal analytics bar chart */}
      <div className="mb-4 rounded-2xl border border-white/10 bg-card/60 p-5 backdrop-blur-xl">
        <h3 className="text-sm font-semibold font-display mb-4">Proposal Analytics (Sent vs. Won)</h3>
        <div className="h-48">
          <ResponsiveContainer>
            <BarChart data={proposalSeries} barGap={4}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
              <XAxis dataKey="m" stroke="rgba(248,250,252,0.3)" fontSize={11} tickLine={false} axisLine={false} />
              <YAxis stroke="rgba(248,250,252,0.3)" fontSize={11} tickLine={false} axisLine={false} />
              <Tooltip {...TOOLTIP_STYLE} />
              <Legend formatter={(v) => <span style={{ fontSize: 11, color: "#94A3B8" }}>{v}</span>} />
              <Bar dataKey="sent" name="Proposals Sent" fill="#8B5CF6" radius={[4, 4, 0, 0]} opacity={0.7} />
              <Bar dataKey="won" name="Proposals Won" fill="#06B6D4" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Transactions */}
      <div className="rounded-2xl border border-white/10 bg-card/60 p-5 backdrop-blur-xl">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-semibold font-display">Transaction History</h3>
          <button className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition">
            <Download className="h-3.5 w-3.5" /> Export CSV
          </button>
        </div>
        <div className="space-y-2">
          {transactions.map((tx, i) => (
            <motion.div
              key={tx.id}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.04 }}
              className="flex items-center justify-between rounded-xl border border-white/8 bg-white/4 px-4 py-3"
            >
              <div className="flex items-center gap-3">
                <div className={`h-8 w-8 rounded-xl flex items-center justify-center ${tx.type === "Payment" ? "bg-neon-green/10 border border-neon-green/20" : "bg-amber-400/10 border border-amber-400/20"}`}>
                  {tx.type === "Payment"
                    ? <DollarSign className="h-3.5 w-3.5 text-neon-green" />
                    : <ArrowUpRight className="h-3.5 w-3.5 text-amber-400" />
                  }
                </div>
                <div>
                  <div className="text-sm font-medium">{tx.project}</div>
                  <div className="text-[10px] text-muted-foreground">{tx.date}</div>
                </div>
              </div>
              <div className="text-right">
                <div className={`text-sm font-bold ${tx.type === "Payment" ? "text-neon-green" : "text-amber-400"}`}>
                  {tx.type === "Payment" ? "+" : "-"}${tx.amount.toLocaleString()}
                </div>
                <div className={`text-[10px] ${tx.status === "Completed" ? "text-neon-green" : "text-amber-400"}`}>
                  {tx.status}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </DashboardShell>
  );
}
