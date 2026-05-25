import { createFileRoute } from "@tanstack/react-router";
import { DashboardShell } from "@/components/DashboardShell";
import { Button } from "@/components/ui/button";

const milestones = [
  { p: "AI Dashboard SaaS", m: "M2 — Charts & filters", a: 4500, s: "Ready to release" },
  { p: "AI Dashboard SaaS", m: "M3 — Insights panel", a: 4500, s: "In progress" },
  { p: "Brand identity", m: "M1 — Concepts", a: 2000, s: "In review" },
];

export const Route = createFileRoute("/client/payments")({
  head: () => ({ meta: [{ title: "Payments — TalentStage" }] }),
  component: () => (
    <DashboardShell variant="client" title="Payments" subtitle="Escrow milestones and platform fees.">
      <div className="grid gap-4">
        {milestones.map((x) => (
          <div key={x.m} className="rounded-2xl border border-white/10 bg-card/60 p-5 backdrop-blur-xl">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <div className="text-xs text-muted-foreground">{x.p}</div>
                <div className="text-sm font-semibold">{x.m}</div>
                <div className="mt-1 text-xs text-accent">{x.s}</div>
              </div>
              <div className="text-right text-sm">
                <div className="text-xl font-semibold">${x.a.toLocaleString()}</div>
                <div className="text-xs text-muted-foreground">Fee 5% · Net ${(x.a*0.95).toFixed(0)}</div>
              </div>
              <Button className="bg-gradient-primary text-white">Release</Button>
            </div>
          </div>
        ))}
      </div>
    </DashboardShell>
  ),
});
