// src/components/sections/CTA.tsx
'use client';

import { useState } from 'react';

export default function CTA() {
  const [isHovered, setIsHovered] = useState(false);
  const [isSecondaryHovered, setIsSecondaryHovered] = useState(false);

  return (
    <section className="relative py-32 bg-[#FEFCF8] overflow-hidden">
      {/* Single subtle line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B8925C]/20 to-transparent" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Admission-focused header */}
        <div className="space-y-6">
          <span className="text-[#B8925C] text-sm tracking-[0.25em] uppercase font-medium block">
            Admissions
          </span>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#2C2418] font-serif font-light tracking-tight">
            Your family's journey
            <span className="block font-medium mt-2">begins here</span>
          </h2>
          
          <p className="text-[#5C5243] text-lg max-w-2xl mx-auto leading-relaxed">
            We're now accepting applications for the upcoming academic year. 
            Limited spaces available across all grade levels.
          </p>
        </div>

        {/* Admission Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          {/* Primary - Apply */}
          <button 
            className="group relative px-8 py-3.5 bg-[#2C2418] text-white overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span className="relative z-10 text-sm tracking-wide font-medium">
              Apply for admission
            </span>
            <span 
              className="absolute inset-0 bg-[#B8925C] transition-transform duration-500 ease-out"
              style={{ transform: isHovered ? 'translateX(0)' : 'translateX(-100%)' }}
            />
          </button>
          
          {/* Secondary - Tour */}
          <button 
            className="group px-8 py-3.5 border border-[#2C2418]/20 hover:border-[#2C2418] transition-all duration-300"
            onMouseEnter={() => setIsSecondaryHovered(true)}
            onMouseLeave={() => setIsSecondaryHovered(false)}
          >
            <span className="text-sm tracking-wide font-medium text-[#2C2418]">
              Schedule a tour
            </span>
          </button>
        </div>

        {/* Deadlines and details - Clean, no badges */}
        <div className="mt-10 space-y-2">
          <p className="text-[#8B7F6E] text-sm tracking-wide">
            Priority deadline: December 15
          </p>
          <p className="text-[#8B7F6E] text-xs">
            Financial aid available for qualified families
          </p>
        </div>
      </div>

      {/* Single subtle line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B8925C]/20 to-transparent" />
    </section>
  );
}