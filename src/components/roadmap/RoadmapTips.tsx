
import React from 'react';

interface RoadmapTipsProps {
  tips: string[];
}

const RoadmapTips = ({ tips }: RoadmapTipsProps) => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg mt-6">
      <h3 className="font-semibold text-lg mb-3 text-primary">General Tips Across Domains</h3>
      <ul className="list-disc pl-5 space-y-2">
        {tips.map((tip, idx) => (
          <li key={idx} className="text-gray-700">{tip}</li>
        ))}
      </ul>
    </div>
  );
};

export default RoadmapTips;
