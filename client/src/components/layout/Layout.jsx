import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header/header';
import Sidebar from './Sidebar/sidebar';
import Footer from './Footer/footer';
import {
  AppContainer,
  MainContent,
  Overlay,
} from './layoutStyles';


const Dashboard = () => <h2>Dashboard</h2>;
const Projects = () => <h2>Projects</h2>;
const Users = () => <h2>Users</h2>;
const Settings = () => <h2>Settings</h2>;

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

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
    <Router>
      
      <AppContainer>
        <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        <Overlay isOpen={sidebarOpen && isMobile} onClick={toggleSidebar} />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Header toggleSidebar={toggleSidebar} isMobile={isMobile} sidebarOpen={sidebarOpen} />
          <MainContent sidebarOpen={sidebarOpen}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/users" element={<Users />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </MainContent>
          <Footer sidebarOpen={sidebarOpen} />
        </div>
      </AppContainer>
    </Router>
  );
};

export default Layout;