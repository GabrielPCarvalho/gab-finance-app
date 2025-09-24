import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Settings from '@screens/Private/settings';
import TransactionDetails from '@screens/Private/transaction-details';
import TabRoutes from './tab.routes';

const PrivateRoutes = () => {
  const Private = createNativeStackNavigator();

  return (
    <Private.Navigator
      id={undefined}
      initialRouteName={'Tabs'}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Private.Screen name="Tabs" component={TabRoutes} />
      <Private.Screen name="Settings" component={Settings} />
      <Private.Screen
        name="TransactionDetails"
        component={TransactionDetails}
      />
    </Private.Navigator>
  );
};
export default PrivateRoutes;
