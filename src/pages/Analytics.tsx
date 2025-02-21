import React from 'react';
import Layout from '../components/Layout';

export default function Analytics() {
  return (
    <Layout>
      <div className="py-6">
        <h1 className="text-3xl font-bold text-gray-900">Analytics</h1>
        <p className="mt-2 text-gray-600">
          Track your application progress and performance
        </p>
        
        <div className="mt-8">
          {/* Analytics content will be implemented here */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <p className="text-gray-600">Analytics dashboard is coming soon...</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}