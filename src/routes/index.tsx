import { NavigationContainer } from '@react-navigation/native';

import PrivateRoutes from './private.routes';
import PublicRoutes from './public.routes';

import { useStores } from '@/utils';

const Routes = () => {
  const { user } = useStores();

  return (
    <NavigationContainer>
      {user.isAuthenticated ? <PrivateRoutes /> : <PublicRoutes />}
    </NavigationContainer>
  );
};

export default Routes;
