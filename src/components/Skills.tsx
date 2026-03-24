import { motion } from 'motion/react';
import { SKILLS } from '../constants';

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Expertise</span>
          </motion.h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            A diverse set of skills ranging from technical programming to professional creative media production.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SKILLS.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-[32px] bg-white border border-gray-100 shadow-xl shadow-gray-100/50 hover:shadow-2xl hover:shadow-blue-100/50 transition-all duration-500"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${skill.color} p-4 text-white mb-6 shadow-lg`}>
                <skill.icon size={32} />
              </div>
              
              <h3 className="text-2xl font-bold mb-6 text-gray-900">{skill.category}</h3>
              
              <div className="space-y-4">
                {skill.items.map((item) => (
                  <div key={item} className="relative">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-semibold text-gray-700">{item}</span>
                    </div>
                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "85%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                        className={`h-full bg-gradient-to-r ${skill.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
