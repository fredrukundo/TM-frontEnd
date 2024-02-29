import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet,Image,Pressable } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../../../Config/theme/colors';
import { useContext } from 'react';
import { ThemeContext } from '../../../../contexts/ThemeContext';


const Notification = () => {

   // theme color
   const {theme} = useContext(ThemeContext);
   const activeColors = colors[theme.mode];

  const navigation = useNavigation();

  const [notifications, setNotifications] = useState([
    {
      id: '1',
      title: 'New Message',
      message: 'You have received a new message from John.',
      time: '10:30 AM',
    },
    {
      id: '2',
      title: 'Reminder',
      message: 'Don\'t forget your appointment at 3:00 PM.',
      time: '12:45 PM',
    },
    {
      id: '3',
      title: 'New Update',
      message: 'A new version of the app is available.',
      time: '2:15 PM',
    },
  ]);

  const renderNoNotification = () => {
    return (
      <View style={styles.container}>
      <View style={styles.Contents}>
      {/* header section for no notification */}
      <View style={styles.headerSection}>
      <Text style={styles.Titles}>Notification</Text>
      <Pressable style={{marginLeft:'auto'}} onPress={() => console.log('three dots')}>
      <Entypo name="dots-three-vertical" size={24} color="#dc661f" />
      </Pressable>
      </View>
      <View style={styles.iconImageSection}>
      <Image 
        source={require('../../../../assets/images/Pushnotifications.png')}
        style={styles.iconImage}
      />
      </View>
      <View style={styles.textSection}>
      <Text style={[styles.Title2,{color:activeColors.TextColor}]}> No notifications at the moment</Text>
      <Text style={styles.Title3}> Your natifications will be displayed here</Text>
      </View>
      </View>
      </View>
    );
  };

 

  const renderItem = ({ item }) => (
    <Pressable onPress={() => navigation.navigate('Notification details', { notification: item })}>
      <View style={styles.notificationItem}>
        <Text style={[styles.notificationTitle,{color:activeColors.TextColor}]}>{item.title}</Text>
        <Text style={[styles.notificationMessage,{color:activeColors.mediumGray}]}>{item.message}</Text>
        <Text style={[styles.notificationTime,{color:activeColors.mediumGray}]}>{item.time}</Text>
      </View>
    </Pressable>
  );

  return (
    <View style={[styles.container,{backgroundColor:activeColors.bgcolor}]}>
   
    { notifications.length > 0 ? (
      <>
      
      <View style={styles.headerSection}>
       <View style={{flex:1,justifyContent:'center', alignItems:'center'}}>
        <Text style={styles.Titles}>Notifications</Text>
        </View>
      <Pressable style={{marginLeft:'auto'}} onPress={() => console.log('three dots')}>
      <Entypo name="dots-three-vertical" size={24} color="#dc661f" />
      </Pressable>
      </View>
      <View style={styles.notificationContent}>
      <FlatList
        data={notifications}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
      </View>
      </>
    ) : (
      renderNoNotification()
    )
    
    }
    
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    // backgroundColor:'#fff'
  },
  notificationContent: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  listContainer: {
   paddingVertical:16
  },
  notificationItem: {
    // backgroundColor: '#F5F5F5',
    borderRadius: 8,
    padding: 5,
    marginBottom: 8,
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
  Contents:{
    margin:15,
  },
  headerSection:{
    marginTop:55,
    flexDirection:'row',
    marginHorizontal:15,
  },
  Titles: { 
    fontWeight: 'bold',
    fontSize: 18,
    color:"#dc661f"
  },
  Title2: { 
    fontWeight: 'bold',
    fontSize: 28,
    marginVertical:10,
    marginHorizontal:45
   
  },
  Title3: { 
    fontWeight: 'bold',
    fontSize: 18,
    marginVertical:10,
    color:'gray',
    marginHorizontal:20
    
  },
  iconImage:{
    width:280,
    height:280,
    marginTop:20,
},
iconImageSection:{
   justifyContent:'center',
   alignItems:'center'
},
textSection:{
   justifyContent:'center',
   alignItems:'center'
},
});

export default Notification;


