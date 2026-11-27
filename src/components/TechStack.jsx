import React, { useEffect, useRef, useState } from 'react';
import {
  Atom,
  Box,
  Braces,
  ChevronLeft,
  ChevronRight,
  Code2,
  Cpu,
  Database,
  FileCode,
  GitBranch,
  Globe,
  HardDrive,
  Hash,
  Laptop,
  Layers,
  Layout,
  Palette,
  Send,
  Server,
  Smartphone,
  Terminal,
  Wrench,
  Zap,
} from 'lucide-react';
import {
  skillGroups,
  techStackCategories,
  techStackList,
} from '../data/portfolioData';

const iconMap = {
  Atom,
  Box,
  Braces,
  Code2,
  Cpu,
  Database,
  FileCode,
  GitBranch,
  Globe,
  HardDrive,
  Hash,
  Laptop,
  Layers,
  Layout,
  Palette,
  Send,
  Server,
  Smartphone,
  Terminal,
  Wrench,
  Zap,
};

export default function TechStack() {
  const [selectedCategory, setSelectedCategory] = useState('ทั้งหมด');
  const [isHoverScrolling, setIsHoverScrolling] = useState(false);
  const sliderRef = useRef(null);
  const hoverScrollFrameRef = useRef(null);
  const isAllView = selectedCategory === 'ทั้งหมด';

  const filteredTechStack = isAllView
    ? techStackList
    : techStackList.filter((item) => item.category === selectedCategory);

  const stopHoverScroll = () => {
    if (hoverScrollFrameRef.current !== null) {
      cancelAnimationFrame(hoverScrollFrameRef.current);
      hoverScrollFrameRef.current = null;
    }
    setIsHoverScrolling(false);
  };

  const startHoverScroll = (direction) => {
    stopHoverScroll();
    setIsHoverScrolling(true);
    const step = () => {
      if (sliderRef.current) {
        sliderRef.current.scrollLeft += direction * 7;
      }
      hoverScrollFrameRef.current = requestAnimationFrame(step);
    };
    hoverScrollFrameRef.current = requestAnimationFrame(step);
  };

  useEffect(() => {
    return () => stopHoverScroll();
  }, [selectedCategory]);

  const handleSlide = (direction) => {
    stopHoverScroll();
    if (!sliderRef.current) return;
    const step = Math.max(sliderRef.current.clientWidth * 0.8, 300);
    sliderRef.current.scrollBy({
      left: direction * step,
      behavior: 'smooth',
    });
  };

  return (
    <section id="skills">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-tag">Skills</span>
          <h2 className="section-title">ทักษะและเครื่องมือ</h2>
          <div className="section-divider" />
        </div>

        <div className="skills-wrapper">
          {skillGroups.map((group) => {
            const GroupIcon = iconMap[group.icon] || Code2;
            return (
              <div
                key={group.title}
                className="skills-group"
                data-aos={group.aos}
              >
                <div className="skills-group-title">
                  <div className="skills-group-icon">
                    <GroupIcon size={18} strokeWidth={2.2} />
                  </div>
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
            );
          })}
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
                  {category}
                </button>
              );
            })}
          </div>

          <div className={isAllView ? 'techstack-slider-wrap' : ''}>
            {isAllView && (
              <>
                <button
                  type="button"
                  className="techstack-slider-btn prev"
                  onClick={() => handleSlide(-1)}
                  onMouseEnter={() => startHoverScroll(-1)}
                  onMouseLeave={stopHoverScroll}
                  aria-label="เลื่อนซ้าย"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  type="button"
                  className="techstack-slider-btn next"
                  onClick={() => handleSlide(1)}
                  onMouseEnter={() => startHoverScroll(1)}
                  onMouseLeave={stopHoverScroll}
                  aria-label="เลื่อนขวา"
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}

            <div
              ref={sliderRef}
              className={`techstack-grid${isAllView ? ' techstack-slider' : ''}${isHoverScrolling ? ' is-hover-scrolling' : ''}`}
            >
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
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
