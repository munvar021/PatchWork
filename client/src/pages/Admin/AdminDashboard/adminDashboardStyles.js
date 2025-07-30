import styled from 'styled-components';

export const DashboardContainer = styled.div`
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

export const MetricCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.margin.large};
  margin-bottom: ${({ theme }) => theme.margin.large};
`;

export const MetricCard = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: ${({ theme }) => theme.padding.large};
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
`;

export const MetricValue = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xxlarge};
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: ${({ theme }) => theme.margin.small};

  @media ${({ theme }) => theme.responsive.tablet} {
    font-size: ${({ theme }) => theme.fontSizes.xlarge};
  }
`;

export const MetricLabel = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const Section = styled.div`
  margin-bottom: ${({ theme }) => theme.margin.large};
`;

export const SectionTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xlarge};
  margin-bottom: ${({ theme }) => theme.margin.medium};

  @media ${({ theme }) => theme.responsive.tablet} {
    font-size: ${({ theme }) => theme.fontSizes.large};
  }
`;

export const Placeholder = styled.div`
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: ${({ theme }) => theme.padding.large};
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.textSecondary};
  border: 1px solid rgba(255, 255, 255, 0.1);
`;
