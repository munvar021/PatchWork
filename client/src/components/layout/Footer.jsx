import React from 'react';
import { FooterContainer } from './layoutStyles';

const Footer = ({ sidebarOpen }) => {
  return (
    <FooterContainer sidebarOpen={sidebarOpen}>
      <p>&copy; 2025 My App. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer;