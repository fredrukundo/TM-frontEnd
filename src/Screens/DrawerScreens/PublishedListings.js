import React, { useState,useLayoutEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image,TouchableOpacity, Pressable } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons,AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../../Config/theme/colors';
import { useContext } from 'react';
import { ThemeContext } from '../../../contexts/ThemeContext';

const PublishedListings = () => {

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
  //     title: "Published listings",
  //     headerTitleStyle: { 
  //       color: "#dc661f",
  //     }, 
  //     headerStyle:{
  //       backgroundColor:activeColors.bgcolor
  //      },
  //   });
  // }, []); 
  const navigation = useNavigation();
  const [trips, setTrips] = useState([
    // {
    //   id: 1,
    //   createdAt: "20m",
    //   user: {
    //     id: 12,
    //     name: "Duke Fred",
    //     image: require('../../../assets/images/duke1.jpg'),
    //     oneKilo: 5.50,
    //     KilosRemaining: 15,
    //     gender: "Male",
    //     PreferredCurrency: "MAD",
    //     memberSince: "july 2023"
    
    //   },
      
    //   from: {
    //     country: "Morocco",
    //     city: "Casablanca",
    //     flag: require('../../../assets/images/Flag_of_Morocco.png')
    //   },
    //   to: {
    //     country: "Rwanda",
    //     city: "Kigali",
    //     flag: require('../../../assets/images/Flag_of_Rwanda.png')
    //   },
    //   departureDate: {
    //     day: 28,
    //     month: "May",
    //     year: 2023
    //   },
    //   ArrivalDate: {
    //     day: 29,
    //     month: "May",
    //     year: 2023
    //   }
    // },
    // {
    //   id: 2,
    //   createdAt: "20m",
    //   user: {
    //     id: 11,
    //     name: "John Smith",
    //     image: require('../../../assets/images/profile.jpg'),
    //     oneKilo: 5.50,
    //     KilosRemaining: 25,
    //     gender: "Male",
    //     PreferredCurrency: "USD",
    //     memberSince: "july 2021"
    
    //   },
      
    //   from: {
    //     country: "United States",
    //     city: "New York",
    //     flag: require('../../../assets/images/USA.png')
    //   },
    //   to: {
    //     country: "France",
    //     city: "Paris",
    //     flag: require('../../../assets/images/france.png')
    //   },
    //   departureDate: {
    //     day: 24,
    //     month: "May",
    //     year: 2023
    //   },
    //   ArrivalDate: {
    //     day: 25,
    //     month: "May",
    //     year: 2023
    //   }
    // },
  ]);

  const handleCreateTrip = () => {
    navigation.navigate('Publish')
  };

  const rendertripItem = ({ item }) => (
    <TouchableOpacity  activeOpacity={0.8}>
    <View style={styles.post}>
      <View style={styles.header}>
        <Image
          source={item.user.image}
          style={styles.profileImage}
        />
        <View>
        <View style={{flexDirection:'row'}}>
          <Text style={[styles.name,{color: activeColors.TextColor}]}>{item.user.name}</Text> 
          <MaterialIcons name="verified" size={18} color="#0A64EF" />
          </View>
          <Text style={styles.subtitle}>{item.createdAt} Ago</Text>
          </View>
        
        <View style={styles.Kilos}>
          <Text style={[styles.oneKilos,{color: activeColors.TextColor}]}>$ {item.user.oneKilo}/<MaterialCommunityIcons name="weight-kilogram" size={24} color="#dc661f" /></Text>
          <Text style={[styles.KilosRemaining, {color: activeColors.TextColor}]}>{item.user.KilosRemaining} kg Remaining</Text>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.FromAndTO}>
          <View style={styles.from}>
            <Text style={styles.FromAndTOText}>
              From:
            </Text>
            <View style={styles.fromDetails}>
               <View style={styles.cityFlag}>
                 <Text style={[styles.city,{color: activeColors.TextColor}]}>{item.from.city}</Text>
                 <Image
                  source={item.from.flag}
                  style={styles.flags}
                 />
               </View>
               <Text style={styles.country}>{item.from.country}</Text>
            </View>
          </View>
          <View style={styles.to}>
            <Text style={styles.FromAndTOText}>
              To:
            </Text>
            <View style={styles.toDetails}>
              <View style={styles.cityFlag}>
                <Text style={[styles.city,{color: activeColors.TextColor}]}>{item.to.city}</Text>
                <Image
                  source={item.to.flag}
                  style={styles.flags}
                />
              </View>
              <Text style={styles.country}>{item.to.country}</Text>
            </View>
          </View>
        </View>
        <View style={styles.dates}>
          <Text style={[styles.day,{color: activeColors.TextColor}]}>{item.departureDate.day}</Text>
          <Text style={styles.month}>{item.departureDate.month}</Text>
          <Text style={styles.year}>{item.departureDate.year}</Text>
        </View>
      </View>
    </View>
    </TouchableOpacity>
  );
  // no trip posted section
  const renderNoTripsPosted = () => {
    return (
      <View style={styles.container}>
      <View style={styles.Contents}>
      
      <View style={styles.iconImageSection}>
      <Image 
        source={require('../../../assets/images/createTrip.png')}
        style={styles.iconImage}
      />
      </View>
      <View style={styles.textSection}>
      <Text style={[styles.Title2,{color:activeColors.TextColor}]}>No Trips found</Text>
      <Text style={styles.Title3}>Post your Trip now! it will be immediately available to all users of the platform.</Text>
      </View>
      <View style={styles.searchSection}>
       <Pressable style={styles.searchButton} onPress={handleCreateTrip}>
          <Text style={styles.searchButtonText}>Create a Trip</Text>
        </Pressable>
      </View>
      </View>
      </View>
    );
  };

  return (
    <View style={[styles.container,{backgroundColor:activeColors.bgcolor}]}>
    
    {
      trips.length > 0 ? (
        <View style={styles.container1}>
        <FlatList
        data={trips}
        renderItem={rendertripItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
      </View>
      ) : (
        renderNoTripsPosted()
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
  container1: {
    flex: 1,
    // backgroundColor: '#fff',
    padding: 16,
  },
  listContainer: {
    paddingBottom: 16,
  },
 
  Contents:{
    margin:10,
  },
  Title2: { 
    fontWeight: 'bold',
    fontSize: 28,
    marginVertical:10,
    marginHorizontal:45
   
  },
  Title3: { 
    fontWeight: '600',
    fontSize: 18,
    marginVertical:10,
    color:'gray',
    marginHorizontal:20
    
  },
  iconImage:{
    width:380,
    height:250,
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
post: {
  marginVertical: 10,
  borderWidth: 1,
  borderRadius: 20,
  borderColor: 'gray',
  padding: 10,
},
header: {
  flexDirection: 'row',
  alignItems: 'center',
  width: '100%',
},
profileImage: {
  width: 40,
  height: 40,
  borderRadius: 25,
  marginRight: 10,
},
name: {
  fontWeight: 'bold',
  fontSize: 16,
},
subtitle: {
  color: 'gray',
},
Kilos: {
  marginLeft: 'auto',
},
oneKilos: {
  fontWeight: 'bold',
},
KilosRemaining: {
  fontWeight: 'bold',
},
body: {
  flexDirection: 'row',
},
FromAndTO: {
  marginVertical: 20,
},
FromAndTOText: {
  fontWeight: 'bold',
  fontSize: 20,
  marginRight: 5,
  color:'gray'
},
from: {
  flexDirection: 'row',
  paddingTop: 10,
  
},
to: {
  flexDirection: 'row',
  paddingTop: 10,
},
cityFlag: {
  flexDirection: 'row',
},
city: {
  marginRight: 5,
  fontWeight: 'bold',
  fontSize: 18,
},
country: {
  color: 'gray',
},
flags: {
  width: 40,
  height: 20,
},
dates: {
  marginLeft: 'auto',
  alignItems: 'center',
  justifyContent: 'center',
},
day: {
  fontSize: 34,
  fontWeight: 'bold',
},
month: {
  fontSize: 22,
  fontWeight: 'bold',
  color: "#dc661f",
},
year: {
  fontSize: 22,
  fontWeight: 'bold',
  color: 'gray',
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

export default PublishedListings;
