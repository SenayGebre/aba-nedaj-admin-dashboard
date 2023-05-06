import React from 'react';
import {
  CompassOutlined,
  DashboardOutlined,
  FormOutlined,
  HomeOutlined,
  LayoutOutlined,
  LineChartOutlined,
  TableOutlined,
  UserOutlined,
  BlockOutlined,
  BankOutlined,
  TransactionOutlined,
  PullRequestOutlined

} from '@ant-design/icons';
import { ReactComponent as NftIcon } from '@app/assets/icons/nft-icon.svg';

export interface SidebarNavigationItem {
  title: string;
  key: string;
  url?: string;
  children?: SidebarNavigationItem[];
  icon?: React.ReactNode;
}

export const sidebarNavigation: SidebarNavigationItem[] = [
  {
    title: 'DashBoard',
    key: 'medical-dashboard',
    url: '/',
    icon: <DashboardOutlined />,
  },
  {
    title: 'Transactions',
    key: 'apps',
    icon: <TransactionOutlined />,
    url: '/medical-dashboard',

  },
  {
    title: 'Business Managment',
    key: 'auth',
    icon: <BankOutlined />,
    children: [
      {
        title: 'Business',
        key: 'login',
        url: '/auth/login',
      },
      {
        title: 'Gas Station',
        key: 'singUp',
        url: '/auth/sign-up',
      },
],
  },
  {
    title: 'Internal',
    key: 'forms',
    icon: <PullRequestOutlined />,
    children: [
      {
        title: 'Requests',
        key: 'dataTables',
        url: '/forms/advanced-forms',
      },
      {
        title: 'Car',
        key: 'advanced-forms',
        url: '/data-tables',
      },
    ],
  },
  {
    title: 'User Managment',
    key: 'forms',
    icon: <UserOutlined />,
  },
  {
    title: 'common.dataTables',
    key: 'dataTables',
    url: '/data-tables',
    icon: <TableOutlined />,
  },
];
