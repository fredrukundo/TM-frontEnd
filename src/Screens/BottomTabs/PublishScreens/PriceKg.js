import { StyleSheet, Text, View, Pressable, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { colors } from '../../../../Config/theme/colors';
import { useContext } from 'react';
import { ThemeContext } from '../../../../contexts/ThemeContext';
import { useDataContext } from '../../../../contexts/DataContext';

const PriceKg = () => {

  // theme colors
  const {theme} = useContext(ThemeContext);
  const activeColors = colors[theme.mode];
  const { userData, updateUserData } = useDataContext();

  const [pricekg, setPriceKg] = useState(5); // Initial value set to 5
  const navigation = useNavigation();

  
  const handleNextPress = () => {
    updateUserData({ pricePerKg: pricekg });
    console.log(pricekg);
    navigation.navigate('Trips')
  };

  const incrementKilos = () => {
    setPriceKg((prevKilos) => {
      const newKilos = Math.min(prevKilos + 0.5, 11); // Increment by 0.5, maximum value is 11
      return parseFloat(newKilos.toFixed(1)); // Ensure the value is rounded to 1 decimal place
    });
  };

  const decrementKilos = () => {
    setPriceKg((prevKilos) => {
      const newKilos = Math.max(prevKilos - 0.5, 5); // Decrement by 0.5, minimum value is 5
      return parseFloat(newKilos.toFixed(1)); // Ensure the value is rounded to 1 decimal place
    });
  };
  return (
    <View style={[styles.container,{backgroundColor:activeColors.bgcolor}]}>
      <View style={styles.content}>
       
        <View style={styles.TextSection}>
          <Text style={[styles.TextHeader,{color:activeColors.TextColor}]}>Set your price per kilo in US Dollar</Text>
        </View>

        <View style={styles.countingSection}>
          <Pressable onPress={decrementKilos}>
            <AntDesign name="minuscircleo" size={30} color="#dc661f" />
          </Pressable>

          <Pressable>
            <Text style={[styles.operationText,{color:activeColors.TextColor}]}>{pricekg}</Text>
          </Pressable>

          <Pressable onPress={incrementKilos}>
            <AntDesign name="pluscircleo" size={30} color="#dc661f" />
          </Pressable>
        </View>
        {/* recommendation btton */}
        <View style={styles.recomButtonContainer}>
          <Text style={styles.recomButton}>Recommended price: $5 - $11</Text>
        </View>
        <View style={styles.idealTextSection}>
          <Text style={styles.idealText}>Ideal price for this trip! you'll be getting customers in no time.</Text>
        </View>
        {/* next button */}
        <TouchableOpacity style={styles.nextButton} onPress={handleNextPress}>
          <Text style={styles.nextText}>Next</Text>
          <FontAwesome name="arrow-circle-right" size={50} color="#dc661f" style={{ paddingLeft: 6 }} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PriceKg

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  content:{
    marginTop:25, 
    marginHorizontal:20
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
  recomButtonContainer:{
    alignItems:'center'  
  },
  recomButton:{
    borderRadius: 20,
    borderWidth: 1, 
    alignItems:'center' ,
    paddingVertical: 5,
    paddingHorizontal: 10, 
    color:'#fff',
    backgroundColor:"#dc661f",
    borderColor:'white',
    fontSize:18,
    
  },
  idealTextSection: {
  marginVertical:10
  },
  idealText: {
  color:'gray',
  fontSize:18,
  },
  nextButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginTop:'30%'
  },
  nextText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
   
  },
})