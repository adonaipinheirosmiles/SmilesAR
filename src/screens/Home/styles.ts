import {StyleSheet} from 'react-native';
import {$COLORS} from 'react-native-smiles-ar-uikit';

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
  },
  logOutButton: {
    position: 'absolute',
    top: 56,
    right: 16,
    fontWeight: 'bold',
    zIndex: 1,
    color: $COLORS.primaryDark,
  },
  header: {
    backgroundColor: `${$COLORS.primary}50`,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    paddingTop: 56,
  },
  headerImg: {
    height: 60,
  },
  headerInput: {
    backgroundColor: $COLORS.white,
    borderWidth: 0,
    marginBottom: 7,
    height: 40,
  },
  headerButton: {
    height: 40,
  },
  content: {
    padding: 16,
    flex: 1,
  },
  contentTitle: {
    fontWeight: 'bold',
  },
});
