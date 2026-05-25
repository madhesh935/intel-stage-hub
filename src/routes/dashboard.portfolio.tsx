import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { DashboardShell } from "@/components/DashboardShell";
import { Sparkles, Plus, ExternalLink, Github, Eye } from "lucide-react";
import { portfolioProjects } from "@/data/mock";
import { AIBadge } from "@/components/ui/AIBadge";

export const Route = createFileRoute("/dashboard/portfolio")({
  head: () => ({ meta: [{ title: "Portfolio — TalentStage" }] }),
  component: Portfolio,
});

const CATEGORIES = ["All", "Engineering", "Design", "AI/ML", "Marketing"];

function Portfolio() {
  return (
    <DashboardShell variant="freelancer" title="My Portfolio" subtitle="Showcase your best work to attract premium clients.">
      {/* Header actions */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              className={`rounded-xl px-3 py-1.5 text-xs font-medium transition ${
                c === "All" ? "bg-gradient-primary text-white shadow-glow" : "border border-white/10 bg-white/5 text-muted-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <button className="inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-4 py-2 text-xs font-semibold text-white shadow-glow hover:opacity-90 transition">
          <Plus className="h-3.5 w-3.5" />
          Add Project
        </button>
      </div>

      {/* AI Portfolio Score banner */}
      <div className="mb-6 rounded-2xl border border-primary/25 bg-gradient-to-r from-primary/12 to-accent/8 p-4 backdrop-blur-xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Sparkles className="h-5 w-5 text-accent" />
            <div>
              <div className="text-sm font-semibold">AI Portfolio Score: <span className="text-gradient">94/100</span></div>
              <div className="text-xs text-muted-foreground">Your portfolio is in the top 6% of Full-Stack Engineers</div>
            </div>
          </div>
          <div className="hidden sm:flex gap-3 text-xs">
            {[["Diversity", "A+"], ["Recency", "A"], ["Impact", "A+"]].map(([k, v]) => (
              <div key={k} className="text-center rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                <div className="font-bold text-gradient">{v}</div>
                <div className="text-muted-foreground">{k}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-2 text-xs text-muted-foreground">
          💡 Suggestion: Add a case study with measurable impact (e.g., "Increased conversions by 32%") to reach <strong>99/100</strong>.
        </div>
      </div>

      {/* Masonry-style grid */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
        {portfolioProjects.map((proj, i) => (
          <motion.div
            key={proj.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-card/60 backdrop-blur-xl shadow-card transition hover:border-primary/30 hover:shadow-glow"
          >
            {/* Thumbnail */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={proj.image}
                alt={proj.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />

              {/* Category */}
              <div className="absolute top-3 left-3">
                <span className="rounded-full bg-background/80 border border-white/15 px-2.5 py-1 text-[10px] font-semibold backdrop-blur">
                  {proj.category}
                </span>
              </div>

              {/* AI Score */}
              <div className="absolute top-3 right-3">
                <span className="rounded-full bg-primary/20 border border-primary/40 px-2.5 py-1 text-[10px] font-bold text-primary backdrop-blur">
                  AI {proj.aiScore}/100
                </span>
              </div>

              {/* Hover actions */}
              <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 transition-all duration-300 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
                {proj.liveUrl && (
                  <a href={proj.liveUrl} className="grid h-8 w-8 place-items-center rounded-lg bg-background/90 border border-white/15 text-foreground hover:text-primary transition backdrop-blur">
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
                {proj.githubUrl && (
                  <a href={proj.githubUrl} className="grid h-8 w-8 place-items-center rounded-lg bg-background/90 border border-white/15 text-foreground hover:text-primary transition backdrop-blur">
                    <Github className="h-3.5 w-3.5" />
                  </a>
                )}
                <button className="grid h-8 w-8 place-items-center rounded-lg bg-background/90 border border-white/15 text-foreground hover:text-primary transition backdrop-blur">
                  <Eye className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            <div className="p-4">
              <h3 className="font-semibold font-display">{proj.title}</h3>
              <p className="mt-1 text-xs text-muted-foreground line-clamp-2">{proj.description}</p>

              <div className="mt-3 flex flex-wrap gap-1.5">
                {proj.tech.map((t) => (
                  <span key={t} className="skill-tag">{t}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}

        {/* Add new card */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="group rounded-2xl border-2 border-dashed border-white/15 bg-white/3 p-8 flex flex-col items-center justify-center gap-3 text-muted-foreground hover:border-primary/30 hover:text-primary transition min-h-[200px]"
        >
          <Plus className="h-8 w-8 opacity-40 group-hover:opacity-100 transition" />
          <div className="text-sm font-medium">Add portfolio project</div>
          <div className="text-xs">Drag & drop or click to upload</div>
        </motion.button>
      </div>
    </DashboardShell>
  );
}
