
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FreelancerCard from '@/components/FreelancerCard';
import { Freelancer } from '@/data/mockData';

interface TalentSectionProps {
  visibleSections: {
    talent: boolean;
  };
  topFreelancers: Freelancer[];
}

const TalentSection = ({ visibleSections, topFreelancers }: TalentSectionProps) => {
  return (
    <section id="talent" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className={`heading-lg text-center mb-4 transition-all duration-700 ${visibleSections.talent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Top Semiconductor Specialists</h2>
        <p className={`text-center text-gray-600 mb-12 max-w-2xl mx-auto transition-all duration-700 ${visibleSections.talent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '100ms' }}>
          Work with the most talented VLSI and semiconductor professionals from around the world
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {topFreelancers.map((freelancer, i) => (
            <div 
              key={freelancer.id}
              className={`transition-all duration-700 ${visibleSections.talent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <FreelancerCard freelancer={freelancer} />
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-8">
          <Button variant="outline" className="flex items-center">
            Browse All Semiconductor Talent <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TalentSection;
