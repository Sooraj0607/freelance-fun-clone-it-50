
import { CourseType } from '@/components/CourseCard';

export const coursesData: CourseType[] = [
  {
    id: '1',
    title: 'VLSI Physical Design Fundamentals',
    description: 'Learn the basics of chip layout, floor planning, and physical verification in modern VLSI design.',
    instructor: 'Sarah Johnson',
    duration: '6 weeks',
    category: 'VLSI Design',
    price: 0,
    isFree: true,
    image: 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=2670&auto=format&fit=crop',
    certificateAvailable: true,
    rating: 4.7,
    studentsCount: 12453,
    level: 'Beginner',
    lastUpdated: 'March 2025'
  },
  {
    id: '2',
    title: 'Advanced RTL Design with SystemVerilog',
    description: 'Master SystemVerilog for complex RTL designs and verification methodologies.',
    instructor: 'Michael Chen',
    duration: '8 weeks',
    category: 'RTL Design',
    price: 49.99,
    isFree: false,
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2670&auto=format&fit=crop',
    certificateAvailable: true,
    rating: 4.9,
    studentsCount: 8721,
    level: 'Advanced',
    lastUpdated: 'April 2025'
  },
  {
    id: '3',
    title: 'Semiconductor Layout Design',
    description: 'Learn industry-standard layout techniques for advanced semiconductor processes.',
    instructor: 'Emma Wilson',
    duration: '4 weeks',
    category: 'Layout Design',
    price: 39.99,
    isFree: false,
    image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=2672&auto=format&fit=crop',
    certificateAvailable: true,
    rating: 4.5,
    studentsCount: 6354,
    level: 'Intermediate',
    lastUpdated: 'February 2025'
  },
  {
    id: '4',
    title: 'Digital Signal Processing for VLSI',
    description: 'Implementation of DSP algorithms on VLSI chips for optimal performance.',
    instructor: 'David Park',
    duration: '10 weeks',
    category: 'DSP',
    price: 69.99,
    isFree: false,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop',
    certificateAvailable: true,
    rating: 4.8,
    studentsCount: 5129,
    level: 'Advanced',
    lastUpdated: 'January 2025'
  },
  {
    id: '5',
    title: 'Chip Verification Essentials',
    description: 'Learn essential verification methodologies for modern chip designs.',
    instructor: 'Jessica Miller',
    duration: '5 weeks',
    category: 'Verification',
    price: 0,
    isFree: true,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop',
    certificateAvailable: true,
    rating: 4.3,
    studentsCount: 9876,
    level: 'Beginner',
    lastUpdated: 'March 2025'
  },
  {
    id: '6',
    title: 'Analog IC Design Masterclass',
    description: 'Comprehensive course on analog integrated circuit design techniques.',
    instructor: 'Ryan Turner',
    duration: '8 weeks',
    category: 'Analog Design',
    price: 59.99,
    isFree: false,
    image: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=2670&auto=format&fit=crop',
    certificateAvailable: true,
    rating: 4.9,
    studentsCount: 3567,
    level: 'Expert',
    lastUpdated: 'April 2025'
  },
  {
    id: '7',
    title: 'ASIC Design Flow',
    description: 'End-to-end ASIC design flow from specification to tape-out.',
    instructor: 'Olivia Garcia',
    duration: '7 weeks',
    category: 'ASIC Design',
    price: 49.99,
    isFree: false,
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2671&auto=format&fit=crop',
    certificateAvailable: true,
    rating: 4.6,
    studentsCount: 7234,
    level: 'Intermediate',
    lastUpdated: 'February 2025'
  },
  {
    id: '8',
    title: 'Introduction to FPGA Design',
    description: 'Learn the basics of FPGA architecture, design, and implementation.',
    instructor: 'James Wilson',
    duration: '6 weeks',
    category: 'FPGA',
    price: 0,
    isFree: true,
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop',
    certificateAvailable: true,
    rating: 4.5,
    studentsCount: 10298,
    level: 'Beginner',
    lastUpdated: 'March 2025'
  }
];

export const enrolledCoursesData: (CourseType & { progress: number })[] = [
  {
    ...coursesData[0], 
    progress: 65
  },
  {
    ...coursesData[2],
    progress: 30
  },
  {
    ...coursesData[7],
    progress: 10
  }
];
