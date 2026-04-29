"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { t } from "@/lib/i18n";

// ⬇️ IMPORT COMPONENT LU
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export default function GalleryPage() {

  const lang = "id";

  // ===== DATA =====s
  const items = [
    { title: "AC", img: "/img/ac.png", category: "ac", desc: "Instalasi & maintenance AC." },
    { title: "CCTV", img: "/img/cctv.png", category: "cctv", desc: "Sistem keamanan CCTV." },
    { title: "Jaringan", img: "/img/jaringan.png", category: "network", desc: "Setup LAN/WiFi stabil." },
    { title: "Kelistrikan", img: "/img/listrik.png", category: "electrical", desc: "Instalasi listrik." },
    { title: "Komputer", img: "/img/komputer.png", category: "computer", desc: "Service & rakit PC." },
    { title: "Monitoring CCTV", img: "/img/monitoring cctv.png", category: "cctv", desc: "Monitoring CCTV real-time." },
    { title: "Pompa Air", img: "/img/pompa.png", category: "water", desc: "Perbaikan pompa air." },
    { title: "Website", img: "/img/website.png", category: "web", desc: "Web development." },
    { title: "Design Interior", img: "/img/design.png", category: "design", desc: "Desain interior modern." },
    { title: "Building", img: "/img/building.png", category: "building", desc: "Renovasi & pembangunan." },
  ];

  const categories = [
    { id: "all", label: t[lang].all },
    { id: "ac", label: "AC" },
    { id: "cctv", label: "CCTV" },
    { id: "network", label: t[lang].network },
    { id: "electrical", label: t[lang].electrical },
    { id: "computer", label: t[lang].computer },
    { id: "water", label: t[lang].water },
    { id: "web", label: "Website" },
    { id: "design", label: t[lang].design },
    { id: "building", label: t[lang].building },
    ];

  const [active, setActive] = useState("all");
  const [index, setIndex] = useState(null);

  const filtered =
    active === "all"
      ? items
      : items.filter((item) => item.category === active);

  const selected = index !== null ? filtered[index] : null;

  const next = () => setIndex((prev) => (prev + 1) % filtered.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + filtered.length) % filtered.length);

  const waLink = (title) =>
    `https://wa.me/6281290979905?text=${encodeURIComponent(
      `Halo TekniFix, saya tertarik dengan layanan ${title}. Bisa dibantu?`
    )}`;

  return (
    <>
      {/* 🔥 NAVBAR */}
      <Navbar lang={lang} />

      {/* 🔥 PAGE */}
      <section className="min-h-screen py-32 px-6 bg-gradient-to-b from-white to-gray-50">

        <div className="max-w-7xl mx-auto">

          {/* HEADER */}
          <div className="text-center mb-16 relative">

            {/* GLOW BACKGROUND */}
            <div className="absolute inset-0 flex justify-center -z-10">
                <div className="w-[500px] h-[200px] bg-orange-200 blur-[120px] opacity-30" />
            </div>

            {/* TITLE */}
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight leading-tight">
                Gallery Tekni
                <span className="text-orange-500 relative">
                Fix
                {/* underline glow */}
                <span className="absolute left-0 -bottom-2 w-full h-[6px] bg-orange-200 blur-md opacity-70" />
                </span>
                <span className="text-lg md:text-xl ml-1">
                .id
                </span>
            </h1>

            {/* BADGE (OPTIONAL 🔥) */}
            <div className="mt-6 inline-block px-4 py-1 text-xs bg-orange-100 text-orange-600 rounded-full font-semibold">
                {t[lang].galleryDesc}
            </div>

            </div>

          {/* FILTER */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActive(cat.id);
                  setIndex(null);
                }}
                className={`px-4 py-2 rounded-full text-sm transition ${
                  active === cat.id
                    ? "bg-orange-500 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-orange-100"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* GRID */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

            {filtered.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="cursor-pointer"
                onClick={() => setIndex(i)}
              >
                <div className="relative h-56 rounded-2xl overflow-hidden shadow-lg">

                  <img src={item.img} className="w-full h-full object-cover" />

                  <div className="absolute inset-0 bg-black/30" />

                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                    <p className="text-white text-sm font-semibold">
                      {item.title}
                    </p>
                  </div>

                </div>
              </motion.div>
            ))}

          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <a
              href="https://wa.me/6281290979905"
              target="_blank"
              className="bg-orange-500 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
            >
              {t[lang].consult}
            </a>
          </div>

        </div>
      </section>

      {/* 🔥 FOOTER */}
      <Footer lang={lang} />

      {/* 🔥 MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >

            <button
              onClick={() => setIndex(null)}
              className="absolute top-4 right-4 text-white bg-black/40 p-2 rounded-full"
            >
              <X size={24} />
            </button>

            <motion.div
              key={index}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(e, info) => {
                if (info.offset.x < -100) next();
                if (info.offset.x > 100) prev();
              }}
              className="w-full max-w-3xl bg-white rounded-2xl overflow-hidden"
            >

              <img
                src={selected.img}
                className="w-full h-[260px] md:h-[380px] object-cover"
              />

              <div className="p-6 text-left">
                <h3 className="text-xl font-bold text-gray-900">
                  {selected.title}
                </h3>

                <p className="text-gray-500 mt-2">
                  {selected.desc}
                </p>

                <a
                  href={waLink(selected.title)}
                  target="_blank"
                  className="inline-block mt-4 bg-orange-500 text-white px-5 py-2 rounded-full text-sm font-semibold hover:scale-105 transition"
                >
                  Tanya Layanan Ini
                </a>
              </div>

            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}