"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function InteractionPage() {
  return (
    <>
      <div className=" bg-gray-900 pt-16">
        <h1 className="text-white text-center text-7xl">404 </h1>
        <h4 className="text-white text-center text-2xl">Page not found</h4>
        <h2 className=" text-blue-500 text-center">
          <Link href="/"> visit the website jabkityaari.com</Link>
        </h2>

        <div className="relative w-screen h-[40vh] bg-gray-900 flex items-center overflow-hidden">
          <motion.div
            className="absolute w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg"
            initial={{ x: "-100%" }} // Start off-screen on the left
            animate={{ x: "100vw" }} // Move to the right
            transition={{
              duration: 4, // Adjust speed
              repeat: Infinity, // Infinite loop
              repeatType: "loop", // Restarts smoothly
              ease: "linear", // Constant speed
            }}
          >
            🤖
          </motion.div>
        </div>
      </div>
    </>
  );
}
