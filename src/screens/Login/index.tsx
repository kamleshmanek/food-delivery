import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Alert, KeyboardAvoidingView, Platform, ScrollView, Keyboard } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import { CustomInput } from '../../components/CustomInput';
import { RootStackNavigationProp } from '../../types/navigation';

type LoginScreenNavigationProp = RootStackNavigationProp<'Login'>;

interface LoginHeaderProps {
  keyboardVisible: boolean;
}

interface LoginFormProps {
  onSendOTP: () => void;
}

interface OTPButtonProps {
  onPress: () => void;
  title?: string;
}

const LoginHeader: React.FC<LoginHeaderProps> = ({ keyboardVisible }) => {
  return (
    <View style={[
      styles.headerContainer,
      keyboardVisible && styles.headerContainerKeyboardVisible
    ]}>
      <View style={[
        styles.logoContainer,
        keyboardVisible && styles.logoContainerKeyboardVisible
      ]}>
        <Text style={[
          styles.logoText,
          keyboardVisible && styles.logoTextKeyboardVisible
        ]}>🍕</Text>
      </View>
      <Text style={[
        styles.title,
        keyboardVisible && styles.titleKeyboardVisible
      ]}>Welcome to Food Delivery</Text>
      {!keyboardVisible && (
        <Text style={styles.subtitle}>
          Sign in to continue ordering your favorite meals
        </Text>
      )}
    </View>
  );
};

const OTPButton: React.FC<OTPButtonProps> = ({ onPress, title = 'Send OTP' }) => {
  return (
    <TouchableOpacity style={styles.otpButton} onPress={onPress}>
      <Text style={styles.otpButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const LoginForm: React.FC<LoginFormProps> = ({ onSendOTP }) => {
  return (
    <View style={styles.formContainer}>
      <CustomInput 
        placeholder="Email" 
        keyboardType="email-address" 
      />
      <CustomInput 
        placeholder="Phone Number" 
        keyboardType="phone-pad" 
      />
      <OTPButton onPress={onSendOTP} />
    </View>
  );
};

export default function LoginScreen() {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardVisible(true);
    });
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardVisible(false);
    });

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const handleSendOTP = () => {
    // In a real app, you would validate inputs and send OTP
    Alert.alert(
      'OTP Sent',
      'A verification code has been sent to your phone number.',
    );
    navigation.replace('Home');
  };

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoidingView}
      >
        <ScrollView 
          contentContainerStyle={[
            styles.scrollContent,
            keyboardVisible && styles.scrollContentKeyboardVisible
          ]}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <LoginHeader keyboardVisible={keyboardVisible} />
          <LoginForm onSendOTP={handleSendOTP} />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
