import React from 'react';
import { Layers, Zap, Palette, Globe, CheckCircle2, Award, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const pillars = [
    {
      icon: <Layers className="w-6 h-6 text-cyan-400" />,
      title: "Component-Driven",
      desc: "ออกแบบหน้าเว็บเป็น Component อิสระด้วย React จัดการ State และ Props อย่างเป็นระเบียบ นำกลับมาใช้ซ้ำได้ง่าย",
      border: "hover:border-cyan-500/40"
    },
    {
      icon: <Zap className="w-6 h-6 text-amber-400" />,
      title: "Ultra-Fast Vite Engine",
      desc: "พัฒนาและพรีวิวระบบได้ทันทีด้วย HMR ของ Vite บิลด์โค้ดได้กระชับ โหลดเร็ว และใช้ทรัพยากรอย่างคุ้มค่า",
      border: "hover:border-amber-500/40"
    },
    {
      icon: <Palette className="w-6 h-6 text-sky-400" />,
      title: "Responsive Tailwind CSS",
      desc: "ปรับแต่งสไตล์ให้สวยงาม ปรับเปลี่ยนตามขนาดหน้าจอ (Mobile, Tablet, Desktop) อย่างลื่นไหลด้วย Utility-First CSS",
      border: "hover:border-sky-500/40"
    },
    {
      icon: <Globe className="w-6 h-6 text-indigo-400" />,
      title: "Automated Vercel CI/CD",
      desc: "เชื่อมโยง GitHub กับ Vercel เมื่อ Push โค้ด ระบบจะตรวจสอบ บิลด์ และกระจายสู่ Edge CDN ทั่วโลกอัตโนมัติ",
      border: "hover:border-indigo-500/40"
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>เกี่ยวกับฉัน</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            มุ่งสร้างสรรค์เว็บที่รวดเร็ว สวยงาม และใช้งานได้จริง
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            ผสานเทคโนโลยีที่ดีที่สุดของยุค เพื่อมอบประสบการณ์การใช้งานที่น่าประทับใจ
          </p>
        </div>

        {/* Story & Core Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Bio Card */}
          <div className="lg:col-span-5 rounded-2xl bg-slate-900/80 border border-slate-800 p-8 flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">
                สวัสดีค่ะ, ฉันชื่อ <span className="text-indigo-400">{personalInfo.name}</span>
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                {personalInfo.bio}
              </p>
              <div className="space-y-2.5 pt-2">
                {[
                  "เน้น Clean Code และเขียนโค้ดที่อ่านง่าย บำรุงรักษาสะดวก",
                  "การันตีรองรับ Responsive 100% ทุกอุปกรณ์",
                  "ความปลอดภัยและ Performance สูงสุดด้วย Modern Tooling",
                  "จัดการ Source Control อย่างเป็นมืออาชีพบน GitHub"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats Banner */}
            <div className="mt-8 pt-6 border-t border-slate-800 grid grid-cols-3 gap-3 text-center">
              <div className="p-2 rounded-xl bg-slate-950/60 border border-slate-800">
                <span className="block text-2xl font-extrabold text-indigo-400">100%</span>
                <span className="text-[11px] text-slate-400">Responsive</span>
              </div>
              <div className="p-2 rounded-xl bg-slate-950/60 border border-slate-800">
                <span className="block text-2xl font-extrabold text-purple-400">0.2s</span>
                <span className="text-[11px] text-slate-400">Fast Build</span>
              </div>
              <div className="p-2 rounded-xl bg-slate-950/60 border border-slate-800">
                <span className="block text-2xl font-extrabold text-emerald-400">99.9%</span>
                <span className="text-[11px] text-slate-400">Vercel Uptime</span>
              </div>
            </div>
          </div>

          {/* Right 4 Pillars Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className={`rounded-2xl bg-slate-900/60 border border-slate-800 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${pillar.border}`}
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center shadow-inner">
                    {pillar.icon}
                  </div>
                  <h4 className="text-lg font-bold text-white">{pillar.title}</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
