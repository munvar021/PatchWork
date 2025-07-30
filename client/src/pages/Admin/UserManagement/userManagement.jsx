import React from 'react';
import {
  UserManagementContainer,
  Title,
  Paragraph,
  UserList,
  UserItem,
  Button,
  VerifyButton,
} from './userManagementStyles';

const UserManagement = () => {
  return (
    <UserManagementContainer>
      <Title>User Management</Title>
      <Paragraph>View and manage citizen & technician accounts.</Paragraph>
      <UserList>
        <UserItem>
          User A: <Button>Deactivate/Report</Button>
        </UserItem>
        <UserItem>
          Technician B: <Button>Deactivate/Report</Button> <VerifyButton>Verify</VerifyButton>
        </UserItem>
      </UserList>
    </UserManagementContainer>
  );
};

export default UserManagement;
