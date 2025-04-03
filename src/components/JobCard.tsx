
import React from 'react';
import { Clock, DollarSign, Bookmark } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Job } from '@/data/mockData';

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <Card className="card-hover">
      <CardContent className="pt-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-lg mb-2">{job.title}</h3>
            <div className="flex items-center text-sm text-muted-foreground mb-2">
              <Clock className="h-4 w-4 mr-1" />
              <span>{job.postedDate}</span>
              <span className="mx-2">•</span>
              <span>{job.postedBy}</span>
            </div>
          </div>
          <Button variant="ghost" size="icon">
            <Bookmark className="h-5 w-5" />
          </Button>
        </div>
        
        <p className="text-gray-600 mb-3 line-clamp-2">{job.description}</p>
        
        <div className="flex items-center mb-4">
          <DollarSign className="h-4 w-4 text-success mr-1" />
          <span className="font-medium">{job.budget}</span>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-2">
          {job.skills.map((skill, index) => (
            <span key={index} className="badge">{skill}</span>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="border-t pt-4 flex justify-between">
        <div className="text-sm text-muted-foreground">
          <span className="px-2 py-1 bg-secondary rounded text-secondary-foreground mr-2">
            {job.category}
          </span>
        </div>
        <Button>Apply Now</Button>
      </CardFooter>
    </Card>
  );
};

export default JobCard;
