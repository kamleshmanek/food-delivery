import { StyleSheet } from 'react-native';
import { fonts, fontSizes } from '../../theme/fonts';
import { colors } from '../../theme/colors';
import { spacing, heightScale } from '../../theme/styleConfig';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.secondary,
  },
  scrollContent: {
    paddingHorizontal: spacing(24),
    paddingBottom: heightScale(40),
    flexGrow: 1,
  },
  title: {
    fontSize: fontSizes['3xl'],
    fontFamily: fonts.bold,
    color: colors.text.primary,
    marginBottom: heightScale(8),
    textAlign: 'center',
    fontWeight: '700',
  },
  subtitle: {
    fontSize: fontSizes.lg,
    fontFamily: 'Manrope-Medium',
    color: colors.text.tertiary,
    marginBottom: heightScale(10),
    textAlign: 'center',
    lineHeight: spacing(24),
  },
});
