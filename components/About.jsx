"use client";

import { motion } from "framer-motion";


export default function About({ lang }) {
  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden border-t border-gray-100">

      {/* SOFT GLOW (NYAMBUNG HERO) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-orange-100 blur-[120px] opacity-20 -z-10" />

      <div className="max-w-6xl mx-auto text-center">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight">
            {lang === "id" ? "Tentang " : "About "}
            <span className="text-orange-500">TekniFix</span>
          </h2>

          <p className="mt-5 text-gray-500 max-w-2xl mx-auto leading-relaxed">
            {lang === "id"
              ? "Solusi teknisi modern untuk rumah dan bisnis, mulai dari instalasi hingga maintenance profesional."
              : "Modern technical solutions for home and business."}
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">

          {[
            { icon: "⚡", title: "Fast Response", desc: "Respon cepat & siap ke lokasi" },
            { icon: "🛠️", title: "Professional", desc: "Teknisi berpengalaman" },
            { icon: "✅", title: "Bergaransi", desc: "Pekerjaan rapi & terjamin" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] transition-all duration-300"
            >
              {/* ICON */}
              <div className="mb-6 flex justify-center">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-orange-50 border border-orange-100 text-orange-500 text-xl shadow-sm group-hover:scale-110 transition">
                  {item.icon}
                </div>
              </div>

              {/* TITLE */}
              <h3 className="font-semibold text-lg text-gray-900">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                {item.desc}
              </p>

              {/* ACCENT LINE */}
              <div className="mt-5 h-[2px] w-6 bg-orange-500 mx-auto opacity-0 group-hover:opacity-100 group-hover:w-12 transition-all duration-300"></div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}