
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import CategoryFilter from '@/components/CategoryFilter';
import { FilterIcon, SearchIcon, ArrowRightIcon } from 'lucide-react';
import { projectsData, projectCategories } from '@/data/mockData';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [searchTerm, setSearchTerm] = useState('');
  
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };
  
  const filteredProjects = projectsData.filter(project => {
    const matchesCategory = selectedCategory === 'All Categories' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Semiconductor Design Projects</h1>
            <p className="text-xl mb-8">
              Find real-world projects to showcase your skills or post your project to find talented contributors
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button variant="secondary" size="lg">Post a Project</Button>
              <Button variant="outline" className="bg-white text-primary border-white hover:bg-white/90" size="lg">Browse Opportunities</Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-16 bg-background flex-grow">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all-projects" className="w-full">
            <TabsList className="mb-8">
              <TabsTrigger value="all-projects" className="py-2 px-4">All Projects</TabsTrigger>
              <TabsTrigger value="my-projects" className="py-2 px-4">My Projects</TabsTrigger>
              <TabsTrigger value="saved" className="py-2 px-4">Saved</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all-projects">
              <div className="max-w-4xl mx-auto mb-12">
                <div className="relative">
                  <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Search for projects by keyword, technology or domain..."
                    className="pl-10 py-6"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/4">
                  <div className="sticky top-24 space-y-6">
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold text-lg">Filters</h3>
                        <FilterIcon className="h-5 w-5 text-gray-500" />
                      </div>
                      
                      <CategoryFilter 
                        selectedCategory={selectedCategory} 
                        onCategoryChange={handleCategoryChange}
                        categories={projectCategories}
                      />
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Project Type</h3>
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <input type="checkbox" id="open-source" className="rounded mr-2" />
                            <label htmlFor="open-source" className="text-sm">Open Source</label>
                          </div>
                          <div className="flex items-center">
                            <input type="checkbox" id="commercial" className="rounded mr-2" />
                            <label htmlFor="commercial" className="text-sm">Commercial</label>
                          </div>
                          <div className="flex items-center">
                            <input type="checkbox" id="research" className="rounded mr-2" />
                            <label htmlFor="research" className="text-sm">Research</label>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-6">
                        <h3 className="text-lg font-semibold mb-3">Budget Range</h3>
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <input type="checkbox" id="no-budget" className="rounded mr-2" />
                            <label htmlFor="no-budget" className="text-sm">Unpaid/Volunteer</label>
                          </div>
                          <div className="flex items-center">
                            <input type="checkbox" id="budget-small" className="rounded mr-2" />
                            <label htmlFor="budget-small" className="text-sm">Under $1000</label>
                          </div>
                          <div className="flex items-center">
                            <input type="checkbox" id="budget-medium" className="rounded mr-2" />
                            <label htmlFor="budget-medium" className="text-sm">$1000 - $5000</label>
                          </div>
                          <div className="flex items-center">
                            <input type="checkbox" id="budget-large" className="rounded mr-2" />
                            <label htmlFor="budget-large" className="text-sm">$5000+</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="lg:w-3/4">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">Project Opportunities</h2>
                    <div className="text-sm text-gray-500">{filteredProjects.length} results</div>
                  </div>
                  
                  {filteredProjects.length === 0 ? (
                    <div className="text-center py-12 bg-white rounded-lg shadow-sm">
                      <p className="text-gray-500 mb-4">No projects found matching your criteria</p>
                      <Button onClick={() => {
                        setSelectedCategory('All Categories');
                        setSearchTerm('');
                      }}>
                        Clear Filters
                      </Button>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 gap-6">
                      {filteredProjects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                      ))}
                    </div>
                  )}
                  
                  <div className="text-center mt-8">
                    <Button variant="outline" className="group">
                      Load More <ArrowRightIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="my-projects">
              <div className="text-center py-16">
                <h3 className="text-xl font-semibold mb-4">You haven't created any projects yet</h3>
                <p className="text-muted-foreground mb-6">Share your project idea and find collaborators to bring it to life</p>
                <Button>Post a New Project</Button>
              </div>
            </TabsContent>
            
            <TabsContent value="saved">
              <div className="text-center py-16">
                <h3 className="text-xl font-semibold mb-4">You haven't saved any projects yet</h3>
                <p className="text-muted-foreground mb-6">Browse projects and save the ones you're interested in</p>
                <Button 
                  onClick={() => {
                    const allProjectsTab = document.querySelector('[data-value="all-projects"]');
                    if (allProjectsTab) {
                      (allProjectsTab as HTMLElement).click();
                    }
                  }}
                >
                  Browse Projects
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Projects;
