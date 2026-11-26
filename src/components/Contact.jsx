import React, { useState } from 'react';
import { Mail, MapPin, Send, Sparkles, CheckCircle2, Copy, Check, Globe } from 'lucide-react';
import { GithubIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }); }, 4000);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative overflow-hidden bg-white">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-200 to-transparent" />

      {/* Background blobs */}
      <div className="absolute top-20 right-10 w-96 h-96 rounded-full blur-3xl -z-0 pointer-events-none" style={{background: 'radial-gradient(circle, rgba(167,139,250,0.15) 0%, transparent 70%)'}} />
      <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full blur-3xl -z-0 pointer-events-none" style={{background: 'radial-gradient(circle, rgba(236,72,153,0.1) 0%, transparent 70%)'}} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-violet-100 to-pink-100 border border-violet-200 text-sm font-bold text-violet-700">
            <Sparkles className="w-3.5 h-3.5" /> ติดต่อฉัน
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-800 tracking-tight">
            มาสร้าง<span className="bg-gradient-to-r from-violet-600 to-pink-500 bg-clip-text text-transparent">สิ่งที่ยอดเยี่ยม</span>ด้วยกัน!
          </h2>
          <p className="text-slate-500 text-lg">สนใจร่วมงาน หรือมีโปรเจกต์ในใจ? ติดต่อได้เลยครับ</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Left Info */}
          <div className="lg:col-span-5 space-y-5">

            {/* Info Card */}
            <div className="relative rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-pink-500 to-rose-500" />
              <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px'}} />
              <div className="relative p-8 text-white space-y-5">
                <h3 className="text-2xl font-black">ข้อมูลติดต่อ</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  พร้อมรับงาน สอบถาม และให้คำปรึกษาด้านการพัฒนาเว็บไซต์ ตอบกลับภายใน 24 ชั่วโมงครับ
                </p>

                {/* Email */}
                <div className="flex items-center justify-between p-4 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/20">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-white/70 font-semibold">อีเมล</p>
                      <p className="text-sm font-black">{personalInfo.email}</p>
                    </div>
                  </div>
                  <button onClick={handleCopy}
                    className="p-2 rounded-xl bg-white/20 hover:bg-white/30 transition">
                    {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/15 border border-white/20">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-white/70 font-semibold">สถานที่</p>
                    <p className="text-sm font-black">{personalInfo.location}</p>
                  </div>
                </div>

                {/* Domain */}
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/15 border border-white/20">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-white/70 font-semibold">เว็บไซต์</p>
                    <a href={`https://${personalInfo.domain}`} target="_blank" rel="noreferrer"
                      className="text-sm font-black underline underline-offset-2"
                    >{personalInfo.domain}</a>
                  </div>
                </div>

                {/* GitHub */}
                <a href={personalInfo.github} target="_blank" rel="noreferrer"
                  className="flex items-center gap-3 p-4 rounded-2xl bg-white/15 border border-white/20 hover:bg-white/25 transition">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-white/70 font-semibold">GitHub</p>
                    <p className="text-sm font-black">@wachirada27</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-purple-100 shadow-xl shadow-purple-100/40 p-8">
              <h3 className="text-2xl font-black text-slate-800 mb-1">ส่งข้อความมาหาฉัน ✉️</h3>
              <p className="text-slate-400 text-sm mb-6">กรอกฟอร์มด้านล่าง ฉันจะตอบกลับโดยเร็วที่สุด</p>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-lg">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-black text-emerald-700 text-lg">ส่งสำเร็จแล้ว! 🎉</h4>
                    <p className="text-emerald-600 text-sm mt-0.5">ขอบคุณ จะตอบกลับภายใน 24 ชั่วโมงครับ</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-black text-slate-500 uppercase tracking-wider mb-2">ชื่อของคุณ *</label>
                      <input type="text" required value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="สมชาย ใจดี"
                        className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-purple-100 text-slate-800 placeholder-slate-300 focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100 font-medium transition" />
                    </div>
                    <div>
                      <label className="block text-xs font-black text-slate-500 uppercase tracking-wider mb-2">อีเมล *</label>
                      <input type="email" required value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="yourname@email.com"
                        className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-purple-100 text-slate-800 placeholder-slate-300 focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100 font-medium transition" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-black text-slate-500 uppercase tracking-wider mb-2">หัวข้อ</label>
                    <input type="text" value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      placeholder="ติดต่องาน / สอบถาม / แนะนำตัว"
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-purple-100 text-slate-800 placeholder-slate-300 focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100 font-medium transition" />
                  </div>

                  <div>
                    <label className="block text-xs font-black text-slate-500 uppercase tracking-wider mb-2">ข้อความ *</label>
                    <textarea required rows={4} value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="เขียนข้อความที่ต้องการบอก..."
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-purple-100 text-slate-800 placeholder-slate-300 focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100 font-medium transition resize-none" />
                  </div>

                  <button type="submit"
                    className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-violet-600 via-pink-500 to-rose-500 text-white font-black text-base shadow-xl shadow-violet-200 hover:shadow-violet-300 hover:scale-[1.02] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 animate-gradient-shift">
                    ส่งข้อความ <Send className="w-5 h-5" />
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
