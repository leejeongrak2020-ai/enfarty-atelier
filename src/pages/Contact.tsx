
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, ExternalLink } from 'lucide-react';
import { useData } from '../contexts/DataContext';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const { staticImages, socialLinks, contactInfo } = useData();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  // 네이버 지도 검색 쿼리 생성 (주소 기반)
  const mapSearchUrl = `https://map.naver.com/p/search/${encodeURIComponent(contactInfo.address)}`;

  return (
    <div className="pt-20 pb-24">
      <section className="bg-primary/5 py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-creative text-gray-800 mb-4">입학 및 상담 문의</h1>
        <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
          아이의 성향에 맞는 1:1 맞춤 상담을 도와드립니다.<br />
          수업 중에는 통화가 어려울 수 있으니 문자나 카톡 남겨주세요.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info & Map Placeholder */}
          <div className="space-y-12">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold font-creative text-gray-800">오시는 길</h2>
              
              {/* Actual Map link wrapper */}
              <a 
                href={mapSearchUrl}
                target="_blank" 
                rel="noreferrer"
                className="block aspect-video bg-gray-100 rounded-[2rem] overflow-hidden border border-gray-200 relative group cursor-pointer"
              >
                <img 
                  src={staticImages.mapPlaceholder}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" 
                  alt="Location Map Placeholder" 
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-primary/20 flex flex-col items-center animate-bounce">
                    <MapPin className="text-primary w-8 h-8 mb-2" />
                    <span className="text-lg font-bold text-gray-800">경북도청신도시 호명읍</span>
                    <span className="text-xs text-gray-500 mt-1">지도를 클릭하면 네이버 지도로 이동합니다</span>
                  </div>
                </div>
              </a>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 bg-canvas rounded-2xl border border-gray-100 hover:border-primary/30 transition-colors">
                  <MessageCircle className="w-6 h-6 text-primary mb-3" />
                  <h4 className="font-bold text-gray-800 mb-1">카카오톡 채널</h4>
                  <p className="text-sm text-gray-500 mb-3">가장 빠른 상담이 가능해요</p>
                  <a href={socialLinks.kakao} target="_blank" rel="noreferrer" className="text-primary text-sm font-bold flex items-center hover:underline">
                    채널 바로가기 <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </div>
                
                <div className="p-6 bg-canvas rounded-2xl border border-gray-100 hover:border-primary/30 transition-colors">
                  <div className="w-6 h-6 bg-[#03C75A] text-white rounded-md flex items-center justify-center mb-3 text-xs font-bold">N</div>
                  <h4 className="font-bold text-gray-800 mb-1">네이버 블로그</h4>
                  <p className="text-sm text-gray-500 mb-3">수업 모습을 확인해보세요</p>
                  <a href={socialLinks.blog} target="_blank" rel="noreferrer" className="text-primary text-sm font-bold flex items-center hover:underline">
                    블로그 바로가기 <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </div>

                <div className="p-6 bg-canvas rounded-2xl border border-gray-100 col-span-1 sm:col-span-2">
                  <Phone className="w-6 h-6 text-primary mb-3" />
                  <h4 className="font-bold text-gray-800 mb-1">연락처</h4>
                  <div className="text-sm text-gray-500 flex flex-col gap-1">
                     <p>전화: {contactInfo.phone}</p>
                     <p>주소: {contactInfo.address}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-10 md:p-12 rounded-[3rem] shadow-2xl border border-gray-100">
            <h2 className="text-3xl font-bold font-creative text-gray-800 mb-8">상담 예약 신청</h2>
            
            {submitted ? (
              <div className="h-[400px] flex flex-col items-center justify-center text-center animate-in zoom-in duration-300">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <Send className="text-green-600 w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">신청이 완료되었습니다!</h3>
                <p className="text-gray-500 leading-relaxed">
                  원장님이 수업을 마치고<br />
                  순차적으로 연락드리겠습니다.<br />
                  (오후 7시 이후 또는 다음날 오전에 연락드릴 수 있습니다)
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">보호자 성함</label>
                    <input 
                      type="text" 
                      required
                      placeholder="예: 김이름"
                      className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">연락처</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="010-0000-0000"
                      className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">아이 나이</label>
                    <input 
                      type="text" 
                      placeholder="예: 7세 (유치부)"
                      className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">관심 클래스</label>
                    <select className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none text-gray-600">
                      <option>선택해주세요</option>
                      <option>유치부 (5-7세)</option>
                      <option>초등부 (8-13세)</option>
                      <option>원데이 클래스</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">문의 내용</label>
                  <textarea 
                    rows={4}
                    placeholder="궁금하신 점이나 상담 희망 시간을 남겨주세요."
                    className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none resize-none"
                  ></textarea>
                </div>

                <div className="flex items-center space-x-2 py-2">
                  <input type="checkbox" required className="w-4 h-4 rounded accent-primary" />
                  <label className="text-xs text-gray-500 underline cursor-pointer">개인정보 수집 및 이용에 동의합니다.</label>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-primary hover:bg-primaryDark text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-primary/30 transition-all transform active:scale-95"
                >
                  상담 신청하기
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
