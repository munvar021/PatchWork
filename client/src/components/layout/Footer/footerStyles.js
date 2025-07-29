import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background: rgba(0, 0, 0, 0.2);
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