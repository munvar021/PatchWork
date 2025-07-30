const theme = {
  colors: {
    primary: 'rgba(255, 255, 255, 0.2)', // Frosted White
    accent: '#1976D2', // Aurora Blue
    action: '#FF7043', // Coral Orange
    success: '#66BB6A', // Mint Green
    warning: '#FFCA28', // Soft Amber
    error: '#EF5350', // Alert Red
    textPrimary: '#212121', // Midnight Black
    textSecondary: '#757575', // Soft Graphite
    border: 'rgba(255, 255, 255, 0.3)', // Light Mist
    background: '#F5F5F5', // Cloud White
  },
  gradients: {
    hero: 'linear-gradient(145deg, rgba(255,255,255,0.15), rgba(255,255,255,0.05))',
    button: 'linear-gradient(to right, #FF7043, #FFCA28)',
  },
  glassmorphism: {
    background: 'rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(16px)',
    webkitBackdropFilter: 'blur(16px)',
    borderRadius: '12px',
    border: '1px solid rgba(255, 255, 255, 0.3)',
  },
  fonts: {
    primary: "'Poppins', sans-serif",
    secondary: "'Roboto', sans-serif",
    weights: {
      light: 300,
      regular: 500,
      bold: 700,
    },
  },
};

export default theme;