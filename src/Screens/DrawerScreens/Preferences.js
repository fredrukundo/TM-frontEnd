import { View,TouchableOpacity,StyleSheet } from 'react-native'
import React,{useLayoutEffect} from 'react'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Account from '../../components/Account';
import { colors } from '../../../Config/theme/colors';
import { useContext } from 'react';
import { ThemeContext } from '../../../contexts/ThemeContext';


const Preferences = () => {

// theme colors
const {theme} = useContext(ThemeContext);
  const activeColors = colors[theme.mode];

  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={24} color="#dc661f" style={{ marginLeft: 12 }}/>
      </TouchableOpacity>
      ),
      title: "Preferences",
      headerTitleStyle: { 
        color: "#dc661f",
      },
      headerStyle:{
        backgroundColor:activeColors.bgcolor
       },
    });
  }, []);
  return (
    <View style={styles.container}>
      <Account/>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    // backgroundColor:'#fff'
  }

})
export default Preferences