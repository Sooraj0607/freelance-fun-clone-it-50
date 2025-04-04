
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import JobCard from '@/components/JobCard';
import SearchBar from '@/components/SearchBar';
import CategoryFilter from '@/components/CategoryFilter';
import { Job } from '@/data/mockData';

interface JobListingsSectionProps {
  visibleSections: {
    jobs: boolean;
  };
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  filteredJobs: Job[];
  onSearch: (query: string) => void;
  setIsPostJobOpen: (isOpen: boolean) => void;
}

const JobListingsSection = ({
  visibleSections,
  selectedCategory,
  onCategoryChange,
  filteredJobs,
  onSearch,
  setIsPostJobOpen
}: JobListingsSectionProps) => {
  return (
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
                <SearchBar onSearch={onSearch} placeholder="Search jobs..." />
              </div>
              <CategoryFilter 
                selectedCategory={selectedCategory} 
                onCategoryChange={onCategoryChange}
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
  );
};

export default JobListingsSection;
