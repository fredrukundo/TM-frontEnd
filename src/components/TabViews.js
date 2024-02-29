import React, { useState } from 'react';
import { View, Text,StyleSheet, Image,TouchableOpacity,Pressable } from 'react-native'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { MaterialCommunityIcons,MaterialIcons,Ionicons,FontAwesome } from '@expo/vector-icons';
import Informations from './Informations';
import Account from './Account';
import { colors } from '../../Config/theme/colors';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

const post = {
  user: {
    id: 11,
    name: "John Smith",
    image: require('../../assets/images/profile.jpg'),
    oneKilo: 5.50,
    KilosRemaining: 25,
    gender: "Male",
    PreferredCurrency: "USD",
    memberSince: "july 2021",
    wallet: 0,
    phone: +212626103440,
    email: 'Dukefred9@gmail.com'

  },
  
  from: {
    country: "United States",
    city: "New York",
    flag: require('../../assets/images/USA.png')
  },
  to: {
    country: "France",
    city: "Paris",
    flag: require('../../assets/images/france.png')
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
}



const FirstRoute = () => (
  <View style={{ flex: 1,}}>
    <Informations/>
  </View>
);

const SecondRoute = () => (
  <View style={{ flex: 1 }}>
  <Account />
  </View>
);



const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  
});

const TabBarComponent = (props) => (

  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor:colors.tertiary }}
    // style={{ backgroundColor:'#fff' }}
    labelStyle={{fontWeight:'bold'}}
  />
);

const TabViews = () => {

  // theme colors
const {theme} = useContext(ThemeContext);
const activeColors = colors[theme.mode];
  
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'Informations' },
    { key: 'second', title: 'Account' },
    
  ]);

  const renderTabBar = (props) => (
    <TabBarComponent
      {...props}
      style={{ backgroundColor:activeColors.bgcolor }}
      indicatorStyle={{ backgroundColor:colors.tertiary }}
      activeColor={activeColors.TextColor}
      inactiveColor={activeColors.TextColor}
    />
  );

  return (
    <View style={{flex:1,}}>
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      renderTabBar={renderTabBar}
    />
    </View>
  );
};

export default TabViews;
