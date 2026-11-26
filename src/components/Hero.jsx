import React from 'react';
import { ArrowRight, Star, Sparkles, Layers, Code2, Zap, Globe } from 'lucide-react';
import { GithubIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const floatingBadges = [
    { icon: <Layers className="w-4 h-4 text-cyan-500" />, label: 'React', color: 'from-cyan-50 to-blue-50 border-cyan-200', top: '15%', left: '5%', delay: '0s' },
    { icon: <Zap className="w-4 h-4 text-amber-500" />, label: 'Vite', color: 'from-amber-50 to-yellow-50 border-amber-200', top: '70%', left: '2%', delay: '1s' },
    { icon: <Code2 className="w-4 h-4 text-violet-500" />, label: 'JavaScript', color: 'from-violet-50 to-purple-50 border-violet-200', top: '30%', right: '3%', delay: '0.5s' },
    { icon: <Globe className="w-4 h-4 text-rose-500" />, label: 'Vercel', color: 'from-rose-50 to-pink-50 border-rose-200', top: '75%', right: '5%', delay: '1.5s' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">

      {/* Mesh gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-pink-50 to-amber-50" />
        <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-gradient-radial from-violet-200/60 via-transparent to-transparent rounded-full blur-3xl" style={{background: 'radial-gradient(circle, rgba(167,139,250,0.4) 0%, transparent 70%)'}} />
        <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full blur-3xl" style={{background: 'radial-gradient(circle, rgba(236,72,153,0.3) 0%, transparent 70%)'}} />
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full blur-3xl" style={{background: 'radial-gradient(circle, rgba(251,191,36,0.3) 0%, transparent 70%)'}} />
        <div className="absolute bottom-20 right-1/4 w-[300px] h-[300px] rounded-full blur-3xl" style={{background: 'radial-gradient(circle, rgba(6,182,212,0.25) 0%, transparent 70%)'}} />
      </div>

      {/* Floating Tech Badges */}
      {floatingBadges.map((badge, idx) => (
        <div
          key={idx}
          className={`absolute hidden lg:flex items-center gap-2 px-3 py-2 rounded-2xl bg-gradient-to-r ${badge.color} border shadow-lg shadow-purple-100/60 text-sm font-bold text-slate-700 animate-float`}
          style={{ top: badge.top, left: badge.left, right: badge.right, animationDelay: badge.delay }}
        >
          {badge.icon} {badge.label}
        </div>
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="text-center lg:text-left space-y-7">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-violet-100 to-pink-100 border border-violet-200 text-sm font-bold text-violet-700 shadow-sm">
              <span className="flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-violet-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
              </span>
              <Sparkles className="w-3.5 h-3.5 text-violet-500" />
              พร้อมรับงานแล้ววันนี้!
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <p className="text-base font-semibold text-slate-500 tracking-widest uppercase">
                Hello World 👋 ฉันคือ
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-none">
                <span className="shimmer-text">Wachirada</span>
                <br />
                <span className="text-slate-800">Frontend Dev</span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-lg text-slate-500 leading-relaxed max-w-lg mx-auto lg:mx-0">
              สร้างเว็บไซต์ที่ <span className="font-bold text-violet-600">สวยงาม</span>, <span className="font-bold text-pink-500">รวดเร็ว</span> และ <span className="font-bold text-amber-500">ทันสมัย</span> ด้วย React + Vite + Tailwind CSS และ Deploy บน Vercel
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a href="#projects"
                className="inline-flex items-center gap-2 px-7 py-3.5 font-bold text-white text-base bg-gradient-to-r from-violet-600 via-pink-500 to-rose-500 rounded-2xl shadow-xl shadow-violet-300/50 hover:shadow-violet-400/70 hover:-translate-y-1 hover:scale-105 transition-all duration-300 animate-gradient-shift"
              >
                ดูผลงาน <ArrowRight className="w-5 h-5" />
              </a>
              <a href={personalInfo.github} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 font-bold text-slate-700 text-base bg-white rounded-2xl shadow-lg shadow-purple-100 hover:shadow-purple-200 hover:-translate-y-1 border border-purple-100 transition-all duration-300"
              >
                <GithubIcon className="w-5 h-5" /> GitHub
              </a>
            </div>

            {/* Domain Live Indicator */}
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/80 border border-purple-100 shadow-md shadow-purple-100/50 backdrop-blur-sm">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-md shadow-emerald-400/50 animate-pulse" />
              <span className="text-sm font-bold text-slate-600">Live at </span>
              <span className="text-sm font-black text-violet-600 font-mono">{personalInfo.domain}</span>
            </div>
          </div>

          {/* Right: Big colorful card */}
          <div className="flex justify-center relative">
            {/* Background decorative circles */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-violet-200/40 to-pink-200/40 blur-2xl animate-float" />
            </div>

            {/* Main Card */}
            <div className="relative w-full max-w-sm">
              {/* Gradient border glow */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-violet-400 via-pink-400 to-amber-400 blur-xl opacity-40 animate-float" />

              <div className="relative bg-white rounded-3xl shadow-2xl shadow-violet-200/50 border border-white overflow-hidden">

                {/* Top gradient bar */}
                <div className="h-2 bg-gradient-to-r from-violet-500 via-pink-500 via-amber-400 to-cyan-500" />

                {/* Profile area */}
                <div className="p-6 space-y-5">
                  {/* Avatar */}
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 via-pink-500 to-amber-400 flex items-center justify-center text-white font-black text-2xl shadow-lg shadow-violet-300/50">
                        W
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-400 rounded-full border-2 border-white shadow-sm" />
                    </div>
                    <div>
                      <h3 className="font-black text-slate-800 text-lg">{personalInfo.name}</h3>
                      <p className="text-sm text-slate-500 font-medium">Frontend Developer</p>
                      <div className="flex items-center gap-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Code snippet */}
                  <div className="bg-slate-900 rounded-2xl p-4 font-mono text-xs space-y-1 shadow-inner">
                    <p><span className="text-pink-400">const</span> <span className="text-cyan-400">dev</span> <span className="text-white">= &#123;</span></p>
                    <p className="pl-4"><span className="text-amber-300">framework</span><span className="text-white">: </span><span className="text-emerald-400">"React + Vite"</span>,</p>
                    <p className="pl-4"><span className="text-amber-300">styling</span><span className="text-white">: </span><span className="text-sky-400">"Tailwind CSS"</span>,</p>
                    <p className="pl-4"><span className="text-amber-300">deploy</span><span className="text-white">: </span><span className="text-violet-400">"Vercel ⚡"</span>,</p>
                    <p className="pl-4"><span className="text-amber-300">status</span><span className="text-white">: </span><span className="text-emerald-400">"Available 🟢"</span></p>
                    <p><span className="text-white">&#125;;</span></p>
                  </div>

                  {/* Tech Pills */}
                  <div className="flex flex-wrap gap-2">
                    {[
                      { label: 'React', bg: 'bg-cyan-100 text-cyan-700' },
                      { label: 'Vite', bg: 'bg-amber-100 text-amber-700' },
                      { label: 'Tailwind', bg: 'bg-sky-100 text-sky-700' },
                      { label: 'JavaScript', bg: 'bg-yellow-100 text-yellow-700' },
                      { label: 'GitHub', bg: 'bg-slate-100 text-slate-700' },
                      { label: 'Vercel', bg: 'bg-violet-100 text-violet-700' },
                    ].map((t) => (
                      <span key={t.label} className={`px-3 py-1 rounded-xl text-xs font-bold ${t.bg}`}>
                        {t.label}
                      </span>
                    ))}
                  </div>

                  {/* Deploy Status Bar */}
                  <div className="flex items-center justify-between p-3 rounded-2xl bg-gradient-to-r from-violet-50 to-pink-50 border border-violet-100">
                    <div className="flex items-center gap-2">
                      <div className="text-lg">▲</div>
                      <div>
                        <p className="text-xs font-black text-slate-700">Vercel Deployment</p>
                        <p className="text-xs text-emerald-600 font-bold">✅ Production Ready</p>
                      </div>
                    </div>
                    <span className="text-xs font-black px-2.5 py-1 bg-emerald-100 text-emerald-700 rounded-lg">
                      200 OK
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/60 to-transparent pointer-events-none" />
    </section>
  );
}
