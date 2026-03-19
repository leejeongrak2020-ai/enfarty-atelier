import React, { useEffect, useState } from 'react';

export default function Main() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // 3단계에서 설정한 JSON 파일을 읽어옵니다.
    fetch('/data/products.json')
      .then(res => res.json())
      .then(data => {
        if(data && data.items) setItems(data.items);
      })
      .catch(err => console.error("데이터 로딩 실패:", err));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {items.map((item: any, index: number) => (
        <div key={index} className="border p-4 rounded-xl">
          <img src={item.image} alt={item.title} className="w-full rounded" />
          <h3 className="font-bold mt-2">{item.title}</h3>
          <p>{item.desc}</p>
        </div>
      ))}
    </div>
  );
}
