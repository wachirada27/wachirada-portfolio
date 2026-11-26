import React, { useEffect, useRef, useState } from 'react';
import { aboutStats } from '../data/portfolioData';

function AnimatedCounter({ count, isFloat }) {
  const [display, setDisplay] = useState(isFloat ? '0.00' : '0');
  const elRef = useRef(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const duration = 1800;
            const start = performance.now();

            const tick = (now) => {
              const elapsed = now - start;
              const progress = Math.min(elapsed / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              const value = count * eased;
              setDisplay(isFloat ? value.toFixed(2) : String(Math.round(value)));
              if (progress < 1) {
                requestAnimationFrame(tick);
              }
            };

            requestAnimationFrame(tick);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [count, isFloat]);

  return (
    <div ref={elRef} className="stat-number">
      {display}
    </div>
  );
}

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-tag">About Me</span>
          <h2 className="section-title">เกี่ยวกับฉัน</h2>
          <div className="section-divider" />
        </div>

        <div className="stats-grid">
          {aboutStats.map((stat) => (
            <div
              key={stat.label}
              className="stat-card"
              data-aos="fade-up"
              data-aos-delay={stat.delay}
            >
              <AnimatedCounter count={stat.count} isFloat={stat.isFloat} />
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
