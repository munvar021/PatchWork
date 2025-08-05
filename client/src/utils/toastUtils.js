import { toast } from 'react-toastify';
import theme from '../styles/theme';

export const showToast = (message, type, customStyles = {}) => {
  const baseStyles = {
    ...theme.glassmorphism,
    borderRadius: theme.borderRadius.large,
    padding: theme.padding.medium,
    color: "white",
    minWidth: "250px", // Make it compact
  };

  const successStyles = {
    background: "rgba(0, 128, 0, 0.2)",
  };

  const errorStyles = {
    background: "rgba(255, 0, 0, 0.2)",
  };

  const finalStyles = {
    ...baseStyles,
    ...(type === 'success' ? successStyles : errorStyles),
    ...customStyles,
  };

  toast[type](message, {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    closeButton: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    style: finalStyles,
  });
};