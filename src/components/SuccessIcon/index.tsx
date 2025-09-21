import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

interface SuccessIconProps {
  icon?: string;
  size?: 'small' | 'medium' | 'large';
}

const SuccessIcon: React.FC<SuccessIconProps> = ({ 
  icon = '✅', 
  size = 'medium' 
}) => {
  const getSizeStyle = () => {
    switch (size) {
      case 'small':
        return {
          container: { width: 60, height: 60, borderRadius: 30 },
          icon: { fontSize: 24 }
        };
      case 'large':
        return {
          container: { width: 100, height: 100, borderRadius: 50 },
          icon: { fontSize: 40 }
        };
      default:
        return {
          container: { width: 80, height: 80, borderRadius: 40 },
          icon: { fontSize: 32 }
        };
    }
  };

  const sizeStyle = getSizeStyle();

  return (
    <View style={[styles.container, sizeStyle.container]}>
      <Text style={[styles.icon, sizeStyle.icon]}>{icon}</Text>
    </View>
  );
};

export default SuccessIcon;
