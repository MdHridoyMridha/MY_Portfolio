import { motion } from 'motion/react';
import { SOCIAL_LINKS } from '../constants';

export default function Footer() {
  return (
    <footer className="py-12 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <a href="#" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Hridoy.
            </a>
            <p className="text-gray-400 text-sm mt-2">© 2026 MD. Hridoy Mridha. All rights reserved.</p>
          </div>

          <div className="flex items-center gap-6">
            {SOCIAL_LINKS.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                whileHover={{ y: -5 }}
                className={`text-gray-400 transition-colors ${link.color}`}
              >
                <link.icon size={24} />
              </motion.a>
            ))}
          </div>

          <div className="text-sm text-gray-400">
            Designed with ❤️ in Bangladesh
          </div>
        </div>
      </div>
    </footer>
  );
}
