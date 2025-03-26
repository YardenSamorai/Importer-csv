import { LayoutDashboard, NotebookText, ShoppingBag, Settings } from 'lucide-react';

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
        path: '/Settings',
        label: 'Settings',
        icon:<Settings />,
    },
  ];
  
