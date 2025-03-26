import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { sidebarRoutes } from '../routes/sidebarRoutes';

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="w-64 bg-gray-800 text-white min-h-screen p-4">
      <h2 className="text-xl font-bold mb-6">Logo</h2>
      <nav className="flex flex-col gap-8">
        {sidebarRoutes.map(({ path, label, icon }) => (
          <Link
            key={path}
            to={path}
            className={`flex items-center hover:text-gray-300 transition ${location.pathname === path ? 'font-bold text-blue-400' : ''
              }`}
          >
            {icon}
            <span className="ml-3 text-lg">{label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;