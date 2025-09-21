import { StyleSheet } from 'react-native';
import { fontSizes } from '../../theme/fonts';
import { colors } from '../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background.primary,
    padding: 20,
    borderRadius: 15,
    width: '100%',
    marginBottom: 20,
    elevation: 4,
    shadowColor: colors.shadow.dark,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  infoTitle: {
    fontSize: fontSizes.lg,
    fontFamily: 'Manrope-Bold',
    color: colors.text.primary,
    marginBottom: 12,
  },
  infoText: {
    fontSize: fontSizes.lg,
    fontFamily: 'Manrope-Regular',
    color: colors.text.secondary,
    marginBottom: 8,
  },
});
