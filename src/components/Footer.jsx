import React from 'react';
import { ArrowUp } from 'lucide-react';
import { GithubIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-pink-950/80 to-slate-900 py-12">
      {/* BG decoration */}
      <div className="absolute top-0 left-1/4 w-72 h-72 rounded-full blur-3xl opacity-20"
        style={{ background: 'radial-gradient(circle, #ec4899 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-pink-400 to-fuchsia-500 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-pink-500/30">W</div>
            <div>
              <p className="font-black text-lg">
                <span className="bg-gradient-to-r from-pink-400 to-fuchsia-400 bg-clip-text text-transparent">วชิรดา</span>
                <span className="text-white">.dev</span>
              </p>
              <p className="text-xs text-slate-400 font-mono">{personalInfo.domain}</p>
            </div>
          </div>

          {/* Tech Pills */}
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { l: 'React',       c: 'text-pink-400 border-pink-500/30 bg-pink-500/10' },
              { l: 'Vite',        c: 'text-orange-400 border-orange-500/30 bg-orange-500/10' },
              { l: 'Tailwind',    c: 'text-fuchsia-400 border-fuchsia-500/30 bg-fuchsia-500/10' },
              { l: 'JavaScript',  c: 'text-rose-300 border-rose-500/30 bg-rose-500/10' },
              { l: 'GitHub',      c: 'text-slate-300 border-slate-500/30 bg-slate-500/10' },
              { l: 'Vercel',      c: 'text-purple-400 border-purple-500/30 bg-purple-500/10' },
            ].map((t) => (
              <span key={t.l} className={`px-3 py-1 rounded-xl text-xs font-black border ${t.c}`}>{t.l}</span>
            ))}
          </div>

          {/* Back to top */}
          <div className="flex items-center gap-3">
            <a href={personalInfo.github} target="_blank" rel="noreferrer"
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10 transition">
              <GithubIcon className="w-5 h-5" />
            </a>
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white text-xs font-black shadow-lg hover:scale-105 transition-all">
              กลับด้านบน <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} วชิรดา (Wachirada) · สร้างด้วย 💗 ด้วย React, Vite, Tailwind CSS & Vercel</p>
        </div>
      </div>
    </footer>
  );
}
