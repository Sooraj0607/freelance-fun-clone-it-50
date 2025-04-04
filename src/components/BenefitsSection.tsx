
import React from 'react';
import { Zap, Users, Shield } from 'lucide-react';

interface BenefitsSectionProps {
  visibleSections: {
    benefits: boolean;
  }
}

const BenefitsSection = ({ visibleSections }: BenefitsSectionProps) => {
  const benefits = [
    {
      icon: Zap,
      title: "Fast & Efficient",
      desc: "Find the right match for your semiconductor projects quickly with our intelligent matching system."
    },
    {
      icon: Users,
      title: "Verified Specialists",
      desc: "All semiconductor specialists go through a verification process to ensure quality work."
    },
    {
      icon: Shield,
      title: "Secure Payments",
      desc: "Our escrow system ensures that payments are secure and released only when work is completed."
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
