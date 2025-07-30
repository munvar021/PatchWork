import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import {
  FormContainer,
  Form,
  Input,
  Button,
  ErrorMessage,
  StyledLink,
} from "./loginStyles";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { login } = useAuth();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log("Login Data:", data);
    // Dummy authentication logic for frontend testing
    if (data.email === "admin@example.com" && data.password === "password") {
      login("admin");
      navigate("/");
    } else if (
      data.email === "citizen@example.com" &&
      data.password === "password"
    ) {
      login("citizen");
      navigate("/");
    } else if (
      data.email === "technician@example.com" &&
      data.password === "password"
    ) {
      login("technician");
      navigate("/");
    } else {
      alert(
        "Invalid credentials. Please try admin@example.com, citizen@example.com, or technician@example.com with password: password"
      );
    }
  };

  return (
    <FormContainer>
      <h2>Login</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="email"
          placeholder="Email"
          {...register("email", {
            required: "Email is required",
            pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i,
          })}
        />
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

        <Input
          type="password"
          placeholder="Password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
        />
        {errors.password && (
          <ErrorMessage>{errors.password.message}</ErrorMessage>
        )}

        <Button type="submit">Login</Button>
      </Form>
      <p>
        Don't have an account?{" "}
        <StyledLink to="/register">Register here</StyledLink>
      </p>
    </FormContainer>
  );
};

export default Login;
