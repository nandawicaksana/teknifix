"use client";

import { motion } from "framer-motion";

export default function Portfolio({ lang }) {
const items = [
  {
    title: "AC",
    img: "/img/ac.png",
  },
  {
    title: "CCTV",
    img: "/img/cctv.png",
  },
  {
    title: "Jaringan",
    img: "/img/jaringan.png",
  },
  {
    title: "Kelistrikan",
    img: "/img/listrik.png",
  },
  {
    title: "Komputer",
    img: "/img/komputer.png",
  },
  {
    title: "Monitoring CCTV",
    img: "/img/monitoring cctv.png",
  },
  {
    title: "Pompa Air",
    img: "/img/pompa.png",
  },
  {
    title: "Website",
    img: "/img/website.png",
  },
];

  return (
    <section
      id="portfolio"
      className="py-32 px-6 relative overflow-hidden border-t border-gray-100"
    >
      {/* GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-orange-100 blur-[120px] opacity-20 -z-10" />

      <div className="max-w-7xl mx-auto text-center">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight">
            {lang === "id" ? "Hasil Kerja " : "Our "}
            <span className="text-orange-500">
              {lang === "id" ? "TekniFix" : "Portfolio"}
            </span>
          </h2>

          <p className="mt-5 text-gray-500 max-w-2xl mx-auto">
            {lang === "id"
              ? "Beberapa proyek yang telah kami kerjakan dengan hasil terbaik."
              : "Some of the projects we have completed with the best results."}
          </p>
        </motion.div>

        {/* GRID */}
        <div className="mt-20 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
{items.map((item, i) => (
  <motion.div
    key={i}
    initial={{ opacity: 0, y: 60, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ delay: i * 0.05, duration: 0.4 }}
    viewport={{ once: true }}
    whileHover={{ y: -10 }}
    className="group relative overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300"
  >
    <div className="relative">

      {/* IMAGE */}
      <img
        src={item.img}
        className="w-full h-52 object-cover group-hover:scale-110 transition duration-700"
      />

      {/* GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition" />

      {/* TITLE */}
      <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition">
        <p className="text-white font-semibold text-sm">
          {item.title}
        </p>
      </div>

      {/* BADGE */}
      <div className="absolute top-3 left-3 text-[10px] bg-white/80 backdrop-blur px-2 py-1 rounded">
        Project
      </div>

    </div>
  </motion.div>
))}

        </div>

      </div>
    </section>
  );
}