import React from 'react';
import { CheckCircle2, Sparkles, Calendar } from 'lucide-react';
import { experiences } from '../data/portfolioData';

export default function Experience() {
  const steps = [
    { n: '01', title: 'สร้างโปรเจกต์ด้วย Vite',    desc: 'สร้างโครงสร้าง React รวดเร็ว พร้อม HMR', tag: 'Vite ⚡',       from: 'from-orange-400', to: 'to-rose-400',    bg: 'from-orange-50 to-rose-50',    border: 'border-orange-200' },
    { n: '02', title: 'ตกแต่ง UI ด้วย Tailwind',   desc: 'ออกแบบ Layout สวยงาม Responsive ทุกจอ', tag: 'Tailwind 🎨',    from: 'from-fuchsia-400', to: 'to-pink-500',  bg: 'from-fuchsia-50 to-pink-50',   border: 'border-fuchsia-200' },
    { n: '03', title: 'เพิ่ม Logic ด้วย JavaScript', desc: 'จัดการ Interaction, Filter, Modal, Form',  tag: 'JavaScript 📜',  from: 'from-pink-400',   to: 'to-rose-500',    bg: 'from-pink-50 to-rose-50',      border: 'border-pink-200' },
    { n: '04', title: 'Push โค้ดขึ้น GitHub',       desc: 'บันทึก Commit และสำรองโค้ดอย่างปลอดภัย',  tag: 'GitHub 🐙',      from: 'from-slate-500',  to: 'to-slate-700',   bg: 'from-slate-50 to-gray-50',     border: 'border-slate-200' },
    { n: '05', title: 'Deploy บน Vercel 🌍',        desc: 'ออนไลน์ทั่วโลก Edge CDN HTTPS ฟรี',      tag: 'Vercel ▲',       from: 'from-purple-400', to: 'to-fuchsia-500', bg: 'from-purple-50 to-fuchsia-50', border: 'border-purple-200' },
  ];

  return (
    <section id="experience" className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-rose-50/50 to-fuchsia-50 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-rose-100 to-pink-100 border border-rose-200 text-sm font-bold text-rose-700">
            <Sparkles className="w-3.5 h-3.5" /> กระบวนการและประสบการณ์
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-800">
            จากศูนย์สู่
            <span className="bg-gradient-to-r from-pink-500 to-fuchsia-500 bg-clip-text text-transparent"> Production</span>
          </h2>
          <p className="text-slate-500 text-lg">ลำดับขั้นตอนการทำงานจริงที่นำเทคโนโลยีทั้ง 6 มาผสานกัน</p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-16">
          {steps.map((s, i) => (
            <div key={i} className={`group relative rounded-3xl bg-gradient-to-br ${s.bg} border ${s.border} p-5 shadow-lg hover:-translate-y-2 hover:shadow-xl transition-all duration-300 overflow-hidden`}>
              <span className="text-5xl font-black text-slate-100 absolute -top-2 -right-1 select-none font-mono">{s.n}</span>
              <span className={`inline-block px-3 py-1 rounded-xl text-xs font-black text-white bg-gradient-to-r ${s.from} ${s.to} shadow-md mb-3`}>{s.tag}</span>
              <h3 className="text-base font-black text-slate-800 mb-1.5 relative z-10">{s.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed relative z-10">{s.desc}</p>
              <div className="mt-4 pt-3 border-t border-white/60 flex items-center gap-1.5 text-xs font-bold text-emerald-600">
                <CheckCircle2 className="w-3.5 h-3.5" /> สำเร็จแล้ว ✓
              </div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-black text-slate-800 mb-8 flex items-center gap-2">
            <Calendar className="w-6 h-6 text-pink-500" /> ประวัติการศึกษาและพัฒนา
          </h3>

          <div className="space-y-6 relative pl-14">
            <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-300 via-rose-300 to-fuchsia-300 rounded-full" />

            {experiences.map((exp, i) => (
              <div key={i} className="relative group">
                <div className="absolute -left-9 top-5 w-5 h-5 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 border-4 border-white shadow-lg shadow-pink-200/50 group-hover:scale-125 transition-transform" />
                <div className="bg-white rounded-3xl border border-pink-100 p-6 shadow-lg shadow-pink-100/40 hover:shadow-xl hover:shadow-pink-200/40 transition-all">
                  <span className="text-xs font-black px-3 py-1 rounded-xl bg-gradient-to-r from-pink-100 to-rose-100 text-pink-700 border border-pink-100">📅 {exp.period}</span>
                  <h4 className="text-lg font-black text-slate-800 mt-3">{exp.role}</h4>
                  <p className="text-sm font-semibold text-pink-500 mb-2">{exp.organization}</p>
                  <p className="text-sm text-slate-500 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
