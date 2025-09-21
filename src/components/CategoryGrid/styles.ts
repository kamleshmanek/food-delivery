import { StyleSheet } from 'react-native';
import { fontSizes } from '../../theme/fonts';

export const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  title: {
    fontSize: fontSizes.xl,
    fontFamily: 'Manrope-Bold',
    color: '#333',
  },
  seeAllButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  seeAllText: {
    fontSize: fontSizes.sm,
    fontFamily: 'Manrope-Medium',
    color: '#e74c3c',
    fontWeight: '500',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '30%',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
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
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 10,
    resizeMode: 'cover',
    borderWidth: 2,
    borderColor: '#f0f0f0',
  },
  name: {
    fontSize: fontSizes.sm,
    fontFamily: 'Manrope-Medium',
    marginTop: 5,
    color: '#333',
    textAlign: 'center',
    fontWeight: '500',
  },
});
