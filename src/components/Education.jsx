import React from 'react';
import { educationInfo } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-tag">Education</span>
          <h2 className="section-title">การศึกษา</h2>
          <div className="section-divider" />
        </div>

        <div className="edu-card" data-aos="zoom-in">
          <div className="edu-icon">🎓</div>
          <div className="edu-info">
            <h3>{educationInfo.university}</h3>
            <p className="edu-major">
              <i
                className="fa-solid fa-microchip"
                style={{ color: 'var(--dusty)', marginRight: '6px' }}
              />
              {educationInfo.major}
            </p>
            <p className="edu-period">
              <i
                className="fa-regular fa-calendar"
                style={{ color: 'var(--text-light)', marginRight: '6px' }}
              />
              {educationInfo.period}
            </p>
            <span className="edu-badge">
              <i
                className="fa-solid fa-star"
                style={{ color: 'var(--mauve)' }}
              />
              {educationInfo.gpa}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
