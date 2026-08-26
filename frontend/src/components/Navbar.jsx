import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/slices/userSlice';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, user } = useSelector((state) => state.user);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-indigo-600 hover:text-indigo-700">
          Skill Connect
        </Link>

        {/* Navigation Links */}
        <div className="flex gap-6 items-center">
          <Link to="/" className="text-gray-600 hover:text-indigo-600 transition">
            Home
          </Link>
          <Link to="/browse" className="text-gray-600 hover:text-indigo-600 transition">
            Browse
          </Link>
          <Link to="/services" className="text-gray-600 hover:text-indigo-600 transition">
            Services
          </Link>

          {isAuthenticated ? (
            <>
              <Link to="/dashboard" className="text-gray-600 hover:text-indigo-600 transition">
                Dashboard
              </Link>
              <Link to="/messages" className="text-gray-600 hover:text-indigo-600 transition">
                Messages
              </Link>
              <div className="flex items-center gap-3">
                <span className="text-gray-700">{user?.name}</span>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                >
                  Logout
                </button>
              </div>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-gray-600 hover:text-indigo-600 transition"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;