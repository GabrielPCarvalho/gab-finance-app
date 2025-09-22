import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/Private/home';
import Settings from '../screens/Private/settings';

import { House as HouseIcon } from 'lucide-react-native';
import { Settings as SettingsIcon } from 'lucide-react-native';

const TabRoutes = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      id={undefined}
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => <HouseIcon />,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: () => <SettingsIcon />,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabRoutes;
