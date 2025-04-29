
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Bell, MessageSquare, User, Calendar, Users, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Logo from './Logo';
import LoginDialog from './LoginDialog';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Add scroll effect to navbar
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className={cn(
      "sticky top-0 z-50 transition-all duration-300",
      scrolled ? "bg-white shadow-md backdrop-blur-lg bg-white/90" : "bg-white"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Logo />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/" className={cn("nav-link", isActive("/") && "nav-link-active")}>
                    Home
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={cn(
                    "bg-transparent hover:bg-gray-50 data-[state=open]:bg-gray-50",
                    (isActive("/jobs") || isActive("/career")) && "text-primary"
                  )}>
                    Work
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid grid-cols-2 gap-3 p-4 w-[400px] nav-menu">
                      <Link to="/jobs" className="flex p-3 hover:bg-gray-50 rounded-md group hover-lift">
                        <div className="flex">
                          <div className="p-2 bg-blue-50 rounded-full text-blue-600 mr-3 group-hover:bg-blue-100 transition-colors">
                            <Users className="h-5 w-5" />
                          </div>
                          <div>
                            <div className="font-medium">Find Work</div>
                            <div className="text-sm text-gray-500">Browse semiconductor jobs</div>
                          </div>
                        </div>
                      </Link>
                      <Link to="/career" className="flex p-3 hover:bg-gray-50 rounded-md group hover-lift">
                        <div className="flex">
                          <div className="p-2 bg-green-50 rounded-full text-green-600 mr-3 group-hover:bg-green-100 transition-colors">
                            <User className="h-5 w-5" />
                          </div>
                          <div>
                            <div className="font-medium">Career</div>
                            <div className="text-sm text-gray-500">Grow your career</div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link to="/courses" className={cn("nav-link", isActive("/courses") && "nav-link-active")}>
                    Courses
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={cn(
                    "bg-transparent hover:bg-gray-50 data-[state=open]:bg-gray-50",
                    (isActive("/events") || isActive("/community")) && "text-primary"
                  )}>
                    Community
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid grid-cols-2 gap-3 p-4 w-[400px] nav-menu">
                      <Link to="/events" className="flex p-3 hover:bg-gray-50 rounded-md group hover-lift">
                        <div className="flex">
                          <div className="p-2 bg-purple-50 rounded-full text-purple-600 mr-3 group-hover:bg-purple-100 transition-colors">
                            <Calendar className="h-5 w-5" />
                          </div>
                          <div>
                            <div className="font-medium">Events</div>
                            <div className="text-sm text-gray-500">Webinars and conferences</div>
                          </div>
                        </div>
                      </Link>
                      <Link to="/community" className="flex p-3 hover:bg-gray-50 rounded-md group hover-lift">
                        <div className="flex">
                          <div className="p-2 bg-indigo-50 rounded-full text-indigo-600 mr-3 group-hover:bg-indigo-100 transition-colors">
                            <Users className="h-5 w-5" />
                          </div>
                          <div>
                            <div className="font-medium">Chat Groups</div>
                            <div className="text-sm text-gray-500">Join specialized communities</div>
                            <span className="inline-flex items-center mt-1 px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                              New
                            </span>
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
            <div className="flex items-center space-x-1">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-gray-100">
                <MessageSquare className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-gray-100 relative">
                <Bell className="h-5 w-5" />
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
              </Button>
              <Link to="/profile">
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-gray-100">
                  <User className="h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="ml-2 border-l border-gray-200 pl-4">
              <Button variant="outline" size="sm" onClick={() => setIsLoginOpen(true)} className="mr-2 rounded-full">
                Log In
              </Button>
              <Button size="sm" onClick={() => setIsLoginOpen(true)} className="rounded-full">
                Sign Up
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="text-gray-500 hover:text-primary focus:outline-none p-2 rounded-full hover:bg-gray-100"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white px-4 py-3 shadow-lg border-t border-gray-100 animate-fadeIn">
          <div className="flex flex-col space-y-1">
            <Link to="/" className="py-2 px-3 rounded-lg hover:bg-gray-50 flex items-center" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            
            <div className="border-b border-gray-100 my-1"></div>
            
            <div className="px-3 py-1 text-sm text-gray-500">Work</div>
            <Link to="/jobs" className="py-2 px-3 rounded-lg hover:bg-gray-50 flex items-center" onClick={() => setIsMenuOpen(false)}>
              <Users className="h-4 w-4 mr-3 text-blue-600" />
              Find Work
            </Link>
            <Link to="/career" className="py-2 px-3 rounded-lg hover:bg-gray-50 flex items-center" onClick={() => setIsMenuOpen(false)}>
              <User className="h-4 w-4 mr-3 text-green-600" />
              Career
            </Link>
            
            <div className="border-b border-gray-100 my-1"></div>
            
            <Link to="/courses" className="py-2 px-3 rounded-lg hover:bg-gray-50 flex items-center" onClick={() => setIsMenuOpen(false)}>
              Courses
            </Link>
            
            <div className="border-b border-gray-100 my-1"></div>
            
            <div className="px-3 py-1 text-sm text-gray-500">Community</div>
            <Link to="/events" className="py-2 px-3 rounded-lg hover:bg-gray-50 flex items-center" onClick={() => setIsMenuOpen(false)}>
              <Calendar className="h-4 w-4 mr-3 text-purple-600" />
              Events
            </Link>
            <Link to="/community" className="py-2 px-3 rounded-lg hover:bg-gray-50 flex items-center" onClick={() => setIsMenuOpen(false)}>
              <Users className="h-4 w-4 mr-3 text-indigo-600" />
              Chat Groups
              <span className="ml-2 text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">New</span>
            </Link>
            
            <div className="border-b border-gray-100 my-1"></div>

            <div className="flex flex-col space-y-2 pt-2">
              <Button variant="outline" className="w-full justify-center" onClick={() => {
                setIsMenuOpen(false);
                setIsLoginOpen(true);
              }}>Log In</Button>
              <Button className="w-full justify-center" onClick={() => {
                setIsMenuOpen(false);
                setIsLoginOpen(true);
              }}>Sign Up</Button>
            </div>

            <div className="flex justify-around py-3">
              <Button variant="ghost" size="icon" className="rounded-full">
                <MessageSquare className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full relative">
                <Bell className="h-5 w-5" />
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500"></span>
              </Button>
              <Link to="/profile" onClick={() => setIsMenuOpen(false)}>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <User className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Login Dialog */}
      <LoginDialog 
        isOpen={isLoginOpen} 
        onClose={() => setIsLoginOpen(false)} 
      />
    </nav>
  );
};

export default Navbar;
