"use client";

import { motion } from "framer-motion";
import { t } from "@/lib/i18n";
import Image from "next/image";

export default function Hero({ lang }) {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">

      {/* 🔥 BACKGROUND LAYER (DEPTH) */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-orange-200 opacity-20 blur-[140px]" />
        <div className="absolute bottom-[-150px] right-[-100px] w-[600px] h-[600px] bg-orange-300 opacity-10 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

        {/* ✨ TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-black leading-tight text-gray-900 tracking-tight">
            {t[lang].hello}
            <br />
            <span className="text-orange-500 relative inline-block">
              {t[lang].sub}

              {/* underline glow */}
              <span className="absolute left-0 -bottom-2 w-full h-[6px] bg-orange-200 blur-md opacity-70" />
            </span>
          </h1>

          <p className="mt-5 text-gray-500 max-w-xl leading-relaxed">
            {t[lang].desc}
          </p>

          {/* 🎯 CTA */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:items-center">
            
            <a
              href="https://wa.me/6281290979905"
              target="_blank"
              className="bg-orange-500 text-white px-6 py-3 rounded-xl shadow-lg 
              hover:shadow-xl hover:scale-[1.04] transition font-semibold text-center"
            >
              {t[lang].btn}
            </a>

            <a
              href="#services"
              className="bg-gray-900 text-white px-6 py-3 rounded-xl shadow-lg 
              hover:shadow-xl hover:scale-[1.04] transition text-center"
            >
              {lang === "id" ? "Lihat Layanan" : "View Services"}
            </a>

          </div>
        </motion.div>

        {/* 🖼 IMAGE */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="relative group">

            <Image
              src="/img/banner2026.png"
              width={900}
              height={600}
              alt="Hero Banner"
              className="
                w-full max-w-[700px] md:max-w-[850px]
                rounded-2xl
                shadow-[0_40px_120px_rgba(0,0,0,0.15)]
                transition-all duration-500
                group-hover:scale-[1.02]
              "
            />

            {/* ⚡ FLOAT ICON 1 */}
            <motion.div
              className="absolute -top-6 -right-6"
              animate={{ rotate: 360 }}
              transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl 
              bg-orange-100 border border-orange-200 text-orange-500 shadow-md">
                ⚡
              </div>
            </motion.div>

            {/* 🚀 FLOAT ICON 2 */}
            <motion.div
              className="absolute -bottom-6 -left-6"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl 
              bg-gray-100 border border-gray-200 text-gray-700 shadow-md">
                🚀
              </div>
            </motion.div>

            {/* 💫 FLOAT ICON 3 (NEW) */}
            <motion.div
              className="absolute top-1/2 -right-10"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full 
              bg-white border shadow text-orange-400">
                ✦
              </div>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}