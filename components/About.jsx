"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { t } from "@/lib/i18n";
import CountUp from "@/components/CountUp";

export default function About({ lang }) {
  const tt = t[lang];

  // 🔥 parallax halus
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -60]);

  const features = [
    { icon: "⚡", title: tt.featureFast, desc: tt.featureFastDesc },
    { icon: "🛠️", title: tt.featurePro, desc: tt.featureProDesc },
    { icon: "✅", title: tt.featureWarranty, desc: tt.featureWarrantyDesc },
  ];

  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden border-t border-gray-100 bg-gradient-to-b from-white to-gray-50">

      {/* BG GLOW + PARALLAX */}
      <motion.div
        style={{ y }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-orange-100 blur-[140px] opacity-20 -z-10"
      />

      <div className="max-w-6xl mx-auto text-center">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight">
            {tt.about}
            <span className="text-orange-500"> TekniFix</span>
          </h2>

          {/* 🔥 BADGE */}
          <div className="mt-6 inline-flex items-center gap-2 px-4 py-1 text-xs bg-orange-100 text-orange-600 rounded-full font-semibold shadow-sm">
            🚀 Since 2025 • Growing Fast • Trusted Service
          </div>
        </motion.div>

        {/* 🔥 STATS (ANIMATED) */}
        <div className="mt-10 grid grid-cols-3 gap-6 max-w-xl mx-auto text-center">
          <div>
            <h3 className="text-3xl font-bold text-orange-500">
              <CountUp end={70} suffix="+" />
            </h3>
            <p className="text-xs text-gray-500">Projects</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-orange-500">
              <CountUp end={2} suffix="+" />
            </h3>
            <p className="text-xs text-gray-500">Years</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-orange-500">
              <CountUp end={100} suffix="%" />
            </h3>
            <p className="text-xs text-gray-500">Satisfaction</p>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="mt-12 w-20 h-[3px] bg-orange-500 mx-auto rounded-full opacity-60"></div>

        {/* STORY */}
        <div className="mt-14 grid md:grid-cols-2 gap-8 text-left">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/70 backdrop-blur-xl p-7 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition"
          >
            <h3 className="font-semibold text-gray-900 mb-3 text-lg">
              {lang === "id" ? "Tentang Kami" : "Who We Are"}
            </h3>

            <p className="text-gray-500 text-sm leading-relaxed">
              {tt.aboutDesc}
            </p>

            <p className="text-gray-500 text-sm mt-3 leading-relaxed">
              {tt.aboutStory}
            </p>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/70 backdrop-blur-xl p-7 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition"
          >
            <h3 className="font-semibold text-gray-900 mb-3 text-lg">
              {lang === "id" ? "Komitmen Kami" : "Our Commitment"}
            </h3>

            <p className="text-gray-500 text-sm leading-relaxed">
              {tt.aboutValue}
            </p>
          </motion.div>

        </div>



      </div>
    </section>
  );
}