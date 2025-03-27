import React,{useState} from 'react';
import DashboardLayout from '../components/DashboardLayout';
import DashboardCard from '../components/DashboardCard';
import { Check, ArchiveRestore, X } from 'lucide-react';
import CsvImport from "../components/CsvImport.js";
import DashboardLogs from "../components/DashboardLogs.js";

const Dashboard = () => {

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleImportClick = async () => {
    if (!selectedFile) {
      alert('Please select a CSV file first.');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await fetch('/api/products/import', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('CSV imported successfully!');
      } else {
        alert('Failed to import CSV.');
      }
    } catch (error) {
      console.error('Error importing CSV:', error);
      alert('Error importing CSV.');
    }
  };

  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <DashboardCard
          title="Live Product"
          value="125"
          updatedAt="3:59 PM"
          icon={<Check size={40} />}
        />
        <DashboardCard
          title="Update Today"
          value="19"
          updatedAt="3:59 PM"
          icon={<ArchiveRestore size={40} />}
        />
        <DashboardCard
          title="Deleted Today"
          value="2"
          updatedAt="3:59 PM"
          icon={<X size={40} />}
        />
      </div>
      <CsvImport handleFileChange={handleFileChange} handleImportClick={handleImportClick} />
      <DashboardLogs />
    </DashboardLayout>
  );
};

export default Dashboard;