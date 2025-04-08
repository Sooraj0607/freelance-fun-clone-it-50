
import React from 'react';
import { Zap, Users, Shield, Cpu, Database, HardDrive } from 'lucide-react';

interface BenefitsSectionProps {
  visibleSections: {
    benefits: boolean;
  }
}

const BenefitsSection = ({ visibleSections }: BenefitsSectionProps) => {
  const benefits = [
    {
      icon: Cpu,
      title: "Silicon-Focused Talent",
      desc: "Connect with specialized ASIC, FPGA, and SoC designers who understand your semiconductor needs."
    },
    {
      icon: Shield,
      title: "Verified Engineers",
      desc: "All semiconductor engineers are verified through technical assessments and industry experience validation."
    },
    {
      icon: Zap,
      title: "Accelerate Tape-out",
      desc: "Our platform helps you meet tight silicon deadlines by matching you with the right expertise exactly when needed."
    }
  ];

  return (
    <section id="benefits" className="py-16 bg-gradient-to-r from-primary to-primary/80 text-white">
      <div className="container mx-auto px-4">
        <h2 className={`heading-lg text-center mb-12 transition-all duration-700 ${visibleSections.benefits ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Why Choose SemiXpertz</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className={`flex flex-col items-center text-center transition-all duration-700 ${visibleSections.benefits ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="h-16 w-16 rounded-full bg-white/20 flex items-center justify-center mb-4">
                <benefit.icon className="h-8 w-8" />
              </div>
              <h3 className="font-semibold text-xl mb-2">{benefit.title}</h3>
              <p className="text-white/80">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
