import React from 'react';

const DashboardCard = ({ title, value, updatedAt, icon }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 flex justify-between items-center w-full h-full">
      <div>
        <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
        <p className="text-4xl font-bold mt-2 text-sidebar">{value}</p>
        <p className="text-sm text-gray-500 mt-1">Updated {updatedAt}</p>
      </div>
      <div className="text-sidebar">
        {icon}
      </div>
    </div>
  );
};

export default DashboardCard;