
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface Slide {
  title: string;
  content: string;
  image?: string;
}

const slides: Slide[] = [
  {
    title: "Welcome to SemiXpertz",
    content: "Connecting Semiconductor Talent with Industry Leaders",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800",
  },
  {
    title: "The Problem",
    content: "Growing demand for specialized VLSI talent, but difficulty in finding and verifying skilled professionals",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800",
  },
  {
    title: "Our Solution",
    content: "A comprehensive platform that connects pre-vetted semiconductor experts with companies through skill assessments and project matching",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800",
  },
  {
    title: "Key Features",
    content: "• Skill Assessment Portal\n• Project Matching\n• Expert Verification\n• Real-time Collaboration\n• Industry Events",
  },
  {
    title: "Market Opportunity",
    content: "The semiconductor industry is projected to reach $1 trillion by 2030, with increasing demand for specialized talent",
  },
  {
    title: "Competitive Advantage",
    content: "• Specialized in VLSI/Semiconductor\n• Verified Expert Network\n• Industry-specific Assessment\n• Community-driven Platform",
  },
  {
    title: "Business Model",
    content: "• Premium Company Subscriptions\n• Project Success Fee\n• Assessment Certification\n• Professional Training",
  },
  {
    title: "Contact Us",
    content: "Join us in revolutionizing semiconductor talent acquisition\n\nEmail: contact@semixpertz.com\nWebsite: www.semixpertz.com",
  },
];

const PitchDeck = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-4xl mx-auto bg-white">
        <div className="relative aspect-[16/9] overflow-hidden">
          {slides[currentSlide].image && (
            <div className="absolute inset-0">
              <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                className="object-cover w-full h-full opacity-20"
              />
            </div>
          )}
          <div className="relative z-10 h-full flex flex-col items-center justify-center p-8 text-center">
            <h2 className="text-4xl font-bold mb-6">{slides[currentSlide].title}</h2>
            <div className="text-lg whitespace-pre-line">{slides[currentSlide].content}</div>
          </div>
        </div>
        <div className="flex justify-between items-center p-4 border-t">
          <Button variant="outline" onClick={prevSlide}>
            <ChevronLeft className="h-4 w-4 mr-2" />
            Previous
          </Button>
          <span className="text-sm text-gray-500">
            {currentSlide + 1} / {slides.length}
          </span>
          <Button variant="outline" onClick={nextSlide}>
            Next
            <ChevronRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default PitchDeck;
