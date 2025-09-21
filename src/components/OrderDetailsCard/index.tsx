import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

interface OrderDetailsCardProps {
  orderNumber: string;
  estimatedTime: string;
}

const OrderDetailsCard: React.FC<OrderDetailsCardProps> = ({
  orderNumber,
  estimatedTime,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.orderNumber}>Order #{orderNumber}</Text>
      <Text style={styles.estimatedTime}>
        Estimated delivery: {estimatedTime}
      </Text>
    </View>
  );
};

export default OrderDetailsCard;
