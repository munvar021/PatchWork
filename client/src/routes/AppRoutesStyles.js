import styled from 'styled-components';

export const NotFoundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.textPrimary};
`;
