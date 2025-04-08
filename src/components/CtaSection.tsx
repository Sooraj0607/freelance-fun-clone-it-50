
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Calendar, Users, Cpu, Microchip } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 text-center transform transition-all hover:scale-[1.01] duration-300">
          <h2 className="heading-lg mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Join the Semiconductor Revolution</h2>
          <p className="text-gray-600 mb-8 max-w-lg mx-auto">
            Connect with industry-leading chip designers, verification engineers, and semiconductor companies to advance your career or complete your critical projects.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300">
              Find Semiconductor Jobs
            </Button>
            <Button size="lg" variant="outline" className="border-2 hover:bg-gray-50 transition-all duration-300">
              Hire IC Design Experts
            </Button>
            <Button size="lg" variant="secondary" asChild className="transition-all duration-300">
              <Link to="/events">
                <Calendar className="mr-2 h-5 w-5" />
                Chip Design Events
              </Link>
            </Button>
            <Button size="lg" variant="secondary" asChild className="transition-all duration-300">
              <Link to="/community">
                <Users className="mr-2 h-5 w-5" />
                Join VLSI Community
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
