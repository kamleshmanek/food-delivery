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
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 15,
    padding: 10,
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
    height: 140,
    borderRadius: 8,
    marginBottom: 8,
    resizeMode: 'cover',
  },
  name: {
    fontSize: fontSizes.base,
    fontFamily: 'Manrope-Medium',
    fontWeight: '500',
    marginBottom: 4,
    color: '#333',
  },
  price: {
    fontSize: fontSizes.lg,
    fontFamily: 'Manrope-Bold',
    color: '#e74c3c',
    marginBottom: 8,
  },
  addButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#e74c3c',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  addButtonText: {
    fontSize: fontSizes.lg,
    fontFamily: 'Manrope-Bold',
    color: '#fff',
    lineHeight: 20,
  },
});
