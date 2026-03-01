
import React, { createContext, useContext, useState, useEffect } from 'react';

interface AuthContextType {
  isAdmin: boolean;
  login: (id: string, pw: string) => boolean;
  logout: () => void;
  changePassword: (newPw: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [password, setPassword] = useState('4164');

  useEffect(() => {
    const savedPw = localStorage.getItem('admin_pw');
    if (savedPw) setPassword(savedPw);
    
    const session = sessionStorage.getItem('is_admin');
    if (session === 'true') setIsAdmin(true);
  }, []);

  const login = (id: string, pw: string) => {
    if (id === 'admin' && pw === password) {
      setIsAdmin(true);
      sessionStorage.setItem('is_admin', 'true');
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAdmin(false);
    sessionStorage.removeItem('is_admin');
  };

  const changePassword = (newPw: string) => {
    setPassword(newPw);
    localStorage.setItem('admin_pw', newPw);
    alert('비밀번호가 변경되었습니다.');
  };

  return (
    <AuthContext.Provider value={{ isAdmin, login, logout, changePassword }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
