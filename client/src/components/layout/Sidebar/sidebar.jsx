import React from "react";
import {
  SidebarContainer,
  SidebarLogo,
  ToggleButton,
  NavList,
  NavItem,
  NavLink,
  StyledLogoImage,
  AnimatedSpan,
} from "./sidebarStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachometerAlt,
  faProjectDiagram,
  faUsers,
  faCog,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <SidebarLogo>
        {isOpen && <StyledLogoImage src="/favIcon.ico" alt="My App Logo" />}
        <ToggleButton onClick={toggleSidebar}>
          {isOpen ? (
            <FontAwesomeIcon icon={faAngleLeft} />
          ) : (
            <FontAwesomeIcon icon={faAngleRight} />
          )}
        </ToggleButton>
      </SidebarLogo>
      <NavList>
        <NavItem>
          <NavLink to="/">
            <FontAwesomeIcon icon={faTachometerAlt} />
            {isOpen && <AnimatedSpan isOpen={isOpen}>Dashboard</AnimatedSpan>}
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/projects">
            <FontAwesomeIcon icon={faProjectDiagram} />
            {isOpen && <AnimatedSpan isOpen={isOpen}>Projects</AnimatedSpan>}
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/users">
            <FontAwesomeIcon icon={faUsers} />
            {isOpen && <AnimatedSpan isOpen={isOpen}>Users</AnimatedSpan>}
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/settings">
            <FontAwesomeIcon icon={faCog} />
            {isOpen && <AnimatedSpan isOpen={isOpen}>Settings</AnimatedSpan>}
          </NavLink>
        </NavItem>
      </NavList>
    </SidebarContainer>
  );
};

export default Sidebar;
