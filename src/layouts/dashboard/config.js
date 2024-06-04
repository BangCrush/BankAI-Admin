import ChartPieIcon from "@heroicons/react/24/solid/ChartPieIcon"
import PresentationChartLineIcon from "@heroicons/react/24/solid/PresentationChartLineIcon"
import DocumentTextIcon from "@heroicons/react/24/solid/DocumentTextIcon"
import ExclamationTriangleIcon from "@heroicons/react/24/solid/ExclamationTriangleIcon"
import ShoppingCartIcon from "@heroicons/react/24/solid/ShoppingCartIcon"
import StarIcon from "@heroicons/react/24/solid/StarIcon"
import { SvgIcon } from '@mui/material';

export const items = [
  {
    href: '/',
    icon: (
      <SvgIcon>
        <ChartPieIcon />
      </SvgIcon>
    ),
    label: 'Home'
  },
  {
    href: '/orders',
    icon: (
      <SvgIcon>
        <ShoppingCartIcon />
      </SvgIcon>
    ),
    label: 'Orders'
  },
  {
    href: '/line-chart',
    icon: (
      <SvgIcon>
        <PresentationChartLineIcon />
      </SvgIcon>
    ),
    label: 'LineChart'
  },
  {
    href: '/theme',
    icon: (
      <SvgIcon>
        <DocumentTextIcon />
      </SvgIcon>
    ),
    label: 'Theme'
  },
  {
    href: '/icons',
    icon: (
      <SvgIcon>
        <StarIcon />
      </SvgIcon>
    ),
    label: 'Icons'
  },
  {
    href: '/404',
    icon: (
      <SvgIcon>
        <ExclamationTriangleIcon />
      </SvgIcon>
    ),
    label: 'Error'
  }
];
