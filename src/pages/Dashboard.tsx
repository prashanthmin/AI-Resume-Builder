import React from 'react';
import Layout from '../components/Layout';
import { useAuthStore } from '../store/authStore';
import { FileText, Briefcase, BarChart2, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const { user } = useAuthStore();

  const cards = [
    {
      name: 'Resume Builder',
      description: 'Create and manage your professional resumes',
      icon: FileText,
      href: '/resume',
      color: 'bg-blue-500',
    },
    {
      name: 'Portfolio Builder',
      description: 'Showcase your projects and achievements',
      icon: Briefcase,
      href: '/portfolio',
      color: 'bg-purple-500',
    },
    {
      name: 'Analytics',
      description: 'Track your application progress and performance',
      icon: BarChart2,
      href: '/analytics',
      color: 'bg-green-500',
    },
  ];

  if (user?.role === 'recruiter') {
    cards.push({
      name: 'Recruiter Portal',
      description: 'Search and manage candidate profiles',
      icon: Users,
      href: '/recruiter',
      color: 'bg-orange-500',
    });
  }

  return (
    <Layout>
      <div className="py-6">
        <h1 className="text-3xl font-bold text-gray-900">
          Welcome back, {user?.email}!
        </h1>
        <p className="mt-2 text-gray-600">
          Build your career with our professional tools and insights.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <Link
              key={card.name}
              to={card.href}
              className="block bg-white overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <div className={`${card.color} rounded-lg p-3 inline-block`}>
                  <card.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">
                  {card.name}
                </h3>
                <p className="mt-2 text-sm text-gray-500">{card.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}