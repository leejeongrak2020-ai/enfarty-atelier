import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Main from './pages/Main';
import Curriculum from './pages/Curriculum';
import Schedule from './pages/Schedule';
import About from './pages/About';
import Contact from './pages/Contact';
import { DataProvider } from './contexts/DataContext'; // DataProvider 대신 DataContext로 수정했습니다

function App() {
  return (
    <DataProvider>
      <Router>
        <Layout>
          <Routes>
            {/* 모든 페이지가 정상적으로 나오도록 경로를 설정했습니다 */}
            <Route path="/" element={<Main />} />
            <Route path="/curriculum" element={<Curriculum />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Main />} />
          </Routes>
        </Layout>
      </Router>
    </DataProvider>
  );
}

export default App;
