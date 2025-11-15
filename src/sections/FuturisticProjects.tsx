import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FuturisticProjects: React.FC = () => {
  const projects = [
    {
      title: "MedBot - Patient Report Analyzer",
      description: "A specialized LLM model that can efficiently process and analyze PDF reports focused on a single disease type. Developed a comprehensive report analyzer capable of extracting relevant clinical information from both PDF documents and medical images.",
      technologies: ["TypeScript", "React", "LLM", "AI", "PDF Processing"],
      image: "https://images.pexels.com/photos/6476260/pexels-photo-6476260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      githubUrl: "https://github.com/PranjalAIDev/MedBot-Patient-Report-Analyzer.git",
      liveUrl: "#"
    },
    {
      title: "Finmate AI",
      description: "A responsive AI-powered sales dashboard for GroMo Partners to track calls, conversion rates, meetings, and customer engagement, improving real-time visibility and decision-making. Implemented smart suggestions to improve user engagement and boost conversions.",
      technologies: ["TypeScript", "React", "Vite", "Tailwind CSS", "AI"],
      image: "https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      githubUrl: "https://github.com/PranjalAIDev/finmateai.git",
      liveUrl: "#"
    },
    {
      title: "Aspect-Based Sentiment Analysis (ABSA)",
      description: "Developed a machine learning model to analyze sentiment on specific product aspects (e.g., design, usability). Built a Flask-based web application for collecting and visualizing customer feedback.",
      technologies: ["Python", "Flask", "Machine Learning", "NLP", "HTML"],
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      githubUrl: "https://github.com/PranjalAIDev/Flask-Sentiment-Analysis-ML.git",
      liveUrl: "#"
    },
    {
      title: "Layout Harmony Compass",
      description: "A collaborative project focused on creating harmonious web layouts with advanced design principles and responsive frameworks.",
      technologies: ["HTML", "CSS", "JavaScript", "UI/UX", "Responsive Design"],
      image: "https://images.pexels.com/photos/7367/startup-photos.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      githubUrl: "https://github.com/ShivangiInnovates/layout-harmony-compass.git",
      liveUrl: "#"
    }
  ];

  return (
    <section id="projects" className="relative min-h-screen py-20 bg-neutral-50 dark:bg-neutral-900">
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
              My Projects
            </span>
          </h2>
          <p className="text-neutral-700 dark:text-neutral-300 text-lg md:text-xl max-w-3xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills in AI, machine learning, and software development.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative bg-gradient-to-b from-black/10 to-white/10 dark:from-white/10 dark:to-black/10 p-px rounded-2xl backdrop-blur-lg overflow-hidden">
                <div className="relative bg-white/95 dark:bg-black/95 backdrop-blur-md rounded-2xl border border-black/10 dark:border-white/10 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3 tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-300 dark:border-neutral-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-3">
                      <Button
                        variant="ghost"
                        size="sm"
                        asChild
                        className="flex-1 rounded-xl backdrop-blur-md bg-white/80 hover:bg-white/100 dark:bg-black/80 dark:hover:bg-black/100 text-black dark:text-white border border-black/10 dark:border-white/10"
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                      
                      {project.liveUrl !== "#" && (
                        <Button
                          variant="ghost"
                          size="sm"
                          asChild
                          className="flex-1 rounded-xl backdrop-blur-md bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-100 text-white dark:text-black"
                        >
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="inline-block group relative bg-gradient-to-b from-black/10 to-white/10 dark:from-white/10 dark:to-black/10 p-px rounded-2xl backdrop-blur-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Button
              variant="ghost"
              asChild
              className="rounded-[1.15rem] px-8 py-6 text-base font-semibold backdrop-blur-md 
              bg-white/95 hover:bg-white/100 dark:bg-black/95 dark:hover:bg-black/100 
              text-black dark:text-white transition-all duration-300 
              group-hover:-translate-y-0.5 border border-black/10 dark:border-white/10
              hover:shadow-md dark:hover:shadow-neutral-800/50"
            >
              <a href="https://github.com/PranjalAIDev" target="_blank" rel="noopener noreferrer">
                <span className="opacity-90 group-hover:opacity-100 transition-opacity">
                  View More on GitHub
                </span>
                <span className="ml-3 opacity-70 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all duration-300">
                  →
                </span>
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FuturisticProjects;
