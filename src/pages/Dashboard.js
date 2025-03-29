import React, { useState, useEffect } from "react";
import DashboardLayout from "../components/DashboardLayout";
import DashboardCard from "../components/DashboardCard";
import { Check, ArchiveRestore, X } from "lucide-react";
import CsvImport from "../components/CsvImport";
import toast from "react-hot-toast";
import DashboardLogs from "../components/DashboardLogs";

const Dashboard = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [logsUpdated, setLogsUpdated] = useState(false);
  const [logsCount, setLogsCount] = useState(0);
  const [liveProductCount, setLiveProductCount] = useState(null); // ✅

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setMessage("");
  };

  const handleImportClick = async () => {
    if (!file) {
      toast.error("Please select a file first");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    const uploadToast = toast.loading("Uploading CSV...");

    try {
      const res = await fetch("http://localhost:4000/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (data.success) {
        toast.success(`✅ Uploaded ${data.inserted} rows successfully`, {
          id: uploadToast,
        });
        setLogsUpdated((prev) => !prev);
        fetchTodayLogsCount();
        fetchLiveProductCount(); // ✅ עדכון גם למספר הלייב
      } else {
        toast.error("❌ Upload failed", { id: uploadToast });
      }
    } catch (err) {
      console.error("Upload error:", err);
      toast.error("❌ Error uploading file", { id: uploadToast });
    }
  };

  const fetchTodayLogsCount = async () => {
    try {
      const res = await fetch("http://localhost:4000/api/logs/today/count");
      const data = await res.json();
      setLogsCount(data.count);
    } catch (err) {
      console.error("❌ Error fetching today's logs count:", err);
    }
  };

  const fetchLiveProductCount = async () => {
    try {
      const res = await fetch("http://localhost:4000/api/inventory/count");
      const data = await res.json();
      setLiveProductCount(data.count);
    } catch (err) {
      console.error("❌ Error fetching live product count:", err);
    }
  };

  const handleSyncInventory = async () => {
    try {
      const res = await fetch("http://localhost:4000/api/compare", {
        method: "POST",
      });
      const data = await res.json();
      console.log("Sync result:", data);
      toast.success("Inventory synced and log created!");
    } catch (err) {
      console.error("Sync failed:", err);
      toast.error("❌ Sync failed");
    }
  };


  useEffect(() => {
    fetchTodayLogsCount();
    fetchLiveProductCount(); // ✅ נטען גם על טעינה
  }, []);

  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <DashboardCard
          title="Live Product"
          value={liveProductCount !== null ? liveProductCount : "Loading..."}
          updatedAt="Now"
          icon={<Check size={40} />}
        />
        <DashboardCard
          title="CSV Updated Today"
          value={logsCount}
          updatedAt="Now"
          icon={<ArchiveRestore size={40} />}
        />
        <DashboardCard
          title="Deleted Today"
          value="2"
          updatedAt="Now"
          icon={<X size={40} />}
        />
      </div>

      <CsvImport
        handleFileChange={handleFileChange}
        handleImportClick={handleImportClick}
      />

{message && (
  <p className="text-center mt-4 text-sm text-blue-600">{message}</p>
)}

<div className="flex justify-center mt-6">
  <button
    onClick={handleSyncInventory}
    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold w-96 py-2 px-4 rounded"
  >
    Sync Inventory
  </button>
</div>
      <DashboardLogs onLogsUpdate={logsUpdated} />
    </DashboardLayout>
  );
};

export default Dashboard;
