
import React from 'react';

interface TrustLogosSectionProps {
  visibleSections?: {
    trustLogos?: boolean;
  }
}

const TrustLogosSection = ({ visibleSections }: TrustLogosSectionProps) => {
  const isVisible = visibleSections?.trustLogos !== false;
  
  const logos = [
    { name: 'Intel', logo: '🔷' },
    { name: 'AMD', logo: '🔶' },
    { name: 'TSMC', logo: '🔵' },
    { name: 'ARM', logo: '💠' },
    { name: 'GlobalFoundries', logo: '🌐' },
    { name: 'NXP', logo: '🔘' }
  ];
  
  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <p className={`text-center text-gray-600 mb-8 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          Trusted by leading semiconductor companies worldwide
        </p>
        
        <div className="flex justify-around items-center flex-wrap gap-y-6">
          {logos.map((logo, index) => (
            <div 
              key={index}
              className={`flex items-center transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl mr-2">{logo.logo}</div>
              <span className="text-gray-500 font-medium">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustLogosSection;
