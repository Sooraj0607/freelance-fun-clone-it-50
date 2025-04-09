
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import CategoryFilter from '@/components/CategoryFilter';
import JobCard from '@/components/JobCard';
import { jobListings, jobCategories } from '@/data/mockData';
import { SearchIcon, ArrowRightIcon } from 'lucide-react';

interface JobListingsSectionProps {
  visibleSections: {
    jobListings?: boolean;
  };
}

const JobListingsSection = ({ visibleSections }: JobListingsSectionProps) => {
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [searchTerm, setSearchTerm] = useState('');
  
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };
  
  const filteredJobs = jobListings.filter(job => {
    const matchesCategory = selectedCategory === 'All Categories' || job.category === selectedCategory;
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        job.company?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        job.location?.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        job.postedBy.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  
  // Determine visibility based on various section names from different pages
  const isVisible = visibleSections.jobListings || visibleSections.jobs;
  
  return (
    <section id="jobs" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className={`heading-lg text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Latest Semiconductor Jobs</h2>
        
        <div className={`max-w-4xl mx-auto mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search for jobs, companies or locations..."
              className="pl-10 py-6"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        <div className={`flex flex-col md:flex-row gap-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="md:w-1/4">
            <CategoryFilter 
              selectedCategory={selectedCategory} 
              onCategoryChange={handleCategoryChange}
              categories={jobCategories}
            />
          </div>
          
          <div className="md:w-3/4">
            <div className="grid grid-cols-1 gap-4 mb-8">
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job, index) => (
                  <JobCard key={index} job={job} />
                ))
              ) : (
                <div className="text-center py-8 bg-white rounded-lg shadow-sm">
                  <p className="text-gray-500 mb-4">No jobs found matching your criteria</p>
                  <Button onClick={() => {
                    setSelectedCategory('All Categories');
                    setSearchTerm('');
                  }}>
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
            
            <div className="text-center">
              <Button variant="outline" className="group">
                View All Jobs <ArrowRightIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobListingsSection;
