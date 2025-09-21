import { StyleSheet } from 'react-native';
import { fontSizes, fonts } from '../../theme/fonts';
import { spacing, heightScale, widthScale, borderRadius } from '../../theme/styleConfig';
import { colors } from '../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.background.primary,
    borderRadius: borderRadius(16),
    marginBottom: heightScale(16),
    elevation: 4,
    shadowColor: colors.shadow.dark,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    overflow: 'hidden',
  },
  imageContainer: {
    width: widthScale(80),
    height: heightScale(80),
    backgroundColor: colors.background.secondary,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  placeholderImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background.secondary,
  },
  placeholderText: {
    fontSize: fontSizes['2xl'],
  },
  contentContainer: {
    flex: 1,
    padding: spacing(16),
    justifyContent: 'space-between',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: heightScale(8),
  },
  name: {
    flex: 1,
    fontSize: fontSizes.lg,
    fontFamily: fonts.bold,
    color: colors.text.primary,
    marginRight: spacing(8),
    lineHeight: spacing(20),
  },
  removeButton: {
    width: widthScale(24),
    height: widthScale(24),
    borderRadius: borderRadius(12),
    backgroundColor: colors.background.secondary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  removeButtonText: {
    fontSize: fontSizes.lg,
    fontFamily: fonts.bold,
    color: colors.text.tertiary,
    lineHeight: spacing(20),
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: fontSizes.base,
    fontFamily: fonts.regular,
    color: colors.text.tertiary,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.background.secondary,
    borderRadius: borderRadius(20),
    paddingHorizontal: spacing(4),
  },
  quantityButton: {
    width: widthScale(28),
    height: widthScale(28),
    borderRadius: borderRadius(14),
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityButtonText: {
    fontSize: fontSizes.lg,
    fontFamily: fonts.bold,
    color: colors.text.primary,
    lineHeight: spacing(20),
  },
  quantityText: {
    minWidth: spacing(24),
    textAlign: 'center',
    fontSize: fontSizes.base,
    fontFamily: fonts.medium,
    color: colors.text.primary,
    marginHorizontal: spacing(4),
  },
  total: {
    fontSize: fontSizes.lg,
    fontFamily: fonts.bold,
    color: colors.primary.main,
  },
});
