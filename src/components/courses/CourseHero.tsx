
import React from 'react';
import SearchBar from '@/components/SearchBar';

interface CourseHeroProps {
  onSearch: (query: string) => void;
}

const CourseHero: React.FC<CourseHeroProps> = ({ onSearch }) => {
  return (
    <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Advance Your Semiconductor Career</h1>
          <p className="text-xl mb-8">
            Master VLSI, chip design, and verification with industry-recognized courses taught by top semiconductor experts.
          </p>
          <div className="flex flex-col sm:flex-row justify-center max-w-xl mx-auto">
            <SearchBar onSearch={onSearch} placeholder="Search for courses..." />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseHero;
