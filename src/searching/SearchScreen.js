// import React, { useState, useContext } from 'react';
// import { StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView, Pressable, KeyboardAvoidingView, Platform } from 'react-native';
// import DateTimePickerModal from 'react-native-modal-datetime-picker';
// import moment from 'moment';
// import { Feather } from '@expo/vector-icons';
// import { useNavigation } from '@react-navigation/native';
// import { colors } from '../../Config/theme/colors';
// import { ThemeContext } from '../../contexts/ThemeContext';
// import { useInputContext } from '../../contexts/DataContext';

// const SearchScreen = () => {
 
//   const {from,to} = useInputContext();
//   const navigation = useNavigation();
//   const [froms, setFroms] = useState(from);
//   const [tos, setTos] = useState(to);
//   const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
//   const [selectedDate, setSelectedDate] = useState(null);
 
//   // Theme colors
//   const { theme } = useContext(ThemeContext);
//   const activeColors = colors[theme.mode];

//   // Function to format date globally
//   const formatDate = (date) => {
//     return moment(date).format('MMMM DD, YYYY');
//   };

//   const showDatePicker = () => {
//     setDatePickerVisibility(true);
//   };

//   const hideDatePicker = () => {
//     setDatePickerVisibility(false);
//   };

//   const handleDateConfirm = (date) => {
//     setSelectedDate(date);
//     hideDatePicker();
//   };

//   const handleSearch = () => {
//     console.log(from);
//     console.log(to);
//     console.log(formatDate(selectedDate)); // Use the formatDate function
//     console.log("search pressed");
//   };

//   const handleSendFrom = () => {
//     navigation.navigate('Send from');
//   };

//   const handleSendTo = () => {
//     navigation.navigate('Send to');
//   };

//   return (
//     <KeyboardAvoidingView style={[styles.container, { backgroundColor: activeColors.bgcolor }]} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
//       <ScrollView style={{ flex: 1 }}>
//         <View style={styles.AllContents}>
//           <View style={styles.inputsContainer}>
//             <View style={styles.inputContainer}>
//               <Text style={[styles.label, { color: activeColors.TextColor }]}>I want to send a package From</Text>
//               <Pressable onPress={handleSendFrom}>
//                 <View pointerEvents="none">
//                   <TextInput
//                     placeholder={from || 'ex.paris'}
//                     style={[styles.input, { color: activeColors.TextColor }]}
//                     value={froms}
//                     onChangeText={setFroms}
//                     editable={false}
//                     placeholderTextColor="gray"
//                   />
//                 </View>
//               </Pressable>
//             </View>
//             <View style={styles.inputContainer}>
//               <Text style={[styles.label, { color: activeColors.TextColor }]}>To</Text>
//               <Pressable onPress={handleSendTo}>
//                 <View pointerEvents="none">
//                   <TextInput
//                     placeholder={to || 'ex.kigali'}
//                     style={[styles.input, { color: activeColors.TextColor }]}
//                     value={tos}
//                     onChangeText={setTos}
//                     editable={false}
//                     placeholderTextColor="gray"
//                   />
//                 </View>
//               </Pressable>
//             </View>
//             <View style={styles.inputContainer}>
//               <Text style={[styles.label, { color: activeColors.TextColor }]}>Starting from</Text>
//               <View style={styles.dateInputContainer}>
//                 <View pointerEvents="none" style={{ flex: 1 }}>
//                   <TextInput
//                     placeholder="select a date"
//                     style={[styles.dateInput, selectedDate && { color: activeColors.TextColor, fontWeight: 'bold', fontSize: 17 }]}
//                     value={selectedDate ? formatDate(selectedDate) : ''}
//                     editable={false}
//                     placeholderTextColor="gray"
//                   />
//                 </View>
//                 <TouchableOpacity onPress={showDatePicker}>
//                   <Feather name="calendar" size={34} color="#F0F0F0" style={{ backgroundColor: "#dc661f", borderRadius: 10, padding: 5, marginRight: 5 }} />
//                 </TouchableOpacity>
//                 <DateTimePickerModal
//                   isVisible={isDatePickerVisible}
//                   mode="date"
//                   onConfirm={handleDateConfirm}
//                   onCancel={hideDatePicker}
//                 />
//               </View>
//             </View>
//           </View>

          
//           <TouchableOpacity onPress={handleSearch} style={styles.searchButton}>
//             <Text style={styles.searchButtonText}>Search</Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//     </KeyboardAvoidingView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   AllContents: {
//     marginVertical: 20,
//     paddingTop: 20,
//     padding: 20,
//     justifyContent: 'flex-end',
//   },
//   inputsContainer: {
//     borderRadius: 10,
//     padding: 20,
//     marginBottom: 10,
//   },
//   inputContainer: {
//     marginBottom: 20,
//   },
//   label: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: 'gray',
//     borderRadius: 5,
//     padding: 10,
//     fontSize: 16,
//   },
//   dateInputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   dateInput: {
//     borderWidth: 1,
//     borderColor: 'gray',
//     borderRadius: 5,
//     padding: 10,
//     flex: 1,
//     marginRight: 10,
//     fontSize: 16,
//   },
//   searchButton: {
//     backgroundColor: '#800020',
//     borderRadius: 5,
//     padding: 15,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginHorizontal:20
//   },
//   searchButtonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default SearchScreen;

import React, { useState, useContext } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView, Pressable, KeyboardAvoidingView, Platform } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../Config/theme/colors';
import { ThemeContext } from '../../contexts/ThemeContext';
import { useInputContext } from '../../contexts/DataContext';

const SearchScreen = () => {
  const { from, to } = useInputContext();
  const navigation = useNavigation();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  // Theme colors
  const { theme } = useContext(ThemeContext);
  const activeColors = colors[theme.mode];

  // Function to format date globally
  const formatDate = (date) => {
    return moment(date).format('MMMM DD, YYYY');
  };

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
    console.log(from);
    console.log(to);
    console.log(formatDate(selectedDate)); // Use the formatDate function
    console.log("search pressed");
  };

  const handleSendFrom = () => {
    navigation.navigate('Send from');
  };

  const handleSendTo = () => {
    navigation.navigate('Send to');
  };

  return (
    <KeyboardAvoidingView style={[styles.container, { backgroundColor: activeColors.bgcolor }]} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.AllContents}>
          <View style={styles.inputsContainer}>
            <View style={styles.inputContainer}>
              <Text style={[styles.label, { color: activeColors.TextColor }]}>I want to send a package From</Text>
              <Pressable onPress={handleSendFrom}>
                <View pointerEvents="none">
                  <TextInput
                    placeholder={from || 'ex.paris'}
                    style={[styles.input, { color: activeColors.TextColor }]}
                    value={from}
                    editable={false}
                    placeholderTextColor="gray"
                  />
                </View>
              </Pressable>
            </View>
            <View style={styles.inputContainer}>
              <Text style={[styles.label, { color: activeColors.TextColor }]}>To</Text>
              <Pressable onPress={handleSendTo}>
                <View pointerEvents="none">
                  <TextInput
                    placeholder={to || 'ex.kigali'}
                    style={[styles.input, { color: activeColors.TextColor }]}
                    value={to}
                    editable={false}
                    placeholderTextColor="gray"
                  />
                </View>
              </Pressable>
            </View>
            <View style={styles.inputContainer}>
              <Text style={[styles.label, { color: activeColors.TextColor }]}>Starting from</Text>
              <View style={styles.dateInputContainer}>
                <View pointerEvents="none" style={{ flex: 1 }}>
                  <TextInput
                    placeholder="select a date"
                    style={[styles.dateInput, selectedDate && { color: activeColors.TextColor, fontWeight: 'bold', fontSize: 17 }]}
                    value={selectedDate ? formatDate(selectedDate) : ''}
                    editable={false}
                    placeholderTextColor="gray"
                  />
                </View>
                <TouchableOpacity onPress={showDatePicker}>
                <View style={{ backgroundColor: "#dc661f", borderRadius: 10, padding: 5, marginRight: 5 }}>
                  <Feather name="calendar" size={34} color="#F0F0F0" />
                </View>
                </TouchableOpacity>
                <DateTimePickerModal
                  isVisible={isDatePickerVisible}
                  mode="date"
                  onConfirm={handleDateConfirm}
                  onCancel={hideDatePicker}
                  textColor='#000'
                />
              </View>
            </View>
          </View>

          <TouchableOpacity onPress={handleSearch} style={styles.searchButton}>
            <Text style={styles.searchButtonText}>Search</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  AllContents: {
    marginVertical: 20,
    paddingTop: 20,
    padding: 20,
    justifyContent: 'flex-end',
  },
  inputsContainer: {
    borderRadius: 10,
    padding: 20,
    marginBottom: 10,
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
    alignItems: 'center',
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
  searchButton: {
    backgroundColor: '#800020',
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  searchButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SearchScreen;
