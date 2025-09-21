import React, { useEffect, useState } from 'react';
import { Animated, Easing } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import { SplashLogo } from '../../components/SplashLogo';
import { SplashFeatures } from '../../components/SplashFeatures';
import { SplashLoading } from '../../components/SplashLoading';
import { RootStackNavigationProp } from '../../types/navigation';

type SplashScreenNavigationProp = RootStackNavigationProp<'Splash'>;

export default function SplashScreen() {
  const navigation = useNavigation<SplashScreenNavigationProp>();
  const [fadeAnim] = useState(new Animated.Value(0));
  const [slideAnim] = useState(new Animated.Value(50));
  const [loadingDotIndex, setLoadingDotIndex] = useState(0);

  useEffect(() => {
    // Start entrance animations
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        easing: Easing.ease,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 800,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
    ]).start();

    // Loading dots animation
    const dotsInterval = setInterval(() => {
      setLoadingDotIndex(prev => (prev + 1) % 3);
    }, 500);

    // Navigate to login after delay
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearInterval(dotsInterval);
    };
  }, [navigation, fadeAnim, slideAnim]);

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <Animated.View 
        style={[
          {
            opacity: fadeAnim,
            transform: [{ translateY: slideAnim }],
          }
        ]}
      >
        <SplashLogo />
        <SplashFeatures />
      </Animated.View>

      <SplashLoading loadingDotIndex={loadingDotIndex} />
    </SafeAreaView>
  );
}
