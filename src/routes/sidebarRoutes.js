import { LayoutDashboard, NotebookText, ShoppingBag, Settings, RefreshCcw } from 'lucide-react';

export const sidebarRoutes = [
    {
      path: '/',
      label: 'Dashboard',
      icon: <LayoutDashboard />,
    },
    {
      path: '/Logs',
      label: 'Logs',
      icon:<NotebookText />,
    },
    {
      path: '/Inventory',
      label: 'Inventory',
      icon:<ShoppingBag />,
    },
    {
      path: '/syncinventory',
      label: 'Sync Inventory',
      icon:<RefreshCcw />,
  },
    {
        path: '/Settings',
        label: 'Settings',
        icon:<Settings />,
    },

  ];
  
