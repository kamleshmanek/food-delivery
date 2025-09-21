// Color definitions for the Food Delivery app

export const colors = {
  // Primary Colors
  primary: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#14532d',
    main: '#ed7647', // Primary brand color
  },
  
  // Secondary Colors
  secondary: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
    main: '#64748b',
  },
  
  // Accent Colors
  accent: {
    red: {
      50: '#fef2f2',
      100: '#fee2e2',
      200: '#fecaca',
      300: '#fca5a5',
      400: '#f87171',
      500: '#ef4444',
      600: '#dc2626',
      700: '#b91c1c',
      800: '#991b1b',
      900: '#7f1d1d',
      main: '#e74c3c',
    },
    blue: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a',
      main: '#3b82f6',
    },
  },
  
  // Neutral Colors
  neutral: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
    main: '#737373',
  },
  
  // Semantic Colors
  semantic: {
    success: '#22c55e',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#3b82f6',
  },
  
  // Background Colors
  background: {
    primary: '#ffffff',
    secondary: '#f8fafc',
    tertiary: '#f1f5f9',
    dark: '#1a202c',
  },
  
  // Text Colors
  text: {
    primary: '#1a202c',
    secondary: '#475569',
    tertiary: '#64748b',
    muted: '#94a3b8',
    inverse: '#ffffff',
    success: '#059669',
    error: '#e74c3c',
    link: '#059669',
  },
  
  // Border Colors
  border: {
    light: '#e2e8f0',
    medium: '#cbd5e1',
    dark: '#94a3b8',
    focus: '#3b82f6',
  },
  
  // Shadow Colors
  shadow: {
    light: 'rgba(0, 0, 0, 0.05)',
    medium: 'rgba(0, 0, 0, 0.08)',
    dark: 'rgba(0, 0, 0, 0.1)',
  },
  
  // Status Colors
  status: {
    online: '#22c55e',
    offline: '#64748b',
    pending: '#f59e0b',
    processing: '#3b82f6',
    completed: '#22c55e',
    cancelled: '#ef4444',
  },
};

// Common color combinations for easy access
export const colorPalettes = {
  primary: {
    background: colors.background.primary,
    text: colors.text.primary,
    border: colors.border.light,
    shadow: colors.shadow.medium,
  },
  
  secondary: {
    background: colors.background.secondary,
    text: colors.text.secondary,
    border: colors.border.light,
    shadow: colors.shadow.light,
  },
  
  success: {
    background: colors.primary[50],
    text: colors.text.success,
    border: colors.primary[200],
    shadow: colors.shadow.light,
  },
  
  error: {
    background: colors.accent.red[50],
    text: colors.text.error,
    border: colors.accent.red[200],
    shadow: colors.shadow.light,
  },
  
  warning: {
    background: '#fef3c7',
    text: colors.semantic.warning,
    border: '#fcd34d',
    shadow: colors.shadow.light,
  },
};

// Helper functions for color manipulation
export const getColorOpacity = (color: string, opacity: number): string => {
  // Convert hex to rgba with opacity
  const hex = color.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

export const getContrastColor = (backgroundColor: string): string => {
  // Simple contrast calculation - returns white or black based on background brightness
  const hex = backgroundColor.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 128 ? '#000000' : '#ffffff';
};
