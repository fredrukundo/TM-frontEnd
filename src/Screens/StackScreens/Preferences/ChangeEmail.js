import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { Entypo,Ionicons,FontAwesome,AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { colors } from '../../../../Config/theme/colors'
import { useContext } from 'react';
import { ThemeContext } from '../../../../contexts/ThemeContext';

const ChangeEmail = () => {

// theme colors
const {theme} = useContext(ThemeContext);
const activeColors = colors[theme.mode];

  const [isFocus, setIsFocus] = useState(false);
  const [newEmail, setNewEmail] = useState('');

  const navigation = useNavigation();

  const handleArrowBackPress = () => {
    navigation.goBack();
  };

  const handleTextChange = (text) => {
    setNewEmail(text);
  };

  const clearText = () =>{
    setNewEmail(''); 
  }
  const handleNextPress = () => {
    console.log(newEmail)
  };


  return (
    <View style={[styles.container,{backgroundColor:activeColors.bgcolor}]}>
    <View style={styles.content}>
     {/* Arrow Head */}
     <View style={styles.ArrowSection}>
        <TouchableOpacity  onPress={handleArrowBackPress}>
        <AntDesign name="arrowleft" size={26} color="#dc661f" />
        </TouchableOpacity>
    </View>

       {/* title */}
      <View style={styles.TextSection}>
        <Text style={[styles.TextHeader,{color:activeColors.TextColor}]}>Change email address</Text>
      </View> 

       {/* information icon and texts */}
      <View style={styles.infoHead}>
        <Entypo name="info-with-circle" size={20} color="#dc661f" />
        <Text style={styles.infoHeadTitle}>Information</Text>
      </View>
      <Text style={styles.infoSection}>
      if you want to be informed of a particular trip without having to open the application, alerts are made for you.
      </Text>

      {/* Button section for new email */}
          <Text style={[styles.label,{color:activeColors.TextColor}]}>New email address</Text>
           <View style={[styles.inputButton, isFocus && {borderColor:'blue'}]}>
           <TextInput
             placeholder={!isFocus ? "new email" : " "}
             value={newEmail}
             onChangeText={handleTextChange}
             onFocus={()=> setIsFocus(true)}
           />
           {
             newEmail !== '' &&
             <TouchableOpacity onPress={clearText} style={styles.cancelIcon}>
             <Ionicons name="close" size={20} color="gray" />
             </TouchableOpacity>
           }
           </View>
           {newEmail !== '' && (
          <TouchableOpacity style={styles.nextButton} onPress={handleNextPress}>
            <Text style={styles.nextText}>Next</Text>
            <FontAwesome name="arrow-circle-right" size={50} color="#dc661f" style={{ paddingLeft: 6 }} />
          </TouchableOpacity>
        )}
    </View>
    </View>
  )
}

export default ChangeEmail

const styles = StyleSheet.create({
  container:{
    flex:1,
    // backgroundColor:'white', 
  },
  content:{
    marginTop:15, 
    marginHorizontal:10
  },
  ArrowSection: {
    marginBottom:20,
    marginTop:50
    
  },
  TextSection:{
    marginTop:10,
    justifyContent: 'center', 
    alignItems: 'center',
    marginBottom:20
  },
  TextHeader:{
    fontSize:29,
    fontWeight:'700'
  },
  infoSection: {
    fontSize: 16,
    color: 'gray' ,
    marginBottom:20
  },
  infoHead: {
    flexDirection:'row',
    marginVertical:10
  },
  infoHeadTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft:5,
    color:"#dc661f"
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    
  },
  inputButton: { 
    flexDirection:'row',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    alignItems:'center',
    justifyContent:'space-between',
    backgroundColor:'white' 
  },
  inputContainer: {
    marginTop: 20,
    marginBottom:20
  },
  nextButton: {
    flexDirection:'row',
    alignItems: "center",
    marginLeft:'auto',
    marginTop:90,
   },
   nextText: {
     fontSize: 18,
     fontWeight: 'bold',
     color: '#333',
    
   },
})