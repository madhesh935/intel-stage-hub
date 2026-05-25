import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

export function AuthShell({ title, subtitle, footer, children }: {
  title: string; subtitle?: string; footer?: ReactNode; children: ReactNode;
}) {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <div className="relative hidden overflow-hidden lg:block">
        <div className="absolute inset-0 bg-hero-radial" />
        <div className="absolute inset-0 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        <div className="relative flex h-full flex-col justify-between p-10">
          <Logo />
          <div className="max-w-md">
            <motion.h2 initial={{opacity:0,y:14}} animate={{opacity:1,y:0}} className="text-4xl font-semibold tracking-tight">
              Where elite talent <span className="text-gradient">takes the stage</span>.
            </motion.h2>
            <p className="mt-4 text-sm text-muted-foreground">AI matching. Verified skills. Milestone escrow. Built for the next generation of work.</p>
          </div>
          <div className="text-xs text-muted-foreground">© {new Date().getFullYear()} TalentStage</div>
        </div>
        <div className="pointer-events-none absolute -right-20 top-1/3 h-72 w-72 rounded-full bg-primary/30 blur-[120px] animate-pulse-glow" />
        <div className="pointer-events-none absolute -left-10 bottom-10 h-60 w-60 rounded-full bg-accent/30 blur-[100px] animate-pulse-glow" />
      </div>

      <div className="relative flex items-center justify-center px-6 py-12">
        <div className="absolute inset-0 -z-10 bg-hero-radial opacity-50 lg:hidden" />
        <div className="w-full max-w-md">
          <div className="mb-8 lg:hidden"><Logo /></div>
          <motion.div initial={{opacity:0,y:14}} animate={{opacity:1,y:0}} className="glass-strong rounded-2xl p-8 shadow-card">
            <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
            {subtitle && <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>}

            <div className="mt-6 grid gap-2">
              <Button variant="outline" className="h-11 border-white/15 bg-white/5 hover:bg-white/10">
                <GoogleIcon className="mr-2 h-4 w-4" /> Continue with Google
              </Button>
              <Button variant="outline" className="h-11 border-white/15 bg-white/5 hover:bg-white/10">
                <Github className="mr-2 h-4 w-4" /> Continue with GitHub
              </Button>
            </div>

            <div className="my-6 flex items-center gap-3 text-xs text-muted-foreground">
              <div className="h-px flex-1 bg-white/10" /> OR <div className="h-px flex-1 bg-white/10" />
            </div>

            {children}

            {footer && <div className="mt-6 text-center text-sm text-muted-foreground">{footer}</div>}
          </motion.div>
          <div className="mt-6 text-center text-xs text-muted-foreground">
            <Link to="/" className="hover:text-foreground">← Back to home</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path fill="#EA4335" d="M12 10.2v3.9h5.5c-.2 1.4-1.6 4.1-5.5 4.1-3.3 0-6-2.7-6-6.1s2.7-6.1 6-6.1c1.9 0 3.1.8 3.8 1.5l2.6-2.5C16.8 3.4 14.6 2.4 12 2.4 6.7 2.4 2.5 6.7 2.5 12s4.2 9.6 9.5 9.6c5.5 0 9.1-3.8 9.1-9.3 0-.6-.1-1.1-.2-1.6H12z"/>
    </svg>
  );
}
