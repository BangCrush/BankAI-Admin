import ChartPieIcon from '@heroicons/react/24/solid/ChartPieIcon';
import PresentationChartLineIcon from '@heroicons/react/24/solid/PresentationChartLineIcon';
import ChartBarIcon from '@heroicons/react/24/solid/ChartBarIcon';
import { SvgIcon } from '@mui/material';

export const items = [
  {
    href: '/pie-chart',
    icon: (
      <SvgIcon>
        <ChartPieIcon />
      </SvgIcon>
    ),
    label: 'ProdType',
  },
  {
    href: '/bar-chart',
    icon: (
      <SvgIcon>
        <ChartBarIcon />
      </SvgIcon>
    ),
    label: 'Product',
  },
  {
    href: '/line-chart',
    icon: (
      <SvgIcon>
        <PresentationChartLineIcon />
      </SvgIcon>
    ),
    label: 'Account',
  },
];
