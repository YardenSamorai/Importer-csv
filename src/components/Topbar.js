import React from 'react';
import { UserButton } from '@clerk/clerk-react';

const Topbar = () => {
  return (
    <div className="w-full h-16 bg-white border-b flex items-center justify-between px-6 shadow">
      <h1 className="text-xl font-semibold">My Dashobard</h1>
      <UserButton afterSignOutUrl="/sign-in" />
    </div>
  );
};

export default Topbar;
