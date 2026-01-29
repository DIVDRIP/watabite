import GlassCard from "./GlassCard";
import ProgressBar from "./ProgressBar";


export default function OrderCard({ order, onTrack }) {
  return (
    <GlassCard className="p-5">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-4">
          <div className="grid h-12 w-12 overflow-hidden place-items-center rounded-full border border-white/10 bg-white/5 text-xl">
            <img src={order.image} className="h-full w-full object-contain" alt="" />
          </div>
          <div>
            <div className="text-lg font-semibold text-white">{order.restaurant}</div>
            <div className="text-xs text-white/55">Order ID #{order.id}</div>
          </div>
        </div>

        <div className="text-right">
          <div className="text-sm text-white/55">#{order.id}</div>
          <div className="mt-1 text-lg font-semibold text-white">₹ {order.total}</div>
        </div>
      </div>

      <div className="mt-4 text-sm text-white/85">
        {order.items.map((x) => (
          <div key={x}>{x}</div>
        ))}
      </div>

      <ProgressBar stepIndex={order.stepIndex} />

      <div className="mt-4 flex items-center gap-3">
        <button
          onClick={() => onTrack(order)}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-emerald-500 to-emerald-600 px-5 py-2.5 text-sm font-semibold text-[#06110b] shadow-[0_10px_30px_rgba(16,185,129,0.25)] hover:brightness-110 active:brightness-95"
        >
          🚚 Track Order
        </button>

        <button className="rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white/70 hover:bg-white/10">
          Cancel Order
        </button>

        <button className="ml-auto rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white/70 hover:bg-white/10">
          Help
        </button>
      </div>
    </GlassCard>
  );
}
