import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { AuthShell } from "@/components/AuthShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Sign in — TalentStage" }, { name: "description", content: "Sign in to TalentStage." }] }),
  component: LoginPage,
});

const schema = z.object({ email: z.string().email(), password: z.string().min(6) });

function LoginPage() {
  const nav = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(schema) });
  return (
    <AuthShell
      title="Welcome back"
      subtitle="Sign in to your TalentStage account"
      footer={<>Don't have an account? <Link to="/register" className="text-accent hover:underline">Create one</Link></>}
    >
      <form onSubmit={handleSubmit(() => nav({ to: "/dashboard" }))} className="grid gap-4">
        <div className="grid gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="you@company.com" className="h-11 border-white/15 bg-white/5" {...register("email")} />
          {errors.email && <p className="text-xs text-destructive">{errors.email.message as string}</p>}
        </div>
        <div className="grid gap-1.5">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Password</Label>
            <Link to="/forgot-password" className="text-xs text-muted-foreground hover:text-foreground">Forgot?</Link>
          </div>
          <Input id="password" type="password" placeholder="••••••••" className="h-11 border-white/15 bg-white/5" {...register("password")} />
          {errors.password && <p className="text-xs text-destructive">{errors.password.message as string}</p>}
        </div>
        <Button type="submit" className="h-11 bg-gradient-primary text-white shadow-glow hover:opacity-95">Sign in</Button>
      </form>
    </AuthShell>
  );
}
