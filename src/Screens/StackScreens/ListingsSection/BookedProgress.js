import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet,Image,Pressable } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../../../Config/theme/colors';
import { useContext } from 'react';
import { ThemeContext } from '../../../../contexts/ThemeContext';

const BookedProgress = () => {
 
  // theme color
  const {theme} = useContext(ThemeContext);
  const activeColors = colors[theme.mode];

  const navigation = useNavigation();
  

  const [bookings, setBookings] = useState([
    // {
    //   id: '1',
    //   title: 'New Message',
    //   message: 'You have received a new message from John.',
    //   time: '10:30 AM',
    // },
    // {
    //   id: '2',
    //   title: 'Reminder',
    //   message: 'Don\'t forget your appointment at 3:00 PM.',
    //   time: '12:45 PM',
    // },
    // {
    //   id: '3',
    //   title: 'New Update',
    //   message: 'A new version of the app is available.',
    //   time: '2:15 PM',
    // },
  ]);

  const renderNobooking = () => {
    return (
      <View style={styles.container}>
      <View style={styles.Contents}>
      
      <View style={styles.infoHead}>
        <Entypo name="info-with-circle" size={20} color="#dc661f" />
        <Text style={styles.infoHeadTitle}>Information</Text>
      </View>
      <Text style={styles.infoSection}>
      Each Booking you make here on TravoMate generates a new conversation. You can find them here or in the 'chat' tab.
      </Text>
      <View style={styles.iconImageSection}>
      <Image 
        source={require('../../../../assets/images/bookedTrip.png')}
        style={styles.iconImage}
      />
      </View>
      <View style={styles.textSection}>
      <Text style={[styles.Title2,{color:activeColors.TextColor}]}> No reservation found</Text>
      <Text style={styles.Title3}> contact users and when your request is accepted, the reservation will appear here.</Text>
      </View>
      {/* BUTTON */}
      <View style={styles.searchSection}>
       <Pressable style={styles.searchButton} onPress={() => console.warn('Go home')}>
          <Text style={styles.searchButtonText}>See available Trips</Text>
        </Pressable>
      </View>
      </View>
      </View>
    );
  };

 

  const renderItem = ({ item }) => (
    <Pressable >
      <View style={styles.bookingItem}>
        <Text style={styles.bookingTitle}>{item.title}</Text>
        <Text style={styles.bookingMessage}>{item.message}</Text>
        <Text style={styles.bookingTime}>{item.time}</Text>
      </View>
    </Pressable>
  );

  return (
    <View style={[styles.container,{backgroundColor:activeColors.bgcolor}]}>
   
    
    { bookings.length > 0 ? (
      <>
      <View style={styles.bookingContent}>
      <FlatList
        data={bookings}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
      </View>
      </>
    ) : (
      renderNobooking()
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
  bookingContent: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  listContainer: {
   paddingVertical:16
  },
  bookingItem: {
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    padding: 5,
    marginBottom: 8,
  },
  bookingTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  bookingMessage: {
    fontSize: 16,
    marginBottom: 8,
    color: 'gray'
  },
  bookingTime: {
    fontSize: 14,
    color: 'gray',
  },
  Contents:{
    marginHorizontal:10,
  },
  
  Title2: { 
    fontWeight: 'bold',
    fontSize: 20,
    
   
  },
  Title3: { 
    fontSize: 18,
    marginTop:10,
    color:'gray',
  },
  iconImage:{
    width:350,
    height:250,
    
},
iconImageSection:{
   justifyContent:'center',
   alignItems:'center',
   marginVertical:15
},
textSection:{
   justifyContent:'center',
   alignItems:'center'
},
  infoSection: {
    fontSize: 16,
    color: 'gray' 
  },
  infoHead: {
    flexDirection:'row',
    marginVertical:10
  },
  infoHeadTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft:5,
    color:"#dc661f"
  },
  searchButton: {
    backgroundColor: '#800020',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginHorizontal:30
  },
  searchButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  searchSection: {
    marginBottom:10,
    marginTop:40,
    
  },
});

export default BookedProgress;


