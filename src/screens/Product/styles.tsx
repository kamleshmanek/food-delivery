import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import { fontSizes, fonts } from '../../theme/fonts';
import { spacing, heightScale, widthScale, borderRadius } from '../../theme/styleConfig';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.primary,
  },
  statusBarSpacer: {
    height: heightScale(44),
  },
  headerContainer: {
    position: 'absolute',
    top: heightScale(44),
    left: 0,
    right: 0,
    zIndex: 10,
    paddingTop: heightScale(10),
  },
  scrollContent: {
    paddingBottom: heightScale(20),
  },
  contentContainer: {
    flex: 1,
    marginTop: heightScale(20),
  },
  scrollView: {
    flex: 1,
  },
  bottomSpacing: {
    height: heightScale(100),
  },
  productImage: {
    width: '100%',
    height: heightScale(300),
  },
  footer: {
    backgroundColor: colors.background.primary,
    borderTopWidth: 1,
    borderTopColor: colors.border.light,
    paddingHorizontal: spacing(20),
    paddingVertical: heightScale(16),
    elevation: 8,
    shadowColor: colors.shadow.dark,
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  footerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: spacing(16),
  },
  addToCartButton: {
    backgroundColor: colors.primary.main,
    paddingVertical: heightScale(16),
    paddingHorizontal: spacing(24),
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
    minWidth: spacing(140),
    flex: 0,
  },
  addToCartButtonText: {
    color: colors.text.inverse,
    fontSize: fontSizes.lg,
    fontFamily: fonts.bold,
  },
  backButton: {
    backgroundColor: colors.background.primary,
    width: spacing(40),
    height: spacing(40),
    borderRadius: borderRadius(20),
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowColor: colors.shadow.medium,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginLeft: spacing(20),
    borderWidth: 1,
    borderColor: colors.border.light,
  },
  backButtonText: {
    fontSize: fontSizes.lg,
    fontFamily: fonts.bold,
    color: colors.text.primary,
  },
});
