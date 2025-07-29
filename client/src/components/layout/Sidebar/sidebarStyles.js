import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { slideInFromLeft, slideOutToLeft, fadeIn, fadeOut } from "../../../styles/animations";

export const SidebarContainer = styled.aside`
  width: ${({ isOpen }) => (isOpen ? "250px" : "80px")};
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  transition: width 0.3s ease, transform 0.3s ease;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  z-index: 1000;

  @media (max-width: 1023px) {
    width: 250px;
    transform: ${({ isOpen }) =>
      isOpen ? "translateX(0)" : "translateX(-100%)"};
    animation: ${({ isOpen }) => (isOpen ? slideInFromLeft : slideOutToLeft)}
      0.3s forwards;
  }
`;

export const SidebarLogo = styled.div`
  padding: 20px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ToggleButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 1.5rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
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
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateX(5px) scale(1.02);
    color: #00bfff; /* A subtle highlight color */
  }
`;

export const StyledLogoImage = styled.img`
  width: 32px;
  height: 32px;
`;

export const AnimatedSpan = styled.span`
  ${({ isOpen, fadeIn, fadeOut }) => css`
    animation: ${isOpen ? fadeIn : fadeOut} 0.3s forwards;
  `}
`;
