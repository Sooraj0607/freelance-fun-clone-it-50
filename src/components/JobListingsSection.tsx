
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import CategoryFilter from '@/components/CategoryFilter';
import JobCard from '@/components/JobCard';
import { jobCategories } from '@/data/mockData';
import { Search, ArrowRight, Filter, SlidersHorizontal } from 'lucide-react';
import type { Job } from '@/data/mockData';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui/collapsible';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { cn } from '@/lib/utils';

interface JobListingsSectionProps {
  visibleSections: {
    jobs: boolean;
  };
  jobListings: Job[];
}

const JobListingsSection = ({ visibleSections, jobListings }: JobListingsSectionProps) => {
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [searchTerm, setSearchTerm] = useState('');
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [sortOrder, setSortOrder] = useState('newest');
  
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };
  
  const filteredJobs = jobListings.filter(job => {
    const matchesCategory = selectedCategory === 'All Categories' || job.category === selectedCategory;
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        job.postedBy.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        job.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Sort jobs based on the selected sort order
  const sortedJobs = [...filteredJobs].sort((a, b) => {
    switch (sortOrder) {
      case 'newest':
        return new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime();
      case 'oldest':
        return new Date(a.postedDate).getTime() - new Date(b.postedDate).getTime();
      case 'highest-salary':
        return (b.salaryMax || 0) - (a.salaryMax || 0);
      default:
        return 0;
    }
  });
  
  return (
    <section id="jobs" className="py-8 bg-background">
      <div className="container mx-auto px-4">
        <h2 className={`heading-lg text-center mb-8 transition-all duration-700 ${visibleSections.jobs ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Latest Semiconductor Jobs
        </h2>
        
        <div className={`max-w-4xl mx-auto mb-8 transition-all duration-700 ${visibleSections.jobs ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search for jobs, companies or keywords..."
              className="pl-10 py-6 border-gray-200 focus:border-primary/50"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex flex-wrap items-center justify-between mt-4 gap-2">
            <div className="flex items-center">
              <Collapsible open={isFiltersOpen} onOpenChange={setIsFiltersOpen} className="w-full">
                <CollapsibleTrigger asChild>
                  <Button variant="outline" size="sm" className="flex items-center">
                    <Filter className="h-4 w-4 mr-2" />
                    Filters
                  </Button>
                </CollapsibleTrigger>
                
                <div className="h-4"></div>
                
                <CollapsibleContent className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 mt-2 animate-accordion-down">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <Label htmlFor="job-type" className="text-sm font-medium mb-1.5 block">
                        Job Type
                      </Label>
                      <select id="job-type" className="w-full h-9 px-3 rounded-md border text-sm">
                        <option>All Types</option>
                        <option>Full-time</option>
                        <option>Part-time</option>
                        <option>Contract</option>
                        <option>Internship</option>
                      </select>
                    </div>
                    
                    <div>
                      <Label htmlFor="experience" className="text-sm font-medium mb-1.5 block">
                        Experience
                      </Label>
                      <select id="experience" className="w-full h-9 px-3 rounded-md border text-sm">
                        <option>Any Experience</option>
                        <option>Entry Level</option>
                        <option>Mid-Level</option>
                        <option>Senior</option>
                        <option>Executive</option>
                      </select>
                    </div>
                    
                    <div>
                      <Label htmlFor="salary-range" className="text-sm font-medium mb-1.5 block">
                        Salary Range
                      </Label>
                      <select id="salary-range" className="w-full h-9 px-3 rounded-md border text-sm">
                        <option>Any Range</option>
                        <option>$50k - $80k</option>
                        <option>$80k - $120k</option>
                        <option>$120k - $160k</option>
                        <option>$160k+</option>
                      </select>
                    </div>
                    
                    <div>
                      <Label htmlFor="date-posted" className="text-sm font-medium mb-1.5 block">
                        Date Posted
                      </Label>
                      <select id="date-posted" className="w-full h-9 px-3 rounded-md border text-sm">
                        <option>Any Time</option>
                        <option>Past 24 hours</option>
                        <option>Past week</option>
                        <option>Past month</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex flex-wrap gap-2">
                    <div className="flex items-center">
                      <Checkbox id="remote-only" />
                      <label htmlFor="remote-only" className="ml-2 text-sm cursor-pointer">
                        Remote only
                      </label>
                    </div>
                    <div className="flex items-center">
                      <Checkbox id="easy-apply" />
                      <label htmlFor="easy-apply" className="ml-2 text-sm cursor-pointer">
                        Easy apply
                      </label>
                    </div>
                    <div className="flex items-center">
                      <Checkbox id="urgent-hiring" />
                      <label htmlFor="urgent-hiring" className="ml-2 text-sm cursor-pointer">
                        Urgent hiring
                      </label>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex justify-between">
                    <Button variant="outline" size="sm">
                      Clear All
                    </Button>
                    <Button size="sm">
                      Apply Filters
                    </Button>
                  </div>
                </CollapsibleContent>
              </Collapsible>
              
              <span className="mx-2 text-gray-400">|</span>
              
              <div className="flex items-center">
                <span className="text-sm text-gray-500 mr-2">Sort by:</span>
                <select 
                  className="text-sm border-none bg-transparent focus:outline-none focus:ring-0 cursor-pointer"
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                >
                  <option value="newest">Most Recent</option>
                  <option value="oldest">Oldest First</option>
                  <option value="highest-salary">Highest Salary</option>
                </select>
              </div>
            </div>
            
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm" className="flex items-center">
                  <SlidersHorizontal className="h-4 w-4 mr-2" />
                  Advanced Search
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                  <DialogTitle>Advanced Search Options</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="keywords">Keywords</Label>
                      <Input id="keywords" placeholder="e.g. ASIC, Verification" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="exclude">Exclude</Label>
                      <Input id="exclude" placeholder="e.g. internship, junior" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="companies">Companies</Label>
                    <Input id="companies" placeholder="e.g. Intel, Qualcomm" />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="skills">Required Skills</Label>
                      <Input id="skills" placeholder="e.g. Verilog, SystemVerilog" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="salary">Minimum Salary</Label>
                      <Input id="salary" placeholder="e.g. $100,000" />
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button>Search</Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        
        <div className={`flex flex-col md:flex-row gap-8 transition-all duration-700 ${visibleSections.jobs ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="md:w-1/4">
            <div className="card-shadow overflow-hidden">
              <CategoryFilter 
                selectedCategory={selectedCategory} 
                onCategoryChange={handleCategoryChange}
                categories={jobCategories}
              />
            </div>
          </div>
          
          <div className="md:w-3/4">
            <div className="grid grid-cols-1 gap-4 mb-8">
              {sortedJobs.length > 0 ? (
                <>
                  <p className="text-sm text-gray-500 mb-2">
                    Showing {sortedJobs.length} of {jobListings.length} jobs
                  </p>
                  {sortedJobs.map((job, index) => (
                    <div key={index} className="animate-fadeIn" style={{ animationDelay: `${index * 0.1}s` }}>
                      <JobCard job={job} />
                    </div>
                  ))}
                </>
              ) : (
                <div className="text-center py-12 bg-white rounded-lg card-shadow">
                  <div className="text-gray-400 mb-3">
                    <Search className="h-12 w-12 mx-auto" />
                  </div>
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
                View All Jobs <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobListingsSection;
