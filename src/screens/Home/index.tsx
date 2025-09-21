import React, { useContext } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { CartContext } from '../../context/CartContext';
import SearchBar from '../../components/SearchBar';
import Banner from '../../components/Banner';
import CategoryGrid from '../../components/CategoryGrid';
import ProductGrid from '../../components/ProductGrid';
import { styles } from './styles';
import { RootStackNavigationProp } from '../../types/navigation';

type HomeScreenNavigationProp = RootStackNavigationProp<'Home'>;

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const { addToCart } = useContext(CartContext)!;

  const featuredProducts = [
    {
      id: '1',
      name: 'Margherita Pizza',
      price: 12.99,
      image: require('../../assets/images/pizza.jpg'),
    },
    {
      id: '2',
      name: 'Chicken Burger',
      price: 8.99,
      image: require('../../assets/images/burger.jpg'),
    },
    {
      id: '3',
      name: 'Iced Coffee',
      price: 4.99,
      image: require('../../assets/images/coffee.jpeg'),
    },
    {
      id: '4',
      name: 'Pasta Carbonara',
      price: 14.99,
      image: require('../../assets/images/pasta.jpg'),
    },
  ];

  const categories = [
    { id: '1', name: 'Pizza', image: require('../../assets/images/pizza.jpg') },
    {
      id: '2',
      name: 'Burgers',
      image: require('../../assets/images/burger.jpg'),
    },
    {
      id: '3',
      name: 'Salads',
      image: require('../../assets/images/salad.jpg'),
    },
    { id: '4', name: 'Pasta', image: require('../../assets/images/pasta.jpg') },
    {
      id: '5',
      name: 'Drinks',
      image: require('../../assets/images/coffee.jpeg'),
    },
    {
      id: '6',
      name: 'Desserts',
      image: require('../../assets/images/desert.webp'),
    },
  ];

  const handleProductPress = (product: any) => {
    console.log('Product pressed:', product);
    navigation.navigate('Product', { product });
  };

  const handleAddToCart = (product: any) => {
    // Convert require() asset to URI format for Android compatibility
    const imageUri = typeof product.image === 'number' 
      ? Image.resolveAssetSource(product.image).uri
      : product.image;

    addToCart({
      ...product,
      image: imageUri,
      quantity: 1,
    });
  };

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <View style={styles.header}>
        <Text style={styles.title}>Food Delivery</Text>
        <TouchableOpacity
          style={styles.cartButton}
          onPress={() => navigation.navigate('Cart')}
        >
          <Text style={styles.cartIcon}>🛒</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Search Bar */}
        <SearchBar onSearch={() => console.log('Search pressed')} />

        {/* Banner */}
        <Banner
          imageSource={require('../../assets/images/pizza.jpg')}
          title="Special Offer!"
          subtitle="Get 20% off on your first order"
          onPress={() => console.log('Banner pressed')}
        />

        {/* Categories */}
        <CategoryGrid
          categories={categories}
          onCategoryPress={category =>
            console.log('Category pressed:', category.name)
          }
          onSeeAllPress={() => console.log('See all categories pressed')}
        />

        {/* Featured Products */}
        <ProductGrid
          products={featuredProducts}
          onProductPress={handleProductPress}
          onAddToCart={handleAddToCart}
          onSeeAllPress={() => console.log('See all products pressed')}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
