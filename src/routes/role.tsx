import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { AuthShell } from "@/components/AuthShell";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Briefcase, User, Sparkles, Check } from "lucide-react";
import { useAuth, type Role } from "@/store/auth";

export const Route = createFileRoute("/role")({
  head: () => ({ meta: [{ title: "Choose your role — TalentStage" }] }),
  component: RolePage,
});

const roles: { id: Role; label: string; desc: string; Icon: typeof User }[] = [
  { id: "freelancer", label: "Freelancer", desc: "Find work, build a portfolio, get paid.", Icon: User },
  { id: "client", label: "Client", desc: "Hire top talent for your next project.", Icon: Briefcase },
  { id: "both", label: "Both", desc: "Hire and offer your own services.", Icon: Sparkles },
];

function RolePage() {
  const [sel, setSel] = useState<Role>("freelancer");
  const setRole = useAuth((s) => s.setRole);
  const nav = useNavigate();
  return (
    <AuthShell title="How will you use TalentStage?" subtitle="You can switch roles anytime.">
      <div className="grid gap-3">
        {roles.map(({ id, label, desc, Icon }) => {
          const active = sel === id;
          return (
            <button key={id} onClick={() => setSel(id)}
              className={`flex items-center gap-4 rounded-xl border p-4 text-left transition ${active ? "border-primary/60 bg-primary/10 shadow-glow" : "border-white/10 bg-white/5 hover:bg-white/10"}`}>
              <div className={`grid h-10 w-10 place-items-center rounded-lg ${active ? "bg-gradient-primary text-white" : "bg-white/10 text-foreground"}`}>
                <Icon className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <div className="text-sm font-semibold">{label}</div>
                <div className="text-xs text-muted-foreground">{desc}</div>
              </div>
              {active && <Check className="h-4 w-4 text-accent" />}
            </button>
          );
        })}
        <Button className="mt-2 h-11 bg-gradient-primary text-white shadow-glow"
          onClick={() => { setRole(sel); nav({ to: sel === "client" ? "/client" : "/dashboard" }); }}>
          Continue
        </Button>
      </div>
    </AuthShell>
  );
}
