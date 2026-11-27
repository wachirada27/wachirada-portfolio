import React, { useEffect, useRef, useState } from 'react';
import { educationInfo } from '../data/portfolioData';

export default function Education() {
  const cardRef = useRef(null);
  const [isAssembled, setIsAssembled] = useState(false);

  useEffect(() => {
    const target = cardRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsAssembled(true);
        } else {
          setIsAssembled(false);
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="education">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-tag">Education</span>
          <h2 className="section-title">การศึกษา</h2>
          <div className="section-divider" />
        </div>

        <div
          ref={cardRef}
          className={`edu-card${isAssembled ? ' is-assembled' : ''}`}
          data-aos="zoom-in"
        >
          <div className="edu-icon" aria-hidden="true">
            <svg
              className="edu-cap-svg"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* ชิ้นที่ 1: ตัวฐานหมวก (ขึ้นมาจากด้านล่าง) */}
              <path
                className="edu-cap-part edu-cap-base"
                d="M17 31.5V41.5C17 45.2 23.7 48.5 32 48.5C40.3 48.5 47 45.2 47 41.5V31.5L32 38.5L17 31.5Z"
                fill="#4A2538"
              />
              {/* ชิ้นที่ 2: แผ่นบนหมวกสี่เหลี่ยม (ลอยลงมาจากด้านบน) */}
              <path
                className="edu-cap-part edu-cap-top"
                d="M32 14L6 26L32 38L58 26L32 14Z"
                fill="#2F1825"
                stroke="#FFE3EE"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              {/* ชิ้นที่ 3: กระดุมกลางหมวก (เด้งขึ้นตรงกลาง) */}
              <circle
                className="edu-cap-part edu-cap-button"
                cx="32"
                cy="25.5"
                r="2.8"
                fill="#FBCFE8"
              />
              {/* ชิ้นที่ 4: พู่หมวก (แกว่งเข้ามาด้านขวา) */}
              <g className="edu-cap-part edu-cap-tassel">
                <path
                  d="M32 25.5L49 30.5V40"
                  stroke="#FCD34D"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M49 39.5L46.5 47H51.5L49 39.5Z"
                  fill="#FBBF24"
                />
              </g>
              {/* ชิ้นที่ 5: ประกายวิบวับเมื่อประกอบเสร็จ */}
              <path
                className="edu-cap-part edu-cap-sparkle s1"
                d="M13 14L14.3 17L17.3 18.3L14.3 19.6L13 22.6L11.7 19.6L8.7 18.3L11.7 17L13 14Z"
                fill="#FFF7D6"
              />
              <path
                className="edu-cap-part edu-cap-sparkle s2"
                d="M52 12L53 14.2L55.2 15.2L53 16.2L52 18.4L51 16.2L48.8 15.2L51 14.2L52 12Z"
                fill="#FFF7D6"
              />
            </svg>
          </div>
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
