import styled from 'styled-components';

export const AnalyticsContainer = styled.div`
  padding: ${({ theme }) => theme.padding.large};

  @media ${({ theme }) => theme.responsive.tablet} {
    padding: ${({ theme }) => theme.padding.medium};
  }

  @media ${({ theme }) => theme.responsive.mobile} {
    padding: ${({ theme }) => theme.padding.small};
  }
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xxlarge};
  margin-bottom: ${({ theme }) => theme.margin.large};

  @media ${({ theme }) => theme.responsive.tablet} {
    font-size: ${({ theme }) => theme.fontSizes.xlarge};
  }
`;

export const Paragraph = styled.p`
  margin-bottom: ${({ theme }) => theme.margin.medium};
  font-size: ${({ theme }) => theme.fontSizes.medium};
`;

export const ChartPlaceholder = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: ${({ theme }) => theme.padding.large};
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.textSecondary};
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  margin-bottom: ${({ theme }) => theme.margin.large};
`;

export const ExportButton = styled.button`
  padding: ${({ theme }) => theme.padding.medium} ${({ theme }) => theme.padding.large};
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.medium};

  &:hover {
    background-color: #0056b3;
  }
`;
