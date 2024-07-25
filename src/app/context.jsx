import React, { createContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);

  const setLogin = (status) => {
    setIsAuthenticated(status);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  return (
    <UserContext.Provider value={{ isAuthenticated, setIsAuthenticated: setLogin, loading, setLoading, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
