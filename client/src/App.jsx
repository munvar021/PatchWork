import React from 'react';
import Layout from './components/Layout/layout';
import { GlobalStyle } from './styles/GlobalStyles';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <GlobalStyle />
      <Layout />
    </AuthProvider>
  );
}

export default App;