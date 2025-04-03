
import React from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface SearchBarProps {
  placeholder?: string;
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder = "Search jobs...", onSearch }) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <form onSubmit={handleSearch} className="flex w-full max-w-md">
      <div className="relative flex-grow">
        <Input
          type="text"
          placeholder={placeholder}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 focus-visible:ring-0 focus-visible:ring-offset-0 rounded-r-none"
        />
        <Search 
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4"
        />
      </div>
      <Button type="submit" className="rounded-l-none">
        Search
      </Button>
    </form>
  );
};

export default SearchBar;
