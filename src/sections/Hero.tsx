import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-gradient-to-b from-dark-800/30 to-dark-800/20 z-0"
      />
      
      <div className="section w-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="md:col-span-7 order-2 md:order-1"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <h2 className="text-lg md:text-xl text-secondary-400 font-medium mb-2">
                  Welcome to my portfolio
                </h2>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.1 }}
                  >
                    Hi, I'm{" "}
                  </motion.span>
                  <TypeAnimation
                    sequence={[
                      'AI/ML Enthusiast',
                      2000,
                      'Machine Learning Engineer',
                      2000
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    className="gradient-text"
                  />
                </h1>
              </motion.div>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.3 }}
                className="text-gray-300 text-lg md:text-xl max-w-xl"
              >
                Passionate about transforming data into intelligent solutions. Building innovative AI applications to solve real-world problems.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.5 }}
                className="flex space-x-4"
              >
                <motion.a 
                  href="#projects" 
                  className="btn btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View My Work
                </motion.a>
                <motion.a 
                  href="#contact" 
                  className="btn btn-outline"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Me
                </motion.a>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.7 }}
                className="flex space-x-4 pt-2"
              >
                <motion.a 
                  href="https://github.com/PranjalAIDev" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white transition-colors"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                  aria-label="GitHub"
                >
                  <Github className="w-6 h-6" />
                </motion.a>
                <motion.a 
                  href="https://www.linkedin.com/in/pranjal-upadhyay-b26b30322/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white transition-colors"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </motion.a>
                <motion.a 
                  href="mailto:pranjalupadhyay2911@gmail.com" 
                  className="text-gray-400 hover:text-white transition-colors"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                  aria-label="Email"
                >
                  <Mail className="w-6 h-6" />
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="md:col-span-5 order-1 md:order-2 flex justify-center md:justify-end"
          >
            <div className="relative">
              <motion.div 
                className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-secondary-500/30 shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img 
                  src="/Profile pic.JPG" 
                  alt="Pranjal Upadhyay" 
                  className="w-full h-full object-cover object-center scale-125"
                  initial={{ scale: 1.3 }}
                  animate={{ scale: 1.25 }}
                  transition={{ duration: 0.8 }}
                />
              </motion.div>
              <motion.div 
                className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 opacity-50 blur-xl"
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.5, 0.7, 0.5] 
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.5, 
          delay: 2,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.5
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.a 
          href="#about" 
          className="text-gray-400 hover:text-white transition-colors"
          whileHover={{ scale: 1.2 }}
        >
          <ChevronDown className="w-8 h-8" />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;