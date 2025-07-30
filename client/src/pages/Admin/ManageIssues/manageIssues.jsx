import React from 'react';
import {
  ManageIssuesContainer,
  Title,
  Paragraph,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableData,
} from './manageIssuesStyles';

const ManageIssues = () => {
  return (
    <ManageIssuesContainer>
      <Title>Manage Issues</Title>
      <Paragraph>Filterable master table of issues.</Paragraph>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader>Image</TableHeader>
            <TableHeader>Severity</TableHeader>
            <TableHeader>Assigned Technician</TableHeader>
            <TableHeader>Actions</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableData>[Image]</TableData>
            <TableData>High</TableData>
            <TableData>John Doe</TableData>
            <TableData>Edit/Assign/Close</TableData>
          </TableRow>
        </TableBody>
      </Table>
    </ManageIssuesContainer>
  );
};

export default ManageIssues;
