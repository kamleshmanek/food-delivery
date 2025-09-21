import React from 'react';
import { ScrollView, Text, Alert, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { RootStackNavigationProp } from '../../types/navigation';
import { styles } from './styles';
import SuccessAnimation from '../../components/SuccessAnimation';
import OrderDetailsCard from '../../components/OrderDetailsCard';
import DeliveryInfoCard from '../../components/DeliveryInfoCard';
import ActionButtons from '../../components/ActionButtons';
import HelpSection from '../../components/HelpSection';

type OrderConfirmationScreenNavigationProp =
  RootStackNavigationProp<'OrderConfirm'>;

const OrderConfirmationScreen = () => {
  const navigation = useNavigation<OrderConfirmationScreenNavigationProp>();
  const { clearCart } = useContext(CartContext)!;

  const handleTrackOrder = () => {
    Alert.alert(
      'Track Order',
      'Would you like to call customer service to track your order?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Call', onPress: () => Linking.openURL('tel:+1234567890') },
      ],
    );
  };

  const handleContinueShopping = () => {
    clearCart();
    navigation.navigate('Home');
  };

  const handleContactSupport = () => {
    Linking.openURL('tel:+1234567890');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <Text style={styles.title}>Order Confirmed!</Text>
        <Text style={styles.subtitle}>
          Your delicious food is on its way to you
        </Text>

        <SuccessAnimation size="large" />

        <OrderDetailsCard
          orderNumber="FD2024001"
          estimatedTime="25-35 minutes"
        />

        <DeliveryInfoCard
          address="123 Main Street, City, State 12345"
          phone="+1 (555) 123-4567"
          paymentMethod="Paid via Card"
        />

        <ActionButtons
          onTrackOrder={handleTrackOrder}
          onContinueShopping={handleContinueShopping}
        />

        <HelpSection onContactSupport={handleContactSupport} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default OrderConfirmationScreen;
