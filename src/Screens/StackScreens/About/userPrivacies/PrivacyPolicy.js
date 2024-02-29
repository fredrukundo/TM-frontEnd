import React from 'react';
import { View, Text, StyleSheet,ScrollView,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { colors } from '../../../../../Config/theme/colors';
import { useContext } from 'react';
import { ThemeContext } from '../../../../../contexts/ThemeContext';


const PrivacyPolicy = () => {

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
      <Text style={styles.heading}>Privacy Policy</Text>
      <Text style={styles.subHeading}>Effective Date: 06/06/2023</Text>
      <Text style={[styles.body,{color:activeColors.TextColor}]}>
        This Privacy Policy describes how TravoMate App collects, uses, and shares personal information
        of users of the TravoMate mobile application.
      </Text>
      <Text style={styles.subHeading}>1. Information We Collect</Text>
         <Text style={[styles.body,{color:activeColors.TextColor}]}>
          We may collect the following types of personal information when you use the App:
          </Text>
          <Text style={[styles.steps,{color:activeColors.TextColor}]}>- Name</Text>
          <Text style={[styles.steps,{color:activeColors.TextColor}]}>- Email address</Text>
          <Text style={[styles.steps,{color:activeColors.TextColor}]}>- Phone number</Text>
          <Text style={[styles.steps,{color:activeColors.TextColor}]}>- Flight information (origin and destination)</Text>

          <Text style={styles.subHeading}>2. Use of Information</Text>
          <Text style={[styles.body,{color:activeColors.TextColor}]}>We use the collected personal information for the following purposes:</Text>
            <Text style={[styles.steps,{color:activeColors.TextColor}]}>- Creating and managing user accounts</Text>
            <Text style={[styles.steps,{color:activeColors.TextColor}]}>- Facilitating package exchange coordination</Text>
            <Text style={[styles.steps,{color:activeColors.TextColor}]}>- Providing customer support</Text>
            <Text style={[styles.steps,{color:activeColors.TextColor}]}>- Matching users with potential package senders or recipients</Text>
            <Text style={[styles.steps,{color:activeColors.TextColor}]}>- Improving our services</Text>
            <Text style={[styles.steps,{color:activeColors.TextColor}]}>- Statistical analysis</Text>

          <Text style={styles.subHeading}>3. Sharing of Information</Text>
          <Text style={[styles.body,{color:activeColors.TextColor}]}>We may share your personal information with the following parties:</Text>
          <Text style={[styles.steps,{color:activeColors.TextColor}]}>- Other users on Travo Mate for the purpose of package exchange coordination</Text>
          <Text style={[styles.steps,{color:activeColors.TextColor}]}>- Service providers and partners who assist us in operating the App and delivering our services</Text>
          <Text style={[styles.steps,{color:activeColors.TextColor}]}>- Legal authorities or law enforcement agencies if required by law or to protect our rights and safety</Text>
          <Text style={[styles.body,{color:activeColors.TextColor}]}>We do not sell or share personal information with third parties for marketing purposes.</Text>

          <Text style={styles.subHeading}>4. Data Security</Text>
          <Text style={[styles.body,{color:activeColors.TextColor}]}>We implement reasonable security measures to protect your personal information from unauthorized access, loss, or misuse. However, please be aware that no method of transmission over the internet or electronic storage is 100% secure.</Text>

          <Text style={styles.subHeading}>5. Your Rights</Text>
          <Text style={[styles.body,{color:activeColors.TextColor}]}>You have the following rights regarding your personal information:</Text>
          <Text style={[styles.steps,{color:activeColors.TextColor}]}>- Right to access, update, and delete your personal information through the App settings or by contacting our support team</Text>
          <Text style={[styles.steps,{color:activeColors.TextColor}]}>- Right to request a copy of your personal data</Text>
          <Text style={[styles.steps,{color:activeColors.TextColor}]}>- Right to withdraw consent for processing your personal information</Text>

          <Text style={styles.subHeading}>6. Policy Updates</Text>
          <Text style={[styles.body,{color:activeColors.TextColor}]}>We may update this Privacy Policy periodically. We will notify you of any material changes, and the updated Privacy Policy will be available within the App.</Text>
          <Text style={[styles.body,{color:activeColors.TextColor}]}>Please review this Privacy Policy carefully and contact us at [insert contact details] if you have any questions or concerns regarding your privacy or the use of your personal information.</Text>
          
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

export default PrivacyPolicy;
