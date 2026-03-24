import { motion } from 'motion/react';
import { PERSONAL_INFO, HOBBIES } from '../constants';
import { GraduationCap, MapPin, Heart, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[48px] overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="https://picsum.photos/seed/about/800/1000" 
                alt="About Hridoy"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-blue-600 text-white p-8 rounded-[32px] shadow-2xl max-w-[240px]">
              <p className="text-3xl font-bold mb-1">CSE</p>
              <p className="text-sm opacity-80">Student at North South University</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Passionate about <span className="text-blue-600">Technology</span> & <span className="text-purple-600">Creativity</span>
            </h2>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                I am a Computer Science and Engineering student at <span className="font-bold text-gray-900">North South University</span>. 
                My journey is a unique blend of logical problem-solving and creative storytelling.
              </p>
              <p>
                While I spend my days diving into algorithms and programming languages like C++, Java, and Python, 
                my soul thrives in the world of visual media. I am a professional-level video editor and a cinematic photographer.
              </p>
              <p>
                I'm constantly learning and improving, not just in tech but also in communication and English, 
                striving to become a well-rounded professional who can bridge the gap between complex technology and engaging human experiences.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-12">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white shadow-sm border border-gray-100">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Location</p>
                  <p className="text-sm font-bold text-gray-900">{PERSONAL_INFO.location}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white shadow-sm border border-gray-100">
                <div className="p-3 bg-purple-50 text-purple-600 rounded-xl">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Education</p>
                  <p className="text-sm font-bold text-gray-900">NSU (CSE)</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Heart className="text-red-500" size={24} />
                Hobbies & Interests
              </h3>
              <div className="flex flex-wrap gap-4">
                {HOBBIES.map((hobby) => (
                  <div 
                    key={hobby.name}
                    className="flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-default"
                  >
                    <span className="text-xl">{hobby.icon}</span>
                    <span className="font-medium text-gray-700">{hobby.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Sparkles className="text-yellow-500" size={24} />
                Volunteer Experience
              </h3>
              <div className="space-y-4">
                <div className="p-6 bg-white rounded-[32px] border border-gray-100 shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-1">Member - CEC</h4>
                  <p className="text-sm text-blue-600 font-medium mb-2">Computer Engineering Club at NSU</p>
                  <p className="text-gray-500 text-sm">Active member participating in technical workshops, seminars, and club activities focused on computer engineering.</p>
                </div>
                <div className="p-6 bg-white rounded-[32px] border border-gray-100 shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-1">ACM Student Chapter Volunteer</h4>
                  <p className="text-sm text-blue-600 font-medium mb-2">Data Science Learning Program 2024</p>
                  <p className="text-gray-500 text-sm">Assisted in organizing and supporting the Data Science Learning Program, helping students navigate technical concepts.</p>
                </div>
                <div className="p-6 bg-white rounded-[32px] border border-gray-100 shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-1">Promotional Member - NSU</h4>
                  <p className="text-sm text-blue-600 font-medium mb-2">First Quran Conference & Seerah Exhibition 2025</p>
                  <p className="text-gray-500 text-sm">Actively promoted the conference and exhibition at North South University, engaging with the student community.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
