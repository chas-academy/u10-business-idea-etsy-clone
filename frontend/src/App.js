import React from 'react';
import './App.scss';
import { AuthContextProvider } from './context/AuthContext';
import AuthenticatedApp from './AuthenticatedApp';

export default function App() {
  return (
    <AuthContextProvider>
      <AuthenticatedApp />
    </AuthContextProvider>
  );
}
