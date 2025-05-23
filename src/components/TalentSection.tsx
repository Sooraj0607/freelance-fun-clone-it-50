
import React from 'react';
import { ArrowRight, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
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
    <section id="talent" className="py-16 bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <div className="bg-primary/10 p-3 rounded-full mb-4">
            <Cpu className="h-6 w-6 text-primary" />
          </div>
          <h2 className={`heading-lg text-center mb-4 transition-all duration-700 ${visibleSections.talent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Top Semiconductor & VLSI Design Specialists
          </h2>
          <p className={`text-center text-gray-600 mb-6 max-w-2xl mx-auto transition-all duration-700 ${visibleSections.talent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '100ms' }}>
            Work with the most talented VLSI and semiconductor professionals from around the world
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <Badge variant="outline" className="bg-blue-50 text-blue-700">RTL Design</Badge>
            <Badge variant="outline" className="bg-green-50 text-green-700">ASIC Design</Badge>
            <Badge variant="outline" className="bg-purple-50 text-purple-700">UVM Verification</Badge>
            <Badge variant="outline" className="bg-amber-50 text-amber-700">Physical Design</Badge>
            <Badge variant="outline" className="bg-rose-50 text-rose-700">Analog Design</Badge>
            <Badge variant="outline" className="bg-cyan-50 text-cyan-700">FPGA Implementation</Badge>
          </div>
        </div>
        
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
        
        <div className="flex justify-center mt-12">
          <Button size="lg" className="flex items-center gap-2 bg-gradient-to-r from-primary to-primary/90">
            Browse All Semiconductor Specialists <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TalentSection;
