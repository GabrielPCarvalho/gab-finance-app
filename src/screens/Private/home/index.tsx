import { useNavigation } from '@react-navigation/native';
import { Button, Text, View } from 'react-native';

const Home = () => {
  const { navigate } = useNavigation();

  return (
    <View className="bg-pink-300 flex-1 justify-center items-center">
      <Text>Home</Text>
      <Button
        title="Go to Details"
        onPress={() => navigate('TransactionDetails')}
      />
    </View>
  );
};

export default Home;
