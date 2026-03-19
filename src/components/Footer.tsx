import React from 'react';
import { Instagram, MapPin, MessageCircle, Settings } from 'lucide-react';
import { useData } from '../contexts/DataContext';

export const Footer: React.FC = () => {
  const { socialLinks, contactInfo } = useData();

  return (
    <footer className="bg-gray-50 pt-16 pb-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* 1. 아뜰리에 소개 */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <h3 className="text-xl font-bold font-creative text-primary">앙파티 아뜰리에</h3>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              경북도청신도시 유초등 미술 전문<br />
              아이의 생각과 마음이 자라나는 공감 미술 공간<br />
              <b>Empathie Art Studio</b>
            </p>
            <div className="flex space-x-3">
              <a href={socialLinks.instagram} target="_blank" rel="noreferrer" className="p-2.5 bg-white rounded-full shadow-sm hover:shadow-md hover:text-pink-600 transition-all text-gray-400">
                <Instagram className="w-5 h-5" />
              </a>
              <a href={socialLinks.blog} target="_blank" rel="noreferrer" className="p-2.5 bg-white rounded-full shadow-sm hover:shadow-md hover:text-green-600 transition-all text-gray-400 font-bold flex items-center justify-center">
                <span className="text-xs">Blog</span>
              </a>
              <a href={socialLinks.kakao} target="_blank" rel="noreferrer" className="p-2.5 bg-white rounded-full shadow-sm hover:shadow-md hover:text-yellow-400 transition-all text-gray-400">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* 2. 클래스 정보 */}
          <div>
            <h4 className="font-bold text-gray-800 mb-4">Class Info</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><span className="w-2 h-2 bg-primary rounded-full inline-block mr-2"></span>유치부 (5세 ~ 7세)</li>
              <li><span className="w-2 h-2 bg-primary rounded-full inline-block mr-2"></span>초등부 (8세 ~ 13세)</li>
              <li><span className="w-2 h-2 bg-primary rounded-full inline-block mr-2"></span>소수 정예 원장 직강</li>
              <li><span className="w-2 h-2 bg-primary rounded-full inline-block mr-2"></span>원데이 / 특강 클래스</li>
            </ul>
          </div>

          {/* 3. 연락처 및 위치 */}
          <div>
            <h4 className="font-bold text-gray-800 mb-4">Contact Us</h4>
            <div className="space-y-4 text-sm text-gray-500">
              <div className="flex items-start space-x-3">
                <MessageCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <span className="block font-bold text-gray-700">카카오톡 채널</span>
                  <a href={socialLinks.kakao} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">{contactInfo.kakaoId}</a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <span className="block font-bold text-gray-700">위치</span>
                  <span>{contactInfo.address}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 하단 카피라이트 및 관리자 진입점(톱니바퀴) */}
        <div className="border-t border-gray-200 pt-8 text-center text-xs text-gray-400 flex flex-col md:flex-row justify-between items-center gap-4 group">
          <p>© 2024 Enfarty Atelier. All rights reserved.</p>
          <div className="flex items-center gap-2">
