import React, { useState, useRef } from "react";
import { Alert } from "react-native";
import {SafeAreaView,StyleSheet,View,StatusBar,TouchableOpacity,Text,} from "react-native";
import PhoneInput from "react-native-phone-number-input";
import { colors } from "../../../../Config/theme/colors";
import { useContext } from 'react';
import { ThemeContext } from '../../../../contexts/ThemeContext';


const PhoneVerification = () => {

// theme colors
const {theme} = useContext(ThemeContext);
const activeColors = colors[theme.mode];

  const [PhoneNumber, setPhoneNumber] = useState("");
  return (
    <View style={[styles.container,{backgroundColor:activeColors.bgcolor}]}>
      <Text style={[styles.label,{color:activeColors.TextColor}]}>Phone Number Input</Text>
      <PhoneInput
        defaultValue={PhoneNumber}
        defaultCode="MA"
        // withShadow
        onChangeFormattedText={(text)=>{
          setPhoneNumber(text)
        }}
        containerStyle={styles.PhoneInputButton}
        textContainerStyle={styles.PhoneInputText}

      />
      <TouchableOpacity style={styles.phoneButton} >
         <Text>Get phone number</Text>
      </TouchableOpacity>

      
    </View>
  )
}

export default PhoneVerification

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  phoneButton:{
    marginVertical:10,
      alignItems: 'center',
      borderWidth: 1, 
      borderColor: '#e8e8e8', 
      borderRadius: 9,
      backgroundColor: '#0077C8',
      padding:15
  },
  label:{
    marginVertical:20,
    fontSize:18,
    fontWeight:'bold'
  },
  PhoneInputButton:{
      alignItems: 'center',
      borderWidth: 1, 
      borderColor: '#e8e8e8', 
      borderRadius: 9,
      backgroundColor: '#F9FBFC',
  },
 
})