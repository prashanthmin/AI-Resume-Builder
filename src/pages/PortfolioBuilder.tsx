import React from 'react';
import Layout from '../components/Layout';

export default function PortfolioBuilder() {
  return (
    <Layout>
      <div className="py-6">
        <h1 className="text-3xl font-bold text-gray-900">Portfolio Builder</h1>
        <p className="mt-2 text-gray-600">
          Showcase your projects and achievements
        </p>
        
        <div className="mt-8">
          {/* Portfolio builder content will be implemented here */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <p className="text-gray-600">Portfolio builder is coming soon...</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}