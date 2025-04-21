
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

interface TestimonialProps {
  visibleSections: {
    testimonials: boolean;
  }
}

const TestimonialsSection = ({ visibleSections }: TestimonialProps) => {
  const testimonials = [
    {
      id: 1,
      name: "Dr. Ravi Kumar",
      role: "ASIC Design Lead at TechCorp",
      avatar: "https://i.pravatar.cc/150?img=11",
      quote: "SemiXpertz helped us find specialized FPGA designers under a tight deadline. The quality of talent is outstanding, and we completed our chip design ahead of schedule.",
      rating: 5,
    },
    {
      id: 2,
      name: "Lisa Chen",
      role: "Verification Engineer",
      avatar: "https://i.pravatar.cc/150?img=5",
      quote: "As a freelance verification engineer, I've found consistent high-quality projects through SemiXpertz. The platform truly understands the semiconductor industry's unique needs.",
      rating: 4.8,
    },
    {
      id: 3,
      name: "John Williams",
      role: "CTO at Silicon Startups",
      avatar: "https://i.pravatar.cc/150?img=3",
      quote: "Finding specialized silicon talent used to be our biggest bottleneck. SemiXpertz solved this problem completely with their curated network of IC designers.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className={`heading-lg text-center mb-4 transition-all duration-700 ${visibleSections.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          What Industry Leaders Say
        </h2>
        <p className={`text-center text-gray-600 mb-12 max-w-2xl mx-auto transition-all duration-700 ${visibleSections.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '100ms' }}>
          Trusted by top semiconductor professionals and companies worldwide
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`transition-all duration-700 ${visibleSections.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${(index + 2) * 100}ms` }}
            >
              <Card className="h-full">
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center">
                      <Avatar className="h-12 w-12 mr-4">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold">{testimonial.name}</h3>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                    <Quote className="h-8 w-8 text-primary/20" />
                  </div>
                  
                  <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
                  
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="h-4 w-4 mr-1" 
                        fill={i < Math.floor(testimonial.rating) ? "#FFB800" : "none"}
                        stroke={i < Math.floor(testimonial.rating) ? "#FFB800" : "currentColor"}
                      />
                    ))}
                    <span className="text-sm font-medium ml-2">{testimonial.rating.toFixed(1)}</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
