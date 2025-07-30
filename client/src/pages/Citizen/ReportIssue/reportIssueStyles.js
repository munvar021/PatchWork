import styled from 'styled-components';

export const ReportIssueContainer = styled.div`
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

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.margin.medium};
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: ${({ theme }) => theme.margin.small};
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSizes.medium};
`;

export const Input = styled.input`
  padding: ${({ theme }) => theme.padding.medium};
  border: 1px solid #ccc;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  font-size: ${({ theme }) => theme.fontSizes.medium};
`;

export const TextArea = styled.textarea`
  padding: ${({ theme }) => theme.padding.medium};
  border: 1px solid #ccc;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  min-height: 120px;
  font-size: ${({ theme }) => theme.fontSizes.medium};
`;

export const Button = styled.button`
  padding: ${({ theme }) => theme.padding.medium} ${({ theme }) => theme.padding.large};
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.medium};

  &:hover {
    background-color: #0056b3;
  }
`;
