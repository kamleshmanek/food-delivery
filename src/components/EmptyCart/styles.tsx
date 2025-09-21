import { StyleSheet } from 'react-native';
import { fontSizes, fonts } from '../../theme/fonts';
import { spacing, heightScale, widthScale, borderRadius } from '../../theme/styleConfig';
import { colors } from '../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing(24),
    backgroundColor: colors.background.primary,
  },
  animationContainer: {
    marginBottom: heightScale(40),
    position: 'relative',
  },
  cartIconContainer: {
    width: widthScale(120),
    height: widthScale(120),
    borderRadius: borderRadius(60),
    backgroundColor: colors.background.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
    shadowColor: colors.shadow.medium,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 12,
  },
  cartIcon: {
    fontSize: fontSizes['5xl'],
  },
  dotsContainer: {
    position: 'absolute',
    bottom: heightScale(-10),
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  dot: {
    width: widthScale(8),
    height: widthScale(8),
    borderRadius: borderRadius(4),
    backgroundColor: colors.primary.main,
    marginHorizontal: spacing(4),
    opacity: 0.6,
  },
  dot1: {
    opacity: 1,
  },
  dot2: {
    opacity: 0.7,
  },
  dot3: {
    opacity: 0.4,
  },
  contentContainer: {
    alignItems: 'center',
    maxWidth: widthScale(300),
  },
  title: {
    fontSize: fontSizes['3xl'],
    fontFamily: fonts.bold,
    color: colors.text.primary,
    textAlign: 'center',
    marginBottom: heightScale(12),
    lineHeight: spacing(36),
  },
  subtitle: {
    fontSize: fontSizes.lg,
    fontFamily: fonts.medium,
    color: colors.text.tertiary,
    textAlign: 'center',
    marginBottom: heightScale(8),
    lineHeight: spacing(24),
  },
  description: {
    fontSize: fontSizes.base,
    fontFamily: fonts.regular,
    color: colors.text.tertiary,
    textAlign: 'center',
    marginBottom: heightScale(32),
    lineHeight: spacing(20),
  },
  shopButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.primary.main,
    paddingVertical: heightScale(16),
    paddingHorizontal: spacing(24),
    borderRadius: borderRadius(12),
    marginBottom: heightScale(40),
    elevation: 3,
    shadowColor: colors.shadow.medium,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.12,
    shadowRadius: 4,
  },
  shopButtonText: {
    fontSize: fontSizes.lg,
    fontFamily: fonts.bold,
    color: colors.text.inverse,
    marginRight: spacing(8),
  },
  shopButtonIcon: {
    width: widthScale(24),
    height: widthScale(24),
    borderRadius: borderRadius(12),
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  shopButtonIconText: {
    fontSize: fontSizes.base,
    fontFamily: fonts.bold,
    color: colors.text.inverse,
  },
  featuresContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: heightScale(20),
  },
  featureItem: {
    alignItems: 'center',
    flex: 1,
  },
  featureIcon: {
    fontSize: fontSizes.xl,
    marginBottom: heightScale(8),
  },
  featureText: {
    fontSize: fontSizes.sm,
    fontFamily: fonts.medium,
    color: colors.text.tertiary,
    textAlign: 'center',
    lineHeight: spacing(16),
  },
});
