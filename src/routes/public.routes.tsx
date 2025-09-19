import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '@screens/Public/Login';

const PublicRoutes = () => {
  const Public = createNativeStackNavigator();

  return (
    <Public.Navigator
      id={undefined}
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Public.Screen name="Login" component={Login} />
    </Public.Navigator>
  );
};
export default PublicRoutes;
