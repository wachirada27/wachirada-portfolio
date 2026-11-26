import React from 'react';
import { CheckCircle2, Sparkles, Zap, Layers, Palette, Globe } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const pillars = [
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Component-Driven",
      desc: "แบ่ง UI เป็น Component อิสระด้วย React จัดการ State ได้อย่างเป็นระบบ นำกลับมาใช้ซ้ำได้ง่าย",
      gradient: "from-cyan-500 to-blue-500",
      bg: "from-cyan-50 to-blue-50",
      border: "border-cyan-200",
      shadow: "shadow-cyan-100"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast ⚡",
      desc: "พัฒนาด้วย Vite HMR ที่เร็วที่สุด บิลด์โปรเจกต์ภายใน 0.5 วินาที โหลดหน้าเว็บรวดเร็วระดับโลก",
      gradient: "from-amber-500 to-orange-500",
      bg: "from-amber-50 to-orange-50",
      border: "border-amber-200",
      shadow: "shadow-amber-100"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Modern UI Design",
      desc: "ออกแบบ UI ด้วย Tailwind CSS สไตล์ทันสมัย รองรับ Responsive ทุกขนาดหน้าจอ สวยงามทุก Device",
      gradient: "from-pink-500 to-rose-500",
      bg: "from-pink-50 to-rose-50",
      border: "border-pink-200",
      shadow: "shadow-pink-100"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Auto CI/CD Deploy",
      desc: "เชื่อม GitHub กับ Vercel เมื่อ Push โค้ด ระบบ Build & Deploy ไปยัง Edge CDN ทั่วโลกอัตโนมัติ",
      gradient: "from-violet-500 to-purple-600",
      bg: "from-violet-50 to-purple-50",
      border: "border-violet-200",
      shadow: "shadow-violet-100"
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative bg-white">
      {/* Top decorative */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-violet-100 to-pink-100 border border-violet-200 text-sm font-bold text-violet-700">
            <Sparkles className="w-3.5 h-3.5" /> เกี่ยวกับฉัน
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-800">
            สร้างเว็บที่
            <span className="relative ml-3">
              <span className="bg-gradient-to-r from-violet-600 to-pink-500 bg-clip-text text-transparent">ว้าว</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 8" preserveAspectRatio="none">
                <path d="M0,4 Q25,0 50,4 Q75,8 100,4" stroke="url(#ul)" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                <defs><linearGradient id="ul" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#7c3aed"/><stop offset="100%" stopColor="#ec4899"/></linearGradient></defs>
              </svg>
            </span>
            {' '}ในทุกจอ
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            {personalInfo.bio}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          {/* Left Bio Card */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-violet-400 via-pink-400 to-amber-400 blur-xl opacity-20" />
              <div className="relative bg-white rounded-3xl border border-purple-100 shadow-2xl shadow-purple-100/40 p-8 space-y-6">

                {/* Avatar row */}
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-violet-500 via-pink-500 to-amber-400 flex items-center justify-center text-white font-black text-3xl shadow-xl shadow-violet-300/50">
                    W
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-slate-800">{personalInfo.name}</h3>
                    <p className="text-violet-600 font-semibold">Frontend Developer</p>
                    <p className="text-xs text-slate-400">{personalInfo.location}</p>
                  </div>
                </div>

                {/* Checklist */}
                <div className="space-y-3">
                  {[
                    "เน้น Clean Code อ่านง่าย บำรุงรักษาสะดวก",
                    "Responsive Design 100% ทุกอุปกรณ์",
                    "Build Performance สูงสุดด้วย Modern Stack",
                    "Git Flow มืออาชีพ CI/CD อัตโนมัติ"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-r from-violet-500 to-pink-500 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-sm text-slate-600 font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 pt-2">
                  {[
                    { val: '100%', label: 'Responsive', color: 'from-cyan-400 to-blue-500' },
                    { val: '< 1s', label: 'Build Time', color: 'from-amber-400 to-orange-500' },
                    { val: '99.9%', label: 'Uptime', color: 'from-emerald-400 to-green-500' },
                  ].map((s) => (
                    <div key={s.label} className="text-center p-3 rounded-2xl bg-gradient-to-br from-slate-50 to-purple-50 border border-purple-100">
                      <span className={`block text-xl font-black bg-gradient-to-r ${s.color} bg-clip-text text-transparent`}>{s.val}</span>
                      <span className="text-xs text-slate-400 font-medium">{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right 4 Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {pillars.map((p, idx) => (
              <div
                key={idx}
                className={`group relative rounded-3xl bg-gradient-to-br ${p.bg} border ${p.border} p-6 shadow-lg ${p.shadow} hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-default overflow-hidden`}
              >
                {/* Decorative circle */}
                <div className={`absolute -top-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-br ${p.gradient} opacity-10 group-hover:opacity-20 transition-opacity`} />

                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${p.gradient} flex items-center justify-center text-white shadow-lg mb-4`}>
                  {p.icon}
                </div>
                <h4 className="text-lg font-black text-slate-800 mb-2">{p.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-200 to-transparent" />
    </section>
  );
}
