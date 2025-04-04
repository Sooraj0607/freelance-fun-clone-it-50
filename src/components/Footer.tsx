
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - About */}
          <div className="space-y-4">
            <Logo textClassName="text-white" />
            <p className="text-gray-400">
              Connecting top semiconductor talent with amazing opportunities worldwide since 2023.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Column 2 - For Clients */}
          <div>
            <h3 className="font-semibold mb-4">For Clients</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Find Specialists</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Post a Job</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Enterprise Solutions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Success Stories</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Payment Methods</a></li>
            </ul>
          </div>

          {/* Column 3 - For Freelancers */}
          <div>
            <h3 className="font-semibold mb-4">For Specialists</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Find Work</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Create Profile</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Projects</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Community</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Specialist Forum</a></li>
            </ul>
          </div>

          {/* Column 4 - Newsletter */}
          <div>
            <h3 className="font-semibold mb-4">Get Weekly Updates</h3>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter to receive updates on new jobs and tips.</p>
            <div className="flex">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-gray-800 border-gray-700 focus:border-primary text-white rounded-r-none"
              />
              <Button className="rounded-l-none">
                <ArrowRight size={18} />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2023 SemiXpertz. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
