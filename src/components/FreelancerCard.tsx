
import React from 'react';
import { Star, CheckCircle, Cpu } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import type { Freelancer } from '@/data/mockData';

interface FreelancerCardProps {
  freelancer: Freelancer;
}

const FreelancerCard: React.FC<FreelancerCardProps> = ({ freelancer }) => {
  return (
    <Card className="card-hover">
      <CardContent className="pt-6">
        <div className="flex items-center mb-4">
          <Avatar className="h-12 w-12 mr-4">
            <AvatarImage src={freelancer.avatar} alt={freelancer.name} />
            <AvatarFallback>{freelancer.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <div className="flex items-center">
              <h3 className="font-semibold">{freelancer.name}</h3>
              {freelancer.rating > 4.7 && (
                <span className="ml-2 bg-primary/10 text-primary text-xs px-2 py-0.5 rounded-full flex items-center">
                  <Cpu className="h-3 w-3 mr-1" /> IC Expert
                </span>
              )}
            </div>
            <p className="text-sm text-muted-foreground">{freelancer.title}</p>
          </div>
        </div>

        <div className="flex items-center mb-3">
          <div className="flex items-center mr-4">
            <Star className="h-4 w-4 text-yellow-500 mr-1 fill-yellow-500" />
            <span className="font-medium">{freelancer.rating}</span>
            <span className="text-muted-foreground text-sm ml-1">({freelancer.completedJobs} projects)</span>
          </div>
          <div className="font-medium">{freelancer.hourlyRate}/hr</div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {freelancer.skills.slice(0, 3).map((skill, index) => (
            <span key={index} className="badge">{skill}</span>
          ))}
          {freelancer.skills.length > 3 && (
            <span className="badge">+{freelancer.skills.length - 3} more</span>
          )}
        </div>

        <p className="text-xs text-gray-500 mb-3">
          <CheckCircle className="h-3 w-3 inline mr-1 text-green-500" />
          Verified Semiconductor Expert
        </p>
      </CardContent>

      <CardFooter className="border-t pt-4">
        <Button variant="outline" className="mr-2 flex-1">View Profile</Button>
        <Button className="flex-1">Contact</Button>
      </CardFooter>
    </Card>
  );
};

export default FreelancerCard;
