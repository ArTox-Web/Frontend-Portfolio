import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Zap, Heart, User, GraduationCap, Briefcase, Award, MapPin } from 'lucide-react';

const About = () => {
  const skills = [
    { icon: Code, title: 'Full-Stack Development', description: 'React, Node.js, AI Tools, and modern web technologies' },
    { icon: Palette, title: 'UI/UX Design', description: 'Creating beautiful and intuitive user interfaces' },
    { icon: Zap, title: 'Performance Optimization', description: 'Building scalable and efficient applications' },
    { icon: Heart, title: 'Team Leadership', description: 'Leading cross-functional teams and mentoring developers' }
  ];

  const experiences = [
    {
      title: 'Lead Developer',
      company: 'Merkur Gaming',
      period: '2022 - 2023',
      description: 'Leading technical teams and driving innovation in game development projects'
    },
    {
      title: 'Senior Developer',
      company: 'Xebia Solutions Architects',
      period: '2021 - 2022',
      description: 'Leading Full-stack development tesms with focus on React and Node.js applications'
    },
     {
      title: 'Frontend Developer',
      company: 'Wipro Ltd',
      period: '2019 - 2021',
      description: 'Frontend development with focus on React and Node.js applications'
    },
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

        <div className="grid lg:grid-cols-2 gap-12 items-start">
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
                <h3 className="text-2xl font-bold text-slate-800">Tarun Sharma</h3>
              </div>
              
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                  className="p-4 bg-blue-50 border border-blue-200 rounded-lg"
                >
                  <div className="flex items-center mb-3">
                    <Briefcase size={20} className="text-blue-600 mr-2" />
                    <h4 className="text-blue-700 font-semibold">Professional Experience</h4>
                  </div>
                  <div className="space-y-3">
                    {experiences.map((exp, index) => (
                      <div key={index} className="border-l-2 border-blue-200 pl-4">
                        <h5 className="font-semibold text-slate-700">{exp.title}</h5>
                        <p className="text-sm text-blue-600">{exp.company} • {exp.period}</p>
                        <p className="text-sm text-slate-600 mt-1">{exp.description}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                  className="p-4 bg-green-50 border border-green-200 rounded-lg"
                >
                  <div className="flex items-center mb-3">
                    <Award size={20} className="text-green-600 mr-2" />
                    <h4 className="text-green-700 font-semibold">Key Achievements</h4>
                  </div>
                  <ul className="text-sm text-slate-600 space-y-2">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Led cross-functional teams in delivering complex web applications
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Expertise in React, Node.js, AI Tools, and modern development practices
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Strong background in technical management and team leadership
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                  className="p-4 bg-purple-50 border border-purple-200 rounded-lg"
                >
                  <div className="flex items-center mb-3">
                    <MapPin size={20} className="text-purple-600 mr-2" />
                    <h4 className="text-purple-700 font-semibold">Contact Information</h4>
                  </div>
                  <div className="text-sm text-slate-600 space-y-1">
                    <p>📧 tarun.sharma1603@gmail.com</p>
                    <p>📱 +91-9008237936</p>
                  </div>
                </motion.div>

                <div className="pt-4 border-t border-slate-200">
                  <p className="text-slate-600 leading-relaxed">
                    I'm a passionate Engineer with extensive experience in full-stack development, 
                    specializing in React, Node.js, Express.js and AI tools. I love leading teams, mentoring developers, 
                    and building scalable applications that solve real-world problems.
                  </p>
                  <p className="text-slate-600 mt-4 leading-relaxed">
                    With a strong background in both technical development and team management, I bring 
                    a unique perspective to every project, ensuring both technical excellence and 
                    successful team collaboration.
                  </p>
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

        {/* Technical Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-slate-800 text-center mb-8">Technical Expertise</h3>
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-semibold text-slate-700 mb-4">Frontend</h4>
                <div className="flex flex-wrap gap-2">
                  {['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-slate-700 mb-4">Backend</h4>
                <div className="flex flex-wrap gap-2">
                  {['Node.js', 'Python', 'Express', 'REST APIs', 'Database Design'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-slate-700 mb-4">Management</h4>
                <div className="flex flex-wrap gap-2">
                  {['Team Leadership', 'Project Management', 'Agile', 'Mentoring', 'Technical Strategy'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;