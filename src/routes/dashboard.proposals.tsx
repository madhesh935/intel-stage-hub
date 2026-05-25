import { createFileRoute } from "@tanstack/react-router";
import { DashboardShell } from "@/components/DashboardShell";
import { Button } from "@/components/ui/button";
import { Sparkles, BadgeCheck } from "lucide-react";

const rows = [
  { p: "AI Dashboard for analytics SaaS", c: "Lumen Labs", bid: "$10,500", score: 94, status: "Shortlisted" },
  { p: "RAG chatbot over product docs", c: "Driftworks", bid: "$7,200", score: 91, status: "Sent" },
  { p: "Brand identity for fintech", c: "Northbank", bid: "$5,000", score: 87, status: "Viewed" },
  { p: "Webflow rebuild + SEO", c: "Quill Studio", bid: "$4,200", score: 82, status: "Sent" },
];

export const Route = createFileRoute("/dashboard/proposals")({
  head: () => ({ meta: [{ title: "Proposals — TalentStage" }] }),
  component: () => (
    <DashboardShell variant="freelancer" title="Proposals" subtitle="AI-scored and ranked for you.">
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-card/60 backdrop-blur-xl">
        <table className="w-full text-sm">
          <thead className="bg-white/5 text-left text-xs uppercase tracking-wider text-muted-foreground">
            <tr><th className="px-5 py-3">Project</th><th className="px-5 py-3">Client</th><th className="px-5 py-3">Bid</th><th className="px-5 py-3">AI score</th><th className="px-5 py-3">Status</th><th /></tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {rows.map((r) => (
              <tr key={r.p} className="transition hover:bg-white/5">
                <td className="px-5 py-3 font-medium">{r.p}</td>
                <td className="px-5 py-3 text-muted-foreground">{r.c}</td>
                <td className="px-5 py-3">{r.bid}</td>
                <td className="px-5 py-3"><span className="inline-flex items-center gap-1 rounded-full border border-accent/40 bg-accent/10 px-2 py-0.5 text-xs text-accent"><Sparkles className="h-3 w-3" />{r.score}</span></td>
                <td className="px-5 py-3"><span className="rounded-full bg-white/5 px-2 py-0.5 text-xs">{r.status}</span></td>
                <td className="px-5 py-3 text-right"><Button size="sm" variant="outline" className="border-white/10 bg-white/5">View</Button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 rounded-2xl border border-white/10 bg-gradient-to-br from-primary/15 to-accent/10 p-6 backdrop-blur-xl">
        <div className="flex items-center gap-2 text-sm font-semibold"><BadgeCheck className="h-4 w-4 text-accent" /> AI Proposal Evaluator</div>
        <p className="mt-1 text-xs text-muted-foreground">Latest proposal: "AI Dashboard for analytics SaaS"</p>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {[["Relevance", 94], ["Clarity", 88], ["Value", 91]].map(([k, v]) => (
            <div key={k as string} className="rounded-xl border border-white/10 bg-white/5 p-3">
              <div className="flex justify-between text-xs"><span className="text-muted-foreground">{k}</span><span className="font-semibold">{v}/100</span></div>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/5"><div className="h-full rounded-full bg-gradient-primary" style={{ width: `${v}%` }} /></div>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-foreground/90">Recommendation: Add 2 concrete deliverables and a relevant case study to push relevance over 95.</p>
      </div>
    </DashboardShell>
  ),
});
