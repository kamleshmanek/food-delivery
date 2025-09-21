import { StyleSheet } from 'react-native';
import { fontSizes } from '../../theme/fonts';
import { colors } from '../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 20,
  },
  trackButton: {
    backgroundColor: colors.text.error,
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  trackButtonText: {
    color: colors.text.inverse,
    fontSize: fontSizes.lg,
    fontFamily: 'Manrope-Bold',
  },
  continueButton: {
    backgroundColor: colors.background.secondary,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border.light,
  },
  continueButtonText: {
    color: colors.text.primary,
    fontSize: fontSizes.lg,
    fontFamily: 'Manrope-Bold',
  },
});
