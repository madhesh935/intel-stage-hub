import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Sparkles, ArrowRight, Search, ShieldCheck, BrainCircuit, Star,
  TrendingUp, Users, Briefcase, Globe, Check,
} from "lucide-react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { FreelancerCard } from "@/components/FreelancerCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { freelancers, pricing, testimonials } from "@/data/mock";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TalentStage — AI-Powered Creator & Freelancer Marketplace" },
      { name: "description", content: "Hire elite freelancers with AI-powered matching, verified skills, and milestone-based payments. Join TalentStage today." },
      { property: "og:title", content: "TalentStage — AI-Powered Creator & Freelancer Marketplace" },
      { property: "og:description", content: "AI matching. Verified skills. Milestone-based payments. The next-gen freelance marketplace." },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <Hero />
      <Logos />
      <Stats />
      <SearchBand />
      <Features />
      <FeaturedTalent />
      <AIShowcase />
      <Testimonials />
      <Pricing />
      <CTA />
      <SiteFooter />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24">
      <div className="absolute inset-0 -z-10 bg-hero-radial" />
      <div className="absolute inset-0 -z-10 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted-foreground backdrop-blur"
          >
            <Sparkles className="h-3 w-3 text-accent" /> Introducing AI Skill Verification 2.0
            <ArrowRight className="h-3 w-3" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}
            className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            The stage where <span className="text-gradient">elite talent</span> meets ambitious teams.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="mt-6 max-w-xl text-lg text-muted-foreground"
          >
            AI-powered matching. Verified skills. Milestone-based payments. TalentStage is the modern marketplace where work actually gets shipped.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link to="/register">
              <Button size="lg" className="bg-gradient-primary text-white shadow-glow hover:opacity-95">
                Hire Talent <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/role">
              <Button size="lg" variant="outline" className="border-white/15 bg-white/5 hover:bg-white/10">
                Become a Freelancer
              </Button>
            </Link>
          </motion.div>

          <div className="mt-8 flex flex-wrap items-center gap-6 text-xs text-muted-foreground">
            {["No platform fees for 90 days", "Escrow protected", "Verified by AI"].map((t) => (
              <span key={t} className="inline-flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-accent" />{t}</span>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5">
          <HeroMockup />
        </div>
      </div>
    </section>
  );
}

function HeroMockup() {
  return (
    <div className="relative h-[480px]">
      <motion.div
        initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
        className="absolute right-0 top-0 w-[360px] rounded-2xl border border-white/10 bg-card/80 p-4 shadow-glow backdrop-blur-xl"
      >
        <div className="flex items-center justify-between">
          <div className="text-xs text-muted-foreground">AI Match Found</div>
          <div className="rounded-full bg-accent/15 px-2 py-0.5 text-[10px] font-semibold text-accent">98% match</div>
        </div>
        <div className="mt-3 flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-primary text-sm font-semibold text-white">YT</div>
          <div>
            <div className="text-sm font-semibold">Yuki Tanaka</div>
            <div className="text-xs text-muted-foreground">AI/ML Engineer · Tokyo</div>
          </div>
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2 text-center text-[10px]">
          {[["Skills", "9/10"], ["Quality", "A+"], ["Speed", "Fast"]].map(([k, v]) => (
            <div key={k} className="rounded-lg border border-white/10 bg-white/5 p-2">
              <div className="text-muted-foreground">{k}</div><div className="mt-0.5 font-semibold text-foreground">{v}</div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
        className="animate-float absolute left-0 top-28 w-[300px] rounded-2xl border border-white/10 bg-card/80 p-4 shadow-card backdrop-blur-xl"
      >
        <div className="flex items-center gap-2 text-xs text-muted-foreground"><BrainCircuit className="h-3.5 w-3.5 text-accent" /> Proposal Evaluator</div>
        <div className="mt-3 space-y-2">
          {[["Relevance", 94], ["Clarity", 88], ["Value", 91]].map(([k, v]) => (
            <div key={k as string}>
              <div className="flex justify-between text-[11px] text-muted-foreground"><span>{k}</span><span>{v}/100</span></div>
              <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-white/5">
                <div className="h-full rounded-full bg-gradient-primary" style={{ width: `${v}%` }} />
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
        className="animate-float absolute bottom-0 right-6 w-[280px] rounded-2xl border border-white/10 bg-card/80 p-4 shadow-card backdrop-blur-xl"
        style={{ animationDelay: "1.5s" }}
      >
        <div className="flex items-center justify-between text-xs">
          <span className="text-muted-foreground">Earnings · Nov</span>
          <span className="text-accent">+24%</span>
        </div>
        <div className="mt-1 text-2xl font-semibold">$9,184</div>
        <div className="mt-3 flex h-12 items-end gap-1">
          {[40, 60, 35, 70, 55, 80, 65, 95, 75, 90, 100, 85].map((h, i) => (
            <div key={i} className="flex-1 rounded-sm bg-gradient-to-t from-primary/40 to-accent/80" style={{ height: `${h}%` }} />
          ))}
        </div>
      </motion.div>

      <div className="absolute left-1/2 top-1/2 -z-10 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/40 blur-[120px] animate-pulse-glow" />
    </div>
  );
}

function Logos() {
  const logos = ["Linear", "Vercel", "Notion", "Stripe", "Figma", "Cloudflare", "Anthropic"];
  return (
    <section className="border-y border-white/5 bg-background/40 py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">Trusted by teams shipping at</div>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-lg font-semibold text-muted-foreground/70">
          {logos.map((l) => <span key={l} className="opacity-70 hover:text-foreground hover:opacity-100 transition">{l}</span>)}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const items = [
    { v: "120K+", l: "Verified freelancers", Icon: Users },
    { v: "$48M", l: "Paid out in 2025", Icon: TrendingUp },
    { v: "32K", l: "Active projects", Icon: Briefcase },
    { v: "147", l: "Countries", Icon: Globe },
  ];
  return (
    <section className="py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-6 md:grid-cols-4">
        {items.map(({ v, l, Icon }, i) => (
          <motion.div key={l} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
            className="rounded-2xl border border-white/10 bg-card/50 p-5 backdrop-blur-xl">
            <Icon className="h-5 w-5 text-accent" />
            <div className="mt-3 text-3xl font-semibold tracking-tight">{v}</div>
            <div className="text-xs text-muted-foreground">{l}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function SearchBand() {
  return (
    <section className="px-6 py-10">
      <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-card/60 p-3 shadow-glow backdrop-blur-xl">
        <div className="flex flex-col gap-2 sm:flex-row">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search 'Next.js engineer', 'brand designer', 'AI consultant'…" className="h-12 border-white/10 bg-white/5 pl-10 text-base" />
          </div>
          <Button size="lg" className="bg-gradient-primary text-white shadow-glow hover:opacity-95">
            <Sparkles className="mr-2 h-4 w-4" /> AI Match
          </Button>
        </div>
        <div className="mt-3 flex flex-wrap gap-2 px-1 text-xs text-muted-foreground">
          <span>Trending:</span>
          {["LLM engineer", "Webflow", "Brand designer", "iOS dev", "RAG", "Motion"].map((t) => (
            <span key={t} className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5">{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  const items = [
    { Icon: BrainCircuit, title: "AI Smart Matching", body: "Our matching engine ranks talent on skill overlap, portfolio quality, and proven outcomes — not keywords." },
    { Icon: ShieldCheck, title: "Verified Skills", body: "Real tests, coding challenges, and portfolio reviews. Verified badges actually mean verified." },
    { Icon: Star, title: "AI Proposal Scoring", body: "Every proposal is scored for relevance, clarity, and value — so you read the best ones first." },
  ];
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Built with AI, end-to-end" title="The platform thinks with you." />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {items.map(({ Icon, title, body }, i) => (
            <motion.div key={title} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-card/60 p-6 backdrop-blur-xl transition hover:border-primary/30">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-primary text-white shadow-glow"><Icon className="h-5 w-5" /></div>
              <h3 className="mt-5 text-lg font-semibold tracking-tight">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{body}</p>
              <div className="pointer-events-none absolute -right-12 -bottom-12 h-40 w-40 rounded-full bg-primary/20 blur-3xl opacity-0 transition group-hover:opacity-100" />
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
        <SectionHeader eyebrow="Featured creators" title="Talent that ships, this week." />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {freelancers.slice(0, 6).map((f, i) => <FreelancerCard key={f.id} f={f} index={i} />)}
        </div>
      </div>
    </section>
  );
}

function AIShowcase() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-7xl rounded-3xl border border-white/10 bg-gradient-to-br from-primary/15 via-card/40 to-accent/15 p-8 shadow-glow backdrop-blur-xl sm:p-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-accent">AI Project Scoping</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Describe the outcome. We'll scope the project.</h2>
            <p className="mt-3 text-muted-foreground">Drop in a rough idea. TalentStage AI returns deliverables, timeline, budget bands, and a shortlist of matched freelancers.</p>
            <ul className="mt-5 space-y-2 text-sm">
              {["Auto-drafted SOW", "Budget range estimator", "Shortlisted talent in seconds"].map((t) => (
                <li key={t} className="flex items-center gap-2"><Check className="h-4 w-4 text-accent" />{t}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-card/70 p-5 backdrop-blur-xl">
            <div className="text-xs text-muted-foreground">You</div>
            <div className="mt-1 rounded-xl border border-white/10 bg-white/5 p-3 text-sm">I want to build an AI dashboard for my analytics SaaS. Modern, fast, with insights.</div>
            <div className="mt-4 text-xs text-accent">TalentStage AI</div>
            <div className="mt-1 space-y-2 rounded-xl border border-accent/30 bg-accent/5 p-3 text-sm">
              <div><b>Deliverables:</b> Dashboard, charts, AI insights panel, filters</div>
              <div><b>Timeline:</b> 5–7 weeks</div>
              <div><b>Budget:</b> $9k–$13k</div>
              <div><b>Skills:</b> Next.js · Recharts · TypeScript · LLMs</div>
            </div>
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
        <SectionHeader eyebrow="Loved by teams" title="Builders ship faster on TalentStage." />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-card/60 p-6 backdrop-blur-xl">
              <div className="flex gap-0.5 text-amber-400">{Array.from({length:5}).map((_,j)=>(<Star key={j} className="h-4 w-4 fill-amber-400" />))}</div>
              <p className="mt-4 text-sm text-foreground/90">"{t.quote}"</p>
              <div className="mt-5 text-sm font-semibold">{t.name}</div>
              <div className="text-xs text-muted-foreground">{t.role}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Pricing" title="Simple plans. Serious leverage." />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {pricing.map((p, i) => (
            <motion.div key={p.name} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              className={`relative rounded-2xl border p-6 backdrop-blur-xl ${p.highlight ? "border-primary/40 bg-gradient-to-b from-primary/15 to-card/60 shadow-glow" : "border-white/10 bg-card/60"}`}>
              {p.highlight && <div className="absolute -top-2.5 left-6 rounded-full bg-gradient-primary px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white">Most popular</div>}
              <div className="text-sm font-semibold">{p.name}</div>
              <div className="text-xs text-muted-foreground">{p.tagline}</div>
              <div className="mt-4 text-4xl font-semibold tracking-tight">${p.price}<span className="text-base font-normal text-muted-foreground">/mo</span></div>
              <ul className="mt-5 space-y-2 text-sm">
                {p.features.map((f) => <li key={f} className="flex items-center gap-2"><Check className="h-4 w-4 text-accent" />{f}</li>)}
              </ul>
              <Button className={`mt-6 w-full ${p.highlight ? "bg-gradient-primary text-white" : "bg-white/10 hover:bg-white/15"}`}>{p.cta}</Button>
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
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-card/60 p-12 text-center shadow-glow backdrop-blur-xl">
        <div className="absolute inset-0 -z-10 bg-hero-radial" />
        <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">Step onto the stage.</h2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">Join thousands of creators and teams already shipping with TalentStage.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link to="/register"><Button size="lg" className="bg-gradient-primary text-white shadow-glow">Get started free</Button></Link>
          <Link to="/marketplace"><Button size="lg" variant="outline" className="border-white/15 bg-white/5">Explore marketplace</Button></Link>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="max-w-2xl">
      <div className="text-xs uppercase tracking-[0.2em] text-accent">{eyebrow}</div>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
    </div>
  );
}
