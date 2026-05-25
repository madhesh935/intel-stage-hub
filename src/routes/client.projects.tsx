import { createFileRoute, Link } from "@tanstack/react-router";
import { DashboardShell } from "@/components/DashboardShell";
import { Button } from "@/components/ui/button";

const items = [
  { id: "ws-1", t: "AI Dashboard SaaS", c: "Aria Okafor", p: 62 },
  { id: "ws-1", t: "Brand identity", c: "Lina Haddad", p: 30 },
  { id: "ws-1", t: "RAG chatbot", c: "Yuki Tanaka", p: 85 },
];

export const Route = createFileRoute("/client/projects")({
  head: () => ({ meta: [{ title: "Active Projects — TalentStage" }] }),
  component: () => (
    <DashboardShell variant="client" title="Active projects" subtitle="Open the workspace to chat, share files, and review milestones.">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {items.map((p) => (
          <div key={p.t} className="rounded-2xl border border-white/10 bg-card/60 p-5 backdrop-blur-xl">
            <div className="text-xs text-muted-foreground">with {p.c}</div>
            <h3 className="mt-1 text-base font-semibold">{p.t}</h3>
            <div className="mt-4">
              <div className="flex justify-between text-xs text-muted-foreground"><span>Progress</span><span>{p.p}%</span></div>
              <div className="mt-1 h-2 overflow-hidden rounded-full bg-white/5"><div className="h-full rounded-full bg-gradient-primary" style={{ width: `${p.p}%` }} /></div>
            </div>
            <Link to="/workspace/$id" params={{ id: p.id }} className="mt-4 inline-block">
              <Button size="sm" className="bg-gradient-primary text-white">Open workspace</Button>
            </Link>
          </div>
        ))}
      </div>
    </DashboardShell>
  ),
});
