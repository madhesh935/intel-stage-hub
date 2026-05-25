import { createFileRoute } from "@tanstack/react-router";
import { DashboardShell } from "@/components/DashboardShell";
import { BadgeCheck, Code2, Brain, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";

const skills = [
  { n: "TypeScript", Icon: Code2, level: "Advanced", verified: true },
  { n: "React", Icon: Code2, level: "Expert", verified: true },
  { n: "LLM Engineering", Icon: Brain, level: "Intermediate", verified: false },
  { n: "Brand Design", Icon: Palette, level: "Advanced", verified: false },
];

export const Route = createFileRoute("/dashboard/skills")({
  head: () => ({ meta: [{ title: "Skill Verification — TalentStage" }] }),
  component: () => (
    <DashboardShell variant="freelancer" title="Skill verification" subtitle="Earn verified badges via AI-graded tests and challenges.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((s) => (
          <div key={s.n} className="rounded-2xl border border-white/10 bg-card/60 p-5 backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/5"><s.Icon className="h-5 w-5 text-accent" /></div>
              {s.verified && <BadgeCheck className="h-5 w-5 text-accent" />}
            </div>
            <div className="mt-3 text-base font-semibold">{s.n}</div>
            <div className="text-xs text-muted-foreground">{s.level}</div>
            <Button size="sm" className={`mt-4 w-full ${s.verified ? "bg-white/10 hover:bg-white/15" : "bg-gradient-primary text-white"}`}>
              {s.verified ? "Retake test" : "Verify skill"}
            </Button>
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-card/60 p-6 backdrop-blur-xl">
          <h3 className="text-base font-semibold">Sample question · TypeScript</h3>
          <p className="mt-2 text-sm text-muted-foreground">What's the type of <code className="rounded bg-white/10 px-1">Awaited&lt;Promise&lt;string&gt;&gt;</code>?</p>
          <div className="mt-4 space-y-2">
            {["Promise<string>", "string", "any", "never"].map((o, i) => (
              <label key={o} className={`flex cursor-pointer items-center gap-3 rounded-xl border p-3 text-sm transition ${i===1 ? "border-accent/40 bg-accent/10" : "border-white/10 bg-white/5 hover:bg-white/10"}`}>
                <input type="radio" name="q" defaultChecked={i===1} className="accent-[#7C3AED]" />
                {o}
              </label>
            ))}
          </div>
          <Button className="mt-4 bg-gradient-primary text-white">Submit answer</Button>
        </div>
        <div className="rounded-2xl border border-white/10 bg-card/60 p-6 backdrop-blur-xl">
          <h3 className="text-base font-semibold">Coding challenge</h3>
          <p className="mt-2 text-sm text-muted-foreground">Implement a debounce function.</p>
          <pre className="mt-4 overflow-x-auto rounded-xl border border-white/10 bg-[#0b1224] p-4 text-xs text-foreground/90">
{`function debounce<T extends (...a: any[]) => any>(fn: T, ms: number) {
  let t: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), ms);
  };
}`}
          </pre>
          <Button className="mt-4 bg-gradient-primary text-white">Run tests</Button>
        </div>
      </div>
    </DashboardShell>
  ),
});
