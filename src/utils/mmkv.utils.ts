import { configurePersistable } from 'mobx-persist-store';
import { MMKV } from 'react-native-mmkv';

class MMKVClass {
  private storage: MMKV;

  constructor() {
    this.storage = new MMKV({
      id: 'gab-finance',
      encryptionKey: '1ed2b30531f4b791dee7df4cbc87fed36938d4252ca75de7503799a920ad5bd8',
    });
  }

  configurePersistable(): void {
    configurePersistable({
      storage: {
        setItem: (key: string, data: string) => this.storage.set(key, data),
        getItem: (key: string) => this.storage.getString(key) as string | null,
        removeItem: (key: string) => this.storage.delete(key),
      },
    });
  }

  node(): MMKV {
    return this.storage;
  }
}

export default new MMKVClass();
