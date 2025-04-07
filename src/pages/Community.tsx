
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CommunityGroups from '@/components/CommunityGroups';

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
        <CommunityGroups />
      </div>
      <Footer />
    </div>
  );
};

export default Community;
