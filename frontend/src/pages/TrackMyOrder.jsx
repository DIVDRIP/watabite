import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";


const cn = (...c) => c.filter(Boolean).join(" ");

const STEPS = ["Order Confirmed", "Preparing", "On the Way", "Delivered"];

export default function TrackOrder() {

  const { id } = useParams();

  // demo data (replace with API data)
  const orders = [
      {
      restaurant: "Pyramid",
    orderId: "WTB2493",
    eta: "15–20 mins",
    total: 349,
    stepIndex: 2, // 0..3
    driver: { name: "Vinay Mishra", phone: "+91 50748 99889" },
    items: [
      { name: "Paneer Pasta", qty: 1, price: 249 },
      { name: "Garlic Bread", qty: 1, price: 100 },
    ],
    },
    {

  restaurant: "Gautom’s Dine",
    orderId: "WTB2482",
    eta: "Delivered",
    total: 565,
    stepIndex: 3, // 0..3
    driver: { name: "hu Mishra", phone: "+91 50748 99889" },
    items: [
      { name: "Paneer Pasta", qty: 1, price: 249 },
      { name: "Garlic Bread", qty: 1, price: 100 },
    ],
  },
];

  const navigate = useNavigate();
  const order = orders.find(o => o.orderId === id);

  const isDelivered = order.stepIndex === 3;
const currentStatus = STEPS[order.stepIndex];


  if (!order) {
    return (
      <div className="min-h-screen bg-[#070b08] text-white grid place-items-center px-4">
        <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="text-xl font-semibold">Order not found</div>
          <div className="mt-2 text-white/60">No order exists for ID: {id}</div>

          <button
            onClick={() => navigate("/my-orders")}
            className="mt-5 w-full rounded-xl bg-gradient-to-b from-emerald-500 to-emerald-600 px-5 py-2.5 text-sm font-semibold text-[#06110b] hover:brightness-110"
          >
            ← Back to My Orders
          </button>
        </div>
      </div>
    );
  }



  return (
    <div className="min-h-screen bg-[#070b08] text-white">
      <div className="mx-auto w-full max-w-7xl px-4 py-20">
        {/* Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between py-5">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight">
              Track Order
            </h1>
            <div className="mt-2 text-white/70">
              Your order from{" "}
              <span className="font-semibold text-white">
                {order.restaurant}
              </span>{" "}
              is on its way!
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-white/60">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
                🧾 Order ID:{" "}
                <span className="text-white/85">#{order.orderId}</span>
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1">
              {isDelivered ? (
                <>Delivered</>
              ) : (
                <>
                ⏱ Arriving in:{" "}
                <span className="font-semibold text-white">{order.eta}</span>
                </>
              )}
              </span>
            </div>
          </div>

          <button onClick={() => navigate("/my-orders")} className="rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white/70 hover:bg-white/10">
            ← Back to My Orders
          </button>
        </div>

        {/* Main Grid */}
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Left: Map + Status */}
          <div className="lg:col-span-2">
            <GlassCard className="p-6">
              {/* ETA pill */}
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div className="text-lg font-semibold text-white">
                  Live Tracking
                </div>
                <div className="rounded-xl border border-emerald-500/25 bg-emerald-500/10 px-4 py-2 text-sm text-white/80">
                  {isDelivered ? (
                <>Delivered</>
              ) : (
                <>
                ⏱ Arriving in:{" "}
                <span className="font-semibold text-white">{order.eta}</span>
                </>
              )}
                </div>
              </div>

              {/* Progress */}
              <ProgressBar stepIndex={order.stepIndex} />

              {/* Map Placeholder */}
              <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
                <div className="relative aspect-[16/9] w-full">
                  {/* fake map */}
                  <div className="absolute inset-0 opacity-75">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(16,185,129,0.25),transparent_55%)]" />
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:30px_30px]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(163,230,53,0.12),transparent_55%)]" />
                  </div>

                  {/* route line */}
                  <div className="absolute left-10 top-16 h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.45)]" />
                  <div className="absolute right-16 bottom-14 h-4 w-4 rounded-full bg-lime-300 shadow-[0_0_22px_rgba(163,230,53,0.45)]" />
                  <div className="absolute left-12 top-[74px] right-20 bottom-20 border-b-2 border-l-2 border-emerald-400/60" />

                  {/* rider */}
                  <div className="absolute right-16 top-20 grid h-20 w-20 place-items-center rounded-2xl border border-white/10 bg-white/5 text-4xl">
                    🛵
                  </div>

                  {/* subtle vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-black/40" />
                </div>
              </div>
            </GlassCard>

            {/* Driver + Actions */}
            <GlassCard className="mt-6 p-6">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-white/5 text-xl">
                    👤
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-white">
                      {order.driver.name}
                    </div>
                    <div className="text-sm text-white/60">
                      📞 {order.driver.phone}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <button className="rounded-xl bg-gradient-to-b from-emerald-500 to-emerald-600 px-5 py-2.5 text-sm font-semibold text-[#06110b] shadow-[0_10px_30px_rgba(16,185,129,0.22)] hover:brightness-110">
                    Contact Driver
                  </button>
                  <button className="rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white/70 hover:bg-white/10">
                    Help
                  </button>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Right: Order Details */}
          <div className="lg:col-span-1">
            <GlassCard className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-lg font-semibold">Order Details</div>
                  <div className="mt-1 text-sm text-white/60">
                    #{order.orderId} • {order.restaurant}
                  </div>
                </div>

                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  {STEPS[order.stepIndex]}
                </span>
              </div>

              <div className="mt-5 space-y-3">
                {order.items.map((it) => (
                  <div
                    key={it.name}
                    className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3"
                  >
                    <div className="min-w-0">
                      <div className="truncate text-sm font-semibold text-white">
                        {it.name}
                      </div>
                      <div className="text-xs text-white/60">Qty: {it.qty}</div>
                    </div>
                    <div className="text-sm font-semibold text-white">
                      ₹ {it.price}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 border-t border-white/10 pt-4">
                <div className="flex items-center justify-between text-sm text-white/70">
                  <span>Subtotal</span>
                  <span>₹ {order.total}</span>
                </div>
                <div className="mt-2 flex items-center justify-between text-sm text-white/70">
                  <span>Delivery</span>
                  <span className="text-emerald-200">FREE</span>
                </div>
                <div className="mt-3 flex items-center justify-between text-base font-semibold">
                  <span>Total</span>
                  <span>₹ {order.total}</span>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <button className="w-full rounded-xl bg-gradient-to-b from-emerald-500 to-emerald-600 px-5 py-2.5 text-sm font-semibold text-[#06110b] hover:brightness-110">
                  Track Live
                </button>
                <button className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white/70 hover:bg-white/10">
                  Download Invoice
                </button>
                <button className="w-full rounded-xl border border-rose-500/25 bg-rose-500/10 px-5 py-2.5 text-sm font-semibold text-rose-200 hover:bg-rose-500/15">
                  Cancel Order
                </button>
              </div>

              <div className="mt-5 text-center text-xs text-white/50">
                Need help? Go to <span className="text-white/70">Help</span> or
                call support.
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  );
}



function GlassCard({ className, children }) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.45)]",
        className,
      )}
    >
      {children}
    </div>
  );
}

function ProgressBar({ stepIndex = 0 }) {
  const pct = useMemo(() => {
    const clamped = Math.max(0, Math.min(3, stepIndex));
    return (clamped / 3) * 100;
  }, [stepIndex]);

  return (
    <div className="mt-5">
      <div className="relative h-1.5 w-full rounded-full bg-white/10">
        <div
          className="absolute left-0 top-0 h-1.5 rounded-full bg-gradient-to-r from-emerald-500 to-lime-400"
          style={{ width: `${pct}%` }}
        />
        <div className="absolute inset-0 flex items-center justify-between px-0.5">
          {STEPS.map((_, i) => (
            <div
              key={i}
              className={cn(
                "h-2.5 w-2.5 rounded-full border",
                i <= stepIndex
                  ? "bg-emerald-400 border-emerald-300/40 shadow-[0_0_18px_rgba(16,185,129,0.35)]"
                  : "bg-[#070b08] border-white/15",
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
