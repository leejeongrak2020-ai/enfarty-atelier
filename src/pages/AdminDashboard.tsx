
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useData } from '../contexts/DataContext';
import { Save, LogOut, RotateCcw, Image as ImageIcon, Layout, Grid, Users, Calendar, Settings, ExternalLink } from 'lucide-react';

const AdminDashboard: React.FC = () => {
  const { logout, changePassword } = useAuth();
  const navigate = useNavigate();
  const { 
    heroContent, setHeroContent,
    curriculumData, setCurriculumData,
    galleryItems, setGalleryItems,
    reviews, setReviews,
    staticImages, setStaticImages,
    socialLinks, setSocialLinks,
    contactInfo, setContactInfo,
    resetToDefaults
  } = useData();

  const [activeTab, setActiveTab] = useState('hero');
  const [newPassword, setNewPassword] = useState('');

  const handleLogout = () => {
    logout();
    navigate('/admin');
  };

  const TabButton = ({ id, icon: Icon, label }: any) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`flex items-center space-x-2 px-4 py-3 rounded-xl transition-all w-full text-left font-bold ${
        activeTab === id ? 'bg-primary text-white shadow-md' : 'text-gray-600 hover:bg-gray-100'
      }`}
    >
      <Icon className="w-5 h-5" />
      <span>{label}</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="w-full md:w-64 bg-white border-r border-gray-200 p-6 flex flex-col h-auto md:h-screen sticky top-0 overflow-y-auto z-10">
        <div className="mb-8">
          <h1 className="text-2xl font-bold font-creative text-primary">관리자 모드</h1>
          <p className="text-xs text-gray-400 font-bold mt-1">Enfarty Atelier Admin</p>
        </div>
        
        <nav className="space-y-2 flex-grow">
          <TabButton id="hero" icon={Layout} label="메인 화면 (Hero)" />
          <TabButton id="curriculum" icon={Grid} label="커리큘럼" />
          <TabButton id="gallery" icon={ImageIcon} label="갤러리" />
          <TabButton id="reviews" icon={Users} label="학부모 후기" />
          <TabButton id="images" icon={ImageIcon} label="고정 이미지" />
          <TabButton id="links" icon={ExternalLink} label="링크 및 연락처" />
          <TabButton id="settings" icon={Settings} label="설정" />
        </nav>

        <div className="mt-8 space-y-3 pt-6 border-t border-gray-100">
            <button onClick={() => navigate('/')} className="w-full py-2 text-sm text-gray-500 hover:text-primary font-bold border border-gray-200 rounded-lg">
                사이트 바로가기
            </button>
            <button 
                onClick={resetToDefaults}
                className="flex items-center justify-center w-full py-2 text-sm text-red-500 hover:bg-red-50 font-bold rounded-lg transition-colors"
            >
                <RotateCcw className="w-4 h-4 mr-2" /> 초기화
            </button>
            <button 
                onClick={handleLogout}
                className="flex items-center justify-center w-full py-2 text-sm text-gray-500 hover:bg-gray-100 font-bold rounded-lg transition-colors"
            >
                <LogOut className="w-4 h-4 mr-2" /> 로그아웃
            </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 p-6 md:p-10 overflow-y-auto">
        <div className="max-w-4xl mx-auto">
            {/* Hero Editor */}
            {activeTab === 'hero' && (
                <Section title="메인 화면 설정" desc="메인 페이지 상단의 큰 이미지와 문구를 수정합니다.">
                    <Input label="상단 작은 태그" value={heroContent.tag} onChange={(v) => setHeroContent({...heroContent, tag: v})} />
                    <Input label="제목 (첫 줄)" value={heroContent.titlePrefix} onChange={(v) => setHeroContent({...heroContent, titlePrefix: v})} />
                    <Input label="제목 (강조)" value={heroContent.titleHighlight} onChange={(v) => setHeroContent({...heroContent, titleHighlight: v})} />
                    <TextArea label="부제목 (설명)" value={heroContent.subtitle} onChange={(v) => setHeroContent({...heroContent, subtitle: v})} />
                    <ImageInput label="메인 이미지 URL" value={heroContent.image} onChange={(v) => setHeroContent({...heroContent, image: v})} />
                    <div className="grid grid-cols-2 gap-4">
                        <Input label="뱃지 연도" value={heroContent.floatingBadge.year} onChange={(v) => setHeroContent({...heroContent, floatingBadge: {...heroContent.floatingBadge, year: v}})} />
                        <Input label="뱃지 문구" value={heroContent.floatingBadge.text} onChange={(v) => setHeroContent({...heroContent, floatingBadge: {...heroContent.floatingBadge, text: v}})} />
                    </div>
                </Section>
            )}

            {/* Curriculum Editor */}
            {activeTab === 'curriculum' && (
                <Section title="커리큘럼 관리" desc="커리큘럼 카드와 상세 페이지 내용을 수정합니다.">
                    {curriculumData.map((item, idx) => (
                        <div key={item.id} className="bg-white p-6 rounded-2xl border border-gray-200 mb-6 shadow-sm">
                            <h3 className="font-bold text-lg mb-4 border-b pb-2 flex justify-between">
                                <span>#{idx + 1} {item.title}</span>
                            </h3>
                            <div className="space-y-4">
                                <Input label="프로그램명" value={item.title} onChange={(v) => {
                                    const newDetails = [...curriculumData];
                                    newDetails[idx].title = v;
                                    setCurriculumData(newDetails);
                                }} />
                                <Input label="대상 연령" value={item.age} onChange={(v) => {
                                    const newDetails = [...curriculumData];
                                    newDetails[idx].age = v;
                                    setCurriculumData(newDetails);
                                }} />
                                <TextArea label="간단 설명" value={item.description} onChange={(v) => {
                                    const newDetails = [...curriculumData];
                                    newDetails[idx].description = v;
                                    setCurriculumData(newDetails);
                                }} />
                                <ImageInput label="카드 이미지 URL" value={item.imageUrl} onChange={(v) => {
                                    const newDetails = [...curriculumData];
                                    newDetails[idx].imageUrl = v;
                                    setCurriculumData(newDetails);
                                }} />
                                <TextArea label="교육 철학 (상세페이지 인용구)" value={item.quote || ''} onChange={(v) => {
                                    const newDetails = [...curriculumData];
                                    newDetails[idx].quote = v;
                                    setCurriculumData(newDetails);
                                }} />
                            </div>
                        </div>
                    ))}
                </Section>
            )}

            {/* Gallery Editor */}
            {activeTab === 'gallery' && (
                <Section title="갤러리 관리" desc="메인 페이지 하단에 롤링되는 작품 이미지를 관리합니다.">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {galleryItems.map((item, idx) => (
                            <div key={item.id} className="bg-white p-4 rounded-xl border border-gray-200 relative group">
                                <div className="aspect-square rounded-lg overflow-hidden bg-gray-100 mb-3">
                                    <img src={item.imageUrl} alt="" className="w-full h-full object-cover" />
                                </div>
                                <div className="space-y-2">
                                    <Input label="작품명" value={item.title} onChange={(v) => {
                                        const newItems = [...galleryItems];
                                        newItems[idx].title = v;
                                        setGalleryItems(newItems);
                                    }} />
                                    <Input label="작가명" value={item.author} onChange={(v) => {
                                        const newItems = [...galleryItems];
                                        newItems[idx].author = v;
                                        setGalleryItems(newItems);
                                    }} />
                                    <Input label="이미지 URL" value={item.imageUrl} onChange={(v) => {
                                        const newItems = [...galleryItems];
                                        newItems[idx].imageUrl = v;
                                        setGalleryItems(newItems);
                                    }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </Section>
            )}
            
            {/* Reviews Editor */}
            {activeTab === 'reviews' && (
                 <Section title="후기 관리" desc="메인 페이지의 학부모 후기를 수정합니다.">
                    {reviews.map((review, idx) => (
                        <div key={review.id} className="bg-white p-6 rounded-2xl border border-gray-200 mb-6">
                             <div className="grid grid-cols-2 gap-4 mb-4">
                                <Input label="학부모님 성함" value={review.parentName} onChange={(v) => {
                                    const newItems = [...reviews];
                                    newItems[idx].parentName = v;
                                    setReviews(newItems);
                                }} />
                                <Input label="자녀 정보" value={review.childInfo} onChange={(v) => {
                                    const newItems = [...reviews];
                                    newItems[idx].childInfo = v;
                                    setReviews(newItems);
                                }} />
                             </div>
                             <TextArea label="후기 내용" value={review.content} onChange={(v) => {
                                    const newItems = [...reviews];
                                    newItems[idx].content = v;
                                    setReviews(newItems);
                                }} />
                        </div>
                    ))}
                 </Section>
            )}

            {/* Static Images Editor */}
            {activeTab === 'images' && (
                <Section title="고정 이미지 관리" desc="학원 소개 페이지 및 기타 고정 이미지를 수정합니다.">
                    <ImageInput label="학원 소개(About) 상단 배경" value={staticImages.aboutHero} onChange={(v) => setStaticImages({...staticImages, aboutHero: v})} />
                    <ImageInput label="원장님 프로필 사진" value={staticImages.director} onChange={(v) => setStaticImages({...staticImages, director: v})} />
                    <ImageInput label="지도 플레이스홀더" value={staticImages.mapPlaceholder} onChange={(v) => setStaticImages({...staticImages, mapPlaceholder: v})} />
                    
                    <h3 className="font-bold text-gray-700 mt-6 mb-3">스튜디오 공간 사진 (4장)</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {staticImages.studio.map((img, idx) => (
                            <ImageInput key={idx} label={`공간 사진 ${idx+1}`} value={img} onChange={(v) => {
                                const newStudio = [...staticImages.studio];
                                newStudio[idx] = v;
                                setStaticImages({...staticImages, studio: newStudio});
                            }} />
                        ))}
                    </div>
                </Section>
            )}

            {/* Links Editor */}
            {activeTab === 'links' && (
                 <Section title="링크 및 연락처" desc="SNS 링크와 하단 연락처 정보를 수정합니다.">
                     <Input label="인스타그램 주소" value={socialLinks.instagram} onChange={(v) => setSocialLinks({...socialLinks, instagram: v})} />
                     <Input label="블로그 주소" value={socialLinks.blog} onChange={(v) => setSocialLinks({...socialLinks, blog: v})} />
                     <Input label="카카오톡 채널 링크" value={socialLinks.kakao} onChange={(v) => setSocialLinks({...socialLinks, kakao: v})} />
                     <div className="h-6"></div>
                     <Input label="전화번호" value={contactInfo.phone} onChange={(v) => setContactInfo({...contactInfo, phone: v})} />
                     <Input label="주소" value={contactInfo.address} onChange={(v) => setContactInfo({...contactInfo, address: v})} />
                     <Input label="카카오톡 ID (표시용)" value={contactInfo.kakaoId} onChange={(v) => setContactInfo({...contactInfo, kakaoId: v})} />
                 </Section>
            )}

            {/* Settings */}
            {activeTab === 'settings' && (
                <Section title="관리자 설정" desc="관리자 접속 비밀번호를 변경합니다.">
                    <div className="bg-white p-6 rounded-2xl border border-gray-200">
                        <Input label="새 비밀번호" value={newPassword} type="password" onChange={(v) => setNewPassword(v)} />
                        <button 
                            onClick={() => {
                                if(newPassword) {
                                    changePassword(newPassword);
                                    setNewPassword('');
                                }
                            }} 
                            className="mt-4 bg-gray-800 text-white px-6 py-2 rounded-lg font-bold hover:bg-black transition-colors"
                        >
                            비밀번호 변경
                        </button>
                    </div>
                    <div className="mt-8 p-6 bg-blue-50 rounded-2xl border border-blue-100">
                        <h4 className="font-bold text-blue-800 mb-2">💡 관리자 모드 팁</h4>
                        <ul className="text-sm text-blue-700 space-y-2">
                            <li>• 모든 수정 사항은 '자동'으로 브라우저에 저장됩니다.</li>
                            <li>• 이미지 URL은 이미지를 우클릭하여 '이미지 주소 복사'한 값을 붙여넣으세요.</li>
                            <li>• 초기화 버튼을 누르면 초기 설정값으로 복구됩니다.</li>
                        </ul>
                    </div>
                </Section>
            )}
        </div>
      </div>
    </div>
  );
};

// UI Components
const Section = ({ title, desc, children }: any) => (
    <div className="animate-in fade-in duration-500">
        <div className="mb-8">
            <h2 className="text-2xl font-bold font-creative text-gray-800">{title}</h2>
            <p className="text-gray-500">{desc}</p>
        </div>
        {children}
    </div>
);

const Input = ({ label, value, onChange, type = "text" }: any) => (
    <div className="mb-4">
        <label className="block text-sm font-bold text-gray-700 mb-1">{label}</label>
        <input 
            type={type}
            value={value} 
            onChange={(e) => onChange(e.target.value)} 
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
        />
    </div>
);

const TextArea = ({ label, value, onChange }: any) => (
    <div className="mb-4">
        <label className="block text-sm font-bold text-gray-700 mb-1">{label}</label>
        <textarea 
            value={value} 
            onChange={(e) => onChange(e.target.value)} 
            rows={3}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
        />
    </div>
);

const ImageInput = ({ label, value, onChange }: any) => (
    <div className="mb-4">
        <label className="block text-sm font-bold text-gray-700 mb-1">{label}</label>
        <div className="flex gap-4 items-start">
            <div className="flex-1">
                <input 
                    type="text"
                    value={value} 
                    onChange={(e) => onChange(e.target.value)} 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="https://..."
                />
            </div>
            {value && (
                <div className="w-20 h-20 rounded-lg overflow-hidden border border-gray-200 bg-gray-50 shrink-0">
                    <img src={value} alt="Preview" className="w-full h-full object-cover" />
                </div>
            )}
        </div>
    </div>
);

export default AdminDashboard;
