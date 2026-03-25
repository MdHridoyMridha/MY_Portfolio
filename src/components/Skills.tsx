import { motion } from 'motion/react';
import { SKILLS, PERSONAL_INFO } from '../constants';
import { Terminal, Cpu, Code2, Database, Globe, Layers, Rocket, Zap } from 'lucide-react';
import React from 'react';

export default function Skills() {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${(x / rect.width) * 100}%`);
    e.currentTarget.style.setProperty('--mouse-y', `${(y / rect.height) * 100}%`);
  };

  return (
    <section 
      id="skills" 
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-400 text-[10px] font-mono mb-8 border border-cyan-500/20 uppercase tracking-[0.3em]"
          >
            <Zap size={14} className="animate-pulse" />
            <span>Technical Capabilities</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black mb-8 text-white tracking-tighter leading-none"
          >
            Technical <span className="text-gradient-vibrant">Arsenal</span>
          </motion.h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-xl font-light leading-relaxed">
            A diverse set of skills ranging from <span className="text-white font-bold">technical programming</span> to <span className="text-cyan-400 font-bold">professional media</span> production.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
          {SKILLS.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -15 }}
              className="group perspective-2000"
            >
              <div className="glass-morphism p-10 rounded-[40px] border border-white/10 h-full preserve-3d transition-all duration-500 group-hover:shadow-[0_20px_50px_rgba(6,182,212,0.2)] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-white/5 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${skill.color} p-5 text-white mb-10 shadow-2xl relative z-10 group-hover:scale-110 transition-transform duration-500`}>
                  <skill.icon size={40} />
                </div>
                
                <h3 className="text-3xl font-black mb-10 text-white relative z-10 tracking-tight uppercase tracking-[0.1em]">{skill.category}</h3>
                
                <div className="space-y-8 relative z-10">
                  {skill.items.map((item, i) => (
                    <div key={item} className="relative">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-sm font-bold text-slate-300 uppercase tracking-widest">{item}</span>
                        <span className="text-[10px] font-mono text-cyan-400/60 uppercase tracking-widest">Expert</span>
                      </div>
                      <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "90%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 + (i * 0.1) }}
                          className={`h-full bg-gradient-to-r ${skill.color} relative`}
                        >
                          <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.2)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.2)_50%,rgba(255,255,255,0.2)_75%,transparent_75%,transparent)] bg-[length:20px_20px] animate-[shimmer_2s_linear_infinite]" />
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Background Decorative Icon */}
                <div className="absolute -bottom-10 -right-10 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-700 pointer-events-none">
                  <skill.icon size={200} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
