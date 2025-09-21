import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { styles } from './styles';

interface QuantitySelectorProps {
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
  min?: number;
  max?: number;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  quantity,
  onIncrement,
  onDecrement,
  min = 1,
  max = 99,
}) => {
  const canDecrement = quantity > min;
  const canIncrement = quantity < max;

  return (
    <View style={styles.container}>
      <Text style={styles.quantityLabel}>Qty</Text>
      <View style={styles.quantityControls}>
        <TouchableOpacity
          style={[
            styles.quantityButton,
            !canDecrement && styles.quantityButtonDisabled,
          ]}
          onPress={onDecrement}
          disabled={!canDecrement}
        >
          <Text
            style={[
              styles.quantityButtonText,
              !canDecrement && styles.quantityButtonTextDisabled,
            ]}
          >
            −
          </Text>
        </TouchableOpacity>
        <Text style={styles.quantityValue}>{quantity}</Text>
        <TouchableOpacity
          style={[
            styles.quantityButton,
            !canIncrement && styles.quantityButtonDisabled,
          ]}
          onPress={onIncrement}
          disabled={!canIncrement}
        >
          <Text
            style={[
              styles.quantityButtonText,
              !canIncrement && styles.quantityButtonTextDisabled,
            ]}
          >
            +
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default QuantitySelector;
