"use client";

import { motion } from "framer-motion";

export default function Contact({ lang }) {
  return (
    <section
      id="contact"
      className="py-32 px-6 relative overflow-hidden border-t border-gray-100 bg-gradient-to-b from-white to-gray-50"
    >

      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-orange-200 blur-[160px] opacity-20 -z-10" />

      <div className="max-w-6xl mx-auto text-center">

        {/* ✨ TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight">
            {lang === "id" ? "Butuh Bantuan?" : "Need Help?"}
            <br />
            <span className="text-orange-500">
              {lang === "id" ? "Hubungi Kami Sekarang" : "Contact Us Now"}
            </span>
          </h2>

          <p className="mt-5 text-gray-500 max-w-xl mx-auto leading-relaxed">
            {lang === "id"
              ? "Tim TekniFix siap membantu Anda dengan cepat, profesional, dan tanpa ribet."
              : "Our team is ready to help you quickly, professionally, and hassle-free."}
          </p>
        </motion.div>

        {/* 🔥 CTA CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 relative rounded-3xl overflow-hidden"
        >

          {/* glass background */}
          <div className="absolute inset-0 bg-white/60 backdrop-blur-xl border border-white/40 shadow-[0_30px_80px_rgba(0,0,0,0.08)]" />

          {/* glow accent */}
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-orange-300 blur-[120px] opacity-30" />

          <div className="relative p-10 md:p-14">

            {/* CTA BUTTON */}
            <a
              href="https://wa.me/6281290979905?text=Halo%20TekniFix,%20saya%20butuh%20bantuan"
              target="_blank"
              className="inline-block bg-orange-500 text-white px-10 py-4 rounded-full 
              shadow-xl hover:scale-[1.05] hover:shadow-2xl transition font-semibold"
            >
              {lang === "id" ? "Chat WhatsApp Sekarang" : "Chat on WhatsApp"}
            </a>

            {/* ✨ SUB CTA */}
            <p className="mt-4 text-gray-500 text-sm">
              {lang === "id"
                ? "Respon cepat dalam hitungan menit"
                : "Fast response within minutes"}
            </p>

            {/* INFO */}
            <div className="mt-12 grid sm:grid-cols-3 gap-6 text-sm">

              <div className="p-4 rounded-xl bg-white/70 backdrop-blur border border-gray-100">
                <p className="font-semibold text-gray-900">WhatsApp</p>
                <p className="text-gray-600 mt-1">+62 812-9097-9905</p>
              </div>

              <div className="p-4 rounded-xl bg-white/70 backdrop-blur border border-gray-100">
                <p className="font-semibold text-gray-900">Email</p>
                <p className="text-gray-600 mt-1">supportteknifix@gmail.com</p>
              </div>

              <div className="p-4 rounded-xl bg-white/70 backdrop-blur border border-gray-100">
                <p className="font-semibold text-gray-900">Lokasi</p>
                <p className="text-gray-600 mt-1">Jakarta, Indonesia</p>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}