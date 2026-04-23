"use client";

import { motion } from "framer-motion";

export default function Footer({ lang }) {
  return (
    <footer className="border-t border-gray-100 py-16 px-6 bg-white">

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">

        {/* BRAND */}
        <div>
          <h3 className="text-xl font-black text-gray-900">
            Tekni<span className="text-orange-500">Fix</span>
          </h3>

          <p className="mt-3 text-sm text-gray-500 leading-relaxed">
            {lang === "id"
              ? "Solusi teknisi lengkap untuk rumah & bisnis Anda."
              : "Complete technical solutions for your home & business."}
          </p>
        </div>

        {/* NAV */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-3">
            {lang === "id" ? "Menu" : "Menu"}
          </h4>

          <ul className="space-y-2 text-sm text-gray-500">
            <li><a href="#about" className="hover:text-orange-500">About</a></li>
            <li><a href="#services" className="hover:text-orange-500">Services</a></li>
            <li><a href="#portfolio" className="hover:text-orange-500">Portfolio</a></li>
            <li><a href="#contact" className="hover:text-orange-500">Contact</a></li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-3">
            {lang === "id" ? "Layanan" : "Services"}
          </h4>

          <ul className="space-y-2 text-sm text-gray-500">
            <li>AC</li>
            <li>CCTV</li>
            <li>Kelistrikan</li>
            <li>Jaringan</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-3">
            {lang === "id" ? "Kontak" : "Contact"}
          </h4>

          <ul className="space-y-2 text-sm text-gray-500">
            <li>WhatsApp: +62 812-9097-9905</li>
            <li>Email: teknifix@email.com</li>
            <li>Jakarta, Indonesia</li>
          </ul>
        </div>

      </div>

      {/* BOTTOM */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-12 pt-6 border-t border-gray-100 text-center text-sm text-gray-400"
      >
        © {new Date().getFullYear()} TekniFix. All rights reserved.
      </motion.div>

    </footer>
  );
}