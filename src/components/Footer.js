import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Linking } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Footer = () => {
    const handleFaceBookPress = async () => {
        const url = 'https://www.facebook.com/';
        const supported = await Linking.canOpenURL(url);
    
        if (supported) {
          await Linking.openURL(url);
        } else {
          console.log("Don't know how to open URI: " + url);
        }
      };
    const handleInstagramPress = async () => {
        const url = 'https://www.instagram.com/travomate_app/';
        const supported = await Linking.canOpenURL(url);
    
        if (supported) {
          await Linking.openURL(url);
        } else {
          console.log("Don't know how to open URI: " + url);
        }
      };
    const handleTwitterPress = async () => {
        const url = 'https://twitter.com';
        const supported = await Linking.canOpenURL(url);
    
        if (supported) {
          await Linking.openURL(url);
        } else {
          console.log("Don't know how to open URI: " + url);
        }
      };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Follow us on:</Text>
      <View style={styles.iconsContainer}>
        <TouchableOpacity onPress={handleFaceBookPress}>
          <FontAwesome name="facebook-square" size={24} color="#3b5998" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleInstagramPress}>
          <FontAwesome name="instagram" size={24} color="#c32aa3" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleTwitterPress}>
          <FontAwesome name="twitter-square" size={24} color="#1da1f2" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 28,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 16,
    color:'gray'  
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 16,
  },
});

export default Footer;