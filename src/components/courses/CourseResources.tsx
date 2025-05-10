
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Download, FileText, Search, BookOpen, FileImage } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

// Mock resource data
const mockResources = [
  {
    id: '1',
    title: 'Complete Course Slides',
    description: 'All lecture slides in PDF format',
    type: 'pdf',
    size: '15.4 MB',
    downloadCount: 1240
  },
  {
    id: '2',
    title: 'Lab Exercise Files',
    description: 'Source code and lab exercises',
    type: 'zip',
    size: '8.2 MB',
    downloadCount: 876
  },
  {
    id: '3',
    title: 'Design Reference Guide',
    description: 'Comprehensive reference for semiconductor design',
    type: 'pdf',
    size: '4.7 MB',
    downloadCount: 1542
  },
  {
    id: '4',
    title: 'Project Templates',
    description: 'Starter templates for course projects',
    type: 'zip',
    size: '12.1 MB',
    downloadCount: 653
  },
  {
    id: '5',
    title: 'Circuit Diagrams Collection',
    description: 'High-resolution circuit diagrams used in lectures',
    type: 'images',
    size: '22.8 MB',
    downloadCount: 421
  }
];

// Supplementary reading materials
const readingMaterials = [
  {
    id: '1',
    title: 'Introduction to Modern VLSI Design',
    author: 'John Smith',
    description: 'Comprehensive overview of VLSI design principles',
    pages: 42
  },
  {
    id: '2',
    title: 'Advanced Signal Processing Techniques',
    author: 'Maria Garcia',
    description: 'Detailed guide to signal processing in semiconductor design',
    pages: 28
  },
  {
    id: '3',
    title: 'Optimization Methods in Circuit Design',
    author: 'Robert Johnson',
    description: 'Methods to optimize circuit performance and power consumption',
    pages: 35
  }
];

interface CourseResourcesProps {
  courseId?: string;
}

const CourseResources: React.FC<CourseResourcesProps> = ({ courseId }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const { toast } = useToast();

  const handleDownload = (resourceName: string) => {
    toast({
      title: "Download Started",
      description: `${resourceName} is downloading...`,
      variant: "default",
    });
  };

  const filteredResources = mockResources.filter(resource => 
    resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    resource.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredReadings = readingMaterials.filter(material => 
    material.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    material.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    material.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <h2 className="text-2xl font-bold">Course Resources</h2>
        <div className="relative w-full md:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search resources..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <Tabs defaultValue="downloads" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="downloads">Downloadable Files</TabsTrigger>
          <TabsTrigger value="readings">Reading Materials</TabsTrigger>
          <TabsTrigger value="tools">Tools & Software</TabsTrigger>
        </TabsList>
        
        <TabsContent value="downloads">
          <div className="space-y-4">
            {filteredResources.length > 0 ? (
              filteredResources.map((resource) => (
                <Card key={resource.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-0">
                    <div className="flex items-center p-4">
                      <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mr-4">
                        {resource.type === 'pdf' ? (
                          <FileText className="h-6 w-6" />
                        ) : resource.type === 'images' ? (
                          <FileImage className="h-6 w-6" />
                        ) : (
                          <FileText className="h-6 w-6" />
                        )}
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-medium">{resource.title}</h3>
                        <p className="text-sm text-gray-500">{resource.description}</p>
                        <div className="flex items-center gap-4 mt-1 text-xs text-gray-500">
                          <span>{resource.type.toUpperCase()} • {resource.size}</span>
                          <span>{resource.downloadCount} downloads</span>
                        </div>
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex items-center gap-2"
                        onClick={() => handleDownload(resource.title)}
                      >
                        <Download className="h-4 w-4" /> Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="text-center py-8">
                <FileText className="h-12 w-12 text-gray-300 mx-auto mb-2" />
                <h3 className="text-lg font-medium mb-1">No matching resources</h3>
                <p className="text-gray-500">Try adjusting your search query</p>
              </div>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="readings">
          <div className="space-y-4">
            {filteredReadings.length > 0 ? (
              filteredReadings.map((material) => (
                <Card key={material.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-0">
                    <div className="flex items-center p-4">
                      <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mr-4">
                        <BookOpen className="h-6 w-6" />
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-medium">{material.title}</h3>
                        <p className="text-xs text-gray-500">By {material.author}</p>
                        <p className="text-sm text-gray-700 mt-1">{material.description}</p>
                        <div className="flex items-center gap-4 mt-1 text-xs text-gray-500">
                          <span>{material.pages} pages</span>
                        </div>
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex items-center gap-2"
                      >
                        <BookOpen className="h-4 w-4" /> Read
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="text-center py-8">
                <BookOpen className="h-12 w-12 text-gray-300 mx-auto mb-2" />
                <h3 className="text-lg font-medium mb-1">No matching reading materials</h3>
                <p className="text-gray-500">Try adjusting your search query</p>
              </div>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="tools">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <h3 className="font-medium mb-2">Design Simulator</h3>
                <p className="text-sm text-gray-500 mb-4">Interactive tool for simulating circuit designs</p>
                <Button className="w-full">Access Tool</Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <h3 className="font-medium mb-2">Signal Analyzer</h3>
                <p className="text-sm text-gray-500 mb-4">Software for analyzing signal performance and integrity</p>
                <Button className="w-full">Access Tool</Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <h3 className="font-medium mb-2">IDE Integration</h3>
                <p className="text-sm text-gray-500 mb-4">Tools to integrate with popular code editors</p>
                <Button className="w-full">Download</Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <h3 className="font-medium mb-2">Verification Framework</h3>
                <p className="text-sm text-gray-500 mb-4">Framework for testing and verifying designs</p>
                <Button className="w-full">Access Tool</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <div className="p-4 bg-blue-50 rounded-lg border border-blue-100 mt-8">
        <div className="flex items-start">
          <div className="bg-blue-100 rounded-full p-2 mr-4">
            <BookOpen className="h-5 w-5 text-blue-600" />
          </div>
          <div>
            <h3 className="font-medium text-blue-800 mb-1">Additional Resources</h3>
            <p className="text-sm text-blue-700">All resources are available for download after enrollment. Some specialized tools may require separate installation.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseResources;
