import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ArrowRight, ArrowLeft, Sparkles, User, Mail, Lock, Eye, EyeOff, Check } from "lucide-react";
import { Logo } from "@/components/Logo";
import { FloatingParticles } from "@/components/ui/FloatingParticles";
import { useAuth } from "@/store/auth";

const step1Schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});
type Step1Data = z.infer<typeof step1Schema>;

const ROLES = [
  { id: "freelancer", label: "Freelancer", emoji: "💼", desc: "Find clients and showcase your skills" },
  { id: "client", label: "Client", emoji: "🏢", desc: "Hire top talent for your projects" },
  { id: "both", label: "Both", emoji: "⚡", desc: "Hire and freelance simultaneously" },
];

export const Route = createFileRoute("/register")({
  head: () => ({ meta: [{ title: "Create Account — TalentStage" }] }),
  component: Register,
});

function Register() {
  const [step, setStep] = useState(0);
  const [role, setRole] = useState<string | null>(null);
  const [showPass, setShowPass] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Step1Data>({ resolver: zodResolver(step1Schema) });

  const setGlobalRole = useAuth((s) => s.setRole);

  const onStep1 = async (_data: Step1Data) => setStep(1);
  const onFinish = async () => {
    if (!role) return;
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1400));
    setGlobalRole(role as any);
    setStep(2);
    setSubmitting(false);
  };

  const steps = ["Account", "Role", "Welcome"];

  return (
    <div className="min-h-screen flex bg-background">
      {/* Left panel */}
      <div className="relative hidden lg:flex lg:w-[50%] flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-primary/20 via-background to-accent/15">
        <FloatingParticles count={35} className="opacity-50" />
        <div className="absolute inset-0 bg-grid opacity-15" />
        <div className="absolute -left-20 top-20 h-80 w-80 rounded-full bg-primary/20 blur-[100px] animate-pulse-glow" />

        <div className="relative z-10 text-center px-12 max-w-md">
          <Logo className="justify-center mb-10" />
          <h2 className="text-3xl font-bold font-display leading-tight">
            Join the world's most{" "}
            <span className="text-gradient">intelligent</span> talent platform.
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-3 text-left">
            {["AI skill verification", "Milestone-based escrow", "Realtime workspace", "120K+ freelancers", "Smart matching AI", "Verified skill badges"].map((f) => (
              <div key={f} className="flex items-center gap-2 text-sm">
                <div className="h-4 w-4 rounded-full bg-neon-green/15 border border-neon-green/30 flex items-center justify-center shrink-0">
                  <Check className="h-2.5 w-2.5 text-neon-green" />
                </div>
                {f}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right panel */}
      <div className="flex flex-1 flex-col items-center justify-center px-6 py-12">
        {/* Progress indicator */}
        <div className="w-full max-w-sm mb-8">
          <div className="flex items-center gap-2">
            {steps.map((s, i) => (
              <div key={s} className="flex items-center gap-2 flex-1">
                <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-all ${i <= step ? "bg-gradient-primary text-white shadow-glow" : "bg-white/10 text-muted-foreground"}`}>
                  {i < step ? <Check className="h-3.5 w-3.5" /> : i + 1}
                </div>
                <span className={`text-xs ${i === step ? "font-semibold text-foreground" : "text-muted-foreground"}`}>{s}</span>
                {i < steps.length - 1 && <div className={`flex-1 h-px ${i < step ? "bg-primary" : "bg-white/10"}`} />}
              </div>
            ))}
          </div>
        </div>

        <div className="w-full max-w-sm">
          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.div
                key="step0"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
              >
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-5">
                  <Sparkles className="h-3 w-3" />
                  Step 1 of 2
                </div>
                <h2 className="text-2xl font-bold font-display">Create your account</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Already have one?{" "}
                  <Link to="/login" className="text-primary hover:underline font-medium">Sign in</Link>
                </p>

                <form onSubmit={handleSubmit(onStep1)} className="mt-6 space-y-4">
                  <div>
                    <label className="block text-xs font-medium mb-1.5">Full name</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <input {...register("name")} placeholder="Alex Kim" className="w-full rounded-xl border border-white/12 bg-white/5 pl-10 pr-4 py-2.5 text-sm outline-none transition focus:border-primary/40 focus:ring-1 focus:ring-primary/20 placeholder:text-muted-foreground" />
                    </div>
                    {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1.5">Email address</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <input {...register("email")} type="email" placeholder="you@company.com" className="w-full rounded-xl border border-white/12 bg-white/5 pl-10 pr-4 py-2.5 text-sm outline-none transition focus:border-primary/40 focus:ring-1 focus:ring-primary/20 placeholder:text-muted-foreground" />
                    </div>
                    {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1.5">Password</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <input {...register("password")} type={showPass ? "text" : "password"} placeholder="Min. 8 characters" className="w-full rounded-xl border border-white/12 bg-white/5 pl-10 pr-10 py-2.5 text-sm outline-none transition focus:border-primary/40 focus:ring-1 focus:ring-primary/20 placeholder:text-muted-foreground" />
                      <button type="button" onClick={() => setShowPass((v) => !v)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                        {showPass ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                    {errors.password && <p className="mt-1 text-xs text-destructive">{errors.password.message}</p>}
                  </div>
                  <button type="submit" className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-primary py-2.5 text-sm font-semibold text-white shadow-glow hover:opacity-90 transition">
                    Continue <ArrowRight className="h-4 w-4" />
                  </button>
                </form>

                <p className="mt-4 text-[11px] text-center text-muted-foreground">
                  By signing up, you agree to our{" "}
                  <a href="#" className="text-primary hover:underline">Terms</a> and{" "}
                  <a href="#" className="text-primary hover:underline">Privacy Policy</a>.
                </p>
              </motion.div>
            )}

            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
              >
                <button onClick={() => setStep(0)} className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition mb-5">
                  <ArrowLeft className="h-3.5 w-3.5" /> Back
                </button>
                <h2 className="text-2xl font-bold font-display">How will you use TalentStage?</h2>
                <p className="mt-1 text-sm text-muted-foreground">Choose your primary role — you can always switch later.</p>

                <div className="mt-6 space-y-3">
                  {ROLES.map(({ id, label, emoji, desc }) => (
                    <motion.button
                      key={id}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setRole(id)}
                      className={`w-full flex items-center gap-4 rounded-2xl border p-4 text-left transition ${role === id ? "border-primary/50 bg-primary/12 ring-1 ring-primary/30" : "border-white/10 bg-white/5 hover:border-white/20"}`}
                    >
                      <span className="text-2xl">{emoji}</span>
                      <div className="flex-1">
                        <div className="font-semibold text-sm">{label}</div>
                        <div className="text-xs text-muted-foreground">{desc}</div>
                      </div>
                      {role === id && (
                        <div className="h-5 w-5 rounded-full bg-primary flex items-center justify-center shrink-0">
                          <Check className="h-3 w-3 text-white" />
                        </div>
                      )}
                    </motion.button>
                  ))}
                </div>

                <button
                  disabled={!role || submitting}
                  onClick={onFinish}
                  className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-primary py-2.5 text-sm font-semibold text-white shadow-glow hover:opacity-90 transition disabled:opacity-50"
                >
                  {submitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                      className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white"
                    />
                  ) : (
                    <>Create Account <ArrowRight className="h-4 w-4" /></>
                  )}
                </button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="text-center"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-6xl mb-4 inline-block"
                >
                  🎉
                </motion.div>
                <h2 className="text-2xl font-bold font-display">You're on the stage!</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Your TalentStage account is ready. Let's set up your profile.
                </p>
                <div className="mt-6 space-y-3">
                  <Link to={role === "client" ? "/client" : "/dashboard"}>
                    <button className="w-full rounded-xl bg-gradient-primary py-2.5 text-sm font-semibold text-white shadow-glow hover:opacity-90 transition">
                      Go to Dashboard
                    </button>
                  </Link>
                  <Link to="/marketplace">
                    <button className="w-full rounded-xl border border-white/12 bg-white/5 py-2.5 text-sm font-medium hover:bg-white/10 transition">
                      Explore Marketplace
                    </button>
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
