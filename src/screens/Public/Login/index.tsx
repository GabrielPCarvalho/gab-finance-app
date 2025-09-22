import { Text, View } from 'react-native';

import FastImage from 'react-native-fast-image';

import SocialLoginButton from '@components/SocialLoginButton';

const meditatingGif = require('@assets/gif/meditating-on-finances.gif');

const Login = () => {
  return (
    <View className="bg-high-light flex-1 justify-center items-center px-4">
      <Text className="mb-16 font-bold text-4xl text-primary-pure">Gabz</Text>
      <FastImage source={meditatingGif} style={{ width: 282, height: 320 }} />
      <View className="gap-3 justify-center items-center mb-8">
        <Text className="text-2xl font-bold text-secondary-pure">
          Bem vindo
        </Text>
        <Text className="font-regular text-tertiary-pure">
          Gerencie suas finanças com facilidade
        </Text>
      </View>
      <SocialLoginButton title="Continuar com Google" />
    </View>
  );
};

export default Login;
