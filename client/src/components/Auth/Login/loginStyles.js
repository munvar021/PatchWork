import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 140px);
  padding: ${({ theme }) => theme.padding.large};
  
  .form-content {
    background: ${({ theme }) => theme.glassmorphism.background};
    backdrop-filter: ${({ theme }) => theme.glassmorphism.backdropFilter};
    border-radius: ${({ theme }) => theme.borderRadius.large};
    border: ${({ theme }) => theme.glassmorphism.border};
    padding: ${({ theme }) => theme.padding.large};
    width: auto;
    min-width: 320px;
    max-width: 420px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    animation: ${fadeIn} 0.5s ease-in-out;
  }

  @media ${({ theme }) => theme.responsive.tablet} {
    .form-content {
      padding: ${({ theme }) => theme.padding.medium};
      min-width: 300px;
    }
  }

  @media ${({ theme }) => theme.responsive.mobile} {
    .form-content {
      padding: ${({ theme }) => theme.padding.small};
      width: 90%;
      min-width: 0;
    }
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
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.accent};
    box-shadow: 0 0 5px ${({ theme }) => theme.colors.accent};
  }

  &:hover {
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
  transition: all 0.3s ease-in-out;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
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
  transition: color 0.3s ease;

  &:hover {
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.action};
  }
`;