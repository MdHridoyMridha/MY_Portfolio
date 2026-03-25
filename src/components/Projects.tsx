import { motion } from 'motion/react';
import { PROJECTS, PERSONAL_INFO } from '../constants';
import { ExternalLink, Github, Terminal, Cpu, Code2, Globe, Rocket } from 'lucide-react';
import React from 'react';

export default function Projects() {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${(x / rect.width) * 100}%`);
    e.currentTarget.style.setProperty('--mouse-y', `${(y / rect.height) * 100}%`);
  };

  return (
    <section 
      id="projects" 
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
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-cyan-400 font-mono text-[10px] mb-6 uppercase tracking-[0.3em]"
            >
              <Terminal size={14} className="animate-pulse" />
              <span>Project Repository</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-black mb-8 text-white tracking-tighter leading-none"
            >
              Featured <span className="text-gradient-vibrant">Projects</span>
            </motion.h2>
            <p className="text-slate-400 text-xl font-light leading-relaxed">
              A curated selection of technical solutions, bridging the gap between <span className="text-white font-bold">complex logic</span> and <span className="text-cyan-400 font-bold">elegant UI</span>.
            </p>
          </div>
          <motion.a
            href="https://github.com/MdHridoyMridha"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255,255,255,0.1)" }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 rounded-2xl glass-morphism border border-white/10 text-white font-black uppercase tracking-widest text-xs transition-all flex items-center gap-3"
          >
            <Github size={18} /> View All on GitHub
          </motion.a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -15 }}
              className="group perspective-2000"
            >
              <div className="glass-morphism rounded-[40px] overflow-hidden border border-white/10 h-full flex flex-col relative preserve-3d transition-all duration-500 group-hover:shadow-[0_20px_50px_rgba(6,182,212,0.2)]">
                {/* Project Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                  
                  {/* Tech Badge */}
                  <div className="absolute top-6 right-6 px-4 py-2 rounded-full glass-morphism border border-white/20 text-[10px] font-mono text-cyan-400 uppercase tracking-widest flex items-center gap-2">
                    <Cpu size={12} /> {project.tech[0]}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-10 flex-grow flex flex-col">
                  <h3 className="text-2xl font-black text-white mb-4 tracking-tight group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm font-light leading-relaxed mb-8 flex-grow line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-10">
                    {project.tech.map((t) => (
                      <span 
                        key={t}
                        className="px-3 py-1 rounded-lg bg-white/5 border border-white/5 text-[10px] font-mono text-slate-500 uppercase tracking-widest"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-6 pt-8 border-t border-white/5">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, color: '#22d3ee' }}
                      className="text-slate-400 transition-colors flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em]"
                    >
                      <Github size={18} /> Code
                    </motion.a>
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, color: '#a855f7' }}
                      className="text-slate-400 transition-colors flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em]"
                    >
                      <ExternalLink size={18} /> Live Demo
                    </motion.a>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute -inset-[1px] bg-gradient-to-br from-cyan-500/20 via-transparent to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[40px]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
