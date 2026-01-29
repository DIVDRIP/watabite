import { cn } from "../../utils/cn";

export default function StatusPill({ status }) {
  const map = {
      Delivered: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
      Cancelled: "bg-rose-500/15 text-rose-300 border-rose-500/30",
      Preparing: "bg-yellow-400/15 text-yellow-200 border-yellow-400/30",
      "On the Way": "bg-sky-500/15 text-sky-200 border-sky-500/30",
      Confirmed: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
    };
    return (
      <span
        className={cn(
          "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium",
          map[status] || "bg-white/5 text-white/70 border-white/10"
        )}
      >
        <span className={cn("h-1.5 w-1.5 rounded-full", status === "Cancelled" ? "bg-rose-400" : "bg-emerald-400")} />
        {status}
      </span>
    );
}
