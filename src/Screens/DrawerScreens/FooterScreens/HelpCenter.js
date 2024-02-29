import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity,Linking,ScrollView } from 'react-native';
import CustomButton from '../../../components/CustomButton';
import Footer from '../../../components/Footer';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../../../Config/theme/colors';
import { useContext } from 'react'
import { ThemeContext } from '../../../../contexts/ThemeContext'
import {Website_URL} from '@env'

const HelpCenter = () => {

  // theme colors
  const {theme} = useContext(ThemeContext);
  const activeColors = colors[theme.mode];

const navigation = useNavigation();
  const handleCancelPress = () => {
    navigation.goBack();
  }; 
  const sendEmail = () => {
    Linking.openURL('mailto:yourtastetune@gmail.com');
  };
  

const handleWhatsApp = () => {
  Linking.openURL('whatsapp://send?phone=+250790304030');
};
const handleYoutubePress = async () => {
  const url = 'https://www.youtube.com/watch?v=pZslyWE4QaQ&ab_channel=DanyNanone';
  const supported = await Linking.canOpenURL(url);

  if (supported) {
    await Linking.openURL(url);
  } else {
    console.log("Don't know how to open URI: " + url);
  }
};
const handleWebsitePress = async () => {
  const url = Website_URL;
  const supported = await Linking.canOpenURL(url);

  if (supported) {
    await Linking.openURL(url);
  } else {
    console.log("Don't know how to open URI: " + url);
  }
};




  return (
    <View style={[styles.container,{backgroundColor:activeColors.bgcolor}]}>
    <ScrollView style={{marginVertical:20}}>
    <View style={styles.buttonCancel}>
     <TouchableOpacity  onPress={handleCancelPress}>
      <Text style={{color:'red', fontSize:20, fontWeight:'600'}}>Cancel</Text>
     </TouchableOpacity>
    </View>
    <View style={styles.body}>
      <Text style={[styles.title,{color:activeColors.TextColor}]}>Help Center</Text>
      
      <View style={styles.infoHead}>
        <Entypo name="info-with-circle" size={20} color="#dc661f" />
        <Text style={styles.title2}>Information</Text>
      </View>
      
      <Text style={styles.infoSection}>
      Welcome to the Help Center. if you are Experiencing any issues, 
      Please report it via the contact method that suits you the best.
      </Text>
      <Text style={styles.infoSection}>PS. We assist you as soon as possible</Text>
      
      <View style={styles.AllBottons}>
      <CustomButton
        text="Contact Us on WhatsApp"
        iconSource="whatsapp"
        buttonStyle={[styles.button, {paddingHorizontal:35}]}
        textStyle={styles.buttonText}
        onPress={handleWhatsApp}
      />
      <CustomButton
        text="Contact Us via Email"
        iconSource="envelope-o"
        buttonStyle={[styles.button, {backgroundColor: '#0077C8',paddingHorizontal:50}]}
        textStyle={styles.buttonText}
        onPress={sendEmail}
      />
      </View>
      <View >
      <View style={styles.infoHead}>
        <Entypo name="info-with-circle" size={20} color="#dc661f" />
        <Text style={styles.title2}>Tutorials</Text>
      </View>
      <Text style={styles.infoSection}>Find below our tutorials to better understand how our our platform works.</Text>
      </View>
      <View style={styles.AllBottons}>
      <CustomButton
        text="Presentation of Traval Mate"
        iconSource="youtube-play"
        buttonStyle={[styles.button, {backgroundColor: '#FF0000',}]}
        textStyle={styles.buttonText}
        onPress={handleYoutubePress}
      />
      </View>
      <Footer/>
      <View style={styles.websiteSection}>
      <TouchableOpacity onPress={handleWebsitePress}>
      <Text style={styles.websiteTexts}>Visit our website</Text>
      </TouchableOpacity>
      </View>
      </View>
    </ScrollView>
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  body: {
    marginTop:50,
    marginHorizontal:20,
  },
  buttonCancel: {
    position: 'absolute',
    top: 20,
    right: 0,
    padding: 10,
  },
  AllBottons: {
    alignItems:'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  infoSection: {
    fontSize: 18,
    color: 'gray' 
  },
  infoHead: {
    flexDirection:'row',
    marginVertical:10
  },
  title2: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft:5,
    color:"#dc661f"
  },
  button: {
    marginTop: 16,
    backgroundColor: '#25D366',
  },
  buttonText: {
    fontWeight: 'bold',
  },
  websiteTexts: {
    fontSize: 18,
    fontWeight: 'bold',
    color:'#800020',
  },
  websiteSection: {
   justifyContent:'center',
   alignItems:'center',
   marginBottom:10
  },
  
});

export default HelpCenter;