import { createFileRoute, Link } from "@tanstack/react-router";
import { AuthShell } from "@/components/AuthShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/forgot-password")({
  head: () => ({ meta: [{ title: "Reset password — TalentStage" }] }),
  component: () => (
    <AuthShell
      title="Reset your password"
      subtitle="We'll send a reset link to your email"
      footer={<><Link to="/login" className="text-accent hover:underline">Back to sign in</Link></>}
    >
      <form className="grid gap-4" onSubmit={(e) => e.preventDefault()}>
        <div className="grid gap-1.5"><Label>Email</Label><Input type="email" className="h-11 border-white/15 bg-white/5" placeholder="you@company.com" /></div>
        <Button className="h-11 bg-gradient-primary text-white shadow-glow hover:opacity-95">Send reset link</Button>
      </form>
    </AuthShell>
  ),
});
