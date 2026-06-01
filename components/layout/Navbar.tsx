// src/components/layout/Navbar.tsx
"use client";

import { useEffect, useState } from "react";
import { schoolData } from "@/data/schoolData";
import { X } from "lucide-react";

const links = [
  { label: "Programs", href: "#programs" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Admissions", href: "#admissions" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-[#FEFCF8]/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 lg:h-20 flex items-center justify-between">
          {/* LOGO */}
          <div className="relative flex items-center gap-3">
            <div className="relative ">
              <div className={`absolute inset-0 rounded-xl transition-colors duration-300 ${
                scrolled ? "bg-[#2C2418]" : "bg-white/20 backdrop-blur-sm"
              }`} />
              <div className="absolute top-1/2 left-1/2 mt-2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-10 h-10 ml-8  lg:w-10 lg:10 lg:ml-0 bg-[#B8925C] rounded-full" />
                
                <div className="w-4 h-4 lg:w-2 lg:h-2 bg-[#B8925C] mt- rounded-full absolute -top-1 -right-1" />
              </div>
            </div>

            <div className="ml-10 sm:block lg:ml-6">
              <h2 className={`font-serif text-base lg:text-lg tracking-tight transition-colors duration-300 ${
                scrolled ? "text-[#2C2418]" : "text-orange-100"
              }`}>
                {schoolData.name}
              </h2>
              <p className={`text-[10px] tracking-wide transition-colors duration-300 ${
                scrolled ? "text-[#8B7F6E]" : "text-white/60"
              }`}>
                Learn • Grow • Succeed
              </p>
            </div>
          </div>

          {/* DESKTOP LINKS */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm tracking-wide transition-all duration-300 hover:text-[#B8925C] ${
                  scrolled ? "text-[#2C2418]" : "text-white/90"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA + MOBILE BUTTON */}
          <div className="flex items-center gap-3">
            <button className={`hidden lg:block px-6 py-2.5 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${
              scrolled 
                ? "bg-[#2C2418] text-white hover:bg-[#B8925C]" 
                : "bg-white/10 backdrop-blur-sm text-white hover:bg-white/20"
            }`}>
              Admissions Open
            </button>

            {/* Modern Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 group"
              aria-label="Open menu"
            >
              <span className={`w-5 h-px transition-all duration-300 ${
                scrolled ? "bg-[#2C2418]" : "bg-white"
              }`} />
              <span className={`w-5 h-px transition-all duration-300 ${
                scrolled ? "bg-[#2C2418]" : "bg-white"
              }`} />
              <span className={`w-3 h-px transition-all duration-300 ${
                scrolled ? "bg-[#2C2418]" : "bg-white"
              }`} />
            </button>
          </div>
        </div>
      </header>

      {/* PREMIUM MOBILE MENU OVERLAY */}
      <div
        className={`fixed inset-0 z-[100] bg-[#1A1612] transition-all duration-500 ease-out ${
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setMobileMenuOpen(false)}
          className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center text-white/60 hover:text-white transition-colors"
          aria-label="Close menu"
        >
          <X size={24} />
        </button>

        {/* Menu Content */}
        <div className="flex flex-col items-center justify-center min-h-screen px-8 py-20">
          {/* Logo - Centered */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <div className="relative w-12 h-12">
                <div className="absolute inset-0 rounded-xl bg-white/10" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-4 h-4 bg-[#B8925C] rounded-full" />
                  <div className="w-2 h-2 bg-[#B8925C]/60 rounded-full absolute -top-1 -right-1" />
                </div>
              </div>
            </div>
            <h3 className="text-white text-2xl font-serif font-light tracking-tight">
              {schoolData.name}
            </h3>
            <div className="w-12 h-px bg-[#B8925C]/40 mx-auto mt-4" />
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col items-center gap-8 mb-16">
            {links.map((link, idx) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleLinkClick(link.href)}
                className="group relative text-white/70 hover:text-white transition-colors"
                style={{
                  animation: mobileMenuOpen ? `slideUp 0.5s ease-out ${idx * 0.05}s forwards` : "none",
                  opacity: 0,
                  transform: "translateY(20px)",
                }}
              >
                <span className="text-2xl font-light tracking-wide">
                  {link.label}
                </span>
                <span className="absolute -bottom-2 left-0 w-0 h-px bg-[#B8925C] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <button
            onClick={() => handleLinkClick("#admissions")}
            className="px-8 py-3.5 bg-[#B8925C] text-white rounded-full text-sm font-medium tracking-wide hover:bg-[#9A7B4C] transition-all duration-300 transform hover:scale-105"
            style={{
              animation: mobileMenuOpen ? `slideUp 0.5s ease-out 0.25s forwards` : "none",
              opacity: 0,
              transform: "translateY(20px)",
            }}
          >
            Begin Application
          </button>

          {/* Footer Info */}
          <div
            className="absolute bottom-8 left-0 right-0 text-center"
            style={{
              animation: mobileMenuOpen ? `fadeIn 0.5s ease-out 0.4s forwards` : "none",
              opacity: 0,
            }}
          >
            <p className="text-white/30 text-xs tracking-wide">
              {schoolData.address || "123 Academy Lane"}
            </p>
            <p className="text-white/20 text-[10px] tracking-wide mt-2">
              © {new Date().getFullYear()} {schoolData.name}
            </p>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}