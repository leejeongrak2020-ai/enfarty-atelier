
import React from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../contexts/DataContext';
import { PHILOSOPHY } from '../constants'; // Philosophy is static logic, so keep it
import { ChevronRight, Star, Quote, Palette, Sparkles, MessageCircle } from 'lucide-react';

const Main: React.FC = () => {
  const { heroContent, curriculumData, galleryItems, reviews, socialLinks } = useData();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden bg-[#F0FDF9]">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl animate-float opacity-70" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-secondary/20 rounded-full blur-3xl animate-float opacity-70" style={{ animationDelay: '2s' }} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <span className="inline-block px-4 py-2 bg-white text-primary rounded-full text-sm font-bold tracking-wider shadow-sm border border-primary/20">
              {heroContent.tag}
            </span>
            <h1 className="text-5xl md:text-7xl font-bold font-creative leading-tight text-gray-800">
              {heroContent.titlePrefix}<br />
              <span className="text-primary relative inline-block">
                {heroContent.titleHighlight}
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-secondary -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" opacity="0.6" />
                </svg>
              </span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-lg mx-auto md:mx-0 whitespace-pre-line">
              {heroContent.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              <Link 
                to="/contact" 
                className="bg-primary hover:bg-primaryDark text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-xl shadow-primary/30 text-center"
              >
                상담 예약하기
              </Link>
              <a 
                href={socialLinks.instagram}
                target="_blank"
                rel="noreferrer"
                className="bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 px-8 py-4 rounded-full font-bold text-lg transition-all text-center flex items-center justify-center gap-2"
              >
                인스타그램 구경하기
              </a>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src={heroContent.image}
                alt="Enfarty Main Hero" 
                className="w-full aspect-[4/3] object-cover" 
              />
            </div>
            {/* Floating Element */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-lg animate-bounce z-20 hidden md:block">
              <div className="flex items-center gap-2">
                <Palette className="text-secondary w-8 h-8" />
                <div>
                  <p className="text-xs text-gray-400 font-bold">{heroContent.floatingBadge.year}</p>
                  <p className="font-bold text-gray-800">{heroContent.floatingBadge.text}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-primary font-bold text-lg">PHILOSOPHY</h2>
            <h3 className="text-3xl md:text-4xl font-bold font-creative text-gray-800">
              공감(Empathie)이 있는 미술 교육
            </h3>
            <p className="text-gray-500 max-w-2xl mx-auto">
              잘 그리는 기술보다, 마음을 표현하는 즐거움을 가르칩니다.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PHILOSOPHY.map((item, idx) => (
              <div 
                key={idx} 
                className="p-10 rounded-3xl bg-canvas border border-gray-100 hover:shadow-xl transition-all duration-300 group text-center"
              >
                <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center shadow-md mb-6 mx-auto group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-4">{item.title}</h4>
                <p className="text-gray-500 leading-relaxed word-keep-all">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Preview */}
      <section className="py-24 bg-gradient-to-b from-white to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="space-y-4">
              <h2 className="text-primary font-bold text-lg">CLASS</h2>
              <h3 className="text-3xl md:text-4xl font-bold font-creative text-gray-800">
                앙파티 <span className="underline decoration-secondary/50 decoration-4">아뜰리에 클래스</span>
              </h3>
            </div>
            <Link to="/curriculum" className="flex items-center text-gray-600 font-bold hover:text-primary group bg-white px-6 py-3 rounded-full shadow-sm">
              전체 프로그램 보기 <ChevronRight className="ml-1 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {curriculumData.map((item) => (
              <div key={item.id} className="bg-white rounded-[2.5rem] overflow-hidden shadow-lg border border-gray-100 group hover:-translate-y-2 transition-transform duration-300">
                <div className="h-56 overflow-hidden relative">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                </div>
                <div className="p-8">
                  <div className="flex gap-2 mb-4">
                    <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">{item.age}</span>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-800 mb-3">{item.title}</h4>
                  <p className="text-gray-500 text-sm mb-6 leading-relaxed line-clamp-2">{item.description}</p>
                  <Link 
                    to="/curriculum" 
                    className="inline-flex items-center text-primary font-bold hover:underline"
                  >
                    자세히 보기 <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="text-center space-y-4">
            <h2 className="text-primary font-bold text-lg">GALLERY</h2>
            <h3 className="text-3xl md:text-4xl font-bold font-creative text-gray-800">앙파티 꼬마 작가들의 작품</h3>
            <p className="text-gray-500">인스타그램에서 더 많은 작품을 만나보세요.</p>
          </div>
        </div>
        
        <div className="flex space-x-6 animate-scroll whitespace-nowrap px-4">
          {galleryItems.concat(galleryItems).map((item, idx) => (
            <div 
              key={`${item.id}-${idx}`} 
              className="inline-block min-w-[300px] md:min-w-[400px] h-80 rounded-3xl overflow-hidden relative group shadow-lg cursor-pointer"
              onClick={() => window.open(socialLinks.instagram, '_blank')}
            >
              <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6 text-white">
                <span className="font-bold text-lg">"{item.title}"</span>
                <span className="text-sm text-gray-200">{item.author}</span>
                <div className="mt-2 flex items-center text-xs text-white/80">
                  <Sparkles className="w-3 h-3 mr-1" /> 인스타그램에서 보기
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#FFF9F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold font-creative text-gray-800 mb-4">학부모님들의 소중한 후기</h3>
            <div className="flex justify-center space-x-1">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />)}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <div key={review.id} className="bg-white p-10 rounded-[2.5rem] shadow-sm relative border border-gray-100 hover:shadow-md transition-shadow">
                <Quote className="absolute top-6 right-8 w-10 h-10 text-primary/20" />
                <p className="text-gray-600 italic leading-relaxed mb-8 break-keep">"{review.content}"</p>
                <div className="flex items-center space-x-4 border-t border-gray-100 pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center font-bold text-primary">
                    {review.parentName[0]}
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 text-sm">{review.parentName}님</p>
                    <p className="text-xs text-gray-400">{review.childInfo}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-primary/30 group">
             <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-700" />
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

             <div className="relative z-10">
               <h3 className="text-3xl md:text-5xl font-bold font-creative mb-6 leading-tight">
                 우리 아이의 예술적 감성,<br />
                 앙파티에서 피어납니다.
               </h3>
               <p className="text-xl mb-12 opacity-90 max-w-xl mx-auto font-medium">
                 원장 직강 소수 정예 수업으로<br />
                 아이 한 명 한 명의 마음에 귀 기울입니다.
               </p>
               <div className="flex flex-col sm:flex-row justify-center gap-4">
                 <a 
                   href={socialLinks.kakao}
                   target="_blank"
                   rel="noreferrer"
                   className="inline-flex items-center justify-center bg-[#FEE500] text-[#3c1e1e] px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-lg"
                 >
                   <MessageCircle className="w-5 h-5 mr-2" />
                   카카오톡 문의하기
                 </a>
                 <Link 
                   to="/contact" 
                   className="inline-block bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-lg"
                 >
                   홈페이지 상담신청
                 </Link>
               </div>
             </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          display: flex;
          width: fit-content;
          animation: scroll 40s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Main;
