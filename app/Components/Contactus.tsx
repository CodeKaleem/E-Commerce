"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaQuestionCircle } from "react-icons/fa";
import { useRouter } from "next/navigation";

const ContactPage: React.FC = () => {
  const route = useRouter();
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { sender: "You", text: input }]);
      setInput("");
    }
  };

  const handleClear = () => {
    setMessages([]);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-6 font-sans">

<section className="bg-gray-800 py-12 mb-12">
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

      {/* Contact Box */}
      <div className="w-full max-w-sm bg-gray-900 text-white shadow-xl rounded-lg overflow-hidden">
        {/* Header */}
        <div className="p-4 border-b border-gray-700 flex items-center justify-center bg-gray-800 text-lg font-semibold">
          
          Contact Us
        </div>

        {/* Messages Section */}
        <div className="p-4 h-64 overflow-y-auto bg-gray-700 custom-scrollbar">
          {messages.length === 0 ? (
            <p className="text-center text-gray-400">No messages yet.</p>
          ) : (
            messages.map((message, index) => (
              <div
                key={index}
                className={`mb-2 flex ${
                  message.sender === "You" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`px-4 py-2 rounded-lg max-w-[75%] ${
                    message.sender === "You"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-300 text-black"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Input Section */}
        <div className="p-4 border-t border-gray-700 flex items-center bg-gray-800">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 px-4 py-2 bg-gray-900 text-white rounded-lg border border-gray-600 focus:outline-none"
          />
          <motion.button
            onClick={handleSend}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 flex items-center"
          >
            Send
          </motion.button>
        </div>
      </div>

      {/* Extra Buttons */}
      <div className="mt-4 flex space-x-4">
        <motion.button
          onClick={handleClear}
          whileHover={{ scale: 1.1 }}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 flex items-center"
        >
            Clear
        </motion.button>
      </div>

      {/* Footer Text */}
      <div className="mt-6 text-sm text-gray-400 text-center">
        <p>We typically respond within 24 hours.</p>
        <p>Feel free to ask us anything!</p>
      </div>
      
    </div>
  );
};

export default ContactPage;
