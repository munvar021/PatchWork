import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: ${({ sidebarOpen }) => (sidebarOpen ? '250px' : '80px')};
  right: 0;
  height: 70px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  color: #fff;
  cursor: pointer;
  font-size: 1.5rem;
`;