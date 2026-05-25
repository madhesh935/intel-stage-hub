import { Link } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`flex items-center gap-2 ${className}`}>
      <div className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-primary shadow-glow">
        <Sparkles className="h-5 w-5 text-white" strokeWidth={2.4} />
        <div className="pointer-events-none absolute inset-0 rounded-xl bg-white/10 mix-blend-overlay" />
      </div>
      <div className="leading-tight">
        <div className="text-base font-semibold tracking-tight text-foreground">
          Talent<span className="text-gradient">Stage</span>
        </div>
        <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          AI Marketplace
        </div>
      </div>
    </Link>
  );
}
