import { FC, useState } from 'react';
import { IconContext } from 'react-icons';
import {
  // AiOutlineMenu,
  AiOutlineClose
} from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import Submenu from './Submenu';
import { Nav, NavIcon, SidebarNav, SidebarWrap, LabelName, NavItems } from './SidebarElements'
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';

const Sidebar: FC = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <IconContext.Provider value={{ color: 'black' }}>
      <Nav>
        <NavIcon to="#" onClick={showSidebar}>
          {/* <AiOutlineMenu /> */}
          <img src='/altotech.png' alt="description of image" width={60} />
        </NavIcon>
        <LabelName>
          <small style={{ fontSize: '15px', color: 'grey' }}>
            Building
          </small>
          <br />
          <p>
            CU Terrace
          </p>
        </LabelName>
        <NavItems>
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
          <Avatar alt="Remy Sharp" src="/altotech.png" />
        </NavItems>

      </Nav>
      <SidebarNav sidebar={sidebar}>
        <SidebarWrap>
          <NavIcon to="#" onClick={showSidebar}>
            <AiOutlineClose />
          </NavIcon>
          {SidebarData.map((item, index) => {
            return <Submenu item={item} key={index} />;
          })}
        </SidebarWrap>
      </SidebarNav>
    </IconContext.Provider>
  );
};

export default Sidebar;
