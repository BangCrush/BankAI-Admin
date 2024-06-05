import { Outlet } from 'react-router-dom';
import { Layout as DashboardLayout } from './layouts/dashboard/layout';
import PicChartPage from './pages/PicChart';
import NotFoundPage from './pages/404';
import OrdersPage from './pages/orders';
import ReportsPage from './pages';
import SettingsPage from './pages/settings';
import ThemePage from './pages/theme';
import LoginPage from './pages/login';

export const routes = [
  {
    element: (
      <DashboardLayout>
        <Outlet />
      </DashboardLayout>
    ),
    children: [
      {
        index: true,
        element: <ReportsPage />,
      },
      {
        path: 'orders',
        element: <OrdersPage />,
      },
      {
        path: 'settings',
        element: <SettingsPage />,
      },
      {
        path: 'theme',
        element: <ThemePage />,
      },
      {
        path: 'PicChart',
        element: <PicChartPage />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
    ],
  },
  {
    path: '404',
    element: <NotFoundPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];
