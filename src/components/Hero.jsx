import React from 'react';
import { ArrowRight, ExternalLink, Sparkles, Layers, ShieldCheck, Terminal } from 'lucide-react';
import { GithubIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Glow backgrounds */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 md:w-[600px] h-96 md:h-[600px] bg-gradient-to-tr from-indigo-600/20 via-purple-600/20 to-pink-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & CTA */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/60 text-xs font-medium text-slate-300 shadow-inner">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>พร้อมรับงาน & ออนไลน์ที่ <span className="text-indigo-400 font-mono font-semibold">{personalInfo.domain}</span></span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <p className="text-sm md:text-base font-semibold tracking-wider uppercase text-indigo-400">
                Frontend Developer & Web Creator
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
                สวัสดี ฉันคือ <br />
                <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">
                  {personalInfo.name}
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed pt-2">
                {personalInfo.tagline} ออกแบบและพัฒนาด้วย <span className="text-white font-medium">React</span>, <span className="text-white font-medium">Vite</span>, <span className="text-white font-medium">Tailwind CSS</span> และ <span className="text-white font-medium">JavaScript</span> ควบคุมโค้ดผ่าน <span className="text-white font-medium">GitHub</span> และเผยแพร่ออนไลน์บน <span className="text-white font-medium">Vercel</span>
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:-translate-y-0.5 transition-all"
              >
                <span>ดูผลงานทั้งหมด</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#tech"
                className="inline-flex items-center gap-2 px-6 py-3 text-base font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 rounded-xl hover:-translate-y-0.5 transition-all"
              >
                <Layers className="w-4 h-4 text-indigo-400" />
                <span>เทคโนโลยีที่ใช้</span>
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 text-base font-medium text-slate-400 hover:text-white bg-slate-900/50 hover:bg-slate-800/80 border border-slate-800 rounded-xl transition-all"
                title="GitHub Profile"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
            </div>

            {/* Tech stack badge pills */}
            <div className="pt-6 border-t border-slate-800/80">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                Core Stack Highlight
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                {['React', 'Vite', 'Tailwind CSS', 'JavaScript', 'GitHub', 'Vercel'].map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 text-xs font-medium bg-slate-900/80 text-slate-300 border border-slate-800 rounded-lg"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Code & Visual Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Decorative back glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur-xl opacity-30 animate-pulse"></div>

              {/* Glass Card Container */}
              <div className="relative rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl p-6 overflow-hidden">
                {/* Window top bar */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                    <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                    <span>wachirada.config.js</span>
                  </div>
                  <div className="w-8"></div>
                </div>

                {/* Code Body */}
                <div className="pt-4 font-mono text-xs sm:text-sm leading-relaxed text-slate-300 space-y-1.5">
                  <p><span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> = &#123;</p>
                  <p className="pl-4"><span className="text-slate-400">name:</span> <span className="text-emerald-400">"{personalInfo.name}"</span>,</p>
                  <p className="pl-4"><span className="text-slate-400">role:</span> <span className="text-emerald-400">"Frontend Developer"</span>,</p>
                  <p className="pl-4"><span className="text-slate-400">framework:</span> <span className="text-cyan-400">"React + Vite"</span>,</p>
                  <p className="pl-4"><span className="text-slate-400">styling:</span> <span className="text-sky-400">"Tailwind CSS"</span>,</p>
                  <p className="pl-4"><span className="text-slate-400">deployment:</span> <span className="text-indigo-400">"Vercel Edge"</span>,</p>
                  <p className="pl-4"><span className="text-slate-400">liveUrl:</span> <span className="text-pink-400">"{personalInfo.domain}"</span>,</p>
                  <p className="pl-4"><span className="text-slate-400">passionateAbout:</span> [</p>
                  <p className="pl-8 text-amber-300">"Clean Code", "Modern UI", "Performance"</p>
                  <p className="pl-4">]</p>
                  <p>&#125;;</p>
                </div>

                {/* Live deployment preview pill */}
                <div className="mt-5 p-3 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 border border-indigo-500/20">
                      ▲
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-white">Vercel Production Deployment</p>
                      <p className="text-[11px] text-emerald-400 font-mono">Status: Ready & Optimized</p>
                    </div>
                  </div>
                  <span className="text-xs px-2.5 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-md font-mono">
                    200 OK
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
