
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
import { Search, MapPin, Briefcase, Filter, SlidersHorizontal, Bookmark, Bell, Buildings, GraduationCap, CalendarClock } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { toast } from "@/hooks/use-toast";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [experienceLevel, setExperienceLevel] = useState('All');
  const [jobType, setJobType] = useState('All');
  
  // New states for LinkedIn-like features
  const [savedSearches, setSavedSearches] = useState([
    { id: 1, name: "ASIC Design", location: "San Jose, CA" },
    { id: 2, name: "RTL Verification", location: "Austin, TX" },
  ]);
  
  const [jobAlerts, setJobAlerts] = useState([
    { id: 1, title: "New jobs for FPGA Engineer", frequency: "Daily", active: true },
    { id: 2, title: "Verification Engineer jobs", frequency: "Weekly", active: true },
  ]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchTerm, 'in', location);
    toast({
      title: "Search initiated",
      description: `Searching for "${searchTerm}" in "${location || 'all locations'}"`,
    });
  };

  const handleSaveSearch = () => {
    if (searchTerm) {
      const newSearch = {
        id: savedSearches.length + 1,
        name: searchTerm,
        location: location || "All locations",
      };
      setSavedSearches([...savedSearches, newSearch]);
      toast({
        title: "Search saved",
        description: "You will receive updates for this search criteria",
      });
    }
  };

  const handleCreateAlert = () => {
    if (searchTerm) {
      const newAlert = {
        id: jobAlerts.length + 1,
        title: `Jobs for ${searchTerm}`,
        frequency: "Daily",
        active: true,
      };
      setJobAlerts([...jobAlerts, newAlert]);
      toast({
        title: "Job alert created",
        description: "You will receive daily notifications for new matching jobs",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section - Improved UI */}
        <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="heading-xl mb-6">Discover Your Next Semiconductor Career Move</h1>
              <p className="text-xl text-gray-600 mb-8">Browse thousands of semiconductor and IC design jobs from industry-leading companies</p>
              
              <form onSubmit={handleSearch} className="bg-white p-6 rounded-lg shadow-md">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                  <div className="md:col-span-5 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <Input 
                      type="text" 
                      placeholder="Search job titles or keywords"
                      className="pl-10 h-12"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <div className="md:col-span-4 relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <Input 
                      type="text" 
                      placeholder="Location"
                      className="pl-10 h-12"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </div>
                  <div className="md:col-span-3">
                    <Button type="submit" className="w-full h-12 text-base">
                      Find Jobs
                    </Button>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <div className="flex gap-4">
                    <button 
                      type="button"
                      onClick={handleSaveSearch}
                      className="text-primary flex items-center text-sm hover:underline"
                    >
                      <Bookmark className="h-4 w-4 mr-1" />
                      Save search
                    </button>
                    <button 
                      type="button"
                      onClick={handleCreateAlert}
                      className="text-primary flex items-center text-sm hover:underline"
                    >
                      <Bell className="h-4 w-4 mr-1" />
                      Create job alert
                    </button>
                  </div>
                  <button 
                    type="button"
                    onClick={() => setIsFiltersOpen(!isFiltersOpen)}
                    className="text-gray-600 flex items-center text-sm hover:text-gray-800"
                  >
                    <Filter className="h-4 w-4 mr-1" />
                    Advanced filters
                  </button>
                </div>
                
                {/* Advanced filters - LinkedIn-like feature */}
                {isFiltersOpen && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 pt-4 border-t">
                    <div>
                      <Label htmlFor="experience" className="mb-2 block text-sm">Experience Level</Label>
                      <select 
                        id="experience" 
                        value={experienceLevel}
                        onChange={(e) => setExperienceLevel(e.target.value)}
                        className="w-full h-10 px-3 rounded-md border"
                      >
                        <option>All</option>
                        <option>Internship</option>
                        <option>Entry level</option>
                        <option>Associate</option>
                        <option>Mid-Senior level</option>
                        <option>Director</option>
                        <option>Executive</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="jobType" className="mb-2 block text-sm">Job Type</Label>
                      <select 
                        id="jobType"
                        value={jobType}
                        onChange={(e) => setJobType(e.target.value)}
                        className="w-full h-10 px-3 rounded-md border"
                      >
                        <option>All</option>
                        <option>Full-time</option>
                        <option>Part-time</option>
                        <option>Contract</option>
                        <option>Temporary</option>
                        <option>Volunteer</option>
                        <option>Internship</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="date" className="mb-2 block text-sm">Date Posted</Label>
                      <select 
                        id="date" 
                        className="w-full h-10 px-3 rounded-md border"
                      >
                        <option>Any time</option>
                        <option>Past 24 hours</option>
                        <option>Past week</option>
                        <option>Past month</option>
                      </select>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>

        {/* Main Content - Enhanced with LinkedIn-like features */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Left sidebar - LinkedIn-like feature */}
              <div className="lg:w-1/4">
                <div className="bg-white rounded-lg shadow-md p-5 mb-6">
                  <h3 className="font-semibold text-lg mb-4 flex items-center">
                    <Buildings className="mr-2 h-5 w-5 text-primary" />
                    Job Seeking Guidance
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm text-gray-600 hover:text-primary cursor-pointer">
                      <GraduationCap className="h-4 w-4 mr-2" />
                      Recommended skills
                    </li>
                    <li className="flex items-center text-sm text-gray-600 hover:text-primary cursor-pointer">
                      <CalendarClock className="h-4 w-4 mr-2" />
                      Interview preparation
                    </li>
                    <li className="flex items-center text-sm text-gray-600 hover:text-primary cursor-pointer">
                      <Briefcase className="h-4 w-4 mr-2" />
                      Resume builder
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg shadow-md p-5 mb-6">
                  <h3 className="font-semibold text-lg mb-4">Saved Searches</h3>
                  {savedSearches.length > 0 ? (
                    <ul className="space-y-3">
                      {savedSearches.map(search => (
                        <li key={search.id} className="text-sm">
                          <div className="font-medium text-primary hover:underline cursor-pointer">{search.name}</div>
                          <div className="text-gray-500">{search.location}</div>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-gray-500">No saved searches yet.</p>
                  )}
                </div>

                <div className="bg-white rounded-lg shadow-md p-5">
                  <h3 className="font-semibold text-lg mb-4">Job Alerts</h3>
                  {jobAlerts.length > 0 ? (
                    <ul className="space-y-3">
                      {jobAlerts.map(alert => (
                        <li key={alert.id} className="text-sm flex justify-between">
                          <div>
                            <div className="font-medium hover:text-primary cursor-pointer">{alert.title}</div>
                            <div className="text-gray-500">{alert.frequency}</div>
                          </div>
                          <div className="text-primary cursor-pointer">Edit</div>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-gray-500">No job alerts set up.</p>
                  )}
                </div>
              </div>

              {/* Main job listings area */}
              <div className="lg:w-3/4">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                  <div className="mb-4 md:mb-0">
                    <h2 className="text-2xl font-semibold">{jobListings.length} Semiconductor Jobs</h2>
                    <p className="text-gray-600">Find your next opportunity in chip design</p>
                  </div>
                  <div className="flex space-x-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="bg-primary hover:bg-primary/90">
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
                    <Button variant="outline" onClick={() => setIsFiltersOpen(!isFiltersOpen)}>
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
                      <Bookmark className="mx-auto h-12 w-12 text-gray-400 mb-4" />
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

                {/* LinkedIn-like Recent Job Activity Table */}
                <div className="bg-white rounded-lg shadow-md p-6 mt-8">
                  <h3 className="font-semibold text-xl mb-4">Recent Job Activity</h3>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Job Title</TableHead>
                        <TableHead>Company</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Date</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Senior RTL Design Engineer</TableCell>
                        <TableCell>Qualcomm Inc.</TableCell>
                        <TableCell>
                          <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">
                            Application viewed
                          </span>
                        </TableCell>
                        <TableCell>Apr 25, 2025</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">FPGA Design Verification Engineer</TableCell>
                        <TableCell>Intel Corporation</TableCell>
                        <TableCell>
                          <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                            Interview scheduled
                          </span>
                        </TableCell>
                        <TableCell>Apr 22, 2025</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Physical Design Engineer</TableCell>
                        <TableCell>TSMC</TableCell>
                        <TableCell>
                          <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                            Applied
                          </span>
                        </TableCell>
                        <TableCell>Apr 18, 2025</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Jobs;
