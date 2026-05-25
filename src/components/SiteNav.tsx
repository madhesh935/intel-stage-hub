import { Link, useRouterState } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Bell, Menu, X, ChevronDown, Sparkles, ArrowRight,
} from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { label: "Marketplace", to: "/marketplace" },
  { label: "Community", to: "/community" },
  { label: "AI Features", to: "/ai" },
  {
    label: "Product",
    children: [
      { label: "Skill Verification", to: "/ai", desc: "AI-powered skill tests & badges" },
      { label: "Proposal Scoring", to: "/ai", desc: "Rank proposals automatically" },
      { label: "Project Scoping", to: "/ai", desc: "AI generates SOW & budget" },
    ],
  },
];

export function SiteNav() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [path]);

  return (
    <>
      <motion.header
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/85 backdrop-blur-xl border-b border-white/8 shadow-[0_1px_40px_rgba(0,0,0,0.5)]"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
          {/* Logo */}
          <Logo />

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-1 lg:flex" onMouseLeave={() => setDropdown(null)}>
            {NAV_LINKS.map((link) =>
              link.children ? (
                <div key={link.label} className="relative">
                  <button
                    onMouseEnter={() => setDropdown(link.label)}
                    className={`flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-all ${
                      dropdown === link.label
                        ? "text-foreground bg-white/8"
                        : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform ${dropdown === link.label ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence>
                    {dropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 4, scale: 0.96 }}
                        transition={{ duration: 0.18 }}
                        className="absolute left-0 top-full mt-2 w-64 rounded-2xl border border-white/10 bg-background/95 p-2 backdrop-blur-xl shadow-lifted"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            to={child.to}
                            className="group flex gap-3 rounded-xl p-3 transition hover:bg-white/6"
                          >
                            <div>
                              <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                                {child.label}
                              </div>
                              <div className="text-xs text-muted-foreground">{child.desc}</div>
                            </div>
                            <ArrowRight className="ml-auto h-4 w-4 shrink-0 opacity-0 text-primary transition-all group-hover:opacity-100 group-hover:translate-x-0.5" />
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.label}
                  to={link.to}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition-all ${
                    path === link.to
                      ? "text-foreground bg-white/8"
                      : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            {/* AI badge pill */}
            <div className="hidden sm:flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              <Sparkles className="h-3 w-3" />
              AI-Powered
            </div>

            <button className="relative hidden rounded-lg p-2 text-muted-foreground transition hover:bg-white/6 hover:text-foreground sm:flex">
              <Bell className="h-4 w-4" />
              <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-primary" />
            </button>

            <Link to="/login" className="hidden sm:block">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                Log in
              </Button>
            </Link>
            <Link to="/register">
              <Button
                size="sm"
                className="bg-gradient-primary text-white shadow-glow hover:opacity-90 hidden sm:inline-flex"
              >
                Get started
              </Button>
            </Link>

            {/* Mobile menu toggle */}
            <button
              className="rounded-lg p-2 text-muted-foreground transition hover:bg-white/6 hover:text-foreground lg:hidden"
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-background/70 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="fixed right-0 top-0 bottom-0 z-50 w-72 bg-background border-l border-white/10 shadow-lifted flex flex-col p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <Logo />
                <button onClick={() => setMobileOpen(false)} className="rounded-lg p-1.5 text-muted-foreground hover:bg-white/6">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <nav className="flex-1 space-y-1">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.label}
                    to={(link as any).to ?? "/"}
                    className="flex items-center gap-2 rounded-xl px-3 py-3 text-sm font-medium text-muted-foreground hover:bg-white/6 hover:text-foreground transition"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="space-y-2 pt-4 border-t border-white/8">
                <Link to="/login" className="block">
                  <Button variant="outline" className="w-full border-white/10 bg-white/5">Log in</Button>
                </Link>
                <Link to="/register" className="block">
                  <Button className="w-full bg-gradient-primary text-white">Get started</Button>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
