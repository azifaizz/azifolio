import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import brainTumor from '../src/images/braintumor.jpeg'
import securefile from '../src/images/securefile.jpeg'
import evbattery from '../src/images/evbattery.jpg'

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Brain tumor cancer prediction using machine learning',
      description: 'This project uses machine learning to detect brain tumors from MRI scans.It classifies tumor types accurately, aiding doctors in early diagnosis.The system improves detection speed and reduces manual analysis errors.',
      image: '../src/images/braintumor.jpeg',
      github: 'https://github.com/azifaizz/CNN-Based-Brain-Tumor-Cancer-Prediction-Using-Machine-Learning.git',
      tags: ['JupyterNotebook', 'Python', 'image recognition'],
    },
    {
      id: 2,
      title: 'SecureFileX:A Comprehensive file security Application',
      description: 'SecureFileX is a file security application that lets users encrypt and decrypt files effortlessly. It keeps sensitive data protected from unauthorized access. Designed for simplicity, it safeguards your files with strong encryption.',
      image: '../src/images/securefile.jpeg',
      github: 'https://github.com',
      tags: ['HTML', 'CSS', 'Python','Flask Framework'],
    },
    {
      id: 3,
      title: 'Remaining Useful Life prediction for batteries of Electric Vehicle',
      description: 'A comprehensive machine learning framework using advanced feature engineering, PCA, and ensemble/deep learning models to accurately predict the Remaining Useful Life (RUL) of Electric Vehicle (EV) batteries, highlighting LightGBMs superior performance.',
      image: '../src/images/evbattery.jpg',
      github: 'https://github.com',
      tags: ['Jupyter Notebook', 'Python', 'Machine Learning'],
    },
  ];

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="min-h-screen py-20 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          Featured <span className="gradient-text">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`scroll-reveal ${isVisible ? 'revealed' : ''} glass-card rounded-2xl overflow-hidden hover:glow-primary transition-all duration-300 hover:scale-105`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 text-justify">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="glass-card px-3 py-1 text-xs rounded-full text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    onClick={() => navigate(`/project/${project.id}`)}
                    className="flex-1 bg-gradient-primary hover:glow-primary"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    View Details
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => window.open(project.github, '_blank')}
                    className="glass-card border-primary/30 hover:glow-primary"
                  >
                    <Github size={16} />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
