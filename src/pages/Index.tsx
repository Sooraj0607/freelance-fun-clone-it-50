
import React, { useState } from 'react';
import { ArrowRight, BriefcaseIcon, Users, Zap, Shield } from 'lucide-react';
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

  const handleSearch = (query: string) => {
    console.log('Searching for:', query);
    // In a real app, this would filter job listings
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    // In a real app, this would filter job listings by category
  };

  const filteredJobs = selectedCategory === 'All Categories'
    ? jobListings
    : jobListings.filter(job => job.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      
      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="heading-lg text-center mb-12">Popular Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Web Development', 'Design', 'Writing & Translation', 'Video & Animation'].map((category, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-4">
                  <BriefcaseIcon className="h-6 w-6" />
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
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div>
              <h2 className="heading-lg mb-2">Latest Job Opportunities</h2>
              <p className="text-gray-600">Find your next remote project with top companies</p>
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
                {filteredJobs.map((job) => (
                  <JobCard key={job.id} job={job} />
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
          <h2 className="heading-lg text-center mb-4">How WorkBridge Works</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Simple and effective way to connect freelancers and businesses
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                <span className="font-bold text-lg">1</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Post a Job</h3>
              <p className="text-gray-600">
                Create a detailed job posting specifying your requirements, budget, and timeline.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                <span className="font-bold text-lg">2</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Review Proposals</h3>
              <p className="text-gray-600">
                Receive proposals from skilled freelancers ready to work on your project.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                <span className="font-bold text-lg">3</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Collaborate & Pay</h3>
              <p className="text-gray-600">
                Work with your chosen freelancer and release payment when you're satisfied.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Top Freelancers Section */}
      <section id="talent" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="heading-lg text-center mb-4">Top Freelancers</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Work with the most talented professionals from around the world
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topFreelancers.map((freelancer) => (
              <FreelancerCard key={freelancer.id} freelancer={freelancer} />
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
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4">
          <h2 className="heading-lg text-center mb-12">Why Choose WorkBridge</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="h-16 w-16 rounded-full bg-white/20 flex items-center justify-center mb-4">
                <Zap className="h-8 w-8" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Fast & Efficient</h3>
              <p className="text-white/80">
                Find the right match for your projects quickly with our intelligent matching system.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="h-16 w-16 rounded-full bg-white/20 flex items-center justify-center mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Verified Talent</h3>
              <p className="text-white/80">
                All freelancers go through a verification process to ensure quality work.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="h-16 w-16 rounded-full bg-white/20 flex items-center justify-center mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Secure Payments</h3>
              <p className="text-white/80">
                Our escrow system ensures that payments are secure and released only when work is completed.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 text-center">
            <h2 className="heading-lg mb-4">Ready to Get Started?</h2>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto">
              Join thousands of businesses and freelancers already using our platform to connect, collaborate, and grow.
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
