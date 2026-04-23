"use client";

import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1.8, duration: 0.6 }}
      className="fixed inset-0 flex items-center justify-center z-50 bg-white"
    >
      {/* SOFT GLOW BIAR NYAMBUNG HERO */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-orange-100 blur-[140px] opacity-20" />

      <div className="relative flex flex-col items-center gap-6">

        {/* LOGO */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-black text-gray-900 tracking-tight"
        >
          Tekni<span className="text-orange-500">Fix</span>
        </motion.div>

        {/* LOADING BAR (lebih premium dari dots) */}
        <div className="w-40 h-[3px] bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-orange-500"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{
              duration: 1.6,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* DOT HALUS (optional tapi tetap clean) */}
        <div className="flex gap-2 mt-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-gray-400"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>

      </div>
    </motion.div>
  );
}