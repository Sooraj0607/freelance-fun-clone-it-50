
import React from "react";
import { Award, Trophy, Target, Star } from "lucide-react";

const ACHIEVEMENTS = [
  {
    icon: <Trophy className="h-8 w-8 text-yellow-500" />,
    title: "Skill Tracking",
    desc: "Track your progress in various VLSI domains"
  },
  {
    icon: <Award className="h-8 w-8 text-blue-500" />,
    title: "Certifications",
    desc: "Earn verified certificates for completed courses"
  },
  {
    icon: <Target className="h-8 w-8 text-green-500" />,
    title: "Learning Paths",
    desc: "Follow curated paths for career growth"
  },
  {
    icon: <Star className="h-8 w-8 text-purple-500" />,
    title: "Achievements",
    desc: "Unlock badges and rewards for your progress"
  }
];

const AchievementsSection = () => {
  return (
    <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="heading-lg text-center mb-8">Track Your Growth</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ACHIEVEMENTS.map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4 p-3 bg-gray-50 rounded-full">{item.icon}</div>
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
