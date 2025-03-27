// components/Sidebar.tsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { sidebarRoutes } from '../routes/sidebarRoutes';
import { Menu, X } from 'lucide-react';

const Sidebar = ({ isOpen, setIsOpen }) => {
  const location = useLocation();

  return (
    <>
      {/* Overlay (mobile only) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 w-64 bg-gray-800 text-white p-4 z-40
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0 md:static md:block
        `}
      >
        {/* Mobile Top Logo & Close Button */}
        <div className="flex justify-between items-center mb-6 md:hidden">
          <h2 className="text-xl font-bold">Logo</h2>
          <button onClick={() => setIsOpen(false)}>
            <X size={28} />
          </button>
        </div>

        {/* Desktop Logo */}
        <h2 className="text-xl font-bold mb-6 hidden md:block">Logo</h2>

        <nav className="flex flex-col gap-6">
          {sidebarRoutes.map(({ path, label, icon }) => (
            <Link
              key={path}
              to={path}
              onClick={() => setIsOpen(false)}
              className={`flex items-center hover:text-gray-300 transition ${
                location.pathname === path ? 'font-bold text-blue-400' : ''
              }`}
            >
              <span>{icon}</span>
              <span className="ml-3 text-lg">{label}</span>
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
