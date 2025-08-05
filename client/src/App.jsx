import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/Layout/layout';
import { GlobalStyle } from './styles/GlobalStyles';
import { AuthProvider } from './context/AuthContext';
import Toast from './components/Toast/Toast';

function App() {
  const [toastMessage, setToastMessage] = React.useState(null);
  const [toastType, setToastType] = React.useState('info');
  const [toastDuration, setToastDuration] = React.useState(3000);

  const showAppToast = (message, type = 'info', duration = 3000) => {
    setToastMessage(message);
    setToastType(type);
    setToastDuration(duration);
  };

  const closeAppToast = () => {
    setToastMessage(null);
  };

  // Make showAppToast globally accessible for toastUtils.js
  React.useEffect(() => {
    window.showAppToast = showAppToast;
  }, []);

  return (
    <Router>
      <AuthProvider>
        <GlobalStyle />
        <Layout />
        <Toast
          message={toastMessage}
          type={toastType}
          duration={toastDuration}
          onClose={closeAppToast}
        />
      </AuthProvider>
    </Router>
  );
}

export default App;