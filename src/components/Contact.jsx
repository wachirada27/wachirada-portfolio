import React, { useState } from 'react';
import { Mail, MapPin, Send, Sparkles, CheckCircle2, Copy, Check, Globe } from 'lucide-react';
import { GithubIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ติดต่อฉัน</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            มาร่วมสร้างสรรค์โปรเจกต์ที่ยอดเยี่ยมด้วยกัน
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            สามารถส่งข้อความ ติดต่องาน หรือสอบถามรายละเอียดเพิ่มเติมได้ตลอดเวลา
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-6">
              <h3 className="text-xl font-bold text-white">ข้อมูลการติดต่อ</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                สนใจร่วมงาน สอบถามข้อมูลด้านการพัฒนาเว็บ หรือต้องการคำแนะนำเกี่ยวกับโปรเจกต์ สามารถติดต่อผ่านช่องทางด้านล่างได้เลยครับ/ค่ะ
              </p>

              {/* Email Card with Copy button */}
              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 border border-indigo-500/20">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">อีเมลสำหรับติดต่องาน</span>
                    <span className="text-sm font-medium text-white">{personalInfo.email}</span>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition"
                  title="คัดลอกอีเมล"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block">สถานที่</span>
                  <span className="text-sm font-medium text-white">{personalInfo.location}</span>
                </div>
              </div>

              {/* Domain / Deployment URL */}
              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-sky-500/10 flex items-center justify-center text-sky-400 border border-sky-500/20">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block">โดเมนเว็บไซต์ที่ออนไลน์</span>
                  <a
                    href={`https://${personalInfo.domain}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium text-indigo-400 hover:underline"
                  >
                    {personalInfo.domain}
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-2">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-3">
                  ติดตามผลงานบนแพลตฟอร์ม
                </span>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-sm font-medium text-white transition"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub Repositories</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800">
              <h3 className="text-xl font-bold text-white mb-2">ส่งข้อความถึง Wachirada</h3>
              <p className="text-sm text-slate-400 mb-6">
                กรอกฟอร์มเพื่อส่งข้อความโดยตรง ระบบจะแสดงผลการทำงานทันที
              </p>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
                  <div>
                    <h4 className="font-bold">ส่งข้อความสำเร็จแล้ว!</h4>
                    <p className="text-xs text-emerald-400 mt-1">ขอบคุณสำหรับข้อความ Wachirada จะติดต่อกลับโดยเร็วที่สุดครับ/ค่ะ</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        ชื่อของคุณ *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="สมชาย ใจดี"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        อีเมลของคุณ *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="yourname@example.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      หัวข้อเรื่อง
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="เช่น สอบถามเกี่ยวกับการพัฒนาเว็บไซต์ / ติดต่องาน"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      ข้อความของคุณ *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="เขียนรายละเอียดข้อความที่ต้องการติดต่อ..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-6 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2 hover:-translate-y-0.5 transition-all"
                  >
                    <span>ส่งข้อความ</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
