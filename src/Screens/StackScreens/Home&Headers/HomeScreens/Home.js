import {TouchableOpacity,ScrollView,StyleSheet,View} from "react-native";
import React, { useLayoutEffect} from "react";
import {Entypo } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import Post from '../../../../components/Post';
import Header1 from '../../../../components/Header1';
import SearchScreen from "../../../../searching/SearchScreen";
import { colors } from "../../../../../Config/theme/colors";
import { useContext } from "react";
import { ThemeContext } from "../../../../../contexts/ThemeContext";
import useFetch from "../../../../../hook/useFetch";


const Posts= [
  {
    id: 1,
    createdAt: "20m",
    user: {
      id: 12,
      name: "Duke Fred",
      image: require('../../../../../assets/images/duke1.jpg'),
      oneKilo: 5.50,
      KilosRemaining: 15,
      gender: "Male",
      PreferredCurrency: "MAD",
      memberSince: "july 2023"
  
    },
    
    from: {
      country: "Morocco",
      city: "Casablanca",
      flag: require('../../../../../assets/images/Flag_of_Morocco.png')
    },
    to: {
      country: "Rwanda",
      city: "Kigali",
      flag: require('../../../../../assets/images/Flag_of_Rwanda.png')
    },
    departureDate: {
      day: 28,
      month: "May",
      year: 2023
    },
    ArrivalDate: {
      day: 29,
      month: "May",
      year: 2023
    }
  },
  {
    id: 2,
    createdAt: "20m",
    user: {
      id: 11,
      name: "John Smith",
      image: require('../../../../../assets/images/profile.jpg'),
      oneKilo: 5.50,
      KilosRemaining: 25,
      gender: "Male",
      PreferredCurrency: "USD",
      memberSince: "july 2021"
  
    },
    
    from: {
      country: "United States",
      city: "New York",
      flag: require('../../../../../assets/images/USA.png')
    },
    to: {
      country: "France",
      city: "Paris",
      flag: require('../../../../../assets/images/france.png')
    },
    departureDate: {
      day: 24,
      month: "May",
      year: 2023
    },
    ArrivalDate: {
      day: 25,
      month: "May",
      year: 2023
    }
  },
  {
    id: 3,
    createdAt: "20m",
    user: {
      id: 123,
      name: "Elvis Smith",
      image: require('../../../../../assets/images/lebron.jpg'),
      oneKilo: 5.50,
      KilosRemaining: 45,
      gender: "Male",
      PreferredCurrency: "Euro",
      memberSince: "April 2022"
  
    },
    
    from: {
      country: "Germany",
      city: "Berlin",
      flag: require('../../../../../assets/images/Flag_of_Germany.png')
    },
    to: {
      country: "Tanzania",
      city: "Dar es Salaam",
      flag: require('../../../../../assets/images/Flag_of_Tanzania.png')
    },
    departureDate: {
      day: 14,
      month: "Apr",
      year: 2023
    },
    ArrivalDate: {
      day: 15,
      month: "Apr",
      year: 2023
    }
  },


  {
    id: 4,
    createdAt: "5h",
    user: {
      id: 20,
      name: "Stecy Amata",
      image: require('../../../../../assets/images/girl.jpg'),
      oneKilo: 15.50,
      KilosRemaining: 35,
      gender: "Female",
      PreferredCurrency: "MAD",
      memberSince: "May 2020"
  
    },
    
    from: {
      country: "Morocco",
      city: "Casablanca",
      flag: require('../../../../../assets/images/Flag_of_Morocco.png')
    },
    to: {
      country: "Rwanda",
      city: "Kigali",
      flag: require('../../../../../assets/images/Flag_of_Rwanda.png')
    },
    departureDate: {
      day: 10,
      month: "May",
      year: 2023
    },
    ArrivalDate: {
      day: 12,
      month: "May",
      year: 2023
    }
  },
  
]

const Home = () => {
  const route = useRoute();
   
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Entypo name="menu" size={44} color="white" style={{ marginLeft: 12 }}/>
      </TouchableOpacity>
      ),
      title: "TravoMate",
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
        
      },
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor: "#800020",
        height: 110,
        borderBottomColor: "transparent",
        shadowColor: "transparent",
      },
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Help')}>  
      <Entypo name="help-with-circle" size={30} color="white" style={{ marginRight: 12 }}/>
      </TouchableOpacity>
      ),
    });
  }, []);

  // theme colors
  const {theme} = useContext(ThemeContext);
  const activeColors = colors[theme.mode];


  const navigation = useNavigation();
    return (
        <View style={[styles.container,{backgroundColor: activeColors.bgcolor}]}>
        <Header1/>
        <ScrollView style={{paddingHorizontal: 10,}}>
        <SearchScreen/>
          {Posts.map((post) =>(
            <Post post={post} key={post.id} />
          ))}
          
          </ScrollView>
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex:1,
        // backgroundColor:'#fff'
     
      },
    });

export default Home


