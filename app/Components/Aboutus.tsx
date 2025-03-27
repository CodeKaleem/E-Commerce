"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const AboutUs = () => {
  const route = useRouter();
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between min-h-screen px-6 lg:px-20 bg-black font-sans">
      {/* Left Side Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="lg:w-1/2 text-center lg:text-left space-y-6"
      >
        <h2 className="text-5xl font-bold text-gray-100 text-center uppercase">About Us</h2>
        <hr className="border-gray-100 w-24 mx-auto lg:mx-0" />
        <p className="text-lg text-gray-300 text-justify leading-relaxed">
          Welcome to <span className="font-semibold text-white">GunVault</span>—your trusted source for premium firearms, ammunition, and tactical gear. 
          We specialize in delivering top-quality products for security, sport shooting, and personal defense, ensuring both **safety and performance**.
        </p>
        <p className="text-lg text-gray-300 text-justify leading-relaxed">
          Our team consists of firearms experts and professionals committed to compliance, safety, and customer satisfaction. 
          Whether you are a seasoned shooter or a first-time buyer, we are here to provide expert guidance.
        </p>
        <div className="flex gap-4 justify-center lg:justify-start mt-10">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition"
            onClick={()=>route.push("/pages/Products")}
          >
            Explore Products
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-900 transition"
            onClick={()=>route.push("/pages/Contact")}
          >
            Contact Us
          </motion.button>
        </div>
      </motion.div>

      {/* Right Side Image */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileHover={{ scale: 1.05 }}
        className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center"
      >
        <img
          src="https://images.pexels.com/photos/889709/pexels-photo-889709.jpeg"
          alt="Firearms & Ammunition"
          className="h-[80vh] w-auto lg:w-full object-cover rounded-lg shadow-lg ml-2"
        />
      </motion.div>
    </section>
  );
};

export default AboutUs;
