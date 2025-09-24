import Root from './root.store';

import {
  action,
  makeObservable,
  makePersistable,
  observable,
} from '@/utils';

class UserStore {
  root: typeof Root;

  @observable
  isAuthenticated = false;


  constructor(root: typeof Root) {
    this.root = root;

    makeObservable(this);
    makePersistable(this, {
      name: this.constructor.name,
      properties: [
        'isAuthenticated',
      ],
    });
  }

  @action
  setIsAuthenticated(value: boolean) {
    this.isAuthenticated = value;
  }

  
}

export default UserStore;