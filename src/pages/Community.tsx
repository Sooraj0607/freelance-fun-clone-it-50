
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CommunityGroups from '@/components/CommunityGroups';
import VlsiChatbot from '@/components/VlsiChatbot';

const Community = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">
        <div className="py-8 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="container mx-auto px-4">
            <h1 className="heading-lg text-center mb-2">Community Chat Groups</h1>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
              Connect with semiconductor professionals worldwide. Join our specialized groups to discuss, learn, and collaborate.
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="heading-md mb-6">Join Our Community</h2>
              <CommunityGroups />
            </div>
            
            <div>
              <h2 className="heading-md mb-6">Ask the VLSI Expert</h2>
              <VlsiChatbot />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Community;
