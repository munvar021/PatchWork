import React from 'react';
import {
  DashboardContainer,
  Title,
  MetricCards,
  MetricCard,
  MetricValue,
  MetricLabel,
  Section,
  SectionTitle,
  Placeholder,
} from './adminDashboardStyles';

const AdminDashboard = () => {
  return (
    <DashboardContainer>
      <Title>Admin Dashboard</Title>

      <MetricCards>
        <MetricCard>
          <MetricValue>[Value]</MetricValue>
          <MetricLabel>Total Reports</MetricLabel>
        </MetricCard>
        <MetricCard>
          <MetricValue>[Value]</MetricValue>
          <MetricLabel>Avg Fix Time</MetricLabel>
        </MetricCard>
        <MetricCard>
          <MetricValue>[Value]</MetricValue>
          <MetricLabel>% Resolved</MetricLabel>
        </MetricCard>
      </MetricCards>

      <Section>
        <SectionTitle>Issue Heatmap</SectionTitle>
        <Placeholder>[Issue Heatmap Placeholder]</Placeholder>
      </Section>

      <Section>
        <SectionTitle>Animated Statistics</SectionTitle>
        <Placeholder>[Animated Statistics Placeholder]</Placeholder>
      </Section>
    </DashboardContainer>
  );
};

export default AdminDashboard;
