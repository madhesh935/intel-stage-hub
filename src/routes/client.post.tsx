import { createFileRoute } from "@tanstack/react-router";
import { DashboardShell } from "@/components/DashboardShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sparkles } from "lucide-react";

export const Route = createFileRoute("/client/post")({
  head: () => ({ meta: [{ title: "Post a project — TalentStage" }] }),
  component: () => (
    <DashboardShell variant="client" title="Post a project" subtitle="Describe the outcome — AI scopes the rest.">
      <div className="grid gap-4 lg:grid-cols-3">
        <form className="space-y-4 rounded-2xl border border-white/10 bg-card/60 p-6 backdrop-blur-xl lg:col-span-2" onSubmit={(e)=>e.preventDefault()}>
          <Group label="Project title"><Input placeholder="e.g. Build an AI dashboard for analytics SaaS" className="h-11 border-white/10 bg-white/5" /></Group>
          <Group label="Describe the outcome">
            <textarea rows={5} placeholder="What does success look like?" className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm" />
          </Group>
          <div className="grid gap-4 sm:grid-cols-2">
            <Group label="Budget"><Input placeholder="$8k–$12k" className="h-11 border-white/10 bg-white/5" /></Group>
            <Group label="Deadline"><Input placeholder="6 weeks" className="h-11 border-white/10 bg-white/5" /></Group>
          </div>
          <Group label="Required skills"><Input placeholder="Next.js, TypeScript, Recharts…" className="h-11 border-white/10 bg-white/5" /></Group>
          <div className="flex gap-2">
            <Button className="bg-gradient-primary text-white">Publish project</Button>
            <Button type="button" variant="outline" className="border-white/10 bg-white/5">Save draft</Button>
          </div>
        </form>

        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-primary/15 to-accent/10 p-6 backdrop-blur-xl">
          <div className="flex items-center gap-2 text-sm font-semibold"><Sparkles className="h-4 w-4 text-accent" /> AI Project Scoping</div>
          <p className="mt-1 text-xs text-muted-foreground">Auto-drafted from your input</p>
          <div className="mt-4 space-y-3 text-sm">
            <Hint k="Deliverables" v="Dashboard, charts, AI insights panel, filters" />
            <Hint k="Timeline" v="5–7 weeks" />
            <Hint k="Budget" v="$9k–$13k" />
            <Hint k="Skills" v="Next.js · Recharts · TypeScript · LLMs" />
          </div>
          <Button className="mt-4 w-full bg-white/10 hover:bg-white/15">Apply suggestions</Button>
        </div>
      </div>
    </DashboardShell>
  ),
});

function Group({ label, children }: { label: string; children: React.ReactNode }) {
  return (<div className="grid gap-1.5"><Label className="text-xs uppercase tracking-wider text-muted-foreground">{label}</Label>{children}</div>);
}
function Hint({ k, v }: { k: string; v: string }) {
  return (<div className="rounded-xl border border-white/10 bg-white/5 p-3"><div className="text-xs text-muted-foreground">{k}</div><div className="text-sm font-medium">{v}</div></div>);
}
