import { motion } from 'motion/react';
import { SOCIAL_LINKS, PERSONAL_INFO } from '../constants';

export default function Footer() {
  return (
    <footer className="py-20 relative overflow-hidden border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left flex flex-col items-center md:items-start gap-4">
            <a href="#" className="text-4xl font-black tracking-tighter text-white group flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-cyan-500/30 group-hover:border-cyan-400 transition-colors">
                <img 
                  src={PERSONAL_INFO.aboutImage} 
                  alt="CSE NSU" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span>Hridoy<span className="text-cyan-400 group-hover:animate-pulse">.</span></span>
            </a>
            <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.4em]">© 2026 MD. Hridoy Mridha. All rights reserved.</p>
          </div>

          <div className="flex items-center gap-8">
            {SOCIAL_LINKS.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                whileHover={{ y: -8, scale: 1.2, color: "#22d3ee" }}
                className="text-slate-500 transition-all duration-300"
              >
                <link.icon size={24} />
              </motion.a>
            ))}
          </div>

          <div className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 text-center md:text-right">
            Engineered with <span className="text-cyan-400 animate-pulse">Passion</span> by <br/>
            <span className="text-white font-black text-xs tracking-widest">MD. Hridoy Mridha</span>
          </div>
        </div>
      </div>
      
      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-t from-cyan-500/5 to-transparent pointer-events-none" />
    </footer>
  );
}
