import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, Database, Code, BarChart, 
  LineChart, Layers, Server, Globe 
} from 'lucide-react';

const FuturisticSkills: React.FC = () => {
  const skillCategories = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Machine Learning",
      skills: ["TensorFlow", "PyTorch", "Scikit-Learn", "Neural Networks", "Deep Learning"]
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data Science",
      skills: ["Pandas", "NumPy", "SQL", "Data Visualization", "Statistical Analysis"]
    },
    {
      icon: <LineChart className="w-6 h-6" />,
      title: "AI Applications",
      skills: ["Computer Vision", "NLP", "Reinforcement Learning", "Time Series Analysis"]
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Programming",
      skills: ["Python", "JavaScript", "C++", "R", "Julia"]
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: "Visualization",
      skills: ["Matplotlib", "Seaborn", "Plotly", "Tableau", "PowerBI"]
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Development",
      skills: ["Git", "Docker", "CI/CD", "Cloud Computing", "RESTful APIs"]
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Big Data",
      skills: ["Hadoop", "Spark", "Kafka", "ETL Pipelines", "Data Engineering"]
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Web & Mobile",
      skills: ["React", "Node.js", "Flask", "TensorFlow.js", "Flutter"]
    }
  ];

  return (
    <section id="skills" className="relative min-h-screen py-20 bg-white dark:bg-neutral-950">
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
              My Skills
            </span>
          </h2>
          <p className="text-neutral-700 dark:text-neutral-300 text-lg md:text-xl max-w-3xl mx-auto">
            With a strong foundation in AI/ML technologies and software development, I bring a diverse set of skills to solve complex problems.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative bg-gradient-to-b from-black/5 to-white/5 dark:from-white/5 dark:to-black/5 p-px rounded-2xl backdrop-blur-lg overflow-hidden">
                <div className="relative bg-white/90 dark:bg-black/90 backdrop-blur-md p-6 rounded-2xl border border-black/10 dark:border-white/10 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="bg-gradient-to-r from-neutral-800 to-neutral-600 dark:from-neutral-200 dark:to-neutral-400 w-12 h-12 rounded-xl flex items-center justify-center text-white dark:text-black mb-4 group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-4 tracking-tight">
                    {category.title}
                  </h3>
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 + skillIndex * 0.05 }}
                        className="text-neutral-600 dark:text-neutral-400 text-sm flex items-center"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 dark:bg-neutral-600 mr-2"></span>
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FuturisticSkills;
