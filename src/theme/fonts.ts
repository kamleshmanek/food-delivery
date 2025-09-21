import { Platform } from 'react-native';

export const fonts = {
  // Font family names
  regular: 'Manrope-Regular',
  medium: 'Manrope-Medium',
  bold: 'Manrope-Bold',
  
  // Platform-specific adjustments if needed
  ios: {
    regular: 'Manrope-Regular',
    medium: 'Manrope-Medium',
    bold: 'Manrope-Bold',
  },
  android: {
    regular: 'Manrope-Regular',
    medium: 'Manrope-Medium',
    bold: 'Manrope-Bold',
  },
};

// Helper function to get font family based on platform
export const getFontFamily = (weight: 'regular' | 'medium' | 'bold' = 'regular') => {
  if (Platform.OS === 'ios') {
    return fonts.ios[weight];
  } else {
    return fonts.android[weight];
  }
};

// Font sizes
export const fontSizes = {
  xs: 10,
  sm: 12,
  base: 14,
  lg: 16,
  xl: 18,
  '2xl': 20,
  '3xl': 24,
  '4xl': 28,
  '5xl': 32,
  '6xl': 36,
};
