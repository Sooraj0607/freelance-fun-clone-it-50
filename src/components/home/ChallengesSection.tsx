
import React from "react";
import { Code, Brain, LineChart, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";

const CHALLENGES = [
  {
    icon: <Code className="h-6 w-6 text-blue-600" />,
    title: "Coding Challenges",
    desc: "Test your RTL and verification skills"
  },
  {
    icon: <Brain className="h-6 w-6 text-purple-600" />,
    title: "Design Problems",
    desc: "Solve real-world IC design cases"
  },
  {
    icon: <LineChart className="h-6 w-6 text-green-600" />,
    title: "Hackathons",
    desc: "Compete in chip design contests"
  },
  {
    icon: <Cpu className="h-6 w-6 text-red-600" />,
    title: "Lab Projects",
    desc: "Hands-on FPGA implementations"
  }
];

const ChallengesSection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="heading-lg text-center mb-4">Technical Challenges</h2>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Put your semiconductor skills to the test with our diverse range of technical challenges
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {CHALLENGES.map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                {item.icon}
                <h3 className="font-semibold ml-2">{item.title}</h3>
              </div>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button>Start a Challenge</Button>
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;
