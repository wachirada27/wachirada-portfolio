import React from 'react';
import { personalInfo } from '../data/portfolioData';

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
          <div className="contact-links" data-aos="fade-left">
            <a
              href={`mailto:${personalInfo.email}`}
              className="contact-link-card"
            >
              <div className="contact-link-icon">
                <i
                  className="fa-solid fa-envelope"
                  style={{ color: 'var(--mauve)' }}
                />
              </div>
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
              <div className="contact-link-icon">
                <i
                  className="fa-solid fa-file-arrow-down"
                  style={{ color: 'var(--mauve)' }}
                />
              </div>
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
