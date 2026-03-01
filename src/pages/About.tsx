
import React from 'react';
import { Palette, Heart, Sparkles, Quote, PenTool } from 'lucide-react';
import { useData } from '../contexts/DataContext';

const About: React.FC = () => {
  const { staticImages } = useData();

  return (
    <div className="pt-20">
      {/* Brand Story Header */}
      <section className="relative h-[60vh] flex items-center justify-center bg-primary/5">
        <img 
          src={staticImages.aboutHero}
          alt="Art Studio Background"
          className="absolute inset-0 w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-primary font-bold tracking-widest text-sm mb-4 block">ENFARTY STORY</span>
          <h1 className="text-4xl md:text-6xl font-bold font-creative mb-8 text-gray-800 leading-tight">
            마음을 읽고<br />
            <span className="text-primary">생각을 그리는</span><br />
            행복한 아뜰리에
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            앙파티(Enfant + Party)는 아이들이 즐겁게 파티하듯<br />
            자유롭게 예술을 즐기는 공간입니다.
          </p>
        </div>
      </section>

      {/* Empathie Philosophy */}
      <section className="py-24 bg-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 text-center">
            <div className="relative">
              <Quote className="w-12 h-12 text-primary/30 mx-auto mb-6" />
              <h2 className="text-3xl font-bold font-creative text-gray-800 mb-8">
                "Empathie Art : 공감 미술"
              </h2>
              <div className="space-y-8 text-gray-600 leading-relaxed text-lg break-keep">
                <p>
                  그림을 잘 그리는 기술보다 중요한 것은,<br />
                  <b>내 마음을 솔직하게 들여다보고 표현하는 힘</b>입니다.
                </p>
                <p>
                  앙파티 아뜰리에는 결과물만을 위한 주입식 교육이 아닌,<br />
                  아이와 교감하며 정서적 안정을 돕는 <b>'공감 미술'</b>을 지향합니다.
                </p>
                <p>
                  선생님과 끊임없이 이야기 나누며 주제를 정하고,<br />
                  스스로 재료를 선택하며 문제를 해결해 나가는 과정 속에서<br />
                  아이들의 자존감과 창의력은 자연스럽게 자라납니다.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="p-6 bg-[#FDFBF7] rounded-2xl border border-[#F0EBE0]">
                <Heart className="w-8 h-8 text-accent mx-auto mb-4" />
                <h3 className="font-bold text-gray-800 mb-2">정서 케어</h3>
                <p className="text-sm text-gray-500">마음을 읽어주는 따뜻한 소통</p>
              </div>
              <div className="p-6 bg-[#F0FCFA] rounded-2xl border border-[#E0F5F2]">
                <Palette className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-gray-800 mb-2">맞춤 교육</h3>
                <p className="text-sm text-gray-500">아이 성향별 1:1 맞춤 지도</p>
              </div>
              <div className="p-6 bg-[#FEF9E6] rounded-2xl border border-[#F9F0CC]">
                <Sparkles className="w-8 h-8 text-secondary mx-auto mb-4" />
                <h3 className="font-bold text-gray-800 mb-2">창의 발달</h3>
                <p className="text-sm text-gray-500">다양한 재료와 기법 탐구</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Director Profile - Single Director */}
      <section className="py-24 bg-canvas">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-xl border border-gray-100 flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-[2rem] transform rotate-3 translate-x-2 translate-y-2"></div>
                <img 
                  src={staticImages.director}
                  alt="Director" 
                  className="relative rounded-[2rem] w-full h-[400px] object-cover shadow-lg bg-gray-100"
                />
              </div>
            </div>
            
            <div className="w-full md:w-1/2 space-y-6">
               <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-bold rounded-full text-sm mb-2">
                 DIRECTOR
               </div>
               <h2 className="text-4xl font-bold font-creative text-gray-800">
                 대표원장 <span className="text-primary">인사말</span>
               </h2>
               <div className="space-y-4 text-gray-600 leading-relaxed">
                 <p className="font-medium text-lg text-gray-800">
                   "아이들의 작은 생각 하나하나가<br />멋진 작품이 되는 곳입니다."
                 </p>
                 <p>
                   안녕하세요, 앙파티 아뜰리에 대표원장입니다.
                   미술은 아이들이 세상을 표현하는 가장 순수한 언어입니다.
                 </p>
                 <p>
                   오랜 기간 아이들을 지도하며 느낀 점은, 
                   '잘 그린 그림'보다 '즐겁게 그린 그림'이 아이를 성장시킨다는 것입니다.
                 </p>
                 <p>
                   저희 아뜰리에는 소수 정예 원장 직강을 원칙으로 하여,
                   우리 아이들이 안전하고 쾌적한 환경에서 
                   자신의 잠재력을 마음껏 펼칠 수 있도록 지도하겠습니다.
                 </p>
               </div>
               
               <div className="pt-6 border-t border-gray-100 mt-6">
                 <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                   <PenTool className="w-4 h-4 mr-2 text-primary" /> Profile
                 </h4>
                 <ul className="text-sm text-gray-500 space-y-2">
                   <li>• 미술대학 회화과 졸업</li>
                   <li>• 아동 미술 심리 상담사 1급</li>
                   <li>• 문화예술교육사 자격 보유</li>
                   <li>• 전) 대형 미술학원 전임 강사</li>
                 </ul>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Studio Photos */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-primary font-bold text-lg">STUDIO</h2>
            <h3 className="text-3xl font-bold font-creative text-gray-800">앙파티 공간 미리보기</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
             {/* Using different sized placeholders to create a masonry-like feel */}
             <div className="col-span-2 row-span-2 rounded-3xl overflow-hidden shadow-md h-96">
               <img src={staticImages.studio[0]} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt="Studio Main" />
             </div>
             <div className="rounded-3xl overflow-hidden shadow-md h-44">
               <img src={staticImages.studio[1]} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt="Art Materials" />
             </div>
             <div className="rounded-3xl overflow-hidden shadow-md h-44">
               <img src={staticImages.studio[2]} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt="Kids Drawing" />
             </div>
             <div className="col-span-2 rounded-3xl overflow-hidden shadow-md h-48">
               <img src={staticImages.studio[3]} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt="Class Activity" />
             </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-500 text-sm">
              * 경북도청신도시 호명읍에 위치한 쾌적하고 감성적인 미술 공간입니다.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
