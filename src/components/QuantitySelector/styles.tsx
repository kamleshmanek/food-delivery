import { StyleSheet } from 'react-native';
import { fontSizes, fonts } from '../../theme/fonts';
import { colors } from '../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.background.secondary,
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 12,
    elevation: 2,
    shadowColor: colors.shadow.medium,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.08,
    shadowRadius: 3,
    flex: 1,
  },
  quantityLabel: {
    fontSize: fontSizes.sm,
    fontFamily: fonts.bold,
    color: colors.text.primary,
    marginRight: 12,
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.background.primary,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginLeft: 12,
  },
  quantityButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.primary.main,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    shadowColor: colors.shadow.medium,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  quantityButtonText: {
    fontSize: fontSizes.base,
    fontFamily: fonts.bold,
    color: colors.text.inverse,
    lineHeight: 22,
  },
  quantityValue: {
    fontSize: fontSizes.lg,
    fontFamily: fonts.bold,
    color: colors.text.primary,
    marginHorizontal: 16,
    minWidth: 30,
    textAlign: 'center',
    lineHeight: 22,
  },
  quantityButtonDisabled: {
    backgroundColor: colors.background.primary,
    elevation: 0,
    shadowOpacity: 0,
    borderWidth: 1,
    borderColor: colors.border.light,
  },
  quantityButtonTextDisabled: {
    color: colors.text.tertiary,
  },
});
