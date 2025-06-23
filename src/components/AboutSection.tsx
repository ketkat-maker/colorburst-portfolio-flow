
import { Code, Palette, Zap, Target } from 'lucide-react';
import { Card } from '@/components/ui/card';

const AboutSection = () => {
  const skills = [
    { name: 'Frontend Development', level: 90, icon: Code, color: 'from-neon-cyan to-electric' },
    { name: 'UI/UX Design', level: 85, icon: Palette, color: 'from-neon-pink to-neon-purple' },
    { name: 'Animation', level: 80, icon: Zap, color: 'from-electric to-neon-cyan' },
    { name: 'Problem Solving', level: 95, icon: Target, color: 'from-neon-purple to-neon-pink' },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="bg-gradient-to-r from-neon-cyan to-neon-pink bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I'm a passionate creative developer who loves crafting beautiful, functional experiences 
            that push the boundaries of what's possible on the web.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-4 text-neon-cyan">My Journey</h3>
              <p className="text-gray-300 leading-relaxed">
                With over 5 years of experience in web development and design, I specialize in creating 
                immersive digital experiences that combine aesthetic appeal with functional excellence. 
                I believe in the power of clean code, beautiful design, and innovative solutions.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-4 text-neon-pink">What I Do</h3>
              <p className="text-gray-300 leading-relaxed">
                I focus on modern web technologies, responsive design, and creating smooth animations 
                that enhance user experience. Every project is an opportunity to learn something new 
                and push creative boundaries.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6 text-center lg:text-left">Skills & Expertise</h3>
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
