
import { Code, Brain, Coffee, Target, GraduationCap, Users } from 'lucide-react';
import { Card } from '@/components/ui/card';

const AboutSection = () => {
  const skills = [
    { name: 'Java Development', level: 90, icon: Coffee, color: 'from-neon-cyan to-electric' },
    { name: 'AI & Machine Learning', level: 85, icon: Brain, color: 'from-neon-pink to-neon-purple' },
    { name: 'Web Development', level: 88, icon: Code, color: 'from-electric to-neon-cyan' },
    { name: 'Database Management', level: 80, icon: Target, color: 'from-neon-purple to-neon-pink' },
  ];

  const technologies = [
    'Java', 'Python', 'C++', 'JavaScript', 'HTML/CSS', 'SQL',
    'Spring Boot', 'Spring Data JPA', 'PostgreSQL', 'Docker',
    'RESTful APIs', 'Data Structures', 'Algorithms', 'OOP'
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="bg-gradient-to-r from-neon-cyan to-neon-pink bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            🎓 Computer Science Student at SCU, driven by a passion for technology and innovation.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="w-6 h-6 text-neon-cyan" />
                <h3 className="text-2xl font-bold text-neon-cyan">Education & Background</h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                🎓 <strong>Suez Canal University</strong> - Computer Science Student<br/>
                📍 Ismailia, Egypt | Currently in 2nd Year
              </p>
              <p className="text-gray-300 leading-relaxed">
                💻 As a Java and AI Developer, I'm constantly exploring the boundaries of artificial intelligence 
                and software development. I'm enthusiastic about solving complex problems, building efficient 
                systems, and contributing to the tech community.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-neon-pink" />
                <h3 className="text-2xl font-bold text-neon-pink">What Drives Me</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                📚 I'm a lifelong learner, always seeking to expand my knowledge in cutting-edge technologies. 
                🚀 My aspiration is to make a meaningful impact in the world of AI and beyond, leveraging 
                technology to solve real-world challenges and build innovative solutions.
              </p>
            </div>

            <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-4 text-electric">Technical Arsenal</h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-slate-700/50 text-sm rounded-full text-neon-cyan border border-neon-cyan/20 hover:bg-neon-cyan/10 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6 text-center lg:text-left">Core Competencies</h3>
            {skills.map((skill, index) => (
              <Card key={skill.name} className="bg-slate-800/50 backdrop-blur-lg border-white/10 p-6 hover:bg-slate-700/50 transition-all duration-300 group">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${skill.color}`}>
                    <skill.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white">{skill.name}</h4>
                  </div>
                  <span className="text-neon-cyan font-bold">{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 group-hover:animate-glow`}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
