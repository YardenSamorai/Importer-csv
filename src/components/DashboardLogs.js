import React, { useEffect, useState } from "react";
import { Table, Badge, Card, Text, Title, Center, Loader } from "@mantine/core"; // הוספתי Center ו-Loader להדגשה
import "@mantine/core/styles.css";

const DashboardLogs = ({ onLogsUpdate }) => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true); // סטטוס טעינה
  const [error, setError] = useState(null); // טיפול בשגיאות

  const fetchLogs = async () => {
    setLoading(true); // מתחילים טעינה מחדש
    try {
      const response = await fetch("http://localhost:4000/api/logs");
      if (!response.ok) {
        throw new Error("Failed to fetch logs");
      }
      const data = await response.json();
      setLogs(data.slice(0, 5)); // מציג רק 5 הלוגים האחרונים
    } catch (err) {
      console.error("Error fetching logs:", err);
      setError("Failed to load logs");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLogs(); // מתבצע כל פעם שמתקבל שינוי ב-onLogsUpdate
  }, [onLogsUpdate]); // כאשר `onLogsUpdate` משתנה, מתעדכנים הלוגים

  if (loading) {
    // הצגת טעינה במרכז הדף
    return (
      <Center style={{ height: "100vh" }}>
        <Loader size="xl" />
        <Text style={{ marginTop: 20 }}>Loading logs...</Text>
      </Center>
    );
  }

  if (error) {
    return (
      <Center style={{ height: "100vh" }}>
        <Text color="red">{error}</Text>
      </Center>
    );
  }

  // אם אין לוגים, מציגים את ההודעה
  if (logs.length === 0) {
    return (
      <Card shadow="lg" padding="xl" radius="lg" withBorder style={{ marginTop: "20px" }}>
        <Title order={1} mb="md">
          Recent Logs
        </Title>
        <Text>No logs to show</Text>
      </Card>
    );
  }

  return (
    <Card shadow="lg" padding="xl" radius="lg" withBorder style={{ marginTop: "20px" }}>
      <Title order={1} mb="md">
        Recent Logs
      </Title>
      <Table striped highlightOnHover withBorder>
        <thead>
          <tr>
            <th className="px-4 py-2 text-left">ID</th>
            <th className="px-4 py-2 text-left">Action</th>
            <th className="px-4 py-2 text-left">Status</th>
            <th className="px-4 py-2 text-left">Date</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log) => (
            <tr key={log.id} className="hover:bg-gray-100 transition">
              <td className="px-4 py-2 font-medium">{log.id}</td>
              <td className="px-4 py-2">{log.filename}</td> {/* הצגת שם הקובץ */}
              <td className="px-4 py-2">
                <Badge color={log.status === "Success" ? "green" : "red"} variant="filled">
                  {log.status === "Success" ? "Success" : "Failed"}
                </Badge>
              </td>
              <td className="px-4 py-2 text-sm text-gray-500">
                {log.uploadedAt
                  ? new Date(log.uploadedAt).toLocaleString("he-IL", {
                      weekday: "short",  // יום בשבוע (اختياري)
                      year: "numeric",   // שנה
                      month: "numeric",  // חודש
                      day: "numeric",    // יום
                      hour: "numeric",   // שעה
                      minute: "numeric", // דקה
                      second: "numeric", // שניה (اختياري)
                      hour12: false      // בפורמט 24 שעות
                    })
                  : "Invalid Date"}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Card>
  );
};

export default DashboardLogs;
