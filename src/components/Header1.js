import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons,MaterialCommunityIcons,FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Header1 = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: "#800020",
        height: 65,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        paddingHorizontal:3,
      }}
    >
      <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",
          borderColor: "white",
          borderWidth: 1,
          borderRadius: 25,
          padding: 8,
        }}
        onPress={() => console.warn('trips')}
      >
        <Ionicons name="airplane-outline" size={26} color="white" />
        <Text
          style={{
            marginLeft: 8,
            fontWeight: "bold",
            color: "white",
            fontSize: 15,
          }}
        >
          Trips
        </Text>
      </Pressable>

      <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",
          
        }}
        onPress={()=> navigation.navigate('My Parcels')}
      >
       <FontAwesome5 name="luggage-cart" size={26} color="white" />
        <Text
          style={{
            marginLeft: 8,
            fontWeight: "bold",
            color: "white",
            fontSize: 15,
          }}
        >
          My parcels
        </Text>
      </Pressable>

      <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",
         
        }}
        onPress={()=> navigation.navigate('Tracking')}
      >
        <MaterialCommunityIcons name="google-maps" size={26} color="white" />
        <Text
          style={{
            marginLeft: 8,
            fontWeight: "bold",
            color: "white",
            fontSize: 15,
          }}
        >
          Tracking
        </Text>
      </Pressable>

      
    </View>
  );
};

export default Header1

const styles = StyleSheet.create({
    
})