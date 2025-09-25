import Header from '@/components/Header';
import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';

const TransactionDetails = () => {
  const { goBack } = useNavigation();

  return (
    <Header title="Detalhes da transação" onPress={goBack}>
      <View className="bg-high-light flex-1 justify-center items-center">
        <Text>TransactionDetails</Text>
      </View>
    </Header>
  );
};

export default TransactionDetails;
