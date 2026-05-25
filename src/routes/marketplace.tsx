import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { FreelancerCard } from "@/components/FreelancerCard";
import { ProjectCard } from "@/components/ProjectCard";
import { freelancers, projects } from "@/data/mock";
import { Search, SlidersHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/marketplace")({
  head: () => ({ meta: [{ title: "Marketplace — TalentStage" }, { name: "description", content: "Browse top freelancers and projects." }] }),
  component: Marketplace,
});

function Marketplace() {
  const [tab, setTab] = useState<"freelancers" | "projects">("freelancers");
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-hero-radial opacity-40" />
      <main className="mx-auto max-w-7xl px-6 pb-24 pt-28">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Marketplace</h1>
            <p className="mt-1 text-sm text-muted-foreground">Hand-picked talent and live projects. Sorted by AI match.</p>
          </div>
          <div className="inline-flex rounded-xl border border-white/10 bg-card/60 p-1 backdrop-blur-xl">
            {(["freelancers", "projects"] as const).map((t) => (
              <button key={t} onClick={() => setTab(t)}
                className={`rounded-lg px-4 py-1.5 text-sm capitalize transition ${tab===t ? "bg-gradient-primary text-white shadow-glow" : "text-muted-foreground hover:text-foreground"}`}>
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[260px_1fr]">
          <aside className="h-fit rounded-2xl border border-white/10 bg-card/60 p-5 backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-2 text-sm font-semibold"><SlidersHorizontal className="h-4 w-4 text-accent" /> Filters</div>
              <button className="text-xs text-muted-foreground hover:text-foreground">Reset</button>
            </div>
            <Filter title="Category" options={["Design", "Engineering", "AI/ML", "Marketing", "Writing"]} />
            <Filter title="Experience" options={["Entry", "Intermediate", "Expert"]} />
            <Filter title="Budget" options={["< $1k", "$1k–$5k", "$5k–$10k", "$10k+"]} />
            <Filter title="Availability" options={["Available now", "Within a week", "Flexible"]} />
          </aside>

          <div>
            <div className="relative mb-5">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder={`Search ${tab}…`} className="h-11 border-white/10 bg-white/5 pl-10" />
            </div>

            {tab === "freelancers" ? (
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {freelancers.map((f, i) => <FreelancerCard key={f.id} f={f} index={i} />)}
              </div>
            ) : (
              <div className="grid gap-4 md:grid-cols-2">
                {projects.map((p, i) => <ProjectCard key={p.id} p={p} index={i} />)}
              </div>
            )}

            <div className="mt-8 flex justify-center">
              <Button variant="outline" className="border-white/10 bg-white/5">Load more</Button>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

function Filter({ title, options }: { title: string; options: string[] }) {
  return (
    <div className="mt-5">
      <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{title}</div>
      <ul className="mt-2 space-y-1.5">
        {options.map((o) => (
          <li key={o}>
            <label className="flex cursor-pointer items-center gap-2 rounded-md px-1 py-1 text-sm text-foreground/85 hover:bg-white/5">
              <input type="checkbox" className="h-3.5 w-3.5 accent-[#7C3AED]" />
              {o}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
