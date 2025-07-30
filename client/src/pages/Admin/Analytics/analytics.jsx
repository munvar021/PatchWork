import React from 'react';
import {
  AnalyticsContainer,
  Title,
  Paragraph,
  ChartPlaceholder,
  ExportButton,
} from './analyticsStyles';

const Analytics = () => {
  return (
    <AnalyticsContainer>
      <Title>Analytics</Title>
      <Paragraph>Graphs and charts for trends, geo density, and time to resolution.</Paragraph>
      <ChartPlaceholder>[Graph/Chart Placeholder]</ChartPlaceholder>
      <ExportButton>Export Reports</ExportButton>
    </AnalyticsContainer>
  );
};

export default Analytics;
