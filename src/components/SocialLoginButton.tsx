import { Text, TouchableOpacity, View } from 'react-native';

import Google from '@assets/svg/google.svg';

interface Props {
  title: string;
}

const SocialLoginButton = ({ title }: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      className="w-full flex-row justify-center items-center border border-gray-300 rounded-md p-4 gap-4"
    >
      <Google />
      <Text className="text-secondary-pure">{title}</Text>
    </TouchableOpacity>
  );
};

export default SocialLoginButton;
