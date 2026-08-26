import React from 'react';
import { useNavigate } from 'react-router-dom';

const ServiceCard = ({ service }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/services/${service._id}`)}
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition cursor-pointer overflow-hidden"
    >
      {/* Image */}
      <div className="bg-gradient-to-r from-indigo-400 to-purple-400 h-40 flex items-center justify-center">
        <span className="text-white text-4xl">💼</span>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
          {service.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{service.description}</p>

        {/* Footer */}
        <div className="flex justify-between items-center">
          <div>
            <span className="text-2xl font-bold text-indigo-600">${service.price}</span>
            <p className="text-gray-500 text-xs">Starts at</p>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-1">
              <span className="text-yellow-400">⭐</span>
              <span className="font-semibold">{service.rating.toFixed(1)}</span>
            </div>
            <p className="text-gray-500 text-xs">{service.totalOrders} orders</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;