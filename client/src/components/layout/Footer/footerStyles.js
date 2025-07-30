import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.glassmorphism.background};
  backdrop-filter: ${({ theme }) => theme.glassmorphism.backdropFilter};
  color: ${({ theme }) => theme.colors.textSecondary};
  text-align: center;
  padding: 10px;
  position: fixed;
  bottom: 0;
  left: ${({ sidebarOpen }) => (sidebarOpen ? '250px' : '80px')};
  right: 0;
  transition: left 0.3s ease;

  @media (max-width: 1023px) {
    left: 0;
  }
`;