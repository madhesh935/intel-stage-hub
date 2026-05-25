import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { DashboardShell } from "@/components/DashboardShell";
import { Send, Paperclip, Search, MoreHorizontal, Phone, Video } from "lucide-react";
import { messages } from "@/data/mock";

export const Route = createFileRoute("/dashboard/messages")({
  head: () => ({ meta: [{ title: "Messages — TalentStage" }] }),
  component: Messages,
});

const CHAT_HISTORY: Record<string, { from: "me" | "them"; text: string; time: string }[]> = {
  m1: [
    { from: "them", text: "Hey! Just wanted to share the v2 of the dashboard design. Lots of improvements based on your feedback.", time: "10:32" },
    { from: "me", text: "Amazing, I'll take a look right now!", time: "10:35" },
    { from: "them", text: "Let me know if you want any tweaks to the charts section.", time: "10:36" },
    { from: "them", text: "Sending v2 of the dashboard…", time: "2m" },
  ],
  m2: [
    { from: "them", text: "The eval results look great — 94% accuracy on the test set!", time: "9:15" },
    { from: "me", text: "That's excellent! What was the baseline?", time: "9:18" },
    { from: "them", text: "Baseline was 76%, so we've improved significantly.", time: "9:19" },
    { from: "them", text: "Eval results look great.", time: "1h" },
  ],
  m3: [
    { from: "them", text: "Hi! The brand board final version is attached. Please review.", time: "Yesterday" },
    { from: "me", text: "Got it! Will review by EOD.", time: "Yesterday" },
    { from: "them", text: "Brand board final version attached.", time: "3h" },
  ],
  m4: [
    { from: "them", text: "iOS build is ready for TestFlight. Invite code sent to your email.", time: "Yesterday" },
    { from: "me", text: "Perfect, I'll test it tonight.", time: "Yesterday" },
  ],
};

function Messages() {
  const [activeId, setActiveId] = useState("m1");
  const [input, setInput] = useState("");
  const active = messages.find((m) => m.id === activeId)!;
  const chat = CHAT_HISTORY[activeId] ?? [];

  return (
    <DashboardShell variant="freelancer" title="Messages" subtitle="Communicate with your clients and collaborators.">
      <div className="flex gap-0 rounded-2xl border border-white/10 overflow-hidden" style={{ height: "calc(100vh - 14rem)" }}>
        {/* Conversation list */}
        <div className="w-72 shrink-0 border-r border-white/8 bg-card/40 flex flex-col">
          <div className="p-3 border-b border-white/8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
              <input
                placeholder="Search messages…"
                className="w-full rounded-xl border border-white/10 bg-white/5 pl-9 pr-3 py-2 text-xs outline-none focus:border-primary/30"
              />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-2 space-y-1">
            {messages.map((m) => (
              <button
                key={m.id}
                onClick={() => setActiveId(m.id)}
                className={`w-full flex items-start gap-3 rounded-xl p-3 text-left transition ${
                  activeId === m.id ? "bg-primary/12 border border-primary/25" : "hover:bg-white/5"
                }`}
              >
                <div className="relative h-9 w-9 shrink-0 rounded-xl bg-gradient-primary flex items-center justify-center text-xs font-bold text-white">
                  {m.avatar}
                  {m.unread && (
                    <span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-accent border-2 border-background" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold truncate">{m.from}</span>
                    <span className="text-[10px] text-muted-foreground shrink-0 ml-1">{m.time}</span>
                  </div>
                  <div className="text-[11px] text-muted-foreground truncate">{m.preview}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Chat area */}
        <div className="flex flex-1 flex-col bg-background/30">
          {/* Chat header */}
          <div className="flex items-center justify-between border-b border-white/8 px-5 py-3">
            <div className="flex items-center gap-3">
              <div className="relative h-9 w-9 rounded-xl bg-gradient-primary flex items-center justify-center text-xs font-bold text-white">
                {active.avatar}
                <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-neon-green border-2 border-background" />
              </div>
              <div>
                <div className="text-sm font-semibold">{active.from}</div>
                <div className="text-[10px] text-neon-green">Online · Responds in &lt; 2h</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="rounded-lg p-2 text-muted-foreground hover:bg-white/8 hover:text-foreground transition">
                <Phone className="h-4 w-4" />
              </button>
              <button className="rounded-lg p-2 text-muted-foreground hover:bg-white/8 hover:text-foreground transition">
                <Video className="h-4 w-4" />
              </button>
              <button className="rounded-lg p-2 text-muted-foreground hover:bg-white/8 hover:text-foreground transition">
                <MoreHorizontal className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-5 space-y-3">
            {chat.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
                className={`flex ${msg.from === "me" ? "justify-end" : "justify-start"}`}
              >
                <div className={`max-w-[70%] rounded-2xl px-4 py-2.5 text-sm ${
                  msg.from === "me"
                    ? "bg-gradient-primary text-white rounded-br-sm"
                    : "bg-card/80 border border-white/10 text-foreground rounded-bl-sm"
                }`}>
                  {msg.text}
                  <div className={`text-[9px] mt-1 ${msg.from === "me" ? "text-white/60 text-right" : "text-muted-foreground"}`}>
                    {msg.time}
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
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message…"
                className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              />
              <button className="rounded-xl bg-gradient-primary p-2 text-white shadow-glow hover:opacity-90 transition">
                <Send className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
