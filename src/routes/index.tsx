import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import {
  Sparkles, ArrowRight, Search, ShieldCheck, BrainCircuit, Star,
  TrendingUp, Users, Briefcase, Globe, Check, ChevronDown, Play,
  Zap, Target, Award, MessageSquare, BarChart3, Lock, ArrowUpRight,
  Plus, Minus,
} from "lucide-react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { FreelancerCard } from "@/components/FreelancerCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FloatingParticles } from "@/components/ui/FloatingParticles";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { ProgressRing } from "@/components/ui/ProgressRing";
import { AIBadge } from "@/components/ui/AIBadge";
import { freelancers, pricing, testimonials, skillChallenges } from "@/data/mock";

export const Route = createFileRoute("/")(({
  head: () => ({
    meta: [
      { title: "TalentStage — AI-Powered Creator & Freelancer Marketplace" },
      { name: "description", content: "Hire elite freelancers with AI-powered matching, verified skills, and milestone-based payments. Join TalentStage today." },
      { property: "og:title", content: "TalentStage — AI-Powered Creator & Freelancer Marketplace" },
      { property: "og:description", content: "AI matching. Verified skills. Milestone-based payments. The next-gen freelance marketplace." },
    ],
  }),
  component: Landing,
} as any));

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <SiteNav />
      <Hero />
      <LogoMarquee />
      <Stats />
      <SearchBand />
      <Features />
      <FeaturedTalent />
      <AIShowcase />
      <SkillVerificationDemo />
      <Testimonials />
      <CommunityHighlights />
      <Pricing />
      <FAQ />
      <CTA />
      <SiteFooter />
    </div>
  );
}

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section ref={ref} className="relative overflow-hidden pt-32 pb-24 min-h-[95vh] flex items-center">
      {/* Multi-layer backgrounds */}
      <FloatingParticles count={55} className="opacity-70" />
      <div className="absolute inset-0 -z-10 bg-hero-radial" />
      <div className="absolute inset-0 -z-10 bg-grid opacity-25 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

      {/* Ambient blobs */}
      <motion.div style={{ y }} className="pointer-events-none absolute -z-10">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary/20 blur-[120px] animate-pulse-glow" />
        <div className="absolute -right-40 top-40 h-80 w-80 rounded-full bg-primary/15 blur-[100px] animate-pulse-glow" style={{ animationDelay: "1s" }} />
        <div className="absolute left-1/3 bottom-0 h-64 w-64 rounded-full bg-primary/10 blur-[80px] animate-pulse-glow" style={{ animationDelay: "2s" }} />
      </motion.div>

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-12 lg:gap-8 w-full">
        {/* Left — copy */}
        <div className="lg:col-span-6 xl:col-span-7 z-10">
          {/* Pill badge */}
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary backdrop-blur"
          >
            <Sparkles className="h-3.5 w-3.5 animate-pulse" />
            Introducing AI Skill Verification 2.0
            <ArrowRight className="h-3 w-3" />
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl xl:text-7xl font-display"
          >
            Hire Top Freelancers with{" "}
            <span className="text-gradient">AI-Powered</span>{" "}
            <span className="relative">
              Precision
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute -bottom-1 left-0 h-0.5 w-full bg-gradient-primary origin-left"
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed"
          >
            TalentStage intelligently matches creators and clients using AI-driven skill
            verification, proposal analysis, and smart collaboration tools.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link to="/register">
              <button className="group relative inline-flex h-12 items-center gap-2 overflow-hidden rounded-xl bg-gradient-primary px-6 text-sm font-semibold text-white shadow-glow transition hover:opacity-90">
                <span className="relative z-10 flex items-center gap-2">
                  <Zap className="h-4 w-4" />
                  Hire Talent
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
                <div className="absolute inset-0 bg-white/10 opacity-0 transition group-hover:opacity-100" />
              </button>
            </Link>
            <Link to="/role">
              <button className="group inline-flex h-12 items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 text-sm font-semibold backdrop-blur-sm transition hover:border-white/25 hover:bg-white/10">
                <Play className="h-3.5 w-3.5" />
                Start Freelancing
              </button>
            </Link>
          </motion.div>

          {/* Trust signals */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 flex flex-wrap items-center gap-6 text-xs text-muted-foreground"
          >
            {["No platform fees for 90 days", "Escrow protected", "AI Verified talent"].map((t) => (
              <span key={t} className="inline-flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5 text-neon-green" />
                {t}
              </span>
            ))}
          </motion.div>

          {/* Social proof avatars */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-8 flex items-center gap-3"
          >
            <div className="flex -space-x-2">
              {["AO", "YT", "MR", "DP", "SB"].map((initials) => (
                <div key={initials} className="h-8 w-8 rounded-full border-2 border-background bg-gradient-primary flex items-center justify-center text-[10px] font-bold text-white">
                  {initials}
                </div>
              ))}
            </div>
            <div className="text-xs text-muted-foreground">
              <span className="font-semibold text-foreground">120,000+</span> verified freelancers
              <div className="flex gap-0.5 mt-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" />
                ))}
                <span className="ml-1">4.9/5</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right — mockups */}
        <div className="lg:col-span-6 xl:col-span-5">
          <HeroMockup />
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground"
      >
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}

function HeroMockup() {
  return (
    <div className="relative h-[580px] w-full">
      {/* Card 1 — AI Match */}
      <motion.div
        initial={{ opacity: 0, y: 50, rotate: -2 }}
        animate={{ opacity: 1, y: 0, rotate: -2 }}
        transition={{ delay: 0.4, duration: 0.6, type: "spring" }}
        className="animate-float absolute right-0 top-0 w-[320px] rounded-2xl border border-purple-500/25 bg-black/90 p-4 shadow-glow backdrop-blur-xl"
      >
        <div className="flex items-center justify-between">
          <div className="text-xs text-muted-foreground">AI Match Found</div>
          <div className="rounded-full bg-primary/15 px-2.5 py-0.5 text-[10px] font-bold text-primary border border-primary/30 animate-pulse-glow">
            98% match
          </div>
        </div>
        <div className="mt-3 flex items-center gap-3">
          <div className="h-11 w-11 rounded-xl bg-gradient-primary flex items-center justify-center text-sm font-bold text-white shadow-glow">YT</div>
          <div>
            <div className="text-sm font-semibold">Yuki Tanaka</div>
            <div className="text-xs text-muted-foreground">AI/ML Engineer · Tokyo 🇯🇵</div>
          </div>
          <ProgressRing value={98} size={44} strokeWidth={3} showLabel={false} className="ml-auto" />
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2 text-center text-[10px]">
          {[["Skills", "9/10"], ["Quality", "A+"], ["Speed", "Fast"]].map(([k, v]) => (
            <div key={k} className="rounded-lg border border-white/10 bg-white/5 p-2">
              <div className="text-muted-foreground">{k}</div>
              <div className="mt-0.5 font-bold text-foreground">{v}</div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Card 2 — Proposal Evaluator */}
      <motion.div
        initial={{ opacity: 0, x: -40, y: 40 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 0.65, duration: 0.6, type: "spring" }}
        className="animate-float absolute left-0 top-32 w-[280px] rounded-2xl border border-purple-500/20 bg-black/90 p-4 shadow-[0_8px_40px_-8px_rgba(168,85,247,0.45)] backdrop-blur-xl"
        style={{ animationDelay: "1s" }}
      >
        <div className="flex items-center gap-2 text-xs font-semibold">
          <BrainCircuit className="h-3.5 w-3.5 text-accent" />
          Proposal Evaluator
        </div>
        <div className="mt-3 space-y-2.5">
          {[["Relevance", 94, "accent"], ["Clarity", 88, "primary"], ["Value", 91, "green"]].map(([k, v, c]) => (
            <div key={k as string}>
              <div className="flex justify-between text-[11px] text-muted-foreground">
                <span>{k}</span>
                <span className={`font-semibold text-${c === "green" ? "neon-green" : c === "accent" ? "accent" : "primary"}`}>{v}/100</span>
              </div>
              <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-white/8">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${v}%` }}
                  transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
                  className="h-full rounded-full bg-gradient-primary"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-3 flex items-center gap-1.5 rounded-lg bg-neon-green/10 border border-neon-green/20 px-3 py-1.5">
          <Check className="h-3 w-3 text-neon-green" />
          <span className="text-[10px] font-semibold text-neon-green">Strong proposal — recommended to send</span>
        </div>
      </motion.div>

      {/* Card 3 — Earnings chart */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.85, duration: 0.6, type: "spring" }}
        className="animate-float absolute bottom-8 right-4 w-[268px] rounded-2xl border border-purple-500/20 bg-black/90 p-4 shadow-[0_8px_40px_-8px_rgba(168,85,247,0.45)] backdrop-blur-xl"
        style={{ animationDelay: "2.5s" }}
      >
        <div className="flex items-center justify-between text-xs">
          <div className="font-semibold flex items-center gap-1.5">
            <BarChart3 className="h-3.5 w-3.5 text-accent" />
            Earnings · Nov
          </div>
          <span className="flex items-center gap-0.5 font-bold text-neon-green">
            <TrendingUp className="h-3 w-3" /> +24%
          </span>
        </div>
        <div className="mt-1 text-2xl font-bold font-display">$9,184</div>
        <div className="mt-3 flex h-14 items-end gap-1">
          {[35, 55, 30, 68, 52, 78, 62, 90, 72, 88, 100, 82].map((h, i) => (
            <motion.div
              key={i}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: 1.4 + i * 0.04, duration: 0.3 }}
              className="flex-1 origin-bottom rounded-sm bg-gradient-to-t from-primary/60 to-purple-400/90"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </motion.div>

      {/* Card 4 — Skill Verified badge unlock */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.05, duration: 0.5, type: "spring", stiffness: 200 }}
        className="absolute left-1/2 top-0 -translate-x-1/2 rounded-2xl border border-purple-500/25 bg-black/90 p-3 shadow-[0_8px_40px_-8px_rgba(168,85,247,0.45)] backdrop-blur-xl"
      >
        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
          <Award className="h-3.5 w-3.5 text-primary" />
          Skill Verified!
        </div>
        <AIBadge label="TypeScript Expert" state="verified" />
      </motion.div>

      {/* Central glow */}
      <div className="absolute left-1/2 top-1/2 -z-10 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/30 blur-[120px] animate-pulse-glow" />
    </div>
  );
}

function LogoMarquee() {
  const logos = ["Linear", "Vercel", "Notion", "Stripe", "Figma", "Cloudflare", "Anthropic", "OpenAI", "Resend", "Supabase"];
  return (
    <section className="border-y border-white/5 bg-background/40 py-10 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-6">
          Trusted by teams shipping at
        </div>
      </div>
      <div className="relative">
        <div className="flex animate-marquee gap-12 whitespace-nowrap" style={{ width: "max-content" }}>
          {[...logos, ...logos].map((l, i) => (
            <span
              key={i}
              className="text-base font-semibold text-muted-foreground/50 hover:text-foreground/80 transition-colors cursor-default"
            >
              {l}
            </span>
          ))}
        </div>
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background/40 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background/40 to-transparent pointer-events-none" />
      </div>
    </section>
  );
}

function Stats() {
  const items = [
    { v: 120, suffix: "K+", l: "Verified freelancers", Icon: Users, color: "text-primary" },
    { v: 48, prefix: "$", suffix: "M", l: "Paid out in 2025", Icon: TrendingUp, color: "text-accent" },
    { v: 32, suffix: "K", l: "Active projects", Icon: Briefcase, color: "text-neon-green" },
    { v: 147, suffix: "", l: "Countries", Icon: Globe, color: "text-neon-pink" },
  ];
  return (
    <section className="py-16 px-6">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 md:grid-cols-4">
        {items.map(({ v, prefix = "", suffix, l, Icon, color }, i) => (
          <motion.div
            key={l}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-card/50 p-5 backdrop-blur-xl transition hover:border-primary/20"
          >
            <div className="pointer-events-none absolute -right-6 -bottom-6 h-20 w-20 rounded-full bg-primary/15 blur-2xl opacity-0 transition group-hover:opacity-100" />
            <Icon className={`h-5 w-5 ${color}`} />
            <div className="mt-3 text-3xl font-bold tracking-tight font-display">
              {prefix}
              <AnimatedCounter to={v} suffix={suffix} />
            </div>
            <div className="text-xs text-muted-foreground mt-0.5">{l}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function SearchBand() {
  const [query, setQuery] = useState("");
  const trending = ["LLM engineer", "Webflow", "Brand designer", "iOS dev", "RAG pipeline", "Motion design"];

  return (
    <section className="px-6 py-6">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-white/10 bg-card/60 p-3 shadow-glow backdrop-blur-xl"
        >
          <div className="flex flex-col gap-2 sm:flex-row">
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search 'Next.js engineer', 'brand designer', 'AI consultant'…"
                className="h-12 w-full rounded-xl border border-white/8 bg-white/5 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground outline-none transition focus:border-primary/40 focus:ring-1 focus:ring-primary/20"
              />
            </div>
            <Link to="/marketplace">
              <button className="h-12 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-primary px-5 text-sm font-semibold text-white shadow-glow transition hover:opacity-90 sm:w-auto">
                <Sparkles className="h-4 w-4" />
                AI Match
              </button>
            </Link>
          </div>
          <div className="mt-3 flex flex-wrap gap-2 px-1 text-xs text-muted-foreground">
            <span>Trending:</span>
            {trending.map((t) => (
              <button
                key={t}
                onClick={() => setQuery(t)}
                className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 transition hover:border-primary/30 hover:bg-primary/10 hover:text-primary"
              >
                {t}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Features() {
  const items = [
    { Icon: BrainCircuit, title: "AI Smart Matching", body: "Our engine ranks talent on skill overlap, portfolio quality, and proven outcomes — not keywords.", tag: "Core", color: "primary" },
    { Icon: ShieldCheck, title: "Verified Skills", body: "Real tests, coding challenges, and portfolio reviews. Verified badges actually mean verified.", tag: "Trust", color: "accent" },
    { Icon: Star, title: "AI Proposal Scoring", body: "Every proposal is scored for relevance, clarity, and value — so you read the best ones first.", tag: "AI", color: "chart-4" },
    { Icon: Target, title: "Project Scoping AI", body: "Drop in a rough idea. TalentStage AI returns deliverables, timeline, budget bands instantly.", tag: "AI", color: "neon-pink" },
    { Icon: Lock, title: "Milestone Escrow", body: "Payments released only when you approve each milestone. Built-in dispute resolution.", tag: "Finance", color: "neon-green" },
    { Icon: Users, title: "Realtime Workspace", body: "Chat, file sharing, milestones, and activity tracking — all in one collaborative workspace.", tag: "Collab", color: "chart-2" },
  ];

  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Built with AI, end-to-end"
          title="The platform that thinks with you."
          sub="Every feature designed to reduce friction and maximize outcomes for both freelancers and clients."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map(({ Icon, title, body, tag, color }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-card/60 p-6 backdrop-blur-xl transition hover:border-primary/25"
            >
              <div className="pointer-events-none absolute -right-10 -bottom-10 h-36 w-36 rounded-full bg-primary/15 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="flex items-start justify-between">
                <div className={`grid h-11 w-11 place-items-center rounded-xl bg-gradient-primary text-white shadow-glow`}>
                  <Icon className="h-5 w-5" />
                </div>
                <span className={`rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-semibold text-muted-foreground`}>
                  {tag}
                </span>
              </div>
              <h3 className="mt-5 text-base font-semibold tracking-tight font-display">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{body}</p>
              <div className="mt-4 flex items-center gap-1 text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                Learn more <ArrowRight className="h-3 w-3" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedTalent() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-end justify-between mb-12">
          <SectionHeader eyebrow="Featured creators" title="Talent that ships, this week." />
          <Link to="/marketplace">
            <button className="hidden sm:flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition">
              View all talent <ArrowUpRight className="h-4 w-4" />
            </button>
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {freelancers.slice(0, 6).map((f, i) => (
            <FreelancerCard key={f.id} f={f} index={i} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/marketplace">
            <button className="inline-flex items-center gap-2 rounded-xl border border-white/12 bg-white/5 px-6 py-3 text-sm font-medium transition hover:border-primary/30 hover:bg-primary/10 hover:text-primary">
              Browse 120,000+ freelancers
              <ArrowRight className="h-4 w-4" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

function AIShowcase() {
  const features = [
    { icon: BrainCircuit, title: "Smart Matching", desc: "98% accuracy on skill & culture fit" },
    { icon: Target, title: "Proposal Ranking", desc: "AI scores relevance, clarity, value" },
    { icon: ShieldCheck, title: "Skill Verification", desc: "Proctored tests + badge unlock" },
    { icon: BarChart3, title: "Project Scoping", desc: "SOW, budget & timeline in seconds" },
  ];

  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-white/10 bg-gradient-to-br from-primary/12 via-card/50 to-accent/12 p-8 shadow-glow backdrop-blur-xl sm:p-14"
        >
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                <Sparkles className="h-3.5 w-3.5" />
                AI Project Scoping
              </div>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl font-display">
                Describe the outcome.{" "}
                <span className="text-gradient">We'll scope the project.</span>
              </h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Drop in a rough idea. TalentStage AI returns deliverables, timeline, budget
                bands, and a shortlist of matched freelancers — instantly.
              </p>
              <ul className="mt-5 space-y-2.5 text-sm">
                {["Auto-drafted Statement of Work", "Budget range estimator", "Team size recommendations", "Shortlisted talent in seconds"].map((t) => (
                  <li key={t} className="flex items-center gap-2.5">
                    <div className="h-5 w-5 rounded-full bg-neon-green/15 border border-neon-green/30 flex items-center justify-center shrink-0">
                      <Check className="h-3 w-3 text-neon-green" />
                    </div>
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {features.map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="rounded-xl border border-white/10 bg-white/5 p-3">
                    <Icon className="h-4 w-4 text-accent mb-1.5" />
                    <div className="text-xs font-semibold">{title}</div>
                    <div className="text-[10px] text-muted-foreground">{desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Chat UI mockup */}
            <div className="rounded-2xl border border-white/10 bg-card/70 p-5 backdrop-blur-xl space-y-3">
              {/* User message */}
              <div>
                <div className="text-[10px] text-muted-foreground mb-1">You</div>
                <div className="rounded-xl rounded-tl-sm border border-white/10 bg-white/6 p-3 text-sm">
                  I need a food delivery app with realtime tracking, AI-powered ETA, and driver routing.
                </div>
              </div>

              {/* AI response */}
              <div>
                <div className="flex items-center gap-1.5 text-[10px] text-accent mb-1">
                  <Sparkles className="h-2.5 w-2.5" />
                  TalentStage AI
                </div>
                <div className="rounded-xl rounded-tl-sm border border-accent/30 bg-accent/6 p-4 text-sm space-y-2.5">
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      ["🎯 Deliverables", "iOS + Android apps, Admin panel, Driver app"],
                      ["⏱️ Timeline", "10–14 weeks"],
                      ["💰 Budget", "$22k–$35k"],
                      ["👥 Team Size", "3–4 engineers + 1 designer"],
                    ].map(([k, v]) => (
                      <div key={k as string} className="rounded-lg bg-white/5 p-2.5">
                        <div className="text-[10px] font-semibold text-accent">{k}</div>
                        <div className="text-[11px] text-foreground/90 mt-0.5">{v}</div>
                      </div>
                    ))}
                  </div>
                  <div className="rounded-lg bg-white/5 p-2.5">
                    <div className="text-[10px] font-semibold text-accent">⚡ Recommended Skills</div>
                    <div className="mt-1.5 flex flex-wrap gap-1">
                      {["React Native", "Node.js", "Maps API", "WebSockets", "Redis"].map((s) => (
                        <span key={s} className="skill-tag text-[10px]">{s}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <button className="w-full rounded-xl bg-gradient-primary py-2.5 text-xs font-semibold text-white shadow-glow hover:opacity-90 transition">
                Find Matching Freelancers
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SkillVerificationDemo() {
  const [step, setStep] = useState(0);
  const steps = ["Challenge", "Progress", "Verified"];

  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeader
              eyebrow="Skill Verification"
              title="Real skills. Real badges."
              sub="Pass our AI-proctored tests and coding challenges to earn verified badges that employers trust."
            />
            <div className="mt-6 space-y-3">
              {[
                { icon: "🧠", title: "Adaptive MCQ Tests", desc: "Questions adjust to your level in real-time" },
                { icon: "💻", title: "Live Coding Challenges", desc: "Real-world problems with instant eval" },
                { icon: "🏆", title: "Badge Unlock Animation", desc: "Shareable proof of verified expertise" },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="flex items-start gap-3 rounded-xl border border-white/10 bg-card/50 p-3">
                  <span className="text-xl">{icon}</span>
                  <div>
                    <div className="text-sm font-semibold">{title}</div>
                    <div className="text-xs text-muted-foreground">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive demo */}
          <div className="rounded-2xl border border-white/10 bg-card/60 p-6 backdrop-blur-xl">
            <div className="flex gap-2 mb-5">
              {steps.map((s, i) => (
                <button
                  key={s}
                  onClick={() => setStep(i)}
                  className={`flex-1 rounded-lg py-1.5 text-xs font-medium transition ${step === i ? "bg-gradient-primary text-white shadow-glow" : "bg-white/5 text-muted-foreground hover:text-foreground"}`}
                >
                  {s}
                </button>
              ))}
            </div>

            {step === 0 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                <div className="text-sm font-semibold">TypeScript Expert — Question 3/10</div>
                <div className="h-1.5 rounded-full bg-white/8">
                  <div className="h-full w-[30%] rounded-full bg-gradient-primary" />
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm font-mono">
                  What does <span className="text-accent">infer</span> do in TypeScript conditional types?
                </div>
                <div className="space-y-2">
                  {["Extracts a type from a conditional branch", "Infers the return type of a function", "Creates a new generic parameter", "Narrows a union type"].map((opt, i) => (
                    <button key={i} className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-left text-xs hover:border-primary/30 hover:bg-primary/10 transition">
                      {String.fromCharCode(65 + i)}. {opt}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 1 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4 text-center py-4">
                <div className="text-sm font-semibold">Evaluating your answers…</div>
                <div className="flex justify-center">
                  <ProgressRing value={72} size={96} strokeWidth={6} color="primary" label="Score" />
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[["Correct", "7"], ["Speed", "2.1s"], ["Percentile", "Top 12%"]].map(([k, v]) => (
                    <div key={k} className="rounded-xl bg-white/5 border border-white/10 p-2 text-center">
                      <div className="text-lg font-bold font-display text-gradient">{v}</div>
                      <div className="text-[10px] text-muted-foreground">{k}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: "spring", stiffness: 200 }} className="text-center py-4 space-y-4">
                <div className="text-4xl">🏆</div>
                <div className="text-lg font-bold font-display text-gradient">Badge Unlocked!</div>
                <AIBadge label="TypeScript Expert" state="verified" size="lg" className="mx-auto" />
                <p className="text-xs text-muted-foreground">Your verified badge is now visible to 2,400+ clients searching for TypeScript experts</p>
                <div className="rounded-xl bg-primary/10 border border-primary/25 p-3">
                  <div className="text-xs font-semibold text-primary">+14 new project matches unlocked this week</div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Loved by teams & freelancers" title="Builders ship faster on TalentStage." />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -3 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-card/60 p-6 backdrop-blur-xl"
            >
              <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/10 blur-2xl opacity-0 transition group-hover:opacity-100" />
              <div className="flex gap-0.5 text-amber-400">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-3.5 w-3.5 fill-amber-400" />
                ))}
              </div>
              <p className="mt-4 text-sm text-foreground/90 leading-relaxed">"{t.quote}"</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="h-9 w-9 rounded-xl bg-gradient-primary flex items-center justify-center text-xs font-bold text-white">
                  {t.avatar}
                </div>
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CommunityHighlights() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-end justify-between mb-10">
          <SectionHeader eyebrow="Community" title="Where builders share ideas." />
          <Link to="/community">
            <button className="hidden sm:flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition">
              Join community <ArrowUpRight className="h-4 w-4" />
            </button>
          </Link>
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          {/* Challenge card */}
          <div className="rounded-2xl border border-white/10 bg-card/60 p-6 backdrop-blur-xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-accent mb-4">
              <Award className="h-3.5 w-3.5" />
              Active Skill Challenges
            </div>
            <div className="space-y-3">
              {skillChallenges.map((c) => (
                <div key={c.id} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-3">
                  <div>
                    <div className="text-sm font-medium">{c.title}</div>
                    <div className="text-xs text-muted-foreground">{c.participants} participants · Ends in {c.deadline}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-neon-green">{c.prize}</div>
                    <div className="text-[10px] text-muted-foreground">{c.difficulty}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Trending posts */}
          <div className="rounded-2xl border border-white/10 bg-card/60 p-6 backdrop-blur-xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-primary mb-4">
              <TrendingUp className="h-3.5 w-3.5" />
              Trending Discussions
            </div>
            <div className="space-y-3">
              {[
                { author: "Yuki Tanaka", body: "Hot take: evals matter more than fine-tuning for most RAG apps.", likes: 142, time: "5h" },
                { author: "Aria Okafor", body: "Design system thread 🧵 — tokens that actually scale.", likes: 220, time: "1d" },
                { author: "Mateo Rivera", body: "Just shipped a Next.js + Postgres template. Free. Link in comments.", likes: 84, time: "2h" },
              ].map((post) => (
                <div key={post.author} className="rounded-xl border border-white/10 bg-white/5 p-3">
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="text-xs font-semibold">{post.author}</div>
                    <div className="text-[10px] text-muted-foreground">{post.time}</div>
                  </div>
                  <p className="text-xs text-muted-foreground line-clamp-1">{post.body}</p>
                  <div className="mt-1.5 flex items-center gap-1 text-[10px] text-muted-foreground">
                    <Star className="h-3 w-3" /> {post.likes} likes
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <SectionHeader eyebrow="Pricing" title="Simple plans. Serious leverage." center />
        </div>
        <div className="mt-6 flex items-center justify-center gap-3">
          <span className={`text-sm ${!annual ? "text-foreground font-medium" : "text-muted-foreground"}`}>Monthly</span>
          <button
            onClick={() => setAnnual((v) => !v)}
            className={`relative h-6 w-11 rounded-full transition-colors ${annual ? "bg-gradient-primary" : "bg-white/15"}`}
          >
            <span className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${annual ? "left-5.5 translate-x-0.5" : "left-0.5"}`} />
          </button>
          <span className={`text-sm flex items-center gap-1.5 ${annual ? "text-foreground font-medium" : "text-muted-foreground"}`}>
            Annual
            <span className="rounded-full bg-neon-green/15 border border-neon-green/30 px-2 py-0.5 text-[10px] font-bold text-neon-green">Save 30%</span>
          </span>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {pricing.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`relative rounded-2xl border p-6 backdrop-blur-xl transition hover:-translate-y-1 ${
                p.highlight
                  ? "border-primary/40 bg-gradient-to-b from-primary/15 to-card/60 shadow-glow"
                  : "border-white/10 bg-card/60"
              }`}
            >
              {p.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-primary px-4 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-glow">
                  Most Popular
                </div>
              )}
              <div className="text-base font-bold font-display">{p.name}</div>
              <div className="text-xs text-muted-foreground mt-0.5">{p.tagline}</div>
              <div className="mt-5 flex items-baseline gap-1">
                <span className="text-4xl font-bold font-display">
                  ${annual ? Math.round(p.price * 0.7) : p.price}
                </span>
                <span className="text-sm text-muted-foreground">/mo</span>
                {annual && p.price > 0 && (
                  <span className="text-sm line-through text-muted-foreground/50">${p.price}</span>
                )}
              </div>
              <ul className="mt-6 space-y-2.5">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm">
                    <div className="h-4 w-4 rounded-full bg-neon-green/15 border border-neon-green/30 flex items-center justify-center shrink-0">
                      <Check className="h-2.5 w-2.5 text-neon-green" />
                    </div>
                    {f}
                  </li>
                ))}
              </ul>
              <button
                className={`mt-6 w-full rounded-xl py-2.5 text-sm font-semibold transition hover:opacity-90 ${
                  p.highlight ? "bg-gradient-primary text-white shadow-glow" : "border border-white/12 bg-white/8 hover:bg-white/12"
                }`}
              >
                {p.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const items = [
    { q: "How does AI matching work?", a: "Our AI analyzes skill overlap, portfolio quality, past client ratings, and proposal success rates to surface the top 3–5 freelancers for any project — typically within seconds of posting." },
    { q: "What does skill verification involve?", a: "Freelancers complete adaptive MCQ tests and live coding challenges proctored by AI. Passing earns a verified badge that's visible on their profile and confirmed via cryptographic signature." },
    { q: "How is payment protected?", a: "All payments go into escrow and are released milestone-by-milestone only when you approve the deliverable. TalentStage mediates any disputes with a dedicated resolution team." },
    { q: "Can I switch between Freelancer and Client roles?", a: "Yes — any TalentStage account can toggle between roles. Your earnings history and client projects are tracked separately under the same account." },
    { q: "What's the platform fee?", a: "Freelancers pay 8% on earnings (dropping to 4% after $10k lifetime with a client). Clients on Starter pay 3% on milestones; Pro and Business plans include reduced or zero fees." },
    { q: "Is there a free plan?", a: "Yes. The Starter plan is free forever with up to 3 active proposals, 1 verified skill badge, and full community access." },
  ];
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <SectionHeader eyebrow="FAQ" title="Questions? We've got answers." center />
        </div>
        <div className="mt-10 space-y-3">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className={`rounded-2xl border transition ${open === i ? "border-primary/30 bg-primary/8" : "border-white/10 bg-card/50"}`}
            >
              <button
                className="flex w-full items-center justify-between p-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-medium text-sm pr-4">{item.q}</span>
                <div className={`shrink-0 rounded-full p-0.5 transition ${open === i ? "bg-primary text-white" : "bg-white/8 text-muted-foreground"}`}>
                  {open === i ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
                </div>
              </button>
              <motion.div
                initial={false}
                animate={{ height: open === i ? "auto" : 0, opacity: open === i ? 1 : 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden"
              >
                <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{item.a}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="px-6 py-24">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-card/50 p-12 text-center shadow-glow backdrop-blur-xl">
        <div className="absolute inset-0 -z-10 bg-hero-radial opacity-80" />
        <div className="absolute inset-0 -z-10 bg-grid opacity-15" />
        <FloatingParticles count={25} className="opacity-40" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary mb-5">
            <Sparkles className="h-3.5 w-3.5" />
            Free for 90 days. No credit card.
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl font-display">
            Step onto the <span className="text-gradient">stage.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Join 120,000+ creators and teams already shipping with TalentStage AI.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/register">
              <button className="inline-flex h-12 items-center gap-2 rounded-xl bg-gradient-primary px-8 text-sm font-semibold text-white shadow-glow transition hover:opacity-90">
                <Zap className="h-4 w-4" />
                Get started free
              </button>
            </Link>
            <Link to="/marketplace">
              <button className="inline-flex h-12 items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-8 text-sm font-semibold transition hover:border-white/25 hover:bg-white/10">
                Explore marketplace
                <ArrowRight className="h-4 w-4" />
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SectionHeader({
  eyebrow, title, sub, center,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
  center?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
        <Sparkles className="h-3 w-3" />
        {eyebrow}
      </div>
      <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl font-display">{title}</h2>
      {sub && <p className="mt-3 text-muted-foreground leading-relaxed">{sub}</p>}
    </div>
  );
}
