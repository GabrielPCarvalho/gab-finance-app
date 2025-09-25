import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/Private/home';
import Settings from '../screens/Private/settings';

import { House as HouseIcon, PiggyBank } from 'lucide-react-native';
import { Settings as SettingsIcon } from 'lucide-react-native';
import EmergencyFund from '@/screens/Private/emergency-fund';
import TabBar from '@/components/TabBar';

const TabRoutes = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      id={undefined}
      initialRouteName="Home"
      screenOptions={{ headerShown: false, tabBarShowLabel: false }}
      tabBar={props => <TabBar {...props} />}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <HouseIcon color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="EmergencyFund"
        component={EmergencyFund}
        options={{
          tabBarLabel: 'Safe Box',
          tabBarIcon: ({ color, size }) => (
            <PiggyBank color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <SettingsIcon color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabRoutes;
