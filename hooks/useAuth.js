import React, { createContext, useContext } from "react";

const DEFAULT_STATE = {
  loggedIn: false,
  user: undefined,
  loading: false,
  error: undefined,
};

const AuthContext = createContext(DEFAULT_STATE);

export function AuthProvider({ children }) {
  const user = DEFAULT_STATE.user;
  const loggedIn = DEFAULT_STATE.loggedIn;
  const loading = DEFAULT_STATE.loading;
  const error = DEFAULT_STATE.error;

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
