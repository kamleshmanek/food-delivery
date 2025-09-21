import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';

interface Category {
  id: string;
  name: string;
  image: any;
}

interface CategoryGridProps {
  categories: Category[];
  onCategoryPress?: (category: Category) => void;
  onSeeAllPress?: () => void;
}

const CategoryGrid: React.FC<CategoryGridProps> = ({ 
  categories, 
  onCategoryPress, 
  onSeeAllPress 
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Categories</Text>
        <TouchableOpacity style={styles.seeAllButton} onPress={onSeeAllPress}>
          <Text style={styles.seeAllText}>See All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.grid}>
        {categories.map(category => (
          <TouchableOpacity 
            key={category.id} 
            style={styles.card}
            onPress={() => onCategoryPress?.(category)}
            activeOpacity={0.7}
          >
            <Image source={category.image} style={styles.image} />
            <Text style={styles.name}>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default CategoryGrid;
