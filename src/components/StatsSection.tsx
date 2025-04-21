
import React from 'react';
import { Users, Briefcase, Award, Zap } from 'lucide-react';

interface StatsSectionProps {
  visibleSections: {
    stats: boolean;
  }
}

const StatsSection = ({ visibleSections }: StatsSectionProps) => {
  const stats = [
    {
      icon: Users,
      value: "25,000+",
      label: "Semiconductor Experts",
      description: "Specialized IC designers, verification engineers, and layout specialists"
    },
    {
      icon: Briefcase,
      value: "1,800+",
      label: "Silicon Projects",
      description: "Successfully completed ASIC, FPGA, and SoC design projects"
    },
    {
      icon: Award,
      value: "98%",
      label: "Success Rate",
      description: "Projects delivered on time and matching specifications"
    },
    {
      icon: Zap,
      value: "40%",
      label: "Faster Tape-outs",
      description: "Average time saved on silicon project delivery"
    }
  ];

  return (
    <section id="stats" className="py-16 bg-gradient-to-r from-primary to-primary/80 text-white">
      <div className="container mx-auto px-4">
        <h2 className={`heading-lg text-center mb-16 transition-all duration-700 ${visibleSections.stats ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Accelerating Silicon Innovation
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`flex flex-col items-center text-center transition-all duration-700 ${visibleSections.stats ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="h-16 w-16 rounded-full bg-white/20 flex items-center justify-center mb-4">
                <stat.icon className="h-8 w-8" />
              </div>
              <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
              <p className="text-xl font-semibold mb-2">{stat.label}</p>
              <p className="text-white/80">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
