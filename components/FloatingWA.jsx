"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingWA() {
  const [open, setOpen] = useState(false);
  const [service, setService] = useState("umum");

  const phone = "6281290979905";

  const message = {
    umum: "Halo TekniFix, saya ingin bertanya.",
    ac: "Halo TekniFix, saya butuh service AC.",
    cctv: "Halo TekniFix, saya ingin instalasi CCTV.",
    listrik: "Halo TekniFix, saya butuh perbaikan listrik.",
    jaringan: "Halo TekniFix, saya butuh setup jaringan.",
    komputer: "Halo TekniFix, saya butuh service komputer.",
  };

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(
    message[service]
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">

      {/* DROPDOWN FLOAT */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10 }}
            className="mb-3 bg-white border border-gray-200 rounded-xl shadow-xl p-3 w-48"
          >
            <p className="text-xs text-gray-400 mb-2">
              Pilih layanan
            </p>

            <select
              onChange={(e) => setService(e.target.value)}
              className="w-full text-sm outline-none border rounded-lg px-2 py-1"
            >
              <option value="umum">Umum</option>
              <option value="ac">AC</option>
              <option value="cctv">CCTV</option>
              <option value="listrik">Listrik</option>
              <option value="jaringan">Jaringan</option>
              <option value="komputer">Komputer</option>
            </select>

            <a
              href={url}
              target="_blank"
              className="mt-3 block text-center bg-green-500 text-white py-2 rounded-lg text-sm hover:scale-105 transition"
            >
              Chat Sekarang
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MAIN BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="bg-green-500 text-white px-5 py-3 rounded-full shadow-xl hover:scale-105 transition flex items-center gap-2"
      >
        💬 WhatsApp
      </button>

    </div>
  );
}