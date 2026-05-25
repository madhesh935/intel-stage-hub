import { Logo } from "./Logo";
import { Github, Twitter, Linkedin, Youtube } from "lucide-react";

const cols = [
  { title: "Product", links: ["Marketplace", "AI Match", "Workspace", "Pricing"] },
  { title: "Company", links: ["About", "Careers", "Press", "Contact"] },
  { title: "Resources", links: ["Docs", "Guides", "API", "Status"] },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/5 bg-background/60">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-5">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            The AI-powered marketplace where elite freelancers and ambitious teams build the future together.
          </p>
          <div className="mt-5 flex gap-3 text-muted-foreground">
            {[Twitter, Github, Linkedin, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 transition hover:bg-white/5 hover:text-foreground">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">{c.title}</div>
            <ul className="mt-4 space-y-2 text-sm">
              {c.links.map((l) => (
                <li key={l}><a href="#" className="text-foreground/80 hover:text-foreground">{l}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-5 text-xs text-muted-foreground sm:flex-row">
          <div>© {new Date().getFullYear()} TalentStage Labs, Inc.</div>
          <div>Crafted with intention. Powered by AI.</div>
        </div>
      </div>
    </footer>
  );
}
