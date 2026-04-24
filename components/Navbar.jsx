"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { t } from "@/lib/i18n";
import Image from "next/image";

export default function Navbar({ lang, setLang }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  const menu = [
    { id: "about", label: t[lang].about },
    { id: "services", label: t[lang].services },
    { id: "portfolio", label: t[lang].portfolio || "Portfolio" },
    { id: "contact", label: t[lang].contact },
  ];

  // 🔥 SCROLL SPY
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => sections.forEach((sec) => observer.unobserve(sec));
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 
    bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-sm">

      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">

        {/* LOGO */}
        <div className="group">
          <Image
            src="/img/main logo.png"
            alt="TekniFix Logo"
            width={200}
            height={50}
            className="w-[140px] md:w-[180px] lg:w-[200px]
            transition-all duration-300
            group-hover:scale-105"
          />
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8">

          {menu.map((item, i) => (
            <a
              key={i}
              href={`#${item.id}`}
              className={`relative font-medium transition
                ${active === item.id ? "text-orange-500" : "text-gray-700"}
              `}
            >
              {item.label}

              {/* underline */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-orange-500 transition-all duration-300
                ${active === item.id ? "w-full" : "w-0"}
              `}
              />
            </a>
          ))}

          {/* LANGUAGE */}
          <div className="relative flex bg-gray-100 p-1 rounded-xl overflow-hidden">
            <motion.div
              layout
              className="absolute top-1 bottom-1 w-10 rounded-lg bg-orange-500"
              animate={{ x: lang === "id" ? 0 : 40 }}
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

        {/* 🔥 ANIMATED HAMBURGER */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1"
        >
          <motion.span
            animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="w-6 h-[2px] bg-black"
          />
          <motion.span
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            className="w-6 h-[2px] bg-black"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="w-6 h-[2px] bg-black"
          />
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="md:hidden bg-white/95 backdrop-blur border-t px-6 py-6 flex flex-col gap-5"
          >
            {menu.map((item, i) => (
              <a
                key={i}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className={`font-medium ${
                  active === item.id
                    ? "text-orange-500"
                    : "text-gray-800"
                }`}
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}