import { StyleSheet } from 'react-native';
import { fontSizes, fonts } from '../../theme/fonts';
import { spacing, heightScale, widthScale, borderRadius } from '../../theme/styleConfig';
import { colors } from '../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background.primary,
    borderTopWidth: 1,
    borderTopColor: colors.border.light,
    padding: spacing(20),
    elevation: 8,
    shadowColor: colors.shadow.dark,
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  summaryCard: {
    backgroundColor: colors.background.secondary,
    borderRadius: borderRadius(16),
    padding: spacing(16),
    marginBottom: heightScale(16),
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: heightScale(12),
  },
  label: {
    fontSize: fontSizes.lg,
    fontFamily: fonts.regular,
    color: colors.text.tertiary,
  },
  value: {
    fontSize: fontSizes.lg,
    fontFamily: fonts.medium,
    color: colors.text.primary,
  },
  divider: {
    height: 1,
    backgroundColor: colors.border.light,
    marginVertical: heightScale(12),
  },
  totalLabel: {
    fontSize: fontSizes.xl,
    fontFamily: fonts.bold,
    color: colors.text.primary,
  },
  totalValue: {
    fontSize: fontSizes.xl,
    fontFamily: fonts.bold,
    color: colors.primary.main,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: spacing(12),
  },
  clearButton: {
    flex: 1,
    backgroundColor: colors.background.secondary,
    paddingVertical: heightScale(16),
    borderRadius: borderRadius(12),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.border.light,
  },
  clearButtonText: {
    fontSize: fontSizes.lg,
    fontFamily: fonts.medium,
    color: colors.text.tertiary,
  },
  checkoutButton: {
    flex: 2,
    backgroundColor: colors.primary.main,
    paddingVertical: heightScale(16),
    borderRadius: borderRadius(12),
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    shadowColor: colors.shadow.medium,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.12,
    shadowRadius: 4,
  },
  checkoutButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing(8),
  },
  checkoutButtonText: {
    fontSize: fontSizes.lg,
    fontFamily: fonts.bold,
    color: colors.text.inverse,
  },
  checkoutButtonPrice: {
    fontSize: fontSizes.base,
    fontFamily: fonts.bold,
    color: colors.text.inverse,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: spacing(8),
    paddingVertical: spacing(2),
    borderRadius: borderRadius(8),
  },
});
