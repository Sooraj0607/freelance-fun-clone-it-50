
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import SearchBar from '@/components/SearchBar';
import CategoryFilter from '@/components/CategoryFilter';
import PostProjectForm from '@/components/PostProjectForm';
import { projects, jobCategories } from '@/data/mockData';
import { ProjectType } from '@/data/mockData';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [searchQuery, setSearchQuery] = useState('');
  const [isPostProjectOpen, setIsPostProjectOpen] = useState(false);
  const [filteredProjects, setFilteredProjects] = useState<ProjectType[]>(projects);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    filterProjects(query, selectedCategory);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    filterProjects(searchQuery, category);
  };

  const filterProjects = (query: string, category: string) => {
    let filtered = projects;
    
    // Filter by search query
    if (query) {
      const lowerQuery = query.toLowerCase();
      filtered = filtered.filter(project => 
        project.title.toLowerCase().includes(lowerQuery) || 
        project.description.toLowerCase().includes(lowerQuery)
      );
    }
    
    // Filter by category
    if (category !== 'All Categories') {
      filtered = filtered.filter(project => project.category === category);
    }
    
    setFilteredProjects(filtered);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 py-12 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-4">Find Projects & Submit Bids</h1>
          <p className="text-xl max-w-2xl mb-6">
            Browse projects from companies and bid on the ones that match your skills.
            Showcase your expertise and win projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-2xl">
            <SearchBar
              placeholder="Search projects..."
              onSearch={handleSearch}
              className="flex-grow"
            />
            <Button 
              onClick={() => setIsPostProjectOpen(true)}
              className="whitespace-nowrap"
            >
              Post a Project
            </Button>
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/4">
              <div className="sticky top-24">
                <h2 className="text-xl font-semibold mb-4">Filter Projects</h2>
                <CategoryFilter 
                  selectedCategory={selectedCategory} 
                  onCategoryChange={handleCategoryChange}
                />
                
                <div className="mt-6 p-4 bg-secondary rounded-lg">
                  <h3 className="font-semibold mb-3">Project Budget</h3>
                  <div className="space-y-2">
                    {['$0-$500', '$500-$1000', '$1000-$5000', '$5000+'].map((range, index) => (
                      <div key={index} className="flex items-center">
                        <input type="checkbox" id={`budget-${index}`} className="rounded mr-2" />
                        <label htmlFor={`budget-${index}`}>{range}</label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-secondary rounded-lg">
                  <h3 className="font-semibold mb-3">Project Duration</h3>
                  <div className="space-y-2">
                    {['Less than 1 week', '1-2 weeks', '2-4 weeks', '1-3 months', '3+ months'].map((duration, index) => (
                      <div key={index} className="flex items-center">
                        <input type="checkbox" id={`duration-${index}`} className="rounded mr-2" />
                        <label htmlFor={`duration-${index}`}>{duration}</label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-3/4">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Available Projects ({filteredProjects.length})</h2>
                <div className="flex items-center">
                  <span className="mr-2">Sort by:</span>
                  <select className="border rounded px-2 py-1">
                    <option>Most Recent</option>
                    <option>Budget: High to Low</option>
                    <option>Budget: Low to High</option>
                    <option>Deadline</option>
                  </select>
                </div>
              </div>
              
              {filteredProjects.length > 0 ? (
                <div className="grid grid-cols-1 gap-6">
                  {filteredProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              ) : (
                <div className="bg-secondary p-8 rounded-lg text-center">
                  <h3 className="text-xl font-semibold mb-2">No Projects Found</h3>
                  <p>Try adjusting your filters or search criteria</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
      
      {/* Post Project Dialog */}
      <Dialog open={isPostProjectOpen} onOpenChange={setIsPostProjectOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle className="text-2xl">Post a New Project</DialogTitle>
          </DialogHeader>
          <PostProjectForm onSuccess={() => setIsPostProjectOpen(false)} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Projects;
