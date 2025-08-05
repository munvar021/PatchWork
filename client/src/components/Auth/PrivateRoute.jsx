import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'; // Import useAuth

const PrivateRoute = ({ children, allowedRoles }) => {
  const { isLoggedIn, userRole } = useAuth(); // Get isLoggedIn and userRole from context

  if (!isLoggedIn) {
    // Not logged in, redirect to login
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(userRole)) {
    // Logged in but unauthorized role, redirect to a suitable page (e.g., home or unauthorized)
    // For now, let's redirect to home. You might want a dedicated unauthorized page.
    return <Navigate to="/" replace />;
  }

  return children;
};

export default PrivateRoute;
