import { StyleSheet } from 'react-native';
import { fontSizes, fonts } from '../../theme/fonts';
import { spacing, heightScale, widthScale, borderRadius } from '../../theme/styleConfig';
import { colors } from '../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.primary,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: spacing(20),
    backgroundColor: colors.background.primary,
    elevation: 2,
    borderBottomWidth: 1,
    borderBottomColor: colors.border.light,
  },
  backButton: {
    fontSize: fontSizes['2xl'],
    fontFamily: fonts.bold,
    color: colors.text.primary,
    width: spacing(40),
    height: spacing(40),
    borderRadius: borderRadius(20),
    backgroundColor: colors.background.secondary,
    textAlign: 'center',
    lineHeight: spacing(40),
  },
  title: {
    fontSize: fontSizes.xl,
    fontFamily: fonts.bold,
    color: colors.text.primary,
    flex: 1,
    textAlign: 'center',
  },
  spacer: {
    width: spacing(40),
  },
  cartList: {
    padding: spacing(20),
    paddingBottom: heightScale(200), // Space for footer
  },
});
