import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { AuthShell } from "@/components/AuthShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/register")({
  head: () => ({ meta: [{ title: "Create account — TalentStage" }, { name: "description", content: "Create your TalentStage account." }] }),
  component: Register,
});

function Register() {
  const nav = useNavigate();
  return (
    <AuthShell
      title="Create your account"
      subtitle="Join 120K+ creators and teams"
      footer={<>Already have an account? <Link to="/login" className="text-accent hover:underline">Sign in</Link></>}
    >
      <form onSubmit={(e) => { e.preventDefault(); nav({ to: "/role" }); }} className="grid gap-4">
        <div className="grid grid-cols-2 gap-3">
          <div className="grid gap-1.5"><Label>First name</Label><Input className="h-11 border-white/15 bg-white/5" placeholder="Alex" /></div>
          <div className="grid gap-1.5"><Label>Last name</Label><Input className="h-11 border-white/15 bg-white/5" placeholder="Lee" /></div>
        </div>
        <div className="grid gap-1.5"><Label>Email</Label><Input type="email" className="h-11 border-white/15 bg-white/5" placeholder="you@company.com" /></div>
        <div className="grid gap-1.5"><Label>Password</Label><Input type="password" className="h-11 border-white/15 bg-white/5" placeholder="At least 8 characters" /></div>
        <Button type="submit" className="h-11 bg-gradient-primary text-white shadow-glow hover:opacity-95">Create account</Button>
        <p className="text-center text-xs text-muted-foreground">By signing up you agree to our Terms and Privacy Policy.</p>
      </form>
    </AuthShell>
  );
}
