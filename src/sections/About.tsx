import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { Brain, Code, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="section">
      <AnimatedSection>
        <h2 className="section-title">About Me</h2>
      </AnimatedSection>
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        <div className="md:col-span-6">
          <AnimatedSection delay={0.2}>
            <p className="text-gray-300 mb-4">
              Hello! I'm Pranjal Upadhyay, an AI/ML enthusiast and Computer Science Engineering student specializing in Artificial Intelligence and Machine Learning. I'm passionate about developing intelligent solutions that can make a positive impact on the world.
            </p>
            
            <p className="text-gray-300 mb-4">
              My journey in the world of AI began during my undergraduate studies, where I developed a strong foundation in computer science fundamentals and specialized in machine learning algorithms, neural networks, and data science.
            </p>
            
            <p className="text-gray-300 mb-4">
              I'm constantly exploring new technologies and methodologies in the AI/ML space, from deep learning and computer vision to natural language processing and reinforcement learning.
            </p>
            
            <p className="text-gray-300">
              When I'm not coding or training models, you can find me reading research papers, participating in AI competitions, or collaborating on open-source projects.
            </p>
          </AnimatedSection>
        </div>
        
        <div className="md:col-span-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <AnimatedSection delay={0.3} className="card">
              <div className="bg-gradient-to-r from-primary-500 to-secondary-500 w-12 h-12 rounded-lg flex items-center justify-center text-white mb-4">
                <Brain className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">AI/ML Specialist</h3>
              <p className="text-gray-400">
                Focused on developing intelligent systems using machine learning, deep learning, and data science techniques.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.4} className="card">
              <div className="bg-gradient-to-r from-primary-500 to-secondary-500 w-12 h-12 rounded-lg flex items-center justify-center text-white mb-4">
                <Code className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Software Developer</h3>
              <p className="text-gray-400">
                Building robust applications with clean, efficient code and modern development practices.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.5} className="card sm:col-span-2">
              <div className="bg-gradient-to-r from-primary-500 to-secondary-500 w-12 h-12 rounded-lg flex items-center justify-center text-white mb-4">
                <Lightbulb className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Problem Solver</h3>
              <p className="text-gray-400">
                Passionate about solving complex problems through innovative approaches and creative thinking. Always seeking to understand the root cause and develop effective solutions.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;