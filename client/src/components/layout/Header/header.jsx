import React from 'react';
import styled from 'styled-components';
import { HeaderContainer, ToggleButton } from './headerStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUserCircle, faSignOutAlt, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';

const ProjectName = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.textPrimary};

  @media (max-width: 1023px) {
    margin-left: 0;
  }
`;

const AuthLinks = styled.div`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  gap: 20px;
`;



const StyledLoginButton = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 15px;
  background: ${({ theme }) => theme.gradients.button};
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 0.9rem;
  font-weight: bold;
  text-decoration: none;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }
`;

const LogoutButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.textPrimary};
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 5px;

  &:hover {
    color: ${({ theme }) => theme.colors.error};
  }
`;

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
            Logout
          </LogoutButton>
        </AuthLinks>
      )}
    </HeaderContainer>
  );
};

export default Header;