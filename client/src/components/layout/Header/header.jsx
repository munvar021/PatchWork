import React from "react";
import {
  HeaderContainer,
  ToggleButton,
  ProjectName,
  AuthLinks,
  StyledLoginButton,
  LogoutButton,
} from "./headerStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faUserCircle,
  faSignOutAlt,
  faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../../../context/AuthContext";

const Header = ({ toggleSidebar, isMobile, sidebarOpen }) => {
  const { isLoggedIn, logout } = useAuth();

  return (
    <HeaderContainer $sidebarOpen={sidebarOpen} $isLoggedIn={isLoggedIn}>
      {isMobile && isLoggedIn && (
        <ToggleButton onClick={toggleSidebar}>
          <FontAwesomeIcon icon={faBars} />
        </ToggleButton>
      )}
      <ProjectName to="/">PatchWork</ProjectName>
      {!isLoggedIn ? (
        <AuthLinks>
          <StyledLoginButton to="/login">
            <FontAwesomeIcon icon={faSignInAlt} /> Login
          </StyledLoginButton>
        </AuthLinks>
      ) : (
        <AuthLinks>
          <FontAwesomeIcon icon={faUserCircle} size="lg" />
          <LogoutButton onClick={logout}>
            <FontAwesomeIcon icon={faSignOutAlt} />
          </LogoutButton>
        </AuthLinks>
      )}
    </HeaderContainer>
  );
};

export default Header;
