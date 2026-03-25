import { motion, AnimatePresence } from 'motion/react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../constants';
import { cn } from '../lib/utils';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Content', href: '#creative' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-6",
        isScrolled ? "bg-black/40 backdrop-blur-2xl border-b border-white/5 py-4 shadow-2xl" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.a 
          href="#"
          className="text-3xl font-black tracking-tighter text-white group"
          whileHover={{ scale: 1.05 }}
        >
          Hridoy<span className="text-cyan-400 group-hover:animate-pulse">.</span>
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 hover:text-cyan-400 transition-all hover:tracking-[0.4em]"
            >
              {item.name}
            </a>
          ))}
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(34, 211, 238, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-black text-[10px] font-black uppercase tracking-widest transition-all shadow-xl"
          >
            Hire Me
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-2xl border-b border-white/10 p-6 md:hidden flex flex-col gap-4 overflow-hidden"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-lg font-mono uppercase tracking-widest text-gray-300 hover:text-cyan-400"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full py-4 rounded-xl bg-cyan-500 text-black font-black uppercase tracking-widest"
            >
              Hire Me
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
