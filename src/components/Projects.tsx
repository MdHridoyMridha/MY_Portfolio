import { motion } from 'motion/react';
import { PROJECTS } from '../constants';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Featured <span className="text-blue-600">Projects</span>
            </motion.h2>
            <p className="text-gray-500 text-lg">
              A selection of my technical work, ranging from web applications to core programming projects.
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-2xl bg-white border border-gray-200 text-gray-800 font-bold shadow-sm hover:bg-gray-50 transition-all"
          >
            View All on GitHub
          </motion.button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white rounded-[40px] overflow-hidden border border-gray-100 shadow-xl shadow-gray-100/50 hover:shadow-2xl transition-all duration-500"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold">
                      {t}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{project.title}</h3>
                <p className="text-gray-500 text-sm mb-6 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex items-center gap-4">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-gray-900 text-white hover:bg-blue-600 transition-colors">
                    <ExternalLink size={20} />
                  </a>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
                      <Github size={20} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
