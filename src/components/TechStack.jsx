import React, { useState } from 'react';
import { Atom, Code2, GitBranch, Globe, Palette, Zap } from 'lucide-react';
import {
  skillGroups,
  techStackCategories,
  techStackList,
} from '../data/portfolioData';

const iconMap = {
  Atom,
  Zap,
  Palette,
  Code2,
  GitBranch,
  Globe,
};

export default function TechStack() {
  const [selectedCategory, setSelectedCategory] = useState('ทั้งหมด');

  const filteredTechStack =
    selectedCategory === 'ทั้งหมด'
      ? techStackList
      : techStackList.filter((item) => item.category === selectedCategory);

  return (
    <section id="skills">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-tag">Skills</span>
          <h2 className="section-title">ทักษะและเครื่องมือ</h2>
          <div className="section-divider" />
        </div>

        <div className="skills-wrapper">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="skills-group"
              data-aos={group.aos}
            >
              <div className="skills-group-title">
                <div className="skills-group-icon">{group.icon}</div>
                {group.title}
              </div>

              <div className="skill-tags">
                {group.items.map((item) => (
                  <span key={item.name} className="skill-tag">
                    <i className={item.iconClass} /> {item.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Cards Showcase */}
        <div className="techstack-showcase" data-aos="fade-up">
          <div className="techstack-filters">
            {techStackCategories.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  className={`techstack-filter-btn${isActive ? ' active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category === 'ทั้งหมด' ? '🌸 ทั้งหมด' : category}
                </button>
              );
            })}
          </div>

          <div className="techstack-grid">
            {filteredTechStack.map((item) => {
              const IconComponent = iconMap[item.icon] || Code2;
              return (
                <div
                  key={item.name}
                  className="techstack-card"
                  style={{ background: item.cardTint }}
                >
                  <div
                    className="techstack-card-glow"
                    style={{ background: item.glowColor }}
                  />

                  <div className="techstack-card-top">
                    <div
                      className="techstack-card-icon"
                      style={{ background: item.iconBg }}
                    >
                      <IconComponent size={22} strokeWidth={2.2} />
                    </div>
                    <span className="techstack-card-cat">{item.category}</span>
                  </div>

                  <h3 className="techstack-card-title">{item.name}</h3>
                  <p
                    className="techstack-card-role"
                    style={{ color: item.accentColor }}
                  >
                    {item.role}
                  </p>
                  <p className="techstack-card-desc">{item.description}</p>

                  <div className="techstack-card-footer">
                    <span className="techstack-card-badge">{item.badge}</span>
                    <span className="techstack-card-status">✓ ใช้งานอยู่</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
