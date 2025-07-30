import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { slideInFromLeft, slideOutToLeft } from "../../../animations/animations";

export const SidebarContainer = styled.aside`
  width: ${({ $isOpen }) => ($isOpen ? "250px" : "80px")};
  background: ${({ theme }) => theme.glassmorphism.background};
  backdrop-filter: ${({ theme }) => theme.glassmorphism.backdropFilter};
  border-right: 1px solid ${({ theme }) => theme.colors.border};
  transition: width 0.3s ease, transform 0.3s ease;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  z-index: 1000;

  @media ${({ theme }) => theme.responsive.laptop} {
    width: 250px;
    transform: ${({ $isOpen }) =>
      $isOpen ? "translateX(0)" : "translateX(-100%)"};
    animation: ${({ $isOpen }) => ($isOpen ? slideInFromLeft : slideOutToLeft)}
      0.3s forwards;
  }
`;

export const SidebarLogo = styled.div`
  padding: ${({ theme }) => theme.padding.medium};
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ToggleButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.textPrimary};
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.xlarge};
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: ${({ theme }) => theme.margin.medium} 0;
`;

export const NavItem = styled.li`
  padding: ${({ theme }) => theme.padding.medium} ${({ theme }) => theme.padding.large};

  @media ${({ theme }) => theme.responsive.mobile} {
    padding: ${({ theme }) => theme.padding.small} ${({ theme }) => theme.padding.medium};
  }
`;

export const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.textPrimary};
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.margin.medium};
  transition: all 0.3s ease-in-out;
  font-size: ${({ theme }) => theme.fontSizes.medium};

  &:hover {
    transform: translateX(5px) scale(1.02);
    color: ${({ theme }) => theme.colors.accent}; /* A subtle highlight color */
  }
`;

export const StyledLogoImage = styled.img`
  width: 32px;
  height: 32px;
`;

export const AnimatedSpan = styled.span`
  ${({ $isOpen }) => css`
    opacity: ${$isOpen ? 1 : 0};
    transition: opacity 0.3s ease-in-out;
  `}
`;
