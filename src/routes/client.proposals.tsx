import { createFileRoute } from "@tanstack/react-router";
import { DashboardShell } from "@/components/DashboardShell";
import { freelancers } from "@/data/mock";
import { Button } from "@/components/ui/button";
import { BadgeCheck, Sparkles, Star } from "lucide-react";

export const Route = createFileRoute("/client/proposals")({
  head: () => ({ meta: [{ title: "Proposals — TalentStage" }] }),
  component: () => (
    <DashboardShell variant="client" title="Proposals" subtitle='For project: "AI Dashboard for analytics SaaS"'>
      <div className="grid gap-4">
        {freelancers.map((f) => (
          <div key={f.id} className="rounded-2xl border border-white/10 bg-card/60 p-5 backdrop-blur-xl">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-primary text-sm font-semibold text-white">{f.avatar}</div>
                <div>
                  <div className="flex items-center gap-1.5"><span className="text-sm font-semibold">{f.name}</span>{f.verified && <BadgeCheck className="h-4 w-4 text-accent" />}</div>
                  <div className="text-xs text-muted-foreground">{f.title} · ${f.hourlyRate}/hr</div>
                  <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground"><Star className="h-3 w-3 fill-amber-400 text-amber-400" />{f.rating} ({f.reviews})</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="rounded-full border border-accent/40 bg-accent/10 px-2 py-0.5 text-xs font-semibold text-accent"><Sparkles className="-mt-0.5 mr-1 inline h-3 w-3" />AI {f.match}</div>
                <Button variant="outline" size="sm" className="border-white/10 bg-white/5">Shortlist</Button>
                <Button size="sm" className="bg-gradient-primary text-white">Hire</Button>
              </div>
            </div>
            <p className="mt-3 text-sm text-foreground/90">Proposal: I'll deliver a polished AI dashboard with charts, filters, and an insights panel. 5-week timeline, two milestones, weekly demos.</p>
            <div className="mt-3 grid gap-3 sm:grid-cols-3 text-xs">
              <Pill k="Bid" v="$10,500" />
              <Pill k="Timeline" v="5 weeks" />
              <Pill k="Match" v={`${f.match}%`} />
            </div>
          </div>
        ))}
      </div>
    </DashboardShell>
  ),
});
function Pill({ k, v }: { k: string; v: string }) {
  return (<div className="rounded-lg border border-white/10 bg-white/5 p-2"><div className="text-muted-foreground">{k}</div><div className="font-semibold text-foreground">{v}</div></div>);
}
