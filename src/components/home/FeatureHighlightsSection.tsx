
import React from "react";
import {
  User,
  Book,
  Briefcase,
  Code,
  Calendar,
  MessageSquare,
  Newspaper,
  TrendingUp,
} from "lucide-react";

const FEATURES = [
  {
    icon: <User className="text-blue-600 h-9 w-9 mb-2" />,
    title: "Authentication & Profiles",
    desc: "Secure login, registration, and robust profile management.",
  },
  {
    icon: <Book className="text-indigo-600 h-9 w-9 mb-2" />,
    title: "Learning Platform",
    desc: "Browse industry-leading VLSI courses & track your progress.",
  },
  {
    icon: <Briefcase className="text-emerald-600 h-9 w-9 mb-2" />,
    title: "Job Marketplace",
    desc: "Find semiconductor jobs, filter by skill, salary, or location.",
  },
  {
    icon: <Code className="text-violet-600 h-9 w-9 mb-2" />,
    title: "Freelance Projects",
    desc: "Bid on real-world chip design & verification projects.",
  },
  {
    icon: <MessageSquare className="text-fuchsia-600 h-9 w-9 mb-2" />,
    title: "AI Assistant",
    desc: "Personalized guidance & instant help for your career.",
  },
  {
    icon: <Newspaper className="text-orange-600 h-9 w-9 mb-2" />,
    title: "Industry News",
    desc: "Stay ahead with real-time news, trends, and updates.",
  },
  {
    icon: <TrendingUp className="text-green-600 h-9 w-9 mb-2" />,
    title: "Career Development",
    desc: "Skills tracking, achievements & tailored learning paths.",
  },
];

const FeatureHighlightsSection = () => (
  <section className="py-10 md:py-14 bg-gradient-to-b from-indigo-50 via-white to-white">
    <div className="container mx-auto px-4">
      <h2 className="heading-lg text-center mb-10">
        One Platform. All Essential Features.
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7">
        {FEATURES.map((f, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-center card-hover p-4 bg-white bg-opacity-80"
          >
            {f.icon}
            <div className="font-semibold text-sm mb-2">{f.title}</div>
            <div className="text-xs text-gray-500">{f.desc}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeatureHighlightsSection;
