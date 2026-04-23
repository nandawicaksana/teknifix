"use client";

import { motion } from "framer-motion";
import { t } from "@/lib/i18n";

export default function Services({ lang }) {
  const services = [
    { icon: "🔌", title: "Kelistrikan", desc: "Instalasi & perbaikan listrik rumah / gedung" },
    { icon: "💧", title: "Pompa Air", desc: "Servis, instalasi, dan troubleshooting pompa" },
    { icon: "❄️", title: "AC", desc: "Cuci, instalasi, dan perbaikan AC" },
    { icon: "🌐", title: "Jaringan", desc: "Setup WiFi, LAN, dan konfigurasi jaringan" },
    { icon: "💻", title: "Komputer", desc: "Service PC, laptop, dan maintenance" },
    { icon: "📹", title: "CCTV", desc: "Instalasi & monitoring sistem keamanan" },
    { icon: "🏗️", title: "Design & Build", desc: "Interior, gudang, ruko, olahraga" },
    { icon: "🌍", title: "Website", desc: "Pembuatan website profesional & modern" },
  ];

  return (
    <section
      id="services"
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
            {lang === "id" ? "Layanan " : "Our "}
            <span className="text-orange-500">
              {lang === "id" ? "TekniFix" : "Services"}
            </span>
          </h2>

          <p className="mt-5 text-gray-500 max-w-2xl mx-auto">
            {lang === "id"
              ? "Kami menyediakan berbagai layanan teknisi profesional untuk kebutuhan rumah dan bisnis Anda."
              : "We provide a wide range of professional technical services for your home and business."}
          </p>
        </motion.div>

        {/* GRID */}
        <div className="mt-20 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {services.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] transition-all duration-300 text-left"
            >
              {/* ICON */}
              <div className="mb-4">
                <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-orange-50 border border-orange-100 text-orange-500 text-lg shadow-sm group-hover:scale-110 transition">
                  {item.icon}
                </div>
              </div>

              {/* TITLE */}
              <h3 className="font-semibold text-gray-900">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="text-gray-500 text-sm mt-1">
                {item.desc}
              </p>
            </motion.div>
          ))}

        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <button className="bg-orange-500 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.03] transition">
            {lang === "id" ? "Hubungi Sekarang" : "Contact Now"}
          </button>
        </motion.div>

      </div>
    </section>
  );
}