import { Outlet } from 'react-router-dom';
import { Layout as DashboardLayout } from './layouts/dashboard/layout';
import PieChartPage from './pages/PieChart';
import NotFoundPage from './pages/404';
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
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'pie-chart',
        element: <PieChartPage />,
      },
      {
        path: 'bar-chart',
        element: <BarChartPage />,
      },
      {
        path: 'line-chart',
        element: <LineChartPage />,
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
