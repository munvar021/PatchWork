import styled from 'styled-components';

export const AnalyticsContainer = styled.div`
  padding: 20px;
`;

export const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
`;

export const Paragraph = styled.p`
  margin-bottom: 15px;
`;

export const ChartPlaceholder = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 30px;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.textSecondary};
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  margin-bottom: 20px;
`;

export const ExportButton = styled.button`
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;
