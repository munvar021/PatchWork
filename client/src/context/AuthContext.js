import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Default to not logged in
  const [userRole, setUserRole] = useState(null); // Default to no role

  // Placeholder for login function
  const login = (role) => {
    setIsLoggedIn(true);
    setUserRole(role);
    // In a real app, you'd handle JWT, store tokens, etc.
  };

  // Placeholder for logout function
  const logout = () => {
    setIsLoggedIn(false);
    setUserRole(null);
    // Clear tokens, etc.
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, userRole, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
