import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import {
  FormContainer,
  Form,
  Input,
  Button,
  ErrorMessage,
  StyledLink,
} from './loginStyles';



const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { login } = useAuth();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log('Login Data:', data);
    // Placeholder for actual authentication logic
    // On successful login, call login() from AuthContext with the user's role
    login('citizen'); // Example: logging in as a citizen
    navigate('/'); // Redirect to home page after login
  };

  return (
    <FormContainer>
      <h2>Login</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
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

        <Button type="submit">Login</Button>
      </Form>
      <p>Don't have an account? <StyledLink to="/register">Register here</StyledLink></p>
    </FormContainer>
  );
};

export default Login;
