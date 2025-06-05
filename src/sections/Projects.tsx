import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import ProjectCard from '../components/ProjectCard';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "AI Image Recognition System",
      description: "A deep learning-based image recognition system that can identify and classify objects in images with high accuracy using convolutional neural networks.",
      technologies: ["PyTorch", "CNN", "Computer Vision", "Python"],
      image: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      githubUrl: "https://github.com/PranjalAIDev",
      liveUrl: "#"
    },
    {
      title: "Natural Language Processing Chatbot",
      description: "An intelligent chatbot powered by NLP algorithms that can understand and respond to user queries in natural language, providing personalized assistance.",
      technologies: ["NLP", "BERT", "TensorFlow", "Flask"],
      image: "https://images.pexels.com/photos/7367/startup-photos.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      githubUrl: "https://github.com/PranjalAIDev",
      liveUrl: "#"
    },
    {
      title: "Predictive Analytics Dashboard",
      description: "A comprehensive dashboard for visualizing and analyzing data with predictive analytics capabilities, helping businesses make data-driven decisions.",
      technologies: ["Python", "React", "D3.js", "Scikit-Learn"],
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      githubUrl: "https://github.com/PranjalAIDev",
      liveUrl: "#"
    },
    {
      title: "Reinforcement Learning Game AI",
      description: "An AI agent trained using reinforcement learning to play and master complex games, demonstrating adaptive learning and strategic decision-making.",
      technologies: ["RL", "PyTorch", "OpenAI Gym", "Python"],
      image: "https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      githubUrl: "https://github.com/PranjalAIDev",
      liveUrl: "#"
    },
    {
      title: "Sentiment Analysis Tool",
      description: "A tool that analyzes the sentiment of text data from various sources, helping businesses understand customer feedback and social media sentiment.",
      technologies: ["NLP", "NLTK", "Python", "Flask"],
      image: "https://images.pexels.com/photos/6476260/pexels-photo-6476260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      githubUrl: "https://github.com/PranjalAIDev",
      liveUrl: "#"
    },
    {
      title: "Time Series Forecasting Application",
      description: "An application that uses advanced time series analysis to forecast future trends and patterns in data, useful for financial predictions and resource planning.",
      technologies: ["LSTM", "Prophet", "TensorFlow", "React"],
      image: "https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      githubUrl: "https://github.com/PranjalAIDev",
      liveUrl: "#"
    }
  ];

  return (
    <section id="projects" className="section">
      <AnimatedSection>
        <h2 className="section-title">My Projects</h2>
      </AnimatedSection>
      
      <AnimatedSection delay={0.1}>
        <p className="text-gray-300 max-w-3xl mb-10">
          Here are some of the projects I've worked on, showcasing my skills in AI, machine learning, and software development. Each project demonstrates my ability to solve complex problems and create innovative solutions.
        </p>
      </AnimatedSection>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            image={project.image}
            githubUrl={project.githubUrl}
            liveUrl={project.liveUrl}
            index={index}
          />
        ))}
      </div>
      
      <AnimatedSection delay={0.3} className="mt-10 text-center">
        <a 
          href="https://github.com/PranjalAIDev" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn btn-outline"
        >
          View More Projects on GitHub
        </a>
      </AnimatedSection>
    </section>
  );
};

export default Projects;