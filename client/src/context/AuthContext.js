import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Default to not logged in
  const [userRole, setUserRole] = useState(null); // Default to no role
  const [authToken, setAuthToken] = useState(null); // Store the authentication token

  // Placeholder for login function
  const login = (token, role) => {
    setIsLoggedIn(true);
    setAuthToken(token);
    setUserRole(role);
    localStorage.setItem('token', token); // Store token
    localStorage.setItem('userRole', role); // Store role
  };

  // Placeholder for logout function
  const logout = () => {
    setIsLoggedIn(false);
    setAuthToken(null);
    setUserRole(null);
    localStorage.removeItem('token'); // Clear token
    localStorage.removeItem('userRole'); // Clear role
  };

  // Add an effect to check localStorage on initial load
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedRole = localStorage.getItem('userRole');
    if (storedToken && storedRole) {
      setIsLoggedIn(true);
      setAuthToken(storedToken);
      setUserRole(storedRole);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, userRole, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
