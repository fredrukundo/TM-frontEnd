import React from 'react';
import { View, Text, StyleSheet,ScrollView,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { colors } from '../../../../../Config/theme/colors';
import { useContext } from 'react';
import { ThemeContext } from '../../../../../contexts/ThemeContext';

const FAQs = () => {

  // theme colors
  const {theme} = useContext(ThemeContext);
  const activeColors = colors[theme.mode];

  const navigation = useNavigation();

  const handleArrowBackPress = () => {
    navigation.goBack();
  };
  return (
    <ScrollView style={[styles.container,{backgroundColor:activeColors.bgcolor}]}>
    <View style={styles.content}>
    {/* header arrow back */}
    <View style={styles.ArrowSection}>
        <TouchableOpacity  onPress={handleArrowBackPress}>
        <AntDesign name="arrowleft" size={26} color="#dc661f" />
        </TouchableOpacity>
    </View>
      <Text style={styles.heading}>Frequently Asked Questions (FAQ)</Text>
      
      <Text style={styles.subHeading}>1. How does Travo Mate work?</Text>
         <Text style={[styles.body,{color:activeColors.TextColor}]}>
         Travo Mate is a platform that helps users send or receive packages by connecting them with travelers who have upcoming flights to the desired destination. Users post their next flight details, and if someone has a package to send to that same country, they can book and communicate with the traveler to arrange a meet-up for package exchange.
         </Text>
          
          <Text style={styles.subHeading}>2. Is TravoMate safe to use?</Text>
          
            <Text style={[styles.body,{color:activeColors.TextColor}]}>Travo Mate prioritizes the safety and security of its users. We encourage users to exercise caution and common sense when arranging meet-ups for package exchange. It's important to communicate clearly, verify identities, and choose public and well-populated locations for meet-ups. Travo Mate does not guarantee the actions or reliability of individual users, so please use the platform responsibly.</Text>
           

          <Text style={styles.subHeading}>3. How do I create an account?</Text>
          <Text style={[styles.body,{color:activeColors.TextColor}]}>To create an account on Travo Mate, simply download the app from the App Store or Google Play Store and follow the registration process. You will be prompted to provide your name, email address, phone number, and other necessary information.</Text>
         
          <Text style={styles.subHeading}>4. Can I change or update my flight details?</Text>
          <Text style={[styles.body,{color:activeColors.TextColor}]}>Yes, you can change or update your flight details in the app. Simply go to the "My Flights" section and edit the relevant information. Please make sure to keep your flight details up to date to ensure accurate matching with potential package senders or recipients.</Text>

          <Text style={styles.subHeading}>5. How do I communicate with other users?</Text>
          <Text style={[styles.body,{color:activeColors.TextColor}]}>Travo Mate provides an in-app messaging feature that allows users to communicate with each other. Once you find a potential match for package exchange, you can use the messaging feature to discuss the details, coordinate the meet-up, and finalize the arrangement.</Text>
          
          <Text style={styles.subHeading}>6. What if I encounter an issue or have a question?</Text>
          <Text style={[styles.body,{color:activeColors.TextColor}]}>If you encounter any issues or have questions about the app or package exchange process, please reach out to our support team. You can contact us by [insert contact information or link to support page].</Text>
          
          <Text style={styles.subHeading}>7. How does Travo Mate handle my personal information?</Text>
          <Text style={[styles.body,{color:activeColors.TextColor}]}>Travo Mate takes the privacy and security of your personal information seriously. We collect, use, and store your information in accordance with our Privacy Policy. Please review our Privacy Policy [insert link to privacy policy] to understand how we handle and protect your data.</Text>
          
          <Text style={styles.subHeading}>8. Can I cancel a package exchange arrangement?</Text>
          <Text style={[styles.body,{color:activeColors.TextColor}]}>Yes, you can cancel a package exchange arrangement. However, we encourage users to communicate promptly and considerately with each other. If you need to cancel, notify the other user as soon as possible to avoid any inconvenience.</Text>
          
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor:'white'
  },
  content: {
    marginVertical:30,
    marginHorizontal:16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    marginTop: 15,
    textAlign:'center',
    color:'#f68712'
  },
  subHeading: {
    fontSize: 16,
    marginBottom: 20,
    color:'#f68712'
  },
  body: {
    fontSize: 14,
    marginBottom: 10,
    lineHeight: 20,
  },
  steps: {
    paddingVertical:5
  },
  ArrowSection: {
    marginTop:30
  },
});

export default FAQs;
