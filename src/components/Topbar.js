import React from 'react';
import { UserButton } from '@clerk/clerk-react';
import { Menu } from 'lucide-react';
import { useUser } from '@clerk/clerk-react';

const Topbar = ({ onMenuClick }) => {

  const {user} = useUser();
  return (
    <div className="w-full h-16 bg-white border-b flex items-center justify-between px-6 shadow">
      {/* Hamburger menu (mobile only) */}
      <button
        className="md:hidden text-gray-700 focus:outline-none"
        onClick={onMenuClick}
      >
        <Menu size={28} />
      </button>

      <h1 className="text-xl font-semibold">My Dashobard</h1>
      <div className='flex flex-row gap-2'>
      <UserButton afterSignOutUrl="/sign-in" />
      <span>{user.fullName}</span>
      </div>
    </div>
  );
};

export default Topbar;