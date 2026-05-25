import { createFileRoute } from "@tanstack/react-router";
import { DashboardShell } from "@/components/DashboardShell";
import { FileSignature, Calendar, DollarSign } from "lucide-react";

const contracts = [
  { p: "AI Dashboard SaaS", c: "Lumen Labs", amount: "$12,000", status: "Active", end: "Dec 12" },
  { p: "Brand identity refresh", c: "Northbank", amount: "$5,000", status: "Active", end: "Nov 30" },
  { p: "Webflow build", c: "Quill Studio", amount: "$4,200", status: "Pending start", end: "Dec 18" },
];

export const Route = createFileRoute("/dashboard/contracts")({
  head: () => ({ meta: [{ title: "Contracts — TalentStage" }] }),
  component: () => (
    <DashboardShell variant="freelancer" title="Contracts" subtitle="All active and pending engagements.">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {contracts.map((c) => (
          <div key={c.p} className="rounded-2xl border border-white/10 bg-card/60 p-5 backdrop-blur-xl">
            <div className="flex items-center justify-between text-xs"><span className="text-muted-foreground">{c.c}</span><span className="rounded-full bg-accent/15 px-2 py-0.5 text-accent">{c.status}</span></div>
            <h3 className="mt-2 text-base font-semibold">{c.p}</h3>
            <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
              <div className="rounded-lg border border-white/10 bg-white/5 p-2"><DollarSign className="mb-1 h-3 w-3 text-accent" /><div className="font-semibold">{c.amount}</div></div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-2"><Calendar className="mb-1 h-3 w-3 text-accent" /><div className="font-semibold">Ends {c.end}</div></div>
            </div>
            <button className="mt-4 inline-flex items-center gap-1 text-xs text-accent hover:underline"><FileSignature className="h-3 w-3" /> Open workspace</button>
          </div>
        ))}
      </div>
    </DashboardShell>
  ),
});
