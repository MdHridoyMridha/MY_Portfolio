import { motion } from 'motion/react';
import { CREATIVE_WORK } from '../constants';
import { Play, Camera, ZoomIn } from 'lucide-react';

export default function CreativeWork() {
  return (
    <section id="creative" className="py-24 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-blue-50/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Hridoy Mridha - <span className="text-purple-600">NSU'r Single Star</span>
          </motion.h2>
          <p className="text-gray-500 max-w-2xl mx-auto mb-8">
            Welcome to my content hub. Here I showcase my latest video content, cinematic edits, and creative storytelling.
          </p>
          <motion.a
            href="https://youtube.com/@hridoy_mridha?si=RFjp1FdnJFe6-3ks"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-red-600 text-white font-semibold shadow-lg shadow-red-200 hover:bg-red-700 transition-colors"
          >
            <Play size={18} fill="currentColor" />
            Visit My YouTube Channel
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CREATIVE_WORK.map((work, index) => (
            <motion.div
              key={work.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative aspect-[3/4] rounded-[32px] overflow-hidden shadow-2xl cursor-pointer"
            >
              <img 
                src={work.thumbnail} 
                alt={work.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider">
                    {work.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{work.title}</h3>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-gray-900 shadow-xl">
                    {work.type === 'video' ? <Play size={20} fill="currentColor" /> : <Camera size={20} />}
                  </div>
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30">
                    <ZoomIn size={20} />
                  </div>
                </div>
              </div>

              {/* Icon Indicator (Always visible) */}
              <div className="absolute top-6 right-6 p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                {work.type === 'video' ? <Play size={20} /> : <Camera size={20} />}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
