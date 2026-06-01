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
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=1000&fit=crop",
    alt: "Students in classroom",
    category: "Academics",
    title: "Collaborative Learning"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&h=1000&fit=crop",
    alt: "Science lab",
    category: "Academics",
    title: "Hands-on Science"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1527525443983-6e60c75fff46?w=800&h=600&fit=crop",
    alt: "Sports field",
    category: "Athletics",
    title: "Team Spirit"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&h=600&fit=crop",
    alt: "Art class",
    category: "Arts",
    title: "Creative Expression"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=1000&fit=crop",
    alt: "Graduation ceremony",
    category: "Events",
    title: "Commencement"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1427500239223-4e4b5687da12?w=800&h=600&fit=crop",
    alt: "Library",
    category: "Campus",
    title: "Quiet Study"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1574629819364-5e1b5e4e2d5a?w=800&h=1000&fit=crop",
    alt: "Basketball game",
    category: "Athletics",
    title: "Game Day"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=800&h=600&fit=crop",
    alt: "Music performance",
    category: "Arts",
    title: "Spring Concert"
  }
];

export const categories: string[] = ["All", "Academics", "Athletics", "Arts", "Events", "Campus"];