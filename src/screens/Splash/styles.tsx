import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import { scale, verticalScale, moderateScale } from '../../theme/styleConfig';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary.main,
    position: 'relative',
  },
});

export default styles;