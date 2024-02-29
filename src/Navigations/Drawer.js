import React from 'react'
import { TouchableOpacity } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { AntDesign } from '@expo/vector-icons'
import Alerts from '../Screens/DrawerScreens/Alerts'
import PublishedListings from '../Screens/DrawerScreens/PublishedListings'
import Verfications from '../Screens/DrawerScreens/Verifications'
import Preferences from '../Screens/DrawerScreens/Preferences'
import { MaterialIcons,Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import CustomDrawer from './CustomDrawer';
import Stacks from './Stacks';
import VerifyProfile from '../Screens/StackScreens/Verifications/VerifyProfile'
import { useNavigation } from '@react-navigation/native'
import { colors } from '../../Config/theme/colors'
import { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'


const DrawerTab = createDrawerNavigator();


const Drawer = () => {

// theme colors
const {theme} = useContext(ThemeContext);
const activeColors = colors[theme.mode];
  
  const navigation = useNavigation();
  return (
    <DrawerTab.Navigator
    drawerContent={props => <CustomDrawer {...props}/>}
    screenOptions={{
      headerShown:false,
      drawerLabelStyle:{
        marginLeft:-25, fontSize:16
        },
        drawerActiveBackgroundColor:'#dc661f',
        drawerActiveTintColor:'#fff',
        drawerInactiveTintColor:activeColors.TextColor,
       
        }}
       
    >
     
    <DrawerTab.Screen
        name='Home'
        options={{
          headerShown:false,
            drawerLabel: "Home",
            title: "Home",
            drawerIcon: () => (
              <MaterialCommunityIcons name="home" size={26} color="#0A64EF" />
            )
          }}
        component={Stacks}
    />
    <DrawerTab.Screen
        name='Alerts'
        options={{
          headerShown:true,
            drawerLabel: "Alerts",
            title: "Alerts",
            drawerIcon: () => (
              <Ionicons name="notifications" size={24} color="#0A64EF" />
            ),
            headerTitleStyle: { 
            color: "#dc661f",
             },
             headerStyle:{
              backgroundColor:activeColors.bgcolor
              },
              headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={24} color="#dc661f" style={{ marginLeft: 12 }}/>
           </TouchableOpacity>
           ),
          }}
        component={Alerts}
    />
    <DrawerTab.Screen
        name='Published Listings'
        options={{
            headerShown:true,
            drawerLabel: "Published Listings",
            title: "Published Trips",
            drawerIcon: () => (
              <MaterialIcons name="flight-takeoff" size={28} color="#0A64EF" />
            ),
            headerTitleStyle: { 
            color: "#dc661f",
             },
             headerStyle:{
              backgroundColor:activeColors.bgcolor
              },
              headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={24} color="#dc661f" style={{ marginLeft: 12 }}/>
           </TouchableOpacity>
           ),

          }} 
        component={PublishedListings}
    />
    <DrawerTab.Screen
        name='Verify my profile'
        options={{
          headerShown:true,
            drawerLabel: "Verifications",
            title: "Verify my profile",
            headerTitleStyle: { 
            color: "#dc661f",
             },
             headerStyle:{
              backgroundColor:activeColors.bgcolor
              },
             headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={24} color="#dc661f" style={{ marginLeft: 12 }}/>
           </TouchableOpacity>
           ),
            drawerIcon: () => (
              <MaterialIcons name="verified-user" size={24} color="#0A64EF" />
            )
          }}
        component={VerifyProfile}
    />
    <DrawerTab.Screen
        name='Preferences'
        options={{
            drawerLabel: "Preferences",
            title: "Preferences",
            drawerIcon: () => (
              <Ionicons name="settings-sharp" size={24} color="#0A64EF" />
            )
          }}
        component={Preferences}
    />
    

    </DrawerTab.Navigator>
  )
}

export default Drawer