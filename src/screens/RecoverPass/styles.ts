import {StyleSheet} from 'react-native';
import {$COLORS} from 'react-native-smiles-ar-uikit';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: $COLORS.primary,
  },
  input: {
    height: 40,
  },
  button: {
    position: 'absolute',
    bottom: 20,
  },
  buttonText: {
    color: $COLORS.primary,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});
