import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { communityPosts } from "@/data/mock";
import { Heart, MessageCircle, Trophy, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/community")({
  head: () => ({ meta: [{ title: "Community — TalentStage" }] }),
  component: Community,
});

function Community() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-hero-radial opacity-40" />
      <main className="mx-auto max-w-7xl px-6 pb-24 pt-28">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Community</h1>
            <p className="mt-1 text-sm text-muted-foreground">Posts, challenges, and mentorship from top creators.</p>
          </div>
          <Button className="bg-gradient-primary text-white shadow-glow">New post</Button>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_320px]">
          <div className="space-y-4">
            {communityPosts.map((p) => (
              <article key={p.id} className="rounded-2xl border border-white/10 bg-card/60 p-5 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-primary text-xs font-semibold text-white">{p.author.split(" ").map(w=>w[0]).join("")}</div>
                  <div>
                    <div className="text-sm font-semibold">{p.author}</div>
                    <div className="text-xs text-muted-foreground">{p.time} ago</div>
                  </div>
                </div>
                <p className="mt-4 text-sm text-foreground/90">{p.body}</p>
                <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                  <button className="inline-flex items-center gap-1 hover:text-foreground"><Heart className="h-3.5 w-3.5" /> {p.likes}</button>
                  <button className="inline-flex items-center gap-1 hover:text-foreground"><MessageCircle className="h-3.5 w-3.5" /> {p.comments}</button>
                </div>
              </article>
            ))}
          </div>

          <aside className="space-y-4">
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-primary/15 to-accent/10 p-5 backdrop-blur-xl">
              <div className="flex items-center gap-2 text-sm font-semibold"><Trophy className="h-4 w-4 text-amber-400" /> Weekly challenge</div>
              <h3 className="mt-2 text-lg font-semibold">Design a Stripe alternative landing page</h3>
              <p className="mt-1 text-xs text-muted-foreground">$2,000 prize · 248 submissions · ends Friday</p>
              <Button className="mt-3 w-full bg-white/10 hover:bg-white/15">Join challenge</Button>
            </div>
            <div className="rounded-2xl border border-white/10 bg-card/60 p-5 backdrop-blur-xl">
              <div className="flex items-center gap-2 text-sm font-semibold"><Users className="h-4 w-4 text-accent" /> Mentorship</div>
              <ul className="mt-3 space-y-3 text-sm">
                {[
                  { n: "Aria Okafor", e: "Design systems", p: "$120/hr" },
                  { n: "Yuki Tanaka", e: "LLM eval & RAG", p: "$200/hr" },
                  { n: "Devon Park", e: "Mobile architecture", p: "$140/hr" },
                ].map((m) => (
                  <li key={m.n} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-3">
                    <div>
                      <div className="text-sm font-medium">{m.n}</div>
                      <div className="text-xs text-muted-foreground">{m.e}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-accent">{m.p}</div>
                      <button className="mt-1 text-xs text-foreground hover:underline">Book →</button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
