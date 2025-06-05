import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import SkillCard from '../components/SkillCard';
import { 
  Brain, Database, Code, BarChart, 
  LineChart, Layers, Server, Globe 
} from 'lucide-react';

const Skills: React.FC = () => {
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
    <section id="skills" className="section">
      <AnimatedSection>
        <h2 className="section-title">My Skills</h2>
      </AnimatedSection>
      
      <AnimatedSection delay={0.1}>
        <p className="text-gray-300 max-w-3xl mb-10">
          With a strong foundation in AI/ML technologies and software development, I bring a diverse set of skills to solve complex problems. Here's an overview of my technical expertise:
        </p>
      </AnimatedSection>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((category, index) => (
          <SkillCard 
            key={index}
            icon={category.icon}
            title={category.title}
            skills={category.skills}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;