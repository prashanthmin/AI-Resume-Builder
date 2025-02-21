import React, { useState } from 'react';
import Layout from '../components/Layout';

export default function ResumeBuilder() {
  const [selectedPage, setSelectedPage] = useState<string | null>(null);

  return (
    <Layout>
      <div className="py-6">
        <h1 className="text-3xl font-bold text-gray-900">Resume Builder</h1>
        <p className="mt-2 text-gray-600">Create and customize your professional resume</p>
        
        <div className="mt-8">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <p className="text-gray-600">AI Powered Resume Builder</p>
            <p className="text-gray-600">Create a professional resume in minutes</p>
            <ProfileButtons setSelectedPage={setSelectedPage} />
            <Page selectedPage={selectedPage} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

function ProfileButtons({ setSelectedPage }: { setSelectedPage: React.Dispatch<React.SetStateAction<string | null>> }) {
  return (
    <div className="flex justify-start mt-4">
      <button onClick={() => setSelectedPage('Full Stack')} className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded mr-4">
        Full Stack
      </button>
      <button onClick={() => setSelectedPage('SWE')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">
        SWE
      </button>
      <button onClick={() => setSelectedPage('DevOps')} className="bg-blue-400 hover:bg-blue-600 text-gray-800 font-bold py-2 px-4 rounded">
        DevOps
      </button>
      <button onClick={() => setSelectedPage('AWS')} className="bg-blue-300 hover:bg-blue-400 text-gray-800 font-bold py-2 px-4 rounded ml-4">
        AWS
      </button>
      <button onClick={() => setSelectedPage('Data Analyst')} className="bg-blue-200 hover:bg-blue-300 text-gray-800 font-bold py-2 px-4 rounded ml-4">
        Data Analyst
      </button>
    </div>
  );
}

function Page({ selectedPage }: { selectedPage: string | null }) {
  return (
    <div className="mt-6 bg-white shadow-lg rounded-lg p-6 border">
      {selectedPage ? <h2 className="text-xl font-bold text-gray-900">{selectedPage} Resume</h2> : <p className="text-gray-600">Select a role to see details</p>}
    </div>
  );
}
