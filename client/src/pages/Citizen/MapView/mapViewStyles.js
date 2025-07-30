import styled from "styled-components";

export const MapWrapper = styled.div`
  height: 80vh;
  width: 100%;
  margin: ${({ theme }) => theme.margin.large} 0;
  border-radius: ${({ theme }) => theme.borderRadius.large};
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

  @media ${({ theme }) => theme.responsive.tablet} {
    height: 60vh;
    margin: ${({ theme }) => theme.margin.medium} 0;
  }

  @media ${({ theme }) => theme.responsive.mobile} {
    height: 50vh;
    margin: ${({ theme }) => theme.margin.small} 0;
  }
`;
