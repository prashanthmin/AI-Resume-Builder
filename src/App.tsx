import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthStore } from './store/authStore';
import { Loader2 } from 'lucide-react';

// Lazy load components
const Auth = React.lazy(() => import('./pages/Auth'));
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const ResumeBuilder = React.lazy(() => import('./pages/ResumeBuilder'));
const PortfolioBuilder = React.lazy(() => import('./pages/PortfolioBuilder'));
const Analytics = React.lazy(() => import('./pages/Analytics'));
const RecruiterPortal = React.lazy(() => import('./pages/RecruiterPortal'));

function App() {
  const { initialize, loading, user } = useAuthStore();

  useEffect(() => {
    initialize();
  }, [initialize]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
      </div>
    );
  }

  return (
    <Router>
      <React.Suspense
        fallback={
          <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
          </div>
        }
      >
        <Routes>
          <Route
            path="/"
            element={
              user ? (
                <Navigate to="/dashboard" replace />
              ) : (
                <Navigate to="/auth" replace />
              )
            }
          />
          <Route
            path="/auth"
            element={user ? <Navigate to="/dashboard" replace /> : <Auth />}
          />
          <Route
            path="/dashboard"
            element={user ? <Dashboard /> : <Navigate to="/auth" replace />}
          />
          <Route
            path="/resume"
            element={user ? <ResumeBuilder /> : <Navigate to="/auth" replace />}
          />
          <Route
            path="/portfolio"
            element={user ? <PortfolioBuilder /> : <Navigate to="/auth" replace />}
          />
          <Route
            path="/analytics"
            element={user ? <Analytics /> : <Navigate to="/auth" replace />}
          />
          <Route
            path="/recruiter"
            element={
              user?.role === 'recruiter' ? (
                <RecruiterPortal />
              ) : (
                <Navigate to="/dashboard" replace />
              )
            }
          />
        </Routes>
      </React.Suspense>
    </Router>
  );
}

export default App;