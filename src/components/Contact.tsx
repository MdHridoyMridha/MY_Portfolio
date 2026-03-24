import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Let's <span className="text-blue-600">Connect</span>
            </h2>
            <p className="text-lg text-gray-500 mb-12 leading-relaxed">
              Have a project in mind or just want to say hi? I'm always open to discussing new opportunities, 
              creative collaborations, or technical challenges.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Email Me</p>
                  <p className="text-lg font-bold text-gray-900">hridoyhs369@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Call Me</p>
                  <p className="text-lg font-bold text-gray-900">+880 1XXXXXXXXX</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center text-pink-600 group-hover:bg-pink-600 group-hover:text-white transition-all duration-300">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Location</p>
                  <p className="text-lg font-bold text-gray-900">Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-[48px] shadow-2xl shadow-blue-100/50 border border-gray-100"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-2">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-transparent focus:border-blue-500 focus:bg-white transition-all outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-2">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-transparent focus:border-blue-500 focus:bg-white transition-all outline-none"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-2">Subject</label>
                <input 
                  type="text" 
                  placeholder="Project Inquiry"
                  className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-transparent focus:border-blue-500 focus:bg-white transition-all outline-none"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-2">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-transparent focus:border-blue-500 focus:bg-white transition-all outline-none resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 rounded-2xl bg-blue-600 text-white font-bold shadow-xl shadow-blue-200 flex items-center justify-center gap-3 hover:bg-blue-700 transition-all"
              >
                Send Message <Send size={20} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
