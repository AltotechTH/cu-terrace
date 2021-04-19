import {
  // AiFillCaretDown,
  // AiFillCaretUp,
  AiOutlineHistory,
  AiOutlineHome,
  // AiOutlineMoneyCollect,
  // AiOutlineUser
} from 'react-icons/ai';
import { FaCog, FaOpencart } from 'react-icons/fa';
import { SidebarItem } from '../../models/SidebarItem';

export const SidebarData: SidebarItem[] = [
  {
    title: 'DASHBOARD',
    path: '/dashboard',
    icon: <AiOutlineHome />,
    // iconClosed: <AiFillCaretDown />,
    // iconOpened: <AiFillCaretUp />,
    // subnav: [
    //   {
    //     title: 'Users',
    //     path: '/overview/users',
    //     icon: <AiOutlineUser />
    //   },
    //   {
    //     title: 'Revenue',
    //     path: '/overview/revenue',
    //     icon: <AiOutlineMoneyCollect />
    //   }
    // ]
  },
  {
    title: 'FLOOR USAGE',
    path: '/floor-usage',
    icon: <FaOpencart />
  },
  {
    title: 'REPORT',
    path: '/report',
    icon: <AiOutlineHistory />
  },
  {
    title: 'BILL & PAYMENT',
    path: '/bill',
    icon: <FaCog />
  },
  // {
  //   title: 'USER MANAGEMENT',
  //   path: '/user-management',
  //   icon: <FaCog />
  // },
  // {
  //   title: 'SETTING',
  //   path: '/setting',
  //   icon: <FaCog />
  // }
];