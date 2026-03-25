import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showPhoneToast, setShowPhoneToast] = useState(false);

  const handlePhoneClick = (e: React.MouseEvent) => {
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
              <a 
                href="mailto:hridoyhs369@gmail.com"
                className="flex items-center gap-6 group cursor-pointer"
              >
                <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Email Me</p>
                  <p className="text-lg font-bold text-gray-900">hridoyhs369@gmail.com</p>
                </div>
              </a>

              <a 
                href="#"
                onClick={handlePhoneClick}
                className="flex items-center gap-6 group cursor-pointer relative"
              >
                <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Call Me</p>
                  <p className="text-lg font-bold text-gray-900">+880 1XXXXXXXXX</p>
                </div>

                <AnimatePresence>
                  {showPhoneToast && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="absolute left-0 -top-12 bg-gray-900 text-white text-xs py-2 px-4 rounded-lg shadow-xl whitespace-nowrap z-30"
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
                <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center text-pink-600 group-hover:bg-pink-600 group-hover:text-white transition-all duration-300">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Location</p>
                  <p className="text-lg font-bold text-gray-900">Dhaka, Bangladesh</p>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-[48px] shadow-2xl shadow-blue-100/50 border border-gray-100 relative overflow-hidden"
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
                      <label className="text-sm font-bold text-gray-700 ml-2">Full Name</label>
                      <input 
                        required
                        name="name"
                        type="text" 
                        placeholder="John Doe"
                        className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-transparent focus:border-blue-500 focus:bg-white transition-all outline-none"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 ml-2">Email Address</label>
                      <input 
                        required
                        name="email"
                        type="email" 
                        placeholder="john@example.com"
                        className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-transparent focus:border-blue-500 focus:bg-white transition-all outline-none"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-2">Subject</label>
                    <input 
                      required
                      name="subject"
                      type="text" 
                      placeholder="Project Inquiry"
                      className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-transparent focus:border-blue-500 focus:bg-white transition-all outline-none"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-2">Message</label>
                    <textarea 
                      required
                      name="message"
                      rows={4}
                      placeholder="Tell me about your project..."
                      className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-transparent focus:border-blue-500 focus:bg-white transition-all outline-none resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-5 rounded-2xl text-white font-bold shadow-xl flex items-center justify-center gap-3 transition-all ${
                      isSubmitting ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 shadow-blue-200 hover:bg-blue-700'
                    }`}
                  >
                    {isSubmitting ? (
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
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
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-500">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-8 text-blue-600 font-bold hover:underline"
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
