import React from 'react';
import { Github, Linkedin, Mail, Brain } from 'lucide-react';
import { motion } from 'framer-motion';

const FuturisticFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white dark:bg-neutral-950 border-t border-black/10 dark:border-white/10 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6 md:mb-0"
          >
            <a href="#home" className="flex items-center mb-3">
              <Brain className="h-6 w-6 text-neutral-700 dark:text-neutral-300 mr-2" />
              <span className="text-xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 to-neutral-700/80 dark:from-white dark:to-white/80">
                Pranjal Upadhyay
              </span>
            </a>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm max-w-md">
              AI/ML enthusiast passionate about creating innovative solutions through machine learning and artificial intelligence.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-neutral-900 dark:text-white font-semibold mb-3 text-sm">Navigation</h3>
              <ul className="text-neutral-600 dark:text-neutral-400 space-y-2 text-sm">
                <li><a href="#home" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-neutral-900 dark:hover:text-white transition-colors">About</a></li>
                <li><a href="#skills" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Skills</a></li>
                <li><a href="#projects" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Projects</a></li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-neutral-900 dark:text-white font-semibold mb-3 text-sm">Connect</h3>
              <ul className="text-neutral-600 dark:text-neutral-400 space-y-2 text-sm">
                <li>
                  <a 
                    href="https://github.com/PranjalAIDev" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-neutral-900 dark:hover:text-white transition-colors flex items-center"
                  >
                    <Github className="w-4 h-4 mr-2" /> GitHub
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.linkedin.com/in/pranjal-upadhyay-b26b30322/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-neutral-900 dark:hover:text-white transition-colors flex items-center"
                  >
                    <Linkedin className="w-4 h-4 mr-2" /> LinkedIn
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:pranjalupadhyay2911@gmail.com" 
                    className="hover:text-neutral-900 dark:hover:text-white transition-colors flex items-center"
                  >
                    <Mail className="w-4 h-4 mr-2" /> Email
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="border-t border-black/10 dark:border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-neutral-600 dark:text-neutral-400 text-sm">
            © {currentYear} Pranjal Upadhyay. All rights reserved.
          </p>
          
          <div className="flex space-x-4 mt-4 md:mt-0">
            <motion.a 
              href="https://github.com/PranjalAIDev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.3 }}
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/pranjal-upadhyay-b26b30322/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.3 }}
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
            <motion.a 
              href="mailto:pranjalupadhyay2911@gmail.com" 
              className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.3 }}
            >
              <Mail className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default FuturisticFooter;
