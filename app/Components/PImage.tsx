'use client'
import AddToCart from "@/app/Components/AddtoCart";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";


export default function ImagePage() {
    const route = useRouter();
    return (
        <div className="relative h-screen w-screen ml-[-15px] font-sans">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center w-full"
                style={{
                    backgroundImage:
                        "url('https://images4.alphacoders.com/633/633440.jpg')",
                }}
            ></div>

            {/* Overlay Content */}
            <motion.div
                className="relative z-10 flex flex-col items-center justify-center h-full text-white hidden md:flex "
                initial={{ opacity: 0, y: 150 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                
                    Welcome to Our Store
                </h1>
                <p className="text-lg md:text-xl mb-6">
                    Discover amazing products at unbeatable prices.
                </p>
                <motion.button
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0 , y:0 ,x:-150}}
                    animate={{ opacity: 1, y: 0 ,x:0}}
                    transition={{ duration: 0.8 }}
                    onClick={() => {route.push("/pages/Products")}}
                >
                    
                    Shop Now
                
                </motion.button>
            </motion.div>

            {/* Dark Overlay */}
        </div>
    );
}