import { Outlet } from 'react-router-dom';
import { Layout as DashboardLayout } from './layouts/dashboard/layout';
import PieChartPage from './pages/PieChart';
import NotFoundPage from './pages/404';
import ReportsPage from './pages';
import SettingsPage from './pages/settings';
import ThemePage from './pages/theme';
import LoginPage from './pages/login';
import BarChartPage from './pages/BarChart';
import LineChartPage from './pages/LineChart';

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
        path: 'settings',
        element: <SettingsPage />,
      },
      {
        path: 'theme',
        element: <ThemePage />,
      },
      {
        path: 'PieChart',
        element: <PieChartPage />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'bar-chart',
        element: <BarChartPage />,
      },
      {
        path: 'line-chart',
        element: <LineChartPage />,
      },
      {
        path: 'bar-chart',
        element: <BarChartPage />,
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
