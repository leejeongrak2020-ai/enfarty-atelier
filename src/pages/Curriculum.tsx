
import React from 'react';
import { useData } from '../contexts/DataContext';
import { CheckCircle2 } from 'lucide-react';

const Curriculum: React.FC = () => {
  const { curriculumData } = useData();

  return (
    <div className="pt-20 pb-24">
      {/* Header */}
      <section className="bg-secondary/10 py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-creative text-gray-800 mb-4">교육 커리큘럼</h1>
        <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
          아이들의 발달 단계에 맞춘 세분화된 프로그램으로<br />
          창의력과 표현력을 균형 있게 키워줍니다.
        </p>
      </section>

      {/* Main Programs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="space-y-32">
          {curriculumData.map((item, idx) => (
            <div 
              key={item.id} 
              className={`flex flex-col ${idx % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-24`}
            >
              <div className="flex-1 w-full">
                <div className="relative">
                  <div className={`absolute -inset-4 ${item.color} rounded-[3rem] -rotate-2 -z-10`} />
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    className="w-full aspect-[4/3] object-cover rounded-[2.5rem] shadow-xl"
                  />
                </div>
              </div>
              <div className="flex-1 space-y-8">
                <div>
                  <span className="text-primary font-bold tracking-widest text-sm uppercase">{item.age} PROGRAM</span>
                  <h2 className="text-4xl font-bold font-creative text-gray-800 mt-2 mb-4">{item.title}</h2>
                  <p className="text-xl text-gray-500 leading-relaxed whitespace-pre-wrap">
                    {item.description}
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-bold text-gray-800 text-lg">주요 학습 목표</h4>
                  <ul className="space-y-3">
                    {item.details.map((detail, i) => (
                      <li key={i} className="flex items-start space-x-3 text-gray-600">
                        <CheckCircle2 className="w-6 h-6 text-secondary shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {item.quote && (
                  <div className="bg-white p-6 rounded-2xl border-l-4 border-primary shadow-sm">
                    <p className="text-sm text-gray-500 leading-relaxed italic">
                      "{item.quote}"
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Special Classes */}
      <section className="mt-32 bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold font-creative text-gray-800">그 외 특별 프로그램</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: '작가 탐구반', desc: '유명 화가의 생애와 기법을 스토리텔링으로 배우고 재해석하는 특별 수업' },
              { title: '야외 스케치', desc: '자연 속에서 사물을 관찰하고 공기를 그리는 감성적인 정기 야외 수업' },
              { title: '방학 마스터 클래스', desc: '집중도 높은 테마 중심의 몰입형 단기 예술 체험 프로그램' }
            ].map((special, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-bold text-primary mb-3">{special.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{special.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Curriculum;
