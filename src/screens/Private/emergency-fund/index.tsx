import { useNavigation } from '@react-navigation/native';
import { Button, Text, View } from 'react-native';

const EmergencyFund = () => {
  const { navigate } = useNavigation();

  return (
    <View className="bg-high-light flex-1 justify-center items-center">
      <Text>EmergencyFund</Text>
      <Button
        title="Go to Details"
        onPress={() => navigate('TransactionDetails')}
      />
    </View>
  );
};

export default EmergencyFund;
