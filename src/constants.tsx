import React, { createContext, useContext, useState, useEffect } from 'react';

const DataContext = createContext<any>(null);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [data, setData] = useState<any>({
    global: {}, main: {}, curriculum: {}, schedule: {}, about: {}, loading: true
  });

  const fetchData = async () => {
    try {
      const files = ['global', 'main', 'curriculum', 'schedule', 'about'];
      const results = await Promise.all(
        files.map(file => fetch(`/data/${file.toLowerCase()}.json?t=${Date.now()}`).then(res => res.json()))
      );
      
      const newData: any = {};
      files.forEach((file, idx) => { newData[file] = results[idx]; });
      setData({ ...newData, loading: false });
    } catch (err) {
      console.error("데이터를 불러오지 못했습니다.", err);
      setData((prev: any) => ({ ...prev, loading: false }));
    }
  };

  useEffect(() => { fetchData(); }, []);

  return (
    <DataContext.Provider value={{ ...data, refresh: fetchData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
