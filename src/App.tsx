import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import CreativeWork from './components/CreativeWork';
import Journey from './components/Journey';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CursorFollower from './components/CursorFollower';
import React, { useEffect, useState } from 'react';

export default function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen selection:bg-cyan-500/20 selection:text-cyan-400 bg-black text-white relative">
      {/* Global Interactive Code Grid (Coding Vibe) */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(34, 211, 238, 0.15) 0%, transparent 40%), 
                           linear-gradient(rgba(34, 211, 238, 0.05) 1px, transparent 1px), 
                           linear-gradient(90deg, rgba(34, 211, 238, 0.05) 1px, transparent 1px)`,
          backgroundSize: `100% 100%, 40px 40px, 40px 40px`,
        }}
      />

      {/* Floating Binary Bits (Coding Vibe) */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-5 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full font-mono text-[10px] leading-none select-none">
          {Array.from({ length: 50 }).map((_, i) => (
            <div key={i} className="flex gap-4 mb-4 whitespace-nowrap">
              {Array.from({ length: 100 }).map((_, j) => (
                <span key={j}>{Math.random() > 0.5 ? '1' : '0'}</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <CursorFollower />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <CreativeWork />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
