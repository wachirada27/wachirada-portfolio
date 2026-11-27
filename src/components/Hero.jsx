import React, { useEffect, useState } from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const [roleText, setRoleText] = useState(personalInfo.roles[0]);

  useEffect(() => {
    let roleIdx = 0;
    let charIdx = 0;
    let deleting = false;
    let timerId;

    const typewrite = () => {
      const current = personalInfo.roles[roleIdx];
      if (!deleting) {
        setRoleText(current.slice(0, charIdx + 1));
        charIdx++;
        if (charIdx === current.length) {
          deleting = true;
          timerId = setTimeout(typewrite, 1800);
          return;
        }
      } else {
        setRoleText(current.slice(0, charIdx - 1));
        charIdx--;
        if (charIdx === 0) {
          deleting = false;
          roleIdx = (roleIdx + 1) % personalInfo.roles.length;
        }
      }
      timerId = setTimeout(typewrite, deleting ? 55 : 90);
    };

    timerId = setTimeout(typewrite, 800);
    return () => clearTimeout(timerId);
  }, []);

  const handleImageClick = (e) => {
    const count = 5;
    for (let i = 0; i < count; i++) {
      const el = document.createElement('span');
      el.classList.add('flower-particle');
      el.textContent = 'Hello';
      el.style.color = '#e8a0b4';
      el.style.fontWeight = '700';
      el.style.textShadow = '0 0 8px rgba(232,160,180,0.6)';

      const angle = (360 / count) * i + (Math.random() * 20 - 10);
      const rad = (angle * Math.PI) / 180;
      const dist1 = 80 + Math.random() * 60;
      const dist2 = 130 + Math.random() * 80;

      el.style.setProperty('--tx', `${Math.cos(rad) * dist1}px`);
      el.style.setProperty('--ty', `${Math.sin(rad) * dist1}px`);
      el.style.setProperty('--tx2', `${Math.cos(rad) * dist2}px`);
      el.style.setProperty('--ty2', `${Math.sin(rad) * dist2 + 40}px`);
      el.style.setProperty('--rot', `${(Math.random() - 0.5) * 180}deg`);
      el.style.setProperty('--rot2', `${(Math.random() - 0.5) * 360}deg`);
      el.style.left = `${e.clientX - 12}px`;
      el.style.top = `${e.clientY - 12}px`;
      el.style.fontSize = `${1.1 + Math.random() * 0.8}rem`;

      document.body.appendChild(el);
      el.addEventListener('animationend', () => el.remove());
    }
  };

  const handleContactScroll = (e) => {
    const target = document.querySelector('#contact');
    if (target) {
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-text">
            <div className="hero-greeting">
              <span className="hero-greeting-dot" />
              สวัสดี, ยินดีที่ได้รู้จัก!
            </div>

            <h1 className="hero-name">
              {personalInfo.fullName}
              <br />
              <span className="highlight">{personalInfo.nameTh}</span>
            </h1>

            <p className="hero-role">{roleText}</p>
            <p className="hero-bio">{personalInfo.bio}</p>

            <div className="hero-buttons">
              <a
                href={personalInfo.resumePath}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                <i className="fa-solid fa-file-arrow-down" /> Download CV
              </a>
              <a
                href="#contact"
                className="btn-secondary"
                onClick={handleContactScroll}
              >
                <i className="fa-solid fa-paper-plane" /> ติดต่อฉัน
              </a>
            </div>

            <div className="hero-socials">
              <a
                href={`mailto:${personalInfo.email}`}
                className="social-link"
                title="Email"
              >
                <i className="fa-solid fa-envelope" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="social-link"
                title="LinkedIn"
              >
                <i className="fa-brands fa-linkedin-in" />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="social-link"
                title="GitHub"
              >
                <i className="fa-brands fa-github" />
              </a>
            </div>
          </div>

          <div className="hero-image">
            <div className="hero-img-wrapper">
              <div className="hero-img-ring" />
              <div className="hero-img-ring-2" />
              <div className="hero-img-circle" onClick={handleImageClick}>
                <img src={personalInfo.imgPath} alt={personalInfo.fullName} />
              </div>
              <div className="hero-badge">
                <span className="hero-badge-icon">🎓</span>
                <span>{personalInfo.badgeText}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
