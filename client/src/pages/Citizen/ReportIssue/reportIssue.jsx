import React from 'react';
import {
  ReportIssueContainer,
  Title,
  Form,
  FormGroup,
  Label,
  Input,
  TextArea,
  Button,
} from './reportIssueStyles';

const ReportIssue = () => {
  return (
    <ReportIssueContainer>
      <Title>Report an Issue</Title>
      <Form>
        <FormGroup>
          <Label>Description:</Label>
          <TextArea />
        </FormGroup>
        <FormGroup>
          <Label>Category:</Label>
          <Input type="text" />
        </FormGroup>
        <FormGroup>
          <Label>Upload Image:</Label>
          <Input type="file" />
        </FormGroup>
        <FormGroup>
          <Label>Location:</Label>
          <Input type="text" placeholder="Auto-detect or select on map" />
        </FormGroup>
        <Button type="submit">Submit Report</Button>
      </Form>
    </ReportIssueContainer>
  );
};

export default ReportIssue;
