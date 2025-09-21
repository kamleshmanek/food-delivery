import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { colors } from '../../theme/colors';

interface CartSummaryProps {
  subtotal: number;
  deliveryFee: number;
  onCheckout: () => void;
  onClearCart: () => void;
}

const CartSummary: React.FC<CartSummaryProps> = ({
  subtotal,
  deliveryFee,
  onCheckout,
  onClearCart,
}) => {
  const total = subtotal + deliveryFee;

  return (
    <View style={styles.container}>
      <View style={styles.summaryCard}>
        <View style={styles.summaryRow}>
          <Text style={styles.label}>Subtotal</Text>
          <Text style={styles.value}>${subtotal.toFixed(2)}</Text>
        </View>
        
        <View style={styles.summaryRow}>
          <Text style={styles.label}>Delivery Fee</Text>
          <Text style={styles.value}>${deliveryFee.toFixed(2)}</Text>
        </View>
        
        <View style={styles.divider} />
        
        <View style={styles.summaryRow}>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.totalValue}>${total.toFixed(2)}</Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.clearButton} 
          onPress={onClearCart}
        >
          <Text style={styles.clearButtonText}>Clear Cart</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.checkoutButton} 
          onPress={onCheckout}
        >
          <View style={styles.checkoutButtonContent}>
            <Text style={styles.checkoutButtonText}>Checkout</Text>
            <Text style={styles.checkoutButtonPrice}>${total.toFixed(2)}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartSummary;
