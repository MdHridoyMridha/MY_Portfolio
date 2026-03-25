import { motion } from 'motion/react';
import { JOURNEY } from '../constants';
import { Sparkles, Milestone, Zap } from 'lucide-react';
import React from 'react';

export default function Journey() {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${(x / rect.width) * 100}%`);
    e.currentTarget.style.setProperty('--mouse-y', `${(y / rect.height) * 100}%`);
  };

  return (
    <section 
      id="journey" 
      className="py-32 relative overflow-hidden mesh-bg code-lighting scanline-effect"
      onMouseMove={handleMouseMove}
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-400 text-[10px] font-mono mb-8 border border-cyan-500/20 uppercase tracking-[0.3em]"
          >
            <Milestone size={14} className="animate-pulse" />
            <span>The Evolution</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black mb-8 text-white tracking-tighter leading-none"
          >
            My <span className="text-gradient-vibrant">Journey</span>
          </motion.h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-12 text-xl font-light leading-relaxed">
            A timeline of <span className="text-white font-bold">growth</span>, <span className="text-cyan-400 font-bold">innovation</span>, and <span className="text-purple-400 font-bold">creative mastery</span>.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Central Timeline Path (3D Effect) */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-500 via-purple-500 to-transparent -translate-x-1/2 hidden md:block opacity-20" />
          
          <div className="space-y-24">
            {JOURNEY.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50, rotateX: -10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`flex flex-col md:flex-row items-center gap-12 perspective-2000 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Content Card */}
                <div className="flex-1 w-full">
                  <motion.div 
                    whileHover={{ scale: 1.02, y: -5 }}
                    className={`p-10 rounded-[40px] glass-morphism border border-white/10 relative group overflow-hidden ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}
                  >
                    {/* Year Badge */}
                    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 text-white text-[10px] font-black uppercase tracking-widest mb-6 border border-white/10 group-hover:bg-cyan-500/20 group-hover:text-cyan-400 transition-all duration-500`}>
                      <Zap size={12} />
                      {item.year}
                    </div>
                    
                    <h3 className="text-3xl font-black mb-6 text-white tracking-tight leading-tight group-hover:text-gradient-vibrant transition-all duration-500">{item.title}</h3>
                    <p className="text-slate-400 text-lg leading-relaxed font-light group-hover:text-slate-300 transition-colors">{item.description}</p>

                    {/* Decorative Corner Glow */}
                    <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </motion.div>
                </div>

                {/* Center Icon (3D Sphere) */}
                <motion.div 
                  whileInView={{ scale: [0, 1.2, 1] }}
                  className="relative z-10 w-20 h-20 rounded-3xl glass-morphism border border-white/20 flex items-center justify-center text-cyan-400 shadow-2xl group-hover:rotate-[360deg] transition-all duration-1000"
                >
                  <div className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-full animate-pulse" />
                  <item.icon size={32} className="relative z-10" />
                </motion.div>

                {/* Spacer for Desktop */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
