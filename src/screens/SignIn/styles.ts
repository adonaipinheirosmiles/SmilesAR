import {StyleSheet} from 'react-native';
import {$COLORS} from 'react-native-smiles-ar-uikit';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 24,
  },
  img: {
    height: 60,
  },
  input: {
    height: 40,
  },
  signUpText: {
    fontWeight: 'bold',
    color: $COLORS.primaryDark,
    textDecorationLine: 'underline',
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
