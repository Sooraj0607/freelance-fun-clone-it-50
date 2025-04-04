
import React from 'react';

interface HowItWorksSectionProps {
  visibleSections: {
    howItWorks: boolean;
  }
}

const HowItWorksSection = ({ visibleSections }: HowItWorksSectionProps) => {
  return (
    <section id="how-it-works" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className={`heading-lg text-center mb-4 transition-all duration-700 ${visibleSections.howItWorks ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>How SemiXpertz Works</h2>
        <p className={`text-center text-gray-600 mb-12 max-w-2xl mx-auto transition-all duration-700 ${visibleSections.howItWorks ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '100ms' }}>
          Simple and effective way to connect semiconductor specialists and businesses
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Post a Job",
              desc: "Create a detailed job posting specifying your semiconductor requirements, budget, and timeline."
            },
            {
              title: "Review Proposals",
              desc: "Receive proposals from skilled semiconductor specialists ready to work on your project."
            },
            {
              title: "Collaborate & Pay",
              desc: "Work with your chosen specialist and release payment when you're satisfied."
            }
          ].map((step, index) => (
            <div 
              key={index}
              className={`bg-white p-6 rounded-lg shadow-sm transition-all duration-700 ${visibleSections.howItWorks ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${(index + 2) * 100}ms` }}
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                <span className="font-bold text-lg">{index + 1}</span>
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
