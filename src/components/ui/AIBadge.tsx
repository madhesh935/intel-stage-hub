import { ShieldCheck, Clock, X } from "lucide-react";
import { motion } from "framer-motion";

type BadgeState = "verified" | "pending" | "failed";

interface Props {
  label: string;
  state?: BadgeState;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const CONFIG = {
  verified: {
    Icon: ShieldCheck,
    gradient: "linear-gradient(135deg, #8B5CF6, #6D28D9)",
    border: "rgba(139,92,246,0.5)",
    bg: "rgba(139,92,246,0.12)",
    text: "#c4b5fd",
    glow: "0 0 16px rgba(139,92,246,0.35)",
  },
  pending: {
    Icon: Clock,
    gradient: "none",
    border: "rgba(250,204,21,0.4)",
    bg: "rgba(250,204,21,0.08)",
    text: "#fbbf24",
    glow: "none",
  },
  failed: {
    Icon: X,
    gradient: "none",
    border: "rgba(239,68,68,0.4)",
    bg: "rgba(239,68,68,0.08)",
    text: "#f87171",
    glow: "none",
  },
};

const SIZE = {
  sm: { px: "px-2 py-0.5", text: "text-[10px]", icon: 10 },
  md: { px: "px-3 py-1", text: "text-xs", icon: 12 },
  lg: { px: "px-4 py-1.5", text: "text-sm", icon: 14 },
};

export function AIBadge({ label, state = "verified", size = "md", className = "" }: Props) {
  const cfg = CONFIG[state];
  const sz = SIZE[size];
  const { Icon } = cfg;

  return (
    <motion.div
      initial={{ scale: 0.85, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`relative inline-flex items-center gap-1.5 rounded-full font-semibold tracking-wide uppercase ${sz.px} ${sz.text} ${className}`}
      style={{
        background: cfg.bg,
        border: `1px solid ${cfg.border}`,
        color: cfg.text,
        boxShadow: cfg.glow,
        fontFamily: "var(--font-display)",
      }}
    >
      {state === "verified" && (
        <span
          className="absolute inset-0 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-500"
          style={{
            background: "linear-gradient(135deg, rgba(139,92,246,0.15), rgba(109,40,217,0.15))",
          }}
        />
      )}
      <Icon size={sz.icon} />
      {label}
      {state === "verified" && (
        <motion.span
          className="absolute inset-0 rounded-full"
          animate={{ opacity: [0, 0.5, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 2 }}
          style={{ background: "linear-gradient(135deg, rgba(139,92,246,0.3), rgba(109,40,217,0.3))" }}
        />
      )}
    </motion.div>
  );
}
