import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

// Guideline sizes are based on standard iPhone 13/13 Pro (375x812)
// This ensures consistency across both Android and iOS
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

// Platform-specific adjustments for better consistency
// Less aggressive adjustments to make Android look better
const platformAdjustment = Platform.OS === 'android' ? 0.98 : 1.0;
const androidFontAdjustment = Platform.OS === 'android' ? 0.97 : 1.0;

const scale = (size: number) => {
  const scaledSize = (width / guidelineBaseWidth) * size;
  return scaledSize * platformAdjustment;
};

const verticalScale = (size: number) => {
  const scaledSize = (height / guidelineBaseHeight) * size;
  return scaledSize * platformAdjustment;
};

const moderateScale = (size: number, factor: number = 0.5) => {
  return size + (scale(size) - size) * factor;
};

// Helper function for consistent spacing
const spacing = (size: number) => {
  const scaled = moderateScale(size);
  return scaled * platformAdjustment;
};

// Helper function for consistent font sizes
const fontSize = (size: number) => {
  const scaled = moderateScale(size, 0.3); // Less aggressive scaling for fonts
  return scaled * androidFontAdjustment;
};

// Helper function for consistent border radius
const borderRadius = (size: number) => {
  const scaled = moderateScale(size);
  return scaled * platformAdjustment;
};

// Helper function for consistent heights
const heightScale = (size: number) => {
  const scaled = verticalScale(size);
  return scaled * platformAdjustment;
};

// Helper function for consistent widths
const widthScale = (size: number) => {
  const scaled = scale(size);
  return scaled * platformAdjustment;
};

export { 
  scale, 
  verticalScale, 
  moderateScale,
  spacing,
  fontSize,
  borderRadius,
  heightScale,
  widthScale
};
