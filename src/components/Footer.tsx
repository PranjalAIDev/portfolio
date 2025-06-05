import React from 'react';
import { Github, Linkedin, Mail, Brain } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark-800 border-t border-dark-600 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="flex items-center">
              <Brain className="h-6 w-6 text-secondary-500 mr-2" />
              <span className="text-xl font-bold gradient-text">Pranjal Upadhyay</span>
            </a>
            <p className="text-gray-400 mt-2 text-sm max-w-md">
              AI/ML enthusiast passionate about creating innovative solutions through machine learning and artificial intelligence.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
            <div>
              <h3 className="text-white font-medium mb-2">Navigation</h3>
              <ul className="text-gray-400 space-y-2">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#skills" className="hover:text-white transition-colors">Skills</a></li>
                <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-medium mb-2">Connect</h3>
              <ul className="text-gray-400 space-y-2">
                <li>
                  <a 
                    href="https://github.com/PranjalAIDev" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors flex items-center"
                  >
                    <Github className="w-4 h-4 mr-2" /> GitHub
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.linkedin.com/in/pranjal-upadhyay-b26b30322/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors flex items-center"
                  >
                    <Linkedin className="w-4 h-4 mr-2" /> LinkedIn
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:pranjalupadhyay2911@gmail.com" 
                    className="hover:text-white transition-colors flex items-center"
                  >
                    <Mail className="w-4 h-4 mr-2" /> Email
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-dark-600 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Pranjal Upadhyay. All rights reserved.
          </p>
          
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a 
              href="https://github.com/PranjalAIDev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/pranjal-upadhyay-b26b30322/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:pranjalupadhyay2911@gmail.com" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;