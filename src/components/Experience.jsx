import React from 'react';
import { CheckCircle2, Sparkles, Calendar } from 'lucide-react';
import { experiences } from '../data/portfolioData';

export default function Experience() {
  const workflowSteps = [
    { step: '01', title: 'Scaffold with Vite', desc: 'สร้างโปรเจกต์ React ด้วย Vite เร็วที่สุด', tag: 'Vite', color: 'from-amber-400 to-orange-500', bg: 'from-amber-50 to-orange-50', border: 'border-amber-200' },
    { step: '02', title: 'Design with Tailwind', desc: 'ออกแบบ UI สวยงาม Responsive ทุกจอ', tag: 'Tailwind', color: 'from-sky-400 to-cyan-500', bg: 'from-sky-50 to-cyan-50', border: 'border-sky-200' },
    { step: '03', title: 'Logic with JavaScript', desc: 'เพิ่ม Interaction ดึงข้อมูล จัดการ State', tag: 'JS ES6+', color: 'from-yellow-400 to-amber-500', bg: 'from-yellow-50 to-amber-50', border: 'border-yellow-200' },
    { step: '04', title: 'Push to GitHub', desc: 'บันทึก Commit และ Push โค้ดขึ้น Repo', tag: 'GitHub', color: 'from-slate-500 to-slate-700', bg: 'from-slate-50 to-gray-50', border: 'border-slate-200' },
    { step: '05', title: 'Deploy on Vercel', desc: 'Auto-Deploy ขึ้น Edge CDN ทั่วโลก 🌍', tag: 'Vercel', color: 'from-violet-500 to-purple-600', bg: 'from-violet-50 to-purple-50', border: 'border-violet-200' },
  ];

  return (
    <section id="experience" className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50/60 via-rose-50/40 to-violet-50/60 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-100 to-orange-100 border border-amber-200 text-sm font-bold text-amber-700">
            <Sparkles className="w-3.5 h-3.5" /> กระบวนการและประสบการณ์
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-800 tracking-tight">
            จากศูนย์สู่ <span className="bg-gradient-to-r from-amber-500 to-rose-500 bg-clip-text text-transparent">Production</span>
          </h2>
          <p className="text-slate-500 text-lg">ลำดับขั้นตอนการทำงานจริงที่นำเทคโนโลยีทั้ง 6 มาผสานกัน</p>
        </div>

        {/* Workflow Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-16">
          {workflowSteps.map((ws, idx) => (
            <div key={idx} className={`group relative bg-gradient-to-br ${ws.bg} border ${ws.border} rounded-3xl p-5 shadow-lg hover:-translate-y-2 hover:shadow-xl transition-all duration-300 overflow-hidden`}>
              {/* Number */}
              <span className="text-5xl font-black text-slate-100 absolute -top-2 -right-1 select-none font-mono">
                {ws.step}
              </span>

              {/* Tag */}
              <span className={`inline-block px-3 py-1 rounded-xl text-xs font-black text-white bg-gradient-to-r ${ws.color} shadow-md mb-3`}>
                {ws.tag}
              </span>

              <h3 className="text-base font-black text-slate-800 mb-1.5 relative z-10">{ws.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed relative z-10">{ws.desc}</p>

              <div className="mt-4 pt-3 border-t border-white/60 flex items-center gap-1.5 text-xs font-bold text-emerald-600">
                <CheckCircle2 className="w-3.5 h-3.5" /> Done ✓
              </div>
            </div>
          ))}
        </div>

        {/* Arrow connector visualization */}
        <div className="hidden lg:flex items-center justify-center gap-2 mb-16 -mt-10 px-10">
          {workflowSteps.map((_, idx) => (
            <React.Fragment key={idx}>
              <div className="flex-1 h-0.5 bg-gradient-to-r from-violet-300 to-pink-300 rounded-full" />
              {idx < workflowSteps.length - 1 && (
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-violet-400 to-pink-400 shrink-0" />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-black text-slate-800 mb-8 flex items-center gap-2">
            <Calendar className="w-6 h-6 text-violet-500" />
            ประวัติการศึกษาและพัฒนา
          </h3>

          <div className="space-y-6 relative">
            {/* Line */}
            <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-300 via-pink-300 to-amber-300 rounded-full" />

            {experiences.map((exp, idx) => (
              <div key={idx} className="relative pl-14 group">
                {/* Dot */}
                <div className="absolute left-3 top-5 w-5 h-5 rounded-full bg-gradient-to-br from-violet-500 to-pink-500 border-4 border-white shadow-lg shadow-violet-200/50 group-hover:scale-125 transition-transform" />

                <div className="bg-white rounded-3xl border border-purple-100 p-6 shadow-lg shadow-purple-100/40 hover:shadow-xl hover:shadow-purple-200/40 transition-all">
                  <span className="text-xs font-black px-3 py-1 rounded-xl bg-gradient-to-r from-violet-100 to-pink-100 text-violet-700 border border-violet-100">
                    📅 {exp.period}
                  </span>
                  <h4 className="text-lg font-black text-slate-800 mt-3">{exp.role}</h4>
                  <p className="text-sm font-semibold text-violet-600 mb-2">{exp.organization}</p>
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
