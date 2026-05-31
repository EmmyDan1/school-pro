"use client";

import { schoolData } from "@/data/schoolData";
import { Menu } from "lucide-react";

const links = [
  { label: "Programs", href: "#programs" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50  backdrop-blur-xl  ">
      <div className="section h-16 lg:h-20 flex items-center justify-between">
        {/* LOGO */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-slate-900 text-orange-100 flex items-center justify-center font-semibold">
            {schoolData.logoText}
          </div>

          <div className="hidden sm:block">
            <h2 className="font-semibold text-sm lg:text-base">
              {schoolData.name}
            </h2>
            <p className="text-xs text-orange-100">
              Learn • Grow • Succeed
            </p>
          </div>
        </div>

        {/* DESKTOP LINKS */}
        <nav className="hidden lg:flex items-center gap-8 text-sm text-orange-100">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-slate-900 transition"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA + MOBILE */}
        <div className="flex items-center gap-3">
          <button className="hidden lg:block bg-slate-900 text-white px-5 py-3 rounded-full text-sm font-medium">
            Admissions Open
          </button>

          <button className="lg:hidden">
            <Menu size={22} />
          </button>
        </div>
      </div>
    </header>
  );
}
