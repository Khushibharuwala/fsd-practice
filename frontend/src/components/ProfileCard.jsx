import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProfileCard = ({ freelancer }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/freelancers/${freelancer._id}`)}
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition cursor-pointer p-6"
    >
      {/* Avatar */}
      <div className="w-20 h-20 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full mx-auto mb-4 flex items-center justify-center">
        <span className="text-3xl">👤</span>
      </div>

      {/* Name and Title */}
      <h3 className="text-lg font-semibold text-center text-gray-900 mb-1">
        {freelancer.userId?.name}
      </h3>
      <p className="text-center text-indigo-600 text-sm mb-3">{freelancer.title}</p>

      {/* Skills */}
      <div className="flex flex-wrap gap-2 mb-4 justify-center">
        {freelancer.skills?.slice(0, 3).map((skill, idx) => (
          <span key={idx} className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs">
            {skill}
          </span>
        ))}
        {freelancer.skills?.length > 3 && (
          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">
            +{freelancer.skills.length - 3}
          </span>
        )}
      </div>

      {/* Rating */}
      <div className="text-center mb-4">
        <div className="flex items-center justify-center gap-2 mb-1">
          <span className="text-yellow-400 text-lg">⭐</span>
          <span className="font-semibold">{freelancer.rating.toFixed(1)}</span>
          <span className="text-gray-500 text-sm">({freelancer.totalReviews})</span>
        </div>
      </div>

      {/* Rate */}
      <div className="text-center border-t pt-3">
        <p className="text-gray-600 text-sm">Hourly Rate</p>
        <p className="text-2xl font-bold text-indigo-600">${freelancer.hourlyRate}/hr</p>
      </div>
    </div>
  );
};

export default ProfileCard;