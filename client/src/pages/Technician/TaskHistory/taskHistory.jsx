import React from 'react';
import {
  TaskHistoryContainer,
  Title,
  Paragraph,
  HistoryList,
  HistoryItem,
} from './taskHistoryStyles';

const TaskHistory = () => {
  return (
    <TaskHistoryContainer>
      <Title>Task History</Title>
      <Paragraph>Past resolved issues and performance tracking.</Paragraph>
      <HistoryList>
        <HistoryItem>Resolved Issue X: Resolution Time, Total Handled</HistoryItem>
        <HistoryItem>Resolved Issue Y: Resolution Time, Total Handled</HistoryItem>
      </HistoryList>
    </TaskHistoryContainer>
  );
};

export default TaskHistory;
