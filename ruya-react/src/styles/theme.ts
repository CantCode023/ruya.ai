import { createGlobalStyle } from 'styled-components';

// Define the theme colors and variables
export const theme = {
  colors: {
    // Primary colors
    primary: '#8A85FF',     // Purple accent color
    secondary: '#53C5FF',   // Blue accent color
    accent1: '#FF53C5',     // Pink accent color
    accent2: '#53FFC5',     // Teal accent color
    
    // Gradient colors
    gradient1: 'linear-gradient(135deg, #8A85FF 0%, #53C5FF 100%)',
    gradient2: 'linear-gradient(135deg, #FF53C5 0%, #8A85FF 100%)',
    gradient3: 'linear-gradient(135deg, #53FFC5 0%, #53C5FF 100%)',
    auroraGradient: 'linear-gradient(135deg, rgba(138, 133, 255, 0.5) 0%, rgba(83, 197, 255, 0.5) 25%, rgba(255, 83, 197, 0.5) 50%, rgba(83, 255, 197, 0.5) 75%, rgba(138, 133, 255, 0.5) 100%)',
    
    // Background colors
    background: '#0A0A1A',   // Deep blue-black background
    surface: 'rgba(30, 30, 46, 0.7)',     // Semi-transparent card background
    surfaceLight: 'rgba(45, 45, 65, 0.7)', // Lighter semi-transparent surface
    
    // Text colors
    textPrimary: '#FFFFFF',  // Primary text
    textSecondary: '#B0B0B0', // Secondary text
    textDisabled: '#6C6C6C',  // Disabled text
    
    // Status colors
    success: '#4CAF50',      // Success state
    error: '#FF5252',        // Error state
    warning: '#FFC107',      // Warning state
    info: '#2196F3',         // Info state
    
    // Border and divider
    border: 'rgba(83, 197, 255, 0.3)',       // Semi-transparent border color
    divider: 'rgba(138, 133, 255, 0.2)',      // Semi-transparent divider color
    
    // Glassmorphism
    glass: 'rgba(30, 30, 46, 0.5)',  // Glass effect base color
  },
  
  // Typography
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    fontSizes: {
      xs: '0.75rem',    // 12px
      sm: '0.875rem',   // 14px
      md: '1rem',       // 16px
      lg: '1.25rem',    // 20px
      xl: '1.5rem',     // 24px
      xxl: '2rem',      // 32px
      xxxl: '3rem',     // 48px
    },
    fontWeights: {
      light: 300,
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
    },
  },
  
  // Spacing
  spacing: {
    xs: '0.25rem',    // 4px
    sm: '0.5rem',     // 8px
    md: '1rem',       // 16px
    lg: '1.5rem',     // 24px
    xl: '2rem',       // 32px
    xxl: '3rem',      // 48px
  },
  
  // Borders
  borders: {
    radius: {
      sm: '4px',
      md: '8px',
      lg: '12px',
      xl: '16px',
      circle: '50%',
    },
  },
  
  // Shadows
  shadows: {
    sm: '0 2px 4px rgba(0, 0, 0, 0.1)',
    md: '0 4px 8px rgba(0, 0, 0, 0.12)',
    lg: '0 8px 16px rgba(0, 0, 0, 0.14)',
    xl: '0 12px 24px rgba(0, 0, 0, 0.16)',
  },
  
  // Transitions
  transitions: {
    short: '0.15s ease-in-out',
    medium: '0.25s ease-in-out',
    long: '0.35s ease-in-out',
  },
};

// Global styles
export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: ${theme.typography.fontFamily};
    background-color: ${theme.colors.background};
    color: ${theme.colors.textPrimary};
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  a {
    color: ${theme.colors.primary};
    text-decoration: none;
    transition: color ${theme.transitions.short};
    
    &:hover {
      color: ${theme.colors.secondary};
    }
  }
  
  button {
    font-family: ${theme.typography.fontFamily};
    cursor: pointer;
  }
  
  input, textarea {
    font-family: ${theme.typography.fontFamily};
  }
  
  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  
  ::-webkit-scrollbar-track {
    background: ${theme.colors.background};
  }
  
  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.surfaceLight};
    border-radius: 4px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: ${theme.colors.border};
  }
`;