import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FormContainer = styled.div`
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
`;

const Input = styled.input`
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

const Button = styled.button`
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

const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.error};
  font-size: 0.8rem;
  margin-top: -10px;
  margin-bottom: 10px;
`;

const Register = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const password = watch('password', '');

  const onSubmit = (data) => {
    console.log('Register Data:', data);
    // Handle registration logic here
  };

  return (
    <FormContainer>
      <h2>Register</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          placeholder="Username"
          {...register('username', { required: 'Username is required', minLength: { value: 3, message: 'Username must be at least 3 characters' } })}
        />
        {errors.username && <ErrorMessage>{errors.username.message}</ErrorMessage>}

        <Input
          type="email"
          placeholder="Email"
          {...register('email', { required: 'Email is required', pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i })}
        />
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

        <Input
          type="password"
          placeholder="Password"
          {...register('password', { required: 'Password is required', minLength: { value: 6, message: 'Password must be at least 6 characters' } })}
        />
        {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}

        <Input
          type="password"
          placeholder="Confirm Password"
          {...register('confirmPassword', {
            required: 'Confirm Password is required',
            validate: value =>
              value === password || 'The passwords do not match',
          })}
        />
        {errors.confirmPassword && <ErrorMessage>{errors.confirmPassword.message}</ErrorMessage>}

        <Button type="submit">Register</Button>
      </Form>
      <p>Already have an account? <Link to="/login">Login here</Link></p>
    </FormContainer>
  );
};

export default Register;
