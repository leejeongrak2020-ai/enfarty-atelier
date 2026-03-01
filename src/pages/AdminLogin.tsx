
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Lock } from 'lucide-react';

const AdminLogin: React.FC = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(id, pw)) {
      navigate('/admin/dashboard');
    } else {
      setError('아이디 또는 비밀번호가 올바르지 않습니다.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-100">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Lock className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-2xl font-bold font-creative text-gray-800">관리자 로그인</h1>
          <p className="text-sm text-gray-500 mt-2">홈페이지 내용 수정을 위해 로그인해주세요.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">아이디</label>
            <input
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              placeholder="아이디를 입력하세요"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">비밀번호</label>
            <input
              type="password"
              value={pw}
              onChange={(e) => setPw(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              placeholder="비밀번호를 입력하세요"
            />
          </div>
          {error && <p className="text-red-500 text-sm font-bold text-center">{error}</p>}
          <button
            type="submit"
            className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:bg-primaryDark transition-colors shadow-lg shadow-primary/20"
          >
            로그인
          </button>
        </form>
        <div className="mt-6 text-center">
            <button onClick={() => navigate('/')} className="text-gray-400 text-sm hover:text-gray-600 underline">
                홈으로 돌아가기
            </button>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
