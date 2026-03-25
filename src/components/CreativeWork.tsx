import { motion } from 'motion/react';
import { CREATIVE_WORK, PERSONAL_INFO } from '../constants';
import { Play, Camera, ZoomIn, Youtube, Sparkles, Video, Film, Image as ImageIcon, GraduationCap } from 'lucide-react';
import React from 'react';

export default function CreativeWork() {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${(x / rect.width) * 100}%`);
    e.currentTarget.style.setProperty('--mouse-y', `${(y / rect.height) * 100}%`);
  };

  return (
    <section 
      id="creative" 
      className="py-32 relative overflow-hidden mesh-bg code-lighting scanline-effect"
      onMouseMove={handleMouseMove}
    >
      {/* Background Image Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <img 
          src={PERSONAL_INFO.aboutImage} 
          alt="" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 text-purple-400 text-[10px] font-mono mb-8 border border-purple-500/20 uppercase tracking-[0.3em]"
          >
            <Sparkles size={14} className="animate-pulse" />
            <span>Creative Portfolio</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black mb-8 text-white tracking-tighter leading-none"
          >
            Visual <span className="text-gradient-vibrant">Storytelling</span>
          </motion.h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-12 text-xl font-light leading-relaxed">
            Where <span className="text-white font-bold">technology</span> meets <span className="text-purple-400 font-bold">cinematic art</span>. Explore my latest video content and creative media projects.
          </p>
          <motion.a
            href="https://youtube.com/@hridoy_mridha?si=RFjp1FdnJFe6-3ks"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(220,38,38,0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-red-600 text-white font-black uppercase tracking-widest text-xs transition-all"
          >
            <Youtube size={24} />
            Visit My YouTube Channel
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Featured Photo: CSE North South University */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -15 }}
            className="group relative aspect-[3/4] rounded-[50px] overflow-hidden shadow-2xl cursor-pointer block border border-white/10 hover:border-cyan-500/50 transition-all duration-500 preserve-3d perspective-2000"
          >
            <img 
              src={PERSONAL_INFO.aboutImage} 
              alt="CSE North South University" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-2"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
            <div className="absolute inset-0 flex flex-col justify-end p-10 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-10 group-hover:translate-y-0">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-4 py-2 rounded-full bg-cyan-500/20 backdrop-blur-xl text-cyan-300 text-[10px] font-black uppercase tracking-widest border border-cyan-500/30">
                  University Life
                </span>
              </div>
              <h3 className="text-3xl font-black text-white mb-8 tracking-tight leading-tight">CSE North South University</h3>
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-black shadow-2xl group-hover:rotate-12 transition-transform duration-500">
                <ImageIcon size={24} />
              </div>
            </div>
            <div className="absolute top-8 right-8 p-5 rounded-3xl bg-black/40 backdrop-blur-xl border border-white/10 text-white opacity-100 group-hover:opacity-0 transition-all duration-500 shadow-2xl">
              <GraduationCap size={24} />
            </div>
            <div className="absolute -inset-[1px] bg-gradient-to-br from-cyan-500/20 via-transparent to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[50px]" />
          </motion.div>

          {CREATIVE_WORK.map((work, index) => (
            <motion.a
              key={work.title}
              href={work.link || '#'}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -15 }}
              className="group relative aspect-[3/4] rounded-[50px] overflow-hidden shadow-2xl cursor-pointer block border border-white/10 hover:border-purple-500/50 transition-all duration-500 preserve-3d perspective-2000"
            >
              <img 
                src={work.thumbnail} 
                alt={work.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-2"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              
              <div className="absolute inset-0 flex flex-col justify-end p-10 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-10 group-hover:translate-y-0">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-4 py-2 rounded-full bg-purple-500/20 backdrop-blur-xl text-purple-300 text-[10px] font-black uppercase tracking-widest border border-purple-500/30">
                    {work.category}
                  </span>
                </div>
                <h3 className="text-3xl font-black text-white mb-8 tracking-tight leading-tight">{work.title}</h3>
                
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-black shadow-2xl group-hover:rotate-12 transition-transform duration-500">
                    {work.type === 'video' ? <Play size={24} fill="currentColor" /> : <Camera size={24} />}
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-xl flex items-center justify-center text-white border border-white/20 hover:bg-white/20 transition-colors">
                    <ZoomIn size={24} />
                  </div>
                </div>
              </div>

              {/* Icon Indicator (Always visible) */}
              <div className="absolute top-8 right-8 p-5 rounded-3xl bg-black/40 backdrop-blur-xl border border-white/10 text-white opacity-100 group-hover:opacity-0 transition-all duration-500 shadow-2xl">
                {work.type === 'video' ? <Film size={24} /> : <ImageIcon size={24} />}
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute -inset-[1px] bg-gradient-to-br from-purple-500/20 via-transparent to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[50px]" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
