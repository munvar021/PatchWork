import styled from 'styled-components';

export const DashboardContainer = styled.div`
  padding: 20px;
`;

export const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
`;

export const MetricCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
`;

export const MetricCard = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
`;

export const MetricValue = styled.h3`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 5px;
`;

export const MetricLabel = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const Section = styled.div`
  margin-bottom: 30px;
`;

export const SectionTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 15px;
`;

export const Placeholder = styled.div`
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  padding: 30px;
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.textSecondary};
  border: 1px solid rgba(255, 255, 255, 0.1);
`;
