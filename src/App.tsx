
import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import Main from './pages/Main';
import Curriculum from './pages/Curriculum';
import Schedule from './pages/Schedule';
import About from './pages/About';
import Contact from './pages/Contact';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import { DataProvider } from './contexts/DataContext';
import { AuthProvider, useAuth } from './contexts/AuthContext';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAdmin } = useAuth();
  if (!isAdmin) {
    return <Navigate to="/admin" replace />;
  }
  return <>{children}</>;
};

function App() {
  return (
    <DataProvider>
      <AuthProvider>
        <Router>
          <Routes>
            {/* Admin Routes (No Layout) */}
            <Route path="/admin" element={<AdminLogin />} />
            <Route 
              path="/admin/dashboard" 
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              } 
            />

            {/* Public Routes (With Layout) */}
            <Route path="*" element={
              <Layout>
                <Routes>
                  <Route path="/" element={<Main />} />
                  <Route path="/curriculum" element={<Curriculum />} />
                  <Route path="/schedule" element={<Schedule />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </Layout>
            } />
          </Routes>
        </Router>
      </AuthProvider>
    </DataProvider>
  );
}

export default App;
