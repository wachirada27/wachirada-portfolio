import React from 'react';
import { educationInfo, personalInfo } from '../data/portfolioData';

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-tag">Contact</span>
          <h2 className="section-title">ติดต่อฉัน</h2>
          <div className="section-divider" />
        </div>

        <div className="contact-wrapper">
          <div className="contact-info" data-aos="fade-right">
            <h3>มาคุยกันเลย! 🌸</h3>
            <p>
              หากต้องการติดต่อหรือพูดคุยเกี่ยวกับโอกาสการทำงาน โปรเจกต์
              หรือการเรียนรู้ร่วมกัน ยินดีรับทุกข้อความเสมอค่ะ
            </p>
            <div className="contact-items">
              <div className="contact-item">
                <div className="contact-item-icon">📧</div>
                <div className="contact-item-text">
                  <span>Email</span>
                  <a href={`mailto:${personalInfo.email}`}>
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-item-icon">📱</div>
                <div className="contact-item-text">
                  <span>Phone</span>
                  <a href={`tel:${personalInfo.phone.replace(/-/g, '')}`}>
                    {personalInfo.phone}
                  </a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-item-icon">🏫</div>
                <div className="contact-item-text">
                  <span>University</span>
                  <strong>{educationInfo.universityEn}</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-links" data-aos="fade-left">
            <a
              href={`mailto:${personalInfo.email}`}
              className="contact-link-card"
            >
              <div className="contact-link-icon">📧</div>
              <div className="contact-link-text">
                <strong>Email</strong>
                <span>{personalInfo.email}</span>
              </div>
              <span className="contact-link-arrow">
                <i className="fa-solid fa-arrow-right" />
              </span>
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="contact-link-card"
            >
              <div className="contact-link-icon">
                <i
                  className="fa-brands fa-linkedin-in"
                  style={{ color: 'var(--mauve)' }}
                />
              </div>
              <div className="contact-link-text">
                <strong>LinkedIn</strong>
                <span>{personalInfo.linkedinLabel}</span>
              </div>
              <span className="contact-link-arrow">
                <i className="fa-solid fa-arrow-right" />
              </span>
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="contact-link-card"
            >
              <div className="contact-link-icon">
                <i
                  className="fa-brands fa-github"
                  style={{ color: 'var(--mauve)' }}
                />
              </div>
              <div className="contact-link-text">
                <strong>GitHub</strong>
                <span>{personalInfo.githubLabel}</span>
              </div>
              <span className="contact-link-arrow">
                <i className="fa-solid fa-arrow-right" />
              </span>
            </a>

            <a
              href={personalInfo.resumePath}
              target="_blank"
              rel="noreferrer"
              className="contact-link-card"
            >
              <div className="contact-link-icon">📄</div>
              <div className="contact-link-text">
                <strong>Download CV</strong>
                <span>{personalInfo.resumeFilename}</span>
              </div>
              <span className="contact-link-arrow">
                <i className="fa-solid fa-arrow-right" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
