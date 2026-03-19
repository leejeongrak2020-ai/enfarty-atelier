import React from 'react';
import { useData } from '../contexts/DataContext';

export default function Main() {
  const { main } = useData();
  const items = main?.items || [];

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-primary font-creative mb-12">{main?.main_title || '앙파티 아뜰리에 작품전'}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {items.map((item: any, i: number) => (
          <div key={i} className="bg-white rounded-3xl shadow-xl overflow-hidden hover:scale-105 transition-transform">
            <img src={item.image} className="w-full h-72 object-cover" alt={item.title} />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
              <p className="text-gray-500 mt-2 text-sm leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
