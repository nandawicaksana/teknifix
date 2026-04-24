"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUp } from "lucide-react";

export default function Footer({ lang }) {

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const menu = [
    { id: "about", label: lang === "id" ? "Tentang" : "About" },
    { id: "services", label: lang === "id" ? "Layanan" : "Services" },
    { id: "portfolio", label: lang === "id" ? "Portfolio" : "Portfolio" },
    { id: "contact", label: lang === "id" ? "Kontak" : "Contact" },
  ];

  const services = [
    "AC Service",
    "CCTV Installation",
    "Networking & WiFi",
    "Electrical",
    "Computer Repair",
    "CCTV Monitoring",
    "Water Pump",
    "Website Development",
    "Interior Design",
    "Building & Renovation",
  ];

  return (
    <footer className="relative border-t border-gray-100 py-16 px-6 bg-gradient-to-b from-white to-gray-50 overflow-hidden">

      {/* 🔥 SCROLL TO TOP */}
      <button
        onClick={scrollTop}
        className="fixed bottom-6 right-6 z-50 bg-orange-500 hover:bg-orange-600 
        text-white p-3 rounded-full shadow-xl transition-all duration-300 hover:scale-110"
      >
        <ArrowUp size={18} />
      </button>

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">

        {/* BRAND */}
        <div>
          <div className="group w-fit">
            <Image
              src="/img/main logo.png"
              alt="TekniFix Logo"
              width={200}
              height={50}
              className="w-[150px] md:w-[180px] transition-all duration-300 
              group-hover:scale-105 
              drop-shadow-[0_0_6px_rgba(255,115,0,0.4)] 
              group-hover:drop-shadow-[0_0_12px_rgba(255,115,0,0.7)]"
            />
          </div>

          <p className="mt-4 text-sm text-gray-500 leading-relaxed max-w-xs">
            {lang === "id"
              ? "Solusi teknisi modern untuk rumah & bisnis Anda. Cepat, profesional, dan terpercaya."
              : "Modern technical solutions for your home & business. Fast, professional, and reliable."}
          </p>

          {/* CTA */}
          <a
            href="https://wa.me/6281290979905?text=Halo%20TekniFix,%20saya%20butuh%20bantuan"
            target="_blank"
            className="inline-block mt-5 bg-orange-500 text-white px-5 py-2 rounded-full text-sm font-semibold shadow hover:scale-105 transition"
          >
            {lang === "id" ? "Chat Sekarang" : "Chat Now"}
          </a>
        </div>

        {/* NAV */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-4">
            {lang === "id" ? "Navigasi" : "Navigation"}
          </h4>

          <ul className="space-y-2 text-sm text-gray-500">
            {menu.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="hover:text-orange-500 transition"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">
            {lang === "id" ? "Layanan" : "Services"}
          </h4>

          <p className="text-xs text-gray-400 mb-3">
            All-in-One Technical Service
          </p>

          <ul className="grid grid-cols-2 gap-y-2 text-sm text-gray-500">
            {services.map((item, i) => (
              <li key={i} className="hover:text-orange-500 transition">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-4">
            {lang === "id" ? "Kontak" : "Contact"}
          </h4>

          <ul className="space-y-3 text-sm text-gray-500">

            <li>
              <a
                href="https://wa.me/6281290979905"
                className="hover:text-orange-500 transition"
              >
                📱 WhatsApp  
                <br />
                <span className="text-gray-400 text-xs">
                  +62 812-9097-9905
                </span>
              </a>
            </li>

            <li>
              <a
                href="mailto:supportteknifix@gmail.com"
                className="hover:text-orange-500 transition"
              >
                ✉️ Email  
                <br />
                <span className="text-gray-400 text-xs">
                  supportteknifix@gmail.com
                </span>
              </a>
            </li>

            <li>
              📍 Jakarta, Indonesia
            </li>

          </ul>
        </div>

      </div>

      {/* BOTTOM */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12 pt-6 border-t border-gray-100 text-center text-sm text-gray-400"
      >
        © {new Date().getFullYear()} TekniFix. All rights reserved.
      </motion.div>
    </footer>
  );
}