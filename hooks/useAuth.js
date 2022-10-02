import React, { createContext, useContext, useState } from "react";

const DEFAULT_STATE = {
  loggedIn: false,
  user: undefined,
  loading: false,
  error: undefined,
};

const AuthContext = createContext(DEFAULT_STATE);

export function AuthProvider({ children }) {
  const user = useState(null);
  const loggedIn = useState(false);
  const loading = useState(false);
  const error = useState(null);

  const value = {
    loggedIn,
    user,
    loading,
    error,
  };
  console.log(value);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

const useAuth = () => useContext(AuthContext);

export default useAuth;
