
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import JobListingsSection from '@/components/JobListingsSection';
import PostJobForm from '@/components/PostJobForm';
import { jobListings } from '@/data/mockData';
import { 
  Search, MapPin, Briefcase, Filter, SlidersHorizontal, Bookmark, Bell, 
  Building, GraduationCap, CalendarClock, ChevronDown, Zap, Award
} from 'lucide-react';
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
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [experienceLevel, setExperienceLevel] = useState('All');
  const [jobType, setJobType] = useState('All');
  const [scrolled, setScrolled] = useState(false);
  
  // New states for LinkedIn-like features
  const [savedSearches, setSavedSearches] = useState([
    { id: 1, name: "ASIC Design", location: "San Jose, CA" },
    { id: 2, name: "RTL Verification", location: "Austin, TX" },
  ]);
  
  const [jobAlerts, setJobAlerts] = useState([
    { id: 1, title: "New jobs for FPGA Engineer", frequency: "Daily", active: true },
    { id: 2, title: "Verification Engineer jobs", frequency: "Weekly", active: true },
  ]);
  
  const [activeTab, setActiveTab] = useState("all");

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    } else {
      toast({
        title: "Cannot save empty search",
        description: "Please enter at least a job title or keyword",
        variant: "destructive",
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
    } else {
      toast({
        title: "Cannot create alert",
        description: "Please enter at least a job title or keyword",
        variant: "destructive",
      });
    }
  };
  
  // Filter jobs based on active tab
  const getFilteredJobs = () => {
    switch(activeTab) {
      case "saved":
        return [];
      case "applied":
        return [];
      case "remote":
        return jobListings.filter(job => 
          job.description.toLowerCase().includes('remote')
        );
      default:
        return jobListings;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section - Improved UI */}
        <section className="bg-gradient-to-r from-primary/10 via-primary/5 to-white py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center mb-8">
              <h1 className="heading-xl mb-6">Find Your Dream Semiconductor Career</h1>
              <p className="text-xl text-gray-600 mb-8">
                Browse thousands of semiconductor and IC design jobs from industry-leading companies
              </p>
              
              <form onSubmit={handleSearch} 
                className={cn(
                  "bg-white p-6 rounded-xl shadow-lg border border-gray-100 transition-all duration-300",
                  scrolled ? "shadow-md" : ""
                )}
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                  <div className="md:col-span-5 form-input-wrapper">
                    <Search className="form-input-icon" />
                    <Input 
                      type="text" 
                      placeholder="Search job titles or keywords"
                      className="form-input-with-icon h-12"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <div className="md:col-span-4 form-input-wrapper">
                    <MapPin className="form-input-icon" />
                    <Input 
                      type="text" 
                      placeholder="Location"
                      className="form-input-with-icon h-12"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </div>
                  <div className="md:col-span-3">
                    <Button type="submit" className="w-full h-12 text-base font-medium">
                      Find Jobs
                    </Button>
                  </div>
                </div>
                
                <div className="flex flex-wrap justify-between items-center mt-4 gap-2">
                  <div className="flex flex-wrap gap-4">
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
                    <ChevronDown className={cn(
                      "h-4 w-4 ml-1 transition-transform", 
                      isFiltersOpen ? "rotate-180" : ""
                    )} />
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
                    
                    <div className="md:col-span-3 border-t pt-4 flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="remote-only" />
                        <label htmlFor="remote-only" className="text-sm cursor-pointer">
                          Remote only
                        </label>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" onClick={() => {
                          setExperienceLevel('All');
                          setJobType('All');
                        }}>
                          Reset
                        </Button>
                        <Button size="sm">Apply Filters</Button>
                      </div>
                    </div>
                  </div>
                )}
              </form>
              
              {/* Job search stats */}
              <div className="flex flex-wrap justify-center gap-6 mt-6">
                <div className="flex items-center text-sm text-gray-600">
                  <Briefcase className="h-4 w-4 mr-1 text-primary" />
                  <span><strong>2,500+</strong> Jobs available</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Building className="h-4 w-4 mr-1 text-primary" />
                  <span><strong>430</strong> Companies hiring</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Award className="h-4 w-4 mr-1 text-primary" />
                  <span><strong>95%</strong> Success rate</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content - Enhanced with LinkedIn-like features */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Left sidebar - LinkedIn-like feature */}
              <div className="lg:w-1/4">
                <div className="card-shadow p-5 mb-6">
                  <h3 className="font-semibold text-lg mb-4 flex items-center">
                    <Building className="mr-2 h-5 w-5 text-primary" />
                    Job Seeking Guidance
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm text-gray-600 hover:text-primary cursor-pointer p-2 rounded-md hover:bg-gray-50">
                      <GraduationCap className="h-4 w-4 mr-2" />
                      Recommended skills
                    </li>
                    <li className="flex items-center text-sm text-gray-600 hover:text-primary cursor-pointer p-2 rounded-md hover:bg-gray-50">
                      <CalendarClock className="h-4 w-4 mr-2" />
                      Interview preparation
                    </li>
                    <li className="flex items-center text-sm text-gray-600 hover:text-primary cursor-pointer p-2 rounded-md hover:bg-gray-50">
                      <Briefcase className="h-4 w-4 mr-2" />
                      Resume builder
                    </li>
                    <li className="flex items-center text-sm text-gray-600 hover:text-primary cursor-pointer p-2 rounded-md hover:bg-gray-50">
                      <Zap className="h-4 w-4 mr-2" />
                      Career assessments
                    </li>
                  </ul>
                </div>

                <div className="card-shadow p-5 mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-semibold text-lg">Saved Searches</h3>
                    {savedSearches.length > 0 && (
                      <Button variant="ghost" size="sm" className="text-xs h-7">
                        Manage
                      </Button>
                    )}
                  </div>
                  {savedSearches.length > 0 ? (
                    <ul className="space-y-3">
                      {savedSearches.map(search => (
                        <li key={search.id} className="p-2 hover:bg-gray-50 rounded-md">
                          <div className="font-medium text-primary hover:underline cursor-pointer">{search.name}</div>
                          <div className="text-xs text-gray-500 flex items-center mt-1">
                            <MapPin className="h-3 w-3 mr-1" />{search.location}
                          </div>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-gray-500">No saved searches yet.</p>
                  )}
                </div>

                <div className="card-shadow p-5">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-semibold text-lg">Job Alerts</h3>
                    {jobAlerts.length > 0 && (
                      <Button variant="ghost" size="sm" className="text-xs h-7">
                        Manage
                      </Button>
                    )}
                  </div>
                  {jobAlerts.length > 0 ? (
                    <ul className="space-y-3">
                      {jobAlerts.map(alert => (
                        <li key={alert.id} className="p-2 hover:bg-gray-50 rounded-md">
                          <div className="flex justify-between">
                            <div>
                              <div className="font-medium hover:text-primary cursor-pointer">{alert.title}</div>
                              <div className="text-xs text-gray-500 flex items-center mt-1">
                                <Bell className="h-3 w-3 mr-1" />{alert.frequency}
                              </div>
                            </div>
                            <div className="text-primary cursor-pointer text-sm">Edit</div>
                          </div>
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
                    <h2 className="text-2xl font-semibold">{getFilteredJobs().length} Semiconductor Jobs</h2>
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
                
                <Tabs defaultValue="all" className="mb-8" onValueChange={setActiveTab}>
                  <div className="bg-white rounded-lg p-1 shadow-sm border border-gray-100 mb-6">
                    <TabsList className="w-full grid grid-cols-4 bg-transparent">
                      <TabsTrigger value="all" className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary data-[state=active]:shadow-none rounded-md">All Jobs</TabsTrigger>
                      <TabsTrigger value="saved" className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary data-[state=active]:shadow-none rounded-md">Saved Jobs</TabsTrigger>
                      <TabsTrigger value="applied" className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary data-[state=active]:shadow-none rounded-md">Applied Jobs</TabsTrigger>
                      <TabsTrigger value="remote" className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary data-[state=active]:shadow-none rounded-md">Remote Only</TabsTrigger>
                    </TabsList>
                  </div>
                  
                  <TabsContent value="all" className="mt-0">
                    <JobListingsSection 
                      visibleSections={{ jobs: true }}
                      jobListings={getFilteredJobs()} 
                    />
                  </TabsContent>
                  
                  <TabsContent value="saved" className="mt-0">
                    <div className="text-center py-12 bg-white rounded-lg card-shadow">
                      <Bookmark className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                      <h3 className="text-xl font-medium mb-2">No saved jobs yet</h3>
                      <p className="text-gray-600 mb-4">Jobs you save will appear here</p>
                      <Button variant="outline" onClick={() => setActiveTab("all")}>
                        Browse All Jobs
                      </Button>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="applied" className="mt-0">
                    <div className="text-center py-12 bg-white rounded-lg card-shadow">
                      <Briefcase className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                      <h3 className="text-xl font-medium mb-2">No job applications yet</h3>
                      <p className="text-gray-600 mb-4">Jobs you apply to will appear here</p>
                      <Button variant="outline" onClick={() => setActiveTab("all")}>
                        Browse All Jobs
                      </Button>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="remote" className="mt-0">
                    <JobListingsSection 
                      visibleSections={{ jobs: true }}
                      jobListings={getFilteredJobs()} 
                    />
                  </TabsContent>
                </Tabs>

                {/* LinkedIn-like Recent Job Activity Table */}
                <div className="card-shadow p-6 mt-8">
                  <div className="flex justify-between items-center mb-5">
                    <h3 className="font-semibold text-xl">Recent Job Activity</h3>
                    <Button variant="ghost" size="sm">View all</Button>
                  </div>
                  <div className="overflow-hidden rounded-lg border border-gray-200">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-gray-50">
                          <TableHead className="font-medium">Job Title</TableHead>
                          <TableHead className="font-medium">Company</TableHead>
                          <TableHead className="font-medium">Status</TableHead>
                          <TableHead className="font-medium">Date</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow className="hover:bg-gray-50">
                          <TableCell className="font-medium text-primary">
                            Senior RTL Design Engineer
                          </TableCell>
                          <TableCell>Qualcomm Inc.</TableCell>
                          <TableCell>
                            <span className="status-badge status-badge-warning">
                              Application viewed
                            </span>
                          </TableCell>
                          <TableCell className="text-gray-500 text-sm">Apr 25, 2025</TableCell>
                        </TableRow>
                        <TableRow className="hover:bg-gray-50">
                          <TableCell className="font-medium text-primary">
                            FPGA Design Verification Engineer
                          </TableCell>
                          <TableCell>Intel Corporation</TableCell>
                          <TableCell>
                            <span className="status-badge status-badge-success">
                              Interview scheduled
                            </span>
                          </TableCell>
                          <TableCell className="text-gray-500 text-sm">Apr 22, 2025</TableCell>
                        </TableRow>
                        <TableRow className="hover:bg-gray-50">
                          <TableCell className="font-medium text-primary">
                            Physical Design Engineer
                          </TableCell>
                          <TableCell>TSMC</TableCell>
                          <TableCell>
                            <span className="status-badge status-badge-info">
                              Applied
                            </span>
                          </TableCell>
                          <TableCell className="text-gray-500 text-sm">Apr 18, 2025</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
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
