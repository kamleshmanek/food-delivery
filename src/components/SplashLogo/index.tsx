import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles.tsx';

interface SplashLogoProps {
  animatedStyle?: any;
}

export const SplashLogo: React.FC<SplashLogoProps> = ({ animatedStyle: _animatedStyle }) => {
  return (
    <View style={styles.logoContainer}>
      <View style={styles.logoCircle}>
        <Text style={styles.logoText}>🍕</Text>
      </View>
      <Text style={styles.title}>Food Delivery</Text>
      <Text style={styles.subtitle}>Deliciousness delivered to your doorstep</Text>
    </View>
  );
};

export default SplashLogo;
