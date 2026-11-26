import React, { useState, useEffect } from 'react';
import { Menu, X, Send } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '🏠 หน้าแรก',       href: '#home' },
    { name: '👩‍💻 เกี่ยวกับฉัน',  href: '#about' },
    { name: '⚙️ เทคโนโลยี',      href: '#tech' },
    { name: '🎨 ผลงาน',          href: '#projects' },
    { name: '📅 ประสบการณ์',     href: '#experience' },
    { name: '💌 ติดต่อ',          href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled
        ? 'bg-white/85 backdrop-blur-xl shadow-lg shadow-pink-100/60 border-b border-pink-100 py-2'
        : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">

          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 group shrink-0">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-pink-400 via-rose-500 to-fuchsia-500 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-pink-300/50 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
              W
            </div>
            <div className="leading-tight">
              <span className="text-lg font-black bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">วชิรดา</span>
              <span className="text-lg font-black text-slate-700">.dev</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5 bg-white/90 backdrop-blur-sm px-2 py-1.5 rounded-2xl shadow-md shadow-pink-100/60 border border-pink-100/80 flex-1 max-w-2xl mx-4 justify-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-sm font-semibold text-slate-500 hover:text-pink-600 hover:bg-pink-50 rounded-xl transition-all whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="#contact"
            className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-pink-500 via-rose-500 to-fuchsia-500 rounded-2xl shadow-lg shadow-pink-300/50 hover:shadow-pink-400/60 hover:scale-105 transition-all duration-300 shrink-0 animate-gradient"
          >
            <Send className="w-3.5 h-3.5" />
            ติดต่อฉัน
          </a>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-xl bg-white shadow-md shadow-pink-100 text-pink-500 border border-pink-100"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-white/97 backdrop-blur-xl border-t border-pink-100 px-4 pt-4 pb-6 space-y-1 shadow-xl shadow-pink-100/40">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center px-4 py-3 rounded-2xl text-base font-semibold text-slate-600 hover:bg-gradient-to-r hover:from-pink-50 hover:to-rose-50 hover:text-pink-600 transition-all"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 font-bold text-white bg-gradient-to-r from-pink-500 to-fuchsia-500 rounded-2xl shadow-lg shadow-pink-200"
            >
              <Send className="w-4 h-4" /> ติดต่อฉัน
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
