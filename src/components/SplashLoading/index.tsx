import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles.tsx';

interface SplashLoadingProps {
  loadingDotIndex: number;
}

export const SplashLoading: React.FC<SplashLoadingProps> = ({ loadingDotIndex }) => {
  return (
    <View style={styles.loadingContainer}>
      <Text style={styles.loadingText}>Preparing your experience</Text>
      <View style={styles.dotsContainer}>
        <View style={[styles.dot, loadingDotIndex === 0 && styles.dotActive]} />
        <View style={[styles.dot, loadingDotIndex === 1 && styles.dotActive]} />
        <View style={[styles.dot, loadingDotIndex === 2 && styles.dotActive]} />
      </View>
    </View>
  );
};

export default SplashLoading;
