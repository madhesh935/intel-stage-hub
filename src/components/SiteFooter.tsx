import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Youtube, ArrowUpRight, Sparkles } from "lucide-react";
import { Logo } from "./Logo";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const LINKS = {
  Product: ["Marketplace", "Skill Verification", "AI Matching", "Proposal Scoring", "Project Scoping"],
  Company: ["About", "Blog", "Careers", "Press", "Partners"],
  Freelancers: ["How it works", "Pricing", "Portfolio Builder", "Mentorship", "Skill Challenges"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Security"],
};

const SOCIALS = [
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Github, label: "GitHub", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
];

const STATS = [
  { v: "120K+", l: "Freelancers" },
  { v: "$48M", l: "Paid out" },
  { v: "32K", l: "Projects" },
  { v: "147", l: "Countries" },
];

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-white/6 bg-background">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/15 blur-[100px]" />

      {/* Stats row */}
      <div className="border-b border-white/6">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {STATS.map(({ v, l }) => (
              <div key={l} className="text-center">
                <div className="text-2xl font-bold font-display text-gradient">{v}</div>
                <div className="text-xs text-muted-foreground">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main grid */}
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr]">
          {/* Brand column */}
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-muted-foreground leading-relaxed">
              The AI-powered marketplace where elite freelancers and ambitious teams ship together.
            </p>

            {/* Newsletter */}
            <div className="mt-6">
              <div className="text-xs font-semibold text-foreground mb-2 flex items-center gap-1.5">
                <Sparkles className="h-3 w-3 text-accent" />
                Get AI insights weekly
              </div>
              <div className="flex gap-2">
                <Input
                  placeholder="your@email.com"
                  className="h-9 border-white/10 bg-white/5 text-sm flex-1"
                />
                <Button size="sm" className="bg-gradient-primary text-white shrink-0">
                  Subscribe
                </Button>
              </div>
            </div>

            {/* Socials */}
            <div className="mt-6 flex gap-2">
              {SOCIALS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="group grid h-8 w-8 place-items-center rounded-lg border border-white/10 bg-white/5 text-muted-foreground transition hover:border-primary/30 hover:bg-primary/10 hover:text-primary"
                >
                  <Icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([category, links]) => (
            <div key={category}>
              <div className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-4">
                {category}
              </div>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="group flex items-center gap-1 text-sm text-muted-foreground/80 hover:text-foreground transition"
                    >
                      {link}
                      <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-0.5 translate-x-0.5 transition-all group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/6">
        <div className="mx-auto flex max-w-7xl flex-col sm:flex-row items-center justify-between gap-3 px-6 py-4">
          <div className="text-xs text-muted-foreground">
            © 2025 TalentStage, Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-neon-green animate-pulse" />
              All systems operational
            </span>
            <span>•</span>
            <span>Made with ✨ AI</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
