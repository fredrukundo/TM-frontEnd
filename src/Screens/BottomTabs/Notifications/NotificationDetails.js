import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../../../Config/theme/colors';
import { useContext } from 'react';
import { ThemeContext } from '../../../../contexts/ThemeContext';

const NotificationDetails = ({ route }) => {

   // theme color
   const {theme} = useContext(ThemeContext);
   const activeColors = colors[theme.mode];

  const { notification } = route.params;

  return (
    <View style={[styles.container,{backgroundColor:activeColors.bgcolor}]}>
    <View style={styles.content}>
      <Text style={[styles.notificationTitle,{color:activeColors.TextColor}]}>{notification.title}</Text>
      <Text style={[styles.notificationMessage,{color:activeColors.TextColor}]}>{notification.message}</Text>
      <Text style={[styles.notificationTime,{color:activeColors.mediumGray}]}>{notification.time}</Text>
    </View>
       </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    // backgroundColor:'#fff'
  },
  content: {
    padding: 16,
  },
  notificationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  notificationMessage: {
    fontSize: 16,
    marginBottom: 8,
  },
  notificationTime: {
    fontSize: 14,
    // color: 'gray',
  },
});

export default NotificationDetails;
