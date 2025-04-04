
import React, { useState, useEffect } from 'react';
import { ArrowRight, Cpu, Users, Zap, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import JobCard from '@/components/JobCard';
import FreelancerCard from '@/components/FreelancerCard';
import CategoryFilter from '@/components/CategoryFilter';
import SearchBar from '@/components/SearchBar';
import PostJobForm from '@/components/PostJobForm';
import { jobListings, topFreelancers } from '@/data/mockData';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [isPostJobOpen, setIsPostJobOpen] = useState(false);
  const [visibleSections, setVisibleSections] = useState({
    categories: false,
    jobs: false,
    howItWorks: false,
    talent: false,
    benefits: false,
  });
  
  const handleSearch = (query: string) => {
    console.log('Searching for:', query);
    // In a real app, this would filter job listings
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    // In a real app, this would filter job listings by category
  };
  
  useEffect(() => {
    const handleScroll = () => {
      const sectionsToCheck = [
        { id: 'categories', offset: -200 },
        { id: 'jobs', offset: -200 },
        { id: 'how-it-works', offset: -200 },
        { id: 'talent', offset: -200 },
        { id: 'benefits', offset: -200 },
      ];
      
      sectionsToCheck.forEach(section => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top + section.offset <= window.innerHeight && rect.bottom >= 0) {
            setVisibleSections(prev => ({ ...prev, [section.id]: true }));
          }
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    // Trigger once on load
    setTimeout(handleScroll, 300);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredJobs = selectedCategory === 'All Categories'
    ? jobListings
    : jobListings.filter(job => job.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      
      {/* Categories Section */}
      <section id="categories" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className={`heading-lg text-center mb-12 transition-all duration-700 ${visibleSections.categories ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Popular Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Chip Design', 'Verification', 'Layout Design', 'Embedded Systems'].map((category, index) => (
              <div 
                key={index} 
                className={`bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-700 ${visibleSections.categories ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-4">
                  <Cpu className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2">{category}</h3>
                <p className="text-sm text-gray-600">{100 + index * 50}+ jobs</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Job Listings Section */}
      <section id="jobs" className="py-16">
        <div className="container mx-auto px-4">
          <div className={`flex flex-col md:flex-row justify-between items-center mb-8 transition-all duration-700 ${visibleSections.jobs ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div>
              <h2 className="heading-lg mb-2">Latest Job Opportunities</h2>
              <p className="text-gray-600">Find your next semiconductor project with top companies</p>
            </div>
            <Button 
              className="mt-4 md:mt-0" 
              onClick={() => setIsPostJobOpen(true)}
            >
              Post a Job
            </Button>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/4">
              <div className="sticky top-24">
                <div className="mb-6">
                  <SearchBar onSearch={handleSearch} placeholder="Search jobs..." />
                </div>
                <CategoryFilter 
                  selectedCategory={selectedCategory} 
                  onCategoryChange={handleCategoryChange}
                />
                <div className="p-4 bg-secondary rounded-lg">
                  <h3 className="font-semibold mb-3">Job Type</h3>
                  <div className="space-y-2">
                    {['Remote', 'Full-time', 'Part-time', 'Contract', 'Fixed-Price'].map((type, index) => (
                      <div key={index} className="flex items-center">
                        <input type="checkbox" id={`type-${index}`} className="rounded mr-2" />
                        <label htmlFor={`type-${index}`}>{type}</label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-3/4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredJobs.map((job, i) => (
                  <div 
                    key={job.id} 
                    className={`transition-all duration-700 ${visibleSections.jobs ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    style={{ transitionDelay: `${i * 100}ms` }}
                  >
                    <JobCard job={job} />
                  </div>
                ))}
              </div>
              
              <div className="flex justify-center mt-8">
                <Button variant="outline" className="flex items-center">
                  See More Jobs <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works */}
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
      
      {/* Top Freelancers Section */}
      <section id="talent" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className={`heading-lg text-center mb-4 transition-all duration-700 ${visibleSections.talent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Top Specialists</h2>
          <p className={`text-center text-gray-600 mb-12 max-w-2xl mx-auto transition-all duration-700 ${visibleSections.talent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '100ms' }}>
            Work with the most talented semiconductor professionals from around the world
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
              Browse All Talent <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section id="benefits" className="py-16 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4">
          <h2 className={`heading-lg text-center mb-12 transition-all duration-700 ${visibleSections.benefits ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Why Choose SemiXpertz</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
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
            ].map((benefit, index) => (
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
      
      {/* CTA Section */}
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
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
      
      {/* Post Job Dialog */}
      <Dialog open={isPostJobOpen} onOpenChange={setIsPostJobOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle className="text-2xl">Post a New Job</DialogTitle>
          </DialogHeader>
          <PostJobForm />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
