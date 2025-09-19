import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/Private/home';
import Settings from '../screens/Private/settings';

const TabRoutes = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      id={undefined}
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="Home" component={Home} options={{}} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default TabRoutes;
