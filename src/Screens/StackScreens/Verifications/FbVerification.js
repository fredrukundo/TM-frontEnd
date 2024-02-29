import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../../../Config/theme/colors';
import { useContext } from 'react';
import { ThemeContext } from '../../../../contexts/ThemeContext';


const FbVerification = () => {

// theme colors
const {theme} = useContext(ThemeContext);
const activeColors = colors[theme.mode];

  return (
    <View style={[styles.container,{backgroundColor:activeColors.bgcolor}]}>
      <Text style={{color:activeColors.TextColor}}>FaceBook verification</Text>
    </View>
  )
}

export default FbVerification

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})