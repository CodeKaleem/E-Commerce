'use client';
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { FaBars, FaTimes, FaShoppingCart } from "react-icons/fa"; // Added cart icon
import AddToCart from "./AddtoCart";

const NavBar = () => {
    const route = useRouter();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <motion.nav
            className="w-full bg-black text-white flex items-center justify-between px-6 md:px-12 py-4 shadow-lg relative font-sans"
            initial={{ y: 0, opacity: 1 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0 }}
        >
            {/* Logo */}
            <div className="flex items-center space-x-3 cursor-pointer">
                <img 
                    src="https://images.pexels.com/photos/889709/pexels-photo-889709.jpeg" 
                    alt="logo" 
                    className="w-12 h-12 rounded-full object-cover cursor-pointer" 
                    onClick={() => route.push("/pages/Home")}
                />
                <span className="text-2xl font-semibold">
                    <u><i><a href="/pages/Home">GunVault</a></i></u>
                </span>
            </div>

            {/* Mobile Menu Button */}
            <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className="md:hidden text-white focus:outline-none z-50"
            >
                {isMenuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
            </button>

            {/* Navigation Links */}
            <div className={`absolute md:static top-0 right-0 w-2/3 md:w-auto h-screen md:h-auto bg-black md:bg-transparent flex flex-col md:flex-row items-center justify-center gap-6 transform transition-all duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"} z-40 md:z-auto`}>
                {["Home", "Products", "Help", "Contact"].map((item, index) => (
                    <motion.button
                        key={index}
                        onClick={() => { 
                            setIsMenuOpen(false); 
                            route.push("/pages/" + item);
                        }}
                        className="px-6 py-3 bg-white text-black rounded-full font-semibold transition-all duration-300 hover:bg-gray-800 hover:text-white md:w-auto"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        {item}
                    </motion.button>
                ))}

                {/* Add to Cart Button with Icon */}
                <motion.div 
                    className="ml-4 flex items-center space-x-2 cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => route.push("/pages/Cart")}
                >
                    <FaShoppingCart size={24} />
                    
                </motion.div>
            </div>
        </motion.nav>
    );
};

export default NavBar;
