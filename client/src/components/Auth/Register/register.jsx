import React from "react";
import { useForm } from "react-hook-form";
import {
  FormContainer,
  Form,
  Input,
  Button,
  ErrorMessage,
  StyledLink,
} from "./registerStyles";
import { registerUser } from "../../../services/api";
import { useNavigate } from "react-router-dom";


const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const password = watch("password", "");
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const res = await registerUser(data);
      console.log("Registration successful:", res.data);
      navigate("/login");
    } catch (err) {
      console.error("Registration error:", err.response ? err.response.data : err.message);
    }
  };

  return (
    <FormContainer>
      <div className="form-content">
        <h2>Register</h2>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="text"
            placeholder="Username"
            {...register("username", {
              required: "Username is required",
              minLength: {
                value: 3,
                message: "Username must be at least 3 characters",
              },
            })}
          />
          {errors.username && (
            <ErrorMessage>{errors.username.message}</ErrorMessage>
          )}

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

          <Input
            type="password"
            placeholder="Confirm Password"
            {...register("confirmPassword", {
              required: "Confirm Password is required",
              validate: (value) =>
                value === password || "The passwords do not match",
            })}
          />
          {errors.confirmPassword && (
            <ErrorMessage>{errors.confirmPassword.message}</ErrorMessage>
          )}

          <Button type="submit">Register</Button>
        </Form>
        <p>
          Already have an account? <StyledLink to="/login">Login here</StyledLink>
        </p>
      </div>
    </FormContainer>
  );
};

export default Register;
