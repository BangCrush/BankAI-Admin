import ChartPieIcon from '@heroicons/react/24/solid/ChartPieIcon';
import PresentationChartLineIcon from '@heroicons/react/24/solid/PresentationChartLineIcon';
import ChartBarIcon from '@heroicons/react/24/solid/ChartBarIcon';
import { SvgIcon } from '@mui/material';

export const items = [
  {
    href: '/',
    icon: (
      <SvgIcon>
        <ChartPieIcon />
      </SvgIcon>
    ),
    label: 'PieChart',
  },
  {
    href: '/orders',
    icon: (
      <SvgIcon>
        <ChartBarIcon />
      </SvgIcon>
    ),
    label: 'BarChart',
  },
  {
    href: '/line-chart',
    icon: (
      <SvgIcon>
        <PresentationChartLineIcon />
      </SvgIcon>
    ),
    label: 'LineChart',
  },
];
