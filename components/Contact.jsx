"use client";

import { motion } from "framer-motion";

export default function Contact({ lang }) {
  return (
    <section
      id="contact"
      className="py-40 px-6 border-t border-gray-100 bg-white"
    >
      <div className="max-w-4xl mx-auto text-center">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-black text-gray-900">
            {lang === "id" ? "Butuh Bantuan?" : "Need Help?"}
          </h2>

          <p className="mt-4 text-gray-500 max-w-lg mx-auto">
            {lang === "id"
              ? "Hubungi kami dan dapatkan solusi terbaik untuk kebutuhan Anda."
              : "Contact us and get the best solution for your needs."}
          </p>
        </motion.div>

        {/* CTA */}
      <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2 }}
  viewport={{ once: true }}
  className="mt-10"
>
  <a
    href="mailto:supportteknifix@gmail.com"
    className="
    group relative inline-flex items-center gap-2 
    px-10 py-4 rounded-xl 
    bg-gray-900 text-white font-semibold
    transition-all duration-300
    hover:-translate-y-[2px] hover:shadow-lg
    active:scale-[0.98]
    "
  >
    {/* TEXT */}
    {lang === "id" ? "Kirim Email" : "Send Email"}

    {/* ICON ARROW */}
    <span className="transition-transform duration-300 group-hover:translate-x-1">
      →
    </span>

    {/* SUBTLE GLOW */}
    <span className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition bg-white/5"></span>
  </a>

  <p className="text-xs text-gray-400 mt-3">
    {lang === "id"
      ? "WhatsApp segera tersedia"
      : "WhatsApp coming soon"}
  </p>
</motion.div>

        {/* INFO */}
        <div className="mt-12 flex flex-col items-center gap-2 text-sm text-gray-500">
          <p>
            <span className="text-gray-400">Email:</span>{" "}
            <span className="text-gray-900 font-medium">
              supportteknifix@gmail.com
            </span>
          </p>

          <p>
            <span className="text-gray-400">WhatsApp:</span>{" "}
            <span className="text-gray-900 font-medium">
            {lang === "id"
              ? "segera tersedia"
              : "coming soon"}
            </span>
          </p>

          <p>
            <span className="text-gray-400">Location:</span>{" "}
            <span className="text-gray-900 font-medium">
              Jakarta, Indonesia
            </span>
          </p>
        </div>

      </div>
    </section>
  );
}