import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Welcome to Skill Connect</h1>
          <p className="text-xl mb-8 text-indigo-100">
            Connect with top freelancers or offer your expertise to the world
          </p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => navigate('/browse')}
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Browse Professionals
            </button>
            <button
              onClick={() => navigate('/register')}
              className="bg-indigo-700 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-800 transition border-2 border-white"
            >
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose Skill Connect?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Find Top Talent',
                description: 'Browse thousands of skilled professionals with verified ratings and reviews',
                icon: '👥',
              },
              {
                title: 'Secure Payments',
                description: 'Safe payment processing with escrow protection for both parties',
                icon: '💳',
              },
              {
                title: 'Real Reviews',
                description: 'Authentic feedback from real clients to help you make informed decisions',
                icon: '⭐',
              },
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-8">Join thousands of professionals and clients on Skill Connect</p>
          <button
            onClick={() => navigate('/register')}
            className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Create Account Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;