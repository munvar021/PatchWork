import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.glassmorphism.background};
  backdrop-filter: ${({ theme }) => theme.glassmorphism.backdropFilter};
  color: ${({ theme }) => theme.colors.textSecondary};
  text-align: center;
  padding: ${({ theme }) => theme.padding.medium};
  width: 100%;
  font-size: ${({ theme }) => theme.fontSizes.small};
  /* Removed fixed positioning */
`;