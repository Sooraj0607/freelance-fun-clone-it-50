
import React, { useState } from 'react';
import { Calendar, DollarSign, Clock, MapPin, Briefcase, Users, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import BidForm from '@/components/BidForm';
import type { ProjectType } from '@/data/mockData';

interface ProjectCardProps {
  project: ProjectType;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isBidDialogOpen, setBidDialogOpen] = useState(false);
  const [isDetailsOpen, setDetailsOpen] = useState(false);

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="pt-6">
        <div className="flex justify-between items-start">
          <div>
            <div className="flex items-center mb-2">
              <h3 className="font-semibold text-lg mr-3">{project.title}</h3>
              {project.status === 'open' && (
                <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                  Open
                </Badge>
              )}
            </div>
            
            <div className="flex items-center text-sm text-muted-foreground mb-4 flex-wrap gap-y-1">
              <div className="flex items-center mr-4">
                <Briefcase className="h-4 w-4 mr-1" />
                <span>{project.companyName}</span>
              </div>
              <div className="flex items-center mr-4">
                <Clock className="h-4 w-4 mr-1" />
                <span>Posted {project.postedDate}</span>
              </div>
              <div className="flex items-center mr-4">
                <Calendar className="h-4 w-4 mr-1" />
                <span>Deadline: {project.deadline}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{project.location}</span>
              </div>
            </div>
          </div>
        </div>
        
        <p className={`text-gray-600 mb-3 ${isDetailsOpen ? '' : 'line-clamp-2'}`}>
          {project.description}
        </p>
        
        {!isDetailsOpen && (
          <Button variant="link" className="p-0 h-auto mb-4" onClick={() => setDetailsOpen(true)}>
            Read more
          </Button>
        )}
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
          <div>
            <p className="text-sm text-muted-foreground">Budget</p>
            <div className="flex items-center">
              <DollarSign className="h-4 w-4 text-success mr-1" />
              <span className="font-medium">{project.budget}</span>
            </div>
          </div>
          
          <div>
            <p className="text-sm text-muted-foreground">Duration</p>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>{project.duration}</span>
            </div>
          </div>
          
          <div>
            <p className="text-sm text-muted-foreground">Proposals</p>
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-1" />
              <span>{project.bids} bids</span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-2">
          {project.skills.map((skill, index) => (
            <Badge key={index} variant="outline" className="bg-primary/10">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="border-t pt-4 flex justify-between items-center">
        <div>
          {project.screeningTest && (
            <Badge variant="outline" className="bg-yellow-100 text-yellow-800 border-yellow-200">
              Requires Screening Test
            </Badge>
          )}
        </div>
        <Button onClick={() => setBidDialogOpen(true)} className="flex items-center">
          Place a Bid <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
      
      {/* Bid Dialog */}
      <Dialog open={isBidDialogOpen} onOpenChange={setBidDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Submit a Bid for Project</DialogTitle>
            <DialogDescription>
              Provide your proposed terms for "{project.title}"
            </DialogDescription>
          </DialogHeader>
          <BidForm project={project} onSubmitSuccess={() => setBidDialogOpen(false)} />
        </DialogContent>
      </Dialog>
    </Card>
  );
};

export default ProjectCard;
