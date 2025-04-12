
import React from 'react';
import { 
  AccordionItem,
  AccordionTrigger,
  AccordionContent 
} from '@/components/ui/accordion';

interface TopicSectionProps {
  title: string;
  items: string[];
}

const TopicSection = ({ title, items }: TopicSectionProps) => (
  <div className="mb-4">
    <h4 className="font-semibold text-primary mb-2">{title}</h4>
    <ul className="list-disc pl-5 space-y-1">
      {items.map((item, idx) => (
        <li key={idx} className="text-gray-700">{item}</li>
      ))}
    </ul>
  </div>
);

interface RoadmapAccordionItemProps {
  value: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  foundationalTopics: string[];
  advancedTopics: string[];
  courses: string[];
  tools: string[];
  projects: string[];
}

const RoadmapAccordionItem = ({
  value,
  title,
  description,
  icon,
  foundationalTopics,
  advancedTopics,
  courses,
  tools,
  projects
}: RoadmapAccordionItemProps) => {
  return (
    <AccordionItem value={value} className="border border-gray-200 rounded-lg mb-4 overflow-hidden">
      <AccordionTrigger className="hover:bg-gray-50 px-4 py-3">
        <div className="flex items-center">
          <div className="bg-primary/10 p-2 rounded-full mr-3">
            {icon}
          </div>
          <div className="text-left">
            <h3 className="font-semibold text-lg">{title}</h3>
            <p className="text-sm text-gray-500">{description}</p>
          </div>
        </div>
      </AccordionTrigger>
      <AccordionContent className="px-4 pb-4 pt-2">
        <div className="grid md:grid-cols-2 gap-4 mt-2">
          <div className="space-y-4">
            <TopicSection title="Foundational Topics" items={foundationalTopics} />
            <TopicSection title="Advanced Topics" items={advancedTopics} />
          </div>
          <div className="space-y-4">
            <TopicSection title="Recommended Courses" items={courses} />
            <TopicSection title="Essential Tools" items={tools} />
            <TopicSection title="Project Ideas" items={projects} />
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};

export default RoadmapAccordionItem;
