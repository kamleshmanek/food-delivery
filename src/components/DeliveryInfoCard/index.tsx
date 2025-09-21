import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

interface DeliveryInfoCardProps {
  address: string;
  phone: string;
  paymentMethod: string;
}

const DeliveryInfoCard: React.FC<DeliveryInfoCardProps> = ({
  address,
  phone,
  paymentMethod,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.infoTitle}>Delivery Information</Text>
      <Text style={styles.infoText}>📍 {address}</Text>
      <Text style={styles.infoText}>📞 {phone}</Text>
      <Text style={styles.infoText}>💳 {paymentMethod}</Text>
    </View>
  );
};

export default DeliveryInfoCard;
