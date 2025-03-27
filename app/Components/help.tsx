"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaQuestionCircle } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { Share } from "next/font/google";

const HelpPage = () => {
  const route = useRouter();
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex items-center justify-center bg-cover bg-center" 
        style={{ backgroundImage: `url('https://images.pexels.com/photos/1094812/pexels-photo-1094812.jpeg')` }}>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}  
          transition={{ duration: 0.8 }}
          className="text-center relative z-10 px-6"
        >
          <h1 className="text-4xl font-bold text-white">Need Help? We Got You Covered!</h1>
          <p className="text-lg text-gray-300 mt-3">
            Find answers to your questions about guns, licensing, shipping, and more.
          </p>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-semibold text-center mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-4 bg-gray-800 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-semibold">🛒 Do you need a license to buy a firearm?</h3>
            <p className="text-gray-400 mt-2">
              Yes, you need a valid firearm license to purchase a gun. Check local regulations for details.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-4 bg-gray-800 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-semibold">🚚 What are the shipping policies?</h3>
            <p className="text-gray-400 mt-2">
              Firearms are shipped to licensed dealers only. Delivery time varies based on location.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-4 bg-gray-800 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-semibold">🔧 How do I maintain my firearm?</h3>
            <p className="text-gray-400 mt-2">
              Regular cleaning and proper storage are essential. We offer maintenance guides in our resources section.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Support Section */}
      <section className="bg-gray-800 py-12">
        <h2 className="text-3xl font-semibold text-center mb-6">Contact Our Support Team</h2>
        <div className="flex flex-col md:flex-row justify-center gap-6 px-6">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="flex items-center bg-blue-600 px-6 py-3 text-white rounded-lg shadow-lg"
          >
            <FaPhone className="mr-2" /> Call Support
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="flex items-center bg-green-600 px-6 py-3 text-white rounded-lg shadow-lg"
            onClick={()=>route.push("www.gmail.com")}
          >
            <FaEnvelope className="mr-2" /> Email Us
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="flex items-center bg-yellow-500 px-6 py-3 text-black rounded-lg shadow-lg"
            onClick={()=>route.push("/pages/Contact")}
          >
            <FaQuestionCircle className="mr-2" /> Live Chat
          </motion.button>
        </div>
      </section>

      {/* Guides & Resources */}
      <section className="py-12 px-6">
        <h2 className="text-3xl font-semibold text-center mb-6">Guides & Resources</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="#"
            className="w-72 bg-gray-800 p-4 rounded-lg shadow-lg text-center"
          >
            <h3 className="text-xl font-semibold">🔫 Firearm Safety Guide</h3>
            <p className="text-gray-400 mt-2">Learn how to safely handle and store your firearm.</p>
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            href="#"
            className="w-72 bg-gray-800 p-4 rounded-lg shadow-lg text-center"
          >
            <h3 className="text-xl font-semibold">📜 Gun Laws & Regulations</h3>
            <p className="text-gray-400 mt-2">Stay updated with the latest gun laws in your area.</p>
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            href="#"
            className="w-72 bg-gray-800 p-4 rounded-lg shadow-lg text-center"
          >
            <h3 className="text-xl font-semibold">🛠️ Maintenance Tips</h3>
            <p className="text-gray-400 mt-2">Proper maintenance ensures a longer lifespan for your firearm.</p>
          </motion.a>
        </div>
      </section>
    </div>
  );
};

export default HelpPage;
