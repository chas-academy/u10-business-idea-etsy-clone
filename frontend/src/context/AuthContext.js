import React from 'react';
import { useState } from 'react';
import api from '../api/api';

export const AuthContext = React.createContext({
  user: null,
  token: null,
  login: async () => {}
});

export function AuthContextProvider(props) {
  const initAuthState = {
    user: null,
    token: null,
    login
  };

  const [authState, setAuthState] = useState(initAuthState);

  async function login(credentials) {
    const result = await api.login(credentials);
    console.log('AuthContext Login', result);

    if (result) {
      setAuthState({ ...authState, user: result.user, token: result.token });
    }
  }

  return <AuthContext.Provider value={authState}>{props.children}</AuthContext.Provider>;
}

export const useAuthContext = () => React.useContext(AuthContext);
