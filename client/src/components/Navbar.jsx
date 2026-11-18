import React from 'react';
import { Link, useNavigate } from 'react-router-dom';



function Navbar() {
  const user = { name: 'John Doe' };
  const navigate = useNavigate();

  const logoutUser = () => {
    // Add your auth logout logic here
    navigate('/');
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <nav className="flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16">
        
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <img 
            src="/logo.png" 
            alt="Brand Logo" 
            className="h-9 w-auto object-contain transition-transform duration-200 group-hover:scale-105" 
          />
        </Link>

        {/* User Info & Actions */}
        <div className="flex items-center gap-4">
          {user && (
            <div className="hidden sm:flex items-center gap-2.5 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-200/80">
              <div className="h-6 w-6 rounded-full bg-[#31adcd] text-white flex items-center justify-center text-xs font-semibold">
                {user.name.charAt(0).toUpperCase()}
              </div>
              <span className="text-sm font-medium text-slate-700">
                Hi, <span className="text-slate-900 font-semibold">{user.name}</span>
              </span>
            </div>
          )}

          <button
            onClick={logoutUser}
            className="inline-flex items-center gap-2 text-sm font-medium text-white bg-[#31adcd] hover:bg-red-50 hover:text-red-600 hover:border-red-200 border border-slate-300 px-4 py-2 rounded-lg shadow-xs active:scale-95 transition-all duration-200 cursor-pointer"
          >
            <span>Logout</span>
          </button>
        </div>

      </nav>
    </header>
  );
}

export default Navbar;
