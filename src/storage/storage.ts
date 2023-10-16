import {MMKV} from 'react-native-mmkv';

import Config from 'react-native-config';

export const userStorage = new MMKV({
  id: 'user-storage',
  encryptionKey: Config.ENCRYPT_KEY,
});
