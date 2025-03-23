'use client';

import React, { useState } from "react";
import { motion } from "framer-motion";
import AddToCart from "@/app/Components/AddtoCart";


const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <motion.nav
            className="w-full bg-black text-white flex items-center justify-between px-6 md:px-12 py-4"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black font-bold">
                    AL
                </div>
                <span className="text-xl font-semibold">CompanyName</span>
            </div>

            <div className="md:hidden z-20">
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="text-white focus:outline-none"
                >
                    <div className="space-y-1">
                        <div className="w-6 h-1 bg-white"></div>
                        <div className="w-6 h-1 bg-white"></div>
                        <div className="w-6 h-1 bg-white"></div>
                    </div>
                </button>
            </div>

            {/* Navigation Buttons */}
            <div
                className={`${
                    isMenuOpen ? "flex" : "hidden"
                } md:flex flex-col md:flex-row md:space-x-6 fixed md:static top-0 right-0 items-center justify-center h-screen md:h-auto w-1/2 md:w-auto gap-2 bg-black md:bg-transparent z-10 md:z-auto`}
            >
                {["Home", "Services", "Help", "Contact"].map((item, index) => (
                    <motion.button
                        key={index}
                        className="px-4 py-2 bg-white text-black rounded-full transition-all duration-300 md:w-auto"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0 }}
                    >
                        {item}
                    </motion.button>
                ))}
            </div>
        </motion.nav>
    );
};

export default NavBar;