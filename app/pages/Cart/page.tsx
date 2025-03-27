'use client';
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaTrashAlt, FaShoppingCart } from "react-icons/fa";
import { useRouter } from "next/navigation";
import NavBar from "@/app/Components/NavBar";

const Cart = () => {
    const route = useRouter();
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "Assault Rifle",
            price: 1299.99,
            quantity: 1,
            image: "https://via.placeholder.com/100",
        },
        {
            id: 2,
            name: "Machine Gun",
            price: 2499.99,
            quantity: 1,
            image: "https://via.placeholder.com/100",
        }
    ]);

    // Function to update quantity
    const updateQuantity = (id: number, change: number) => {
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item
            )
        );
    };

    // Function to remove an item
    const removeItem = (id: number) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    };

    // Function to clear cart
    const clearCart = () => {
        setCartItems([]);
    };

    // Calculate totals
    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const tax = subtotal * 0.1;
    const total = subtotal + tax;

    return (
        <>
        <NavBar></NavBar>
        <div className="flex flex-col items-center justify-center p-6 w-full min-h-screen bg-gray-900 text-white">
                    
            <h1 className="text-3xl font-semibold mb-6">🛒 Your Cart</h1>

            {/* Cart Items */}
            <div className="w-full max-w-4xl bg-gray-800 rounded-lg p-6 shadow-lg">
                {cartItems.length > 0 ? (
                    cartItems.map((item) => (
                        <motion.div 
                            key={item.id} 
                            className="flex items-center justify-between border-b border-gray-700 py-4"
                            whileHover={{ scale: 1.02 }}
                        >
                            <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg" />
                            <div className="flex-1 ml-4">
                                <h2 className="text-lg font-semibold">{item.name}</h2>
                                <p className="text-gray-400">${item.price.toFixed(2)}</p>
                            </div>
                            <div className="flex items-center">
                                <button 
                                    className="px-3 py-1 bg-gray-700 text-white rounded-l hover:bg-gray-600" 
                                    onClick={() => updateQuantity(item.id, -1)}
                                >
                                    -
                                </button>
                                <span className="px-4 text-lg">{item.quantity}</span>
                                <button 
                                    className="px-3 py-1 bg-gray-700 text-white rounded-r hover:bg-gray-600" 
                                    onClick={() => updateQuantity(item.id, 1)}
                                >
                                    +
                                </button>
                            </div>
                            <button 
                                className="ml-4 text-red-500 hover:text-red-400 transition-all" 
                                onClick={() => removeItem(item.id)}
                            >
                                <FaTrashAlt size={18} />
                            </button>
                        </motion.div>
                    ))
                ) : (
                    <p className="text-gray-400 text-center py-4">Your cart is empty.</p>
                )}
            </div>

            {/* Order Summary */}
            {cartItems.length > 0 && (
                <motion.div 
                    className="w-full max-w-md bg-gray-800 rounded-lg p-6 shadow-lg mt-6"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                    <div className="flex justify-between text-gray-400">
                        <span>Subtotal:</span>
                        <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-gray-400">
                        <span>Tax (10%):</span>
                        <span>${tax.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-lg font-semibold border-t border-gray-700 mt-3 pt-3">
                        <span>Total:</span>
                        <span>${total.toFixed(2)}</span>
                    </div>
                    <button className="w-full mt-4 py-2 bg-green-600 hover:bg-green-500 rounded-lg transition-all">
                        Proceed to Checkout
                    </button>
                </motion.div>
            )}

            {/* Additional Actions */}
            <div className="flex gap-4 mt-6">
                <button 
                    className="px-6 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-all"
                    onClick={() => route.push("/pages/Products")}
                >
                    Continue Shopping
                </button>
                {cartItems.length > 0 && (
                    <button 
                        className="px-6 py-2 bg-red-600 hover:bg-red-500 rounded-lg transition-all"
                        onClick={clearCart}
                    >
                        Clear Cart
                    </button>
                )}
            </div>
        </div>
        </>
    );
};

export default Cart;