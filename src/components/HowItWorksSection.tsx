
import React from 'react';
import { Cpu, CircuitBoard, Microchip } from 'lucide-react';

interface HowItWorksSectionProps {
  visibleSections: {
    howItWorks: boolean;
  }
}

const HowItWorksSection = ({ visibleSections }: HowItWorksSectionProps) => {
  const steps = [
    {
      icon: Cpu,
      title: "Post VLSI Project",
      desc: "Create a detailed job posting specifying your semiconductor design requirements, fabrication technology, and project timeline."
    },
    {
      icon: CircuitBoard,
      title: "Review IC Experts",
      desc: "Receive proposals from skilled chip design specialists with expertise in your specific ASIC or FPGA domain."
    },
    {
      icon: Microchip,
      title: "Tape-out & Pay",
      desc: "Collaborate with your chosen expert through design, verification, and tape-out stages with milestone-based payments."
    }
  ];

  return (
    <section id="how-it-works" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className={`heading-lg text-center mb-4 transition-all duration-700 ${visibleSections.howItWorks ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>How SemiXpertz Works</h2>
        <p className={`text-center text-gray-600 mb-12 max-w-2xl mx-auto transition-all duration-700 ${visibleSections.howItWorks ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '100ms' }}>
          Simple and effective way to connect semiconductor specialists and businesses
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`bg-white p-6 rounded-lg shadow-sm transition-all duration-700 ${visibleSections.howItWorks ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${(index + 2) * 100}ms` }}
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                {React.createElement(step.icon, { className: "h-6 w-6" })}
              </div>
              <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
              <p className="text-gray-600">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
