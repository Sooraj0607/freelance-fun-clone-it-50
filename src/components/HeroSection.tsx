
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState('work');

  return (
    <div className="bg-gradient-to-r from-primary/10 to-primary/5 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="heading-xl mb-6">Find the perfect <span className="text-primary">freelance</span> services for your business</h1>
          <p className="text-xl text-gray-600 mb-8">Connect with top talent and businesses on the world's leading freelance platform</p>
          
          {/* Tab Selection */}
          <div className="inline-flex rounded-lg border border-gray-200 bg-white p-1 mb-6">
            <button
              className={`px-4 py-2 rounded-md ${activeTab === 'work' ? 'bg-primary text-white' : 'text-gray-600'}`}
              onClick={() => setActiveTab('work')}
            >
              Find Work
            </button>
            <button
              className={`px-4 py-2 rounded-md ${activeTab === 'talent' ? 'bg-primary text-white' : 'text-gray-600'}`}
              onClick={() => setActiveTab('talent')}
            >
              Find Talent
            </button>
          </div>
          
          {/* Search Bar */}
          <div className="flex items-center w-full max-w-2xl mx-auto">
            <div className="relative w-full">
              <Input 
                type="text" 
                placeholder={activeTab === 'work' ? "Search for jobs..." : "Search for skills..."}
                className="pl-10 pr-20 py-6 rounded-l-md rounded-r-none border-r-0 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            </div>
            <Button className="rounded-l-none h-12 px-6">
              Search
            </Button>
          </div>
          
          {/* Popular Searches */}
          <div className="mt-4 text-sm text-gray-600">
            <span className="mr-2">Popular:</span>
            {['Web Development', 'Design', 'Writing', 'Marketing'].map((item, index) => (
              <a 
                key={index}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="inline-block mr-3 hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
