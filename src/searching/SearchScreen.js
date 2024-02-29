import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View,ScrollView, Pressable, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { colors } from '../../Config/theme/colors';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

const backgroundImage = require('../../assets/images/googleMap.jpg');

const SearchScreen = () => {
  const route = useRoute();
  const {input1,input2} = route.params || {};
  const navigation = useNavigation();
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDates, setSelectedDates] = useState();
  

  // theme colors
  const {theme} = useContext(ThemeContext);
  const activeColors = colors[theme.mode];
  
 
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleDateConfirm = (date) => {
    setSelectedDate(date);
    hideDatePicker();
  };
  

  

  const handleSearch = () => {
    console.log('search pressed');
  };
  const handleSendFrom = () => {
    
    navigation.navigate('Send from')
  };
  const handleSendTo = () => {
    navigation.navigate('Send to')
  };
  

  return (
    
    // <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={[styles.container, {backgroundColor: activeColors.bgcolor}]}>
      
      <ScrollView style={{flex:1}}>
      <View style={styles.AllContents}>
        <View style={[styles.inputsContainer,{}]}>
        
          <View style={styles.inputContainer}>
            <Text style={[styles.label,{color: activeColors.TextColor}]}>I want to send a package From</Text>
           <Pressable onPress={handleSendFrom}>
           <TextInput
              placeholder={route?.params?.input1 || 'ex.paris'}
              style={styles.input}
              value={from}
              onChangeText={setFrom}
              editable={false}
              placeholderTextColor="gray"
            />
           </Pressable>
           
          </View>
          <View style={styles.inputContainer}>
            <Text style={[styles.label, {color: activeColors.TextColor}]}>To</Text>
            <Pressable onPress={handleSendTo}>
            <TextInput
               placeholder={route?.params?.input2 || 'ex.kigali'}
              style={styles.input}
              value={to}
              onChangeText={setTo}
              editable={false}
              placeholderTextColor="gray"
            />
            </Pressable>
            
          </View>
          <View style={styles.inputContainer}>
            <Text style={[styles.label, {color: activeColors.TextColor}]}>Starting from</Text>
            <View style={styles.dateInputContainer}>
            
              <TextInput
                placeholder="select a date"
                style={[styles.dateInput, selectedDate && {color:activeColors.TextColor,fontWeight: 'bold',fontSize:17}]}
                value={selectedDate ? moment(selectedDate).format('MMMM DD, YYYY') : ''}
                editable={false}
                placeholderTextColor="gray"
                
              />
              <TouchableOpacity onPress={showDatePicker}>
              <Feather name="calendar" size={34} color="#F0F0F0" style={{backgroundColor:"#dc661f", borderRadius:10, padding:5, marginRight:5}} />
              </TouchableOpacity>
              <DateTimePickerModal
                 isVisible={isDatePickerVisible}
                 mode="date"
                 onConfirm={handleDateConfirm}
                 onCancel={hideDatePicker}
                />

            </View>
          </View>
        </View>
       
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
        </View>
        </ScrollView>
      
      
      </View>
      
    // </ImageBackground>
    
  );
};

const styles = StyleSheet.create({
  background: {
    // flex: 1,
    // resizeMode: 'cover',
    // height:'50%'
  },
  container: {
    flex: 1,
  },
  AllContents: {
    marginVertical:20,
    paddingTop:20,
    padding: 20,
    justifyContent: 'flex-end',
    marginTop:0
  },

  inputsContainer: {
    // backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    marginBottom:10
    
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
  dateInputContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  dateInput: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    flex: 1,
    marginRight: 10,
    fontSize: 16,
  },
  numberInput: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    width: 80,
    fontSize: 16,
  },
  searchButton: {
    backgroundColor: '#800020',
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
  },
  searchButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SearchScreen;
