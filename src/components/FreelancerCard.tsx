import { Star, MapPin, BadgeCheck, Sparkles } from "lucide-react";
import type { Freelancer } from "@/data/mock";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function FreelancerCard({ f, index = 0 }: { f: Freelancer; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.05 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-card/60 p-5 shadow-card backdrop-blur-xl transition hover:border-primary/30"
    >
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/20 blur-3xl opacity-0 transition group-hover:opacity-100" />
      <div className="flex items-start gap-3">
        <div className="relative grid h-12 w-12 place-items-center rounded-xl bg-gradient-primary text-sm font-semibold text-white shadow-glow">
          {f.avatar}
          {f.available && <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-card bg-emerald-400" />}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5">
            <h3 className="truncate text-sm font-semibold">{f.name}</h3>
            {f.verified && <BadgeCheck className="h-4 w-4 text-accent" />}
          </div>
          <div className="truncate text-xs text-muted-foreground">{f.title}</div>
          <div className="mt-1 flex items-center gap-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1"><Star className="h-3 w-3 fill-amber-400 text-amber-400" />{f.rating} <span className="opacity-60">({f.reviews})</span></span>
            <span className="flex items-center gap-1"><MapPin className="h-3 w-3" />{f.location}</span>
          </div>
        </div>
        <div className="text-right">
          <div className="rounded-full border border-accent/40 bg-accent/10 px-2 py-0.5 text-[10px] font-semibold text-accent">
            <Sparkles className="-mt-0.5 mr-1 inline h-3 w-3" />{f.match}% match
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {f.skills.map((s) => (
          <span key={s} className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-foreground/80">{s}</span>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-between">
        <div className="text-sm"><span className="font-semibold">${f.hourlyRate}</span><span className="text-muted-foreground">/hr</span></div>
        <Button size="sm" className="bg-gradient-primary text-white hover:opacity-95">Hire</Button>
      </div>
    </motion.div>
  );
}
