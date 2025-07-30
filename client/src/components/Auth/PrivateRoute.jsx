import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, allowedRoles }) => {
  // Placeholder for actual authentication logic
  // In a real application, you would get the user's role from
  // a context, Redux store, or decoded JWT.
  const userRole = 'citizen'; // This should be dynamic based on login

  if (!userRole || (allowedRoles && !allowedRoles.includes(userRole))) {
    // Redirect to a login page or unauthorized page
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoute;
