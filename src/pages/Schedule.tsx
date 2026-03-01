
import React from 'react';
import { useData } from '../contexts/DataContext';
import { Calendar, Clock, AlertCircle } from 'lucide-react';

const Schedule: React.FC = () => {
  const { scheduleData } = useData();

  return (
    <div className="pt-20 pb-24">
      <section className="bg-primary/10 py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-creative text-gray-800 mb-4">수업 일정 및 예약</h1>
        <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
          원하시는 시간대와 요일을 선택하여 상담을 신청해주세요.<br />
          정원제로 운영되어 원활한 교육 환경을 제공합니다.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Timetable */}
          <div className="flex-[2]">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
              <div className="bg-primary p-6 text-white flex items-center justify-between">
                <h2 className="text-2xl font-bold font-creative flex items-center">
                  <Calendar className="mr-2 w-6 h-6" /> 주간 정규 시간표
                </h2>
                <span className="text-xs bg-white/20 px-3 py-1 rounded-full">2024년 1학기 기준</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-50 text-gray-600 text-sm uppercase">
                      <th className="p-4 border-b border-gray-100 font-bold">시간</th>
                      <th className="p-4 border-b border-gray-100 font-bold">월</th>
                      <th className="p-4 border-b border-gray-100 font-bold">화</th>
                      <th className="p-4 border-b border-gray-100 font-bold">수</th>
                      <th className="p-4 border-b border-gray-100 font-bold">목</th>
                      <th className="p-4 border-b border-gray-100 font-bold">금</th>
                      <th className="p-4 border-b border-gray-100 font-bold text-primary">토</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {scheduleData.map((row, idx) => (
                      <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                        <td className="p-4 text-center font-bold text-gray-700 bg-gray-50/30 whitespace-nowrap">
                          <div className="flex items-center justify-center text-xs">
                            <Clock className="w-3 h-3 mr-1 text-gray-400" /> {row.time}
                          </div>
                        </td>
                        <td className="p-6 text-center text-sm font-medium text-gray-600">{row.mon}</td>
                        <td className="p-6 text-center text-sm font-medium text-gray-600">{row.tue}</td>
                        <td className="p-6 text-center text-sm font-medium text-gray-600">{row.wed}</td>
                        <td className="p-6 text-center text-sm font-medium text-gray-600">{row.thu}</td>
                        <td className="p-6 text-center text-sm font-medium text-gray-600">{row.fri}</td>
                        <td className="p-6 text-center text-sm font-medium text-primary bg-primary/5">{row.sat}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-8 flex items-start space-x-3 p-6 bg-blue-50 rounded-2xl border-l-4 border-blue-400">
              <AlertCircle className="w-6 h-6 text-blue-500 shrink-0" />
              <div className="text-sm text-blue-700 leading-relaxed">
                <p className="font-bold mb-1">안내사항</p>
                <p>• 각 수업 시간은 90분이며, 수업 전후 10분간의 정리 및 브리핑 시간이 포함되어 있습니다.</p>
                <p>• 토요일은 오전 10:00부터 오후 15:00까지 운영됩니다.</p>
                <p>• 공휴일은 휴강이며, 별도의 보강 일정이 공지됩니다.</p>
              </div>
            </div>
          </div>

          {/* Booking Info */}
          <div className="flex-1 space-y-8">
            <div className="bg-canvas p-8 rounded-3xl border-2 border-primary/20 shadow-lg">
              <h3 className="text-2xl font-bold font-creative text-gray-800 mb-6">체험 수업 예약</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-8">
                정규 수업에 등록하기 전, 아이가 학원 분위기와 수업 방식을 미리 경험해볼 수 있는 체험 수업을 권장합니다.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                    <Clock className="text-primary w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase font-bold">소요시간</p>
                    <p className="text-sm font-bold text-gray-800">60분 (상담 포함)</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                    <AlertCircle className="text-secondary w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase font-bold">비용</p>
                    <p className="text-sm font-bold text-gray-800">무료 (1회 한정)</p>
                  </div>
                </div>
              </div>

              <a 
                href="https://open.kakao.com" // Placeholder for Kakao Link
                className="block w-full text-center bg-[#FEE500] text-[#3c1e1e] py-4 rounded-2xl font-bold hover:shadow-lg transition-all"
              >
                카카오톡으로 예약하기
              </a>
              <p className="text-center text-xs text-gray-400 mt-4">
                빠른 예약 및 궁금하신 점은 02-123-4567로 문의주세요.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-gray-100">
               <h4 className="font-bold text-gray-800 mb-4">예약 절차</h4>
               <ul className="space-y-4 text-sm text-gray-500">
                 <li className="flex items-center">
                   <span className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mr-3 font-bold text-xs">1</span>
                   상담 채널(전화/카톡) 문의
                 </li>
                 <li className="flex items-center">
                   <span className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mr-3 font-bold text-xs">2</span>
                   연령별 잔여석 확인 및 일시 협의
                 </li>
                 <li className="flex items-center">
                   <span className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mr-3 font-bold text-xs">3</span>
                   예약 확정 안내 메시지 발송
                 </li>
                 <li className="flex items-center">
                   <span className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mr-3 font-bold text-xs">4</span>
                   방문 및 즐거운 미술 체험!
                 </li>
               </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Schedule;
