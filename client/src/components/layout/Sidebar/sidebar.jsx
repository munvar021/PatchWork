import React from "react";
import {
  SidebarContainer,
  SidebarLogo,
  ToggleButton,
  NavList,
  NavItem,
  NavLink,
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
        {isOpen && (
          <img
            src="/favIcon.ico"
            alt="My App Logo"
            style={{ width: "32px", height: "32px" }}
          />
        )}
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
            {isOpen && (
              <span
                style={{
                  animation: `
              ${isOpen ? "fadeIn" : "fadeOut"} 0.3s forwards
            `,
                }}
              >
                Dashboard
              </span>
            )}
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/projects">
            <FontAwesomeIcon icon={faProjectDiagram} />
            {isOpen && (
              <span
                style={{
                  animation: `
              ${isOpen ? "fadeIn" : "fadeOut"} 0.3s forwards
            `,
                }}
              >
                Projects
              </span>
            )}
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/users">
            <FontAwesomeIcon icon={faUsers} />
            {isOpen && (
              <span
                style={{
                  animation: `
              ${isOpen ? "fadeIn" : "fadeOut"} 0.3s forwards
            `,
                }}
              >
                Users
              </span>
            )}
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/settings">
            <FontAwesomeIcon icon={faCog} />
            {isOpen && (
              <span
                style={{
                  animation: `
              ${isOpen ? "fadeIn" : "fadeOut"} 0.3s forwards
            `,
                }}
              >
                Settings
              </span>
            )}
          </NavLink>
        </NavItem>
      </NavList>
    </SidebarContainer>
  );
};

export default Sidebar;
