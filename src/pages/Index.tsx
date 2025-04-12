
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import PostJobForm from '@/components/PostJobForm';
import { jobListings, topFreelancers } from '@/data/mockData';

// Import our section components
import CategorySection from '@/components/CategorySection';
import JobListingsSection from '@/components/JobListingsSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import TalentSection from '@/components/TalentSection';
import BenefitsSection from '@/components/BenefitsSection';
import CtaSection from '@/components/CtaSection';
import RoadmapSection from '@/components/RoadmapSection';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [isPostJobOpen, setIsPostJobOpen] = useState(false);
  const [visibleSections, setVisibleSections] = useState({
    categories: false,
    jobs: false,
    howItWorks: false,
    talent: false,
    benefits: false,
    roadmap: false,
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
        { id: 'roadmap', offset: -200 },
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
      
      <CategorySection visibleSections={visibleSections} />
      
      <JobListingsSection 
        visibleSections={visibleSections}
      />
      
      <HowItWorksSection visibleSections={visibleSections} />
      
      <TalentSection 
        visibleSections={visibleSections} 
        topFreelancers={topFreelancers}
      />
      
      <BenefitsSection visibleSections={visibleSections} />
      
      <RoadmapSection visibleSections={visibleSections} />
      
      <CtaSection />
      
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
