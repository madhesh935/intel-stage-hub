import { Link, useRouterState } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  LayoutDashboard, FolderOpen, Search, FileText, ShieldCheck, FileSignature,
  Wallet, MessageSquare, Users, Settings, PlusCircle, BookmarkCheck,
  ListChecks, CreditCard, ChevronLeft, ChevronRight, LogOut,
} from "lucide-react";
import { Logo } from "./Logo";
import { useAuth } from "@/store/auth";

const freelancerItems = [
  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard, color: "text-primary" },
  { to: "/dashboard/portfolio", label: "Portfolio", icon: FolderOpen, color: "text-accent" },
  { to: "/marketplace", label: "Browse Projects", icon: Search, color: "text-neon-cyan" },
  { to: "/dashboard/proposals", label: "Proposals", icon: FileText, color: "text-chart-4" },
  { to: "/dashboard/skills", label: "Skill Verification", icon: ShieldCheck, color: "text-neon-green" },
  { to: "/dashboard/contracts", label: "Contracts", icon: FileSignature, color: "text-chart-2" },
  { to: "/dashboard/earnings", label: "Earnings", icon: Wallet, color: "text-chart-3" },
  { to: "/dashboard/messages", label: "Messages", icon: MessageSquare, color: "text-primary", badge: 3 },
  { to: "/community", label: "Community", icon: Users, color: "text-neon-pink" },
  { to: "/dashboard/settings", label: "Settings", icon: Settings, color: "text-muted-foreground" },
];

const clientItems = [
  { to: "/client", label: "Dashboard", icon: LayoutDashboard, color: "text-primary" },
  { to: "/client/post", label: "Post Project", icon: PlusCircle, color: "text-accent" },
  { to: "/client/proposals", label: "Proposals", icon: FileText, color: "text-chart-4" },
  { to: "/client/hired", label: "Hired Freelancers", icon: Users, color: "text-neon-green" },
  { to: "/client/projects", label: "Active Projects", icon: ListChecks, color: "text-chart-2" },
  { to: "/client/payments", label: "Payments", icon: CreditCard, color: "text-chart-3" },
  { to: "/client/saved", label: "Saved Freelancers", icon: BookmarkCheck, color: "text-neon-cyan" },
  { to: "/dashboard/messages", label: "Messages", icon: MessageSquare, color: "text-primary", badge: 2 },
  { to: "/dashboard/settings", label: "Settings", icon: Settings, color: "text-muted-foreground" },
];

export function AppSidebar({ variant }: { variant: "freelancer" | "client" }) {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const items = variant === "freelancer" ? freelancerItems : clientItems;
  const { role } = useAuth();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <motion.aside
      animate={{ width: collapsed ? 72 : 256 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="sticky top-0 hidden h-screen shrink-0 flex-col border-r border-white/5 bg-sidebar/90 backdrop-blur-xl lg:flex overflow-hidden"
    >
      {/* Header */}
      <div className={`flex items-center justify-between px-4 py-5 ${collapsed ? "px-3" : ""}`}>
        {!collapsed && <Logo />}
        <button
          onClick={() => setCollapsed((v) => !v)}
          className="ml-auto rounded-lg p-1.5 text-muted-foreground hover:bg-white/8 hover:text-foreground transition"
        >
          {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </button>
      </div>

      {/* Role switcher for 'both' role */}
      {!collapsed && role === "both" && (
        <div className="px-3 mb-2">
          <div className="rounded-xl border border-white/10 bg-white/4 p-1 text-xs">
            <div className="grid grid-cols-2 gap-1">
              <Link
                to="/dashboard"
                className={`rounded-lg px-2 py-1.5 text-center transition font-medium ${
                  variant === "freelancer"
                    ? "bg-gradient-primary text-white shadow-glow"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Freelancer
              </Link>
              <Link
                to="/client"
                className={`rounded-lg px-2 py-1.5 text-center transition font-medium ${
                  variant === "client"
                    ? "bg-gradient-primary text-white shadow-glow"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Client
              </Link>
            </div>
          </div>
        </div>
      )}


      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-2 py-1 space-y-0.5">
        {items.map((item, idx) => {
          const active = path === item.to;
          return (
            <Link key={item.to} to={item.to}>
              <motion.div
                whileHover={{ x: collapsed ? 0 : 2 }}
                className={`group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-all ${
                  active
                    ? "bg-white/10 text-foreground"
                    : "text-muted-foreground hover:bg-white/6 hover:text-foreground"
                }`}
              >
                {/* Active left bar */}
                {active && (
                  <motion.div
                    layoutId="sidebar-active"
                    className="absolute left-0 top-1 bottom-1 w-0.5 rounded-full bg-gradient-primary"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}

                <item.icon
                  className={`h-4 w-4 shrink-0 transition-colors ${active ? item.color : ""}`}
                />

                {!collapsed && (
                  <span className="flex-1 font-medium truncate">{item.label}</span>
                )}

                {!collapsed && (item as any).badge && (
                  <span className="flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-bold text-white">
                    {(item as any).badge}
                  </span>
                )}

                {active && !collapsed && (
                  <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-glow" />
                )}
              </motion.div>
            </Link>
          );
        })}
      </nav>


      {/* User card */}
      <div className={`border-t border-white/6 px-3 py-3 ${collapsed ? "px-2" : ""}`}>
        <div className={`flex items-center gap-3 rounded-xl p-2 hover:bg-white/6 transition cursor-pointer ${collapsed ? "justify-center" : ""}`}>
          <div className="relative h-8 w-8 shrink-0 rounded-lg bg-gradient-primary flex items-center justify-center text-xs font-bold text-white">
            AK
            <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-neon-green border-2 border-sidebar" />
          </div>
          {!collapsed && (
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium truncate">Alex Kim</div>
              <div className="text-xs text-muted-foreground truncate">
                {variant === "freelancer" ? "Full-Stack Dev" : "Hiring Manager"}
              </div>
            </div>
          )}
          {!collapsed && <LogOut className="h-4 w-4 text-muted-foreground hover:text-foreground transition shrink-0" />}
        </div>
      </div>
    </motion.aside>
  );
}
