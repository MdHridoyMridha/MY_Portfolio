import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../constants';
import { Sparkles, ArrowRight, Play, Camera } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#f8fafc]">
      {/* Background Elements - Tech Vibe */}
      <div className="absolute inset-0 -z-10 overflow-hidden select-none pointer-events-none">
        {/* Large Background Text */}
        <div className="absolute -top-20 -left-20 text-[20rem] font-black text-gray-100/50 leading-none rotate-12">
          CSE
        </div>
        <div className="absolute -bottom-20 -right-20 text-[20rem] font-black text-gray-100/50 leading-none -rotate-12">
          AI/ML
        </div>
        
        {/* Floating Code Snippets */}
        <motion.div 
          animate={{ y: [0, -100], opacity: [0, 0.3, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-10 text-xs font-mono text-blue-600/20 whitespace-pre"
        >
          {`function optimize() {\n  return data.map(x => x * 2);\n}`}
        </motion.div>
        <motion.div 
          animate={{ y: [0, -120], opacity: [0, 0.2, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 2 }}
          className="absolute bottom-1/4 right-20 text-xs font-mono text-purple-600/20 whitespace-pre"
        >
          {`model.fit(x_train, y_train,\n  epochs=50,\n  batch_size=32)`}
        </motion.div>
        <motion.div 
          animate={{ x: [0, 100], opacity: [0, 0.15, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: 5 }}
          className="absolute top-1/2 left-1/3 text-xs font-mono text-gray-400/20 whitespace-pre"
        >
          {`import tensorflow as tf\nimport numpy as np`}
        </motion.div>

        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-[120px] animate-pulse delay-700" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="perspective-1000"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-mono mb-6 border border-blue-100 backdrop-blur-sm"
          >
            <Sparkles size={16} />
            <span className="tracking-widest uppercase">system.status: active</span>
          </motion.div>
          
          <h1 className="text-7xl md:text-9xl font-black leading-[0.82] mb-10 tracking-tighter text-gray-900">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="block text-gray-400 text-3xl md:text-4xl font-mono mb-6 tracking-normal"
            >
              &gt; Hi, I'm
            </motion.span>
            <motion.span 
              whileHover={{ rotateX: 10, rotateY: -10, scale: 1.02 }}
              className="relative inline-block transform -skew-x-6 transition-all duration-500 cursor-default preserve-3d"
            >
              <span className="absolute -inset-8 bg-gradient-to-r from-blue-600/10 to-purple-600/10 blur-[100px] rounded-full animate-pulse" />
              <span className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent drop-shadow-[0_10px_10px_rgba(0,0,0,0.1)]">
                MD. Hridoy Mridha
              </span>
            </motion.span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 font-mono mb-10 max-w-2xl leading-relaxed">
            <span className="text-blue-600 font-bold">const</span> title = <span className="text-purple-600">"{PERSONAL_INFO.title}"</span>;
          </p>
          
          <p className="text-lg text-gray-500 mb-12 max-w-md leading-relaxed border-l-2 border-blue-600/20 pl-6 font-light">
            {PERSONAL_INFO.bio}
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.a
              href="#creative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-2xl bg-blue-600 text-white font-bold shadow-xl shadow-blue-200 flex items-center gap-2 hover:bg-blue-700 transition-all"
            >
              View My Work <ArrowRight size={20} />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-2xl bg-white text-gray-800 font-bold border border-gray-200 shadow-sm flex items-center gap-2 hover:bg-gray-50 transition-all"
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          {/* Tech Symbols Background */}
          <div className="absolute inset-0 -z-10 overflow-visible">
            {[
              { char: "{ }", top: "-10%", left: "10%", delay: 0 },
              { char: "</>", top: "20%", left: "-20%", delay: 1 },
              { char: "01", top: "70%", left: "-15%", delay: 2 },
              { char: "[ ]", top: "85%", left: "20%", delay: 0.5 },
              { char: "AI", top: "10%", right: "-10%", delay: 1.5 },
              { char: "λ", top: "60%", right: "-20%", delay: 2.5 },
              { char: "Σ", top: "90%", right: "10%", delay: 3 },
            ].map((item, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0.1, 0.3, 0.1],
                  y: [0, -20, 0],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity, 
                  delay: item.delay,
                  ease: "easeInOut" 
                }}
                className="absolute font-mono text-2xl md:text-4xl text-blue-600/20 font-bold pointer-events-none"
                style={{ 
                  top: item.top, 
                  left: item.left, 
                  right: item.right 
                }}
              >
                {item.char}
              </motion.span>
            ))}
            
            {/* Animated Circles/Orbits */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-blue-500/5 rounded-full"
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-purple-500/5 rounded-full border-dashed"
            />
          </div>

          {/* 3D Floating Elements Simulation */}
          <motion.div 
            whileHover={{ rotateY: 15, rotateX: -5, scale: 1.05 }}
            className="relative z-10 rounded-[40px] overflow-hidden border-8 border-white shadow-2xl aspect-square max-w-md mx-auto transition-all duration-500 preserve-3d"
          >
            <img 
              src={PERSONAL_INFO.profileImage} 
              alt="Hridoy Mridha"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* Floating Cards */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-6 z-20 bg-white/80 backdrop-blur-lg p-4 rounded-2xl shadow-xl border border-white/50 flex items-center gap-3"
          >
            <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
              <Play size={24} />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium">Video Editor</p>
              <p className="text-sm font-bold">Pro Level</p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-6 -left-6 z-20 bg-white/80 backdrop-blur-lg p-4 rounded-2xl shadow-xl border border-white/50 flex items-center gap-3"
          >
            <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
              <Camera size={24} />
            </div>
            <div>
              <p className="text-sm font-bold">Content Creator</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
