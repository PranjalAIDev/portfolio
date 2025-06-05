import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import ProjectCard from '../components/ProjectCard';

const Projects: React.FC = () => {
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