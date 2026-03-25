import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { PERSONAL_INFO } from '../constants';
import { Github, Linkedin, Youtube, Terminal, Code2, Cpu, Globe, ArrowRight, Play, Camera } from 'lucide-react';
import React from 'react';

export default function Hero() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["20deg", "-20deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-20deg", "20deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Update CSS variables for code-lighting effect
    e.currentTarget.style.setProperty('--mouse-x', `${(mouseX / width) * 100}%`);
    e.currentTarget.style.setProperty('--mouse-y', `${(mouseY / height) * 100}%`);

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 perspective-2000 mesh-bg code-lighting scanline-effect"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] animate-pulse delay-700" />
        
        {/* Floating Code Snippets */}
        <motion.div 
          animate={{ y: [0, -100], opacity: [0, 0.3, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/3 left-20 text-[10px] font-mono text-cyan-500/20 whitespace-pre"
        >
          {`const developer = {\n  name: "${PERSONAL_INFO.name}",\n  status: "coding"\n}`}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-morphism border border-cyan-500/30 text-cyan-400 font-mono text-[10px] mb-6 uppercase tracking-[0.3em]"
          >
            <Terminal size={14} className="animate-pulse" />
            <span className="flex items-center gap-1">
              system.status: <span className="text-green-400">active</span>
            </span>
          </motion.div>

          <h1 className="text-7xl md:text-9xl font-black mb-8 tracking-tighter leading-[0.85]">
            <span className="text-white block mb-2">I'm</span>
            <span className="text-gradient-vibrant drop-shadow-[0_0_25px_rgba(6,182,212,0.4)]">
              {PERSONAL_INFO.name}
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-400 mb-10 max-w-xl font-light leading-relaxed">
            A <span className="text-white font-bold">CSE Student</span> & 
            <span className="text-white font-bold"> Content Creator</span> pushing the boundaries of 
            <span className="text-cyan-400"> digital</span> <span className="text-purple-400">innovation</span>.
          </p>

          <div className="flex flex-wrap gap-6 mb-12">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(6,182,212,0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 rounded-2xl bg-cyan-500 text-black font-black uppercase tracking-widest text-xs transition-all flex items-center gap-2"
            >
              Explore Work <ArrowRight size={18} />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 rounded-2xl glass-morphism border border-white/10 text-white font-black uppercase tracking-widest text-xs transition-all"
            >
              Contact Me
            </motion.a>
          </div>

          <div className="flex items-center gap-8">
            {[
              { icon: Github, href: PERSONAL_INFO.github, color: 'hover:text-cyan-400' },
              { icon: Linkedin, href: PERSONAL_INFO.linkedin, color: 'hover:text-blue-400' },
              { icon: Youtube, href: PERSONAL_INFO.youtube, color: 'hover:text-red-400' }
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                whileHover={{ y: -8, scale: 1.3, color: "#22d3ee" }}
                className={`text-slate-500 transition-all duration-300 ${social.color}`}
              >
                <social.icon size={28} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          style={{ rotateX, rotateY }}
          className="relative hidden lg:block preserve-3d"
        >
          {/* Main Profile Image Container */}
          <div className="relative z-20 group">
            <div className="absolute -inset-8 bg-gradient-to-tr from-cyan-500 via-blue-500 to-purple-600 rounded-[60px] blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-700" />
            <div className="relative aspect-square rounded-[60px] overflow-hidden border-2 border-white/10 glass-morphism shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <img 
                src={PERSONAL_INFO.profileImage} 
                alt={PERSONAL_INFO.name}
                className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
            </div>

            {/* Floating 3D Elements */}
            <motion.div
              animate={{ 
                y: [0, -30, 0],
                rotate: [0, 15, 0]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-12 -right-12 glass-morphism p-6 rounded-3xl border border-white/20 shadow-2xl z-30"
            >
              <Code2 size={40} className="text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
            </motion.div>

            <motion.div
              animate={{ 
                y: [0, 30, 0],
                rotate: [0, -15, 0]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-12 -left-12 glass-morphism p-6 rounded-3xl border border-white/20 shadow-2xl z-30"
            >
              <Cpu size={40} className="text-purple-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
            </motion.div>

            <motion.div
              animate={{ 
                x: [0, 20, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute top-1/2 -right-20 glass-morphism p-5 rounded-2xl border border-white/20 shadow-2xl z-30"
            >
              <Globe size={32} className="text-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
            </motion.div>

            {/* Orbiting Particles */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 15 + i * 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute top-1/2 left-1/2 w-full h-full"
                  style={{ transform: `translate(-50%, -50%) rotate(${i * 45}deg)` }}
                >
                  <div 
                    className="w-1.5 h-1.5 rounded-full bg-cyan-400/30 blur-[1px]"
                    style={{ marginLeft: `${200 + i * 25}px` }}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Background Decorative Text */}
          <div className="absolute -bottom-32 -right-32 text-[15rem] font-black text-white/[0.03] select-none pointer-events-none leading-none tracking-tighter">
            DEV
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] font-mono uppercase tracking-[0.5em] text-slate-500">Explore</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-[1px] h-16 bg-gradient-to-b from-cyan-500 via-purple-500 to-transparent" 
        />
      </motion.div>
    </section>
  );
}
