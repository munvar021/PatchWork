import styled from 'styled-components';

export const ManageIssuesContainer = styled.div`
  padding: 20px;
`;

export const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
`;

export const Paragraph = styled.p`
  margin-bottom: 15px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
`;

export const TableHead = styled.thead`
  background-color: rgba(255, 255, 255, 0.2);
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: rgba(255, 255, 255, 0.05);
  }
`;

export const TableHeader = styled.th`
  padding: 12px 15px;
  text-align: left;
  font-weight: bold;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
`;

export const TableBody = styled.tbody``;

export const TableData = styled.td`
  padding: 12px 15px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;
