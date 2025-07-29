import React from 'react';
import styled from 'styled-components';
import { HeaderContainer, ToggleButton } from './layoutStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUserCircle } from '@fortawesome/free-solid-svg-icons';


const ProjectName = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  margin-left: 20px;

  @media (max-width: 1023px) {
    margin-left: 0;
  }
`;

const Header = ({ toggleSidebar, isMobile, sidebarOpen }) => {
  return (
    <HeaderContainer sidebarOpen={sidebarOpen}>
      {isMobile ? (
        <>
          <ToggleButton onClick={toggleSidebar}>
            <FontAwesomeIcon icon={faBars} />
          </ToggleButton>
          <ProjectName>PatchWork</ProjectName>
        </>
      ) : (
        <ProjectName>PatchWork</ProjectName>
      )}
      <div style={{ marginLeft: 'auto' }}>
        <FontAwesomeIcon icon={faUserCircle} size="lg" />
      </div>
    </HeaderContainer>
  );
};

export default Header;