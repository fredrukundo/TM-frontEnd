import React, { useState, useLayoutEffect} from 'react';
import { View, Text, FlatList, StyleSheet,Image,Pressable,TouchableOpacity } from 'react-native';
import { Entypo,AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../../Config/theme/colors';
import { useContext } from 'react';
import { ThemeContext } from '../../../contexts/ThemeContext';


const Alerts = () => {
  // theme color
  const {theme} = useContext(ThemeContext);
  const activeColors = colors[theme.mode];

  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerShown: true,
  //     headerLeft: () => (
  //       <TouchableOpacity onPress={() => navigation.goBack()}>
  //       <AntDesign name="arrowleft" size={24} color="#dc661f" style={{ marginLeft: 12 }}/>
  //     </TouchableOpacity>
  //     ),
  //     title: "Alerts",
  //     headerTitleStyle: { 
  //       color: "#dc661f",
  //     }, 
  //     headerStyle:{
  //       backgroundColor:activeColors.bgcolor
  //      },
  //   });
  // }, []);
 

  const navigation = useNavigation();
  
  const [alertNumber, setAlertNumber] = useState(0);
  const [alerts, setAlerts] = useState([
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

  const renderNoAlert = () => {
    return (
      <View style={styles.container}>
      <View style={styles.Contents}>
      
      <View style={styles.infoHead}>
        <Entypo name="info-with-circle" size={20} color="#dc661f" />
        <Text style={styles.infoHeadTitle}>Information</Text>
      </View>
      <Text style={styles.infoSection}>
      if you want to be informed of a particular trip without having to open the application, alerts are made for you.
      </Text>
      <View style={styles.alertNumberSection}>
        <Text style={[styles.alertNumber,{color:activeColors.TextColor}]}>Total: {alertNumber}</Text>
        {/* button */}
        <View style={styles.searchSection1}>
       <Pressable style={styles.searchButton1} onPress={() => console.warn('Go home')}>
          <Text style={styles.searchButtonText1}>Create an Alert</Text>
        </Pressable>
      </View>
      </View>
      <View style={styles.iconImageSection}>
      <Image 
        source={require('../../../assets/images/createAlert.png')}
        style={styles.iconImage}
      />
      </View>
      <View style={styles.textSection}>
      <Text style={[styles.Title2,{color:activeColors.TextColor}]}> No Alert found</Text>
      <Text style={styles.Title3}>You have not yet set an alert</Text>
      </View>
      {/* BUTTON */}
      <View style={styles.searchSection}>
       <Pressable style={styles.searchButton} onPress={() => console.warn('Go home')}>
          <Text style={styles.searchButtonText}>Refresh</Text>
        </Pressable>
      </View>
      </View>
      </View>
    );
  };

 

  const renderItem = ({ item }) => (
    <Pressable >
      <View style={styles.alertItem}>
        <Text style={styles.alertTitle}>{item.title}</Text>
        <Text style={styles.alertMessage}>{item.message}</Text>
        <Text style={styles.alertTime}>{item.time}</Text>
      </View>
    </Pressable>
  );

  return (
    <View style={[styles.container,{backgroundColor:activeColors.bgcolor}]}>
   
    
    { alerts.length > 0 ? (
      <>
      <View style={styles.alertContent}>
      <FlatList
        data={alerts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
      </View>
      </>
    ) : (
      renderNoAlert()
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
  alertContent: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  listContainer: {
   paddingVertical:16
  },
  alertItem: {
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    padding: 5,
    marginBottom: 8,
  },
  alertTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  alertMessage: {
    fontSize: 16,
    marginBottom: 8,
    color: 'gray'
  },
  alertTime: {
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
   alignItems:'center'
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
  searchButton1: {
    backgroundColor: '#800020',
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
     
  },
  searchButtonText1: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  searchSection1: {
    
  },
  alertNumberSection: { 
    flexDirection:'row',
    marginVertical:10,
    justifyContent:'space-between',
    alignItems:'center'
  },
  alertNumber: { 
    fontWeight:'bold',
    fontSize:20
  },
});

export default Alerts;


