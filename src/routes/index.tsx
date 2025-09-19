import { NavigationContainer } from '@react-navigation/native';

import PrivateRoutes from './private.routes';
import PublicRoutes from './public.routes';

const Routes = () => {
  const token = true;
  return (
    <NavigationContainer>
      {token ? <PrivateRoutes /> : <PublicRoutes />}
    </NavigationContainer>
  );
};

export default Routes;
