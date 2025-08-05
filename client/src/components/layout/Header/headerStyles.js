import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
  position: relative;
  top: 0;
  left: ${({ $sidebarOpen, $isLoggedIn }) =>
    $isLoggedIn ? ($sidebarOpen ? '250px' : '80px') : '0'};
  width: ${({ $sidebarOpen, $isLoggedIn }) =>
    $isLoggedIn ? ($sidebarOpen ? 'calc(100% - 250px)' : 'calc(100% - 80px)') : '100%'};
  height: 70px;
  background: ${({ theme }) => theme.glassmorphism.background};
  color: ${({ theme }) => theme.colors.textPrimary};
  backdrop-filter: ${({ theme }) => theme.glassmorphism.backdropFilter};
  display: flex;
  align-items: center;
  padding: 0 ${({ theme }) => theme.padding.large};
  z-index: 999;
  transition: left 0.3s ease, width 0.3s ease;

  @media ${({ theme }) => theme.responsive.laptop} {
    left: 0;
    width: 100%;
    padding: 0 ${({ theme }) => theme.padding.medium};
  }

  @media ${({ theme }) => theme.responsive.mobile} {
    padding: 0 ${({ theme }) => theme.padding.small};
  }
`;

export const ToggleButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.textPrimary};
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.xlarge};
`;

export const ProjectName = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.textPrimary};

  @media (max-width: 1023px) {
    margin-left: 0;
  }
`;

export const AuthLinks = styled.div`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  gap: 20px;
`;

export const StyledLoginButton = styled(Link)`
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

export const LogoutButton = styled.button`
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