import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Projects = () => {
  const projects = [
    {
      title: 'Ultimate Loan Manager',
      description:
        'Ultimate Loan Manager is an online loan management system that allows lending businesses to manage their borrowers, loans, repayments, and collections with ease while being affordable at the same time.',
      image: '/assets/images/LoanManager.png',
      technologies: ['Laravel', 'Livewire 2.0', 'MySQL'],
      githubLink: 'https://github.com/pharajking/Ultimate-Loan-Manager',
      liveLink: '',
    },
    {
      title: 'Live Streaming Application',
      description:
        'Live Streaming TV is a real-time broadcasting application for television content over the internet, allowing viewers to watch live shows, sports events, and news on various devices.',
      image: '/assets/images/livestreaming.png',
      technologies: ['PHP', 'Java', 'MySQL'],
      githubLink: 'https://github.com/pharajking/Live-Tv-Streaming-Web-Application-',
      liveLink: 'https://livestreamingapptz.000webhostapp.com/',
    },
    {
      title: 'POS System & Inventory',
      description:
        'POS System is an open-source Inventory Management with a POS System. Developed with Laravel 10, Bootstrap 4, and Livewire 2.0.',
      image: '/assets/images/pos.png',
      technologies: ['Laravel 10', 'Livewire 2.0', 'MySQL'],
      githubLink: '',
      liveLink: '',
    },
    // Add more projects here
  ];

  const handleLinkClick = (link, type) => {
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    } else {
      toast.error(
        type === 'github'
          ? 'Private Project - GitHub link not available.'
          : 'Not hosted - Live demo not available.',
        { position: 'top-center' }
      );
    }
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title text-center text-primary dark:text-gray-100">My Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <button
                      onClick={() => handleLinkClick(project.githubLink, 'github')}
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-accent"
                    >
                      <FaGithub /> Code
                    </button>
                    <button
                      onClick={() => handleLinkClick(project.liveLink, 'live')}
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-accent"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <ToastContainer 
          position="top-center" 
          autoClose={5000} 
          hideProgressBar={false} 
          newestOnTop={false} 
          closeOnClick 
          rtl={false} 
          pauseOnFocusLoss 
          draggable 
          pauseOnHover 
          theme="light" 
        />
      </div>
    </section>
  );
};

export default Projects;
