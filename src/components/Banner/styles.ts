import { StyleSheet } from 'react-native';
import { fontSizes } from '../../theme/fonts';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  title: {
    fontSize: fontSizes.xl,
    fontFamily: 'Manrope-Bold',
    color: '#fff',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: fontSizes.sm,
    fontFamily: 'Manrope-Regular',
    color: '#fff',
  },
});
