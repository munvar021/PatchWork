import styled from 'styled-components';

export const UserManagementContainer = styled.div`
  padding: 20px;
`;

export const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
`;

export const Paragraph = styled.p`
  margin-bottom: 15px;
`;

export const UserList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const UserItem = styled.li`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 10px 15px;
  margin-bottom: 10px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.button`
  padding: 8px 12px;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 10px;
  &:hover {
    background-color: #c82333;
  }
`;

export const VerifyButton = styled.button`
  padding: 8px 12px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 10px;
  &:hover {
    background-color: #218838;
  }
`;
