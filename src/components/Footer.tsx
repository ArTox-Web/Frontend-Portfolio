import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-800 border-t border-slate-700">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center space-x-2 text-white mb-4 md:mb-0"
          >
            <span>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <Heart size={16} className="text-blue-400 fill-current" />
            </motion.div>
            <span>by Your Name</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex space-x-6 mb-4 md:mb-0"
          >
            <motion.a
              href="https://github.com/Artox-web"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="text-white hover:text-blue-400 transition-colors duration-300"
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.2, rotate: -5 }}
              className="text-white hover:text-blue-400 transition-colors duration-300"
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.2, rotate: 5 }}
             className="text-white hover:text-blue-400 transition-colors duration-300"
            >
              <Mail size={20} />
            </motion.a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-slate-300 text-sm"
          >
            © {currentYear} Portfolio. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;