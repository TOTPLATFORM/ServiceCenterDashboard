import { Icon } from '@chakra-ui/react';
import {
  MdPerson,
  MdHome,
  MdTimer,
  MdRoom,
  MdLock,
} from 'react-icons/md';


import { IRoute } from 'types/navigation';

const routes: IRoute[] = [
  {
    name: 'Main Dashboard',
    layout: '/admin',
    path: '/default',
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
  },
  {
    name: 'Sign In',
    layout: '/auth',
    path: '/sign-in',
    icon: <Icon as={MdLock} width="20px" height="20px" color="inherit" />,
  },
  {
    name: 'Center',
    layout: '/admin',
    path: '/center',
    icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
  },
  {
    name: 'Product Brand',
    layout: '/admin',
    path: '/product-brand',
    icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
  },
  {
    name: 'Product Category',
    layout: '/admin',
    path: '/product-category',
    icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
  },
  {
    name: 'Product',
    layout: '/admin',
    path: '/product',
    icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
  },
  {
    name: 'Inventory',
    layout: '/admin',
    path: '/inventory',
    icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
  },
  {
    name: 'Item Category',
    layout: '/admin',
    path: '/item-category',
    icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
  },
  {
    name: 'Item',
    layout: '/admin',
    path: '/item',
    icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
  },
  {
    name: 'Department',
    layout: '/admin',
    path: '/department',
    icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
  },
  {
    name: 'Sales',
    layout: '/admin',
    path: '/sales',
    icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
  },
  {
    name: 'Vendor',
    layout: '/admin',
    path: '/vendor',
    icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
  },
  {
    name: 'WareHouse Manager',
    layout: '/admin',
    path: '/warehouse-manager',
    icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
  },
  {
    name: 'Branch',
    layout: '/admin',
    path: '/branch',
    icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
  },
  {
    name: 'Service Category',
    layout: '/admin',
    path: '/service-category',
    icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
  },
  {
    name: 'Complaint',
    layout: '/admin',
    path: '/complaint',
    icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
  },
  {
    name: 'Customer',
    layout: '/admin',
    path: '/customer',
    icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
  },
  {
    name: 'Contact',
    layout: '/admin',
    path: '/contact',
    icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
  },
  {
    name: 'Service',
    layout: '/admin',
    path: '/service',
    icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
  },
  {
    name: 'Service Package',
    layout: '/admin',
    path: '/servicePackage',
    icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
  },
  {
    name: 'Time Slot',
    layout: '/admin',
    path: '/timeSlot',
    icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
  },
  {
    name: 'Schedule',
    layout: '/admin',
    path: '/schedule',
    icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
  },
  {
    name: 'Offer',
    layout: '/admin',
    path: '/offer',
    icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
  },
  {
    name: 'Feedback',
    layout: '/admin',
    path: '/feedback',
    icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
  },
  {
    name: 'Order',
    layout: '/admin',
    path: '/order',
    icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
  },
  {
    name: 'Rating',
    layout: '/admin',
    path: '/rating',
    icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
  },
  {
    name: 'Campagin',
    layout: '/admin',
    path: '/campagin',
    icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
  },
  {
    name: 'Overview',
    layout: '/admin',
    path: '/overview',
    icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
  },
];

export default routes;
