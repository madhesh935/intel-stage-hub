import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { communityPosts, skillChallenges, mentors } from "@/data/mock";
import {
  Users, Heart, MessageSquare, Award, TrendingUp, Sparkles,
  Plus, Clock, DollarSign, Star, BookOpen,
} from "lucide-react";

export const Route = createFileRoute("/community")({
  head: () => ({ meta: [{ title: "Community — TalentStage" }, { name: "description", content: "Connect with 120K+ creators, join skill challenges, and find mentors." }] }),
  component: Community,
});

function Community() {
  const [likedPosts, setLikedPosts] = useState<Set<string>>(new Set());
  const [activeTab, setActiveTab] = useState<"feed" | "challenges" | "mentors">("feed");

  const toggleLike = (id: string) => {
    setLikedPosts((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-hero-radial opacity-25" />

      <main className="mx-auto max-w-7xl px-6 pb-24 pt-28">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <div className="flex items-center gap-2 text-xs font-medium text-accent mb-2">
            <Users className="h-3.5 w-3.5" />
            120,000+ creators
          </div>
          <h1 className="text-3xl font-bold font-display sm:text-4xl">Community Hub</h1>
          <p className="mt-1 text-sm text-muted-foreground">Share knowledge, join challenges, and level up with expert mentors.</p>
        </motion.div>

        {/* Tabs */}
        <div className="mb-6 flex gap-2">
          {[
            { id: "feed", label: "Social Feed", icon: TrendingUp },
            { id: "challenges", label: "Skill Challenges", icon: Award },
            { id: "mentors", label: "Mentorship", icon: BookOpen },
          ].map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id as any)}
              className={`flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition ${
                activeTab === id ? "bg-gradient-primary text-white shadow-glow" : "border border-white/10 bg-card/60 text-muted-foreground hover:text-foreground"
              }`}
            >
              <Icon className="h-4 w-4" />
              {label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {activeTab === "feed" && (
            <motion.div key="feed" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="grid gap-6 lg:grid-cols-[1fr_320px]">
              {/* Posts */}
              <div className="space-y-4">
                {/* Create post */}
                <div className="rounded-2xl border border-white/10 bg-card/60 p-4 backdrop-blur-xl">
                  <div className="flex gap-3">
                    <div className="h-9 w-9 shrink-0 rounded-xl bg-gradient-primary flex items-center justify-center text-xs font-bold text-white">AK</div>
                    <button className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-left text-sm text-muted-foreground hover:border-primary/30 transition">
                      Share something with the community…
                    </button>
                    <button className="rounded-xl bg-gradient-primary px-4 py-2 text-xs font-semibold text-white shadow-glow flex items-center gap-1.5 hover:opacity-90 transition">
                      <Plus className="h-3.5 w-3.5" /> Post
                    </button>
                  </div>
                </div>

                {communityPosts.map((post, i) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.06 }}
                    className="rounded-2xl border border-white/10 bg-card/60 p-5 backdrop-blur-xl"
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <div className="h-10 w-10 shrink-0 rounded-xl bg-gradient-primary flex items-center justify-center text-xs font-bold text-white">
                        {post.avatar}
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-semibold">{post.author}</div>
                        <div className="text-[10px] text-muted-foreground">{post.time}</div>
                      </div>
                      <button className="rounded-lg border border-primary/25 bg-primary/8 px-2.5 py-1 text-[10px] font-semibold text-primary hover:bg-primary/15 transition">
                        Follow
                      </button>
                    </div>

                    <p className="text-sm leading-relaxed">{post.body}</p>

                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {post.tags.map((t) => (
                        <span key={t} className="skill-tag">{t}</span>
                      ))}
                    </div>

                    <div className="mt-4 flex items-center gap-4 pt-3 border-t border-white/6">
                      <button
                        onClick={() => toggleLike(post.id)}
                        className={`flex items-center gap-1.5 text-xs transition ${likedPosts.has(post.id) ? "text-neon-pink" : "text-muted-foreground hover:text-foreground"}`}
                      >
                        <Heart className={`h-4 w-4 ${likedPosts.has(post.id) ? "fill-neon-pink" : ""}`} />
                        {post.likes + (likedPosts.has(post.id) ? 1 : 0)}
                      </button>
                      <button className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition">
                        <MessageSquare className="h-4 w-4" />
                        {post.comments}
                      </button>
                      <button className="ml-auto text-xs text-muted-foreground hover:text-foreground transition">Share</button>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Sidebar */}
              <div className="space-y-4">
                {/* Trending */}
                <div className="rounded-2xl border border-white/10 bg-card/60 p-4 backdrop-blur-xl">
                  <div className="flex items-center gap-2 text-xs font-semibold mb-3">
                    <TrendingUp className="h-3.5 w-3.5 text-accent" />
                    Trending Topics
                  </div>
                  {["#LLMs", "#DesignSystems", "#NextJS", "#TypeScript", "#WebGL", "#RAG"].map((t) => (
                    <button key={t} className="block w-full rounded-lg px-2 py-1.5 text-left text-xs text-muted-foreground hover:bg-white/5 hover:text-primary transition">
                      {t}
                    </button>
                  ))}
                </div>

                {/* Featured creators */}
                <div className="rounded-2xl border border-white/10 bg-card/60 p-4 backdrop-blur-xl">
                  <div className="flex items-center gap-2 text-xs font-semibold mb-3">
                    <Sparkles className="h-3.5 w-3.5 text-primary" />
                    Featured Creators
                  </div>
                  <div className="space-y-3">
                    {[
                      { name: "Yuki Tanaka", role: "AI/ML Engineer", avatar: "YT", followers: "2.4k" },
                      { name: "Aria Okafor", role: "Product Designer", avatar: "AO", followers: "3.8k" },
                      { name: "Mateo Rivera", role: "Full-Stack Dev", avatar: "MR", followers: "1.9k" },
                    ].map((c) => (
                      <div key={c.name} className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-lg bg-gradient-primary flex items-center justify-center text-[10px] font-bold text-white">{c.avatar}</div>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs font-semibold">{c.name}</div>
                          <div className="text-[10px] text-muted-foreground">{c.role}</div>
                        </div>
                        <button className="rounded-lg bg-white/8 border border-white/12 px-2 py-1 text-[10px] font-medium hover:bg-primary/10 hover:text-primary transition">
                          Follow
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "challenges" && (
            <motion.div key="challenges" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {skillChallenges.map((c, i) => (
                <motion.div
                  key={c.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="rounded-2xl border border-white/10 bg-card/60 p-5 backdrop-blur-xl transition hover:border-primary/25 hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className={`rounded-xl px-2.5 py-1 text-[10px] font-bold border ${
                      c.difficulty === "Expert" ? "bg-neon-pink/10 border-neon-pink/30 text-neon-pink" :
                      c.difficulty === "Hard" ? "bg-amber-400/10 border-amber-400/30 text-amber-400" :
                      "bg-neon-green/10 border-neon-green/30 text-neon-green"
                    }`}>
                      {c.difficulty}
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-neon-green">{c.prize}</div>
                      <div className="text-[10px] text-muted-foreground">Prize</div>
                    </div>
                  </div>
                  <h3 className="font-semibold font-display mb-1">{c.title}</h3>
                  <div className="text-xs text-muted-foreground mb-3">{c.category}</div>
                  <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
                    <div className="rounded-lg bg-white/5 border border-white/8 p-2 text-center">
                      <div className="font-bold">{c.participants}</div>
                      <div className="text-muted-foreground">Participants</div>
                    </div>
                    <div className="rounded-lg bg-white/5 border border-white/8 p-2 text-center">
                      <div className="font-bold flex items-center justify-center gap-1">
                        <Clock className="h-3 w-3 text-accent" />{c.deadline}
                      </div>
                      <div className="text-muted-foreground">Remaining</div>
                    </div>
                  </div>
                  <button className="w-full rounded-xl bg-gradient-primary py-2.5 text-xs font-semibold text-white shadow-glow hover:opacity-90 transition">
                    Join Challenge
                  </button>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === "mentors" && (
            <motion.div key="mentors" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {mentors.map((m, i) => (
                <motion.div
                  key={m.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="rounded-2xl border border-white/10 bg-card/60 p-5 backdrop-blur-xl transition hover:border-primary/25 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div className="relative h-12 w-12 shrink-0 rounded-2xl bg-gradient-primary flex items-center justify-center text-sm font-bold text-white">
                      {m.avatar}
                      {m.available && <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-neon-green border-2 border-background" />}
                    </div>
                    <div>
                      <div className="font-semibold">{m.name}</div>
                      <div className="text-xs text-muted-foreground">{m.title}</div>
                      <div className="flex items-center gap-1 mt-0.5">
                        <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                        <span className="text-xs font-bold">{m.rating}</span>
                        <span className="text-[10px] text-muted-foreground">({m.sessions} sessions)</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {m.expertise.map((e) => (
                      <span key={e} className="skill-tag">{e}</span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-sm font-bold">
                      <DollarSign className="h-4 w-4 text-neon-green" />
                      {m.sessionPrice}
                      <span className="text-xs font-normal text-muted-foreground">/session</span>
                    </div>
                    <button className={`rounded-xl px-4 py-2 text-xs font-semibold transition ${
                      m.available
                        ? "bg-gradient-primary text-white shadow-glow hover:opacity-90"
                        : "border border-white/10 bg-white/5 text-muted-foreground cursor-not-allowed"
                    }`}>
                      {m.available ? "Book Session" : "Waitlist"}
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <SiteFooter />
    </div>
  );
}
