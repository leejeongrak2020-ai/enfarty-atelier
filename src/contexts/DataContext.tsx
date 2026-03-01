
import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  DEFAULT_HERO_CONTENT,
  DEFAULT_CURRICULUM_DATA,
  DEFAULT_REVIEWS,
  DEFAULT_GALLERY_ITEMS,
  DEFAULT_SCHEDULE_DATA,
  DEFAULT_STATIC_IMAGES,
  DEFAULT_SOCIAL_LINKS,
  DEFAULT_CONTACT_INFO
} from '../constants';
import { HeroContent, CurriculumItem, Review, GalleryItem, ScheduleSlot, StaticImages, SocialLinks, ContactInfo } from '../types';

interface DataContextType {
  heroContent: HeroContent;
  setHeroContent: (data: HeroContent) => void;
  curriculumData: CurriculumItem[];
  setCurriculumData: (data: CurriculumItem[]) => void;
  reviews: Review[];
  setReviews: (data: Review[]) => void;
  galleryItems: GalleryItem[];
  setGalleryItems: (data: GalleryItem[]) => void;
  scheduleData: ScheduleSlot[];
  setScheduleData: (data: ScheduleSlot[]) => void;
  staticImages: StaticImages;
  setStaticImages: (data: StaticImages) => void;
  socialLinks: SocialLinks;
  setSocialLinks: (data: SocialLinks) => void;
  contactInfo: ContactInfo;
  setContactInfo: (data: ContactInfo) => void;
  resetToDefaults: () => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [heroContent, setHeroContentState] = useState<HeroContent>(DEFAULT_HERO_CONTENT);
  const [curriculumData, setCurriculumDataState] = useState<CurriculumItem[]>(DEFAULT_CURRICULUM_DATA);
  const [reviews, setReviewsState] = useState<Review[]>(DEFAULT_REVIEWS);
  const [galleryItems, setGalleryItemsState] = useState<GalleryItem[]>(DEFAULT_GALLERY_ITEMS);
  const [scheduleData, setScheduleDataState] = useState<ScheduleSlot[]>(DEFAULT_SCHEDULE_DATA);
  const [staticImages, setStaticImagesState] = useState<StaticImages>(DEFAULT_STATIC_IMAGES);
  const [socialLinks, setSocialLinksState] = useState<SocialLinks>(DEFAULT_SOCIAL_LINKS);
  const [contactInfo, setContactInfoState] = useState<ContactInfo>(DEFAULT_CONTACT_INFO);

  // Initialize from localStorage
  useEffect(() => {
    const load = (key: string, setter: any, def: any) => {
      const saved = localStorage.getItem(`enfarty_${key}`);
      if (saved) setter(JSON.parse(saved));
    };

    load('hero', setHeroContentState, DEFAULT_HERO_CONTENT);
    load('curriculum', setCurriculumDataState, DEFAULT_CURRICULUM_DATA);
    load('reviews', setReviewsState, DEFAULT_REVIEWS);
    load('gallery', setGalleryItemsState, DEFAULT_GALLERY_ITEMS);
    load('schedule', setScheduleDataState, DEFAULT_SCHEDULE_DATA);
    load('images', setStaticImagesState, DEFAULT_STATIC_IMAGES);
    load('social', setSocialLinksState, DEFAULT_SOCIAL_LINKS);
    load('contact', setContactInfoState, DEFAULT_CONTACT_INFO);
  }, []);

  // Wrappers to save to localStorage
  const createSetter = (key: string, setter: any) => (data: any) => {
    setter(data);
    localStorage.setItem(`enfarty_${key}`, JSON.stringify(data));
  };

  const resetToDefaults = () => {
    if (window.confirm("모든 데이터가 초기화됩니다. 계속하시겠습니까?")) {
      localStorage.clear();
      window.location.reload();
    }
  };

  return (
    <DataContext.Provider
      value={{
        heroContent, setHeroContent: createSetter('hero', setHeroContentState),
        curriculumData, setCurriculumData: createSetter('curriculum', setCurriculumDataState),
        reviews, setReviews: createSetter('reviews', setReviewsState),
        galleryItems, setGalleryItems: createSetter('gallery', setGalleryItemsState),
        scheduleData, setScheduleData: createSetter('schedule', setScheduleDataState),
        staticImages, setStaticImages: createSetter('images', setStaticImagesState),
        socialLinks, setSocialLinks: createSetter('social', setSocialLinksState),
        contactInfo, setContactInfo: createSetter('contact', setContactInfoState),
        resetToDefaults
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) throw new Error("useData must be used within a DataProvider");
  return context;
};
