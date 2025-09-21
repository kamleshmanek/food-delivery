import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles.tsx';

interface SplashFeaturesProps {
  animatedStyle?: any;
}

export const SplashFeatures: React.FC<SplashFeaturesProps> = ({ animatedStyle: _animatedStyle }) => {
  return (
    <View style={styles.featuresContainer}>
      <View style={styles.featureItem}>
        <Text style={styles.featureIcon}>🚀</Text>
        <Text style={styles.featureText}>Fast Delivery</Text>
      </View>
      <View style={styles.featureItem}>
        <Text style={styles.featureIcon}>🍔</Text>
        <Text style={styles.featureText}>Best Quality</Text>
      </View>
      <View style={styles.featureItem}>
        <Text style={styles.featureIcon}>💳</Text>
        <Text style={styles.featureText}>Easy Payment</Text>
      </View>
    </View>
  );
};

export default SplashFeatures;
