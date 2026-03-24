import { motion } from 'motion/react';
import { JOURNEY } from '../constants';

export default function Journey() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My <span className="text-blue-600">Journey</span></h2>
          <p className="text-gray-500">The evolution of my skills and experiences over the years.</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {JOURNEY.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="flex-1 w-full">
                  <div className={`p-8 rounded-[32px] bg-gray-50 border border-gray-100 shadow-sm hover:shadow-md transition-shadow ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <span className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2 block">{item.year}</span>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">{item.title}</h3>
                    <p className="text-gray-500 leading-relaxed">{item.description}</p>
                  </div>
                </div>

                <div className="relative z-10 w-12 h-12 rounded-full bg-white border-4 border-blue-600 flex items-center justify-center text-blue-600 shadow-lg">
                  <item.icon size={20} />
                </div>

                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
