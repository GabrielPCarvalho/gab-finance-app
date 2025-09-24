import { MMKV } from '@/utils';

import UserStore from './user.store';

MMKV.configurePersistable();

class Store {
  user: UserStore;
  

  constructor() {
    this.user = new UserStore(this);
  }
}

const store = new Store();

export {
  UserStore,
};

export default store;
