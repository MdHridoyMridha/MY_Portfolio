import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../constants';
import { Sparkles, ArrowRight, Play, Camera } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-[120px] animate-pulse delay-700" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-6 border border-blue-100"
          >
            <Sparkles size={16} />
            Available for new projects
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-6">
            Hi, I'm <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">MD. Hridoy Mridha</span> 👋
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 font-medium mb-8 max-w-lg">
            {PERSONAL_INFO.title}
          </p>
          
          <p className="text-lg text-gray-500 mb-10 max-w-md leading-relaxed">
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
          {/* 3D Floating Elements Simulation */}
          <div className="relative z-10 rounded-[40px] overflow-hidden border-8 border-white shadow-2xl aspect-square max-w-md mx-auto">
            <img 
              src={PERSONAL_INFO.profileImage} 
              alt="Hridoy Mridha"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

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
