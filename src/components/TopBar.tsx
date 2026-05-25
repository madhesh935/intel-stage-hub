import { Bell, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export function TopBar({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="sticky top-0 z-30 -mx-4 mb-6 flex items-center gap-4 border-b border-white/5 bg-background/70 px-4 py-4 backdrop-blur-xl sm:-mx-8 sm:px-8">
      <div className="min-w-0 flex-1">
        <h1 className="truncate text-xl font-semibold tracking-tight">{title}</h1>
        {subtitle && <p className="truncate text-xs text-muted-foreground">{subtitle}</p>}
      </div>
      <div className="relative hidden md:block">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input placeholder="Search talent, projects, skills…" className="h-9 w-72 border-white/10 bg-white/5 pl-9 text-sm placeholder:text-muted-foreground" />
      </div>
      <button className="relative grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/5 transition hover:bg-white/10">
        <Bell className="h-4 w-4" />
        <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-accent shadow-glow" />
      </button>
      <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-primary text-xs font-semibold text-white">AL</div>
    </div>
  );
}
