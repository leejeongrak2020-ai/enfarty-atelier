import React, { useEffect, useState } from 'react';

export default function Main() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // 관리자 페이지(Sveltia CMS)에서 저장한 데이터를 가져오는 기능입니다.
    fetch('/data/products.json?t=' + new Date().getTime())
      .then(res => res.json())
      .then(data => {
        if(data && data.items) setItems(data.items);
      })
      .catch(err => console.log("아직 등록된 작품이 없습니다."));
  }, []);

  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1 style={{ color: '#4ECDC4', fontSize: '32px', marginBottom: '40px' }}>앙파티 아뜰리에 작품전</h1>
      
      {items.length === 0 ? (
        <p>관리자 페이지(/admin)에서 사진을 등록해 주세요!</p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {items.map((item: any, index: number) => (
            <div key={index} style={{ border: '1px solid #eee', borderRadius: '20px', padding: '15px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
              <img src={item.image} alt={item.title} style={{ width: '100%', borderRadius: '15px', height: '250px', objectCover: 'cover' }} />
              <h3 style={{ marginTop: '15px', color: '#2CB2A8' }}>{item.title}</h3>
              <p style={{ color: '#666' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
