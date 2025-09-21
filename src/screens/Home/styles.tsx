import { StyleSheet } from 'react-native';
import { fontSizes } from '../../theme/fonts';
import { scale, verticalScale, moderateScale } from '../../theme/styleConfig';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: moderateScale(20),
    paddingVertical: verticalScale(10),
    backgroundColor: '#fff',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  title: {
    fontSize: fontSizes['2xl'],
    fontFamily: 'Manrope-Bold',
    color: '#333',
  },
  cartButton: {
    padding: moderateScale(8),
  },
  cartIcon: {
    fontSize: moderateScale(24),
  },
});
