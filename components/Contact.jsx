"use client";

import { motion } from "framer-motion";

export default function Contact({ lang }) {
  return (
    <section
      id="contact"
      className="py-32 px-6 relative overflow-hidden border-t border-gray-100"
    >

      {/* GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-orange-100 blur-[120px] opacity-20 -z-10" />

      <div className="max-w-6xl mx-auto text-center">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight">
            {lang === "id" ? "Hubungi " : "Get in "}
            <span className="text-orange-500">
              {lang === "id" ? "Kami" : "Touch"}
            </span>
          </h2>

          <p className="mt-5 text-gray-500 max-w-xl mx-auto">
            {lang === "id"
              ? "Butuh teknisi sekarang? Tim TekniFix siap membantu Anda dengan cepat dan profesional."
              : "Need a technician? Our team is ready to help you quickly and professionally."}
          </p>
        </motion.div>

        {/* CTA BOX */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-2xl border border-gray-100 shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-10"
        >

          {/* BUTTON */}
          <a
            href="https://wa.me/+6281290979905?text=Halo%20TekniFix,%20saya%20butuh%20bantuan"
            target="_blank"
            className="inline-block bg-orange-500 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.03] transition"
          >
            {lang === "id" ? "Chat WhatsApp Sekarang" : "Chat on WhatsApp"}
          </a>

          {/* INFO */}
          <div className="mt-10 grid md:grid-cols-3 gap-6 text-sm text-gray-600">

            <div>
              <p className="font-semibold text-gray-900">WhatsApp</p>
              <p>+62 812-9097-9905</p>
            </div>

            <div>
              <p className="font-semibold text-gray-900">Email</p>
              <p>supportteknifix@gmail.com</p>
            </div>

            <div>
              <p className="font-semibold text-gray-900">Lokasi</p>
              <p>Jakarta, Indonesia</p>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}