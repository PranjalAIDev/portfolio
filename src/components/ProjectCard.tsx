import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  image,
  githubUrl,
  liveUrl,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.2,
        ease: [0.22, 1, 0.36, 1]
      }}
      viewport={{ once: true, margin: "-100px" }}
      className="card group hover:shadow-xl hover:shadow-secondary-900/10 hover:border-secondary-500/50 hover:-translate-y-1"
    >
      <div className="relative overflow-hidden rounded-lg mb-4 aspect-video">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-800/90 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
      </div>
      
      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-secondary-400 transition-colors duration-300">{title}</h3>
      
      <p className="text-gray-300 mb-4 line-clamp-3">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, i) => (
          <span 
            key={i} 
            className="px-3 py-1 bg-dark-700/80 text-gray-300 text-xs rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
      
      <div className="flex space-x-3 mt-auto">
        {githubUrl && (
          <a 
            href={githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center text-gray-300 hover:text-white transition-colors duration-300"
          >
            <Github className="w-4 h-4 mr-1" /> Code
          </a>
        )}
        
        {liveUrl && (
          <a 
            href={liveUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center text-secondary-400 hover:text-secondary-300 transition-colors duration-300"
          >
            <ExternalLink className="w-4 h-4 mr-1" /> Live Demo
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;