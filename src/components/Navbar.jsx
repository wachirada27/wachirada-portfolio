import React, { useState, useEffect } from 'react';
import { Menu, X, Send, Zap } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'หน้าแรก', href: '#home' },
    { name: 'เกี่ยวกับฉัน', href: '#about' },
    { name: 'เทคโนโลยี', href: '#tech' },
    { name: 'ผลงาน', href: '#projects' },
    { name: 'ประสบการณ์', href: '#experience' },
    { name: 'ติดต่อ', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled
        ? 'bg-white/80 backdrop-blur-xl shadow-lg shadow-purple-100/60 border-b border-purple-100 py-3'
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-violet-500 via-pink-500 to-amber-400 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-violet-300/50 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
              W
            </div>
            <div>
              <span className="text-lg font-black tracking-tight bg-gradient-to-r from-violet-600 to-pink-500 bg-clip-text text-transparent">
                wachirada
              </span>
              <span className="text-lg font-black text-slate-700">.dev</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 bg-white/80 backdrop-blur-sm px-2 py-1.5 rounded-2xl shadow-sm shadow-purple-100 border border-purple-100/80">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-1.5 text-sm font-semibold text-slate-500 hover:text-violet-600 hover:bg-violet-50 rounded-xl transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-violet-600 via-pink-500 to-rose-500 rounded-2xl shadow-lg shadow-violet-300/50 hover:shadow-violet-400/60 hover:scale-105 transition-all duration-300"
            >
              <span>ติดต่อฉัน</span>
              <Send className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl bg-white shadow-md shadow-purple-100 text-slate-600"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-purple-100 px-4 pt-4 pb-6 space-y-1 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 rounded-xl text-base font-semibold text-slate-600 hover:bg-gradient-to-r hover:from-violet-50 hover:to-pink-50 hover:text-violet-600 transition-all"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <a href="#contact" onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 font-bold text-white bg-gradient-to-r from-violet-600 to-pink-500 rounded-2xl shadow-lg">
              <Send className="w-4 h-4" />ติดต่อฉัน
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
