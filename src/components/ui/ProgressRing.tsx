import { motion } from "framer-motion";

interface Props {
  value: number; // 0-100
  size?: number;
  strokeWidth?: number;
  color?: "primary" | "accent" | "pink" | "green";
  showLabel?: boolean;
  label?: string;
  className?: string;
}

const COLOR_MAP = {
  primary: ["#a855f7", "#6D28D9"],
  accent: ["#c084fc", "#a855f7"],
  pink: ["#d8b4fe", "#a855f7"],
  green: ["#10B981", "#059669"],
};

export function ProgressRing({
  value,
  size = 72,
  strokeWidth = 5,
  color = "primary",
  showLabel = true,
  label,
  className = "",
}: Props) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;
  const gradId = `ring-grad-${color}-${size}`;
  const [c1, c2] = COLOR_MAP[color];

  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="-rotate-90">
        <defs>
          <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={c1} />
            <stop offset="100%" stopColor={c2} />
          </linearGradient>
        </defs>
        {/* Track */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth={strokeWidth}
        />
        {/* Fill */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={`url(#${gradId})`}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.2, ease: [0.34, 1.56, 0.64, 1], delay: 0.2 }}
        />
      </svg>
      {showLabel && (
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-sm font-bold leading-none" style={{ color: c1 }}>
            {value}
            <span className="text-[9px] opacity-70">%</span>
          </span>
          {label && <span className="mt-0.5 text-[9px] text-muted-foreground">{label}</span>}
        </div>
      )}
    </div>
  );
}
