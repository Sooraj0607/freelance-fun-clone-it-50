
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { 
  MessageSquare, 
  Users, 
  Shield, 
  Zap, 
  Cpu, 
  Code, 
  Layers, 
  Microchip, 
  Search,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

interface CommunityGroup {
  id: string;
  name: string;
  platform: 'discord' | 'slack';
  description: string;
  members: number;
  category: string;
  icon: React.ReactNode;
  url: string;
  isPopular?: boolean;
  isNew?: boolean;
}

const communityGroups: CommunityGroup[] = [
  {
    id: '1',
    name: 'RTL Design Masters',
    platform: 'discord',
    description: 'Connect with RTL designers worldwide. Discuss Verilog, VHDL, and SystemVerilog best practices.',
    members: 2456,
    category: 'design',
    icon: <Code className="h-5 w-5 text-indigo-500" />,
    url: 'https://discord.gg/rtldesign',
    isPopular: true,
  },
  {
    id: '2',
    name: 'Verification Experts',
    platform: 'discord',
    description: 'Focused on verification methodologies, UVM, SystemVerilog and coverage-driven verification.',
    members: 1872,
    category: 'verification',
    icon: <Shield className="h-5 w-5 text-green-500" />,
    url: 'https://discord.gg/verification',
    isPopular: true,
  },
  {
    id: '3',
    name: 'Physical Design Hub',
    platform: 'slack',
    description: 'Discussion forum for physical design, floor planning, and place & route experts.',
    members: 1345,
    category: 'design',
    icon: <Layers className="h-5 w-5 text-orange-500" />,
    url: 'https://slack.com/physicaldesign',
  },
  {
    id: '4',
    name: 'ASIC Designers',
    platform: 'discord',
    description: 'For professionals working on Application-Specific Integrated Circuits design and implementation.',
    members: 986,
    category: 'design',
    icon: <Microchip className="h-5 w-5 text-blue-500" />,
    url: 'https://discord.gg/asicdesigners',
  },
  {
    id: '5',
    name: 'SoC Architecture',
    platform: 'discord',
    description: 'Discuss System-on-Chip architecture challenges, solutions and industry trends.',
    members: 1234,
    category: 'architecture',
    icon: <Cpu className="h-5 w-5 text-purple-500" />,
    url: 'https://discord.gg/socarch',
  },
  {
    id: '6',
    name: 'DFT Experts',
    platform: 'slack',
    description: 'Community for Design for Testability specialists focusing on scan chains, ATPG, and BIST.',
    members: 742,
    category: 'testing',
    icon: <Zap className="h-5 w-5 text-yellow-500" />,
    url: 'https://slack.com/dftexperts',
  },
  {
    id: '7',
    name: 'Analog IC Design',
    platform: 'discord',
    description: 'For analog and mixed-signal IC designers to discuss circuits, layout techniques and challenges.',
    members: 653,
    category: 'design',
    icon: <Microchip className="h-5 w-5 text-red-500" />,
    url: 'https://discord.gg/analogic',
    isNew: true,
  },
  {
    id: '8',
    name: 'Semiconductor Career Network',
    platform: 'slack',
    description: 'Career advice, job opportunities, and networking for semiconductor professionals.',
    members: 2890,
    category: 'career',
    icon: <Users className="h-5 w-5 text-blue-500" />,
    url: 'https://slack.com/semicareer',
    isPopular: true,
  },
];

const CommunityGroups = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('all');

  const filteredGroups = communityGroups.filter(group => {
    const matchesSearch = group.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         group.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeTab === 'all' || group.category === activeTab;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Search communities..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <Tabs defaultValue="all" className="w-full md:w-auto" onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full md:w-auto">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="design">Design</TabsTrigger>
            <TabsTrigger value="verification">Verification</TabsTrigger>
            <TabsTrigger value="career">Career</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredGroups.map((group) => (
          <Card key={group.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-200">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className="mr-3 p-2 bg-gray-100 rounded-full">
                    {group.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{group.name}</h3>
                    <div className="flex items-center text-sm text-gray-500">
                      <MessageSquare className="h-4 w-4 mr-1" />
                      <span>{group.platform === 'discord' ? 'Discord' : 'Slack'}</span>
                      <span className="mx-2">•</span>
                      <Users className="h-4 w-4 mr-1" />
                      <span>{group.members.toLocaleString()} members</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  {group.isPopular && (
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                      Popular
                    </Badge>
                  )}
                  {group.isNew && (
                    <Badge variant="secondary" className="bg-green-100 text-green-800 hover:bg-green-200">
                      New
                    </Badge>
                  )}
                </div>
              </div>
              
              <p className="text-gray-600 mb-4 line-clamp-2">{group.description}</p>
              
              <Button variant="outline" className="w-full group" asChild>
                <a href={group.url} target="_blank" rel="noopener noreferrer">
                  Join Community
                  <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {filteredGroups.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-xl font-semibold mb-2">No communities found</h3>
          <p className="text-gray-600">Try adjusting your search or filter criteria</p>
        </div>
      )}

      <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 text-center">
        <h2 className="heading-md mb-4">Want to create your own community?</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Start your own specialized semiconductor community and connect with experts in your field. We'll help you set it up and promote it to our network.
        </p>
        <Button size="lg" className="group">
          Create a Community
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  );
};

export default CommunityGroups;
