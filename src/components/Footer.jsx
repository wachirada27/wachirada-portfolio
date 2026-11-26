import React from 'react';
import { ArrowUp } from 'lucide-react';
import { GithubIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Tag */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm">
              W
            </div>
            <div>
              <p className="text-white font-bold text-base">
                {personalInfo.name}<span className="text-indigo-400">.dev</span>
              </p>
              <p className="text-xs text-slate-500">
                {personalInfo.domain}
              </p>
            </div>
          </div>

          {/* Tech Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-mono">
            <span className="px-2 py-1 rounded bg-slate-900 border border-slate-800 text-cyan-400">React</span>
            <span className="text-slate-600">•</span>
            <span className="px-2 py-1 rounded bg-slate-900 border border-slate-800 text-amber-400">Vite</span>
            <span className="text-slate-600">•</span>
            <span className="px-2 py-1 rounded bg-slate-900 border border-slate-800 text-sky-400">Tailwind CSS</span>
            <span className="text-slate-600">•</span>
            <span className="px-2 py-1 rounded bg-slate-900 border border-slate-800 text-yellow-400">JavaScript</span>
            <span className="text-slate-600">•</span>
            <span className="px-2 py-1 rounded bg-slate-900 border border-slate-800 text-indigo-400">Vercel</span>
          </div>

          {/* Back to top */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition flex items-center gap-1.5 text-xs font-medium"
              title="กลับสู่ด้านบน"
            >
              <span>กลับด้านบน</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-slate-900 text-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Wachirada. All rights reserved. Designed and developed with modern web standards.</p>
        </div>
      </div>
    </footer>
  );
}
