
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Search, Briefcase, LinkedinIcon, Award, TrendingUp } from 'lucide-react';

const Career = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="heading-xl mb-6">Advance Your Semiconductor Career</h1>
              <p className="text-xl text-gray-600 mb-8">Connect your LinkedIn profile to unlock personalized career opportunities and networking features</p>
              <Button size="lg" className="bg-[#0077B5] hover:bg-[#006497]">
                <LinkedinIcon className="mr-2 h-5 w-5" />
                Connect with LinkedIn
              </Button>
            </div>
          </div>
        </section>

        {/* Career Features */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center mb-4">
                  <Search className="h-6 w-6 text-primary mr-3" />
                  <h3 className="font-semibold">Job Matching</h3>
                </div>
                <p className="text-gray-600">Get personalized semiconductor job recommendations based on your LinkedIn profile</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center mb-4">
                  <TrendingUp className="h-6 w-6 text-green-600 mr-3" />
                  <h3 className="font-semibold">Career Progress</h3>
                </div>
                <p className="text-gray-600">Track your career growth and get suggestions for skill development</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center mb-4">
                  <Award className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="font-semibold">Skill Assessment</h3>
                </div>
                <p className="text-gray-600">Validate your semiconductor skills and showcase them to potential employers</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Career;
