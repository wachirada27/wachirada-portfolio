import React from 'react';
import { CheckCircle2, Sparkles, Zap, Layers, Palette, Globe } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const pillars = [
    { icon: <Layers className="w-6 h-6 text-white" />, title: 'Component-Driven', desc: 'แบ่ง UI เป็น React Component อิสระ จัดการ State ได้อย่างเป็นระบบ นำกลับมาใช้ซ้ำได้ง่าย', from: 'from-pink-400', to: 'to-rose-500', bg: 'from-pink-50 to-rose-50', border: 'border-pink-200' },
    { icon: <Zap className="w-6 h-6 text-white" />,    title: 'รวดเร็วด้วย Vite ⚡', desc: 'พัฒนาด้วย Vite HMR เร็วมาก บิลด์โปรเจกต์ภายในเสี้ยววินาที โหลดเว็บรวดเร็วระดับโลก', from: 'from-orange-400', to: 'to-rose-400', bg: 'from-orange-50 to-rose-50', border: 'border-orange-200' },
    { icon: <Palette className="w-6 h-6 text-white" />, title: 'UI ทันสมัย สวยงาม', desc: 'ออกแบบ UI ด้วย Tailwind CSS สไตล์ทันสมัย รองรับ Responsive ทุกขนาดหน้าจอ สวยงามทุก Device', from: 'from-fuchsia-400', to: 'to-pink-500', bg: 'from-fuchsia-50 to-pink-50', border: 'border-fuchsia-200' },
    { icon: <Globe className="w-6 h-6 text-white" />,  title: 'Auto Deploy 🌐', desc: 'เชื่อม GitHub กับ Vercel เมื่อ Push โค้ด ระบบ Build & Deploy ไปยัง Edge CDN ทั่วโลกอัตโนมัติ', from: 'from-rose-400', to: 'to-fuchsia-500', bg: 'from-rose-50 to-fuchsia-50', border: 'border-rose-200' },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-white relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-100 to-rose-100 border border-pink-200 text-sm font-bold text-pink-700">
            <Sparkles className="w-3.5 h-3.5" /> เกี่ยวกับฉัน
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-800">
            ฉันสร้างเว็บที่
            <span className="bg-gradient-to-r from-pink-500 to-fuchsia-500 bg-clip-text text-transparent"> สวยงาม </span>
            และ
            <span className="bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent"> ใช้งานได้จริง</span>
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">{personalInfo.bio}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Bio Card */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-1.5 rounded-3xl blur-xl opacity-30"
                style={{ background: 'linear-gradient(135deg, #f9a8d4, #ec4899, #e879f9)' }} />
              <div className="relative bg-white rounded-3xl border border-pink-100 shadow-2xl shadow-pink-100/50 p-8 space-y-6">
                {/* Avatar */}
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-pink-400 via-rose-500 to-fuchsia-500 flex items-center justify-center text-white font-black text-3xl shadow-xl shadow-pink-300/50">
                    W
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-slate-800">{personalInfo.name}</h3>
                    <p className="text-pink-500 font-bold">นักพัฒนาเว็บไซต์ 🌸</p>
                    <p className="text-xs text-slate-400 mt-1">📍 {personalInfo.location}</p>
                  </div>
                </div>

                {/* Checks */}
                <div className="space-y-3">
                  {[
                    'เน้น Clean Code อ่านง่าย บำรุงรักษาสะดวก',
                    'Responsive Design 100% ทุกอุปกรณ์',
                    'Build Performance สูงสุดด้วย Modern Stack',
                    'Git Flow มืออาชีพ CI/CD อัตโนมัติ',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center shrink-0 mt-0.5 shadow-sm shadow-pink-300/50">
                        <CheckCircle2 className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-sm text-slate-600 font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 pt-2">
                  {[
                    { val: '100%', label: 'Responsive', color: 'from-pink-400 to-rose-500' },
                    { val: '< 1s', label: 'Build Time', color: 'from-orange-400 to-rose-400' },
                    { val: '99.9%', label: 'Uptime', color: 'from-emerald-400 to-teal-500' },
                  ].map((s) => (
                    <div key={s.label} className="text-center p-3 rounded-2xl bg-gradient-to-br from-pink-50 to-rose-50 border border-pink-100">
                      <span className={`block text-xl font-black bg-gradient-to-r ${s.color} bg-clip-text text-transparent`}>{s.val}</span>
                      <span className="text-xs text-slate-400 font-medium">{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 4 Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {pillars.map((p, i) => (
              <div key={i} className={`group rounded-3xl bg-gradient-to-br ${p.bg} border ${p.border} p-6 shadow-lg hover:-translate-y-2 hover:shadow-xl transition-all duration-300 overflow-hidden relative`}>
                <div className={`absolute -top-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-br ${p.from} ${p.to} opacity-10 group-hover:opacity-20 transition-opacity`} />
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${p.from} ${p.to} flex items-center justify-center shadow-lg mb-4`}>
                  {p.icon}
                </div>
                <h4 className="text-lg font-black text-slate-800 mb-2">{p.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-fuchsia-200 to-transparent" />
    </section>
  );
}
