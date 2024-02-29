import React from 'react';
import { View, Text, StyleSheet,ScrollView,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { colors } from '../../../../../Config/theme/colors';
import { useContext } from 'react';
import { ThemeContext } from '../../../../../contexts/ThemeContext';

const TermsConditions = () => {

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
      <Text style={styles.heading}>Terms and Conditions</Text>
      <Text style={styles.subHeading}>Effective Date: 06/06/2023</Text>
      <Text style={[styles.body,{color:activeColors.TextColor}]}>
      Please read these Terms and Conditions ("Agreement") carefully before using the TravoMate mobile application (the "App") operated by IF-tech company.
      </Text>
      <Text style={styles.subHeading}>1. Acceptance of Terms</Text>
         <Text style={[styles.body,{color:activeColors.TextColor}]}>
            By downloading, installing, or using the App, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use the App.
          </Text>
          
          <Text style={styles.subHeading}>2. User Responsibilities</Text>
          
            <Text style={[styles.steps,{color:activeColors.TextColor}]}>a. Age Restriction: You must be at least 18 years old to use the App.</Text>
            <Text style={[styles.steps,{color:activeColors.TextColor}]}>b. Compliance with Laws: You agree to comply with all applicable local, national, and international laws and regulations.</Text>
            <Text style={[styles.steps,{color:activeColors.TextColor}]}>c. Appropriate Use: You agree to use the App solely for legitimate package exchange purposes and not for any unlawful or prohibited activities.</Text>
            

          <Text style={styles.subHeading}>3. Intellectual Property</Text>
          <Text style={[styles.steps,{color:activeColors.TextColor}]}>a. Ownership: All rights, ownership, and intellectual property related to the App's content, trademarks, and copyrights are the property of IF-tech company.</Text>
          <Text style={[styles.steps,{color:activeColors.TextColor}]}>b. Prohibited Use: You are prohibited from copying, modifying, distributing, selling, or using any part of the App without our prior written consent.</Text>
         
          <Text style={styles.subHeading}>4. Limitation of Liability</Text>
          <Text style={[styles.steps,{color:activeColors.TextColor}]}>a. Disclaimer: The App is provided "as is" without any warranties or guarantees of any kind, either expressed or implied.</Text>
          <Text style={[styles.steps,{color:activeColors.TextColor}]}>b. Limitation of Liability: We shall not be liable for any damages, losses, or liabilities arising from the use of the App or any interactions between users.</Text>

          <Text style={styles.subHeading}>5. Dispute Resolution</Text>
          <Text style={[styles.steps,{color:activeColors.TextColor}]}>a. Governing Law: These Terms and Conditions shall be governed by and construed in accordance with the laws of [Insert Jurisdiction].</Text>
          <Text style={[styles.steps,{color:activeColors.TextColor}]}>b. Arbitration: Any disputes arising from the use of the App shall be resolved through binding arbitration in accordance with the rules of [Insert Arbitration Organization].</Text>
          
          <Text style={styles.subHeading}>6. Termination</Text>
          <Text style={[styles.body,{color:activeColors.TextColor}]}>We reserve the right to terminate or suspend your access to the App at any time, with or without cause or notice.</Text>
          
          <Text style={styles.subHeading}>7. Updates to Terms</Text>
          <Text style={[styles.body,{color:activeColors.TextColor}]}>We may update these Terms and Conditions from time to time. Any material changes will be notified to you, and the updated terms will be available within the App.</Text>
          <Text style={[styles.body,{color:activeColors.TextColor}]}>Please review these Terms and Conditions carefully. If you have any questions or concerns, please contact us at [Insert Contact Details].</Text>
          
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
    // marginBottom:20,
    marginTop:30
  },
});

export default TermsConditions;
