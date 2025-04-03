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

export interface ProjectType {
  id: string;
  title: string;
  description: string;
  budget: string;
  category: string;
  skills: string[];
  postedBy: string;
  companyName: string;
  deadline: string;
  postedDate: string;
  status: 'open' | 'closed' | 'awarded';
  bids: number;
  location: string;
  duration: string;
  screeningTest?: string;
}

// Let's add course categories to jobCategories
export const jobCategories = [
  'All Categories', 
  'Web Development', 
  'Design', 
  'Marketing', 
  'Data Science', 
  'Mobile Development',
  'Writing & Translation',
  'Video & Animation',
  'Security'
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

export const projects: ProjectType[] = [
  {
    id: "1",
    title: "E-commerce Platform Development with Shopify Integration",
    description: "We're looking for a developer to build an e-commerce platform that integrates with Shopify. The platform should include custom product pages, a checkout process, and integration with our existing CRM system.",
    budget: "$3,000 - $5,000",
    category: "Web Development",
    skills: ["Shopify", "React", "API Integration", "E-commerce"],
    postedBy: "TechRetail Solutions",
    companyName: "TechRetail Solutions",
    deadline: "30 days",
    postedDate: "2 days ago",
    status: "open",
    bids: 7,
    location: "Remote",
    duration: "1-3 months",
    screeningTest: "Shopify Development Quiz"
  },
  {
    id: "2",
    title: "Brand Identity Design for Tech Startup",
    description: "Our startup needs a complete brand identity package including logo, color palette, typography, and basic marketing materials. We're in the AI solutions space and want a modern, clean look.",
    budget: "$1,500 - $3,000",
    category: "Design",
    skills: ["Logo Design", "Brand Identity", "Adobe Illustrator", "Adobe Photoshop"],
    postedBy: "AI Innovations",
    companyName: "AI Innovations",
    deadline: "21 days",
    postedDate: "5 days ago",
    status: "open",
    bids: 12,
    location: "Remote",
    duration: "2-4 weeks",
    screeningTest: "Design Portfolio Review"
  },
  {
    id: "3",
    title: "Social Media Marketing Campaign for Product Launch",
    description: "We're launching a new fitness product and need a comprehensive social media marketing campaign across Instagram, Facebook, and TikTok. Looking for someone who can create content, manage ads, and track analytics.",
    budget: "$2,000 - $4,000",
    category: "Marketing",
    skills: ["Social Media Marketing", "Content Creation", "Ad Management", "Analytics"],
    postedBy: "FitTech Gear",
    companyName: "FitTech Gear",
    deadline: "15 days",
    postedDate: "3 days ago",
    status: "open",
    bids: 9,
    location: "Remote",
    duration: "1-2 months",
    screeningTest: "Marketing Strategy Test"
  },
  {
    id: "4",
    title: "Mobile App Development for Health Tracking",
    description: "We need an experienced mobile developer to build a health tracking app for iOS and Android. The app will track user workouts, nutrition, and provide personalized recommendations.",
    budget: "$8,000 - $12,000",
    category: "Mobile Development",
    skills: ["React Native", "iOS", "Android", "Health API Integration"],
    postedBy: "HealthTrack Technologies",
    companyName: "HealthTrack Technologies",
    deadline: "45 days",
    postedDate: "1 week ago",
    status: "open",
    bids: 5,
    location: "Remote",
    duration: "3+ months",
    screeningTest: "Mobile Development Challenge"
  },
  {
    id: "5",
    title: "Data Analysis and Visualization for E-learning Platform",
    description: "Our e-learning platform needs comprehensive data analysis and visualization to understand user behavior, course completion rates, and areas for improvement. Looking for a data scientist who can analyze our data and create insightful dashboards.",
    budget: "$4,000 - $7,000",
    category: "Data Science",
    skills: ["Python", "R", "Data Visualization", "Statistical Analysis"],
    postedBy: "LearnWave",
    companyName: "LearnWave",
    deadline: "30 days",
    postedDate: "4 days ago",
    status: "open",
    bids: 3,
    location: "Remote",
    duration: "1-3 months",
    screeningTest: "Data Analysis Challenge"
  },
  {
    id: "6",
    title: "Content Writing for SaaS Website",
    description: "We're revamping our SaaS website and need engaging, clear content that explains our features, benefits, and use cases. The content should be SEO-optimized and speak to our target audience of small business owners.",
    budget: "$1,000 - $2,000",
    category: "Writing & Translation",
    skills: ["Copywriting", "SEO", "SaaS Industry Knowledge", "Content Strategy"],
    postedBy: "SaaSify",
    companyName: "SaaSify",
    deadline: "20 days",
    postedDate: "2 days ago",
    status: "open",
    bids: 15,
    location: "Remote",
    duration: "2-4 weeks"
  }
];
