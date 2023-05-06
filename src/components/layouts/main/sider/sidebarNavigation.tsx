import React from 'react';
//import { Tables }  from '@app/components/table/table';
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
    title: 'Dashboard',
    key: 'dashboard',
    // TODO use path variable
    url: '/',
    icon: <DashboardOutlined/>,
  },
  {
    title: 'Transactions',
    key: 'transactions',
    url: '/medical-dashboard',
    icon: <TransactionOutlined />,
  },
  {
    title: 'Business Managment',
    key: 'apps',
    icon: <BankOutlined />,
    children: [
      {
        title: 'Gas Station',
        key: 'feed',
        url: '/apps/feed',
      },
      {
        title: 'car',
        key: 'dataTables',
        url: '/data-tables',
      },
    ],
  },
  {
    title: 'Internal',
    key: 'internal',
    icon: <PullRequestOutlined />,
    children: [
      {
        title: 'Request',
        key: 'request',
        url: '',
      },
      {
        title: 'Car',
        key: 'car',
        url: '',
      },
     
    ],
  },
  
  {
    title: 'User Managment',
    key: 'user managment',
    
    icon: <UserOutlined />,
    children: [
      {
        title: 'Attendant',
        key: 'attendant',
        url: '/data-tables',
      },
      {
        title: 'Admin',
        key: 'admin',
        url: '',
      },
      {
        title: 'Drivers',
        key: 'drivers',
        url: '',
      },
      {
        title: 'Chief',
        key: 'chief',
        url: '',
      },
],
  },
  
 
  
];
