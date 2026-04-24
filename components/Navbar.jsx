"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { t } from "@/lib/i18n";
import Image from "next/image";

export default function Navbar({ lang, setLang }) {
  const [open, setOpen] = useState(false);

  const menu = [
    { id: "about", label: t[lang].about },
    { id: "services", label: t[lang].services },
    { id: "portfolio", label: t[lang].portfolio || "Portfolio" },
    { id: "contact", label: t[lang].contact },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 
    bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-sm">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <div className="object-contain transition duration-300 drop-shadow-[0_0_6px_rgba(255,115,0,0.5)]">
          <Image
            src="/img/main logo.png"
            alt="TekniFix Logo"
            width={200}
            height={40}
            priority
            className="object-contain"
          />
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8">

          {menu.map((item, i) => (
            <a
              key={i}
              href={`#${item.id}`}
              className="relative text-gray-700 font-medium group"
            >
              {item.label}

              {/* underline animation */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}

          {/* LANGUAGE SWITCH */}
          <div className="relative flex bg-gray-100 p-1 rounded-xl overflow-hidden">

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
              className={`relative z-10 px-3 py-1 text-sm font-semibold transition ${
                lang === "id" ? "text-white" : "text-gray-600"
              }`}
            >
              ID
            </button>

            <button
              onClick={() => setLang("en")}
              className={`relative z-10 px-3 py-1 text-sm font-semibold transition ${
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
            className="md:hidden bg-white/95 backdrop-blur border-t border-gray-200 px-6 py-6 flex flex-col gap-5"
          >
            {menu.map((item, i) => (
              <a
                key={i}
                href={`#${item.id}`}
                className="text-gray-800 font-medium"
              >
                {item.label}
              </a>
            ))}

            {/* LANG MOBILE */}
            <div className="flex gap-2 pt-2">
              <button
                onClick={() => setLang("id")}
                className={`px-3 py-1 rounded ${
                  lang === "id"
                    ? "bg-orange-500 text-white"
                    : "bg-gray-100"
                }`}
              >
                ID
              </button>

              <button
                onClick={() => setLang("en")}
                className={`px-3 py-1 rounded ${
                  lang === "en"
                    ? "bg-orange-500 text-white"
                    : "bg-gray-100"
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