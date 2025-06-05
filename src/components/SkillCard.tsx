import React from 'react';
import { motion } from 'framer-motion';

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  skills: string[];
  index: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, skills, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1] 
      }}
      viewport={{ once: true, margin: "-100px" }}
      className="card hover:shadow-xl hover:shadow-secondary-900/10 hover:border-secondary-500/50 hover:-translate-y-1"
    >
      <div className="flex flex-col h-full">
        <div className="bg-gradient-to-r from-primary-500 to-secondary-500 w-12 h-12 rounded-lg flex items-center justify-center text-white mb-4">
          {icon}
        </div>
        
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {skills.map((skill, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-dark-700/80 text-gray-300 text-sm rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SkillCard;