import { createFileRoute } from "@tanstack/react-router";
import { DashboardShell } from "@/components/DashboardShell";
import { messages } from "@/data/mock";
import { Send, Paperclip } from "lucide-react";
import { Input } from "@/components/ui/input";

export const Route = createFileRoute("/dashboard/messages")({
  head: () => ({ meta: [{ title: "Messages — TalentStage" }] }),
  component: () => (
    <DashboardShell variant="freelancer" title="Messages" subtitle="Realtime chats with clients and collaborators.">
      <div className="grid h-[calc(100vh-220px)] gap-4 overflow-hidden rounded-2xl border border-white/10 bg-card/60 backdrop-blur-xl lg:grid-cols-[280px_1fr]">
        <div className="overflow-y-auto border-white/10 lg:border-r">
          {messages.concat(messages).map((m, i) => (
            <button key={i} className={`flex w-full items-start gap-3 border-b border-white/5 p-4 text-left transition hover:bg-white/5 ${i===0 ? "bg-white/5" : ""}`}>
              <div className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-primary text-xs font-semibold text-white">{m.from.split(" ").map(w=>w[0]).join("")}</div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between"><div className="truncate text-sm font-medium">{m.from}</div><div className="text-[10px] text-muted-foreground">{m.time}</div></div>
                <div className="truncate text-xs text-muted-foreground">{m.preview}</div>
              </div>
            </button>
          ))}
        </div>
        <div className="flex flex-col">
          <div className="flex-1 space-y-3 overflow-y-auto p-5">
            <Msg from="them">Hey! Sending v2 of the dashboard in an hour 👋</Msg>
            <Msg from="me">Perfect — looking forward to it.</Msg>
            <Msg from="them">Also, the AI insight panel is now snappier. Cached the embeddings.</Msg>
            <Msg from="me">Love it. Let's ship.</Msg>
          </div>
          <div className="flex items-center gap-2 border-t border-white/10 p-3">
            <button className="grid h-9 w-9 place-items-center rounded-lg bg-white/5 hover:bg-white/10"><Paperclip className="h-4 w-4" /></button>
            <Input placeholder="Write a message…" className="h-10 border-white/10 bg-white/5" />
            <button className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-primary text-white"><Send className="h-4 w-4" /></button>
          </div>
        </div>
      </div>
    </DashboardShell>
  ),
});

function Msg({ from, children }: { from: "me" | "them"; children: React.ReactNode }) {
  const mine = from === "me";
  return (
    <div className={`flex ${mine ? "justify-end" : "justify-start"}`}>
      <div className={`max-w-md rounded-2xl px-4 py-2 text-sm ${mine ? "bg-gradient-primary text-white" : "bg-white/5 text-foreground"}`}>{children}</div>
    </div>
  );
}
