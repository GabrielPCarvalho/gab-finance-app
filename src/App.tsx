import './global.css';
import '@/utils/config/reactotron.config';

import Routes from '@routes/index';
import stores from '@stores/root.store';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'mobx-react';

const App = () => {
  return (
    <Provider rootStore={stores}>
      <SafeAreaProvider>
        <Routes />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
