// src/components/sections/About.tsx
'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-28 bg-[#FEFCF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column - Narrative */}
          <div className="space-y-8">
            {/* Label */}
            <div>
              <span className="text-[#B8925C] text-sm tracking-[0.25em] uppercase font-medium">
                Our Story
              </span>
              <div className="w-12 h-px bg-[#B8925C] mt-3" />
            </div>

            {/* Headline */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#2C2418] font-serif font-light tracking-tight leading-[1.2]">
              Education that
              <span className="block font-medium relative mt-2">
                shapes character
                <svg 
                  className={`absolute -bottom-3 left-0 w-full transition-all duration-1000 delay-300 ${
                    isVisible ? 'scale-x-100' : 'scale-x-0'
                  }`}
                  height="3" 
                  viewBox="0 0 300 3" 
                  fill="none"
                  style={{ transformOrigin: 'left' }}
                >
                  <path d="M0 1.5H300" stroke="#B8925C" strokeWidth="2" strokeDasharray="6 6"/>
                </svg>
              </span>
            </h2>

            {/* Description */}
            <div className="space-y-5 text-[#5C5243] leading-relaxed">
              <p className="text-lg">
                For over twelve years, Westbrook Academy has remained steadfast in 
                its belief that genuine education extends beyond test scores and 
                college acceptances.
              </p>
              <p className="text-base">
                Here, students discover not just what to learn, but how to think. 
                Our classrooms hum with questions, not answers. Our hallways echo 
                with conversation, not silence.
              </p>
              <p className="text-base">
                We've designed every corner of this institution—from the seminar 
                tables to the studio spaces—to cultivate one thing: curious, 
                capable human beings ready to engage with a complex world.
              </p>
            </div>

             <div>
              <div className="pt-4">
                <h3 className="text-2xl text-[#2C2418] font-serif mb-4">
                  Our Approach
                </h3>
                <div className="space-y-4">
                  <div className="group">
                    <div className="flex items-baseline gap-4">
                      <span className="text-[#B8925C] text-sm font-medium tracking-wide">01</span>
                      <div className="flex-1">
                        <p className="text-[#2C2418] font-medium mb-1">Inquiry-led learning</p>
                        <p className="text-[#5C5243] text-sm">Questions drive our curriculum, not memorization.</p>
                      </div>
                    </div>
                  </div>
                  <div className="group">
                    <div className="flex items-baseline gap-4">
                      <span className="text-[#B8925C] text-sm font-medium tracking-wide">02</span>
                      <div className="flex-1">
                        <p className="text-[#2C2418] font-medium mb-1">Character development</p>
                        <p className="text-[#5C5243] text-sm">Integrity, empathy, and resilience are taught daily.</p>
                      </div>
                    </div>
                  </div>
                  <div className="group">
                    <div className="flex items-baseline gap-4">
                      <span className="text-[#B8925C] text-sm font-medium tracking-wide">03</span>
                      <div className="flex-1">
                        <p className="text-[#2C2418] font-medium mb-1">Individual attention</p>
                        <p className="text-[#5C5243] text-sm">Every student is known, heard, and guided personally.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Philosophy with Image */}
          <div className="space-y-10">
            {/* Subtle Image - Small and integrated */}
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 border-t border-l border-[#B8925C]/30" />
              <div className="relative aspect-[4/3] overflow-hidden grayscale-[0.15]">
                <Image
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1000&h=800&fit=crop"
                  alt="Students engaged in learning"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  style={{ objectPosition: 'center 30%' }}
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b border-r border-[#B8925C]/30" />
            </div>

            {/* Philosophy Block */}
            <div>
              <div className="pt-8">
                <h3 className="text-2xl text-[#2C2418] font-serif mb-4">
                  Our Philosophy
                </h3>
                <p className="text-[#5C5243] leading-relaxed">
                  We believe the best learning happens when students feel both 
                  supported and challenged—when they're given the freedom to 
                  explore and the structure to grow.
                </p>
              </div>
            </div>

            {/* Approach Block */}
            {/* <div>
              <div className="pt-4">
                <h3 className="text-2xl text-[#2C2418] font-serif mb-4">
                  Our Approach
                </h3>
                <div className="space-y-4">
                  <div className="group">
                    <div className="flex items-baseline gap-4">
                      <span className="text-[#B8925C] text-sm font-medium tracking-wide">01</span>
                      <div className="flex-1">
                        <p className="text-[#2C2418] font-medium mb-1">Inquiry-led learning</p>
                        <p className="text-[#5C5243] text-sm">Questions drive our curriculum, not memorization.</p>
                      </div>
                    </div>
                  </div>
                  <div className="group">
                    <div className="flex items-baseline gap-4">
                      <span className="text-[#B8925C] text-sm font-medium tracking-wide">02</span>
                      <div className="flex-1">
                        <p className="text-[#2C2418] font-medium mb-1">Character development</p>
                        <p className="text-[#5C5243] text-sm">Integrity, empathy, and resilience are taught daily.</p>
                      </div>
                    </div>
                  </div>
                  <div className="group">
                    <div className="flex items-baseline gap-4">
                      <span className="text-[#B8925C] text-sm font-medium tracking-wide">03</span>
                      <div className="flex-1">
                        <p className="text-[#2C2418] font-medium mb-1">Individual attention</p>
                        <p className="text-[#5C5243] text-sm">Every student is known, heard, and guided personally.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

            {/* Quote */}
            <div className="pt-4">
              <blockquote className="text-[#2C2418] text-lg font-serif italic leading-relaxed">
                "The function of education is to teach one to think intensively and to think critically. Intelligence plus character — that is the goal of true education."
              </blockquote>
              <cite className="block mt-3 text-sm text-[#8B7F6E] not-italic tracking-wide">
                — Dr. Martin Luther King Jr.
              </cite>
            </div>
          </div>
        </div>

     
      </div>
    </section>
  );
}