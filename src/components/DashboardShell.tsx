import type { ReactNode } from "react";
import { AppSidebar } from "@/components/AppSidebar";
import { TopBar } from "@/components/TopBar";

export function DashboardShell({
  variant, title, subtitle, children,
}: { variant: "freelancer" | "client"; title: string; subtitle?: string; children: ReactNode }) {
  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <AppSidebar variant={variant} />
      <main className="relative min-w-0 flex-1 px-4 pb-16 sm:px-8">
        <div className="pointer-events-none fixed inset-0 -z-10 bg-hero-radial opacity-40" />
        <TopBar title={title} subtitle={subtitle} />
        {children}
      </main>
    </div>
  );
}
