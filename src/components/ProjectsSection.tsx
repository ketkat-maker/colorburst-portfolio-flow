
import { ExternalLink, Github, Eye } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce solution with real-time inventory, payment processing, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#',
      gradient: 'from-neon-cyan to-electric'
    },
    {
      id: 2,
      title: 'Creative Agency Website',
      description: 'An award-winning agency website featuring immersive animations and 3D elements.',
      image: 'https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=600&h=400&fit=crop',
      tags: ['Next.js', 'Three.js', 'GSAP', 'Tailwind'],
      liveUrl: '#',
      githubUrl: '#',
      gradient: 'from-neon-pink to-neon-purple'
    },
    {
      id: 3,
      title: 'Data Visualization Dashboard',
      description: 'Interactive dashboard for complex data analysis with real-time updates and custom charts.',
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=600&h=400&fit=crop',
      tags: ['Vue.js', 'D3.js', 'Python', 'WebSocket'],
      liveUrl: '#',
      githubUrl: '#',
      gradient: 'from-electric to-neon-cyan'
    },
    {
      id: 4,
      title: 'Mobile App UI Kit',
      description: 'Comprehensive UI kit with 50+ components and design system for mobile applications.',
      image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=600&h=400&fit=crop',
      tags: ['Figma', 'React Native', 'Design System'],
      liveUrl: '#',
      githubUrl: '#',
      gradient: 'from-neon-purple to-neon-pink'
    },
    {
      id: 5,
      title: 'AI-Powered Chat Bot',
      description: 'Intelligent chatbot with natural language processing and machine learning capabilities.',
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600&h=400&fit=crop',
      tags: ['Python', 'TensorFlow', 'NLP', 'React'],
      liveUrl: '#',
      githubUrl: '#',
      gradient: 'from-neon-cyan to-neon-purple'
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'Creative portfolio showcasing animations, modern design, and interactive elements.',
      image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=600&h=400&fit=crop',
      tags: ['React', 'Framer Motion', 'Tailwind'],
      liveUrl: '#',
      githubUrl: '#',
      gradient: 'from-neon-pink to-electric'
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
            Here's a selection of my recent work that showcases my skills in web development, 
            design, and creative problem-solving.
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
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="sm" variant="secondary" className="bg-black/50 hover:bg-black/70">
                    <Eye className="w-4 h-4" />
                  </Button>
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
                    Live Demo
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
