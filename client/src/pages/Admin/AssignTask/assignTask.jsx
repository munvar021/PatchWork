import React from 'react';
import {
  AssignTaskContainer,
  Title,
  Paragraph,
  TechnicianList,
  TechnicianItem,
  Button,
  BatchAssignButton,
} from './assignTaskStyles';

const AssignTask = () => {
  return (
    <AssignTaskContainer>
      <Title>Assign Task</Title>
      <Paragraph>View available technicians and their workload.</Paragraph>
      <TechnicianList>
        <TechnicianItem>
          Technician 1: Workload [X] - <Button>Assign</Button>
        </TechnicianItem>
        <TechnicianItem>
          Technician 2: Workload [Y] - <Button>Assign</Button>
        </TechnicianItem>
      </TechnicianList>
      <BatchAssignButton>Batch Assign</BatchAssignButton>
    </AssignTaskContainer>
  );
};

export default AssignTask;
