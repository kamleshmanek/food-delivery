import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

interface ProductDetailsCardProps {
  title: string;
  price: number;
  description?: string;
  preparationTime?: string;
  rating?: number;
}

const ProductDetailsCard: React.FC<ProductDetailsCardProps> = ({
  title,
  price,
  description,
  preparationTime = '15-20 min',
  rating = 4.5,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>${price.toFixed(2)}</Text>
      
      {description && (
        <>
          <Text style={styles.sectionTitle}>Description</Text>
          <Text style={styles.description}>{description}</Text>
        </>
      )}
      
      <View style={styles.detailsContainer}>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Preparation Time</Text>
          <Text style={styles.detailValue}>{preparationTime}</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Rating</Text>
          <Text style={styles.detailValue}>⭐ {rating.toFixed(1)}</Text>
        </View>
      </View>
    </View>
  );
};

export default ProductDetailsCard;
