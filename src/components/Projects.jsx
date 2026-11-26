import React, { useState } from 'react';
import { ExternalLink, Sparkles, FolderGit2, X, CheckCircle } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projects } from '../data/portfolioData';

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = ['All', 'React', 'Web App'];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 md:py-28 relative bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ผลงานเด่น</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            โปรเจกต์ที่สร้างสรรค์และพัฒนา
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            รวบรวมชิ้นงานที่สร้างด้วย React, Tailwind CSS และ JavaScript พร้อมทดสอบและเผยแพร่จริง
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 text-sm font-medium rounded-full transition-all ${
                filter === cat
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {cat === 'All' ? 'ผลงานทั้งหมด' : cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-slate-900/80 border border-slate-800 overflow-hidden flex flex-col justify-between hover:border-slate-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-500/10"
            >
              <div>
                {/* Visual Banner */}
                <div className={`h-48 w-full bg-gradient-to-tr ${project.imageGradient} p-6 relative flex flex-col justify-between overflow-hidden`}>
                  {/* Subtle pattern */}
                  <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
                  
                  <div className="flex items-center justify-between z-10">
                    <span className="px-3 py-1 rounded-full bg-slate-950/60 backdrop-blur-md text-xs font-semibold text-white border border-white/20">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="px-3 py-1 rounded-full bg-amber-400/90 text-slate-950 text-xs font-bold shadow-md">
                        ⭐ Highlight
                      </span>
                    )}
                  </div>

                  <div className="z-10 text-white">
                    <span className="text-xs uppercase tracking-wider text-white/80 font-mono">
                      {project.subtitle}
                    </span>
                    <h3 className="text-2xl font-black drop-shadow-sm">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-4">
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700/60 font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="px-6 pb-6 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 underline underline-offset-4"
                >
                  ดูรายละเอียดเพิ่มเติม
                </button>

                <div className="flex items-center gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition"
                    title="ดูโค้ดบน GitHub"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-md shadow-indigo-600/30 transition"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Details */}
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-lg w-full p-6 shadow-2xl relative">
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-4">
                <div className={`h-28 rounded-xl bg-gradient-to-r ${activeModalProject.imageGradient} p-4 flex items-end text-white`}>
                  <h3 className="text-xl font-bold">{activeModalProject.title}</h3>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase text-slate-400 tracking-wider mb-1">
                    คำอธิบายโปรเจกต์
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {activeModalProject.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase text-slate-400 tracking-wider mb-2">
                    เทคโนโลยีที่ใช้งาน
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeModalProject.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-3 py-1 rounded-md bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-end gap-3">
                  <a
                    href={activeModalProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white text-xs font-medium"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub Code</span>
                  </a>
                  <a
                    href={activeModalProject.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium"
                  >
                    <span>เปิดชมเว็บไซต์</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
