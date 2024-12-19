import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title text-center text-primary dark:text-gray-100">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="aspect-square rounded-full overflow-hidden">
              <img
                src="/assets/images/profile.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                I'm a passionate developer with 2 years of experience in building web applications.
                I specialize in React.js, Node.js, and modern web technologies.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing my knowledge through blog posts.
              </p>
              <a 
                href="https://drive.google.com/file/d/1KuF2GOoqqpD6W6KGTG-A4NRXp8axkHUR/view" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn bg-accent text-white hover:bg-accent-dark dark:bg-green-500 dark:hover:bg-green-600"
              >
                Download Resume
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
