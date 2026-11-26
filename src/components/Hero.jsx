import React from 'react';
import { ArrowRight, Star, Sparkles, Layers, Code2, Zap, Globe, Heart } from 'lucide-react';
import { GithubIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const floatingBadges = [
    { icon: '⚛️', label: 'React',      style: { top: '18%',  left: '3%'  }, delay: '0s' },
    { icon: '⚡', label: 'Vite',       style: { top: '72%',  left: '1%'  }, delay: '1.2s' },
    { icon: '🎨', label: 'Tailwind',   style: { top: '20%',  right: '3%' }, delay: '0.6s' },
    { icon: '🌐', label: 'Vercel',     style: { top: '70%',  right: '2%' }, delay: '1.8s' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">

      {/* Pink Mesh Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-pink-50 to-fuchsia-50" />
        <div className="absolute top-0 left-0 w-[700px] h-[700px] rounded-full blur-3xl opacity-50"
          style={{ background: 'radial-gradient(circle, #fbcfe8 0%, transparent 70%)' }} />
        <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-40"
          style={{ background: 'radial-gradient(circle, #f9a8d4 0%, transparent 70%)' }} />
        <div className="absolute bottom-10 left-1/3 w-[400px] h-[400px] rounded-full blur-3xl opacity-30"
          style={{ background: 'radial-gradient(circle, #e879f9 0%, transparent 70%)' }} />
        <div className="absolute bottom-20 right-1/4 w-[300px] h-[300px] rounded-full blur-3xl opacity-25"
          style={{ background: 'radial-gradient(circle, #fda4af 0%, transparent 70%)' }} />
        {/* Dot pattern */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'radial-gradient(circle, #be185d 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
      </div>

      {/* Floating Badges */}
      {floatingBadges.map((b, i) => (
        <div key={i}
          className="absolute hidden xl:flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/85 border border-pink-200 shadow-lg shadow-pink-100/60 text-sm font-bold text-slate-700 animate-float"
          style={{ ...b.style, animationDelay: b.delay }}
        >
          <span className="text-base">{b.icon}</span> {b.label}
        </div>
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Text */}
          <div className="text-center lg:text-left space-y-7">

            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 border border-pink-200 text-sm font-bold text-pink-700 shadow-md shadow-pink-100/60">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-pink-500" />
              </span>
              <Heart className="w-3.5 h-3.5 text-pink-500" />
              พร้อมรับงานแล้ววันนี้!
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <p className="text-base font-bold text-pink-400 tracking-widest uppercase">
                สวัสดีค่ะ ✨ ฉันคือ
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-none">
                <span className="shimmer-text">วชิรดา</span>
                <br />
                <span className="text-slate-800">นักพัฒนาเว็บ</span>
              </h1>
              <p className="text-base sm:text-lg text-pink-400 font-semibold">
                Frontend Developer & Web Creator 🌸
              </p>
            </div>

            {/* Desc */}
            <p className="text-base sm:text-lg text-slate-500 leading-relaxed max-w-lg mx-auto lg:mx-0">
              สร้างเว็บไซต์ที่{' '}
              <span className="font-bold text-pink-500">สวยงาม</span>,{' '}
              <span className="font-bold text-rose-500">รวดเร็ว</span> และ{' '}
              <span className="font-bold text-fuchsia-500">ทันสมัย</span>{' '}
              ด้วย React + Vite + Tailwind CSS และเผยแพร่บน Vercel
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a href="#projects"
                className="inline-flex items-center gap-2 px-7 py-3.5 font-bold text-white text-base bg-gradient-to-r from-pink-500 via-rose-500 to-fuchsia-500 rounded-2xl shadow-xl shadow-pink-300/50 hover:shadow-pink-400/70 hover:-translate-y-1 hover:scale-105 transition-all duration-300 animate-gradient"
              >
                ดูผลงาน <ArrowRight className="w-5 h-5" />
              </a>
              <a href={personalInfo.github} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 font-bold text-slate-700 text-base bg-white rounded-2xl shadow-lg shadow-pink-100 hover:shadow-pink-200 hover:-translate-y-1 border border-pink-100 transition-all duration-300"
              >
                <GithubIcon className="w-5 h-5" /> GitHub
              </a>
            </div>

            {/* Live URL */}
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/85 border border-pink-200 shadow-md shadow-pink-100/50">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-md shadow-emerald-300/50" />
              <span className="text-sm font-bold text-slate-500">ออนไลน์ที่</span>
              <span className="text-sm font-black text-pink-600 font-mono">{personalInfo.domain}</span>
            </div>
          </div>

          {/* Right Card */}
          <div className="flex justify-center relative">
            <div className="absolute w-80 h-80 rounded-full blur-3xl opacity-40 animate-float-slow"
              style={{ background: 'radial-gradient(circle, #f9a8d4 0%, transparent 70%)' }} />

            <div className="relative w-full max-w-sm">
              {/* Glow */}
              <div className="absolute -inset-2 rounded-3xl blur-xl opacity-50 animate-float"
                style={{ background: 'linear-gradient(135deg, #f9a8d4, #ec4899, #e879f9)' }} />

              <div className="relative bg-white rounded-3xl shadow-2xl shadow-pink-200/60 overflow-hidden border border-pink-100">
                {/* Rainbow top bar */}
                <div className="h-2 bg-gradient-to-r from-pink-300 via-rose-400 via-fuchsia-400 to-pink-300" />

                <div className="p-6 space-y-5">
                  {/* Avatar */}
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-400 via-rose-500 to-fuchsia-500 flex items-center justify-center text-white font-black text-2xl shadow-lg shadow-pink-300/50">
                        W
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-400 rounded-full border-2 border-white shadow-sm" />
                    </div>
                    <div>
                      <h3 className="font-black text-slate-800 text-lg">{personalInfo.name}</h3>
                      <p className="text-sm text-pink-500 font-semibold">นักพัฒนาเว็บไซต์</p>
                      <div className="flex gap-0.5 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-pink-400 text-pink-400" />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Code block */}
                  <div className="bg-slate-900 rounded-2xl p-4 font-mono text-xs space-y-1 shadow-inner">
                    <p><span className="text-pink-400">const</span> <span className="text-fuchsia-400">dev</span> <span className="text-white">= &#123;</span></p>
                    <p className="pl-4"><span className="text-pink-300">framework</span><span className="text-white">: </span><span className="text-emerald-400">"React + Vite"</span>,</p>
                    <p className="pl-4"><span className="text-pink-300">styling</span><span className="text-white">: </span><span className="text-sky-400">"Tailwind CSS"</span>,</p>
                    <p className="pl-4"><span className="text-pink-300">deploy</span><span className="text-white">: </span><span className="text-fuchsia-400">"Vercel ⚡"</span>,</p>
                    <p className="pl-4"><span className="text-pink-300">status</span><span className="text-white">: </span><span className="text-emerald-400">"พร้อมรับงาน 🌸"</span></p>
                    <p><span className="text-white">&#125;;</span></p>
                  </div>

                  {/* Tech Pills */}
                  <div className="flex flex-wrap gap-2">
                    {[
                      { l: 'React',      c: 'bg-pink-100 text-pink-700' },
                      { l: 'Vite',       c: 'bg-rose-100 text-rose-700' },
                      { l: 'Tailwind',   c: 'bg-fuchsia-100 text-fuchsia-700' },
                      { l: 'JavaScript', c: 'bg-orange-100 text-orange-700' },
                      { l: 'GitHub',     c: 'bg-slate-100 text-slate-700' },
                      { l: 'Vercel',     c: 'bg-purple-100 text-purple-700' },
                    ].map((t) => (
                      <span key={t.l} className={`px-3 py-1 rounded-xl text-xs font-bold ${t.c}`}>{t.l}</span>
                    ))}
                  </div>

                  {/* Deploy Status */}
                  <div className="flex items-center justify-between p-3 rounded-2xl bg-gradient-to-r from-pink-50 to-rose-50 border border-pink-100">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">▲</span>
                      <div>
                        <p className="text-xs font-black text-slate-700">Vercel Deployment</p>
                        <p className="text-xs text-emerald-600 font-bold">✅ ออนไลน์แล้ว!</p>
                      </div>
                    </div>
                    <span className="text-xs font-black px-2.5 py-1 bg-emerald-100 text-emerald-700 rounded-lg">200 OK</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
