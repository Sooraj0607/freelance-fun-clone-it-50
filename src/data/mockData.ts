
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
  'VLSI Design', 
  'RTL Design', 
  'Verification', 
  'FPGA', 
  'Mixed-Signal',
  'Layout Design',
  'Physical Design',
  'DFT'
];

export const jobListings: Job[] = [
  {
    id: "1",
    title: "Analog VLSI Design Engineer",
    description: "We're looking for an experienced Analog VLSI Design Engineer to work on schematic design, simulation, and layout of analog circuits including ADCs, DACs, and PLLs for our next-generation semiconductor product.",
    budget: "$80 - $120/hr",
    category: "VLSI Design",
    skills: ["Cadence Virtuoso", "Analog Design", "PLL Design", "SPICE Simulation", "Layout"],
    postedBy: "ChipDesign Solutions",
    postedDate: "2 days ago"
  },
  {
    id: "2",
    title: "Digital RTL Design Specialist",
    description: "Seeking an experienced RTL design specialist to develop and optimize digital modules using SystemVerilog. The project involves implementing complex algorithms for a high-performance computing ASIC.",
    budget: "$70 - $100/hr",
    category: "RTL Design",
    skills: ["SystemVerilog", "RTL Design", "Logic Synthesis", "Timing Analysis", "Design Compiler"],
    postedBy: "ProcessorTech Inc.",
    postedDate: "5 hours ago"
  },
  {
    id: "3",
    title: "SystemVerilog/UVM Verification Engineer",
    description: "Looking for a verification expert to develop UVM testbenches for our next-generation communication IP. Experience with advanced verification methodologies and coverage-driven verification is required.",
    budget: "$75 - $95/hr",
    category: "Verification",
    skills: ["SystemVerilog", "UVM", "Functional Coverage", "Assertions", "Synopsys VCS"],
    postedBy: "VerifyChip Technologies",
    postedDate: "1 week ago"
  },
  {
    id: "4",
    title: "FPGA Design & Prototyping Specialist",
    description: "Need an FPGA designer to implement and optimize a high-speed signal processing algorithm on Xilinx Ultrascale+ platform. Experience with HLS and timing closure is essential.",
    budget: "$60 - $90/hr",
    category: "FPGA",
    skills: ["FPGA", "Verilog", "Xilinx Vivado", "HLS", "Timing Closure"],
    postedBy: "SignalTech Systems",
    postedDate: "3 days ago"
  },
  {
    id: "5",
    title: "Mixed-Signal Design Consultant",
    description: "Seeking an experienced consultant for analog/digital integration, co-simulation, and verification of our mixed-signal SoC. Experience with power management circuits is a plus.",
    budget: "$90 - $130/hr",
    category: "Mixed-Signal",
    skills: ["Mixed-Signal Design", "Analog/Digital Integration", "Co-Simulation", "AMS Verification", "Tapeout Experience"],
    postedBy: "MixedChip Solutions",
    postedDate: "Just now"
  },
  {
    id: "6",
    title: "VLSI Design Trainer/Content Creator",
    description: "Looking for an experienced VLSI professional to create high-quality educational content including tutorials, courses, and training materials on Verilog, SystemVerilog, and industry-standard VLSI design flows.",
    budget: "$50 - $80/hr",
    category: "Training",
    skills: ["VLSI Design", "Educational Content", "Tutorial Creation", "Course Development", "Technical Writing"],
    postedBy: "ChipEducate",
    postedDate: "4 days ago"
  }
];

export const topFreelancers: Freelancer[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    title: "Analog IC Design Expert",
    rating: 4.9,
    hourlyRate: "$110",
    skills: ["Analog Design", "Cadence Virtuoso", "SPICE", "Layout", "Tapeout"],
    completedJobs: 57,
    avatar: "https://i.pravatar.cc/150?img=1"
  },
  {
    id: "2",
    name: "Michael Chen",
    title: "RTL Design Specialist",
    rating: 4.8,
    hourlyRate: "$95",
    skills: ["SystemVerilog", "ASIC Design", "RTL Optimization", "Logic Synthesis"],
    completedJobs: 43,
    avatar: "https://i.pravatar.cc/150?img=8"
  },
  {
    id: "3",
    name: "Jessica Miller",
    title: "UVM Verification Engineer",
    rating: 4.7,
    hourlyRate: "$85",
    skills: ["UVM", "SystemVerilog", "Functional Coverage", "Assertions"],
    completedJobs: 38,
    avatar: "https://i.pravatar.cc/150?img=5"
  },
  {
    id: "4",
    name: "David Thompson",
    title: "FPGA Design Expert",
    rating: 4.9,
    hourlyRate: "$90",
    skills: ["FPGA", "Verilog", "Xilinx Vivado", "Intel Quartus", "HLS"],
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
