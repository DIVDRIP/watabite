import { useMemo } from "react";
import { STEPS } from "../../data/ordersData";
import { cn } from "../../utils/cn";


export default function ProgressBar({ stepIndex = 0 }) {
  const pct = useMemo(() => {
    const clamped = Math.max(0, Math.min(3, stepIndex));
    return (clamped / 3) * 100;
  }, [stepIndex]);

  return (
    <div className="mt-3">
      <div className="relative h-1.5 w-full rounded-full bg-white/10">
        <div
          className="absolute left-0 top-0 h-1.5 rounded-full bg-gradient-to-r from-emerald-500 to-lime-400"
          style={{ width: `${pct}%` }}
        />
        {/* dots */}
        <div className="absolute inset-0 flex items-center justify-between px-0.5">
          {STEPS.map((_, i) => (
            <div
              key={i}
              className={cn(
                "h-2.5 w-2.5 rounded-full border",
                i <= stepIndex
                  ? "bg-emerald-400 border-emerald-300/40 shadow-[0_0_18px_rgba(16,185,129,0.35)]"
                  : "bg-[#0b0f0c] border-white/15"
              )}
            />
          ))}
        </div>
      </div>

      <div className="mt-2 flex items-center justify-between text-[11px] text-white/55">
        {STEPS.map((s, i) => (
          <span key={s} className={cn(i === stepIndex && "text-white/80")}>
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}
