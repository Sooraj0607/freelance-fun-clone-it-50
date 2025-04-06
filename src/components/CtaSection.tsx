
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Calendar, Presentation } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 text-center">
          <h2 className="heading-lg mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-8 max-w-lg mx-auto">
            Join thousands of businesses and semiconductor specialists already using our platform to connect, collaborate, and grow.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg">Find Work</Button>
            <Button size="lg" variant="outline">Hire Talent</Button>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/events">
                <Calendar className="mr-2 h-5 w-5" />
                Join Events
              </Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/pitch-deck">
                <Presentation className="mr-2 h-5 w-5" />
                View Pitch Deck
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
