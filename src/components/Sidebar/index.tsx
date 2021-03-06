import { FC, useState } from 'react';
import { IconContext } from 'react-icons';
import { Routes } from 'routes';
import Submenu from './Submenu';
import { Nav, NavIcon, SidebarNav, SidebarWrap, LabelName, NavItems } from './SidebarElements';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import SearchIcon from '@material-ui/icons/Search';
import SDMLogo from 'assets/images/sdm.png';

const Sidebar: FC = () => {
  const [sidebar, setSidebar] = useState(true);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div>
      <IconContext.Provider value={{ color: 'black' }}>
        <Nav>
          <NavIcon to="#" onClick={showSidebar}>
            {/* <AiOutlineMenu /> */}
            <img src={SDMLogo} alt="#" width={60} />
          </NavIcon>
          <LabelName>
            <small style={{ fontSize: '15px', color: 'grey' }}>Building</small>
            <br />
            <p>CU Terrace</p>
          </LabelName>
          <NavItems>
            <div className="spacing">
              <SearchIcon />
            </div>
            <div className="spacing">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </div>
            <div className="spacing">
              <Avatar alt="Remy Sharp" src="/assets/img/altotech.png" />
            </div>
          </NavItems>
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>

            {Routes.map((item, index) => {
              return <Submenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </div>
  );
};

export default Sidebar;
