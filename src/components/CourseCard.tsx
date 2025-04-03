
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BookOpen, Award, Clock, DollarSign } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

export interface CourseType {
  id: string;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  category: string;
  price: number;
  isFree: boolean;
  image: string;
  progress?: number;
  certificateAvailable: boolean;
}

interface CourseCardProps {
  course: CourseType;
  enrolled?: boolean;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, enrolled = false }) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow h-full flex flex-col">
      <div className="relative h-40 bg-gray-100">
        <img
          src={course.image || '/placeholder.svg'}
          alt={course.title}
          className="w-full h-full object-cover"
        />
        {course.isFree ? (
          <Badge variant="secondary" className="absolute top-2 right-2 bg-green-100 text-green-800">
            Free
          </Badge>
        ) : (
          <Badge variant="secondary" className="absolute top-2 right-2 bg-blue-100 text-blue-800">
            Premium
          </Badge>
        )}
      </div>
      
      <CardContent className="pt-4 flex-grow">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">{course.title}</h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{course.description}</p>
        
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <Clock className="h-4 w-4 mr-1" />
          <span>{course.duration}</span>
        </div>
        
        {enrolled && course.progress !== undefined && (
          <div className="mb-4">
            <div className="flex justify-between text-sm mb-1">
              <span>Progress</span>
              <span>{course.progress}%</span>
            </div>
            <Progress value={course.progress} className="h-2" />
          </div>
        )}
        
        <div className="flex items-center text-sm mb-2">
          {course.certificateAvailable && (
            <div className="flex items-center text-emerald-600 mr-3">
              <Award className="h-4 w-4 mr-1" />
              <span className="text-xs">Certificate</span>
            </div>
          )}
          
          <div className="flex items-center">
            <BookOpen className="h-4 w-4 mr-1 text-primary" />
            <span className="text-xs">{course.category}</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="border-t pt-3 flex justify-between items-center">
        <div className="text-sm font-medium">
          {course.isFree ? (
            <span className="text-green-600">Free</span>
          ) : (
            <div className="flex items-center">
              <DollarSign className="h-4 w-4 text-blue-600" />
              <span className="text-blue-600">{course.price.toFixed(2)}</span>
            </div>
          )}
        </div>
        
        <Button variant={enrolled ? "outline" : "default"} size="sm">
          {enrolled ? "Continue" : "Enroll Now"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
