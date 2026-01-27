import { ShoppingBag, X } from 'lucide-react';
import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';

const CartItems = () => {
    const { cartItems, totalAmount, removeFromCart } = useContext(AppContext);

    return (
        <div className="min-h-screen bg-black px-6 md:px-20 py-28 text-white">

            {/* HEADER */}
            <div className="flex items-center gap-3 mb-10">
                <ShoppingBag className="text-green-500" size={28} />
                <h1 className="text-2xl md:text-3xl font-semibold">
                    Your Cart
                </h1>
            </div>

            {cartItems.length === 0 ? (
                <p className="text-gray-400">Your cart is empty</p>
            ) : (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

                    {/* CART ITEMS */}
                    <div className="lg:col-span-2 flex flex-col gap-6">
                        {cartItems.map((item) => (
                            <div
                                key={item.id}
                                className="flex gap-5 items-center rounded-2xl border border-white/20 bg-white/6 backdrop-blur-xl p-5"
                            >
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="h-24 w-24 rounded-xl object-cover"
                                />

                                <div className="flex-1">
                                    <h3 className="font-semibold text-lg">
                                        {item.name}
                                    </h3>
                                    <p className="text-gray-400 text-sm mt-1">
                                        ₹{item.price} * {item.qty}
                                    </p>
                                    {/* REMOVE ICON */}
                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="ml-4 p-1.5 rounded-full hover:bg-red-500/20 transition"
                                        title="Remove item"
                                    >
                                        <X size={18} className="text-red-500" />
                                    </button>

                                </div>

                                <p className="text-green-500 font-bold text-lg">
                                    ₹{item.price * item.qty}
                                </p>
                            </div>
                        ))}
                    </div>


                    {/* Cart Total */}
                    {/* SUMMARY */}
                    <div className="h-fit rounded-2xl border border-white/20 bg-white/6 backdrop-blur-xl p-6">
                        <h2 className="text-xl font-semibold mb-6">
                            Order Summary
                        </h2>

                        <div className="flex justify-between text-gray-400 mb-3">
                            <span>Subtotal</span>
                            <span>₹{totalAmount}</span>
                        </div>

                        <div className="flex justify-between text-gray-400 mb-3">
                            <span>Delivery</span>
                            <span>₹40</span>
                        </div>

                        <div className="h-px bg-white/20 my-4"></div>

                        <div className="flex justify-between text-lg font-semibold">
                            <span>Total</span>
                            <span className="text-green-500">
                                ₹{totalAmount + 40}
                            </span>
                        </div>

                        <button className="w-full mt-6 py-3 rounded-xl bg-green-600 hover:bg-green-700 transition font-semibold">
                            Proceed to Checkout
                        </button>
                    </div>

                </div>
            )}
        </div>
    )
}

export default CartItems
