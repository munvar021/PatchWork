import React from 'react';
import {
  MyReportsContainer,
  Title,
  Paragraph,
  ReportList,
  ReportItem,
} from './myReportsStyles';

const MyReports = () => {
  return (
    <MyReportsContainer>
      <Title>My Reports</Title>
      <Paragraph>Timeline/list of all your reports.</Paragraph>
      <ReportList>
        <ReportItem>Report 1: Pending</ReportItem>
        <ReportItem>Report 2: In Progress</ReportItem>
        <ReportItem>Report 3: Resolved</ReportItem>
      </ReportList>
    </MyReportsContainer>
  );
};

export default MyReports;
