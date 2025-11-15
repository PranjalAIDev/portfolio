import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code, Lightbulb } from 'lucide-react';

const FuturisticAbout: React.FC = () => {
  return (
    <section id="about" className="relative min-h-screen py-20 bg-white dark:bg-neutral-950">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tighter">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 to-neutral-700/80 dark:from-white dark:to-white/80">
              About Me
            </span>
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <p className="text-neutral-700 dark:text-neutral-300 text-lg leading-relaxed">
                Hello! I'm <span className="font-semibold text-neutral-900 dark:text-white">Pranjal Upadhyay</span>, an AI/ML enthusiast and Computer Science Engineering student specializing in Artificial Intelligence and Machine Learning. I'm passionate about developing intelligent solutions that can make a positive impact on the world.
              </p>
              
              <p className="text-neutral-700 dark:text-neutral-300 text-lg leading-relaxed">
                My journey in the world of AI began during my undergraduate studies, where I developed a strong foundation in computer science fundamentals and specialized in machine learning algorithms, neural networks, and data science.
              </p>
              
              <p className="text-neutral-700 dark:text-neutral-300 text-lg leading-relaxed">
                I'm constantly exploring new technologies and methodologies in the AI/ML space, from deep learning and computer vision to natural language processing and reinforcement learning.
              </p>
              
              <p className="text-neutral-700 dark:text-neutral-300 text-lg leading-relaxed">
                When I'm not coding or training models, you can find me reading research papers, participating in AI competitions, or collaborating on open-source projects.
              </p>
            </motion.div>
          </div>
          
          <div className="md:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="group relative"
              >
                <div className="relative bg-gradient-to-b from-black/5 to-white/5 dark:from-white/5 dark:to-black/5 p-px rounded-2xl backdrop-blur-lg overflow-hidden">
                  <div className="relative bg-white/90 dark:bg-black/90 backdrop-blur-md p-6 rounded-2xl border border-black/10 dark:border-white/10 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <div className="bg-gradient-to-r from-neutral-800 to-neutral-600 dark:from-neutral-200 dark:to-neutral-400 w-14 h-14 rounded-xl flex items-center justify-center text-white dark:text-black mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Brain className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2 tracking-tight">
                      AI/ML Specialist
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                      Focused on developing intelligent systems using machine learning, deep learning, and data science techniques.
                    </p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="group relative"
              >
                <div className="relative bg-gradient-to-b from-black/5 to-white/5 dark:from-white/5 dark:to-black/5 p-px rounded-2xl backdrop-blur-lg overflow-hidden">
                  <div className="relative bg-white/90 dark:bg-black/90 backdrop-blur-md p-6 rounded-2xl border border-black/10 dark:border-white/10 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <div className="bg-gradient-to-r from-neutral-800 to-neutral-600 dark:from-neutral-200 dark:to-neutral-400 w-14 h-14 rounded-xl flex items-center justify-center text-white dark:text-black mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Code className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2 tracking-tight">
                      Software Developer
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                      Building robust applications with clean, efficient code and modern development practices.
                    </p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="group relative sm:col-span-2"
              >
                <div className="relative bg-gradient-to-b from-black/5 to-white/5 dark:from-white/5 dark:to-black/5 p-px rounded-2xl backdrop-blur-lg overflow-hidden">
                  <div className="relative bg-white/90 dark:bg-black/90 backdrop-blur-md p-6 rounded-2xl border border-black/10 dark:border-white/10 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <div className="bg-gradient-to-r from-neutral-800 to-neutral-600 dark:from-neutral-200 dark:to-neutral-400 w-14 h-14 rounded-xl flex items-center justify-center text-white dark:text-black mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Lightbulb className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2 tracking-tight">
                      Problem Solver
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                      Passionate about solving complex problems through innovative approaches and creative thinking. Always seeking to understand the root cause and develop effective solutions.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FuturisticAbout;
