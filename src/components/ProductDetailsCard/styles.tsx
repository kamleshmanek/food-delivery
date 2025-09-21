import { StyleSheet } from 'react-native';
import { fontSizes, fonts } from '../../theme/fonts';
import { colors } from '../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: fontSizes['2xl'],
    fontFamily: fonts.bold,
    color: colors.text.primary,
    marginBottom: 8,
  },
  price: {
    fontSize: fontSizes.xl,
    fontFamily: fonts.bold,
    color: colors.primary.main,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: fontSizes.lg,
    fontFamily: fonts.bold,
    color: colors.text.primary,
    marginBottom: 8,
  },
  description: {
    fontSize: fontSizes.lg,
    fontFamily: fonts.regular,
    color: colors.text.secondary,
    lineHeight: 24,
    marginBottom: 20,
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  detailItem: {
    alignItems: 'center',
    backgroundColor: colors.background.secondary,
    padding: 15,
    borderRadius: 10,
    flex: 1,
    marginHorizontal: 5,
    elevation: 4,
    shadowColor: colors.shadow.medium,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  detailLabel: {
    fontSize: fontSizes.sm,
    fontFamily: fonts.regular,
    color: colors.text.tertiary,
    marginBottom: 4,
  },
  detailValue: {
    fontSize: fontSizes.lg,
    fontFamily: fonts.bold,
    color: colors.text.primary,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  ratingText: {
    fontSize: fontSizes.lg,
    fontFamily: fonts.bold,
    color: colors.text.primary,
    marginLeft: 8,
  },
});
