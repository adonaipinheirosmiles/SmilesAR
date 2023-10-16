import {StyleSheet} from 'react-native';
import {$COLORS} from 'react-native-smiles-ar-uikit';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: $COLORS.gray,
    overflow: 'hidden',
  },
  img: {
    width: 40,
    height: 40,
    backgroundColor: $COLORS.gray,
    borderRadius: 20,
  },
  infoArea: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
    maxWidth: '90%',
    flexWrap: 'wrap',
  },
  title: {
    fontWeight: 'bold',
    maxWidth: '95%',
  },
  text: {
    flexWrap: 'wrap',
    maxWidth: '95%',
  },
});
