
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { BookOpen, Building, MapPin, Clock, DollarSign, Star } from 'lucide-react';

// Define the Job type
type Job = {
  id: string;
  title: string;
  companyName: string;
  location: string;
  salaryRange: string;
  jobType: string;
  remote: boolean;
  experience: string;
  tags: string[];
  postedDate: string;
  logo?: string;
};

interface JobListingsSectionProps {
  jobs: Job[];
  visibleSections?: Record<string, boolean>;
}

const JobListingsSection: React.FC<JobListingsSectionProps> = ({ jobs, visibleSections }) => {
  const [savedJobs, setSavedJobs] = useState<string[]>([]);

  const toggleSaveJob = (jobId: string) => {
    if (savedJobs.includes(jobId)) {
      setSavedJobs(savedJobs.filter(id => id !== jobId));
    } else {
      setSavedJobs([...savedJobs, jobId]);
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Job Listings</h2>
      {jobs.length === 0 ? (
        <div className="text-center p-10 bg-white rounded-lg shadow-sm">
          <BookOpen className="h-12 w-12 text-gray-300 mx-auto mb-3" />
          <h3 className="text-lg font-medium mb-1">No jobs found</h3>
          <p className="text-gray-500">Try adjusting your filters or search criteria</p>
        </div>
      ) : (
        <div className="space-y-4">
          {jobs.map((job) => (
            <Card key={job.id} className="hover:shadow-md transition-all">
              <CardContent className="p-0">
                <div className="p-6 flex flex-col md:flex-row gap-4">
                  <div className="md:w-1/6 flex justify-center items-center">
                    <Avatar className="h-16 w-16">
                      <AvatarFallback className="bg-primary/10 text-primary">
                        {job.companyName.substring(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="md:w-3/6 flex-grow">
                    <h3 className="font-semibold text-lg mb-1">{job.title}</h3>
                    <div className="flex items-center gap-2 text-gray-600 text-sm mb-2">
                      <Building className="h-4 w-4" />
                      <span>{job.companyName}</span>
                      <span>•</span>
                      <MapPin className="h-4 w-4" />
                      <span>{job.location}</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-100">
                        {job.jobType}
                      </Badge>
                      {job.remote && (
                        <Badge variant="outline" className="bg-green-50 text-green-700 hover:bg-green-100">
                          Remote
                        </Badge>
                      )}
                      <Badge variant="outline" className="bg-gray-50 text-gray-700 hover:bg-gray-100">
                        {job.experience}
                      </Badge>
                      {job.tags.slice(0, 2).map((tag, index) => (
                        <Badge key={index} variant="outline" className="bg-violet-50 text-violet-700 hover:bg-violet-100">
                          {tag}
                        </Badge>
                      ))}
                      {job.tags.length > 2 && (
                        <Badge variant="outline" className="bg-gray-50 text-gray-700 hover:bg-gray-100">
                          +{job.tags.length - 2}
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <DollarSign className="h-4 w-4 mr-1" />
                        <span>{job.salaryRange}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{job.postedDate}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="md:w-1/6 flex flex-col gap-2 md:justify-center items-center md:border-l md:pl-4">
                    <Button className="w-full">Apply Now</Button>
                    <Button 
                      variant="outline" 
                      className="w-full flex items-center justify-center"
                      onClick={() => toggleSaveJob(job.id)}
                    >
                      <Star 
                        className={`h-4 w-4 mr-2 ${savedJobs.includes(job.id) ? 'fill-yellow-500 text-yellow-500' : ''}`} 
                      />
                      {savedJobs.includes(job.id) ? 'Saved' : 'Save'}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
      
      {jobs.length > 0 && (
        <div className="flex justify-center mt-8">
          <Button variant="outline" className="mx-1">Previous</Button>
          <Button variant="outline" className="mx-1 bg-primary text-white">1</Button>
          <Button variant="outline" className="mx-1">2</Button>
          <Button variant="outline" className="mx-1">3</Button>
          <Button variant="outline" className="mx-1">Next</Button>
        </div>
      )}
    </div>
  );
};

export default JobListingsSection;
