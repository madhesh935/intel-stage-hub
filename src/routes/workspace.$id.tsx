import { createFileRoute } from "@tanstack/react-router";
import { DashboardShell } from "@/components/DashboardShell";
import { Send, Paperclip, CheckCircle2, Circle, Upload } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/workspace/$id")({
  head: () => ({ meta: [{ title: "Workspace — TalentStage" }] }),
  component: Workspace,
});

const milestones = [
  { t: "Kickoff & discovery", done: true },
  { t: "Wireframes approved", done: true },
  { t: "Hi-fi design v1", done: true },
  { t: "Implementation sprint 1", done: false },
  { t: "QA & launch", done: false },
];

function Workspace() {
  return (
    <DashboardShell variant="client" title="AI Dashboard SaaS" subtitle="Workspace · with Aria Okafor">
      <div className="grid gap-4 lg:grid-cols-[1fr_320px]">
        <div className="rounded-2xl border border-white/10 bg-card/60 backdrop-blur-xl">
          <div className="border-b border-white/10 p-4 text-sm font-semibold">Project chat</div>
          <div className="space-y-3 p-5 max-h-[420px] overflow-y-auto">
            <Bubble from="them">Latest build is live. Sharing the loom 👇</Bubble>
            <Bubble from="me">Awesome — reviewing now.</Bubble>
            <Bubble from="them">Charts are now p95 &lt; 80ms. Cached query results.</Bubble>
            <Bubble from="me">Ship it. Releasing M2 payment.</Bubble>
          </div>
          <div className="flex items-center gap-2 border-t border-white/10 p-3">
            <button className="grid h-9 w-9 place-items-center rounded-lg bg-white/5 hover:bg-white/10"><Paperclip className="h-4 w-4" /></button>
            <Input placeholder="Send a message…" className="h-10 border-white/10 bg-white/5" />
            <button className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-primary text-white"><Send className="h-4 w-4" /></button>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl border border-white/10 bg-card/60 p-5 backdrop-blur-xl">
            <div className="text-sm font-semibold">Milestones</div>
            <ul className="mt-3 space-y-2 text-sm">
              {milestones.map((m) => (
                <li key={m.t} className="flex items-center gap-2">
                  {m.done ? <CheckCircle2 className="h-4 w-4 text-accent" /> : <Circle className="h-4 w-4 text-muted-foreground" />}
                  <span className={m.done ? "text-foreground" : "text-muted-foreground"}>{m.t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-card/60 p-5 backdrop-blur-xl">
            <div className="text-sm font-semibold">Files</div>
            <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
              {["brief.pdf","design-v1.fig","build.mp4","invoice.pdf"].map((n) => (
                <div key={n} className="rounded-lg border border-white/10 bg-white/5 p-2">{n}</div>
              ))}
            </div>
            <Button size="sm" className="mt-3 w-full bg-white/10 hover:bg-white/15"><Upload className="mr-1.5 h-3 w-3" />Upload</Button>
          </div>
          <div className="rounded-2xl border border-white/10 bg-card/60 p-5 backdrop-blur-xl">
            <div className="text-sm font-semibold">Activity</div>
            <ol className="mt-3 space-y-2 text-xs text-muted-foreground">
              <li>· Aria uploaded design-v1.fig (2h)</li>
              <li>· You released milestone M2 (1d)</li>
              <li>· Aria submitted M2 deliverable (1d)</li>
            </ol>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}

function Bubble({ from, children }: { from: "me" | "them"; children: React.ReactNode }) {
  const mine = from === "me";
  return (
    <div className={`flex ${mine ? "justify-end" : "justify-start"}`}>
      <div className={`max-w-md rounded-2xl px-4 py-2 text-sm ${mine ? "bg-gradient-primary text-white" : "bg-white/5 text-foreground"}`}>{children}</div>
    </div>
  );
}
