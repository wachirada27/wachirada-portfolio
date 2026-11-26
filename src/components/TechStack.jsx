import React, { useState } from 'react';
import { Layers, Zap, Palette, Code2, GitBranch, Globe, Sparkles, Check, Server, Terminal, Shield } from 'lucide-react';
import { techStackList } from '../data/portfolioData';

export default function TechStack() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Frontend', 'Build Tools', 'Styling', 'Core Language', 'DevOps & Tools'];

  const filteredTech = selectedCategory === 'All'
    ? techStackList
    : techStackList.filter(t => t.category === selectedCategory);

  const getTechIcon = (name) => {
    switch (name) {
      case 'React':
        return <Layers className="w-6 h-6 text-cyan-400" />;
      case 'Vite':
        return <Zap className="w-6 h-6 text-amber-400" />;
      case 'Tailwind CSS':
        return <Palette className="w-6 h-6 text-sky-400" />;
      case 'JavaScript (ES6+)':
        return <Code2 className="w-6 h-6 text-yellow-400" />;
      case 'GitHub':
        return <GitBranch className="w-6 h-6 text-slate-200" />;
      case 'Vercel':
        return <Globe className="w-6 h-6 text-indigo-400" />;
      default:
        return <Terminal className="w-6 h-6 text-indigo-400" />;
    }
  };

  return (
    <section id="tech" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>เทคโนโลยีและสแตกการพัฒนา</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            เทคโนโลยีหลักที่ใช้พัฒนาพอร์ตโฟลิโอนี้
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            เลือกสรรเครื่องมือมาตรฐานสากล เพื่อประสิทธิภาพ ความเสถียร และความเร็วสูงสุด
          </p>
        </div>

        {/* Categories Tab Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition-all ${
                selectedCategory === cat
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat === 'All' ? 'ทั้งหมด (All Stack)' : cat}
            </button>
          ))}
        </div>

        {/* Tech Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredTech.map((tech) => (
            <div
              key={tech.name}
              className="group relative rounded-2xl bg-slate-900/70 border border-slate-800/80 hover:border-slate-700 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/5"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-800/90 border border-slate-700/60 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getTechIcon(tech.name)}
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                    {tech.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-indigo-300 transition-colors">
                  {tech.name}
                </h3>
                
                <p className="text-sm font-semibold text-indigo-400 mb-3">
                  {tech.role}
                </p>

                <p className="text-sm text-slate-300/90 leading-relaxed mb-4">
                  {tech.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span className="font-mono text-slate-400">{tech.badge}</span>
                <span className="flex items-center gap-1 text-emerald-400 font-medium">
                  <Check className="w-3.5 h-3.5" />
                  พร้อมใช้งาน
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Comprehensive Comparison Table (Directly matching user prompt) */}
        <div className="rounded-2xl bg-slate-900/60 border border-slate-800 overflow-hidden shadow-xl">
          <div className="p-6 border-b border-slate-800 flex items-center justify-between bg-slate-900/90">
            <div>
              <h3 className="text-lg font-bold text-white">ตารางสรุปหน้าที่ของเทคโนโลยี (Tech Stack Overview)</h3>
              <p className="text-xs text-slate-400">โครงสร้างสแตกที่นำมาสร้าง wachirada-portfolio.vercel.app</p>
            </div>
            <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono">
              Production Stack
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-950/60 text-slate-400 text-xs uppercase tracking-wider border-b border-slate-800">
                <tr>
                  <th className="py-3.5 px-6 font-semibold">เทคโนโลยี (Technology)</th>
                  <th className="py-3.5 px-6 font-semibold">หน้าที่ในการทำงาน (Role & Purpose)</th>
                  <th className="py-3.5 px-6 font-semibold">ประโยชน์ที่ได้รับ (Key Advantage)</th>
                  <th className="py-3.5 px-6 font-semibold">สถานะในโปรเจกต์</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-slate-300">
                <tr className="hover:bg-slate-800/30 transition">
                  <td className="py-4 px-6 font-bold text-white flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
                    React
                  </td>
                  <td className="py-4 px-6 font-medium text-slate-200">
                    ใช้พัฒนาเว็บไซต์ด้วย Component
                  </td>
                  <td className="py-4 px-6 text-slate-400 text-xs">
                    แบ่งหน้าเว็บเป็นชิ้นส่วน Reusable UI, จัดการ State อย่างมีประสิทธิภาพ
                  </td>
                  <td className="py-4 px-6">
                    <span className="px-2 py-0.5 rounded text-xs bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">Configured (v19)</span>
                  </td>
                </tr>

                <tr className="hover:bg-slate-800/30 transition">
                  <td className="py-4 px-6 font-bold text-white flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                    Vite
                  </td>
                  <td className="py-4 px-6 font-medium text-slate-200">
                    ใช้สร้างและจัดการโปรเจกต์
                  </td>
                  <td className="py-4 px-6 text-slate-400 text-xs">
                    Start dev server และบิลด์โปรเจกต์รวดเร็วระดับเสี้ยววินาทีด้วย esbuild
                  </td>
                  <td className="py-4 px-6">
                    <span className="px-2 py-0.5 rounded text-xs bg-amber-500/10 text-amber-400 border border-amber-500/20">Active Bundler</span>
                  </td>
                </tr>

                <tr className="hover:bg-slate-800/30 transition">
                  <td className="py-4 px-6 font-bold text-white flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-sky-400"></span>
                    Tailwind CSS
                  </td>
                  <td className="py-4 px-6 font-medium text-slate-200">
                    ใช้ตกแต่งและกำหนดรูปแบบเว็บไซต์
                  </td>
                  <td className="py-4 px-6 text-slate-400 text-xs">
                    Utility-First CSS กำหนดสไตล์ Responsive, Dark Theme และ Animation ได้ทันที
                  </td>
                  <td className="py-4 px-6">
                    <span className="px-2 py-0.5 rounded text-xs bg-sky-500/10 text-sky-400 border border-sky-500/20">Tailwind v4 Setup</span>
                  </td>
                </tr>

                <tr className="hover:bg-slate-800/30 transition">
                  <td className="py-4 px-6 font-bold text-white flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
                    JavaScript (ES6+)
                  </td>
                  <td className="py-4 px-6 font-medium text-slate-200">
                    ใช้เพิ่มลูกเล่นและควบคุมการทำงานของเว็บไซต์
                  </td>
                  <td className="py-4 px-6 text-slate-400 text-xs">
                    ควบคุม Interaction, Dynamic Filter, การส่งฟอร์ม และ Logic ทั้งหมด
                  </td>
                  <td className="py-4 px-6">
                    <span className="px-2 py-0.5 rounded text-xs bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">Core Language</span>
                  </td>
                </tr>

                <tr className="hover:bg-slate-800/30 transition">
                  <td className="py-4 px-6 font-bold text-white flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
                    GitHub
                  </td>
                  <td className="py-4 px-6 font-medium text-slate-200">
                    ใช้จัดเก็บและจัดการ Source Code
                  </td>
                  <td className="py-4 px-6 text-slate-400 text-xs">
                    ระบบ Git Remote Repository สำรองโค้ดอย่างปลอดภัย และเชื่อมต่อ Vercel Git Hook
                  </td>
                  <td className="py-4 px-6">
                    <span className="px-2 py-0.5 rounded text-xs bg-slate-500/10 text-slate-300 border border-slate-500/20">Git Initialized</span>
                  </td>
                </tr>

                <tr className="hover:bg-slate-800/30 transition">
                  <td className="py-4 px-6 font-bold text-white flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-indigo-400"></span>
                    Vercel
                  </td>
                  <td className="py-4 px-6 font-medium text-slate-200">
                    ใช้เผยแพร่เว็บไซต์ขึ้นออนไลน์ (Deployment)
                  </td>
                  <td className="py-4 px-6 text-slate-400 text-xs">
                    เซิร์ฟเวอร์คลาวด์ Edge CDN ทั่วโลก, HTTPS อัตโนมัติ, Deploy โค้ดทันทีเมื่อ Git Push
                  </td>
                  <td className="py-4 px-6">
                    <span className="px-2 py-0.5 rounded text-xs bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">wachirada-portfolio</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
