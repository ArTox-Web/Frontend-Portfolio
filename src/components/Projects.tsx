import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Zap } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Expense Tracker',
      description: 'A comprehensive expense tracking application with budget management, financial insights, and interactive charts for better money management.',
      image: 'https://images.pexels.com/photos/4386372/pexels-photo-4386372.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js', 'Local Storage'],
      liveUrl: 'https://tracker-expenses-kqyma6d1q-tarun-sharmas-projects-000facc5.vercel.app/',
      githubUrl: 'https://github.com/Artox-web',
      featured: true
    },
    {
      id: 2,
      title: 'Crypto Tracker',
      description: 'Real-time cryptocurrency tracking application with live market data, price alerts, and portfolio management features.',
      image: 'https://images.pexels.com/photos/8369648/pexels-photo-8369648.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'JavaScript', 'CSS3', 'CoinGecko API', 'Real-time Data'],
      liveUrl: 'http://tracker-crypto.vercel.app/',
      githubUrl: 'https://github.com/Artox-web',
      featured: true
    },
    {
      id: 3,
      title: 'Project Management',
      description: 'A full-featured project management tool with task tracking, team collaboration, progress monitoring, and deadline management.',
      image: 'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Socket.io'],
      liveUrl: 'https://project-mgmt-six.vercel.app/',
      githubUrl: 'https://github.com/Artox-web',
      featured: true
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Project Gallery</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mb-8"></div>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto">
            Explore my featured applications showcasing modern web development practices, 
            responsive design, and seamless user experiences.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl hover:border-slate-300 transition-all duration-500"
            >
              {/* Image Container with Overlay */}
              <div className="relative overflow-hidden h-48">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                {/* Featured Badge */}
                {project.featured && (
                  <motion.div
                    initial={{ scale: 0, rotate: -10 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1"
                  >
                    <Zap size={12} />
                    <span>Featured</span>
                  </motion.div>
                )}

                {/* Quick Action Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-black/50 flex items-center justify-center space-x-4 opacity-0 transition-opacity duration-300"
                >
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-blue-500 hover:bg-blue-600 rounded-full text-white transition-colors duration-300"
                    title="View Live Demo"
                  >
                    <ExternalLink size={20} />
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-slate-700 hover:bg-slate-600 rounded-full text-white transition-colors duration-300"
                    title="View Source Code"
                  >
                    <Github size={20} />
                  </motion.a>
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6">
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors duration-300"
                >
                  {project.title}
                </motion.h3>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="text-slate-600 mb-4 leading-relaxed text-sm"
                >
                  {project.description}
                </motion.p>

                {/* Technology Tags */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                  className="flex flex-wrap gap-2 mb-6"
                >
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: techIndex * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      className="px-2 py-1 bg-gradient-to-r from-blue-100 to-blue-50 border border-blue-200 rounded-md text-blue-700 text-xs font-medium hover:bg-blue-200 transition-all duration-300"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  className="flex space-x-3"
                >
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-gradient-to-r from-blue-800 to-blue-700 text-white px-4 py-2.5 rounded-lg font-semibold text-center hover:from-blue-900 hover:to-blue-800 transition-all duration-300 flex items-center justify-center space-x-2 text-sm"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </motion.a>
                  
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2.5 bg-slate-100 border border-slate-200 rounded-lg text-slate-700 hover:bg-slate-200 transition-all duration-300"
                    title="View Source"
                  >
                    <Github size={16} />
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Gallery Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center space-x-8 bg-white rounded-2xl px-8 py-4 border border-slate-200 shadow-lg">
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-800">3</div>
              <div className="text-slate-600 text-sm">Featured Projects</div>
            </div>
            <div className="w-px h-8 bg-slate-200"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-800">100%</div>
              <div className="text-slate-600 text-sm">Responsive Design</div>
            </div>
            <div className="w-px h-8 bg-slate-200"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-800">Live</div>
              <div className="text-slate-600 text-sm">Deployed Apps</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;