import styled, { createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Poppins', sans-serif;
    background: linear-gradient(to right, #0f2027, #203a43, #2c5364);
    color: #fff;
    overflow-x: hidden;
  }
`;

export const AppContainer = styled.div`
  display: flex;
  height: 100vh;
`;

export const SidebarContainer = styled.aside`
  width: ${({ isOpen }) => (isOpen ? '250px' : '80px')};
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  transition: width 0.3s ease;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  z-index: 1000;

  @media (max-width: 1023px) {
    width: 250px;
    transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(-100%)')};
    transition: transform 0.3s ease;
  }
`;

export const SidebarLogo = styled.div`
  padding: 20px;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px 0;
`;

export const NavItem = styled.li`
  padding: 15px 20px;
`;

export const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 15px;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    text-decoration: underline;
  }
`;

export const ToggleButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 1.5rem;
`;

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

export const MainContent = styled.main`
  margin-left: ${({ sidebarOpen }) => (sidebarOpen ? '250px' : '80px')};
  margin-top: 70px;
  padding: 20px;
  width: 100%;
  overflow-y: auto;
  transition: margin-left 0.3s ease;

  @media (max-width: 1023px) {
    margin-left: 0;
  }
`;

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

export const Overlay = styled.div`
  display: none;

  @media (max-width: 1023px) {
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 998;
  }
`;