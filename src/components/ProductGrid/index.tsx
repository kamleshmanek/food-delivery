import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';

interface Product {
  id: string;
  name: string;
  price: number;
  image: any;
}

interface ProductGridProps {
  products: Product[];
  onProductPress?: (product: Product) => void;
  onAddToCart?: (product: Product) => void;
  onSeeAllPress?: () => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ 
  products, 
  onProductPress, 
  onAddToCart,
  onSeeAllPress 
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Featured Products</Text>
        <TouchableOpacity style={styles.seeAllButton} onPress={onSeeAllPress}>
          <Text style={styles.seeAllText}>See All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.grid}>
        {products.map(product => (
          <TouchableOpacity 
            key={product.id} 
            style={styles.card}
            onPress={() => onProductPress?.(product)}
            activeOpacity={0.7}
          >
            <Image source={product.image} style={styles.image} />
            <Text style={styles.name}>{product.name}</Text>
            <Text style={styles.price}>${product.price}</Text>
            <TouchableOpacity 
              style={styles.addButton} 
              onPress={(e) => {
                e.stopPropagation();
                onAddToCart?.(product);
              }}
              activeOpacity={0.7}
            >
              <Text style={styles.addButtonText}>+</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default ProductGrid;
