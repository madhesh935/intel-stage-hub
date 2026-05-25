import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { FreelancerCard } from "@/components/FreelancerCard";
import { ProjectCard } from "@/components/ProjectCard";
import { freelancers, projects } from "@/data/mock";
import { Search, SlidersHorizontal, Sparkles, Star, TrendingUp, X } from "lucide-react";

export const Route = createFileRoute("/marketplace")({
  head: () => ({ meta: [
    { title: "Marketplace — TalentStage" },
    { name: "description", content: "Browse top freelancers and live projects. AI-sorted by best match." },
  ]}),
  component: Marketplace,
});

const CATEGORIES = ["All", "Engineering", "AI/ML", "Design", "Marketing", "Writing"];
const SORT_OPTIONS = ["Best Match", "Highest Rated", "Most Reviews", "Lowest Rate"];

function Marketplace() {
  const [tab, setTab] = useState<"freelancers" | "projects">("freelancers");
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("Best Match");
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const toggleFilter = (f: string) =>
    setActiveFilters((prev) => prev.includes(f) ? prev.filter((x) => x !== f) : [...prev, f]);

  const filteredFreelancers = freelancers.filter((f) => {
    const matchesQuery = !query || f.name.toLowerCase().includes(query.toLowerCase()) || f.title.toLowerCase().includes(query.toLowerCase()) || f.skills.some((s) => s.toLowerCase().includes(query.toLowerCase()));
    const matchesCat = category === "All" || f.category === category;
    return matchesQuery && matchesCat;
  });

  const filteredProjects = projects.filter((p) => {
    const matchesQuery = !query || p.title.toLowerCase().includes(query.toLowerCase());
    const matchesCat = category === "All" || p.category === category;
    return matchesQuery && matchesCat;
  });

  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-hero-radial opacity-30" />

      <main className="mx-auto max-w-7xl px-6 pb-24 pt-28">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-medium text-accent mb-2">
                <Sparkles className="h-3 w-3" />
                AI-sorted by best match
              </div>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl font-display">Marketplace</h1>
              <p className="mt-1 text-sm text-muted-foreground">
                {filteredFreelancers.length} freelancers · {filteredProjects.length} projects · Updated live
              </p>
            </div>
            <div className="inline-flex rounded-2xl border border-white/10 bg-card/60 p-1.5 backdrop-blur-xl">
              {(["freelancers", "projects"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`rounded-xl px-5 py-2 text-sm font-medium capitalize transition ${
                    tab === t ? "bg-gradient-primary text-white shadow-glow" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Category pills */}
          <div className="mt-4 flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`rounded-xl px-3 py-1.5 text-xs font-medium transition ${
                  category === c ? "bg-primary/15 border border-primary/35 text-primary" : "border border-white/10 bg-white/5 text-muted-foreground hover:border-white/20"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[256px_1fr]">
          {/* Filters sidebar */}
          <aside className="h-fit rounded-2xl border border-white/10 bg-card/60 p-5 backdrop-blur-xl sticky top-24">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <SlidersHorizontal className="h-4 w-4 text-accent" />
                Filters
              </div>
              {activeFilters.length > 0 && (
                <button onClick={() => setActiveFilters([])} className="text-xs text-muted-foreground hover:text-foreground transition">
                  Clear all
                </button>
              )}
            </div>

            {/* Sort */}
            <div className="mb-5">
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold mb-2">Sort By</div>
              <div className="space-y-1">
                {SORT_OPTIONS.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSort(s)}
                    className={`w-full rounded-lg px-3 py-1.5 text-left text-xs transition ${
                      sort === s ? "bg-primary/10 border border-primary/25 text-primary font-medium" : "text-muted-foreground hover:bg-white/5"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <FilterGroup title="Experience" options={["Entry", "Intermediate", "Expert"]} active={activeFilters} onToggle={toggleFilter} />
            <FilterGroup title="Budget" options={["< $1k", "$1k–$5k", "$5k–$10k", "$10k+"]} active={activeFilters} onToggle={toggleFilter} />
            <FilterGroup title="Availability" options={["Available now", "Within a week", "Flexible"]} active={activeFilters} onToggle={toggleFilter} />
            <FilterGroup title="Rating" options={["5 stars", "4.5+ stars", "4+ stars"]} active={activeFilters} onToggle={toggleFilter} />

            {/* AI match threshold */}
            <div className="mt-5">
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold mb-2">Min AI Match Score</div>
              <div className="flex items-center gap-2">
                <input type="range" min={0} max={100} defaultValue={70} className="flex-1 accent-[#8B5CF6]" />
                <span className="text-xs font-bold text-primary">70%</span>
              </div>
            </div>
          </aside>

          {/* Content */}
          <div>
            {/* Search */}
            <div className="relative mb-5">
              <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={`Search ${tab}…`}
                className="h-12 w-full rounded-2xl border border-white/12 bg-card/60 pl-11 pr-4 text-sm outline-none backdrop-blur-xl transition focus:border-primary/40 focus:ring-1 focus:ring-primary/20 placeholder:text-muted-foreground"
              />
            </div>

            {/* Active filter chips */}
            <AnimatePresence>
              {activeFilters.length > 0 && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="mb-4 flex flex-wrap gap-2"
                >
                  {activeFilters.map((f) => (
                    <button
                      key={f}
                      onClick={() => toggleFilter(f)}
                      className="flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary"
                    >
                      {f}
                      <X className="h-3 w-3" />
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* AI Spotlight section */}
            {tab === "freelancers" && (
              <div className="mb-5 rounded-2xl border border-primary/25 bg-gradient-to-r from-primary/10 to-accent/8 p-4 backdrop-blur-xl">
                <div className="flex items-center gap-2 text-xs font-semibold text-accent mb-3">
                  <Sparkles className="h-3.5 w-3.5" />
                  AI Best Match for you today
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {freelancers.slice(0, 3).map((f, i) => (
                    <FreelancerCard key={f.id} f={f} index={i} />
                  ))}
                </div>
              </div>
            )}

            {/* Grid */}
            <AnimatePresence mode="wait">
              {tab === "freelancers" ? (
                <motion.div
                  key="freelancers"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
                >
                  {filteredFreelancers.map((f, i) => (
                    <FreelancerCard key={f.id} f={f} index={i} />
                  ))}
                  {filteredFreelancers.length === 0 && (
                    <div className="col-span-3 rounded-2xl border border-white/10 bg-card/60 p-12 text-center backdrop-blur-xl">
                      <Search className="h-10 w-10 text-muted-foreground mx-auto mb-3 opacity-30" />
                      <div className="text-sm font-medium">No freelancers found</div>
                      <p className="text-xs text-muted-foreground mt-1">Try adjusting your search or filters</p>
                    </div>
                  )}
                </motion.div>
              ) : (
                <motion.div
                  key="projects"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="grid gap-4 md:grid-cols-2"
                >
                  {filteredProjects.map((p, i) => (
                    <ProjectCard key={p.id} p={p} index={i} />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Load more */}
            <div className="mt-8 flex justify-center">
              <button className="rounded-2xl border border-white/12 bg-white/5 px-8 py-3 text-sm font-medium text-muted-foreground transition hover:border-primary/30 hover:bg-primary/10 hover:text-primary">
                Load more
              </button>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

function FilterGroup({
  title, options, active, onToggle,
}: { title: string; options: string[]; active: string[]; onToggle: (f: string) => void }) {
  return (
    <div className="mb-4">
      <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold mb-2">{title}</div>
      <div className="space-y-1">
        {options.map((o) => (
          <label key={o} className="flex cursor-pointer items-center gap-2 rounded-lg px-1 py-1.5 text-xs text-foreground/85 hover:bg-white/5 transition">
            <div
              onClick={() => onToggle(o)}
              className={`h-4 w-4 rounded flex items-center justify-center border transition ${active.includes(o) ? "bg-primary border-primary" : "border-white/20 bg-transparent"}`}
            >
              {active.includes(o) && <span className="text-white text-[9px] font-bold">✓</span>}
            </div>
            {o}
          </label>
        ))}
      </div>
    </div>
  );
}
