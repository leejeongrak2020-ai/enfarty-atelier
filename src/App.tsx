import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Main from './pages/Main';
import Curriculum from './pages/Curriculum';
import Schedule from './pages/Schedule';
import About from './pages/About';
import Contact from './pages/Contact';
import { DataProvider } from './contexts/DataProvider'; // Context 폴더명 확인 필요

function App() {
  return (
    <DataProvider>
      <Router>
        <Layout>
          <Routes>
            {/* 일반 방문자용 페이지만 남기고, 오류를 일으키는 관리자 경로는 모두 삭제했습니다 */}
            <Route path="/" element={<Main />} />
            <Route path="/curriculum" element={<Curriculum />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* 만약 사용자가 이상한 주소로 오면 메인으로 보냅니다 */}
            <Route path="*" element={<Main />} />
          </Routes>
        </Layout>
      </Router>
    </DataProvider>
  );
}

export default App;
