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
  Pause,
  Play,
  RotateCw,
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
  Pause,
  Play,
  RotateCw,
  Send,
  Server,
  Smartphone,
  Terminal,
  Wrench,
  Zap,
};

export default function TechStack() {
  const [selectedCategory, setSelectedCategory] = useState('ทั้งหมด');
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredDeckIndex, setHoveredDeckIndex] = useState(null);
  const [dragOrder, setDragOrder] = useState([]);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dbFlipAngle, setDbFlipAngle] = useState(0);
  const [activeAccordionIndex, setActiveAccordionIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const touchStartXRef = useRef(null);
  const dragStartRef = useRef({ x: 0, y: 0 });
  const hoverTimeoutRef = useRef(null);
  const hoverIntervalRef = useRef(null);
  const isAllView = selectedCategory === 'ทั้งหมด';
  const isBackendView = selectedCategory === 'Backend';
  const isDatabaseView = selectedCategory === 'Database';
  const isToolsView = selectedCategory === 'Tools & DevOps';

  const filteredTechStack = isAllView
    ? techStackList
    : techStackList.filter((item) => item.category === selectedCategory);

  const total = filteredTechStack.length;

  const stopHoverStep = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    if (hoverIntervalRef.current) {
      clearInterval(hoverIntervalRef.current);
      hoverIntervalRef.current = null;
    }
  };

  const startHoverStep = (direction) => {
    stopHoverStep();
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveIndex((prev) => (prev + direction + total) % total);
      hoverIntervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + direction + total) % total);
      }, 520);
    }, 160);
  };

  useEffect(() => {
    setActiveIndex(0);
    setHoveredDeckIndex(null);
    setDragOrder(filteredTechStack.map((_, i) => i));
    setDragOffset({ x: 0, y: 0 });
    setIsDragging(false);
    setDbFlipAngle(0);
    setActiveAccordionIndex(0);
    setIsAutoPlay(false);
    stopHoverStep();
    return () => stopHoverStep();
  }, [selectedCategory, total]);

  const handleDragStart = (e) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    setIsDragging(true);
    dragStartRef.current = { x: e.clientX, y: e.clientY };
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;
    setDragOffset({
      x: e.clientX - dragStartRef.current.x,
      y: (e.clientY - dragStartRef.current.y) * 0.35,
    });
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (Math.abs(dragOffset.x) > 75) {
      setDragOrder((prev) =>
        prev.length > 1 ? [...prev.slice(1), prev[0]] : prev,
      );
    }
    setDragOffset({ x: 0, y: 0 });
  };

  useEffect(() => {
    if (!isAllView || !isAutoPlay || total <= 1) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 2800);
    return () => clearInterval(timer);
  }, [isAllView, isAutoPlay, total]);

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartXRef.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartXRef.current;
    touchStartXRef.current = null;
    if (Math.abs(diff) > 40) {
      if (diff > 0) goPrev();
      else goNext();
    }
  };

  const getOffset = (index) => {
    let offset = index - activeIndex;
    if (offset > total / 2) offset -= total;
    if (offset < -total / 2) offset += total;
    return offset;
  };

  const getCardStyle = (offset, item) => {
    const abs = Math.abs(offset);
    if (abs > 3) {
      return {
        background: item.cardTint,
        opacity: 0,
        pointerEvents: 'none',
        zIndex: 1,
        transform: `translate(-50%, -50%) translateX(${offset > 0 ? 460 : -460}px) scale(0.55) rotateY(${offset > 0 ? -35 : 35}deg)`,
        filter: 'blur(3px)',
      };
    }

    const translateXMap = { 0: 0, 1: 185, 2: 330, 3: 440 };
    const scaleMap = { 0: 1, 1: 0.87, 2: 0.74, 3: 0.62 };
    const rotateMap = { 0: 0, 1: -18, 2: -28, 3: -36 };
    const opacityMap = { 0: 1, 1: 0.92, 2: 0.7, 3: 0.4 };
    const blurMap = { 0: '0px', 1: '0.3px', 2: '1px', 3: '1.8px' };
    const zMap = { 0: 10, 1: 8, 2: 6, 3: 4 };

    const dir = offset === 0 ? 0 : offset > 0 ? 1 : -1;

    return {
      background: item.cardTint,
      opacity: opacityMap[abs],
      zIndex: zMap[abs],
      transform: `translate(-50%, -50%) translateX(${dir * translateXMap[abs]}px) scale(${scaleMap[abs]}) rotateY(${dir * rotateMap[abs]}deg)`,
      filter: `blur(${blurMap[abs]})`,
    };
  };

  const activeItem = filteredTechStack[activeIndex] || filteredTechStack[0];
  const ActiveIcon = activeItem ? iconMap[activeItem.icon] || Code2 : Code2;

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

          {isAllView ? (
            <div className="glassy-carousel-wrap">
              <div
                className="glassy-carousel-stage"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                {filteredTechStack.map((item, idx) => {
                  const IconComponent = iconMap[item.icon] || Code2;
                  const offset = getOffset(idx);
                  const isActive = offset === 0;
                  return (
                    <div
                      key={item.name}
                      className={`techstack-card glassy-card${isActive ? ' is-active' : ''}`}
                      style={getCardStyle(offset, item)}
                      onClick={() => {
                        if (!isActive) setActiveIndex(idx);
                      }}
                      onMouseEnter={() => {
                        if (!isActive) setActiveIndex(idx);
                      }}
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

                      <div className="glassy-card-title-row">
                        <h3 className="techstack-card-title">{item.name}</h3>
                        <span className="glassy-card-index">
                          {idx + 1}/{total}
                        </span>
                      </div>

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

              {/* Glassy Control Bar */}
              {activeItem && (
                <div className="glassy-control-bar">
                  <button
                    type="button"
                    className="glassy-ctrl-btn"
                    onClick={goPrev}
                    onMouseEnter={() => startHoverStep(-1)}
                    onMouseLeave={stopHoverStep}
                    aria-label="ก่อนหน้า"
                  >
                    <ChevronLeft size={18} />
                  </button>

                  <button
                    type="button"
                    className={`glassy-ctrl-btn${isAutoPlay ? ' is-playing' : ''}`}
                    onClick={() => setIsAutoPlay((prev) => !prev)}
                    aria-label={isAutoPlay ? 'หยุดเลื่อนอัตโนมัติ' : 'เล่นอัตโนมัติ'}
                    title={isAutoPlay ? 'หยุดเล่นอัตโนมัติ' : 'เล่นอัตโนมัติ'}
                  >
                    {isAutoPlay ? <Pause size={15} /> : <Play size={15} />}
                  </button>

                  <div className="glassy-ctrl-info">
                    <span
                      className="glassy-ctrl-badge"
                      style={{ background: activeItem.iconBg }}
                    >
                      <ActiveIcon size={14} strokeWidth={2.3} />
                    </span>
                    <div className="glassy-ctrl-text">
                      <strong>{activeItem.name}</strong>
                      <span>
                        {activeItem.category} · {activeIndex + 1}/{total}
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="glassy-ctrl-btn"
                    onClick={goNext}
                    onMouseEnter={() => startHoverStep(1)}
                    onMouseLeave={stopHoverStep}
                    aria-label="ถัดไป"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              )}
            </div>
          ) : isBackendView ? (
            <div className="drag-deck-wrap">
              <div className="drag-deck">
                {dragOrder.map((itemIdx, orderPos) => {
                  const item = filteredTechStack[itemIdx];
                  if (!item) return null;
                  const IconComponent = iconMap[item.icon] || Code2;
                  const isTop = orderPos === 0;
                  const tilt =
                    orderPos === 0
                      ? dragOffset.x * 0.08
                      : (orderPos % 2 === 0 ? 1 : -1) * orderPos * 1.8;

                  const cardStyle = {
                    background: item.cardTint,
                    zIndex: total - orderPos,
                    opacity: Math.max(1 - orderPos * 0.14, 0.35),
                    transform: isTop
                      ? `translate(-50%, -50%) translate(${dragOffset.x}px, ${dragOffset.y}px) rotate(${tilt}deg)`
                      : `translate(-50%, -50%) translateY(${orderPos * 10}px) rotate(${tilt}deg) scale(${1 - orderPos * 0.045})`,
                    transition:
                      isTop && isDragging
                        ? 'none'
                        : 'transform 0.38s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.35s ease',
                  };

                  return (
                    <div
                      key={item.name}
                      className={`techstack-card drag-deck-card${isTop ? ' is-top' : ''}${isTop && isDragging ? ' is-dragging' : ''}`}
                      style={cardStyle}
                      onPointerDown={isTop ? handleDragStart : undefined}
                      onPointerMove={isTop ? handleDragMove : undefined}
                      onPointerUp={isTop ? handleDragEnd : undefined}
                      onPointerCancel={isTop ? handleDragEnd : undefined}
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

                      <div className="glassy-card-title-row">
                        <h3 className="techstack-card-title">{item.name}</h3>
                        <span className="glassy-card-index">
                          {itemIdx + 1}/{total}
                        </span>
                      </div>

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
              <p className="drag-deck-hint">
                ลากการ์ดไปทางซ้ายหรือขวาเพื่อสลับใบถัดไป
              </p>
            </div>
          ) : isDatabaseView && filteredTechStack.length >= 2 ? (
            (() => {
              const frontItem = filteredTechStack[0];
              const backItem = filteredTechStack[1];
              const FrontIcon = iconMap[frontItem.icon] || Code2;
              const BackIcon = iconMap[backItem.icon] || Code2;

              return (
                <div className="flip-cards-wrap">
                  <div
                    className="flip-card flip-card-single"
                    onClick={() => setDbFlipAngle((prev) => prev + 180)}
                    onMouseEnter={() =>
                      setDbFlipAngle((prev) => Math.floor(prev / 360) * 360 + 180)
                    }
                    onMouseLeave={() =>
                      setDbFlipAngle((prev) => Math.floor(prev / 360) * 360 + 360)
                    }
                  >
                    <div
                      className="flip-card-inner"
                      style={{ transform: `rotateY(${dbFlipAngle}deg)` }}
                    >
                      {/* ด้านหน้า: MySQL */}
                      <div
                        className="techstack-card flip-card-face flip-card-front"
                        style={{ background: frontItem.cardTint }}
                      >
                        <div
                          className="techstack-card-glow"
                          style={{ background: frontItem.glowColor }}
                        />

                        <div className="techstack-card-top">
                          <div
                            className="techstack-card-icon"
                            style={{ background: frontItem.iconBg }}
                          >
                            <FrontIcon size={22} strokeWidth={2.2} />
                          </div>
                          <span className="techstack-card-cat">
                            {frontItem.category}
                          </span>
                        </div>

                        <h3 className="techstack-card-title">{frontItem.name}</h3>
                        <p
                          className="techstack-card-role"
                          style={{ color: frontItem.accentColor }}
                        >
                          {frontItem.role}
                        </p>
                        <p className="techstack-card-desc">
                          {frontItem.description}
                        </p>

                        <div className="flip-hint-pill">
                          <RotateCw size={13} />
                          <span>ชี้/คลิกเพื่อพลิกเป็น {backItem.name}</span>
                        </div>
                      </div>

                      {/* ด้านหลัง: MongoDB */}
                      <div
                        className="techstack-card flip-card-face flip-card-back"
                        style={{ background: backItem.cardTint }}
                      >
                        <div
                          className="techstack-card-glow"
                          style={{ background: backItem.glowColor }}
                        />

                        <div className="techstack-card-top">
                          <div
                            className="techstack-card-icon"
                            style={{ background: backItem.iconBg }}
                          >
                            <BackIcon size={22} strokeWidth={2.2} />
                          </div>
                          <span className="techstack-card-cat">
                            {backItem.category}
                          </span>
                        </div>

                        <h3 className="techstack-card-title">{backItem.name}</h3>
                        <p
                          className="techstack-card-role"
                          style={{ color: backItem.accentColor }}
                        >
                          {backItem.role}
                        </p>
                        <p className="techstack-card-desc">
                          {backItem.description}
                        </p>

                        <div className="flip-hint-pill">
                          <RotateCw size={13} />
                          <span>ชี้/คลิกเพื่อพลิกกลับ {frontItem.name}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()
          ) : isToolsView ? (
            <div className="accordion-cards">
              {filteredTechStack.map((item, idx) => {
                const IconComponent = iconMap[item.icon] || Code2;
                const isExpanded = activeAccordionIndex === idx;
                return (
                  <div
                    key={item.name}
                    className={`techstack-card accordion-card${isExpanded ? ' is-expanded' : ''}`}
                    style={{ background: item.cardTint }}
                    onMouseEnter={() => setActiveAccordionIndex(idx)}
                    onClick={() => setActiveAccordionIndex(idx)}
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
                      {isExpanded && (
                        <span className="techstack-card-cat">{item.category}</span>
                      )}
                    </div>

                    <div className="accordion-card-body">
                      <h3 className="techstack-card-title">{item.name}</h3>
                      <div className="accordion-card-details">
                        <p
                          className="techstack-card-role"
                          style={{ color: item.accentColor }}
                        >
                          {item.role}
                        </p>
                        <p className="techstack-card-desc">{item.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div
              className="card-deck"
              onMouseLeave={() => setHoveredDeckIndex(null)}
            >
              {filteredTechStack.map((item, idx) => {
                const IconComponent = iconMap[item.icon] || Code2;
                const mid = (total - 1) / 2;
                const offset = idx - mid;
                const isHovered = hoveredDeckIndex === idx;
                const spread = total > 5 ? 68 : 86;
                const angleStep = total > 5 ? 6 : 8;
                const xShift = offset * spread;
                const yShift = offset * offset * 4.5;
                const rotateDeg = offset * angleStep;
                const baseZ = Math.round(10 - Math.abs(offset));

                const deckStyle = {
                  background: item.cardTint,
                  zIndex: isHovered ? 30 : baseZ,
                  transform: isHovered
                    ? `translate(-50%, -50%) translateX(${xShift}px) translateY(${yShift - 26}px) rotate(0deg) scale(1.07)`
                    : `translate(-50%, -50%) translateX(${xShift}px) translateY(${yShift}px) rotate(${rotateDeg}deg) scale(1)`,
                };

                return (
                  <div
                    key={item.name}
                    className={`techstack-card deck-card${isHovered ? ' is-hovered' : ''}`}
                    style={deckStyle}
                    onMouseEnter={() => setHoveredDeckIndex(idx)}
                    onClick={() =>
                      setHoveredDeckIndex((prev) => (prev === idx ? null : idx))
                    }
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
          )}
        </div>
      </div>
    </section>
  );
}
