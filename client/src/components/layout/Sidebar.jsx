import React from 'react';
import {
  SidebarContainer,
  SidebarLogo,
  NavList,
  NavItem,
  NavLink,
  ToggleButton,
} from './layoutStyles';
import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome';
import {
  faTachometerAlt,
  faProjectDiagram,
  faUsers,
  faCog,
  faAngleLeft,
  faAngleRight,
} from '@fortawesome/free-solid-svg-icons';


const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <SidebarLogo>
        {isOpen && <span>My App</span>}
        <ToggleButton onClick={toggleSidebar}>
          {isOpen ? <FontAwesomeIcon icon={faAngleLeft} /> : <FontAwesomeIcon icon={faAngleRight} />}
        </ToggleButton>
      </SidebarLogo>
      <NavList>
        <NavItem>
          <NavLink to="/">
            <FontAwesomeIcon icon={faTachometerAlt} />
            {isOpen && <span>Dashboard</span>}
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/projects">
            <FontAwesomeIcon icon={faProjectDiagram} />
            {isOpen && <span>Projects</span>}
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/users">
            <FontAwesomeIcon icon={faUsers} />
            {isOpen && <span>Users</span>}
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/settings">
            <FontAwesomeIcon icon={faCog} />
            {isOpen && <span>Settings</span>}
          </NavLink>
        </NavItem>
      </NavList>
    </SidebarContainer>
  );
};

export default Sidebar;