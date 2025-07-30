import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: relative;
  top: 0;
  left: ${({ $sidebarOpen, $isLoggedIn }) =>
    $isLoggedIn ? ($sidebarOpen ? '250px' : '80px') : '0'};
  right: 0;
  height: 70px;
  background: ${({ theme }) => theme.glassmorphism.background};
  color: ${({ theme }) => theme.colors.textPrimary};
  backdrop-filter: ${({ theme }) => theme.glassmorphism.backdropFilter};
  display: flex;
  align-items: center;
  padding: 0 20px;
  z-index: 999;
  transition: left 0.3s ease;

  @media (max-width: 1023px) {
    left: 0;
  }
`;

export const ToggleButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.textPrimary};
  cursor: pointer;
  font-size: 1.5rem;
`;