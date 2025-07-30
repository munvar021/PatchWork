import styled from 'styled-components';

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