import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Zap, Heart, User, GraduationCap, Briefcase } from 'lucide-react';

const About = () => {
  const skills = [
    { icon: Code, title: 'Clean Code', description: 'Writing maintainable and scalable code' },
    { icon: Palette, title: 'UI/UX Design', description: 'Creating beautiful and intuitive interfaces' },
    { icon: Zap, title: 'Performance', description: 'Optimizing applications for speed and efficiency' },
    { icon: Heart, title: 'Passion', description: 'Loving what I do and continuously learning' }
  ];

  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mr-4">
                  <User size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">My Professional Journey</h3>
              </div>
              
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                  className="p-4 bg-blue-50 border border-blue-200 rounded-lg"
                >
                  <div className="flex items-center mb-2">
                    <GraduationCap size={20} className="text-blue-600 mr-2" />
                    <h4 className="text-blue-700 font-semibold">Education Needed</h4>
                  </div>
                  <p className="text-slate-600 text-sm">
                    Please share your educational background, degrees, certifications, and relevant coursework to personalize this section.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                  className="p-4 bg-blue-50 border border-blue-200 rounded-lg"
                >
                  <div className="flex items-center mb-2">
                    <Briefcase size={20} className="text-blue-600 mr-2" />
                    <h4 className="text-blue-700 font-semibold">Experience Needed</h4>
                  </div>
                  <p className="text-slate-600 text-sm">
                    Please provide your work experience, previous roles, companies, and key achievements to complete your professional story.
                  </p>
                </motion.div>

                <div className="pt-4 border-t border-white/10">
                  <p className="text-slate-600 leading-relaxed">
                    I'm a passionate frontend developer specializing in React, TypeScript, and modern web technologies. 
                    I love creating intuitive user experiences and building scalable applications.
                  </p>
                  <p className="text-slate-600 mt-4 leading-relaxed">
                    <strong className="text-slate-700">📧 Please share your CV details so I can personalize this section with:</strong>
                  </p>
                  <ul className="text-slate-500 mt-2 ml-4 space-y-1 text-sm">
                    <li>• Your educational background</li>
                    <li>• Professional experience and roles</li>
                    <li>• Key achievements and projects</li>
                    <li>• Technical skills and certifications</li>
                    <li>• Personal interests and career goals</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-xl p-6 border border-slate-200 text-center hover:shadow-lg transition-all duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="inline-block p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg mb-4"
                >
                  <skill.icon size={24} className="text-white" />
                </motion.div>
                <h4 className="text-slate-800 font-semibold mb-2">{skill.title}</h4>
                <p className="text-slate-600 text-sm">{skill.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;