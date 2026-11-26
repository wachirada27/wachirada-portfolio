import React, { useState } from 'react';
import { Layers, Zap, Palette, Code2, GitBranch, Globe, Sparkles, Check } from 'lucide-react';
import { techStackList } from '../data/portfolioData';

export default function TechStack() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Frontend', 'Build Tools', 'Styling', 'Core Language', 'DevOps & Tools'];

  const filteredTech = selectedCategory === 'All'
    ? techStackList
    : techStackList.filter(t => t.category === selectedCategory);

  const techConfig = {
    'React': {
      icon: <Layers className="w-7 h-7 text-cyan-500" />,
      gradient: 'from-cyan-400 to-blue-500',
      bg: 'from-cyan-50 to-blue-50',
      border: 'border-cyan-200',
      pill: 'bg-cyan-100 text-cyan-700'
    },
    'Vite': {
      icon: <Zap className="w-7 h-7 text-amber-500" />,
      gradient: 'from-amber-400 to-orange-500',
      bg: 'from-amber-50 to-orange-50',
      border: 'border-amber-200',
      pill: 'bg-amber-100 text-amber-700'
    },
    'Tailwind CSS': {
      icon: <Palette className="w-7 h-7 text-sky-500" />,
      gradient: 'from-sky-400 to-cyan-500',
      bg: 'from-sky-50 to-cyan-50',
      border: 'border-sky-200',
      pill: 'bg-sky-100 text-sky-700'
    },
    'JavaScript (ES6+)': {
      icon: <Code2 className="w-7 h-7 text-yellow-500" />,
      gradient: 'from-yellow-400 to-amber-500',
      bg: 'from-yellow-50 to-amber-50',
      border: 'border-yellow-200',
      pill: 'bg-yellow-100 text-yellow-700'
    },
    'GitHub': {
      icon: <GitBranch className="w-7 h-7 text-slate-600" />,
      gradient: 'from-slate-500 to-slate-700',
      bg: 'from-slate-50 to-gray-50',
      border: 'border-slate-200',
      pill: 'bg-slate-100 text-slate-700'
    },
    'Vercel': {
      icon: <Globe className="w-7 h-7 text-violet-600" />,
      gradient: 'from-violet-500 to-purple-600',
      bg: 'from-violet-50 to-purple-50',
      border: 'border-violet-200',
      pill: 'bg-violet-100 text-violet-700'
    },
  };

  return (
    <section id="tech" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-pink-50/50 to-amber-50/30 -z-10" />
      <div className="absolute top-20 right-10 w-96 h-96 rounded-full blur-3xl -z-10" style={{background: 'radial-gradient(circle, rgba(167,139,250,0.2) 0%, transparent 70%)'}} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-violet-100 to-pink-100 border border-violet-200 text-sm font-bold text-violet-700">
            <Sparkles className="w-3.5 h-3.5" /> เทคโนโลยีที่ใช้พัฒนา
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-800 tracking-tight">
            Stack ที่เลือกใช้สร้าง
            <br />
            <span className="bg-gradient-to-r from-violet-600 via-pink-500 to-amber-500 bg-clip-text text-transparent">
              wachirada-portfolio.vercel.app
            </span>
          </h2>
          <p className="text-slate-500 text-lg">เครื่องมือมาตรฐานสากลที่คัดมาเป็นพิเศษเพื่อประสิทธิภาพและความสวยงามสูงสุด</p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button key={cat} onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-2xl text-sm font-bold transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-violet-600 to-pink-500 text-white shadow-lg shadow-violet-200'
                  : 'bg-white text-slate-500 hover:text-violet-600 border border-purple-100 shadow-sm'
              }`}
            >
              {cat === 'All' ? '✨ ทั้งหมด' : cat}
            </button>
          ))}
        </div>

        {/* Tech Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredTech.map((tech) => {
            const cfg = techConfig[tech.name] || { icon: null, gradient: 'from-slate-400 to-slate-600', bg: 'from-slate-50 to-gray-50', border: 'border-slate-200', pill: 'bg-slate-100 text-slate-700' };
            return (
              <div
                key={tech.name}
                className={`group relative rounded-3xl bg-gradient-to-br ${cfg.bg} border ${cfg.border} p-6 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 overflow-hidden`}
              >
                {/* Decorative circle */}
                <div className={`absolute -top-8 -right-8 w-32 h-32 rounded-full bg-gradient-to-br ${cfg.gradient} opacity-10 group-hover:opacity-20 transition-opacity`} />

                <div className="flex items-start justify-between mb-5">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cfg.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                    <div className="text-white">{React.cloneElement(cfg.icon, { className: 'w-7 h-7 text-white' })}</div>
                  </div>
                  <span className={`px-3 py-1 rounded-xl text-xs font-black ${cfg.pill}`}>
                    {tech.category}
                  </span>
                </div>

                <h3 className="text-xl font-black text-slate-800 mb-1">{tech.name}</h3>
                <p className={`text-sm font-bold mb-3 bg-gradient-to-r ${cfg.gradient} bg-clip-text text-transparent`}>{tech.role}</p>
                <p className="text-sm text-slate-500 leading-relaxed mb-5">{tech.description}</p>

                <div className="flex items-center justify-between pt-4 border-t border-white/60">
                  <span className="text-xs font-bold text-slate-400 font-mono">{tech.badge}</span>
                  <span className="flex items-center gap-1 text-xs font-bold text-emerald-600">
                    <Check className="w-3.5 h-3.5" /> Active
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary Table */}
        <div className="bg-white rounded-3xl border border-purple-100 shadow-xl shadow-purple-100/40 overflow-hidden">
          <div className="p-6 border-b border-purple-100 bg-gradient-to-r from-violet-50 to-pink-50 flex items-center justify-between flex-wrap gap-3">
            <div>
              <h3 className="text-xl font-black text-slate-800">📊 ตารางสรุปหน้าที่ของเทคโนโลยีทั้ง 6</h3>
              <p className="text-sm text-slate-400">โครงสร้าง Tech Stack ของ wachirada-portfolio</p>
            </div>
            <span className="px-4 py-2 rounded-2xl bg-emerald-100 text-emerald-700 text-xs font-black">
              ✅ Production Stack
            </span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-gradient-to-r from-slate-50 to-purple-50 border-b border-purple-100">
                <tr>
                  <th className="py-4 px-6 font-black text-slate-700">🔧 เทคโนโลยี</th>
                  <th className="py-4 px-6 font-black text-slate-700">📋 หน้าที่การทำงาน</th>
                  <th className="py-4 px-6 font-black text-slate-700 hidden md:table-cell">⚡ ข้อดีหลัก</th>
                  <th className="py-4 px-6 font-black text-slate-700">สถานะ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-purple-50">
                {[
                  { name: 'React', role: 'ใช้พัฒนาเว็บไซต์ด้วย Component', adv: 'Reusable UI + State Management', pill: 'bg-cyan-100 text-cyan-700', dot: 'bg-cyan-400' },
                  { name: 'Vite', role: 'ใช้สร้างและจัดการโปรเจกต์', adv: 'HMR เร็วมาก + Build < 1 วินาที', pill: 'bg-amber-100 text-amber-700', dot: 'bg-amber-400' },
                  { name: 'Tailwind CSS', role: 'ใช้ตกแต่งและกำหนดรูปแบบเว็บไซต์', adv: 'Utility-First + Responsive แบบง่าย', pill: 'bg-sky-100 text-sky-700', dot: 'bg-sky-400' },
                  { name: 'JavaScript ES6+', role: 'ใช้เพิ่มลูกเล่นและควบคุมการทำงาน', adv: 'Filter, Modal, Clipboard, Form Logic', pill: 'bg-yellow-100 text-yellow-700', dot: 'bg-yellow-400' },
                  { name: 'GitHub', role: 'ใช้จัดเก็บและจัดการ Source Code', adv: 'Version Control + CI/CD Webhook', pill: 'bg-slate-100 text-slate-600', dot: 'bg-slate-400' },
                  { name: 'Vercel', role: 'ใช้เผยแพร่เว็บไซต์ขึ้นออนไลน์', adv: 'Edge CDN โลก + HTTPS + Auto Deploy', pill: 'bg-violet-100 text-violet-700', dot: 'bg-violet-400' },
                ].map((row) => (
                  <tr key={row.name} className="hover:bg-gradient-to-r hover:from-violet-50/50 hover:to-pink-50/50 transition-colors">
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2 font-black text-slate-800">
                        <span className={`w-2.5 h-2.5 rounded-full ${row.dot}`} />
                        {row.name}
                      </div>
                    </td>
                    <td className="py-4 px-6 font-semibold text-slate-700">{row.role}</td>
                    <td className="py-4 px-6 text-slate-500 hidden md:table-cell">{row.adv}</td>
                    <td className="py-4 px-6">
                      <span className={`px-3 py-1 rounded-xl text-xs font-black ${row.pill}`}>
                        ✓ พร้อมใช้
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
