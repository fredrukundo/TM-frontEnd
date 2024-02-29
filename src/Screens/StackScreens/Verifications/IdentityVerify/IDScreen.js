import { StyleSheet, Text, View, TouchableOpacity, Image,ScrollView,TextInput } from 'react-native';
import React, { useState } from 'react';
import { AntDesign,Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import { colors } from '../../../../../Config/theme/colors';
import { useContext } from 'react';
import { ThemeContext } from '../../../../../contexts/ThemeContext';


const IDScreen = () => {

// theme colors
const {theme} = useContext(ThemeContext);
const activeColors = colors[theme.mode];

  const [frontImage, setFrontImage] = useState(null);
  const [backImage, setBackImage] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [Country, setCountry] = useState(null);
  const navigation = useNavigation();

  const handleArrowBackPress = () => {
    navigation.goBack();
  };
  const handleTextChange = (text) => {
    setCountry(text);
  };

  const handleImageUpload = async (side) => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    let imageResult;
    if (side === 'front') {
      imageResult = await ImagePicker.launchImageLibraryAsync();
      if (!imageResult.canceled) {
        setFrontImage(imageResult.assets[0].uri);
        // let fileUri = result.assets[0].uri;
      }
    } else if (side === 'back') {
      imageResult = await ImagePicker.launchImageLibraryAsync();
      if (!imageResult.canceled) {
        setBackImage(imageResult.assets[0].uri);
      }
    }
  };
  const handleNextPress = () => {
    if (frontImage && backImage && Country) {
      console.log('Good to go');
    } else {
      console.log('Please fill all the required fields');
    }
  };
  

  return (
    <View style={[styles.container,{backgroundColor:activeColors.bgcolor}]}>
    <ScrollView>

    
      <View style={styles.content}>
        {/* Arrow Head */}
        <View style={styles.arrowSection}>
          <TouchableOpacity onPress={handleArrowBackPress}>
            <AntDesign name="arrowleft" size={26} color="#dc661f" />
          </TouchableOpacity>
        </View>

        {/* Front ID card section */}
        <Text style={styles.sectionLabel}>ID card front</Text>
        <View style={styles.section}>
          
          <TouchableOpacity
            style={styles.uploadButton}
            onPress={() => handleImageUpload('front')}
          >
            {frontImage ? (
              <Image source={{ uri: frontImage }} style={styles.uploadedImage} />
            ) : (
                <>
                <AntDesign name="idcard" size={40} color="gray" />
                <Text style={styles.uploadButtonText}>Press to upload or take a picture</Text>
              </>
            )}
          </TouchableOpacity>
        </View>

        {/* Back ID card section */}
        <Text style={styles.sectionLabel}>ID card back</Text>
        <View style={styles.section}>
          
          <TouchableOpacity
            style={styles.uploadButton}
            onPress={() => handleImageUpload('back')}
          >
            {backImage ? (
              <Image source={{ uri: backImage }} style={styles.uploadedImage} />
            ) : (
                <>
                <AntDesign name="idcard" size={40} color="gray" />
                <Text style={styles.uploadButtonText}>Press to upload or take a picture</Text>
              </>
            )}
          </TouchableOpacity>
        </View>
        {/* COUNTRY of issue */}
        <View>
        <Text style={styles.sectionLabel}>County of issue</Text>
        <View style={[styles.inputButton, isFocus && {borderColor:'blue'}]}>
           <TextInput
             placeholder={!isFocus ? "Country of issue" : " "}
             value={Country}
             onChangeText={handleTextChange}
             onFocus={()=> setIsFocus(true)}
             style={{fontSize:16,}}
           />
           
           </View>
        </View>
        {/* important icon and texts */}
       <View style={styles.infoHead}>
        <Entypo name="info-with-circle" size={20} color="#800020" />
        <Text style={styles.infoHeadTitle}>Important</Text>
      </View>
      <View style={styles.infoSection}>
      <Text style={styles.infoSectionText}>
      We would like to reassure you about the processing and storage of your personal information. All checks are done anonymously by our system and a result is sent to you. No other user has access to your information!
      </Text>
      <Text style={styles.infoSectionText}>
      For more details about our verification system, storage or confidentiality of your data, please visit our policy.
       </Text>
      </View>
      <TouchableOpacity onPress={()=> navigation.navigate('privacy policy')}>
      <Text style={styles.link}>Privacy policy</Text>
    </TouchableOpacity>
      

        {/* Next button */}
        {frontImage && backImage && Country ? (
            <View style={styles.nextSection}>
        <TouchableOpacity style={[styles.nextButton, { backgroundColor:'#800020'}]} onPress={handleNextPress}>
            <Text style={styles.nextButtonText}>Next</Text>
          </TouchableOpacity>
        </View>
        ):(
            <View style={styles.nextSection}>
            <View style={[styles.nextButton, { backgroundColor:'#ccc' }]} onPress={handleNextPress}>
            <Text style={styles.nextButtonText}>Next</Text>
            </View>
            </View>
        )}
        
        {/* report a problem */}
        <View style={styles.report}>
        <TouchableOpacity onPress={()=> navigation.navigate('Help')}>
        <Text style={styles.link}>Have a problem? let us know.</Text>
        </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
    </View>
  );
};

export default IDScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'white',
  },
  content: {
    marginTop: 15,
    marginHorizontal: 15,
  },
  arrowSection: {
    marginBottom: 20,
    marginTop:40
  },
  section: {
    marginBottom: 20,
    justifyContent:'center',
    alignItems:'center'
  },
  sectionLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color:"#dc661f"
  },
  uploadButton: {
    width: '80%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#ccc',
    borderRadius: 10,
  },
  uploadedImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  uploadButtonText: {
    fontSize: 16,
    color: 'gray',
  },
  nextButton: {
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
  infoSection: {
    marginBottom:5
  },
  infoSectionText: {
    fontSize: 16,
    color: 'gray' ,
  },
  infoHead: {
    flexDirection:'row',
    marginVertical:10
  },
  infoHeadTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft:5,
    color:'#800020'
  },
  link: {
    color: "#dc661f",
    textDecorationLine: 'underline',
    fontSize:16,
    fontWeight:'bold'

  },
  report: {
    marginBottom:20,
    justifyContent:'center',
    alignItems:'center'
   
  },
});
