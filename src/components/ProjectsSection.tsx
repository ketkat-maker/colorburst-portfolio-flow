
import { ExternalLink, Github, Database, Globe, Brain, List } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: 'Simple Clinic System',
      description: 'A comprehensive clinic management system with patient appointment scheduling using queue data structure. Implemented with C++ and OOP principles for efficient healthcare workflow management.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop',
      tags: ['C++', 'Data Structures', 'OOP', 'Queue Management'],
      liveUrl: '#',
      githubUrl: '#',
      gradient: 'from-neon-cyan to-electric',
      icon: Database
    },
    {
      id: 2,
      title: 'Personal Portfolio Website',
      description: 'Designed and built a responsive personal website to showcase projects and skills. Created a clean, modern layout with mobile-friendly browsing experience using HTML, CSS, and JavaScript.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
      tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      liveUrl: '#',
      githubUrl: '#',
      gradient: 'from-neon-pink to-neon-purple',
      icon: Globe
    },
    {
      id: 3,
      title: 'CRUD School Management System',
      description: 'Developed a backend system for managing students, teachers, and subjects with full CRUD operations. Created RESTful APIs and integrated SQL Server database for comprehensive school administration.',
      image: 'https://images.unsplash.com/photo-1580894908361-967195033215?w=600&h=400&fit=crop',
      tags: ['Spring Boot', 'SQL Server', 'RESTful APIs', 'CRUD Operations'],
      liveUrl: '#',
      githubUrl: '#',
      gradient: 'from-electric to-neon-cyan',
      icon: Database
    },
    {
      id: 4,
      title: 'College Store Website',
      description: 'Built a static front-end e-commerce website for a mock university store using HTML, CSS, and JavaScript. Added JavaScript functionality for product filtering and cart simulation.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      tags: ['HTML', 'CSS', 'JavaScript', 'E-commerce'],
      liveUrl: '#',
      githubUrl: '#',
      gradient: 'from-neon-purple to-neon-pink',
      icon: Globe
    },
    {
      id: 5,
      title: 'To-Do List System',
      description: 'Developed a task management system allowing users to add, view, update, and delete tasks. Built RESTful APIs using Spring Boot for backend logic and implemented PostgreSQL for database management.',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop',
      tags: ['Spring Boot', 'JPA', 'PostgreSQL', 'Docker'],
      liveUrl: '#',
      githubUrl: '#',
      gradient: 'from-neon-cyan to-neon-purple',
      icon: List
    },
    {
      id: 6,
      title: 'Task Management System',
      description: 'Developed a full-featured task management system allowing users to add, view, update, and delete tasks with priority levels. Utilized Spring Data JPA for efficient database management and containerized using Docker.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      tags: ['Spring Boot', 'JPA', 'PostgreSQL', 'Docker', 'REST APIs'],
      liveUrl: '#',
      githubUrl: '#',
      gradient: 'from-neon-pink to-electric',
      icon: Brain
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="bg-gradient-to-r from-neon-cyan to-neon-pink bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Here's a showcase of my development journey, featuring projects that demonstrate my skills in 
            Java development, web technologies, and system architecture.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className="group bg-slate-800/50 backdrop-blur-lg border-white/10 overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-300`} />
                <div className="absolute top-4 left-4">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${project.gradient}`}>
                    <project.icon className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="sm" variant="secondary" className="bg-black/50 hover:bg-black/70">
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-neon-cyan transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-2 py-1 bg-slate-700/50 text-xs rounded-full text-neon-cyan border border-neon-cyan/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <Button size="sm" className={`bg-gradient-to-r ${project.gradient} hover:opacity-80 transition-opacity flex-1`}>
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </Button>
                  <Button size="sm" variant="outline" className="border-white/20 hover:bg-white/10">
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
