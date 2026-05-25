import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { DashboardShell } from "@/components/DashboardShell";
import { User, Lock, Bell, CreditCard, Camera, Save } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/dashboard/settings")({
  head: () => ({ meta: [{ title: "Settings — TalentStage" }] }),
  component: Settings,
});

const TABS = [
  { id: "profile", label: "Profile", icon: User },
  { id: "security", label: "Security", icon: Lock },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "billing", label: "Billing", icon: CreditCard },
];

function Toggle({ label, defaultOn = false }: { label: string; defaultOn?: boolean }) {
  const [on, setOn] = useState(defaultOn);
  return (
    <div className="flex items-center justify-between py-3 border-b border-white/5 last:border-0">
      <span className="text-sm">{label}</span>
      <button
        onClick={() => setOn((v) => !v)}
        className={`relative h-5 w-9 rounded-full transition-colors ${on ? "bg-gradient-primary" : "bg-white/15"}`}
      >
        <span className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow transition-transform ${on ? "left-4.5 translate-x-0.5" : "left-0.5"}`} />
      </button>
    </div>
  );
}

function Settings() {
  const [tab, setTab] = useState("profile");

  return (
    <DashboardShell variant="freelancer" title="Settings" subtitle="Manage your account, security, and preferences.">
      <div className="grid gap-4 lg:grid-cols-[200px_1fr]">
        {/* Tab list */}
        <div className="space-y-1 h-fit">
          {TABS.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setTab(id)}
              className={`w-full flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-left transition ${
                tab === id ? "bg-primary/12 border border-primary/25 text-primary" : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
              }`}
            >
              <Icon className="h-4 w-4" />
              {label}
            </button>
          ))}
        </div>

        {/* Content */}
        <motion.div
          key={tab}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.25 }}
          className="rounded-2xl border border-white/10 bg-card/60 p-6 backdrop-blur-xl"
        >
          {tab === "profile" && (
            <div className="space-y-6">
              {/* Avatar */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="h-16 w-16 rounded-2xl bg-gradient-primary flex items-center justify-center text-lg font-bold text-white">AK</div>
                  <button className="absolute -bottom-1 -right-1 rounded-full bg-card border border-white/15 p-1.5">
                    <Camera className="h-3 w-3 text-muted-foreground" />
                  </button>
                </div>
                <div>
                  <div className="text-sm font-semibold">Alex Kim</div>
                  <div className="text-xs text-muted-foreground">Full-Stack Engineer · San Francisco, CA</div>
                  <button className="mt-1 text-xs text-primary hover:underline">Upload new photo</button>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { label: "Full name", value: "Alex Kim" },
                  { label: "Username", value: "alexkim_dev" },
                  { label: "Email", value: "alex@example.com" },
                  { label: "Phone", value: "+1 (555) 000-0000" },
                  { label: "Location", value: "San Francisco, CA" },
                  { label: "Website", value: "alexkim.dev" },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <label className="block text-xs font-medium mb-1.5 text-muted-foreground">{label}</label>
                    <input
                      defaultValue={value}
                      className="w-full rounded-xl border border-white/12 bg-white/5 px-3 py-2 text-sm outline-none focus:border-primary/40 focus:ring-1 focus:ring-primary/20"
                    />
                  </div>
                ))}
              </div>

              <div>
                <label className="block text-xs font-medium mb-1.5 text-muted-foreground">Bio</label>
                <textarea
                  rows={3}
                  defaultValue="Full-stack engineer specializing in SaaS products with React, TypeScript, and Node.js. 8+ years shipping production apps."
                  className="w-full rounded-xl border border-white/12 bg-white/5 px-3 py-2 text-sm outline-none focus:border-primary/40 focus:ring-1 focus:ring-primary/20 resize-none"
                />
              </div>

              <button className="inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-white shadow-glow hover:opacity-90 transition">
                <Save className="h-4 w-4" />
                Save changes
              </button>
            </div>
          )}

          {tab === "security" && (
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold mb-3">Change Password</h3>
                {["Current password", "New password", "Confirm new password"].map((l) => (
                  <div key={l} className="mb-3">
                    <label className="block text-xs font-medium mb-1.5 text-muted-foreground">{l}</label>
                    <input
                      type="password"
                      placeholder="••••••••"
                      className="w-full rounded-xl border border-white/12 bg-white/5 px-3 py-2 text-sm outline-none focus:border-primary/40"
                    />
                  </div>
                ))}
                <button className="rounded-xl bg-gradient-primary px-5 py-2 text-sm font-semibold text-white shadow-glow hover:opacity-90 transition">
                  Update Password
                </button>
              </div>
              <div className="border-t border-white/8 pt-5">
                <h3 className="text-sm font-semibold mb-1">Two-Factor Authentication</h3>
                <p className="text-xs text-muted-foreground mb-3">Add an extra layer of security to your account.</p>
                <button className="rounded-xl border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary hover:bg-primary/20 transition">
                  Enable 2FA
                </button>
              </div>
            </div>
          )}

          {tab === "notifications" && (
            <div>
              <h3 className="text-sm font-semibold mb-4">Email Notifications</h3>
              <div className="space-y-0">
                <Toggle label="New project matches" defaultOn />
                <Toggle label="Proposal updates" defaultOn />
                <Toggle label="Message received" defaultOn />
                <Toggle label="Milestone approved" defaultOn />
                <Toggle label="Payment received" defaultOn />
                <Toggle label="AI score updates" />
                <Toggle label="Community mentions" />
                <Toggle label="Marketing emails" />
              </div>
            </div>
          )}

          {tab === "billing" && (
            <div className="space-y-4">
              <div className="rounded-xl border border-primary/25 bg-primary/10 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-sm">Pro Plan</div>
                    <div className="text-xs text-muted-foreground">$29/month · Renews July 1, 2025</div>
                  </div>
                  <button className="rounded-lg border border-white/12 bg-white/5 px-3 py-1.5 text-xs font-medium hover:bg-white/10 transition">
                    Manage
                  </button>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold mb-3">Payment Method</h3>
                <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-3">
                  <div className="flex items-center gap-3">
                    <CreditCard className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <div className="text-sm font-medium">Visa ending in 4242</div>
                      <div className="text-xs text-muted-foreground">Expires 12/27</div>
                    </div>
                  </div>
                  <button className="text-xs text-primary hover:underline">Change</button>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </DashboardShell>
  );
}
