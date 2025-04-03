
// Mock data for the freelancing platform

export interface Job {
  id: string;
  title: string;
  description: string;
  budget: string;
  category: string;
  skills: string[];
  postedBy: string;
  postedDate: string;
}

export interface Freelancer {
  id: string;
  name: string;
  title: string;
  rating: number;
  hourlyRate: string;
  skills: string[];
  completedJobs: number;
  avatar: string;
}

export const jobCategories = [
  "Web Development",
  "Mobile Development",
  "Design",
  "Writing",
  "Marketing",
  "Video & Animation",
  "Admin Support",
  "Customer Service",
  "All Categories"
];

export const jobListings: Job[] = [
  {
    id: "1",
    title: "WordPress Website Development",
    description: "Need an experienced WordPress developer to build a responsive e-commerce website with WooCommerce integration.",
    budget: "$500 - $1,000",
    category: "Web Development",
    skills: ["WordPress", "WooCommerce", "PHP", "JavaScript"],
    postedBy: "TechStartup Inc.",
    postedDate: "2 days ago"
  },
  {
    id: "2",
    title: "Mobile App UI/UX Designer",
    description: "Looking for a talented UI/UX designer to create modern, intuitive interfaces for our iOS and Android application.",
    budget: "$1,000 - $2,500",
    category: "Design",
    skills: ["UI/UX", "Figma", "Mobile Design", "Prototyping"],
    postedBy: "MobileVision Labs",
    postedDate: "5 hours ago"
  },
  {
    id: "3",
    title: "Content Writer for Technology Blog",
    description: "Seeking a content writer with knowledge in technology trends to write engaging blog posts on AI, blockchain, and cloud computing.",
    budget: "$30 - $50 per article",
    category: "Writing",
    skills: ["Content Writing", "SEO", "Tech Knowledge", "Blogging"],
    postedBy: "TechTrends Media",
    postedDate: "1 week ago"
  },
  {
    id: "4",
    title: "React Native Developer",
    description: "Need a React Native developer to build a cross-platform mobile application with Firebase integration.",
    budget: "$2,000 - $4,000",
    category: "Mobile Development",
    skills: ["React Native", "Firebase", "JavaScript", "Mobile Development"],
    postedBy: "StartupBoost",
    postedDate: "3 days ago"
  },
  {
    id: "5",
    title: "Social Media Marketing Specialist",
    description: "Looking for a social media expert to manage our company profiles and create engaging content to increase brand awareness.",
    budget: "$25 - $35 per hour",
    category: "Marketing",
    skills: ["Social Media", "Content Creation", "Analytics", "Campaign Management"],
    postedBy: "GrowthGurus",
    postedDate: "Just now"
  },
  {
    id: "6",
    title: "Video Editor for YouTube Channel",
    description: "Seeking a skilled video editor to edit weekly content for our growing YouTube channel. Experience with Adobe Premiere Pro required.",
    budget: "$40 - $60 per video",
    category: "Video & Animation",
    skills: ["Video Editing", "Adobe Premiere", "After Effects", "Color Grading"],
    postedBy: "ContentCreators",
    postedDate: "4 days ago"
  }
];

export const topFreelancers: Freelancer[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    title: "Full Stack Developer",
    rating: 4.9,
    hourlyRate: "$60",
    skills: ["React", "Node.js", "MongoDB", "TypeScript"],
    completedJobs: 57,
    avatar: "https://i.pravatar.cc/150?img=1"
  },
  {
    id: "2",
    name: "Michael Chen",
    title: "UI/UX Designer",
    rating: 4.8,
    hourlyRate: "$55",
    skills: ["Figma", "Adobe XD", "UI Design", "Prototyping"],
    completedJobs: 43,
    avatar: "https://i.pravatar.cc/150?img=8"
  },
  {
    id: "3",
    name: "Jessica Miller",
    title: "Content Strategist",
    rating: 4.7,
    hourlyRate: "$45",
    skills: ["Content Writing", "SEO", "Marketing", "Research"],
    completedJobs: 38,
    avatar: "https://i.pravatar.cc/150?img=5"
  },
  {
    id: "4",
    name: "David Thompson",
    title: "Mobile Developer",
    rating: 4.9,
    hourlyRate: "$65",
    skills: ["Swift", "Kotlin", "Flutter", "React Native"],
    completedJobs: 62,
    avatar: "https://i.pravatar.cc/150?img=3"
  }
];
