export const schoolData = {
  name: "WestBrook Academy",

  tagline: "Raising Curious Minds For Tomorrow's World",

  description:
    "A nurturing environment where children grow academically, socially, and creatively.",

  phone: "+234 800 000 0000",

  email: "info@futureheightsacademy.com",

  address: "Ibadan, Oyo State",

  whatsapp: "2348000000000",

  
};



// src/data/schoolData.ts
export const programsData = [
  {
    id: 1,
    title: "Early Years Programme",
    category: "early-years",
    grades: "Pre-K to Kindergarten",
    ageGroup: "Ages 2.5 - 5",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop",
    description: "A nurturing, inquiry-based environment where young minds begin their educational journey through play, exploration, and guided discovery.",
    highlights: [
      "Montessori-inspired learning environments",
      "Language immersion program",
      "Social-emotional development focus",
      "Outdoor nature-based learning"
    ]
  },
  {
    id: 2,
    title: "Elementary Programme",
    category: "elementary",
    grades: "Grades 1-5",
    ageGroup: "Ages 6 - 10",
    image: "https://images.unsplash.com/photo-1427500239223-4e4b5687da12?w=800&h=600&fit=crop",
    description: "Building strong foundations in core subjects while encouraging creativity, critical thinking, and collaborative skills.",
    highlights: [
      "STEAM-integrated curriculum",
      "Small class sizes (max 18 students)",
      "Individualized learning paths",
      "Weekly arts and music instruction"
    ]
  },
  {
    id: 3,
    title: "Middle Years Programme",
    category: "middle",
    grades: "Grades 6-8",
    ageGroup: "Ages 11 - 13",
    image: "https://images.unsplash.com/photo-1453738773917-9c3eff1db985?w=800&h=600&fit=crop",
    description: "A challenging interdisciplinary curriculum that connects academic knowledge to real-world applications and personal development.",
    highlights: [
      "Project-based learning approach",
      "Leadership development programs",
      "Competitive athletics and clubs",
      "Adventure-based outdoor education"
    ]
  },
  {
    id: 4,
    title: "High School Programme",
    category: "high",
    grades: "Grades 9-12",
    ageGroup: "Ages 14 - 18",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop",
    description: "College preparatory curriculum with AP courses, independent research opportunities, and comprehensive university counseling.",
    highlights: [
      "15+ AP and honors courses",
      "Global exchange programs",
      "Internship placements",
      "College counseling from Grade 10"
    ]
  },
  {
    id: 5,
    title: "Arts & Innovation Lab",
    category: "elementary",
    grades: "Grades 3-8",
    ageGroup: "Ages 8 - 13",
    image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=800&h=600&fit=crop",
    description: "A creative hub where students explore digital arts, music production, 3D design, and emerging technologies.",
    highlights: [
      "Digital media studio",
      "Music production suite",
      "3D printing and fabrication",
      "Annual student showcase"
    ]
  },
  {
    id: 6,
    title: "Athletics Academy",
    category: "middle",
    grades: "Grades 6-12",
    ageGroup: "Ages 11 - 18",
    image: "https://images.unsplash.com/photo-1574629819364-5e1b5e4e2d5a?w=800&h=600&fit=crop",
    description: "Elite athletic development combining professional coaching with academic excellence and sports science.",
    highlights: [
      "State-of-the-art fitness center",
      "Professional coaching staff",
      "Sports psychology program",
      "College recruitment pathway"
    ]
  }
];

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
