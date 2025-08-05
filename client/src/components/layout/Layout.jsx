import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header/header';
import Sidebar from './Sidebar/sidebar';
import Footer from './Footer/footer';
import {
  AppContainer,
  MainContent,
  Overlay,
  ContentWrapper,
} from './layoutStyles';
import AppRoutes from '../../routes/AppRoutes';
import { useAuth } from '../../context/AuthContext';

const Layout = () => {
  const { isLoggedIn, userRole } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      if (!mobile) {
        setSidebarOpen(true);
      } else {
        setSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <AppContainer>
      {isLoggedIn && (
        <>
          <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
          <Overlay $isOpen={sidebarOpen && isMobile} onClick={toggleSidebar} />
        </>
      )}
      <ContentWrapper>
        <Header toggleSidebar={toggleSidebar} isMobile={isMobile} $sidebarOpen={sidebarOpen && isLoggedIn} $isLoggedIn={isLoggedIn} />
        <MainContent $sidebarOpen={sidebarOpen} $isLoggedIn={isLoggedIn}>
          <AppRoutes />
        </MainContent>
        <Footer $sidebarOpen={sidebarOpen && isLoggedIn} />
      </ContentWrapper>
    </AppContainer>
  );
};

export default Layout;