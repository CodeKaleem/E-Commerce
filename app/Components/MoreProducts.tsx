
'use client'
import React from "react";
import { motion } from "framer-motion";
import { i } from "framer-motion/client";
import { useRouter } from "next/navigation";

const MoreProduct = () => {
    const route = useRouter();
    const products = [
        { id: 1, name: "M416", price: "$1000", description: "M416 Assult Riffle" , image: "https://media.istockphoto.com/id/1370127440/photo/m416-gun-automatic-weapon-isolated-black-military-army.jpg?b=1&s=612x612&w=0&k=20&c=gqXPOH08K1jON2pLvFnC7FMP3vdX3NDQl0ui8G_48dY="},
        { id: 2, name: "AK47", price: "$1500", description: "AK47 RIFLE", image: "https://c4.wallpaperflare.com/wallpaper/417/345/186/weapons-machine-kalashnikov-chinese-ak-47-wallpaper-preview.jpg" },
        { id: 3, name: "M249", price: "$2000", description: "M249 MACHINE GUN", image: "https://c4.wallpaperflare.com/wallpaper/321/947/737/gun-m249-machine-military-wallpaper-preview.jpg" },
        { id: 4, name: "AWM", price: "$22000", description: "AWM Sniper" , image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/AWM-338-white.jpg"},
        { id: 5, name: "M24", price: "$15000", description: "M24 Sniper", image: "https://c4.wallpaperflare.com/wallpaper/656/851/580/gun-sniper-rifle-rifles-scopes-wallpaper-preview.jpg" },
        { id: 6, name: "M82a1", price: "$12000", description: "Sniper Rifle", image: "https://w0.peakpx.com/wallpaper/460/98/HD-wallpaper-barrett-82a1-sniper-rifle-cartridges-sight-rifle-barrett.jpg" },
    
    ];

    return (
        <div className="home-page bg-black text-white min-h-screen font-sans">
            <section className="hero-section">

                <div className="hero-text">
                    <br />
                    <h1 className="text-4xl font-bold text-center p-6 ">
                        Welcome to Our Store
                    </h1>
                    <p className="text-center text-lg mt-2 font-semibold">
                        Discover the best products at unbeatable prices.
                    </p>
                </div>
            </section>

            {/* Product Section */}
            <section className="product-section mt-10 px-4">
                <h2 className="text-3xl font-semibold text-center mb-6">
                    Featured Products
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            className="product-card border border-gray-700 rounded-lg p-4 shadow-lg bg-gray-900"
                            initial={{ opacity: 0, y: 50 }}
                            whileHover={{ scale: 1.05 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-48 object-cover rounded-md"
                            />
                            <h3 className="text-xl font-bold mt-4">{product.name}</h3>
                            <p className="text-gray-400 mt-2">{product.description}</p>
                            <p className="text-lg font-semibold mt-2">{product.price}</p>
                            <button className="mt-4 bg-white text-black py-2 px-4 rounded hover:bg-gray-300">
                                Add to Cart
                            </button>
                        </motion.div>
                    ))}
                </div>
                <motion.button className="w-30 h-15 bg-gray-100 text-black font-semibold font-sans rounded-xl mx-auto mt-10 mb-0 block"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {route.push("/pages/Contact")}}
                
                >Contact us</motion.button>
                
                
            </section>
            
        </div>
    );
};

export default MoreProduct;