import styled from 'styled-components';

export const UserManagementContainer = styled.div`
  padding: ${({ theme }) => theme.padding.large};

  @media ${({ theme }) => theme.responsive.tablet} {
    padding: ${({ theme }) => theme.padding.medium};
  }

  @media ${({ theme }) => theme.responsive.mobile} {
    padding: ${({ theme }) => theme.padding.small};
  }
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xxlarge};
  margin-bottom: ${({ theme }) => theme.margin.large};

  @media ${({ theme }) => theme.responsive.tablet} {
    font-size: ${({ theme }) => theme.fontSizes.xlarge};
  }
`;

export const Paragraph = styled.p`
  margin-bottom: ${({ theme }) => theme.margin.medium};
  font-size: ${({ theme }) => theme.fontSizes.medium};
`;

export const UserList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const UserItem = styled.li`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: ${({ theme }) => theme.padding.medium};
  margin-bottom: ${({ theme }) => theme.margin.medium};
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.button`
  padding: ${({ theme }) => theme.padding.small} ${({ theme }) => theme.padding.medium};
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  cursor: pointer;
  margin-left: ${({ theme }) => theme.margin.small};
  font-size: ${({ theme }) => theme.fontSizes.small};

  &:hover {
    background-color: #c82333;
  }
`;

export const VerifyButton = styled.button`
  padding: ${({ theme }) => theme.padding.small} ${({ theme }) => theme.padding.medium};
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  cursor: pointer;
  margin-left: ${({ theme }) => theme.margin.small};
  font-size: ${({ theme }) => theme.fontSizes.small};

  &:hover {
    background-color: #218838;
  }
`;
