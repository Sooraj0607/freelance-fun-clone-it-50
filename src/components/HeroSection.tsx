
import React, { useState, useEffect } from 'react';
import { Search, Zap, Code, Cpu, Database, Layers, Microchip, Circuit } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState('work');
  const [currentWord, setCurrentWord] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [text, setText] = useState('');
  
  const specialties = [
    'ASIC design',
    'RTL development',
    'chip verification',
    'FPGA implementation',
    'analog layout'
  ];

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (isTyping) {
      const targetText = specialties[currentWord];
      if (text.length < targetText.length) {
        timeout = setTimeout(() => {
          setText(targetText.substring(0, text.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => {
          setText(text.substring(0, text.length - 1));
        }, 50);
      } else {
        timeout = setTimeout(() => {
          setCurrentWord((currentWord + 1) % specialties.length);
          setIsTyping(true);
        }, 500);
      }
    }
    
    return () => clearTimeout(timeout);
  }, [text, currentWord, isTyping]);

  return (
    <div className="bg-gradient-to-r from-primary/10 to-primary/5 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="heading-xl mb-6">
            Find the perfect <span className="text-primary">semiconductor</span> expert for
            <div className="h-10 inline-block ml-2">
              <span className="text-primary inline-block min-w-[280px] text-left">{text}<span className="animate-pulse">|</span></span>
            </div>
          </h1>
          <p className="text-xl text-gray-600 mb-8">Connect with top silicon design specialists and leading semiconductor companies on the industry's premier talent platform</p>
          
          {/* Tab Selection */}
          <div className="inline-flex rounded-lg border border-gray-200 bg-white p-1 mb-6">
            <button
              className={`px-4 py-2 rounded-md ${activeTab === 'work' ? 'bg-primary text-white' : 'text-gray-600'}`}
              onClick={() => setActiveTab('work')}
            >
              Find IC Projects
            </button>
            <button
              className={`px-4 py-2 rounded-md ${activeTab === 'talent' ? 'bg-primary text-white' : 'text-gray-600'}`}
              onClick={() => setActiveTab('talent')}
            >
              Hire IC Designers
            </button>
          </div>
          
          {/* Search Bar */}
          <div className="flex items-center w-full max-w-2xl mx-auto">
            <div className="relative w-full">
              <Input 
                type="text" 
                placeholder={activeTab === 'work' ? "Search for semiconductor jobs..." : "Search for VLSI skills..."}
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
            {['ASIC Design', 'RTL Design', 'Verification', 'Physical Design', 'SoC Architecture'].map((item, index) => (
              <a 
                key={index}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="inline-block mr-3 hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
          
          {/* Tech Icons */}
          <div className="flex justify-center mt-10 gap-8">
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="p-3 bg-white rounded-full shadow-md group-hover:shadow-lg group-hover:-translate-y-1 transition-all duration-300">
                <Cpu className="h-6 w-6 text-primary" />
              </div>
              <span className="text-sm mt-2 text-gray-600">SoC Design</span>
            </div>
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="p-3 bg-white rounded-full shadow-md group-hover:shadow-lg group-hover:-translate-y-1 transition-all duration-300">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <span className="text-sm mt-2 text-gray-600">RTL Design</span>
            </div>
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="p-3 bg-white rounded-full shadow-md group-hover:shadow-lg group-hover:-translate-y-1 transition-all duration-300">
                <Microchip className="h-6 w-6 text-primary" />
              </div>
              <span className="text-sm mt-2 text-gray-600">Analog IC</span>
            </div>
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="p-3 bg-white rounded-full shadow-md group-hover:shadow-lg group-hover:-translate-y-1 transition-all duration-300">
                <Layers className="h-6 w-6 text-primary" />
              </div>
              <span className="text-sm mt-2 text-gray-600">Layout Design</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
