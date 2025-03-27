import React, { useEffect, useState } from 'react';
import { Table, Badge, Card, Text, Title } from '@mantine/core';
import '@mantine/core/styles.css';

const DashboardLogs = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    setLogs([
      { id: 1, action: 'Product Imported', status: 'Success', date: '2025-03-27 10:00' },
      { id: 2, action: 'Product Deleted', status: 'Success', date: '2025-03-27 11:00' },
      { id: 3, action: 'Sync with WooCommerce', status: 'Failed', date: '2025-03-27 11:30' },
    ]);
  }, []);

  return (
    <Card shadow="md" padding="lg" radius="lg" withBorder style={{ marginTop: '20px' }}>
      <Title order={3} mb="md">Recent Logs</Title>
      <Table striped highlightOnHover withBorder>
        <thead>
          <tr>
            <th>ID</th>
            <th>Action</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {logs.map(log => (
            <tr key={log.id}>
              <td><Text weight={500}>{log.id}</Text></td>
              <td>{log.action}</td>
              <td>
                <Badge color={log.status === 'Success' ? 'green' : 'red'} variant="filled">
                  {log.status}
                </Badge>
              </td>
              <td><Text size="sm" color="dimmed">{log.date}</Text></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Card>
  );
};

export default DashboardLogs;