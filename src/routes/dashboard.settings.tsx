import { createFileRoute } from "@tanstack/react-router";
import { DashboardShell } from "@/components/DashboardShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/dashboard/settings")({
  head: () => ({ meta: [{ title: "Settings — TalentStage" }] }),
  component: () => (
    <DashboardShell variant="freelancer" title="Settings" subtitle="Manage account, billing, and notifications.">
      <div className="grid gap-4 lg:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-card/60 p-6 backdrop-blur-xl lg:col-span-2">
          <h3 className="text-base font-semibold">Profile</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <Field label="Display name" value="Alex Lee" />
            <Field label="Headline" value="Senior Product Designer" />
            <Field label="Hourly rate (USD)" value="95" />
            <Field label="Location" value="San Francisco, US" />
            <div className="sm:col-span-2"><Field label="Bio" value="I design clean, modern interfaces for AI-powered SaaS." textarea /></div>
          </div>
          <Button className="mt-5 bg-gradient-primary text-white">Save changes</Button>
        </div>
        <div className="rounded-2xl border border-white/10 bg-card/60 p-6 backdrop-blur-xl">
          <h3 className="text-base font-semibold">Notifications</h3>
          <ul className="mt-4 space-y-3 text-sm">
            {["New proposals", "Messages", "Payment events", "Weekly AI digest"].map((t) => (
              <li key={t} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-3">
                <span>{t}</span>
                <input type="checkbox" defaultChecked className="h-4 w-4 accent-[#7C3AED]" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </DashboardShell>
  ),
});

function Field({ label, value, textarea = false }: { label: string; value: string; textarea?: boolean }) {
  return (
    <div className="grid gap-1.5">
      <Label className="text-xs uppercase tracking-wider text-muted-foreground">{label}</Label>
      {textarea
        ? <textarea defaultValue={value} className="min-h-[88px] rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm" />
        : <Input defaultValue={value} className="h-10 border-white/10 bg-white/5" />}
    </div>
  );
}
