import type { Project } from "@/data/mock";
import { Button } from "@/components/ui/button";
import { Clock, Users } from "lucide-react";
import { motion } from "framer-motion";

export function ProjectCard({ p, index = 0 }: { p: Project; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }} transition={{ delay: index * 0.05 }}
      className="group rounded-2xl border border-white/10 bg-card/60 p-5 shadow-card backdrop-blur-xl transition hover:border-accent/30"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-[10px] uppercase tracking-[0.18em] text-accent">{p.type}</div>
          <h3 className="mt-1 text-base font-semibold tracking-tight">{p.title}</h3>
          <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{p.description}</p>
        </div>
        <div className="text-right text-sm">
          <div className="font-semibold">{p.budget}</div>
          <div className="text-xs text-muted-foreground">Budget</div>
        </div>
      </div>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {p.skills.map((s) => (
          <span key={s} className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-foreground/80">{s}</span>
        ))}
      </div>
      <div className="mt-5 flex items-center justify-between text-xs text-muted-foreground">
        <div className="flex gap-4">
          <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" />{p.deadline}</span>
          <span className="inline-flex items-center gap-1"><Users className="h-3 w-3" />{p.proposals} proposals</span>
        </div>
        <Button size="sm" variant="outline" className="border-white/10 bg-white/5 hover:bg-white/10">Apply</Button>
      </div>
    </motion.div>
  );
}
