import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function StatCard({
  label, value, delta, icon, accent = "primary",
}: {
  label: string; value: string; delta?: string; icon: ReactNode;
  accent?: "primary" | "accent" | "chart-3" | "chart-5";
}) {
  const ring = {
    primary: "from-primary/30 to-transparent",
    accent: "from-accent/30 to-transparent",
    "chart-3": "from-chart-3/30 to-transparent",
    "chart-5": "from-chart-5/30 to-transparent",
  }[accent];
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-card/60 p-5 shadow-card backdrop-blur-xl"
    >
      <div className={`pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br ${ring} blur-2xl opacity-80`} />
      <div className="flex items-center justify-between">
        <span className="text-xs uppercase tracking-wider text-muted-foreground">{label}</span>
        <div className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/5 text-foreground">{icon}</div>
      </div>
      <div className="mt-3 text-2xl font-semibold tracking-tight">{value}</div>
      {delta && <div className="mt-1 text-xs text-accent">{delta}</div>}
    </motion.div>
  );
}
