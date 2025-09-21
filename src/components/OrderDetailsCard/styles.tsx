import { StyleSheet } from 'react-native';
import { fontSizes } from '../../theme/fonts';
import { colors } from '../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background.primary,
    padding: 20,
    borderRadius: 15,
    width: '100%',
    alignItems: 'center',
    elevation: 4,
    shadowColor: colors.shadow.dark,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginBottom: 20,
    marginTop: 20,
  },
  orderNumber: {
    fontSize: fontSizes.lg,
    fontFamily: 'Manrope-Bold',
    color: colors.text.primary,
    marginBottom: 8,
  },
  estimatedTime: {
    fontSize: fontSizes.lg,
    fontFamily: 'Manrope-Bold',
    color: colors.text.error,
  },
});
