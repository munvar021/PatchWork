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
  width: ${({ $sidebarOpen, $isLoggedIn }) =>
    $isLoggedIn ? ($sidebarOpen ? 'calc(100% - 250px)' : 'calc(100% - 80px)') : '100%'};
  overflow-y: auto;
  transition: margin-left 0.3s ease, width 0.3s ease;
  padding: ${({ theme }) => theme.padding.medium};

  @media ${({ theme }) => theme.responsive.laptop} {
    margin-left: 0;
    width: 100%;
    padding: ${({ theme }) => theme.padding.small};
  }
`;

export const Overlay = styled.div`
  display: none;

  @media (max-width: 1023px) {
    display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 998;
  }
`;

export const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
