import { createFileRoute } from "@tanstack/react-router";
import { DashboardShell } from "@/components/DashboardShell";
import { Github, ExternalLink, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const items = [
  { t: "AI Dashboard SaaS", d: "Analytics, alerts, forecasting", tech: ["Next.js", "Recharts"], cat: "Product", score: 94 },
  { t: "Fintech Mobile App", d: "iOS/Android wallet experience", tech: ["React Native"], cat: "Mobile", score: 88 },
  { t: "Brand System", d: "Color, type, motion", tech: ["Figma"], cat: "Brand", score: 91 },
  { t: "Open-source CLI", d: "Dev productivity tool", tech: ["TypeScript"], cat: "OSS", score: 86 },
  { t: "Webflow Landing", d: "Conversion-led design", tech: ["Webflow"], cat: "Web", score: 82 },
  { t: "AI Agent Demo", d: "Multi-tool reasoning", tech: ["LangGraph"], cat: "AI", score: 95 },
];

export const Route = createFileRoute("/dashboard/portfolio")({
  head: () => ({ meta: [{ title: "Portfolio — TalentStage" }] }),
  component: () => (
    <DashboardShell variant="freelancer" title="Portfolio" subtitle="Your work, scored by AI for quality and clarity.">
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
        {items.map((p, i) => (
          <div key={p.t} className="break-inside-avoid rounded-2xl border border-white/10 bg-card/60 p-5 backdrop-blur-xl">
            <div className={`relative mb-4 rounded-xl bg-gradient-to-br ${i % 2 ? "from-primary/40 to-accent/20 h-44" : "from-accent/40 to-primary/20 h-32"}`}>
              <div className="absolute right-2 top-2 rounded-full border border-accent/40 bg-accent/15 px-2 py-0.5 text-[10px] font-semibold text-accent">
                <Sparkles className="-mt-0.5 mr-1 inline h-3 w-3" />AI {p.score}
              </div>
            </div>
            <div className="text-xs text-accent">{p.cat}</div>
            <h3 className="mt-1 text-base font-semibold">{p.t}</h3>
            <p className="text-sm text-muted-foreground">{p.d}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {p.tech.map((t) => <span key={t} className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[11px]">{t}</span>)}
            </div>
            <div className="mt-4 flex gap-2">
              <Button size="sm" variant="outline" className="border-white/10 bg-white/5"><ExternalLink className="mr-1.5 h-3 w-3" />Demo</Button>
              <Button size="sm" variant="outline" className="border-white/10 bg-white/5"><Github className="mr-1.5 h-3 w-3" />Code</Button>
            </div>
          </div>
        ))}
      </div>
    </DashboardShell>
  ),
});
