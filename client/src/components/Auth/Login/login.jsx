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
import { loginUser } from "../../../services/api";
import { showToast } from '../../../utils/toastUtils';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { login } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const res = await loginUser(data);
      login(res.token, res.role);
      if (res.role === 'citizen') {
        navigate("/citizen/home");
      } else if (res.role === 'technician') {
        navigate("/technician/issues");
      } else if (res.role === 'admin') {
        navigate("/admin/dashboard");
      } else {
        navigate("/");
      }
    } catch (err) {
      console.error("Login error:", err.response ? err.response.data : err.message);
      showToast(err.response ? err.response.data.msg : "Login failed", 'error');
    }
  };

  return (
    <FormContainer>
      <div className="form-content">
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
      </div>
    </FormContainer>
  );
};

export default Login;
