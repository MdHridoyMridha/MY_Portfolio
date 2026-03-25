import { motion } from 'motion/react';
import { PERSONAL_INFO, HOBBIES } from '../constants';
import { GraduationCap, MapPin, Heart, Sparkles, Terminal, Cpu, Globe, Award, Rocket, Code } from 'lucide-react';
import React from 'react';

export default function About() {
  const stats = [
    { label: 'Projects Completed', value: '20+', icon: Rocket, color: 'text-cyan-400' },
    { label: 'Technologies Mastered', value: '15+', icon: Cpu, color: 'text-purple-400' },
    { label: 'Content Views', value: '20M+', icon: Globe, color: 'text-blue-400' },
    { label: 'Certifications', value: '10+', icon: Award, color: 'text-green-400' },
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${(x / rect.width) * 100}%`);
    e.currentTarget.style.setProperty('--mouse-y', `${(y / rect.height) * 100}%`);
  };

  return (
    <section 
      id="about" 
      className="py-32 relative overflow-hidden mesh-bg code-lighting scanline-effect"
      onMouseMove={handleMouseMove}
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">
            <span className="text-white">ABOUT</span>{' '}
            <span className="text-gradient-vibrant">MISSION</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative perspective-2000"
          >
            <motion.div 
              whileHover={{ rotateY: 10, rotateX: -5 }}
              className="glass-morphism p-10 rounded-[40px] border border-white/10 relative z-10 preserve-3d"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-cyan-500/20 rounded-2xl text-cyan-400">
                  <Terminal size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">Technical Profile</h3>
                  <p className="text-cyan-400/60 font-mono text-xs uppercase tracking-widest">System Architect & Creator</p>
                </div>
              </div>

              <div className="space-y-6 text-lg text-slate-400 leading-relaxed mb-8 font-light">
                <p>
                  I am a Computer Science and Engineering student at <span className="font-bold text-white">North South University</span>. 
                  My journey is a unique blend of logical problem-solving and creative storytelling.
                </p>
                <p>
                  While I spend my days diving into algorithms and programming languages like C++, Java, and Python, 
                  my soul thrives in the world of visual media. I am a professional-level video editor and content creator.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-purple-500/20 rounded-lg text-purple-400 mt-1">
                    <Code size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Full-Stack Development</h4>
                    <p className="text-slate-500 text-sm">Architecting scalable web applications with modern tech stacks.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400 mt-1">
                    <Globe size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Content Strategy</h4>
                    <p className="text-slate-500 text-sm">Creating educational tech content for a growing community.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl -z-10" />
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className={`glass-morphism p-8 rounded-[32px] border text-center group relative overflow-hidden transition-all duration-500 ${
                  stat.label === 'Content Views' 
                    ? 'border-cyan-500/50 shadow-[0_0_30px_rgba(34,211,238,0.2)]' 
                    : 'border-white/5'
                }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className={`inline-flex p-4 rounded-2xl bg-white/5 mb-4 group-hover:scale-110 transition-transform duration-500 ${stat.color}`}>
                  <stat.icon size={32} />
                </div>
                <div className={`text-4xl font-black mb-2 tracking-tighter transition-all duration-500 ${
                  stat.label === 'Content Views' ? 'text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]' : 'text-white'
                }`}>
                  {stat.value}
                </div>
                <div className="text-slate-500 text-xs font-mono uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Hobbies & Interests */}
        <div className="mt-32">
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-10 flex items-center gap-3 text-white tracking-tight"
          >
            <Heart className="text-red-500 animate-pulse" size={32} />
            Hobbies & Interests
          </motion.h3>
          <div className="flex flex-wrap gap-6">
            {HOBBIES.map((hobby, i) => (
              <motion.div 
                key={hobby.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.1, y: -5, rotate: 2 }}
                className="flex items-center gap-3 px-8 py-4 glass-morphism rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all cursor-default group"
              >
                <span className="text-2xl group-hover:scale-125 transition-transform duration-300">{hobby.icon}</span>
                <span className="font-bold text-slate-300 group-hover:text-white transition-colors">{hobby.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Volunteer Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 glass-morphism p-12 rounded-[40px] border border-white/5 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Award size={120} className="text-white" />
          </div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 text-green-400 font-mono text-[10px] mb-8 uppercase tracking-widest">
              <Sparkles size={14} /> Community Impact
            </div>
            <h3 className="text-4xl font-black text-white mb-12 tracking-tighter">Volunteer Experience</h3>
            <div className="grid lg:grid-cols-3 gap-8">
              {[
                { title: "Member - CEC", subtitle: "Computer Engineering Club at NSU", desc: "Active member participating in technical workshops, seminars, and club activities focused on computer engineering." },
                { title: "ACM Student Chapter Volunteer", subtitle: "Data Science Learning Program 2024", desc: "Assisted in organizing and supporting the Data Science Learning Program, helping students navigate technical concepts." },
                { title: "Promotional Member - NSU", subtitle: "First Quran Conference & Seerah Exhibition 2025", desc: "Actively promoted the conference and exhibition at North South University, engaging with the student community." }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 glass-morphism rounded-[32px] border border-white/10 hover:border-cyan-500/20 transition-all group"
                >
                  <h4 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{item.title}</h4>
                  <p className="text-[10px] text-cyan-400/60 font-mono uppercase tracking-widest mb-4">{item.subtitle}</p>
                  <p className="text-slate-400 text-sm font-light leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
