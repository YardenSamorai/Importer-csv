import React from 'react';
import DashboardLayout from '../components/DashboardLayout';

const Dashboard = () => {
  return (
    <DashboardLayout>
      <h2 className="text-2xl font-bold mb-4">ברוך הבא לדשבורד ✨</h2>
      <p>כאן יוצגו הנתונים שלך וכל מה שצריך.</p>
    </DashboardLayout>
  );
};

export default Dashboard;
