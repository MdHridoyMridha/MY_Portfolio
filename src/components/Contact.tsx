import React, { useState, FormEvent, MouseEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showPhoneToast, setShowPhoneToast] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${(x / rect.width) * 100}%`);
    e.currentTarget.style.setProperty('--mouse-y', `${(y / rect.height) * 100}%`);
  };

  const handlePhoneClick = (e: MouseEvent) => {
    e.preventDefault();
    setShowPhoneToast(true);
    setTimeout(() => setShowPhoneToast(false), 3000);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;

    // Construct mailto link
    const mailtoLink = `mailto:hridoyhs369@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;

    // Open mail client
    window.location.href = mailtoLink;
    
    // Simulate a brief delay for the UI feedback
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section 
      id="contact" 
      className="py-32 relative overflow-hidden mesh-bg code-lighting scanline-effect"
      onMouseMove={handleMouseMove}
    >
      {/* Background Image Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <img 
          src={PERSONAL_INFO.aboutImage} 
          alt="" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-400 text-[10px] font-mono mb-8 border border-cyan-500/20 uppercase tracking-[0.3em]"
            >
              <Send size={14} className="animate-pulse" />
              <span>Get In Touch</span>
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-black mb-10 text-white tracking-tighter leading-none">
              Let's <span className="text-gradient-vibrant">Connect</span>
            </h2>
            <p className="text-xl text-slate-400 mb-16 leading-relaxed font-light max-w-lg">
              Have a project in mind or just want to say hi? I'm always open to discussing <span className="text-white font-bold">new opportunities</span>, creative collaborations, or technical challenges.
            </p>

            <div className="space-y-10">
              <a 
                href="mailto:hridoyhs369@gmail.com"
                className="flex items-center gap-8 group cursor-pointer"
              >
                <div className="w-20 h-20 rounded-3xl glass-morphism flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-all duration-500 border border-white/10 group-hover:rotate-12 group-hover:scale-110">
                  <Mail size={28} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.3em] mb-2">Email Me</p>
                  <p className="text-xl font-black text-white group-hover:text-cyan-400 transition-colors">hridoyhs369@gmail.com</p>
                </div>
              </a>

              <a 
                href="#"
                onClick={handlePhoneClick}
                className="flex items-center gap-8 group cursor-pointer relative"
              >
                <div className="w-20 h-20 rounded-3xl glass-morphism flex items-center justify-center text-purple-400 group-hover:bg-purple-500 group-hover:text-black transition-all duration-500 border border-white/10 group-hover:-rotate-12 group-hover:scale-110">
                  <Phone size={28} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.3em] mb-2">Call Me</p>
                  <p className="text-xl font-black text-white group-hover:text-purple-400 transition-colors">+880 1XXXXXXXXX</p>
                </div>

                <AnimatePresence>
                  {showPhoneToast && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="absolute left-0 -top-12 glass text-cyan-400 text-[10px] font-bold uppercase tracking-widest py-2 px-4 rounded-lg shadow-xl border border-cyan-500/30 whitespace-nowrap z-30"
                    >
                      Please contact via email for a faster response! 📧
                    </motion.div>
                  )}
                </AnimatePresence>
              </a>

              <a 
                href="https://www.google.com/maps/search/?api=1&query=Dhaka,Bangladesh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-6 group cursor-pointer"
              >
                <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-black transition-all duration-300 border border-white/10">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">Location</p>
                  <p className="text-lg font-bold text-white">Dhaka, Bangladesh</p>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-10 rounded-[48px] border border-white/10 relative overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-6" 
                  onSubmit={handleSubmit}
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-2">Full Name</label>
                      <input 
                        required
                        name="name"
                        type="text" 
                        placeholder="John Doe"
                        className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-cyan-500/50 focus:bg-white/10 transition-all outline-none text-white placeholder:text-gray-600"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-2">Email Address</label>
                      <input 
                        required
                        name="email"
                        type="email" 
                        placeholder="john@example.com"
                        className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-cyan-500/50 focus:bg-white/10 transition-all outline-none text-white placeholder:text-gray-600"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-2">Subject</label>
                    <input 
                      required
                      name="subject"
                      type="text" 
                      placeholder="Project Inquiry"
                      className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-cyan-500/50 focus:bg-white/10 transition-all outline-none text-white placeholder:text-gray-600"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-2">Message</label>
                    <textarea 
                      required
                      name="message"
                      rows={4}
                      placeholder="Tell me about your project..."
                      className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-cyan-500/50 focus:bg-white/10 transition-all outline-none text-white placeholder:text-gray-600 resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(34, 211, 238, 0.3)" }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-5 rounded-2xl text-black font-black uppercase tracking-widest flex items-center justify-center gap-3 transition-all ${
                      isSubmitting ? 'bg-cyan-800 cursor-not-allowed' : 'bg-cyan-500'
                    }`}
                  >
                    {isSubmitting ? (
                      <div className="w-6 h-6 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>Send Message <Send size={20} /></>
                    )}
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="w-20 h-20 bg-cyan-500/10 text-cyan-400 rounded-full flex items-center justify-center mb-6 border border-cyan-500/20">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-2xl font-black text-white mb-2 tracking-tighter">Message Sent!</h3>
                  <p className="text-gray-400 font-light">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-8 text-cyan-400 font-bold uppercase tracking-widest text-xs hover:text-cyan-300 transition-colors"
                  >
                    Send another message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
