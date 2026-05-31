"use client";

import { motion } from "framer-motion";

const items = [
  {
    title: "A Safe, Structured Environment",
    desc: "Children learn best in calm, predictable spaces where they feel secure and supported every day.",
  },
  {
    title: "Strong Academic Foundation",
    desc: "We focus on core learning skills that build confidence in reading, writing, and problem-solving.",
  },
  {
    title: "Teachers Who Understand Children",
    desc: "Our educators focus on individual growth, not just classroom performance.",
  },
  {
    title: "Open Parent Communication",
    desc: "Parents stay informed and involved through consistent updates and transparent communication.",
  },
];

export default function WhyParentsChooseUs() {
  return (
    <section className="bg-white py-32">
      <div className="section">

        {/* HEADER */}
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight text-slate-900">
            Built on trust,
            <span className="block text-slate-500">
              designed for children to thrive.
            </span>
          </h2>

          <p className="mt-5 text-slate-600 text-lg">
            Everything we do is intentional — safety, structure, and meaningful growth guide every decision.
          </p>
        </div>

        {/* STORY FLOW */}
        <div className="mt-24 space-y-28">

          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >

              {/* TEXT BLOCK */}
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 text-slate-600 leading-relaxed text-lg">
                  {item.desc}
                </p>
              </div>

              {/* VISUAL BLOCK */}
              <div className="h-[280px] md:h-[340px] rounded-3xl bg-gradient-to-br from-slate-100 to-slate-200 relative overflow-hidden">

                {/* subtle glow accent */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,0,0,0.08),transparent_60%)]" />

                {/* placeholder “premium feel” shape */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="h-2 w-24 bg-slate-400/30 rounded-full" />
                  <div className="mt-3 h-2 w-40 bg-slate-400/20 rounded-full" />
                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}