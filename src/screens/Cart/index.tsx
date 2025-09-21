import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { RootStackNavigationProp } from '../../types/navigation';
import CartItem from '../../components/CartItem';
import CartSummary from '../../components/CartSummary';
import EmptyCart from '../../components/EmptyCart';
import { colors } from '../../theme/colors';

type CartScreenNavigationProp = RootStackNavigationProp<'Cart'>;

const CartScreen = () => {
  const navigation = useNavigation<CartScreenNavigationProp>();
  const { cart, clearCart, updateQuantity } = useContext(CartContext)!;
  console.log('Cart:', cart);

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleCheckout = () => {
    navigation.navigate('OrderConfirm');
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    if (updateQuantity) {
      updateQuantity(id, quantity);
    }
  };

  const handleRemoveItem = (id: string) => {
    if (updateQuantity) {
      updateQuantity(id, 0);
    }
  };

  const renderCartItem = ({ item }: { item: any }) => (
    <CartItem
      item={item}
      onUpdateQuantity={handleUpdateQuantity}
      onRemove={handleRemoveItem}
    />
  );

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>My Cart</Text>
        <View style={styles.spacer} />
      </View>

      {cart.length === 0 ? (
        <EmptyCart onShopNow={() => navigation.navigate('Home')} />
      ) : (
        <>
          <FlatList
            data={cart}
            renderItem={renderCartItem}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.cartList}
            showsVerticalScrollIndicator={false}
          />

          <CartSummary
            subtotal={getTotalPrice()}
            deliveryFee={2.99}
            onCheckout={handleCheckout}
            onClearCart={clearCart}
          />
        </>
      )}
    </SafeAreaView>
  );
};

export default CartScreen;
