import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  circle: {
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    zIndex: 3,
  },
  checkmark: {
    color: '#fff',
    fontFamily: 'Manrope-Bold',
    fontWeight: 'bold',
  },
  ring: {
    position: 'absolute',
    borderWidth: 2,
    borderRadius: 100,
    borderColor: '#4CAF50',
  },
  ring1: {
    width: 100,
    height: 100,
    opacity: 0.3,
  },
  ring2: {
    width: 120,
    height: 120,
    opacity: 0.2,
  },
});
