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
  faCog,
  faAngleLeft,
  faAngleRight,
  faFileAlt, // For ReportIssue
  faMapMarkedAlt, // For MapView
  faHistory, // For MyReports and TaskHistory
  faTasks, // For AssignedIssues
  faChartBar, // For Analytics
  faUserShield, // For UserManagement
  faUserCog, // For AssignTask
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../../../context/AuthContext";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const { userRole } = useAuth(); // Get userRole directly from useAuth

  return (
    <SidebarContainer $isOpen={isOpen}>
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
        {/* Citizen Links */}
        {userRole === "citizen" && (
          <>
            <NavItem>
              <NavLink to="/citizen/home">
                <FontAwesomeIcon icon={faHome} />
                {isOpen && <AnimatedSpan $isOpen={isOpen}>Home</AnimatedSpan>}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/report">
                <FontAwesomeIcon icon={faFileAlt} />
                {isOpen && <AnimatedSpan $isOpen={isOpen}>Report Issue</AnimatedSpan>}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/myreports">
                <FontAwesomeIcon icon={faHistory} />
                {isOpen && <AnimatedSpan $isOpen={isOpen}>My Reports</AnimatedSpan>}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/map">
                <FontAwesomeIcon icon={faMapMarkedAlt} />
                {isOpen && <AnimatedSpan $isOpen={isOpen}>Map View</AnimatedSpan>}
              </NavLink>
            </NavItem>
          </>
        )}

        {/* Technician Links */}
        {userRole === "technician" && (
          <>
            <NavItem>
              <NavLink to="/technician/issues">
                <FontAwesomeIcon icon={faTasks} />
                {isOpen && <AnimatedSpan $isOpen={isOpen}>Assigned Issues</AnimatedSpan>}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/technician/history">
                <FontAwesomeIcon icon={faHistory} />
                {isOpen && <AnimatedSpan $isOpen={isOpen}>Task History</AnimatedSpan>}
              </NavLink>
            </NavItem>
          </>
        )}

        {/* Admin Links */}
        {userRole === "admin" && (
          <>
            <NavItem>
              <NavLink to="/admin/dashboard">
                <FontAwesomeIcon icon={faTachometerAlt} />
                {isOpen && <AnimatedSpan $isOpen={isOpen}>Admin Dashboard</AnimatedSpan>}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/admin/issues">
                <FontAwesomeIcon icon={faProjectDiagram} />
                {isOpen && <AnimatedSpan $isOpen={isOpen}>Manage Issues</AnimatedSpan>}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/admin/assign">
                <FontAwesomeIcon icon={faUserCog} />
                {isOpen && <AnimatedSpan $isOpen={isOpen}>Assign Task</AnimatedSpan>}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/admin/analytics">
                <FontAwesomeIcon icon={faChartBar} />
                {isOpen && <AnimatedSpan $isOpen={isOpen}>Analytics</AnimatedSpan>}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/admin/users">
                <FontAwesomeIcon icon={faUserShield} />
                {isOpen && <AnimatedSpan $isOpen={isOpen}>User Management</AnimatedSpan>}
              </NavLink>
            </NavItem>
          </>
        )}

        {/* Common Settings Link (if applicable to all roles or specific ones) */}
        <NavItem>
          <NavLink to="/settings">
            <FontAwesomeIcon icon={faCog} />
            {isOpen && <AnimatedSpan $isOpen={isOpen}>Settings</AnimatedSpan>}
          </NavLink>
        </NavItem>
      </NavList>
    </SidebarContainer>
  );
};

export default Sidebar;
