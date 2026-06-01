// src/components/sections/GalleryCard.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
  title: string;
}

interface GalleryCardProps {
  image: GalleryImage;
  onClick: () => void;
  index: number;
}

export const GalleryCard = ({ image, onClick, index }: GalleryCardProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className="group relative overflow-hidden rounded-2xl cursor-pointer opacity-0 animate-fadeInUp"
      style={{ animationDelay: `${index * 0.05}s`, animationFillMode: 'forwards' }}
      onClick={onClick}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-[#F5F0E8]">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className={`object-cover transition-all duration-700 group-hover:scale-105 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoadingComplete={() => setIsLoaded(true)}
        />
        
        {/* Loading Skeleton */}
        {!isLoaded && (
          <div className="absolute inset-0 bg-gradient-to-r from-[#F5F0E8] via-[#EDE8E1] to-[#F5F0E8] animate-pulse" />
        )}
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
        
        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
          <span className="inline-block px-2 py-0.5 bg-[#B8925C]/90 backdrop-blur-sm rounded text-white text-[10px] tracking-wide uppercase mb-2">
            {image.category}
          </span>
          <h3 className="text-white text-lg font-medium tracking-tight">
            {image.title}
          </h3>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.5s cubic-bezier(0.2, 0.9, 0.4, 1.1) forwards;
        }
      `}</style>
    </div>
  );
};