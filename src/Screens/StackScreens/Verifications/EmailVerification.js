import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../../../../Config/theme/colors'
import { useContext } from 'react';
import { ThemeContext } from '../../../../contexts/ThemeContext';


const EmailVerification = () => {

// theme colors
const {theme} = useContext(ThemeContext);
const activeColors = colors[theme.mode];

  return (
    <View style={[styles.container,{backgroundColor:activeColors.bgcolor}]}>
      <Text style={{color:activeColors.TextColor}}>EmailVerification</Text>
    </View>
  )
}

export default EmailVerification
const styles = StyleSheet.create({
  container:{
    flex:1
  }
})