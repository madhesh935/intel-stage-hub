import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { DashboardShell } from "@/components/DashboardShell";
import { ShieldCheck, Clock, Plus, Play, ChevronRight, Award, Check, X } from "lucide-react";
import { skills } from "@/data/mock";
import { AIBadge } from "@/components/ui/AIBadge";
import { ProgressRing } from "@/components/ui/ProgressRing";

export const Route = createFileRoute("/dashboard/skills")({
  head: () => ({ meta: [{ title: "Skill Verification — TalentStage" }] }),
  component: SkillVerification,
});

const QUIZ_QUESTIONS = [
  {
    q: "Which TypeScript utility type makes all properties of T optional?",
    opts: ["Partial<T>", "Required<T>", "Readonly<T>", "Pick<T, K>"],
    answer: 0,
  },
  {
    q: "What does the 'infer' keyword do in conditional types?",
    opts: ["Extracts a type from a conditional branch", "Narrows a union type", "Creates a generic alias", "Merges two types"],
    answer: 0,
  },
];

function SkillVerification() {
  const [quizSkill, setQuizSkill] = useState<string | null>(null);
  const [quizStep, setQuizStep] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [correct, setCorrect] = useState<boolean | null>(null);
  const [unlocked, setUnlocked] = useState(false);

  const verified = skills.filter((s) => s.verified);
  const unverified = skills.filter((s) => !s.verified);

  const startQuiz = (name: string) => { setQuizSkill(name); setQuizStep(0); setSelected(null); setCorrect(null); setUnlocked(false); };
  const answer = (i: number) => {
    setSelected(i);
    const isCorrect = i === QUIZ_QUESTIONS[quizStep].answer;
    setCorrect(isCorrect);
    setTimeout(() => {
      if (quizStep < QUIZ_QUESTIONS.length - 1) { setQuizStep(quizStep + 1); setSelected(null); setCorrect(null); }
      else { setUnlocked(true); }
    }, 1000);
  };

  return (
    <DashboardShell variant="freelancer" title="Skill Verification" subtitle="Earn AI-verified badges that unlock premium projects.">
      <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
        {/* Left — skills grid */}
        <div className="space-y-5">
          {/* Verified */}
          <div className="rounded-2xl border border-white/10 bg-card/60 p-5 backdrop-blur-xl">
            <div className="flex items-center gap-2 mb-4">
              <ShieldCheck className="h-4 w-4 text-neon-green" />
              <span className="text-sm font-semibold">Verified Skills ({verified.length})</span>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {verified.map((s, i) => (
                <motion.div
                  key={s.name}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="flex items-center justify-between rounded-xl border border-neon-green/20 bg-neon-green/6 p-3"
                >
                  <div className="flex items-center gap-3">
                    <ProgressRing value={s.score ?? 0} size={40} strokeWidth={3.5} color="green" label="" showLabel={false} />
                    <div>
                      <div className="text-sm font-semibold">{s.name}</div>
                      <div className="text-[10px] text-muted-foreground">{s.level} · Score: {s.score}</div>
                    </div>
                  </div>
                  <AIBadge label="Verified" state="verified" size="sm" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Unverified */}
          <div className="rounded-2xl border border-white/10 bg-card/60 p-5 backdrop-blur-xl">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="h-4 w-4 text-amber-400" />
              <span className="text-sm font-semibold">Unverified Skills — take a test to unlock</span>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {unverified.map((s, i) => (
                <div
                  key={s.name}
                  className="flex items-center justify-between rounded-xl border border-white/10 bg-white/4 p-3"
                >
                  <div>
                    <div className="text-sm font-medium">{s.name}</div>
                    <div className="text-[10px] text-muted-foreground">{s.level}</div>
                  </div>
                  <button
                    onClick={() => startQuiz(s.name)}
                    className="flex items-center gap-1.5 rounded-lg bg-primary/15 border border-primary/30 px-3 py-1.5 text-[11px] font-semibold text-primary hover:bg-primary/25 transition"
                  >
                    <Play className="h-3 w-3" /> Verify
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right — quiz panel */}
        <div className="rounded-2xl border border-white/10 bg-card/60 p-5 backdrop-blur-xl h-fit">
          {!quizSkill ? (
            <div className="text-center py-8">
              <Award className="h-12 w-12 text-muted-foreground mx-auto mb-3 opacity-30" />
              <div className="text-sm font-semibold">Select a skill to verify</div>
              <p className="text-xs text-muted-foreground mt-1">Click "Verify" next to any unverified skill to start an AI-proctored test.</p>
            </div>
          ) : unlocked ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="text-center py-4 space-y-4"
            >
              <div className="text-5xl animate-bounce-in">🏆</div>
              <div className="text-lg font-bold font-display text-gradient">{quizSkill} Verified!</div>
              <AIBadge label={`${quizSkill} Expert`} state="verified" size="lg" className="mx-auto" />
              <div className="rounded-xl bg-primary/10 border border-primary/25 p-3 text-xs">
                <div className="font-semibold text-primary">+{Math.floor(Math.random() * 8 + 8)} new project matches unlocked</div>
              </div>
              <button
                onClick={() => setQuizSkill(null)}
                className="w-full rounded-xl bg-gradient-primary py-2.5 text-sm font-semibold text-white"
              >
                Verify another skill
              </button>
            </motion.div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold">{quizSkill} Test</div>
                <button onClick={() => setQuizSkill(null)} className="text-muted-foreground hover:text-foreground">
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Progress */}
              <div className="h-1.5 rounded-full bg-white/8">
                <motion.div
                  className="h-full rounded-full bg-gradient-primary"
                  animate={{ width: `${((quizStep + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
                />
              </div>
              <div className="text-[10px] text-muted-foreground text-right">Question {quizStep + 1}/{QUIZ_QUESTIONS.length}</div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm font-medium">
                {QUIZ_QUESTIONS[quizStep].q}
              </div>

              <div className="space-y-2">
                {QUIZ_QUESTIONS[quizStep].opts.map((opt, i) => {
                  const isSelected = selected === i;
                  const isCorrect = i === QUIZ_QUESTIONS[quizStep].answer;
                  const showFeedback = selected !== null;

                  return (
                    <button
                      key={i}
                      disabled={selected !== null}
                      onClick={() => answer(i)}
                      className={`w-full rounded-xl border p-3 text-left text-xs transition ${
                        showFeedback && isCorrect
                          ? "border-neon-green/40 bg-neon-green/10 text-neon-green"
                          : showFeedback && isSelected && !isCorrect
                          ? "border-destructive/40 bg-destructive/10 text-destructive"
                          : "border-white/10 bg-white/5 hover:border-primary/30 hover:bg-primary/10"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-[10px]">{String.fromCharCode(65 + i)}.</span>
                        {opt}
                        {showFeedback && isCorrect && <Check className="ml-auto h-3.5 w-3.5 text-neon-green" />}
                        {showFeedback && isSelected && !isCorrect && <X className="ml-auto h-3.5 w-3.5 text-destructive" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </DashboardShell>
  );
}
