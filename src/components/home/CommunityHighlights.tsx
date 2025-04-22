
import React from "react";
import { Users, MessageSquare, Network, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const FEATURES = [
  {
    icon: <Users className="h-12 w-12 text-blue-600" />,
    title: "Join Study Groups",
    desc: "Learn together with peers in your domain"
  },
  {
    icon: <MessageSquare className="h-12 w-12 text-green-600" />,
    title: "Expert Discussions",
    desc: "Participate in technical forums"
  },
  {
    icon: <Network className="h-12 w-12 text-purple-600" />,
    title: "Network",
    desc: "Connect with industry professionals"
  },
  {
    icon: <Share2 className="h-12 w-12 text-orange-600" />,
    title: "Collaborate",
    desc: "Work on shared projects"
  }
];

const CommunityHighlights = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">Join Our Community</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Connect with fellow semiconductor professionals, share knowledge, and grow together
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, idx) => (
            <div key={idx} className="text-center">
              <div className="inline-block p-4 bg-gray-50 rounded-full mb-4">
                {feature.icon}
              </div>
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{feature.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button size="lg">Join the Community</Button>
        </div>
      </div>
    </section>
  );
};

export default CommunityHighlights;
