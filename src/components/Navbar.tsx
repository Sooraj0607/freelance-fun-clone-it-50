
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Bell, MessageSquare, User, Calendar, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
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
          <div className="hidden md:flex items-center space-x-4">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/" className="text-gray-600 hover:text-primary transition-colors px-3 py-2">
                    Home
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-gray-50">Work</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid grid-cols-2 gap-3 p-4 w-[400px]">
                      <Link to="/projects" className="flex p-3 hover:bg-gray-50 rounded-md">
                        <div>
                          <div className="font-medium">Projects</div>
                          <div className="text-sm text-gray-500">Find and bid on semiconductor projects</div>
                        </div>
                      </Link>
                      <a href="/#how-it-works" className="flex p-3 hover:bg-gray-50 rounded-md">
                        <div>
                          <div className="font-medium">How it Works</div>
                          <div className="text-sm text-gray-500">Learn about our platform process</div>
                        </div>
                      </a>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link to="/courses" className="text-gray-600 hover:text-primary transition-colors px-3 py-2">
                    Courses
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-gray-50">Community</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid grid-cols-2 gap-3 p-4 w-[400px]">
                      <Link to="/events" className="flex p-3 hover:bg-gray-50 rounded-md">
                        <div className="flex">
                          <Calendar className="h-5 w-5 mr-2 text-blue-500" />
                          <div>
                            <div className="font-medium">Events</div>
                            <div className="text-sm text-gray-500">Webinars and conferences</div>
                          </div>
                        </div>
                      </Link>
                      <Link to="/community" className="flex p-3 hover:bg-gray-50 rounded-md">
                        <div className="flex">
                          <Users className="h-5 w-5 mr-2 text-indigo-500" />
                          <div>
                            <div className="font-medium">Chat Groups</div>
                            <div className="text-sm text-gray-500">Join specialized communities</div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
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
            <Link to="/community" className="py-2 text-gray-600 hover:text-primary transition-colors flex items-center">
              <Users className="h-5 w-5 mr-2 text-indigo-500" />
              Chat Groups
              <span className="ml-2 text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">New</span>
            </Link>
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
