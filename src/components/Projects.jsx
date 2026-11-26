import React, { useState } from 'react';
import { ExternalLink, Sparkles, X } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projects } from '../data/portfolioData';

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [modal, setModal] = useState(null);

  const categories = ['All', 'React', 'Web App'];
  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 md:py-28 relative bg-white overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-200 to-transparent" />

      {/* Background blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl -z-0 pointer-events-none" style={{background: 'radial-gradient(circle, rgba(236,72,153,0.1) 0%, transparent 70%)'}} />
      <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full blur-3xl -z-0 pointer-events-none" style={{background: 'radial-gradient(circle, rgba(167,139,250,0.12) 0%, transparent 70%)'}} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-100 to-rose-100 border border-pink-200 text-sm font-bold text-pink-700">
            <Sparkles className="w-3.5 h-3.5" /> ผลงานเด่น
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-800 tracking-tight">
            โปรเจกต์ที่ฉัน<span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">ภาคภูมิใจ</span>
          </h2>
          <p className="text-slate-500 text-lg">สร้างด้วย React, Tailwind CSS และ JavaScript พร้อมเผยแพร่จริงบน Vercel</p>
        </div>

        {/* Filter */}
        <div className="flex justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button key={cat} onClick={() => setFilter(cat)}
              className={`px-5 py-2.5 rounded-2xl text-sm font-bold transition-all duration-200 ${
                filter === cat
                  ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg shadow-pink-200'
                  : 'bg-white text-slate-500 border border-pink-100 shadow-sm hover:border-pink-300 hover:text-pink-600'
              }`}
            >
              {cat === 'All' ? '🎨 ผลงานทั้งหมด' : cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white rounded-3xl border border-purple-100 shadow-lg shadow-purple-100/40 overflow-hidden hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-200/50 transition-all duration-300"
            >
              {/* Gradient Image Area */}
              <div className={`h-52 w-full bg-gradient-to-br ${project.imageGradient} relative overflow-hidden`}>
                {/* Dot pattern */}
                <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px'}} />

                {/* Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="px-3 py-1 rounded-xl bg-white/25 backdrop-blur-md text-white text-xs font-black border border-white/30">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="px-3 py-1 rounded-xl bg-white text-amber-600 text-xs font-black shadow-md">
                      ⭐ Featured
                    </span>
                  )}
                </div>

                {/* Title */}
                <div className="absolute bottom-4 left-5 right-5 z-10">
                  <p className="text-white/80 text-xs font-bold uppercase tracking-widest">{project.subtitle}</p>
                  <h3 className="text-white text-2xl font-black leading-tight drop-shadow-sm">{project.title}</h3>
                </div>

                {/* Shine overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </div>

              {/* Card Content */}
              <div className="p-6">
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{project.description}</p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs px-3 py-1 rounded-xl bg-gradient-to-r from-violet-50 to-pink-50 text-violet-700 border border-violet-100 font-bold">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-purple-50">
                  <button onClick={() => setModal(project)}
                    className="text-xs font-bold text-violet-600 hover:text-pink-500 underline underline-offset-4 transition-colors">
                    รายละเอียดเพิ่มเติม →
                  </button>
                  <div className="flex items-center gap-2">
                    <a href={project.github} target="_blank" rel="noreferrer"
                      className="p-2 rounded-xl bg-slate-100 text-slate-600 hover:bg-slate-200 transition">
                      <GithubIcon className="w-4 h-4" />
                    </a>
                    <a href={project.demo} target="_blank" rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-violet-600 to-pink-500 text-white text-xs font-bold shadow-md shadow-violet-200 hover:shadow-violet-300 hover:scale-105 transition-all">
                      Live Demo <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {modal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/30 backdrop-blur-md">
            <div className="bg-white rounded-3xl max-w-lg w-full shadow-2xl border border-purple-100 overflow-hidden">
              <div className={`h-32 bg-gradient-to-br ${modal.imageGradient} relative`}>
                <div className="absolute inset-0 flex items-end p-5">
                  <h3 className="text-white text-2xl font-black">{modal.title}</h3>
                </div>
                <button onClick={() => setModal(null)}
                  className="absolute top-4 right-4 p-2 rounded-xl bg-white/20 backdrop-blur-sm text-white hover:bg-white/40 transition">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 space-y-5">
                <p className="text-slate-600 leading-relaxed">{modal.description}</p>
                <div>
                  <p className="text-xs font-black text-slate-400 uppercase tracking-wider mb-2">เทคโนโลยีที่ใช้</p>
                  <div className="flex flex-wrap gap-2">
                    {modal.tech.map((t) => (
                      <span key={t} className="text-xs px-3 py-1 rounded-xl bg-gradient-to-r from-violet-100 to-pink-100 text-violet-700 font-bold border border-violet-100">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3 pt-2">
                  <a href={modal.github} target="_blank" rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl bg-slate-100 text-slate-700 font-bold text-sm hover:bg-slate-200 transition">
                    <GithubIcon className="w-4 h-4" /> GitHub
                  </a>
                  <a href={modal.demo} target="_blank" rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl bg-gradient-to-r from-violet-600 to-pink-500 text-white font-bold text-sm shadow-lg hover:scale-105 transition-all">
                    เปิดเว็บไซต์ <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-200 to-transparent" />
    </section>
  );
}
