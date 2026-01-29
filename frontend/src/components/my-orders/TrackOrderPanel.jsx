import GlassCard from "./GlassCard";
import { Navigate, useNavigate } from "react-router-dom";

export default function TrackOrderPanel({ open, onClose, order }) {
  if (!open || !order) return null;

  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 z-[60]">
      {/* backdrop */}
      <button
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        aria-label="Close"
      />

      {/* panel */}
      <div className="absolute right-6 top-6 w-[380px] max-w-[92vw]">
        <GlassCard className="overflow-hidden">
          <div className="p-5">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-xl font-semibold text-white">Track Order</div>
                <div className="mt-1 text-sm text-white/60">
                  Arriving in: <span className="font-semibold text-white">{order.eta}</span>
                </div>
              </div>
              <div className="mt-1 h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(16,185,129,0.5)]" />
            </div>
          </div>

          {/* map placeholder */}
          <div className="px-5">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02]">
              <div className="aspect-[4/3] w-full">
                {/* fake “map” grid */}
                <div className="absolute inset-0 opacity-70">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(16,185,129,0.25),transparent_55%)]" />
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:28px_28px]" />
                </div>

                {/* route */}
                <div className="absolute left-8 top-10 h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(16,185,129,0.45)]" />
                <div className="absolute right-16 bottom-16 h-4 w-4 rounded-full bg-lime-300 shadow-[0_0_22px_rgba(163,230,53,0.45)]" />
                <div className="absolute left-10 top-12 right-20 bottom-20 border-b-2 border-l-2 border-emerald-400/60" />

                {/* rider */}
                <div className="absolute right-10 top-14 grid h-16 w-16 place-items-center rounded-2xl border border-white/10 bg-white/5 text-3xl">
                  🛵
                </div>
              </div>
            </div>
          </div>

          <div className="p-5">
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-white/5 text-xl">
                👤
              </div>
              <div className="min-w-0 flex-1">
                <div className="truncate text-base font-semibold text-white">{order.driver.name}</div>
                <div className="text-xs text-white/55">📞 {order.driver.phone}</div>
              </div>
            </div>

            <div className="mt-4">
              <button onClick={() => navigate(`/track-my-order/${order.id}`)} className="w-full rounded-xl bg-gradient-to-b from-emerald-500 to-emerald-600 px-5 py-2.5 text-sm font-semibold text-[#06110b] hover:brightness-110">
                Track Order
              </button>
              <button className="mt-3 w-full rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white/70 hover:bg-white/10">
                Help
              </button>
              <button
                onClick={onClose}
                className="mt-3 w-full rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white/60 hover:bg-white/10"
              >
                Close
              </button>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
