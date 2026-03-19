import React from 'react';
import { useData } from '../contexts/DataContext';

export default function Schedule() {
  const { schedule } = useData();
  return (
    <div className="p-8 text-center max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-primary mb-10">수업 일정 및 예약</h2>
      {schedule?.schedule_image && (
        <img src={schedule.schedule_image} className="w-full rounded-2xl shadow-2xl mb-10" alt="시간표" />
      )}
      <div className="bg-gray-50 p-8 rounded-3xl">
        <p className="text-gray-600 mb-6 whitespace-pre-wrap">{schedule?.booking_notice}</p>
        <a href={schedule?.booking_link} target="_blank" className="inline-block bg-primary text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-primaryDark transition-all">
          체험 수업 예약하기
        </a>
      </div>
    </div>
  );
}
