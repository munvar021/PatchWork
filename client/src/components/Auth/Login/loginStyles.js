import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 140px); /* Adjust based on header/footer height */
  padding: ${({ theme }) => theme.padding.large};
  background: ${({ theme }) => theme.glassmorphism.background};
  backdrop-filter: ${({ theme }) => theme.glassmorphism.backdropFilter};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  border: ${({ theme }) => theme.glassmorphism.border};
  margin: ${({ theme }) => theme.margin.large} auto;
  max-width: 400px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);

  @media ${({ theme }) => theme.responsive.tablet} {
    padding: ${({ theme }) => theme.padding.medium};
    margin: ${({ theme }) => theme.margin.medium} auto;
  }

  @media ${({ theme }) => theme.responsive.mobile} {
    padding: ${({ theme }) => theme.padding.small};
    margin: ${({ theme }) => theme.margin.small} auto;
    min-height: calc(100vh - 120px);
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: ${({ theme }) => theme.padding.medium};

  @media ${({ theme }) => theme.responsive.mobile} {
    padding: ${({ theme }) => theme.padding.small};
  }
`;

export const Input = styled.input`
  padding: ${({ theme }) => theme.padding.medium};
  margin-bottom: ${({ theme }) => theme.margin.medium};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  background-color: rgba(255, 255, 255, 0.7);
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.fontSizes.medium};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;

export const Button = styled.button`
  padding: ${({ theme }) => theme.padding.medium};
  background: ${({ theme }) => theme.gradients.button};
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.error};
  font-size: ${({ theme }) => theme.fontSizes.small};
  margin-top: -${({ theme }) => theme.margin.small};
  margin-bottom: ${({ theme }) => theme.margin.small};
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.accent};
  text-decoration: none;
  font-weight: 500;
  margin-top: ${({ theme }) => theme.margin.medium};
  font-size: ${({ theme }) => theme.fontSizes.small};

  &:hover {
    text-decoration: underline;
  }
`;
