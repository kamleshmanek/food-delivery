import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

interface HelpSectionProps {
  onContactSupport: () => void;
}

const HelpSection: React.FC<HelpSectionProps> = ({
  onContactSupport,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.helpTitle}>Need Help?</Text>
      <Text style={styles.helpText}>
        Have questions about your order? Our support team is here to help.
      </Text>
      <TouchableOpacity onPress={onContactSupport}>
        <Text style={styles.helpLink}>Contact Support</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HelpSection;
