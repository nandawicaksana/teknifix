"use client";

import { useEffect, useState } from "react";

export default function StickyCTA({ lang }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 600); // muncul setelah scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-40 bg-white border-t border-gray-200 shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">

        <p className="text-sm text-gray-600">
          {lang === "id"
            ? "Butuh teknisi sekarang?"
            : "Need a technician?"}
        </p>

        <a
          href="https://wa.me/6281290979905?text=Halo%20TekniFix,%20saya%20butuh%20bantuan"
          target="_blank"
          className="bg-orange-500 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:scale-105 transition"
        >
          {lang === "id" ? "Chat Sekarang" : "Chat Now"}
        </a>

      </div>
    </div>
  );
}