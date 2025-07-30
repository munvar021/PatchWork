import styled from 'styled-components';

export const ManageIssuesContainer = styled.div`
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

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: ${({ theme }) => theme.margin.large};
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: ${({ theme }) => theme.borderRadius.medium};
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
  padding: ${({ theme }) => theme.padding.medium};
  text-align: left;
  font-weight: bold;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  font-size: ${({ theme }) => theme.fontSizes.medium};
`;

export const TableBody = styled.tbody``;

export const TableData = styled.td`
  padding: ${({ theme }) => theme.padding.medium};
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  font-size: ${({ theme }) => theme.fontSizes.medium};

  @media ${({ theme }) => theme.responsive.mobile} {
    font-size: ${({ theme }) => theme.fontSizes.small};
    padding: ${({ theme }) => theme.padding.small};
  }
`;
