"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";

export default function Portfolio({ lang }) {

  const items = [
    { title: "AC", img: "/img/ac.png", desc: "Instalasi & maintenance AC." },
    { title: "CCTV", img: "/img/cctv.png", desc: "Sistem keamanan CCTV." },
    { title: "Jaringan", img: "/img/jaringan.png", desc: "Setup LAN/WiFi stabil." },
    { title: "Kelistrikan", img: "/img/listrik.png", desc: "Instalasi listrik." },
    { title: "Komputer", img: "/img/komputer.png", desc: "Service & rakit PC." },
    { title: "Monitoring", img: "/img/monitoring cctv.png", desc: "Monitoring CCTV." },
    { title: "Pompa Air", img: "/img/pompa.png", desc: "Perbaikan pompa air." },
    { title: "Website", img: "/img/website.png", desc: "Web development." },
  ];

  // 🔥 duplicate for seamless loop
  const loopItems = [...items, ...items];

  const [index, setIndex] = useState(null);
  const selected = index !== null ? items[index % items.length] : null;

  return (
    <section className="py-32 px-6 relative overflow-hidden border-t border-gray-100">

      {/* BG */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-orange-100 blur-[120px] opacity-20 -z-10" />

      <div className="max-w-7xl mx-auto text-center">

        {/* TITLE */}
        <h2 className="text-3xl md:text-5xl font-black text-gray-900">
          {lang === "id" ? "Hasil Kerja " : "Our "}
          <span className="text-orange-500">TekniFix</span>
        </h2>

        {/* SLIDER */}
        <div className="relative mt-16 overflow-hidden">

          {/* FADE EDGE */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10" />

          {/* TRACK */}
          <motion.div
            className="flex gap-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              ease: "linear",
              duration: 25,
              repeat: Infinity,
            }}
          >

            {loopItems.map((item, i) => (
              <div
                key={i}
                onClick={() => setIndex(i)}
                className="min-w-[75%] sm:min-w-[300px] cursor-pointer"
              >
                <div className="relative h-56 rounded-2xl overflow-hidden shadow-lg">

                  <img
                    src={item.img}
                    className="w-full h-full object-cover"
                  />

                  {/* overlay */}
                  <div className="absolute inset-0 bg-black/30" />

                  {/* title */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                    <p className="text-white text-sm font-semibold">
                      {item.title}
                    </p>
                  </div>

                </div>
              </div>
            ))}

          </motion.div>
        </div>

        {/* CTA */}
        <div className="mt-14">
          <Link href="/gallery">
            <button className="bg-orange-500 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
              {lang === "id" ? "Lihat Semua Proyek" : "View Full Gallery"}
            </button>
          </Link>
        </div>

      </div>

      {/* MODAL */}
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
                if (info.offset.x < -100) setIndex((prev) => prev + 1);
                if (info.offset.x > 100) setIndex((prev) => prev - 1);
              }}
              className="w-full max-w-3xl bg-white rounded-2xl overflow-hidden"
            >

              <img
                src={selected.img}
                className="w-full h-[260px] md:h-[380px] object-cover"
              />

              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold">
                  {selected.title}
                </h3>
                <p className="text-gray-500 mt-2">
                  {selected.desc}
                </p>
              </div>

            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}