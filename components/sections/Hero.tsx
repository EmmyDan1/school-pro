"use client";

import { ArrowRight } from "lucide-react";
import { schoolData } from "@/data/schoolData";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2000&auto=format&fit=crop')",
        }}
      />

      {/* Cinematic Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Gradient Depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/80" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen -mt-12 lg:translate-y-12">
        <div className="section flex min-h-screen items-end lg:items-center pb-20 sm:pb-24 lg:pb-0">
          {/* Small Label */}
          <div className="w-full grid lg:grid-cols-[1.1fr_420px] gap-16 ">
            {/* LEFT */}
            <div>
              <div className="inline-flex w-fit items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-md lg:py-1">
                <span className="text-xs tracking-[0.2em] uppercase text-white/90">
                  Nursery • Primary • Secondary
                </span>
              </div>

              <h1 className="mt-8 text-white font-semibold tracking-tight leading-[1] text-5xl sm:text-6xl lg:text-6xl xl:text-7xl max-w-4xl lg:mt-4">
                Inspiring Curious Minds.
                <span className="block text-amber-300/80">
                  Building Confident Futures.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base lg:text-lg leading-8 text-white/80">
                {schoolData.description}
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <button className="group flex items-center justify-center gap-2 rounded-full bg-orange-200 px-7 py-2 font-medium text- transition hover:scale-[1.02]">
                  Book a School Visit
                  <ArrowRight
                    size={18}
                    className="transition group-hover:translate-x-1"
                  />
                </button>

                <button className="rounded-full border border-white/20 bg-white/10 px-7 py-2 font-medium text-white backdrop-blur-md transition hover:bg-white/15">
                  Explore Academics
                </button>
              </div>
            </div>

            {/* RIGHT PANEL */}
            <div className="hidden lg:block">
              <div className="rounded-[32px] border border-white/10 bg-white/10 backdrop-blur-md p-8">
                <div>
                  <p className="text-sm uppercase tracking-[0.15em] text-white/60">
                    Admissions
                  </p>

                  <h3 className="mt-3 text-3xl font-semibold text-white">
                    2026 Enrollment
                  </h3>

                  <p className="mt-4 text-white/70 leading-7">
                    Applications are currently open for Nursery, Primary and
                    Secondary classes.
                  </p>
                </div>

                <div className="mt-8 space-y-6">
                  <div className="flex justify-between border-b border-white/10 pb-4">
                    <span className="text-white/60">Class Levels</span>

                    <span className="text-white">Nursery - Secondary</span>
                  </div>

                  <div className="flex justify-between border-b border-white/10 pb-4">
                    <span className="text-white/60">Learning Style</span>

                    <span className="text-white">Modern & Practical</span>
                  </div>

                  <div className="flex justify-between border-b border-white/10 pb-4">
                    <span className="text-white/60">Parent Support</span>

                    <span className="text-white">Active Communication</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
