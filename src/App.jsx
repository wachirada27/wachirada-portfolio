import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    /* ---------- Custom flower cursor ---------- */
    const canvas = document.createElement('canvas');
    canvas.width = 40;
    canvas.height = 40;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.font = '28px serif';
      ctx.fillText('🌸', 0, 28);
      const cursorUrl = canvas.toDataURL();
      const style = document.createElement('style');
      style.id = 'flower-cursor-style';
      style.textContent = `* { cursor: url("${cursorUrl}") 0 0, auto !important; }`;
      document.head.appendChild(style);
    }

    /* ---------- Scroll-to-top visibility ---------- */
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    /* ---------- AOS-like reveal on scroll ---------- */
    const aosEls = document.querySelectorAll('[data-aos]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const delay = parseInt(el.dataset.aosDelay || '0', 10);
            setTimeout(() => {
              el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
              el.style.opacity = '1';
              el.style.transform = 'none';
            }, delay);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.12 }
    );

    aosEls.forEach((el) => {
      const type = el.dataset.aos;
      if (type === 'fade-up') el.style.transform = 'translateY(40px)';
      if (type === 'fade-down') el.style.transform = 'translateY(-40px)';
      if (type === 'fade-left') el.style.transform = 'translateX(40px)';
      if (type === 'fade-right') el.style.transform = 'translateX(-40px)';
      if (type === 'zoom-in') el.style.transform = 'scale(0.85)';
      el.style.opacity = '0';
      observer.observe(el);
    });

    /* ---------- Blossom burst on page click ---------- */
    const handleDocClick = (e) => {
      const count = 8;
      for (let i = 0; i < count; i++) {
        const el = document.createElement('span');
        el.classList.add('sushi-particle');
        el.textContent = '🌸';
        el.style.fontSize = `${1.0 + Math.random() * 0.8}rem`;

        const angle = (360 / count) * i + (Math.random() * 30 - 15);
        const rad = (angle * Math.PI) / 180;
        const d1 = 50 + Math.random() * 50;
        const d2 = 90 + Math.random() * 60;

        el.style.setProperty('--sx', `${Math.cos(rad) * d1}px`);
        el.style.setProperty('--sy', `${Math.sin(rad) * d1}px`);
        el.style.setProperty('--sx2', `${Math.cos(rad) * d2}px`);
        el.style.setProperty('--sy2', `${Math.sin(rad) * d2 + 30}px`);
        el.style.setProperty('--srot', `${(Math.random() - 0.5) * 160}deg`);
        el.style.setProperty('--srot2', `${(Math.random() - 0.5) * 320}deg`);
        el.style.left = `${e.clientX - 12}px`;
        el.style.top = `${e.clientY - 12}px`;

        document.body.appendChild(el);
        el.addEventListener('animationend', () => el.remove());
      }
    };
    document.addEventListener('click', handleDocClick);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleDocClick);
      observer.disconnect();
      document.getElementById('flower-cursor-style')?.remove();
    };
  }, []);

  return (
    <>
      <div className="bg-blobs">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
      </div>

      <Navbar />

      <main>
        <Hero />
        <About />
        <Education />
        <TechStack />
        <Projects />
        <Contact />
      </main>

      <Footer />

      <button
        type="button"
        className={`scroll-top${showScrollTop ? ' visible' : ''}`}
        aria-label="Scroll to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <i className="fa-solid fa-chevron-up" />
      </button>
    </>
  );
}
