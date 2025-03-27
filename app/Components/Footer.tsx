"use client";
import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp, FaEnvelope, FaGithub, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6 font-sans">
        <hr />
        <br />
        <br />
      {/* Footer Grid Layout */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        
        {/* Social Media Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <hr className="border-gray-600 mb-4" />
          <ul className="space-y-3">
            <li className="flex items-center justify-center md:justify-start gap-2">
              <FaFacebook className="text-blue-500" /> 
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Facebook</a>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <FaInstagram className="text-pink-500" /> 
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Instagram</a>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <FaWhatsapp className="text-green-500" /> 
              <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">WhatsApp</a>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <FaEnvelope className="text-red-500" /> 
              <a href="mailto:example@gmail.com" className="hover:text-gray-400">Gmail</a>
            </li>
          </ul>
        </div>

        {/* Freelance Links Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Freelance Platforms</h3>
          <hr className="border-gray-600 mb-4" />
          <ul className="space-y-3">
            <li className="flex items-center justify-center md:justify-start gap-2">
              <FaGithub className="text-gray-400" /> 
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">GitHub</a>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <FaGithub className="text-green-400" /> 
              <a href="https://fiverr.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Fiverr</a>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <FaGithub className="text-green-500" /> 
              <a href="https://upwork.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Upwork</a>
            </li>
          </ul>
        </div>

        {/* About Us Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <hr className="border-gray-600 mb-4" />
          <p className="flex items-center justify-center md:justify-start gap-2">
            <FaPhone /> +123 456 7890
          </p>
          <p className="flex items-center justify-center md:justify-start gap-2 mt-2">
            <FaEnvelope /> support@ecommerce.com
          </p>
          <p className="flex items-center justify-center md:justify-start gap-2 mt-2">
            <FaMapMarkerAlt /> 123 E-Commerce St, Web City
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-10 border-t border-gray-700 pt-6">
        <p>&copy; 2025 E-commerce Website. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
