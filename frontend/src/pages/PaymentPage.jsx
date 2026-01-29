import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const PaymentPage = () => {
  const { cartItems, totalAmount } = useContext(AppContext);
  const [paymentMethod, setPaymentMethod] = useState("razorpay");
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [street, setStreet] = useState('');
  const [pincode, setPincode] = useState('');
  const [address, setAddress] = useState('');

  const paymentHandler = () =>{
    alert("Payment is Done");
  }

  return (
    <div className="min-h-screen bg-black px-6 md:px-20 py-28 text-white">
      <h1 className="text-2xl md:text-3xl font-semibold mb-10">
        Checkout & Payment
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* LEFT – USER DETAILS */}
        <div className="lg:col-span-2 rounded-2xl border border-white/20 bg-white/6 backdrop-blur-xl p-6">
          <h2 className="text-xl font-semibold mb-6">
            Personal Details
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input
              type="text"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              placeholder="Full Name"
              required
              className="bg-black/40 border border-white/20 rounded-xl p-3 outline-none"
            />
            <input
              type="email"
               value={email}
               onChange={(e)=>setEmail(e.target.value)}
               placeholder="Email Address"
               required
              className="bg-black/40 border border-white/20 rounded-xl p-3 outline-none"
            />
            <input
              type="text"
               value={phone}
               onChange={(e)=>setPhone(e.target.value)}
               placeholder="Phone Number"
               required
              className="bg-black/40 border border-white/20 rounded-xl p-3 outline-none"
            />
            <input
              type="text"
               value={city}
               onChange={(e)=>setCity(e.target.value)}
               placeholder="City"
               required
              className="bg-black/40 border border-white/20 rounded-xl p-3 outline-none"
            />
            <input
              type="text"
               value={street}
               onChange={(e)=>setStreet(e.target.value)}
               placeholder="Street"
               required
              className="bg-black/40 border border-white/20 rounded-xl p-3 outline-none"
            />
            <input
              type="text"
               value={state}
               onChange={(e)=>setState(e.target.value)}
               placeholder="State"
               required
              className="bg-black/40 border border-white/20 rounded-xl p-3 outline-none"
            />
            <input
              type="text"
               value={pincode}
              onChange={(e)=>setPincode(e.target.value)}
              placeholder="Pincode"
              required
              className="bg-black/40 border border-white/20 rounded-xl p-3 outline-none"
            />
          </div>

          <textarea
            placeholder="Full Address"
             value={address}
              onChange={(e)=>setAddress(e.target.value)}
            rows="4"
            required
            className="w-full mt-5 bg-black/40 border border-white/20 rounded-xl p-3 outline-none"
          ></textarea>
        </div>

        {/* RIGHT – CART SUMMARY */}
        <div className="h-fit rounded-2xl border border-white/20 bg-white/6 backdrop-blur-xl p-6">
          <h2 className="text-xl font-semibold mb-6">
            Order Summary
          </h2>

          <div className="flex flex-col gap-4">
            {cartItems.map(item => (
              <div key={item.id} className="flex justify-between text-sm">
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-gray-400">
                    ₹{item.price} × {item.qty}
                  </p>
                </div>
                <p className="text-green-500 font-semibold">
                  ₹{item.price * item.qty}
                </p>
              </div>
            ))}
          </div>

          <div className="h-px bg-white/20 my-5"></div>

          <div className="flex justify-between text-gray-400 mb-2">
            <span>Subtotal</span>
            <span>₹{totalAmount}</span>
          </div>

          <div className="flex justify-between text-gray-400 mb-2">
            <span>Delivery</span>
            <span>₹40</span>
          </div>

          <div className="flex justify-between text-lg font-semibold mt-4">
            <span>Total</span>
            <span className="text-green-500">
              ₹{totalAmount + 40}
            </span>
          </div>

          {/* PAYMENT OPTIONS */}
          <div>
            <h2 className="text-xl font-semibold mt-6 mb-4">
              Payment Method
            </h2>

            <div className="flex items-center sm:flex-row lg:flex-row justify-center md:flex-col gap-3 md:items-center">

              <label className={`flex items-center justify-between gap-4 p-4 rounded-xl border cursor-pointer transition ${paymentMethod === 'razorpay' ? 'border-green-500 bg-green-500/10' : "border-white/20 hover:bg-white/10"}`}>
                <input
                  type="radio"
                  checked={paymentMethod === "razorpay"}
                  onChange={() => setPaymentMethod("razorpay")}
                />
                Razorpay
              </label>


              <label className={`flex items-center justify-between gap-4 p-4 rounded-xl border cursor-pointer transition ${paymentMethod === 'stripe' ? 'border-green-500 bg-green-500/10' : "border-white/20 hover:bg-white/10"}`}>
                <input
                  type="radio"
                  checked={paymentMethod === "stripe"}
                  onChange={() => setPaymentMethod("stripe")}
                />
                Stripe
              </label>

              <label className={`flex items-center justify-between gap-3 p-4 rounded-xl border cursor-pointer transition ${paymentMethod === 'cod' ? 'border-green-500 bg-green-500/10' : "border-white/20 hover:bg-white/10"}`}>
                <input
                  type="radio"
                  checked={paymentMethod === "cod"}
                  onChange={() => setPaymentMethod("cod")}
                />
                COD
              </label>
            </div>
          </div>

          <button onClick={paymentHandler} className="w-full mt-6 py-3 rounded-xl bg-green-600 hover:bg-green-700 transition font-semibold">
            Place Order
          </button>
        </div>

      </div>
    </div>
  );
};

export default PaymentPage;



