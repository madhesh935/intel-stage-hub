import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { DashboardShell } from "@/components/DashboardShell";
import {
  Send, Paperclip, Check, CheckCheck, FileText, Image, Activity,
  Plus, Flag, Clock, ChevronDown,
} from "lucide-react";

export const Route = createFileRoute("/workspace/$id")({
  head: () => ({ meta: [{ title: "Workspace — TalentStage" }] }),
  component: Workspace,
});

const MILESTONES = [
  { id: "m1", label: "Project Setup & Discovery", status: "done", amount: 2000, due: "Jun 10" },
  { id: "m2", label: "Core UI Implementation", status: "done", amount: 3500, due: "Jun 25" },
  { id: "m3", label: "AI Features & Charts", status: "active", amount: 3500, due: "Jul 10" },
  { id: "m4", label: "QA & Production Deploy", status: "pending", amount: 1500, due: "Jul 20" },
  { id: "m5", label: "Handoff & Documentation", status: "pending", amount: 500, due: "Jul 25" },
];

const MESSAGES = [
  { from: "them", text: "Good morning! Ready to start milestone 3 — AI features and charts.", time: "9:00", read: true },
  { from: "me", text: "Absolutely! I've already sketched the Recharts implementation. Should be straightforward.", time: "9:05", read: true },
  { from: "them", text: "Perfect. Can you also add the real-time data streaming for the analytics panel?", time: "9:08", read: true },
  { from: "me", text: "Yes, I'll use WebSockets for the live updates. I'll have a working prototype by EOD.", time: "9:12", read: true },
  { from: "them", text: "Amazing. One more thing — the client wants an AI-generated insight card on the dashboard.", time: "9:15", read: false },
];

const ACTIVITY = [
  { type: "milestone", text: "Milestone 2 completed and approved", time: "2h", icon: Check },
  { type: "file", text: "dashboard_wireframes_v3.fig uploaded", time: "4h", icon: FileText },
  { type: "payment", text: "$3,500 released from escrow", time: "5h", icon: Flag },
  { type: "revision", text: "Revision request submitted: Chart colors", time: "1d", icon: Activity },
];

function Workspace() {
  const [activePanel, setActivePanel] = useState<"milestones" | "activity">("milestones");
  const [input, setInput] = useState("");

  return (
    <DashboardShell variant="freelancer" title="" subtitle="">
      <div className="flex gap-0 rounded-2xl border border-white/10 overflow-hidden" style={{ height: "calc(100vh - 10rem)" }}>
        {/* Chat */}
        <div className="flex flex-1 flex-col min-w-0">
          {/* Header */}
          <div className="border-b border-white/8 px-5 py-3 flex items-center justify-between gap-3 bg-card/40">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-gradient-primary flex items-center justify-center text-xs font-bold text-white">LL</div>
              <div>
                <div className="text-sm font-semibold">AI Dashboard for Analytics SaaS</div>
                <div className="text-[10px] text-muted-foreground">Lumen Labs · Milestone 3 of 5 · <span className="text-amber-400">Due Jul 10</span></div>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="rounded-lg border border-neon-green/30 bg-neon-green/10 px-3 py-1.5 text-[10px] font-bold text-neon-green">
                Active Contract
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-5 space-y-3">
            {MESSAGES.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
                className={`flex ${msg.from === "me" ? "justify-end" : "justify-start"}`}
              >
                <div className={`max-w-[72%] rounded-2xl px-4 py-2.5 text-sm ${
                  msg.from === "me"
                    ? "bg-gradient-primary text-white rounded-br-sm"
                    : "bg-card/80 border border-white/10 rounded-bl-sm"
                }`}>
                  {msg.text}
                  <div className={`flex items-center justify-end gap-1 text-[9px] mt-1 ${msg.from === "me" ? "text-white/50" : "text-muted-foreground"}`}>
                    {msg.time}
                    {msg.from === "me" && (
                      msg.read ? <CheckCheck className="h-2.5 w-2.5 text-accent" /> : <Check className="h-2.5 w-2.5" />
                    )}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Typing indicator */}
            <div className="flex justify-start">
              <div className="bg-card/80 border border-white/10 rounded-2xl rounded-bl-sm px-4 py-3 flex items-center gap-1">
                {[0, 1, 2].map((i) => (
                  <motion.span
                    key={i}
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                    className="h-1.5 w-1.5 rounded-full bg-muted-foreground"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Input */}
          <div className="border-t border-white/8 p-4">
            <div className="flex items-center gap-3 rounded-2xl border border-white/12 bg-white/5 px-4 py-2.5">
              <button className="text-muted-foreground hover:text-foreground transition">
                <Paperclip className="h-4 w-4" />
              </button>
              <button className="text-muted-foreground hover:text-foreground transition">
                <Image className="h-4 w-4" />
              </button>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Message Lumen Labs…"
                className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              />
              <button className="rounded-xl bg-gradient-primary p-2 text-white shadow-glow hover:opacity-90 transition">
                <Send className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Right panel */}
        <div className="hidden xl:flex w-80 shrink-0 flex-col border-l border-white/8 bg-card/30">
          {/* Panel tabs */}
          <div className="border-b border-white/8 p-3 flex gap-2">
            {["milestones", "activity"].map((p) => (
              <button
                key={p}
                onClick={() => setActivePanel(p as any)}
                className={`flex-1 rounded-lg py-1.5 text-xs font-medium capitalize transition ${
                  activePanel === p ? "bg-primary/15 border border-primary/25 text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {p}
              </button>
            ))}
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            {activePanel === "milestones" && (
              <div className="space-y-2">
                <div className="text-xs font-semibold mb-3 flex items-center justify-between">
                  <span>5 Milestones</span>
                  <span className="text-neon-green">$11,000 total</span>
                </div>
                {MILESTONES.map((m, i) => (
                  <div key={m.id} className={`rounded-xl border p-3 ${
                    m.status === "done" ? "border-neon-green/20 bg-neon-green/6" :
                    m.status === "active" ? "border-primary/30 bg-primary/10" :
                    "border-white/8 bg-white/3"
                  }`}>
                    <div className="flex items-center gap-2 mb-1">
                      <div className={`h-4 w-4 rounded-full flex items-center justify-center shrink-0 ${
                        m.status === "done" ? "bg-neon-green" :
                        m.status === "active" ? "bg-primary animate-pulse" :
                        "bg-white/15"
                      }`}>
                        {m.status === "done" && <Check className="h-2.5 w-2.5 text-white" />}
                        {m.status === "active" && <span className="h-2 w-2 rounded-full bg-white" />}
                      </div>
                      <span className="text-xs font-medium line-clamp-1">{m.label}</span>
                    </div>
                    <div className="flex items-center justify-between text-[10px] ml-6">
                      <span className="text-muted-foreground flex items-center gap-1"><Clock className="h-2.5 w-2.5" />{m.due}</span>
                      <span className={`font-bold ${m.status === "done" ? "text-neon-green" : m.status === "active" ? "text-primary" : "text-muted-foreground"}`}>
                        ${m.amount.toLocaleString()}
                      </span>
                    </div>
                    {m.status === "active" && (
                      <button className="mt-2 ml-6 w-[calc(100%-1.5rem)] rounded-lg bg-gradient-primary py-1.5 text-[10px] font-semibold text-white">
                        Request Approval
                      </button>
                    )}
                  </div>
                ))}
              </div>
            )}

            {activePanel === "activity" && (
              <div>
                <div className="text-xs font-semibold mb-3">Recent Activity</div>
                <div className="relative pl-5">
                  <div className="absolute left-1.5 top-0 bottom-0 w-px bg-white/10" />
                  {ACTIVITY.map(({ type, text, time, icon: Icon }, i) => (
                    <div key={i} className="relative mb-4">
                      <div className="absolute -left-5 top-0 h-5 w-5 rounded-full bg-card border border-white/15 flex items-center justify-center">
                        <Icon className="h-2.5 w-2.5 text-accent" />
                      </div>
                      <div className="text-xs font-medium leading-snug">{text}</div>
                      <div className="text-[10px] text-muted-foreground mt-0.5">{time} ago</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="border-t border-white/8 p-3 space-y-2">
            <button className="w-full rounded-xl border border-amber-400/30 bg-amber-400/8 py-2 text-xs font-semibold text-amber-400 hover:bg-amber-400/15 transition">
              Request Revision
            </button>
            <button className="w-full rounded-xl bg-gradient-primary py-2 text-xs font-semibold text-white shadow-glow hover:opacity-90 transition">
              Submit Deliverable
            </button>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
