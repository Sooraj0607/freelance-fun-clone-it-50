
import React from "react";
import { Link } from "react-router-dom";
import {
  Book,
  Briefcase,
  Code,
  Users,
  Calendar,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const PLATFORMS = [
  {
    icon: <Book className="h-6 w-6 text-blue-600" />,
    label: "Courses",
    desc: "Master VLSI and IC design skills",
    to: "/courses",
  },
  {
    icon: <Briefcase className="h-6 w-6 text-emerald-600" />,
    label: "Jobs",
    desc: "Find & apply for semiconductor jobs",
    to: "/projects",
  },
  {
    icon: <Code className="h-6 w-6 text-violet-600" />,
    label: "Projects",
    desc: "Bid or post freelance projects",
    to: "/projects",
  },
  {
    icon: <Users className="h-6 w-6 text-pink-600" />,
    label: "Community",
    desc: "Network with IC design professionals",
    to: "/community",
  },
  {
    icon: <Calendar className="h-6 w-6 text-orange-600" />,
    label: "Events",
    desc: "Join webinars & live sessions",
    to: "/events",
  },
  {
    icon: <MessageSquare className="h-6 w-6 text-fuchsia-600" />,
    label: "AI Assistant",
    desc: "Get instant career/guidance help",
    to: "/",
  },
];

const ExplorePlatformSection = () => (
  <section className="py-8 md:py-12 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="heading-md text-center mb-8">
        Explore the Platform
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {PLATFORMS.map((p, i) => (
          <Link to={p.to} key={i} className="min-w-[180px] flex-1">
            <div className="flex flex-col items-center card-hover bg-white rounded-lg px-6 py-5 hover-scale">
              {p.icon}
              <div className="font-medium mt-2">{p.label}</div>
              <div className="text-xs text-gray-500 mb-2">{p.desc}</div>
              <Button size="sm" className="w-full mt-2">Go</Button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default ExplorePlatformSection;
