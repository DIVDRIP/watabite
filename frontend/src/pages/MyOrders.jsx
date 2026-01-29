// MyOrders.jsx
import { useState } from "react";
import { ordersData } from "../data/ordersData";
import OrderCard from "../components/my-orders/OrderCard";
import PastOrderRow from "../components/my-orders/PastOrderRow";
import TrackOrderPanel from "../components/my-orders/TrackOrderPanel";
import { restaurantsDetails } from "../assets/assets";
import { cn } from "../utils/cn";

export default function MyOrders() {
  const [tab, setTab] = useState("active"); // active | past
  const [trackOpen, setTrackOpen] = useState(false);
  const [trackedOrder, setTrackedOrder] = useState(null);

  const openTrack = (order) => {
    setTrackedOrder(order);
    setTrackOpen(true);
  };

  const closeTrack = () => {
    setTrackOpen(false);
    setTrackedOrder(null);
  };
  

  return (
    <div className="min-h-screen bg-[#070b08] text-white">

      {/* page */}
      <div className="mx-auto w-full max-w-7xl px-4 py-20">
        {/* header */}
        <div className="mb-6 py-5">
          <h1 className="text-3xl font-semibold tracking-tight">My Orders</h1>
          <p className="mt-2 text-sm text-white/60">Track and manage your food orders</p>
        </div>

        {/* tabs */}
        <div className="mb-8 flex items-center gap-3">
          <button
            onClick={() => setTab("active")}
            className={cn(
              "rounded-xl px-5 py-2.5 cursor-pointer text-sm font-semibold transition",
              tab === "active"
                ? "bg-gradient-to-b from-emerald-500/90 to-emerald-600/90 text-[#06110b] shadow-[0_10px_25px_rgba(16,185,129,0.25)]"
                : "border border-white/10 bg-white/5 text-white/65 hover:bg-white/10"
            )}
          >
            Active Orders
          </button>
          <button
            onClick={() => setTab("past")}
            className={cn(
              "rounded-xl px-5 py-2.5 cursor-pointer text-sm font-semibold transition",
              tab === "past"
                ? "bg-gradient-to-b from-emerald-500/90 to-emerald-600/90 text-[#06110b] shadow-[0_10px_25px_rgba(16,185,129,0.25)]"
                : "border border-white/10 bg-white/5 text-white/65 hover:bg-white/10"
            )}
          >
            Past Orders
          </button>
        </div>

        {/* content */}
        {tab === "active" ? (
          <div className="grid grid-cols-1 gap-6">
            {ordersData.active.map((o) => (
              <OrderCard key={o.id} order={o} onTrack={openTrack} />
            ))}
          </div>
        ) : (
          <div className="space-y-5">
            {ordersData.past.map((p, idx) => (
              <PastOrderRow key={idx} row={p} />
            ))}
          </div>
        )}
      </div>

      <TrackOrderPanel open={trackOpen} onClose={closeTrack} order={trackedOrder} />
    </div>
  );
}
