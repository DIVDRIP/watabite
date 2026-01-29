import GlassCard from "./GlassCard";
import StatusPill from "./StatusPill";
import { cn } from "../../utils/cn";


export default function PastOrderRow({ row }) {
  const isCancelled = row.status === "Cancelled";
  return (
    <GlassCard className="p-5">
      <div className="flex items-center gap-4">
        <div className="grid h-12 w-12 overflow-hidden place-items-center rounded-full border border-white/10 bg-white/5 text-xl">
        <img src={row.image} className="h-full w-full object-cover" alt="" />
        </div>

        <div className="min-w-0 flex-1">
          <div className="truncate text-lg font-semibold text-white">{row.restaurant}</div>
          <div className="text-xs text-white/55">{row.date}</div>
          <div className="mt-2">
            <StatusPill status={row.status} />
          </div>
        </div>

        <div className="text-right">
          <div className="text-lg font-semibold text-white">₹ {row.total}</div>
          <div className="mt-2 flex items-center justify-end gap-2">
            <button className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-5 py-2 text-sm font-semibold text-emerald-200 hover:bg-emerald-500/15">
              View
            </button>
            <button
              className={cn(
                "rounded-xl border px-5 py-2 text-sm font-semibold hover:bg-white/10",
                isCancelled
                  ? "border-white/10 bg-white/5 text-white/60"
                  : "border-white/10 bg-white/5 text-white/70"
              )}
            >
              Reorder
            </button>
          </div>
        </div>
      </div>
    </GlassCard>
  );
}
