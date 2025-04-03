
import { CourseType } from '@/components/CourseCard';

export const coursesData: CourseType[] = [
  {
    id: '1',
    title: 'Web Development Fundamentals',
    description: 'Learn HTML, CSS, and JavaScript basics to build responsive websites.',
    instructor: 'Sarah Johnson',
    duration: '6 weeks',
    category: 'Development',
    price: 0,
    isFree: true,
    image: 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=2670&auto=format&fit=crop',
    certificateAvailable: true
  },
  {
    id: '2',
    title: 'Advanced React Development',
    description: 'Master React hooks, context API, and building complex applications.',
    instructor: 'Michael Chen',
    duration: '8 weeks',
    category: 'Development',
    price: 49.99,
    isFree: false,
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2670&auto=format&fit=crop',
    certificateAvailable: true
  },
  {
    id: '3',
    title: 'UX Design Principles',
    description: 'Learn the fundamentals of user experience design and prototyping.',
    instructor: 'Emma Wilson',
    duration: '4 weeks',
    category: 'Design',
    price: 39.99,
    isFree: false,
    image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=2672&auto=format&fit=crop',
    certificateAvailable: true
  },
  {
    id: '4',
    title: 'Data Science Bootcamp',
    description: 'Introduction to data analysis, visualization and machine learning.',
    instructor: 'David Park',
    duration: '10 weeks',
    category: 'Data Science',
    price: 69.99,
    isFree: false,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop',
    certificateAvailable: true
  },
  {
    id: '5',
    title: 'Digital Marketing Essentials',
    description: 'Learn SEO, social media marketing, and content strategy.',
    instructor: 'Jessica Miller',
    duration: '5 weeks',
    category: 'Marketing',
    price: 0,
    isFree: true,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop',
    certificateAvailable: true
  },
  {
    id: '6',
    title: 'Mobile App Development with Flutter',
    description: 'Build cross-platform mobile apps with Flutter and Dart.',
    instructor: 'Ryan Turner',
    duration: '8 weeks',
    category: 'Development',
    price: 59.99,
    isFree: false,
    image: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=2670&auto=format&fit=crop',
    certificateAvailable: true
  },
  {
    id: '7',
    title: 'Graphic Design Masterclass',
    description: 'Master Adobe Creative Suite and design principles.',
    instructor: 'Olivia Garcia',
    duration: '7 weeks',
    category: 'Design',
    price: 49.99,
    isFree: false,
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2671&auto=format&fit=crop',
    certificateAvailable: true
  },
  {
    id: '8',
    title: 'Introduction to Cybersecurity',
    description: 'Learn the basics of network security and ethical hacking.',
    instructor: 'James Wilson',
    duration: '6 weeks',
    category: 'Security',
    price: 0,
    isFree: true,
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop',
    certificateAvailable: true
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
