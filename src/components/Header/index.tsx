import { Button, Text, Touchable, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ChevronLeft } from 'lucide-react-native';

type Props = {
  title?: string;
  children?: React.ReactNode;
  onPress?: () => void;
};

const Header = ({ title, children, onPress }: Props) => {
  const insets = useSafeAreaInsets();

  return (
    <View className="flex-1 bg-high-light">
      <View
        className="flex-row justify-between items-center"
        style={{ paddingTop: insets.top }}
      >
        <TouchableOpacity className="p-4" activeOpacity={0.8} onPress={onPress}>
          <ChevronLeft />
        </TouchableOpacity>
        <Text className="font-semibold text-lg ">{title}</Text>
        <View className="w-[52px] h-[52px]" />
      </View>
      {children}
    </View>
  );
};

export default Header;
