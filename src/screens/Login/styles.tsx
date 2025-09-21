import { StyleSheet } from 'react-native';
import { fontSizes, fonts } from '../../theme/fonts';
import { colors } from '../../theme/colors';
import { spacing, heightScale, borderRadius } from '../../theme/styleConfig';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.primary,
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: spacing(24),
    minHeight: '100%',
  },
  scrollContentKeyboardVisible: {
    justifyContent: 'center',
    paddingTop: 0,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border.medium,
    borderRadius: borderRadius(12),
    padding: spacing(16),
    marginBottom: heightScale(16),
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
  otpButton: {
    backgroundColor: colors.primary.main,
    padding: spacing(18),
    borderRadius: borderRadius(12),
    alignItems: 'center',
    marginTop: heightScale(8),
    elevation: 3,
    shadowColor: colors.shadow.medium,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.12,
    shadowRadius: 4,
  },
  otpButtonText: {
    color: colors.text.inverse,
    fontSize: fontSizes.lg,
    fontFamily: fonts.bold,
  },
  title: {
    fontSize: fontSizes['3xl'],
    fontFamily: fonts.bold,
    color: colors.text.primary,
    marginBottom: heightScale(8),
    textAlign: 'center',
    fontWeight: '700',
  },
  titleKeyboardVisible: {
    fontSize: fontSizes['2xl'],
    marginBottom: heightScale(4),
  },
  subtitle: {
    fontSize: fontSizes.base,
    fontFamily: fonts.regular,
    color: colors.text.secondary,
    textAlign: 'center',
    marginBottom: heightScale(40),
    lineHeight: spacing(20),
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: heightScale(32),
  },
  headerContainerKeyboardVisible: {
    marginBottom: heightScale(16),
  },
  logoContainer: {
    width: spacing(80),
    height: spacing(80),
    borderRadius: borderRadius(40),
    backgroundColor: colors.primary.main,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: heightScale(16),
    elevation: 3,
    shadowColor: colors.shadow.medium,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.12,
    shadowRadius: 4,
  },
  logoContainerKeyboardVisible: {
    width: spacing(60),
    height: spacing(60),
    borderRadius: borderRadius(30),
    marginBottom: heightScale(8),
  },
  logoText: {
    fontSize: spacing(40),
  },
  logoTextKeyboardVisible: {
    fontSize: spacing(30),
  },
  formContainer: {
    width: '100%',
  },
  formContainerKeyboardVisible: {
    marginTop: 0,
  },
});
