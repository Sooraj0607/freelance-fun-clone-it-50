
import React from "react";
import { Search, Bookmark, Bell, FileText, Video, Mic } from "lucide-react";

const TOOLS = [
  { icon: <Search className="h-5 w-5 text-blue-600" />, label: "Advanced Search & Filtering" },
  { icon: <Bookmark className="h-5 w-5 text-pink-600" />, label: "Universal Bookmarking & Saving" },
  { icon: <Bell className="h-5 w-5 text-orange-600" />, label: "Notifications for Updates & Events" },
  { icon: <FileText className="h-5 w-5 text-primary" />, label: "Screening Tests & Progress" },
  { icon: <Video className="h-5 w-5 text-violet-600" />, label: "Video Lessons & Recordings" },
  { icon: <Mic className="h-5 w-5 text-green-600" />, label: "Live Sessions & Office Hours" },
  { icon: null, label: "Skill Tracking & Achievements" },
  { icon: null, label: "Note-Taking During Lessons" },
  { icon: null, label: "Course Completion Certificates" },
  { icon: null, label: "Saved Articles & Industry Trends" },
  { icon: null, label: "Team-Based & Collaborative Learning" },
];

const MoreToolsSection = () => (
  <section className="py-10 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="heading-md mb-6 text-center">More Tools & Perks</h2>
      <ul className="flex flex-wrap justify-center gap-4 text-center">
        {TOOLS.map((t, i) => (
          <li key={i} className="flex items-center bg-white rounded-full shadow px-4 py-2 gap-2 text-sm mb-2">
            {t.icon}
            <span>{t.label}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default MoreToolsSection;
