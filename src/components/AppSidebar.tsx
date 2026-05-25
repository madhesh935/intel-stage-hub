import { Link, useRouterState } from "@tanstack/react-router";
import {
  LayoutDashboard, FolderOpen, Search, FileText, ShieldCheck, FileSignature,
  Wallet, MessageSquare, Users, Settings, PlusCircle, BookmarkCheck, ListChecks, CreditCard,
} from "lucide-react";
import { Logo } from "./Logo";
import { useAuth } from "@/store/auth";

const freelancerItems = [
  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/dashboard/portfolio", label: "Portfolio", icon: FolderOpen },
  { to: "/marketplace", label: "Browse Projects", icon: Search },
  { to: "/dashboard/proposals", label: "Proposals", icon: FileText },
  { to: "/dashboard/skills", label: "Skill Verification", icon: ShieldCheck },
  { to: "/dashboard/contracts", label: "Contracts", icon: FileSignature },
  { to: "/dashboard/earnings", label: "Earnings", icon: Wallet },
  { to: "/dashboard/messages", label: "Messages", icon: MessageSquare },
  { to: "/community", label: "Community", icon: Users },
  { to: "/dashboard/settings", label: "Settings", icon: Settings },
];

const clientItems = [
  { to: "/client", label: "Dashboard", icon: LayoutDashboard },
  { to: "/client/post", label: "Post Project", icon: PlusCircle },
  { to: "/client/proposals", label: "Proposals", icon: FileText },
  { to: "/client/hired", label: "Hired Freelancers", icon: Users },
  { to: "/client/projects", label: "Active Projects", icon: ListChecks },
  { to: "/client/payments", label: "Payments", icon: CreditCard },
  { to: "/client/saved", label: "Saved Freelancers", icon: BookmarkCheck },
  { to: "/dashboard/messages", label: "Messages", icon: MessageSquare },
  { to: "/dashboard/settings", label: "Settings", icon: Settings },
];

export function AppSidebar({ variant }: { variant: "freelancer" | "client" }) {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const items = variant === "freelancer" ? freelancerItems : clientItems;
  const { role, setRole } = useAuth();

  return (
    <aside className="sticky top-0 hidden h-screen w-64 shrink-0 flex-col border-r border-white/5 bg-sidebar/80 px-3 py-5 backdrop-blur-xl lg:flex">
      <div className="px-2"><Logo /></div>

      <div className="mt-6 px-2">
        <div className="rounded-xl border border-white/10 bg-white/5 p-1 text-xs">
          <div className="grid grid-cols-2 gap-1">
            <Link to="/dashboard" onClick={() => setRole("freelancer")} className={`rounded-lg px-2 py-1.5 text-center transition ${variant==="freelancer" ? "bg-gradient-primary text-white" : "text-muted-foreground hover:text-foreground"}`}>Freelancer</Link>
            <Link to="/client" onClick={() => setRole("client")} className={`rounded-lg px-2 py-1.5 text-center transition ${variant==="client" ? "bg-gradient-primary text-white" : "text-muted-foreground hover:text-foreground"}`}>Client</Link>
          </div>
        </div>
      </div>

      <nav className="mt-5 flex-1 space-y-0.5 overflow-y-auto px-1">
        {items.map((i) => {
          const active = path === i.to;
          return (
            <Link
              key={i.to}
              to={i.to}
              className={`group flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition ${active ? "bg-white/10 text-foreground shadow-card" : "text-muted-foreground hover:bg-white/5 hover:text-foreground"}`}
            >
              <i.icon className={`h-4 w-4 ${active ? "text-accent" : ""}`} />
              <span>{i.label}</span>
              {active && <span className="ml-auto h-1.5 w-1.5 rounded-full bg-accent shadow-glow" />}
            </Link>
          );
        })}
      </nav>

      <div className="mt-4 rounded-xl border border-white/10 bg-gradient-to-br from-primary/20 to-accent/10 p-4">
        <div className="text-xs font-semibold text-foreground">Upgrade to Pro</div>
        <div className="mt-1 text-xs text-muted-foreground">Unlock AI scoring, verified badges, and unlimited proposals.</div>
        <button className="mt-3 w-full rounded-lg bg-gradient-primary py-1.5 text-xs font-medium text-white">Upgrade</button>
      </div>
    </aside>
  );
}
