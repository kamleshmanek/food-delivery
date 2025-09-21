import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { styles } from './styles';

interface ActionButtonsProps {
  onTrackOrder: () => void;
  onContinueShopping: () => void;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({
  onTrackOrder,
  onContinueShopping,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.trackButton} 
        onPress={onTrackOrder}
      >
        <Text style={styles.trackButtonText}>Track Order</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.continueButton} 
        onPress={onContinueShopping}
      >
        <Text style={styles.continueButtonText}>Continue Shopping</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ActionButtons;
