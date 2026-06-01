// src/components/sections/Testimonials.tsx
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  childGrade: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "What struck us most wasn't the curriculum or facilities—it was how our daughter came home every day excited to share what she'd discovered. That curiosity is priceless.",
    name: "Sarah & Michael Chen",
    role: "Parents of Maya, Grade 4",
    childGrade: "Joined in Kindergarten",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop"
  },
  {
    id: 2,
    quote: "The teachers here don't just teach subjects. They know our son—his strengths, his struggles, his sense of humor. That level of attention changes everything.",
    name: "David Rodriguez",
    role: "Parent of Lucas, Grade 7",
    childGrade: "Third year at Westbrook",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop"
  },
  {
    id: 3,
    quote: "We transferred mid-year, worried about the transition. Within a week, our daughter had found her people. The community here wraps around you.",
    name: "Jennifer Whitmore",
    role: "Parent of Sophie, Grade 10",
    childGrade: "Transferred Fall 2023",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop"
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial();
    }, 8000);
    return () => clearInterval(timer);
  }, [activeIndex]);

  const current = testimonials[activeIndex];

  return (
    <section className="py-28 bg-[#2C2418]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Minimal, no decorative clutter */}
        <div className="text-center mb-16">
          <span className="text-[#B8925C] text-sm tracking-[0.25em] uppercase font-medium">
            Voices
          </span>
          <h2 className="text-3xl md:text-4xl text-white font-serif font-light tracking-tight mt-3">
            From families who trust us
          </h2>
        </div>

        {/* Main Testimonial */}
        <div className="relative">
          {/* Quote Mark - Subtle, not decorative */}
          <div className="absolute -top-8 left-0 text-[#B8925C]/10 text-8xl font-serif select-none">
            "
          </div>

          <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
            {/* Quote */}
            <blockquote className="text-white text-xl md:text-2xl leading-relaxed font-light text-center max-w-3xl mx-auto px-4">
              "{current.quote}"
            </blockquote>

            {/* Author */}
            <div className="text-center mt-10">
              <div className="inline-flex flex-col items-center">
                {/* Name */}
                <p className="text-white font-medium text-base">
                  {current.name}
                </p>
                {/* Role and Context - Single line, no extra badges */}
                <p className="text-[#8B7F6E] text-sm mt-1">
                  {current.role} · {current.childGrade}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation - Minimal dots */}
          <div className="flex justify-center gap-2 mt-12">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  if (idx === activeIndex) return;
                  setIsAnimating(true);
                  setActiveIndex(idx);
                  setTimeout(() => setIsAnimating(false), 500);
                }}
                className={`transition-all duration-300 ${
                  idx === activeIndex 
                    ? 'w-8 h-px bg-[#B8925C]' 
                    : 'w-4 h-px bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* No CTAs, no extra elements - Just the voices */}
      </div>
    </section>
  );
}