
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import JobListingsSection from '@/components/JobListingsSection';
import PostJobForm from '@/components/PostJobForm';
import { jobListings } from '@/data/mockData';
import { Search, MapPin, Briefcase, Filter, SlidersHorizontal } from 'lucide-react';

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchTerm, 'in', location);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="heading-xl mb-6">Find Your Next Semiconductor Role</h1>
              <p className="text-xl text-gray-600 mb-8">Browse thousands of semiconductor and IC design jobs from top companies</p>
              
              <form onSubmit={handleSearch} className="bg-white p-4 rounded-lg shadow-md">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                  <div className="md:col-span-5 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <Input 
                      type="text" 
                      placeholder="Search job titles or keywords"
                      className="pl-10"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <div className="md:col-span-4 relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <Input 
                      type="text" 
                      placeholder="Location"
                      className="pl-10"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </div>
                  <div className="md:col-span-3">
                    <Button type="submit" className="w-full">Search Jobs</Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <div className="mb-4 md:mb-0">
                <h2 className="text-2xl font-semibold">{jobListings.length} Semiconductor Jobs</h2>
                <p className="text-gray-600">Find your next opportunity in chip design</p>
              </div>
              <div className="flex space-x-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>
                      <Briefcase className="mr-2 h-4 w-4" />
                      Post a Job
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[600px]">
                    <DialogHeader>
                      <DialogTitle className="text-2xl">Post a New Job</DialogTitle>
                    </DialogHeader>
                    <PostJobForm />
                  </DialogContent>
                </Dialog>
                <Button variant="outline">
                  <SlidersHorizontal className="mr-2 h-4 w-4" />
                  Filters
                </Button>
              </div>
            </div>
            
            <Tabs defaultValue="all" className="mb-8">
              <TabsList className="mb-6">
                <TabsTrigger value="all">All Jobs</TabsTrigger>
                <TabsTrigger value="saved">Saved Jobs</TabsTrigger>
                <TabsTrigger value="applied">Applied Jobs</TabsTrigger>
                <TabsTrigger value="remote">Remote Only</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all">
                <JobListingsSection 
                  visibleSections={{ jobs: true }}
                  jobListings={jobListings} 
                />
              </TabsContent>
              
              <TabsContent value="saved">
                <div className="text-center py-12 bg-gray-50 rounded-lg">
                  <Briefcase className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                  <h3 className="text-xl font-medium mb-2">No saved jobs yet</h3>
                  <p className="text-gray-600 mb-4">Jobs you save will appear here</p>
                  <Button variant="outline">Browse All Jobs</Button>
                </div>
              </TabsContent>
              
              <TabsContent value="applied">
                <div className="text-center py-12 bg-gray-50 rounded-lg">
                  <Briefcase className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                  <h3 className="text-xl font-medium mb-2">No job applications yet</h3>
                  <p className="text-gray-600 mb-4">Jobs you apply to will appear here</p>
                  <Button variant="outline">Browse All Jobs</Button>
                </div>
              </TabsContent>
              
              <TabsContent value="remote">
                <JobListingsSection 
                  visibleSections={{ jobs: true }}
                  jobListings={jobListings.filter(job => job.description.toLowerCase().includes('remote'))} 
                />
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Jobs;
