import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 140px); /* Adjust based on header/footer height */
  padding: 20px;
  background: ${({ theme }) => theme.glassmorphism.background};
  backdrop-filter: ${({ theme }) => theme.glassmorphism.backdropFilter};
  border-radius: ${({ theme }) => theme.glassmorphism.borderRadius};
  border: ${({ theme }) => theme.glassmorphism.border};
  margin: 40px auto;
  max-width: 400px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
`;

export const Input = styled.input`
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.7);
  color: ${({ theme }) => theme.colors.textPrimary};
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;

export const Button = styled.button`
  padding: 10px 15px;
  background: ${({ theme }) => theme.gradients.button};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.error};
  font-size: 0.8rem;
  margin-top: -10px;
  margin-bottom: 10px;
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.accent};
  text-decoration: none;
  font-weight: 500;
  margin-top: 10px;

  &:hover {
    text-decoration: underline;
  }
`;
