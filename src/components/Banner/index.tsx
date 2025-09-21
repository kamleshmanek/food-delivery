import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';

interface BannerProps {
  imageSource: any;
  title: string;
  subtitle: string;
  onPress?: () => void;
}

const Banner: React.FC<BannerProps> = ({ 
  imageSource, 
  title, 
  subtitle, 
  onPress 
}) => {
  return (
    <TouchableOpacity 
      style={styles.container} 
      onPress={onPress}
      activeOpacity={0.9}
    >
      <Image source={imageSource} style={styles.image} />
      <View style={styles.overlay}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Banner;
