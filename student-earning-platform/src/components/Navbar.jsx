import { Link } from 'react-router-dom';
import { Briefcase, Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Left Side - Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Briefcase className="h-8 w-8 text-primary" />
              <span className="font-heading font-bold text-xl text-gray-900">EarnStudent</span>
            </Link>
          </div>

          {/* Center - Navigation Links (Hidden on Mobile) */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/opportunities" className="text-gray-600 hover:text-primary font-medium transition">
              Opportunities
            </Link>
            <Link to="/guides" className="text-gray-600 hover:text-primary font-medium transition">
              Guides
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-primary font-medium transition">
              About
            </Link>
          </div>

          {/* Right Side - Auth Buttons */}
          <div className="flex items-center space-x-4">
            <button className="hidden sm:block text-gray-600 hover:text-primary font-medium">
              Log in
            </button>
            <button className="bg-primary text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-dark transition">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;