// src/components/sections/Gallery.tsx
'use client';

import { useState, useRef } from 'react';
import { GalleryLightbox } from './GalleryLightBox';
import { GalleryCard } from './GalleryCard';
import { galleryImages, categories, GalleryImage } from '@/data/galleryData';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const filteredImages = activeCategory === "All"
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <section ref={sectionRef} className="py-24 bg-white" id='gallery'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-[#B8925C] text-sm tracking-[0.2em] uppercase font-medium mb-2 block">
            Campus Life
          </span>
          <h2 className="text-4xl md:text-5xl text-[#2C2418] font-serif font-light tracking-tight">
            Moments That Matter
          </h2>
          <div className="w-16 h-px bg-[#B8925C] mx-auto mt-6 mb-6" />
          <p className="max-w-2xl mx-auto text-[#5C5243] text-lg leading-relaxed">
            A glimpse into daily life, special moments, and the vibrant community 
            that makes our school unique.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-[#2C2418] text-white'
                  : 'bg-[#F5F0E8] text-[#5C5243] hover:bg-[#EDE8E1]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 auto-rows-min">
          {filteredImages.map((image, idx) => (
            <GalleryCard
              key={image.id}
              image={image}
              onClick={() => setSelectedImage(image)}
              index={idx}
            />
          ))}
        </div>

        {/* View More Button */}
        {filteredImages.length === galleryImages.length && (
          <div className="text-center mt-12">
            <button className="group inline-flex items-center gap-2 px-6 py-3 border border-[#2C2418] rounded-full hover:bg-[#2C2418] transition-all duration-300">
              <span className="text-sm font-medium text-[#2C2418] group-hover:text-white transition-colors">
                View Full Gallery
              </span>
              <svg 
                className="w-4 h-4 text-[#2C2418] group-hover:text-white group-hover:translate-x-1 transition-all" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <GalleryLightbox image={selectedImage} onClose={() => setSelectedImage(null)} />
    </section>
  );
}