import { motion } from "framer-motion";
import { Clock, DollarSign, Users, Zap, ArrowRight } from "lucide-react";
import type { Project } from "@/data/mock";
import { Button } from "@/components/ui/button";

interface Props {
  p: Project;
  index?: number;
}

const COMPLEXITY_COLOR: Record<string, string> = {
  Low: "text-neon-green border-neon-green/30 bg-neon-green/10",
  Medium: "text-amber-400 border-amber-400/30 bg-amber-400/10",
  High: "text-neon-pink border-neon-pink/30 bg-neon-pink/10",
};

export function ProjectCard({ p, index = 0 }: Props) {
  const complexity = (p as any).complexity ?? "Medium";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07 }}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-card/60 p-5 backdrop-blur-xl shadow-card transition-all hover:border-accent/30 hover:shadow-glow-accent"
    >
      <div className="pointer-events-none absolute -right-8 -bottom-8 h-28 w-28 rounded-full bg-accent/15 blur-3xl opacity-0 transition group-hover:opacity-100" />

      {/* Header */}
      <div className="flex items-start gap-3">
        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-accent/20 to-primary/20 border border-white/10">
          <Zap className="h-5 w-5 text-accent" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-sm text-foreground line-clamp-2 font-display leading-snug">
            {p.title}
          </h3>
          <span
            className={`mt-1 inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-semibold ${COMPLEXITY_COLOR[complexity]}`}
          >
            AI: {complexity} Complexity
          </span>
        </div>
      </div>

      <p className="mt-3 text-xs text-muted-foreground line-clamp-2">{p.description}</p>

      {/* Meta */}
      <div className="mt-4 grid grid-cols-3 gap-2">
        {[
          { icon: DollarSign, label: "Budget", value: p.budget },
          { icon: Clock, label: "Timeline", value: p.deadline },
          { icon: Users, label: "Proposals", value: String(p.proposals) },
        ].map(({ icon: Icon, label, value }) => (
          <div key={label} className="rounded-xl border border-white/8 bg-white/4 p-2">
            <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
              <Icon className="h-3 w-3" />
              {label}
            </div>
            <div className="mt-0.5 text-xs font-semibold">{value}</div>
          </div>
        ))}
      </div>

      {/* Skills */}
      <div className="mt-3 flex flex-wrap gap-1.5">
        {p.skills.map((s) => (
          <span key={s} className="skill-tag">{s}</span>
        ))}
        <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-medium border ${p.type === "Fixed" ? "border-primary/30 bg-primary/10 text-primary" : "border-accent/30 bg-accent/10 text-accent"}`}>
          {p.type}
        </span>
      </div>

      {/* Action */}
      <div className="mt-4">
        <Button
          size="sm"
          className="w-full bg-gradient-primary text-white text-xs shadow-glow hover:opacity-90 group/btn"
        >
          Apply Now
          <ArrowRight className="ml-1.5 h-3 w-3 transition-transform group-hover/btn:translate-x-0.5" />
        </Button>
      </div>
    </motion.div>
  );
}
