"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { t } from "@/lib/i18n";

export default function Navbar({ lang, setLang }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <div className="text-xl font-black text-gray-900">
            Tekni<span className="text-orange-500">Fix</span>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8">

          <a href="#about" className="text-gray-700 hover:text-orange-500 transition">
            {t[lang].about}
            </a>

            <a href="#services" className="text-gray-700 hover:text-orange-500 transition">
            {t[lang].services}
            </a>

            <a href="#contact" className="text-gray-700 hover:text-orange-500 transition">
            {t[lang].contact}
            </a>

          {/* LANGUAGE SWITCH */}
          <div className="relative flex bg-gray-100 p-1 rounded-xl">

            <motion.div
              layout
              className="absolute top-1 bottom-1 w-10 rounded-lg bg-orange-500"
              animate={{
                x: lang === "id" ? 0 : 40,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />

            <button
              onClick={() => setLang("id")}
              className={`relative z-10 px-3 py-1 text-sm font-semibold ${
                lang === "id" ? "text-white" : "text-gray-600"
              }`}
            >
              ID
            </button>

            <button
              onClick={() => setLang("en")}
              className={`relative z-10 px-3 py-1 text-sm font-semibold ${
                lang === "en" ? "text-white" : "text-gray-600"
              }`}
            >
              EN
            </button>

          </div>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-t border-gray-200 px-6 py-4 flex flex-col gap-4"
          >
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>

            {/* LANG MOBILE */}
            <div className="flex gap-2">
              <button
                onClick={() => setLang("id")}
                className={`px-3 py-1 rounded ${
                  lang === "id" ? "bg-orange-500 text-white" : "bg-gray-100"
                }`}
              >
                ID
              </button>

              <button
                onClick={() => setLang("en")}
                className={`px-3 py-1 rounded ${
                  lang === "en" ? "bg-orange-500 text-white" : "bg-gray-100"
                }`}
              >
                EN
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}