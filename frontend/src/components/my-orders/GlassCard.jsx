import { cn } from "../../utils/cn";

export default function GlassCard({ className, children }) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.45)]",
        className
      )}
    >
      {children}
    </div>
  );
}
