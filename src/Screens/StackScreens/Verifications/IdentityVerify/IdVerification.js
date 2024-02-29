import { StyleSheet, Text, View, TextInput, TouchableOpacity, Pressable } from 'react-native';
import React, { useState } from 'react';
import { Entypo, AntDesign, Fontisto } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../../../../Config/theme/colors';
import { useContext } from 'react';
import { ThemeContext } from '../../../../../contexts/ThemeContext';


const IdVerification = () => {

// theme colors
const {theme} = useContext(ThemeContext);
const activeColors = colors[theme.mode];

  const [isIDCardActive, setIDCardActive] = useState(true);
  const [isPassportActive, setPassportActive] = useState(false);

  const handleIDCardPress = () => {
    setIDCardActive(true);
    setPassportActive(false);
  };

  const handlePassportPress = () => {
    setIDCardActive(false);
    setPassportActive(true);
  };

  const navigation = useNavigation();

  const handleArrowBackPress = () => {
    navigation.goBack();
  };
  const handleNextPress = () =>{
    if (isIDCardActive){
     navigation.navigate('ID Screen')
    }
    else {
      navigation.navigate('Passport Screen')
    }
  }

 

  return (
    <View style={[styles.container,{backgroundColor:activeColors.bgcolor}]}>
      <View style={styles.content}>
        {/* Arrow Head */}
        <View style={styles.ArrowSection}>
          <TouchableOpacity onPress={handleArrowBackPress}>
            <AntDesign name="arrowleft" size={26} color="#dc661f" />
          </TouchableOpacity>
        </View>

        {/* title */}
        <View style={styles.TextSection}>
          <Text style={[styles.TextHeader,{color:activeColors.TextColor}]}>Your identity document</Text>
        </View>

        {/* information icon and texts */}
        <View style={styles.infoHead}>
          <Entypo name="info-with-circle" size={20} color="#dc661f" />
          <Text style={styles.infoHeadTitle}>Information</Text>
        </View>
        <Text style={styles.infoSection}>
          At TravoMate, we prioritize your safety and security. To ensure a reliable experience, we may ask you to verify
          your identity. This confirms your identity and enables smooth payments on our platform.
        </Text>

        {/* ID verify button */}
        <TouchableOpacity onPress={handleIDCardPress}>
        <View style={[styles.inputContainer2, isIDCardActive && styles.inputFocused]}>
          <View style={styles.Icon}>
          <AntDesign name="idcard" size={24} color={isIDCardActive ? 'blue' : 'black'} />
          </View>
          <View style={styles.verticalLine} />
          <View style={styles.card}>
            <Text style={styles.cardText}>ID card</Text>
          </View>
          <View style={styles.recommendedBox}>
            <Text style={styles.recommendedText}>Recommended</Text>
          </View>
          {isIDCardActive && <AntDesign name="check" size={24} color="blue" style={styles.checkIcon} />}
          
        </View>
        </TouchableOpacity>

        {/* Passport verify button */}
        <TouchableOpacity onPress={handlePassportPress}>
        <View style={[styles.inputContainer2, isPassportActive && styles.inputFocused]}>
          <View style={styles.Icon}>
          <Fontisto name="passport-alt" size={24} color={isPassportActive ? 'blue' : 'black'} />
          </View>
          <View style={styles.verticalLine} />
          <View style={styles.card}>
            <Text style={styles.cardText}>Passport</Text>
          </View>
          {isPassportActive && <AntDesign name="check" size={24} color="blue" style={styles.checkIcon} />}
        </View>
        </TouchableOpacity>

        {/* BUTTON */}
        <View style={styles.nextSection}>
          <Pressable style={styles.nextButton} onPress={handleNextPress}>
            <Text style={styles.nextButtonText}>Next</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default IdVerification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'white',
  },
  content: {
    marginTop: 15,
    marginHorizontal: 10,
  },
  ArrowSection: {
    marginBottom: 20,
    marginHorizontal: 10,
    marginTop:40
  },
  TextSection: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  TextHeader: {
    fontSize: 29,
    fontWeight: '700',
  },
  infoSection: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 20,
  },
  infoHead: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  infoHeadTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5,
    color: "#dc661f",
  },
  nextButton: {
    backgroundColor: '#800020',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
  },
  nextButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  nextSection: {
    marginBottom: 10,
    marginTop: 40,
  },
  inputContainer2: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 15,
    paddingVertical: 15,
    marginBottom: 10,
    paddingHorizontal: 5,
    backgroundColor:'gray'
  },
  Icon: {
    paddingHorizontal: 5,
  },
  verticalLine: {
    width: 2,
    height: '100%',
    backgroundColor: '#ccc',
  },
  recommendedBox: {
    backgroundColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 5,
    marginRight: 15,
  },
  recommendedText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'black',
  },
  inputFocused: {
    borderColor: 'blue', // Change border color when focused
  },
  checkIcon: {
    marginLeft: 'auto',
  },
  card: {
    paddingHorizontal:10,
    paddingRight:40
  },
  cardText: {
    fontSize:18,
    fontWeight:'bold'
  },
});


