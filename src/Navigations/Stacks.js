import React from "react";
import { TouchableOpacity } from "react-native";
import Home from "../Screens/StackScreens/Home&Headers/HomeScreens/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Publish from "../Screens/BottomTabs/PublishScreens/Publish";
import Message from "../Screens/BottomTabs/MessageScreens/Message";
import Notification from "../Screens/BottomTabs/Notifications/Notification";
import Profile from "../Screens/BottomTabs/ProfileScreens/Profile";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Entypo,
  MaterialCommunityIcons,
  MaterialIcons,
  AntDesign,
  Ionicons,
} from "@expo/vector-icons";
import SearchScreen from "../searching/SearchScreen";
import HelpCenter from "../Screens/DrawerScreens/FooterScreens/HelpCenter";
import DetailsScreen from "../Screens/StackScreens/Home&Headers/HomeScreens/DetailsScreen";
import SignOut from "../Screens/DrawerScreens/FooterScreens/SignOut";
import UserProfile from "../Screens/StackScreens/Home&Headers/HomeScreens/UserProfile";
import EditProfile from "../Screens/BottomTabs/ProfileScreens/EditProfile";
import VerifyProfile from "../Screens/StackScreens/Verifications/VerifyProfile";
import ProfileDetails from "../Screens/BottomTabs/ProfileScreens/ProfileDetails";
import PhoneVerification from "../Screens/StackScreens/Verifications/PhoneVerification";
import EmailVerification from "../Screens/StackScreens/Verifications/EmailVerification";
import FbVerification from "../Screens/StackScreens/Verifications/FbVerification";
import IdVerification from "../Screens/StackScreens/Verifications/IdentityVerify/IdVerification";
import ReviewsRecieved from "../Screens/StackScreens/ReviewScreens/ReviewsRecieved";
import ReviewsSubmitted from "../Screens/StackScreens/ReviewScreens/ReviewsSubmitted";
import PublishedListings from "../Screens/DrawerScreens/PublishedListings";
import Alerts from "../Screens/DrawerScreens/Alerts";
import ChangeEmail from "../Screens/StackScreens/Preferences/ChangeEmail";
import ChangePassword from "../Screens/StackScreens/Preferences/ChangePassword";
import ChangeCurrency from "../Screens/StackScreens/Preferences/ChangeCurrency";
import ContactUs from "../Screens/StackScreens/About/ContactUs";
import SendFrom from "../searching/SendFrom";
import SendTo from "../searching/SendTo";
import ChatScreen from "../Screens/BottomTabs/MessageScreens/ChatScreen";
import ArrivalCity from "../Screens/BottomTabs/PublishScreens/ArrivalCity";
import DepartureDate from "../Screens/BottomTabs/PublishScreens/DepartureDate";
import ArrivalDate from "../Screens/BottomTabs/PublishScreens/ArrivalDate";
import KilosToSell from "../Screens/BottomTabs/PublishScreens/KilosToSell";
import PriceKg from "../Screens/BottomTabs/PublishScreens/PriceKg";
import PrivacyPolicy from "../Screens/StackScreens/About/userPrivacies/PrivacyPolicy";
import TermsConditions from "../Screens/StackScreens/About/userPrivacies/TermsConditions";
import FAQs from "../Screens/StackScreens/About/userPrivacies/FAQs";
import NotificationDetails from "../Screens/BottomTabs/Notifications/NotificationDetails";
import BookedProgress from "../Screens/StackScreens/ListingsSection/BookedProgress";
import IDScreen from "../Screens/StackScreens/Verifications/IdentityVerify/IDScreen";
import PassportScreen from "../Screens/StackScreens/Verifications/IdentityVerify/PassportScreen";
import Parcels from "../Screens/StackScreens/Home&Headers/Headers/Parcels";
import Tracking from "../Screens/StackScreens/Home&Headers/Headers/Tracking";
import { colors } from "../../Config/theme/colors";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MyTabs() {
  // theme color
  const { theme } = useContext(ThemeContext);
  const activeColors = colors[theme.mode];

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#dc661f",
        tabBarStyle: {
          backgroundColor: activeColors.bgcolor,
        },
      }}
    >
      <Tab.Screen
        name="Trips"
        component={Home}
        options={{
          tabBarLabel: "Trips",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <MaterialCommunityIcons
                name="airplane"
                size={27}
                color="#dc661f"
              />
            ) : (
              <MaterialCommunityIcons
                name="airplane-marker"
                size={27}
                color={activeColors.TextColor}
              />
            ),
        }}
      />
      {/* <Tab.Screen 
      name="Publish"
       component={Publish}
       options={{
       headerShown:false,
      tabBarLabel: 'Publish',
    tabBarIcon: ({focused}) => focused ? (
      <Ionicons name="add-circle-sharp" size={27} color="#dc661f" />
      ):(
        <MaterialIcons name="add-circle-outline" size={27} color={activeColors.TextColor} /> 
      )
    }}
        /> */}
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          headerShown: false,
          tabBarLabel: "Notification",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <MaterialIcons name="notifications" size={27} color="#dc661f" />
            ) : (
              <Ionicons
                name="notifications-circle-outline"
                size={27}
                color={activeColors.TextColor}
              />
            ),
        }}
      />

      <Tab.Screen
        name="Message"
        component={Message}
        options={{
          headerShown: false,
          tabBarLabel: "Message",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <MaterialCommunityIcons
                name="message-processing"
                size={27}
                color="#dc661f"
              />
            ) : (
              <MaterialCommunityIcons
                name="message-processing-outline"
                size={27}
                color={activeColors.TextColor}
              />
            ),
        }}
      />

      {/* <Tab.Screen
       name="Profile" 
       component={Profile} 
       options={{
        headerShown: false,
      tabBarLabel: 'Profile',
    tabBarIcon: ({focused}) => focused ? (
      <Ionicons name="person-circle" size={27} color="#dc661f" />
      ):(
        <Ionicons name="person-circle-outline" size={27} color={activeColors.TextColor} />
      )
    }}
       /> */}
    </Tab.Navigator>
  );
}

const Stacks = () => {
  // theme color
  const { theme } = useContext(ThemeContext);
  const activeColors = colors[theme.mode];
  return (
    <Stack.Navigator>
      {/* bottom tabs screens section */}
      <Stack.Screen
        name="Tabs"
        component={MyTabs}
        options={{ headerShown: false }}
      />
      {/* search section with its screens */}
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{
          headerTintColor: "#dc661f",
          headerTitle: "",
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: activeColors.bgcolor,
            
          },
        }}
      />
      <Stack.Screen
        name="Send from"
        component={SendFrom}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Send to"
        component={SendTo}
        options={{ headerShown: false }}
      />
      {/* drawer footer screens section */}
      <Stack.Screen
        name="Help"
        component={HelpCenter}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Sign Out"
        component={SignOut}
        options={{
          headerTintColor: "#dc661f",
          headerStyle: {
            backgroundColor: activeColors.bgcolor,
          },
        }}
      />
      {/* Home related screens */}
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{
          headerTintColor: "#dc661f",
          headerStyle: {
            backgroundColor: activeColors.bgcolor,
          },
          headerRight: () => (
            <Entypo
              name="share"
              size={24}
              color="#dc661f"
              onPress={() => console.warn("share pressed")}
            />
          ),
        }}
      />

      <Stack.Screen
        name="User Profile"
        component={UserProfile}
        options={{
          headerTintColor: "#dc661f",
          headerStyle: {
            backgroundColor: activeColors.bgcolor,
          },
        }}
      />
      <Stack.Screen
        name="publish"
        component={Publish}
        options={{
          headerTintColor: "#dc661f",
          headerTitle: "",
          headerStyle: {
            backgroundColor: activeColors.bgcolor,
          },
        }}
      />
      {/* profile and its screens section */}
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerTintColor: "#dc661f",
          headerTitle: "",
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: activeColors.bgcolor,
            
          },
        }}
      />
      <Stack.Screen
        name="Edit my profile"
        component={EditProfile}
        options={{
          headerTintColor: "#dc661f",
          headerStyle: {
            backgroundColor: activeColors.bgcolor,
          },
        }}
      />
      <Stack.Screen
        name="User profile details"
        component={ProfileDetails}
        options={{
          headerTintColor: "#dc661f",
          headerStyle: {
            backgroundColor: activeColors.bgcolor,
          },
        }}
      />
      {/* profile verification screens */}
      <Stack.Screen
        name="Verify my profile"
        component={VerifyProfile}
        options={{
          headerTintColor: "#dc661f",
          headerStyle: {
            backgroundColor: activeColors.bgcolor,
          },
        }}
      />

      <Stack.Screen
        name="Phone verifications"
        component={PhoneVerification}
        options={{
          headerTintColor: "#dc661f",
          headerStyle: {
            backgroundColor: activeColors.bgcolor,
          },
        }}
      />
      <Stack.Screen
        name="Email verifications"
        component={EmailVerification}
        options={{
          headerTintColor: "#dc661f",
          headerStyle: {
            backgroundColor: activeColors.bgcolor,
          },
        }}
      />
      <Stack.Screen
        name="FaceBook"
        component={FbVerification}
        options={{
          headerTintColor: "#dc661f",
          headerStyle: {
            backgroundColor: activeColors.bgcolor,
          },
        }}
      />
      <Stack.Screen
        name="ID verifications"
        component={IdVerification}
        options={{ headerShown: false }}
      />

      {/* Listings screens */}
      <Stack.Screen
        name="Published Trips"
        component={PublishedListings}
        options={{
          headerTintColor: "#dc661f",
          headerStyle: {
            backgroundColor: activeColors.bgcolor,
          },
        }}
      />
      <Stack.Screen
        name="Reservation in Progress"
        component={BookedProgress}
        options={{
          headerTintColor: "#dc661f",
          headerStyle: {
            backgroundColor: activeColors.bgcolor,
          },
        }}
      />

      {/* Alerts screen */}
      <Stack.Screen
        name="Alerts"
        component={Alerts}
        options={{
          headerTintColor: "#dc661f",
          headerStyle: {
            backgroundColor: activeColors.bgcolor,
          },
        }}
      />

      {/* Review screens */}
      <Stack.Screen
        name="Reviews submitted"
        component={ReviewsSubmitted}
        options={{
          headerTintColor: "#dc661f",
          headerStyle: {
            backgroundColor: activeColors.bgcolor,
          },
        }}
      />
      <Stack.Screen
        name="Reviews Recieved"
        component={ReviewsRecieved}
        options={{
          headerTintColor: "#dc661f",
          headerStyle: {
            backgroundColor: activeColors.bgcolor,
          },
        }}
      />

      {/* Preferences screens */}
      <Stack.Screen
        name="Change Email"
        component={ChangeEmail}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Change Password"
        component={ChangePassword}
        options={{
          headerTintColor: "#dc661f",
          headerStyle: {
            backgroundColor: activeColors.bgcolor,
          },
        }}
      />
      <Stack.Screen
        name="Change Preferred currency"
        component={ChangeCurrency}
        options={{ headerShown: false }}
      />

      {/* About screens */}
      <Stack.Screen
        // to be removed soon
        name="Contact Us"
        component={ContactUs}
        options={{ headerTintColor: "#dc661f" }}
      />
      <Stack.Screen
        name="privacy policy"
        component={PrivacyPolicy}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="terms and conditions"
        component={TermsConditions}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FAQs"
        component={FAQs}
        options={{ headerShown: false }}
      />

      {/* Messaging screens */}
      <Stack.Screen
        name="chatScreen"
        component={ChatScreen}
        options={({ route }) => ({
          title: route.params.userName,
          headerTitleAlign: "center",
          headerTintColor: "#dc661f",
          headerStyle: {
            backgroundColor: activeColors.bgcolor,
          },
        })}
      />
      {/* Notifications screen */}
      <Stack.Screen
        name="Notification details"
        component={NotificationDetails}
        options={({ route }) => ({
          title: route.params.notification.title,
          headerTitleAlign: "center",
          headerTintColor: "#dc661f",
          headerRight: () => (
            <TouchableOpacity onPress={() => console.warn("for deleting")}>
              <Entypo name="dots-three-vertical" size={24} color="#dc661f" />
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: activeColors.bgcolor,
          },
        })}
      />

      {/* Publish screens section */}
      <Stack.Screen
        name="Arrival city"
        component={ArrivalCity}
        options={{
          headerTintColor: "#dc661f",
          headerTitle: "",
          headerStyle: {
            backgroundColor: activeColors.bgcolor,
          },
        }}
      />
      <Stack.Screen
        name="Departure date"
        component={DepartureDate}
        options={{
          headerTintColor: "#dc661f",
          headerTitle: "",
          headerStyle: {
            backgroundColor: activeColors.bgcolor,
          },
        }}
      />
      <Stack.Screen
        name="Arrival date"
        component={ArrivalDate}
        options={{
          headerTintColor: "#dc661f",
          headerTitle: "",
          headerStyle: {
            backgroundColor: activeColors.bgcolor,
          },
        }}
      />
      <Stack.Screen
        name="Kilos to sell"
        component={KilosToSell}
        options={{
          headerTintColor: "#dc661f",
          headerTitle: "",
          headerStyle: {
            backgroundColor: activeColors.bgcolor,
          },
        }}
      />
      <Stack.Screen
        name="price per kilo"
        component={PriceKg}
        options={{
          headerTintColor: "#dc661f",
          headerTitle: "",
          headerStyle: {
            backgroundColor: activeColors.bgcolor,
          },
        }}
      />

      <Stack.Screen
        name="ID Screen"
        component={IDScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Passport Screen"
        component={PassportScreen}
        options={{ headerShown: false }}
      />

      {/* Header screens */}

      <Stack.Screen
        name="My Parcels"
        component={Parcels}
        options={{
          headerTintColor: "#dc661f",
          headerStyle: {
            backgroundColor: activeColors.bgcolor,
          },
        }}
      />
      <Stack.Screen
        name="Tracking"
        component={Tracking}
        options={{
          headerTintColor: "#dc661f",
          headerStyle: {
            backgroundColor: activeColors.bgcolor,
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default Stacks;
