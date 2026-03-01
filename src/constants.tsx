
import React from 'react';
import { CurriculumItem, Review, GalleryItem, ScheduleSlot, HeroContent, StaticImages, SocialLinks, ContactInfo } from './types';
import { Heart, Smile, Sparkles } from 'lucide-react';

export const COLORS = {
  primary: '#4ECDC4',
  secondary: '#FFD93D',
  background: '#F8FDFA',
};

export const DEFAULT_CONTACT_INFO: ContactInfo = {
  phone: '010-0000-0000',
  address: '경상북도 예천군 호명읍 (경북도청신도시)',
  kakaoId: '@앙파티미술학원'
};

export const DEFAULT_SOCIAL_LINKS: SocialLinks = {
  instagram: 'https://www.instagram.com/empathie_atelier/',
  blog: 'https://blog.naver.com/empathie_art',
  kakao: 'http://pf.kakao.com/_xolIqn',
};

export const NAV_LINKS = [
  { name: '홈', path: '/' },
  { name: '아뜰리에 클래스', path: '/curriculum' },
  { name: '수업 시간표', path: '/schedule' },
  { name: '앙파티 이야기', path: '/about' },
  { name: '문의하기', path: '/contact' },
];

export const DEFAULT_HERO_CONTENT: HeroContent = {
  titlePrefix: "마음을 그리는",
  titleHighlight: "앙파티 아뜰리에",
  subtitle: "아이들의 상상력이 자라나는 행복한 미술 공간.\n경북도청신도시 유초등 감성 미술, 앙파티입니다.",
  tag: "EMPATHIE ART STUDIO",
  image: "https://images.unsplash.com/photo-1544869811-3964959141f2?q=80&w=2163&auto=format&fit=crop", 
  floatingBadge: {
    year: "SINCE 2024",
    text: "원장 직강 아뜰리에"
  }
};

export const DEFAULT_CURRICULUM_DATA: CurriculumItem[] = [
  {
    id: 'c1',
    title: '감성 톡톡 유치부',
    age: '5 - 7세',
    description: '마음껏 표현하고 즐겁게 소통하는 감성 미술',
    details: ['동화책 연계 스토리텔링 미술', '다양한 재료 탐색 및 오감 발달', '자유로운 드로잉과 색채 놀이'],
    imageUrl: 'https://images.unsplash.com/photo-1596464716127-f9a8759fa699?q=80&w=2070&auto=format&fit=crop',
    color: 'bg-yellow-100',
    quote: "이 시기의 아이들은 재료를 직접 만지고 느끼는 과정에서 가장 많은 영감을 얻습니다. 앙파티는 아이들의 작은 손짓 하나에도 의미를 부여합니다."
  },
  {
    id: 'c2',
    title: '창의 쑥쑥 초등부',
    age: '8 - 13세',
    description: '나만의 생각을 시각 언어로 표현하는 작가 수업',
    details: ['기초 조형 원리와 기법 습득', '프로젝트형 주제 탐구 및 표현', '명화 재해석 및 입체 조형'],
    imageUrl: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2071&auto=format&fit=crop',
    color: 'bg-teal-50',
    quote: "단순히 잘 그리는 기술보다, 내 생각을 시각적으로 구체화하는 기획력과 표현력을 기르는 것이 중요합니다."
  },
  {
    id: 'c3',
    title: '원데이 / 특강 클래스',
    age: '전연령',
    description: '특별한 날, 특별한 재료로 만나는 예술 체험',
    details: ['시즌별 테마 크래프트', '부모님과 함께하는 미술 놀이', '도예 및 쿠킹 아트 융합'],
    imageUrl: 'https://images.unsplash.com/photo-1544869811-3964959141f2?q=80&w=2163&auto=format&fit=crop',
    color: 'bg-pink-100',
    quote: "일상에서 벗어나 예술로 힐링하는 시간. 특별한 날, 앙파티에서 잊지 못할 추억을 만들어보세요."
  },
];

export const DEFAULT_STATIC_IMAGES: StaticImages = {
  aboutHero: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?q=80&w=1972&auto=format&fit=crop",
  director: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1974&auto=format&fit=crop",
  studio: [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2071&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1502691876148-a84978e59af8?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1596464716127-f9a8759fa699?q=80&w=2070&auto=format&fit=crop",
  ],
  mapPlaceholder: "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?q=80&w=2831&auto=format&fit=crop"
};

export const DEFAULT_REVIEWS: Review[] = [
  {
    id: 'r1',
    parentName: '서윤맘',
    childInfo: '6세',
    content: '선생님이 아이의 이야기를 정말 잘 들어주세요. 단순히 그림을 그리는 게 아니라 아이의 마음을 읽어주시는 느낌이라 보낼 때마다 마음이 놓입니다.',
    rating: 5,
  },
  {
    id: 'r2',
    parentName: '준우파파',
    childInfo: '초등 2학년',
    content: '미술 학원 가기 싫어하던 아이가 앙파티 다니고부터는 학원 가는 날만 기다려요. 정형화된 그림이 아니라 자기 생각을 표현하게 해주셔서 좋아요.',
    rating: 5,
  },
  {
    id: 'r3',
    parentName: '민지맘',
    childInfo: '7세',
    content: '민트색 예쁜 공간에서 아이가 힐링하고 오는 것 같아요. 원장님 직강이라 더 믿음이 가고, 아이들 케어가 정말 세심하십니다.',
    rating: 5,
  },
];

export const DEFAULT_GALLERY_ITEMS: GalleryItem[] = [
  { id: 'g1', title: '행복한 우리집', author: '김민준 (7세)', imageUrl: 'https://images.unsplash.com/photo-1629837583648-93d399990142?q=80&w=2072&auto=format&fit=crop' },
  { id: 'g2', title: '꿈꾸는 고래', author: '이서아 (9세)', imageUrl: 'https://images.unsplash.com/photo-1596956693994-0b82df232c45?q=80&w=2028&auto=format&fit=crop' },
  { id: 'g3', title: '숲속 친구들', author: '박도윤 (6세)', imageUrl: 'https://images.unsplash.com/photo-1533687325492-f046b0b30129?q=80&w=2070&auto=format&fit=crop' },
  { id: 'g4', title: '내가 만든 로봇', author: '최지호 (8세)', imageUrl: 'https://images.unsplash.com/photo-1616429532585-1d4889c28994?q=80&w=2070&auto=format&fit=crop' },
  { id: 'g5', title: '무지개 케이크', author: '정하은 (5세)', imageUrl: 'https://images.unsplash.com/photo-1515965885000-31802497bd49?q=80&w=2070&auto=format&fit=crop' },
  { id: 'g6', title: '밤하늘 여행', author: '강수민 (10세)', imageUrl: 'https://images.unsplash.com/photo-1502691876148-a84978e59af8?q=80&w=2070&auto=format&fit=crop' },
];

export const DEFAULT_SCHEDULE_DATA: ScheduleSlot[] = [
  { time: '13:30 - 15:00', mon: '유치부', tue: '초등부', wed: '유치부', thu: '초등부', fri: '유치부', sat: '-' },
  { time: '15:00 - 16:30', mon: '초등부', tue: '유치부', wed: '초등부', thu: '유치부', fri: '초등부', sat: '원데이' },
  { time: '16:30 - 18:00', mon: '유치부', tue: '초등부', wed: '유치부', thu: '초등부', fri: '유치부', sat: '클래스' },
];

export const PHILOSOPHY = [
  {
    icon: <Heart className="w-8 h-8 text-primary" />,
    title: 'Empathy (공감)',
    desc: '아이의 시선과 마음에 공감하며, 정서적 안정을 돕는 따뜻한 교육을 지향합니다.',
  },
  {
    icon: <Sparkles className="w-8 h-8 text-secondary" />,
    title: 'Creativity (창의)',
    desc: '정해진 답이 아닌, 나만의 생각과 이야기를 자유롭게 펼치는 힘을 기릅니다.',
  },
  {
    icon: <Smile className="w-8 h-8 text-accent" />,
    title: 'Joy (즐거움)',
    desc: '앙파티(Enfant + Party)라는 이름처럼, 미술이 즐거운 놀이가 되는 행복한 공간입니다.',
  },
];
