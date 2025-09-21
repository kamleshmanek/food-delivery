import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import { RouteProp } from '@react-navigation/native';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import {
  RootStackParamList,
  RootStackNavigationProp,
} from '../../types/navigation';
import ProductImage from '../../components/ProductImage';
import ProductDetailsCard from '../../components/ProductDetailsCard';
import QuantitySelector from '../../components/QuantitySelector';

type ProductScreenNavigationProp = RootStackNavigationProp<'Product'>;
type ProductScreenRouteProp = RouteProp<RootStackParamList, 'Product'>;

const ProductScreen = () => {
  const navigation = useNavigation<ProductScreenNavigationProp>();
  const route = useRoute<ProductScreenRouteProp>();
  const { addToCart } = useContext(CartContext)!;
  const { product } = route.params;
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    console.log('Adding to cart:', product);

    // Convert require() asset to URI format for Android compatibility
    const imageUri = typeof product.image === 'number' 
      ? Image.resolveAssetSource(product.image).uri
      : product.image;

    const cartItem = {
      ...product,
      image: imageUri,
      quantity,
    };
    addToCart(cartItem);
    navigation.navigate('Cart');
  };

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={['left', 'right', 'bottom']}>
      <View style={styles.statusBarSpacer} />
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.contentContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
          style={styles.scrollView}
        >
          <ProductImage source={product.image} style={styles.productImage} />

          <ProductDetailsCard
            title={product.name}
            price={product.price}
            description={`Delicious ${product.name.toLowerCase()} made with fresh ingredients. Perfect for a quick meal or sharing with friends and family.`}
          />
          <View style={styles.bottomSpacing} />
        </ScrollView>
      </View>

      <View style={styles.footer}>
        <View style={styles.footerContent}>
          <QuantitySelector
            quantity={quantity}
            onIncrement={incrementQuantity}
            onDecrement={decrementQuantity}
          />
          <TouchableOpacity
            style={styles.addToCartButton}
            onPress={handleAddToCart}
          >
            <Text style={styles.addToCartButtonText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProductScreen;
