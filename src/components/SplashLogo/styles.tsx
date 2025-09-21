import { StyleSheet } from 'react-native';
import { fontSizes, fonts } from '../../theme/fonts';
import { colors } from '../../theme/colors';

export const styles = StyleSheet.create({
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logoCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    elevation: 8,
    shadowColor: colors.shadow.dark,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 12,
  },
  logoText: {
    fontSize: 60,
  },
  title: {
    fontSize: fontSizes['4xl'],
    fontFamily: fonts.bold,
    color: colors.text.primary,
    marginBottom: 8,
    textShadowColor: colors.shadow.dark,
    textShadowOffset: {
      width: 0,
      height: 2,
    },
    textShadowRadius: 4,
  },
  subtitle: {
    fontSize: fontSizes.lg,
    fontFamily: fonts.medium,
    color: colors.text.secondary,
    textAlign: 'center',
    lineHeight: 24,
  },
});

export default styles;
