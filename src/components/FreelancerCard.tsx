import { motion } from "framer-motion";
import { Star, MapPin, ShieldCheck, Zap } from "lucide-react";
import type { Freelancer } from "@/data/mock";
import { ProgressRing } from "@/components/ui/ProgressRing";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";

interface Props {
  f: Freelancer;
  index?: number;
}

export function FreelancerCard({ f, index = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, duration: 0.4 }}
      whileHover={{ y: -4, transition: { duration: 0.25, ease: "easeOut" } }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-card/60 backdrop-blur-xl shadow-card transition-all duration-300 hover:border-primary/30 hover:shadow-glow"
    >
      {/* Glow orb */}
      <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/20 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Header banner */}
      <div className="relative h-20 bg-gradient-to-br from-primary/25 via-primary/10 to-purple-900/20">
        <div className="absolute inset-0 bg-grid opacity-20" />

        {/* Availability badge */}
        <div className="absolute right-3 top-3">
          {f.available ? (
            <div className="flex items-center gap-1.5 rounded-full bg-neon-green/15 border border-neon-green/30 px-2 py-0.5 text-[10px] font-semibold text-neon-green">
              <span className="h-1.5 w-1.5 rounded-full bg-neon-green animate-pulse" />
              Available
            </div>
          ) : (
            <div className="rounded-full bg-white/8 border border-white/10 px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
              Unavailable
            </div>
          )}
        </div>

        {/* AI Match ring */}
        <div className="absolute -bottom-6 right-4">
          <ProgressRing value={f.match} size={52} strokeWidth={4} color="primary" />
        </div>
      </div>

      {/* Avatar */}
      <div className="relative -mt-6 ml-4 mb-0">
        <div className="relative inline-block">
          <div className="h-14 w-14 rounded-2xl border-2 border-background bg-gradient-primary flex items-center justify-center text-sm font-bold text-white shadow-glow">
            {f.avatar}
          </div>
          {f.verified && (
            <div className="absolute -bottom-1 -right-1 rounded-full bg-background p-0.5">
              <ShieldCheck className="h-3.5 w-3.5 text-primary" />
            </div>
          )}
        </div>
      </div>

      <div className="px-4 pt-2 pb-4">
        {/* Name & title */}
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-semibold text-foreground font-display leading-tight">
              {f.name}
            </h3>
            <p className="text-xs text-muted-foreground">{f.title}</p>
          </div>
          <div className="text-right shrink-0">
            <div className="text-sm font-bold text-foreground">${f.hourlyRate}</div>
            <div className="text-[10px] text-muted-foreground">/hr</div>
          </div>
        </div>

        {/* Location */}
        <div className="mt-1.5 flex items-center gap-1 text-xs text-muted-foreground">
          <MapPin className="h-3 w-3" />
          {f.location}
        </div>

        {/* Rating */}
        <div className="mt-2 flex items-center gap-1.5">
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-3 w-3 ${i < Math.floor(f.rating) ? "text-amber-400 fill-amber-400" : "text-muted-foreground"}`}
              />
            ))}
          </div>
          <span className="text-xs font-medium">{f.rating}</span>
          <span className="text-xs text-muted-foreground">({f.reviews})</span>
        </div>

        {/* Skills */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {f.skills.map((skill) => (
            <span key={skill} className="skill-tag">
              {skill}
            </span>
          ))}
        </div>

        {/* Bio */}
        <p className="mt-2.5 text-xs text-muted-foreground line-clamp-1">{f.bio}</p>

        {/* Actions */}
        <div className="mt-4 flex gap-2">
          <Button
            size="sm"
            className="flex-1 bg-gradient-primary text-white text-xs shadow-glow hover:opacity-90 transition"
          >
            <Zap className="mr-1 h-3 w-3" />
            Hire Now
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="border-white/10 bg-white/5 text-xs hover:bg-white/10"
          >
            View Profile
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
