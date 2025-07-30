import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const MainContent = styled.main`
  flex-grow: 1;
  margin-left: ${({ $sidebarOpen, $isLoggedIn }) =>
    $isLoggedIn ? ($sidebarOpen ? '250px' : '80px') : '0'};
  width: 100%;
  overflow-y: auto;
  transition: margin-left 0.3s ease;

  @media (max-width: 1023px) {
    margin-left: 0;
  }
`;

export const Overlay = styled.div`
  display: none;

  @media (max-width: 1023px) {
    display: ${({ isOpen }) => (isOpen ? "block" : "none")};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 998;
  }
`;
