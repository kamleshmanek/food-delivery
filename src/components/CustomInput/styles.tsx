import { StyleSheet } from 'react-native';
import { fontSizes, fonts } from '../../theme/fonts';
import { colors } from '../../theme/colors';

export const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: colors.border.medium,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    fontSize: fontSizes.lg,
    fontFamily: fonts.regular,
    color: colors.text.primary,
    backgroundColor: colors.background.primary,
    elevation: 1,
    shadowColor: colors.shadow.light,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
});

export default styles;
