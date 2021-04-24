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
import DashboardIcon from 'assets/images/icon/Dashboard.svg'
import Floor from 'assets/images/icon/Floorusage.svg'
import User from 'assets/images/icon/User.svg'
import Setting from 'assets/images/icon/Setting.svg'
import Reports from 'assets/images/icon/Reports.svg'

export const SidebarData: SidebarItem[] = [
  {
    title: 'DASHBOARD',
    path: '/dashboard',
    icon: <img src={DashboardIcon} alt='dashboard' />,
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
    icon: <img src={Floor} alt='floor' />
  },
  {
    title: 'REPORT & BILL',
    path: '/report',
    icon: <img src={Reports} alt='report' />
  },
  {
    title: 'USER MANGEMENT',
    path: '/user',
    icon: <img src={User} alt='user' />
  },

  {
    title: 'SETTINGS',
    path: '/settings',
    icon: <img src={Setting} alt='settings' />
  }
];