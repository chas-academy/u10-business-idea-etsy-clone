import React from 'react';
import { useState } from 'react';
import api from '../api/api';

export const AuthContext = React.createContext({
  user: null,
  token: null,
  isLoggedIn: false,
  login: async () => {},
  logout: async () => {}
});

export function AuthContextProvider(props) {
  const initAuthState = {
    user: localStorage?.user ? JSON.parse(localStorage.user) : null,
    token: localStorage.token,
    isLoggedIn: localStorage.token ? true : false,
    login,
    logout
  };

  const emptyState = {
    user: null,
    token: undefined,
    isLoggedIn: false,
    login,
    logout
  };

  const [authState, setAuthState] = useState(initAuthState);

  async function login(credentials) {
    const result = await api.login(credentials);

    if (result) {
      localStorage.setItem('token', result.token);
      localStorage.setItem('user', JSON.stringify(result.user));
      api.axios.interceptors.request.use(
        async config => {
          config.headers = {
            ...config.headers,
            Authorization: `Bearer ${result.token}`
          };
          return config;
        },
        error => {
          Promise.reject(error);
        }
      );
      setAuthState({ ...authState, user: result.user, token: result.token, isLoggedIn: true });
    }
  }

  async function logout() {
    localStorage.clear();
    const result = await api.logout();

    setAuthState(emptyState);
  }

  return <AuthContext.Provider value={authState}>{props.children}</AuthContext.Provider>;
}

export const useAuthContext = () => React.useContext(AuthContext);
