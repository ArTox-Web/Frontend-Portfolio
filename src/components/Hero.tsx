import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown, Code2 } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -150, 0],
            y: [0, 100, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full px-6 py-3 mb-8 shadow-lg"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Code2 size={20} className="text-blue-600" />
            </motion.div>
            <span className="text-slate-700 font-medium">Frontend Developer</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-slate-800 mb-6"
          >
            Building Digital
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 bg-clip-text text-transparent">
              Experiences
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed max-w-3xl mx-auto"
          >
            Passionate about crafting beautiful, responsive web applications with modern technologies. 
            Specializing in React, TypeScript, and creating seamless user experiences.
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex justify-center space-x-6 mb-12"
          >
            <motion.a
              href="https://github.com/Artox-web"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="group p-4 bg-white/80 backdrop-blur-sm rounded-full border border-slate-200 text-slate-700 hover:bg-white hover:shadow-lg transition-all duration-300"
            >
              <Github size={24} className="group-hover:text-blue-600 transition-colors duration-300" />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              className="group p-4 bg-white/80 backdrop-blur-sm rounded-full border border-slate-200 text-slate-700 hover:bg-white hover:shadow-lg transition-all duration-300"
            >
              <Linkedin size={24} className="group-hover:text-blue-600 transition-colors duration-300" />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="group p-4 bg-white/80 backdrop-blur-sm rounded-full border border-slate-200 text-slate-700 hover:bg-white hover:shadow-lg transition-all duration-300"
            >
              <Mail size={24} className="group-hover:text-blue-600 transition-colors duration-300" />
            </motion.a>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-800 to-blue-700 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-900 hover:to-blue-800 transition-all duration-300 inline-flex items-center justify-center space-x-2 shadow-lg"
            >
              <span>View My Work</span>
              <ArrowDown size={20} />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/80 backdrop-blur-sm border border-slate-200 text-slate-700 px-8 py-4 rounded-full font-semibold hover:bg-white hover:shadow-lg transition-all duration-300"
            >
              Get In Touch
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.a
            href="#about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="inline-flex flex-col items-center space-y-2 text-slate-600 hover:text-amber-600 transition-colors duration-300"
            className="inline-flex flex-col items-center space-y-2 text-slate-600 hover:text-blue-600 transition-colors duration-300"
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <ArrowDown size={20} />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;