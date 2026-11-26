import React from 'react';
import { Calendar, CheckCircle2, GitCommit, Sparkles } from 'lucide-react';
import { experiences } from '../data/portfolioData';

export default function Experience() {
  const workflowSteps = [
    {
      step: "01",
      title: "Scaffold & Setup with Vite",
      desc: "สร้างโปรเจกต์ด้วย Vite + React เพื่อโครงสร้างที่เบาและรวดเร็ว พร้อมเซ็ตระบบ Module สำหรับ ES6+",
      tag: "Vite & React"
    },
    {
      step: "02",
      title: "Styling with Tailwind CSS",
      desc: "ออกแบบโครงสร้างหน้าจอ Dark Theme, Typography, Layout Responsive และ Interactive State ด้วย Utility Classes",
      tag: "Tailwind CSS"
    },
    {
      step: "03",
      title: "JavaScript Logic & State",
      desc: "เขียนการทำงานของ UI, การกรองผลงาน (Filter Tabs), Modal และการส่งฟอร์มข้อมูลแบบไดนามิก",
      tag: "JavaScript ES6+"
    },
    {
      step: "04",
      title: "Push Code to GitHub",
      desc: "สร้าง Git Repository, บันทึกการเปลี่ยนแปลง (Commits) และอัปโหลดขึ้น GitHub อย่างปลอดภัย",
      tag: "GitHub"
    },
    {
      step: "05",
      title: "Deploy on Vercel (Edge CDN)",
      desc: "เชื่อมโยง GitHub กับ Vercel เพื่อ Build และ Deploy เว็บขึ้นออนไลน์ที่ wachirada-portfolio.vercel.app พร้อม SSL ฟรี",
      tag: "Vercel"
    }
  ];

  return (
    <section id="experience" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>กระบวนการทำงาน & เส้นทางพัฒนา</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            ขั้นตอนการพัฒนาจากศูนย์สู่ Vercel Production
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            ลำดับขั้นตอนการทำงานจริงที่นำเทคโนโลยีทั้ง 6 อย่างมาประกอบร่างเป็นผลงานชิ้นนี้
          </p>
        </div>

        {/* Workflow Pipeline */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-16">
          {workflowSteps.map((ws, idx) => (
            <div
              key={idx}
              className="relative p-5 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between hover:border-indigo-500/50 transition-colors"
            >
              <div>
                <span className="text-3xl font-black text-indigo-500/30 font-mono block mb-2">
                  {ws.step}
                </span>
                <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 mb-2">
                  {ws.tag}
                </span>
                <h3 className="text-base font-bold text-white mb-2">{ws.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{ws.desc}</p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800 flex items-center gap-1.5 text-xs text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>สำเร็จแล้ว</span>
              </div>
            </div>
          ))}
        </div>

        {/* Experience Timeline */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-indigo-400" />
            <span>ประวัติและการศึกษา (Experience & Milestones)</span>
          </h3>

          <div className="space-y-6 border-l-2 border-slate-800 pl-6 ml-3">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative group">
                {/* Dot */}
                <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-indigo-500 border-4 border-slate-950 group-hover:scale-125 transition-transform" />

                <div className="p-5 rounded-xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 transition">
                  <span className="text-xs font-semibold font-mono text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-md border border-indigo-500/20">
                    {exp.period}
                  </span>
                  <h4 className="text-lg font-bold text-white mt-2">
                    {exp.role}
                  </h4>
                  <p className="text-sm font-medium text-slate-400 mb-2">
                    {exp.organization}
                  </p>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {exp.description}
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
