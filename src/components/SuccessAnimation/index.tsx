import React, { useEffect, useRef } from 'react';
import { View, Animated, Easing } from 'react-native';
import { styles } from './styles';

interface SuccessAnimationProps {
  onAnimationComplete?: () => void;
  size?: 'small' | 'medium' | 'large';
}

const SuccessAnimation: React.FC<SuccessAnimationProps> = ({
  onAnimationComplete,
  size = 'medium',
}) => {
  const scaleAnim = useRef(new Animated.Value(0)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;
  const rotateAnim = useRef(new Animated.Value(0)).current;
  const checkmarkAnim = useRef(new Animated.Value(0)).current;

  const getSizeStyle = () => {
    switch (size) {
      case 'small':
        return {
          container: {
            width: 60,
            height: 60,
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
          },
          circle: { width: 60, height: 60, borderRadius: 30 },
          checkmark: { fontSize: 24 },
        };
      case 'large':
        return {
          container: { width: 120, height: 120, alignSelf: 'center' },
          circle: { width: 120, height: 120, borderRadius: 60 },
          checkmark: { fontSize: 48 },
        };
      default:
        return {
          container: { width: 80, height: 80 },
          circle: { width: 80, height: 80, borderRadius: 40 },
          checkmark: { fontSize: 32 },
        };
    }
  };

  const sizeStyle = getSizeStyle();

  useEffect(() => {
    // Sequence of animations
    Animated.sequence([
      // Initial fade in and scale up
      Animated.parallel([
        Animated.timing(opacityAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
          easing: Easing.elastic(1.2),
        }),
      ]),

      // Rotation effect
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
        easing: Easing.out(Easing.cubic),
      }),

      // Checkmark drawing effect
      Animated.timing(checkmarkAnim, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
        easing: Easing.out(Easing.cubic),
      }),
    ]).start(() => {
      if (onAnimationComplete) {
        onAnimationComplete();
      }
    });
  }, [opacityAnim, scaleAnim, rotateAnim, checkmarkAnim, onAnimationComplete]);

  const rotateInterpolate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const checkmarkScaleInterpolate = checkmarkAnim.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, 1.2, 1],
  });

  return (
    <View style={[styles.container, sizeStyle.container]}>
      <Animated.View
        style={[
          styles.circle,
          sizeStyle.circle,
          {
            opacity: opacityAnim,
            transform: [{ scale: scaleAnim }, { rotate: rotateInterpolate }],
          },
        ]}
      >
        <Animated.Text
          style={[
            styles.checkmark,
            sizeStyle.checkmark,
            {
              transform: [{ scale: checkmarkScaleInterpolate }],
            },
          ]}
        >
          ✓
        </Animated.Text>
      </Animated.View>

      {/* Success rings animation */}
      <Animated.View
        style={[
          styles.ring,
          styles.ring1,
          {
            opacity: opacityAnim,
            transform: [{ scale: scaleAnim }],
          },
        ]}
      />
      <Animated.View
        style={[
          styles.ring,
          styles.ring2,
          {
            opacity: opacityAnim,
            transform: [{ scale: scaleAnim }],
          },
        ]}
      />
    </View>
  );
};

export default SuccessAnimation;
