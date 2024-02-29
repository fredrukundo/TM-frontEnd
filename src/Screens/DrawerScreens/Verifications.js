import { View, Text,TouchableOpacity } from 'react-native'
import React,{useLayoutEffect} from 'react'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Verifications = () => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={24} color="#dc661f" style={{ marginLeft: 12 }}/>
      </TouchableOpacity>
      ),
      title: "VerificationsZ",
      headerTitleStyle: { 
        color: "#dc661f",
      },
    });
  }, []);

  const navigation = useNavigation()

  return (
    <View>
      <Text>Verifications</Text>
    </View>
  )
}

export default Verifications