
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Bell, MessageSquare, User, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from './Logo';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Logo />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-primary transition-colors">Home</Link>
            <Link to="/projects" className="text-gray-600 hover:text-primary transition-colors">Projects</Link>
            <Link to="/courses" className="text-gray-600 hover:text-primary transition-colors">Courses</Link>
            <Link to="/events" className="text-gray-600 hover:text-primary transition-colors">Events</Link>
            <a href="/#how-it-works" className="text-gray-600 hover:text-primary transition-colors">How it Works</a>
          </div>

          {/* Desktop CTA and User Profile */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm">Log In</Button>
            <Button size="sm">Sign Up</Button>
            <div className="flex items-center space-x-2 ml-2">
              <Button variant="ghost" size="icon">
                <MessageSquare className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <Link to="/profile">
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="text-gray-500 hover:text-primary focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white px-4 py-2 shadow-lg">
          <div className="flex flex-col space-y-3">
            <Link to="/" className="py-2 text-gray-600 hover:text-primary transition-colors">Home</Link>
            <Link to="/projects" className="py-2 text-gray-600 hover:text-primary transition-colors">Projects</Link>
            <Link to="/courses" className="py-2 text-gray-600 hover:text-primary transition-colors">Courses</Link>
            <Link to="/events" className="py-2 text-gray-600 hover:text-primary transition-colors">Events</Link>
            <a href="/#how-it-works" className="py-2 text-gray-600 hover:text-primary transition-colors">How it Works</a>
            <Link to="/profile" className="py-2 text-gray-600 hover:text-primary transition-colors">Profile</Link>
            <div className="flex space-x-2 py-2">
              <Button variant="outline" size="sm" className="flex-1">Log In</Button>
              <Button size="sm" className="flex-1">Sign Up</Button>
            </div>
            <div className="flex justify-between py-2">
              <Button variant="ghost" size="icon">
                <MessageSquare className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <Link to="/profile">
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
