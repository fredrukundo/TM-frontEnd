import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../../../../Config/theme/colors';
import { useContext } from 'react';
import { ThemeContext } from '../../../../../contexts/ThemeContext';

const Tracking = () => {

// theme colors
const {theme} = useContext(ThemeContext);
const activeColors = colors[theme.mode];

  return (
    <View style={[styles.container,{backgroundColor:activeColors.bgcolor}]}>
      <Text style={{color:activeColors.TextColor}}>Trackings</Text>
    </View>
  )
}

export default Tracking

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})