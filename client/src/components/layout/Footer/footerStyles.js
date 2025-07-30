import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.glassmorphism.background};
  backdrop-filter: ${({ theme }) => theme.glassmorphism.backdropFilter};
  color: ${({ theme }) => theme.colors.textSecondary};
  text-align: center;
  padding: 10px;
  width: 100%;
  /* Removed fixed positioning */
`;