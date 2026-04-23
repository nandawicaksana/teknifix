"use client";

import { motion } from "framer-motion";
import { t } from "@/lib/i18n";

export default function Hero({ lang }) {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0  bg-orange-100 blur-[120px] opacity-20 -z-10" />

      {/* SOFT GLOW */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-orange-100 blur-[140px] opacity-20 -z-10" />

      <div className="w-full grid gap-14 items-center px-6 md:px-16 lg:px-24 text-center">

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-black leading-tight text-gray-900 tracking-tight">
            {t[lang].hello}
            <br />
            <span className="text-orange-500">
              {t[lang].sub}
            </span>
          </h1>

          <p className="mt-5 text-gray-500 max-w-xl mx-auto leading-relaxed">
            {t[lang].desc}
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <button className="bg-orange-500 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.03] transition">
              {t[lang].btn}
            </button>

            <button className="bg-gray-900 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.03] transition">
              Lihat Layanan
            </button>
          </div>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="relative">

            <img
              src="/img/banner.png"
              className="w-full max-w-[900px] rounded-2xl shadow-[0_40px_120px_rgba(0,0,0,0.15)]"
            />

            {/* ⚡ KANAN ATAS (SUBTLE) */}
            <motion.div
              className="absolute -top-5 -right-5"
              animate={{ rotate: 360 }}
              transition={{
                duration: 12, // lebih slow = premium
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-orange-100 border border-orange-200 text-orange-500 shadow-sm">
                ⚡
              </div>
            </motion.div>

            {/* 🚀 KIRI BAWAH (FLOAT HALUS) */}
            <motion.div
              className="absolute -bottom-5 -left-5"
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-100 border border-gray-200 text-gray-700 shadow-sm">
                🚀
              </div>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}