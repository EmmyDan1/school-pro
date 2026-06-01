// src/data/galleryData.ts
export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
  title: string;
}

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop",
    alt: "Young students engaged in classroom learning",
    category: "Academics",
    title: "Active Learning"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&h=600&fit=crop",
    alt: "Children raising hands in class",
    category: "Academics",
    title: "Classroom Participation"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1526676032744-f0c4f1b978fd?w=800&h=600&fit=crop",
    alt: "Kids running and playing outside",
    category: "Athletics",
    title: "Outdoor Play"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1453738773917-9c3eff1db985?w=800&h=600&fit=crop",
    alt: "Children doing art project",
    category: "Arts",
    title: "Creative Expression"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=800&h=600&fit=crop",
    alt: "Students reading in library",
    category: "Academics",
    title: "Quiet Reading"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&h=600&fit=crop",
    alt: "Kids painting in art class",
    category: "Arts",
    title: "Art Studio"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1574629819364-5e1b5e4e2d5a?w=800&h=600&fit=crop",
    alt: "Students playing basketball",
    category: "Athletics",
    title: "Team Sports"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1599058917765-a3a3bff8e2e9?w=800&h=600&fit=crop",
    alt: "Diverse group of students",
    category: "Campus",
    title: "Our Community"
  }
];

export const categories: string[] = ["All", "Academics", "Athletics", "Arts", "Campus"];