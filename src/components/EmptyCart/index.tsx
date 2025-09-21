import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';
import { colors } from '../../theme/colors';

interface EmptyCartProps {
  onShopNow: () => void;
}

const EmptyCart: React.FC<EmptyCartProps> = ({ onShopNow }) => {
  return (
    <View style={styles.container}>
      <View style={styles.animationContainer}>
        <View style={styles.cartIconContainer}>
          <Text style={styles.cartIcon}>🛒</Text>
        </View>
        
        <View style={styles.dotsContainer}>
          <View style={[styles.dot, styles.dot1]} />
          <View style={[styles.dot, styles.dot2]} />
          <View style={[styles.dot, styles.dot3]} />
        </View>
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.title}>Your Cart is Empty</Text>
        
        <Text style={styles.subtitle}>
          Looks like you haven't added any delicious items to your cart yet.
        </Text>
        
        <Text style={styles.description}>
          Browse our menu and add your favorite dishes to get started!
        </Text>

        <TouchableOpacity 
          style={styles.shopButton} 
          onPress={onShopNow}
        >
          <Text style={styles.shopButtonText}>Browse Menu</Text>
          
          <View style={styles.shopButtonIcon}>
            <Text style={styles.shopButtonIconText}>→</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.featuresContainer}>
          <View style={styles.featureItem}>
            <Text style={styles.featureIcon}>🚚</Text>
            <Text style={styles.featureText}>Fast Delivery</Text>
          </View>
          
          <View style={styles.featureItem}>
            <Text style={styles.featureIcon}>💳</Text>
            <Text style={styles.featureText}>Secure Payment</Text>
          </View>
          
          <View style={styles.featureItem}>
            <Text style={styles.featureIcon}>⭐</Text>
            <Text style={styles.featureText}>Quality Food</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default EmptyCart;
