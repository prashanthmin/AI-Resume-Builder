import React from 'react';
import Layout from '../components/Layout';

export default function RecruiterPortal() {
  return (
    <Layout>
      <div className="py-6">
        <h1 className="text-3xl font-bold text-gray-900">Recruiter Portal</h1>
        <p className="mt-2 text-gray-600">
          Search and manage candidate profiles
        </p>
        
        <div className="mt-8">
          {/* Recruiter portal content will be implemented here */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <p className="text-gray-600">Recruiter portal is coming soon...</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}