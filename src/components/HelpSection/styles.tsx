import { StyleSheet } from 'react-native';
import { fontSizes } from '../../theme/fonts';
import { colors } from '../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  helpTitle: {
    fontSize: fontSizes.lg,
    fontFamily: 'Manrope-Bold',
    color: colors.text.primary,
    marginBottom: 8,
  },
  helpText: {
    fontSize: fontSizes.base,
    fontFamily: 'Manrope-Regular',
    color: colors.text.tertiary,
    marginBottom: 8,
  },
  helpLink: {
    fontSize: fontSizes.lg,
    fontFamily: 'Manrope-Bold',
    color: colors.text.error,
  },
});
