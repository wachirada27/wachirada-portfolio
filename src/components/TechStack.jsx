import React, { useState } from 'react';
import { Layers, Zap, Palette, Code2, GitBranch, Globe, Sparkles, Check } from 'lucide-react';
import { techStackList } from '../data/portfolioData';

const techConfig = {
  'React':              { icon: '⚛️', from: 'from-pink-400',    to: 'to-rose-500',    bg: 'from-pink-50 to-rose-50',      border: 'border-pink-200',    pill: 'bg-pink-100 text-pink-700' },
  'Vite':               { icon: '⚡', from: 'from-orange-400',  to: 'to-rose-400',    bg: 'from-orange-50 to-rose-50',    border: 'border-orange-200',  pill: 'bg-orange-100 text-orange-700' },
  'Tailwind CSS':       { icon: '🎨', from: 'from-fuchsia-400', to: 'to-pink-500',    bg: 'from-fuchsia-50 to-pink-50',   border: 'border-fuchsia-200', pill: 'bg-fuchsia-100 text-fuchsia-700' },
  'JavaScript (ES6+)':  { icon: '📜', from: 'from-rose-400',    to: 'to-fuchsia-400', bg: 'from-rose-50 to-fuchsia-50',   border: 'border-rose-200',    pill: 'bg-rose-100 text-rose-700' },
  'GitHub':             { icon: '🐙', from: 'from-slate-500',   to: 'to-slate-700',   bg: 'from-slate-50 to-gray-50',     border: 'border-slate-200',   pill: 'bg-slate-100 text-slate-700' },
  'Vercel':             { icon: '▲',  from: 'from-purple-400',  to: 'to-fuchsia-500', bg: 'from-purple-50 to-fuchsia-50', border: 'border-purple-200',  pill: 'bg-purple-100 text-purple-700' },
};

export default function TechStack() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Frontend', 'Build Tools', 'Styling', 'Core Language', 'DevOps & Tools'];
  const filteredTech = selectedCategory === 'All' ? techStackList : techStackList.filter(t => t.category === selectedCategory);

  return (
    <section id="tech" className="py-20 md:py-28 relative overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-rose-50 to-fuchsia-50 -z-10" />
      <div className="absolute top-20 right-10 w-96 h-96 rounded-full blur-3xl -z-10 opacity-40"
        style={{ background: 'radial-gradient(circle, #f9a8d4 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-100 to-fuchsia-100 border border-pink-200 text-sm font-bold text-pink-700">
            <Sparkles className="w-3.5 h-3.5" /> เทคโนโลยีที่ใช้พัฒนา
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-800">
            สแตกเทคโนโลยีสำหรับ
            <br />
            <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-fuchsia-500 bg-clip-text text-transparent">
              wachirada-portfolio.vercel.app
            </span>
          </h2>
          <p className="text-slate-500 text-lg">เครื่องมือมาตรฐานสากลที่คัดมาเพื่อประสิทธิภาพและความสวยงามสูงสุด</p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button key={cat} onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-2xl text-sm font-bold transition-all ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white shadow-lg shadow-pink-200'
                  : 'bg-white text-slate-500 border border-pink-100 shadow-sm hover:border-pink-300 hover:text-pink-600'
              }`}>
              {cat === 'All' ? '🌸 ทั้งหมด' : cat}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredTech.map((tech) => {
            const cfg = techConfig[tech.name] || techConfig['GitHub'];
            return (
              <div key={tech.name}
                className={`group rounded-3xl bg-gradient-to-br ${cfg.bg} border ${cfg.border} p-6 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 relative overflow-hidden`}>
                <div className={`absolute -top-8 -right-8 w-32 h-32 rounded-full bg-gradient-to-br ${cfg.from} ${cfg.to} opacity-10 group-hover:opacity-20 transition-opacity`} />

                <div className="flex items-start justify-between mb-5">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cfg.from} ${cfg.to} flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform`}>
                    {cfg.icon}
                  </div>
                  <span className={`px-3 py-1 rounded-xl text-xs font-black ${cfg.pill}`}>{tech.category}</span>
                </div>

                <h3 className="text-xl font-black text-slate-800 mb-1">{tech.name}</h3>
                <p className={`text-sm font-bold mb-3 bg-gradient-to-r ${cfg.from} ${cfg.to} bg-clip-text text-transparent`}>{tech.role}</p>
                <p className="text-sm text-slate-500 leading-relaxed mb-5">{tech.description}</p>

                <div className="flex items-center justify-between pt-4 border-t border-white/60">
                  <span className="text-xs font-bold text-slate-400 font-mono">{tech.badge}</span>
                  <span className="flex items-center gap-1 text-xs font-bold text-emerald-600">
                    <Check className="w-3.5 h-3.5" /> ใช้งานอยู่
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary Table */}
        <div className="bg-white rounded-3xl border border-pink-100 shadow-xl shadow-pink-100/40 overflow-hidden">
          <div className="p-6 border-b border-pink-100 bg-gradient-to-r from-pink-50 to-fuchsia-50 flex items-center justify-between flex-wrap gap-3">
            <div>
              <h3 className="text-xl font-black text-slate-800">📋 ตารางสรุปหน้าที่ของเทคโนโลยีทั้ง 6</h3>
              <p className="text-sm text-slate-400">โครงสร้าง Tech Stack ของ wachirada-portfolio</p>
            </div>
            <span className="px-4 py-2 rounded-2xl bg-pink-100 text-pink-700 text-xs font-black">🌸 Production Stack</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-gradient-to-r from-pink-50/60 to-fuchsia-50/60 border-b border-pink-100">
                <tr>
                  <th className="py-4 px-6 font-black text-slate-700">🔧 เทคโนโลยี</th>
                  <th className="py-4 px-6 font-black text-slate-700">📋 หน้าที่การทำงาน</th>
                  <th className="py-4 px-6 font-black text-slate-700 hidden md:table-cell">⚡ ข้อดีหลัก</th>
                  <th className="py-4 px-6 font-black text-slate-700">สถานะ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-pink-50">
                {[
                  { icon: '⚛️', name: 'React',           role: 'ใช้พัฒนาเว็บไซต์ด้วย Component',          adv: 'Reusable UI + State Management',      pill: 'bg-pink-100 text-pink-700',     dot: 'bg-pink-400' },
                  { icon: '⚡', name: 'Vite',            role: 'ใช้สร้างและจัดการโปรเจกต์',               adv: 'HMR เร็วมาก + Build < 1 วินาที',      pill: 'bg-orange-100 text-orange-700', dot: 'bg-orange-400' },
                  { icon: '🎨', name: 'Tailwind CSS',    role: 'ใช้ตกแต่งและกำหนดรูปแบบเว็บไซต์',         adv: 'Utility-First + Responsive แบบง่าย',  pill: 'bg-fuchsia-100 text-fuchsia-700', dot: 'bg-fuchsia-400' },
                  { icon: '📜', name: 'JavaScript ES6+', role: 'ใช้เพิ่มลูกเล่นและควบคุมการทำงาน',        adv: 'Filter, Modal, Clipboard, Form Logic', pill: 'bg-rose-100 text-rose-700',     dot: 'bg-rose-400' },
                  { icon: '🐙', name: 'GitHub',          role: 'ใช้จัดเก็บและจัดการ Source Code',          adv: 'Version Control + CI/CD Webhook',     pill: 'bg-slate-100 text-slate-600',   dot: 'bg-slate-400' },
                  { icon: '▲',  name: 'Vercel',          role: 'ใช้เผยแพร่เว็บไซต์ขึ้นออนไลน์ (Deploy)', adv: 'Edge CDN โลก + HTTPS + Auto Deploy',  pill: 'bg-purple-100 text-purple-700', dot: 'bg-purple-400' },
                ].map((row) => (
                  <tr key={row.name} className="hover:bg-pink-50/50 transition-colors">
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2 font-black text-slate-800">
                        <span className={`w-2.5 h-2.5 rounded-full ${row.dot}`} />
                        <span>{row.icon}</span> {row.name}
                      </div>
                    </td>
                    <td className="py-4 px-6 font-semibold text-slate-700">{row.role}</td>
                    <td className="py-4 px-6 text-slate-500 hidden md:table-cell">{row.adv}</td>
                    <td className="py-4 px-6">
                      <span className={`px-3 py-1 rounded-xl text-xs font-black ${row.pill}`}>✓ พร้อมใช้</span>
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
