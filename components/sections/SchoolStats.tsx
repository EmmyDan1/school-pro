'use client';

import { useEffect, useState, useRef } from 'react';

interface Stat {
  value: string;
  label: string;
}

const stats: Stat[] = [
  { value: "12+", label: "Years" },
  { value: "20:1", label: "Student Ratio" },
  { value: "100%", label: "Success Rate" },
  { value: "85%", label: "Advanced Faculty" },
];

const StatCard = ({ stat, index }: { stat: Stat; index: number }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const numericValue = parseInt(stat.value);
    if (isNaN(numericValue)) {
      setCount(numericValue);
      return;
    }

    let start = 0;
    const duration = 1500;
    const increment = numericValue / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, stat.value]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl md:text-4xl font-light text-[#1A1A1A] tracking-tight">
        {typeof count === 'number' && !isNaN(count) ? `${count}+` : stat.value}
      </div>
      <div className="mt-1 text-xs text-[#8B7B6B] uppercase tracking-wider">
        {stat.label}
      </div>
    </div>
  );
};

export default function SchoolStats() {
  return (
    <section className="py-16 bg-white border-y border-[#F0EDE8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="opacity-0 animate-fadeInUp"
              style={{ animationDelay: `${idx * 0.1}s`, animationFillMode: 'forwards' }}
            >
              <StatCard stat={stat} index={idx} />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
}