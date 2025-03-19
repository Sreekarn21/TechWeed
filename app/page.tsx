"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      {/* Animated TechWeed Text */}
      <motion.h1
        className="text-6xl font-extrabold tracking-wider font-sans"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        TechWeed
      </motion.h1>

      {/* Subtitle Animation */}
      <motion.p
        className="text-lg mt-4 text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Empowering You with Next-Gen Tech Skills
      </motion.p>

      {/* Animated Button (Corrected) */}
      <motion.div
        className="mt-6"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.3 }}
      >
        <Link href="/courses">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold tracking-wide hover:bg-blue-700">
            Explore Courses
          </button>
        </Link>
      </motion.div>
    </div>
  );
}