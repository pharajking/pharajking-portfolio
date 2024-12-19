import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-primary dark:text-gray-100 mb-6">
            Hi, I'm <span className="text-accent dark:text-green-400">Pharaj Ally</span>
          </h1>
          <div className="text-xl md:text-2xl text-secondary dark:text-gray-300 mb-8">
            <TypeAnimation
              sequence={[
                'Full Stack Developer',
                2000,
                'UI/UX Enthusiast',
                2000,
                'Problem Solver',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
          <div className="flex justify-center gap-4 mb-6">
            <Link to="projects" smooth={true} duration={500}>
              <button className="btn bg-accent text-white hover:bg-accent-dark dark:bg-green-500 dark:hover:bg-green-600">
                View My Work
              </button>
            </Link>
            <Link to="contact" smooth={true} duration={500}>
              <button className="btn bg-gray-700 text-white hover:bg-gray-800 dark:bg-gray-600 dark:hover:bg-gray-700">
                Contact Me
              </button>
            </Link>
          </div>
          {/* Social Media Links */}
          <div className="flex justify-center gap-6 text-3xl text-gray-600 dark:text-gray-400">
            <a
              href="https://github.com/pharajking"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black dark:hover:text-white"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/pharaj-ally-b1b024209/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 dark:hover:text-blue-400"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/pktechsolutions/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 dark:hover:text-blue-300"
            >
              <FaTwitter />
            </a>
           
            <a
              href="https://www.instagram.com/pktechsolutions/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 dark:hover:text-pink-400"
            >
            <FaInstagram />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
