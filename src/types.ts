
export interface CurriculumItem {
  id: string;
  title: string;
  age: string;
  description: string;
  details: string[];
  imageUrl: string;
  color: string;
  quote?: string;
}

export interface Review {
  id: string;
  parentName: string;
  childInfo: string;
  content: string;
  rating: number;
}

export interface GalleryItem {
  id: string;
  title: string;
  author: string;
  imageUrl: string;
}

export interface ScheduleSlot {
  time: string;
  mon: string;
  tue: string;
  wed: string;
  thu: string;
  fri: string;
  sat: string;
}

export interface HeroContent {
  titlePrefix: string;
  titleHighlight: string;
  subtitle: string;
  tag: string;
  image: string;
  floatingBadge: {
    year: string;
    text: string;
  };
}

export interface StaticImages {
  aboutHero: string;
  director: string;
  studio: string[];
  mapPlaceholder: string;
}

export interface SocialLinks {
  instagram: string;
  blog: string;
  kakao: string;
}

export interface ContactInfo {
  phone: string;
  address: string;
  kakaoId: string;
}
