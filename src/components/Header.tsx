
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../constants';
import { Menu, X, Palette } from 'lucide-react';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-primary p-2 rounded-xl group-hover:rotate-12 transition-transform shadow-md shadow-primary/20">
              <Palette className="text-white w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold font-creative text-gray-800 leading-none">앙파티 <span className="text-primary">Atelier</span></span>
              <span className="text-[0.6rem] text-gray-400 tracking-widest font-bold">EMPATHIE ART STUDIO</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold transition-colors hover:text-primary relative py-1 ${
                  location.pathname === link.path ? 'text-primary' : 'text-gray-600'
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full"></span>
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link 
              to="/contact" 
              className="bg-primary hover:bg-primaryDark text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all shadow-lg shadow-primary/20 hover:-translate-y-0.5"
            >
              상담 예약하기
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-primary p-2 transition-colors"
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 absolute w-full shadow-xl">
          <div className="flex flex-col space-y-4 px-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-base font-semibold py-2 border-b border-gray-50 ${
                  location.pathname === link.path ? 'text-primary' : 'text-gray-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="bg-primary text-white text-center py-3.5 rounded-xl font-bold shadow-md mt-2"
            >
              상담 예약하기
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
