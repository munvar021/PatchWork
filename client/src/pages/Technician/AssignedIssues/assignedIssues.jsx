import React from 'react';
import {
  AssignedIssuesContainer,
  Title,
  Paragraph,
  IssueList,
  IssueItem,
} from './assignedIssuesStyles';

const AssignedIssues = () => {
  return (
    <AssignedIssuesContainer>
      <Title>Assigned Issues</Title>
      <Paragraph>List of issues assigned to the technician.</Paragraph>
      <IssueList>
        <IssueItem>Issue A: View, Mark In Progress, Upload Fix, Resolve</IssueItem>
        <IssueItem>Issue B: View, Mark In Progress, Upload Fix, Resolve</IssueItem>
      </IssueList>
    </AssignedIssuesContainer>
  );
};

export default AssignedIssues;
