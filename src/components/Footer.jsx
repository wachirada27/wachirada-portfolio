import React from 'react';
import { ArrowUp } from 'lucide-react';
import { GithubIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Gradient footer */}
      <div className="bg-gradient-to-br from-slate-900 via-violet-950 to-slate-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">

            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-violet-500/30">
                W
              </div>
              <div>
                <p className="font-black text-lg">
                  <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">wachirada</span>
                  <span className="text-white">.dev</span>
                </p>
                <p className="text-xs text-slate-400 font-mono">{personalInfo.domain}</p>
              </div>
            </div>

            {/* Tech Pills */}
            <div className="flex flex-wrap justify-center gap-2">
              {[
                { label: 'React', color: 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10' },
                { label: 'Vite', color: 'text-amber-400 border-amber-500/30 bg-amber-500/10' },
                { label: 'Tailwind', color: 'text-sky-400 border-sky-500/30 bg-sky-500/10' },
                { label: 'JavaScript', color: 'text-yellow-400 border-yellow-500/30 bg-yellow-500/10' },
                { label: 'GitHub', color: 'text-slate-300 border-slate-500/30 bg-slate-500/10' },
                { label: 'Vercel', color: 'text-violet-400 border-violet-500/30 bg-violet-500/10' },
              ].map((t) => (
                <span key={t.label} className={`px-3 py-1 rounded-xl text-xs font-black border ${t.color}`}>
                  {t.label}
                </span>
              ))}
            </div>

            {/* Back to top */}
            <div className="flex items-center gap-3">
              <a href={personalInfo.github} target="_blank" rel="noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10 transition">
                <GithubIcon className="w-5 h-5" />
              </a>
              <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-pink-500 text-white text-xs font-black shadow-lg hover:scale-105 transition-all">
                กลับด้านบน <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

          <div className="mt-8 pt-6 border-t border-white/5 text-center text-xs text-slate-500">
            <p>© {new Date().getFullYear()} Wachirada. Built with ❤️ using React, Vite, Tailwind CSS & Vercel. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
