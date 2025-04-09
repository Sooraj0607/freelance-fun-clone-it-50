
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BookOpen, Award, Clock, DollarSign, Star, Users } from 'lucide-react';
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
  rating?: number;
  studentsCount?: number;
  level?: string;
  lastUpdated?: string;
}

interface CourseCardProps {
  course: CourseType;
  enrolled?: boolean;
  onClick?: () => void;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, enrolled = false, onClick }) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      navigate(`/courses/${course.id}`);
    }
  };
  
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow h-full flex flex-col">
      <div className="relative h-40 bg-gray-100 cursor-pointer" onClick={handleClick}>
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
        {course.level && (
          <Badge variant="outline" className="absolute bottom-2 left-2 bg-white/80 text-gray-800 text-xs">
            {course.level}
          </Badge>
        )}
      </div>
      
      <CardContent className="pt-4 flex-grow">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2 cursor-pointer hover:text-primary" onClick={handleClick}>{course.title}</h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{course.description}</p>
        
        <div className="flex items-center text-sm mb-3">
          <p className="text-gray-600 text-xs">By <span className="font-medium">{course.instructor}</span></p>
        </div>
        
        {course.rating && (
          <div className="flex items-center mb-2">
            <div className="flex text-yellow-400 mr-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3 w-3" fill={i < Math.floor(course.rating!) ? "currentColor" : "none"} />
              ))}
            </div>
            <span className="text-xs font-medium">{course.rating.toFixed(1)}</span>
            {course.studentsCount && (
              <div className="flex items-center ml-3 text-gray-500">
                <Users className="h-3 w-3 mr-1" />
                <span className="text-xs">{course.studentsCount.toLocaleString()} students</span>
              </div>
            )}
          </div>
        )}
        
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <Clock className="h-4 w-4 mr-1" />
          <span>{course.duration}</span>
        </div>
        
        {enrolled && course.progress !== undefined && (
          <div className="mb-4">
            <div className="flex justify-between text-sm mb-1">
              <span className="font-medium">Progress</span>
              <span className="text-primary font-medium">{course.progress}%</span>
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
        
        {course.lastUpdated && (
          <p className="text-xs text-gray-500 mt-1">Updated {course.lastUpdated}</p>
        )}
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
        
        <Button 
          variant={enrolled ? "outline" : "default"} 
          size="sm"
          onClick={handleClick}
        >
          {enrolled ? "Continue" : "Enroll Now"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
