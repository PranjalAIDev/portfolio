import React, { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { Send, Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState<{
    success?: boolean;
    message?: string;
  }>({});
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Normally, you would send this data to your backend or a form service
    // For now, let's simulate a successful submission
    setTimeout(() => {
      setFormStatus({
        success: true,
        message: "Your message has been sent successfully! I'll get back to you soon."
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      // Reset the form status after 5 seconds
      setTimeout(() => {
        setFormStatus({});
      }, 5000);
    }, 1000);
  };
  
  return (
    <section id="contact" className="section">
      <AnimatedSection>
        <h2 className="section-title">Get In Touch</h2>
      </AnimatedSection>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <AnimatedSection delay={0.1}>
            <p className="text-gray-300 mb-8">
              I'm always open to discussing new projects, opportunities, or partnerships. Whether you have a question or just want to say hi, feel free to reach out to me using the contact form or through my social media profiles.
            </p>
          </AnimatedSection>
          
          <div className="space-y-6">
            <AnimatedSection delay={0.2} className="flex items-start">
              <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-3 rounded-lg mr-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-medium mb-1">Email</h3>
                <a 
                  href="mailto:pranjalupadhyay2911@gmail.com" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  pranjalupadhyay2911@gmail.com
                </a>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3} className="flex items-start">
              <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-3 rounded-lg mr-4">
                <Linkedin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-medium mb-1">LinkedIn</h3>
                <a 
                  href="https://www.linkedin.com/in/pranjal-upadhyay-b26b30322/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.4} className="flex items-start">
              <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-3 rounded-lg mr-4">
                <Github className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-medium mb-1">GitHub</h3>
                <a 
                  href="https://github.com/PranjalAIDev" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  View my projects
                </a>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.5} className="flex items-start">
              <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-3 rounded-lg mr-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-medium mb-1">Location</h3>
                <p className="text-gray-300">
                  India
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
        
        <AnimatedSection delay={0.3}>
          <form onSubmit={handleSubmit} className="card">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="name" className="block text-gray-400 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="input"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="input"
                  placeholder="Your email"
                />
              </div>
            </div>
            
            <div className="mb-4">
              <label htmlFor="subject" className="block text-gray-400 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="input"
                placeholder="Subject"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-400 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
                className="input resize-none"
                placeholder="Your message"
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="btn btn-primary w-full flex items-center justify-center"
            >
              <Send className="w-4 h-4 mr-2" /> Send Message
            </button>
            
            {formStatus.message && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`mt-4 p-3 rounded-lg ${
                  formStatus.success 
                    ? 'bg-green-500/20 text-green-400' 
                    : 'bg-red-500/20 text-red-400'
                }`}
              >
                {formStatus.message}
              </motion.div>
            )}
          </form>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Contact;