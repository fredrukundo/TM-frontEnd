import { StyleSheet, Text, View,Pressable,TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { useNavigation } from '@react-navigation/native';
import { AntDesign,FontAwesome } from '@expo/vector-icons';
import { colors } from '../../../../Config/theme/colors';
import { useContext } from 'react';
import { ThemeContext } from '../../../../contexts/ThemeContext';


const KilosToSell = () => {

  // theme colors
  const {theme} = useContext(ThemeContext);
  const activeColors = colors[theme.mode];


  const [kilos, setKilos] = useState(1);
  const navigation = useNavigation();

  const handleCancelPress = () => {
    navigation.goBack();
  };
  const handleNextPress = () => {
   navigation.navigate('Departure date')
  };

  return (
    <View style={[styles.container,{backgroundColor:activeColors.bgcolor}]}>
    <View style={styles.content}>

    <View style={styles.ArrowSection}>
        <TouchableOpacity  onPress={handleCancelPress}>
        <AntDesign name="arrowleft" size={26} color="#dc661f" />
        </TouchableOpacity>
    </View>

      <View style={styles.TextSection}>
        <Text style={[styles.TextHeader,{color:activeColors.TextColor}]}>How many Kilos do you wish to sell?</Text>
      </View>

      <View style={styles.countingSection}>
              <Pressable onPress={() => setKilos(Math.max(1, kilos - 1))} >
                <AntDesign name="minuscircleo" size={30} color="#dc661f" />
              </Pressable>

              <Pressable>
                <Text style={[styles.operationText,{color:activeColors.TextColor}]}>
                  {kilos}
                </Text>
              </Pressable>

              <Pressable onPress={() => setKilos((c) => c + 1)} >
                <AntDesign name="pluscircleo" size={30} color="#dc661f" />
              </Pressable>
           
          </View>
          <TouchableOpacity style={styles.nextButton} onPress={handleNextPress}>
            <Text style={styles.nextText}>Next</Text>
            <FontAwesome name="arrow-circle-right" size={50} color="#dc661f" style={{paddingLeft:6}}/>
          </TouchableOpacity>
         
    </View>
      
    </View>
  )
}

export default KilosToSell

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  content:{
    marginTop:25, 
    marginHorizontal:20
  },
  ArrowSection: {
    marginVertical:20,
    marginHorizontal:10
  },
  TextSection:{
    marginTop:10,
    justifyContent: 'center', 
    alignItems: 'center',

  },
  TextHeader:{
    fontSize:29,
    fontWeight:'700'
  },
  countingSection:{
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginVertical: 25,
  },
 
  operationText:{
      fontSize: 45,
      fontWeight: "bold",   
  },
  nextButton: {
   flexDirection:'row',
   alignItems: "center",
   bottom:-350,
   right:10,
   position:'absolute'
  },
  nextText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
   
  },
})