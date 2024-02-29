import { View, Text,Image,StyleSheet,ScrollView,TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { MaterialCommunityIcons,AntDesign,Ionicons,FontAwesome  } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../../../Config/theme/colors';
import { useContext } from 'react';
import { ThemeContext } from '../../../../contexts/ThemeContext';

const iconImage = require('../../../../assets/images/man.png')
const VerifyProfile = () => {

// theme colors
const {theme} = useContext(ThemeContext);
const activeColors = colors[theme.mode];

  const navigation = useNavigation();
 const [verifiedPhone, setVerifiedPhone] = useState(true);
 const [verifiedEmail, setVerifiedEmail] = useState(true);
 const [verifiedFb, setVerifiedFb] = useState(false);
 const [verifiedProfile, setVerifiedProfile] = useState(false);
 const [verifiedID, setVerifiedID] = useState(false);

 const handlePress = () => {
  // Navigate to the next screen here
  console.log('Navigate to the next screen');
};

  return (
    <View style={[styles.container,{backgroundColor:activeColors.bgcolor}]}>
    <ScrollView >
    <View style={styles.content}>
    <View style={styles.imageSection}>
        <Image 
        source={iconImage}
        style={styles.iconImage}
        />  
    </View>
    <View style={styles.verificationSection}>
    <Text style={[styles.verificationTexts,{color:activeColors.TextColor}]}>Verifications strengthen your profile. 
    Each item verified, gives you valuable 
    experience points.when your profile is completely verified, you get the Certified badge. </Text>
    </View>
    <View style={styles.icons}>
    <AntDesign name="caretdown" size={24} color={activeColors.TextColor} />
    </View>

    <View style={styles.detailBox}>

            <TouchableOpacity onPress={() => navigation.navigate('Phone verifications')} disabled={verifiedPhone} >
           <View style={[styles.detailItem,{borderBottomWidth:1, borderBottomColor:'gray', paddingBottom:10,}]}>
           <FontAwesome name="phone-square" size={26} color="white" style={{backgroundColor:'#0077C8', borderRadius:4, padding:3, marginRight:8}} />
           <Text style={[styles.itemsText,{color:activeColors.TextColor}]}>Phone</Text>
           {verifiedPhone ? (
           <Text style={{marginLeft:'auto',color:'green', fontSize:16, fontWeight:'bold'}}>Verified</Text>
           ): (
            <>
            <Text style={ {marginLeft:'auto', color:'#FF0000', fontSize:16, fontWeight:'bold', }}>Not Verified</Text>
           <Ionicons name="chevron-forward-outline" size={24} color="#ccc"  />
           </>
           )}
           </View>
           </TouchableOpacity>

           <TouchableOpacity onPress={() => navigation.navigate('Email verifications')} disabled={verifiedEmail} >
           <View style={[styles.detailItem,{borderBottomWidth:1, borderBottomColor:'gray', paddingBottom:10,}]}>
           <MaterialCommunityIcons name="email" size={24} color="white" style={{backgroundColor:'#FF0000', borderRadius:4, padding:3, marginRight:8}}/>
           <Text style={[styles.itemsText,{color:activeColors.TextColor}]}>Email</Text>
            {verifiedEmail ? (
              <Text style={{marginLeft:'auto',color:'green', fontSize:16, fontWeight:'bold'}}>Verified</Text>
            ):(
              <>
           <Text style={ {marginLeft:'auto', color:'#FF0000', fontSize:16, fontWeight:'bold', }}>Not Verified</Text>
           <Ionicons name="chevron-forward-outline" size={24} color="#ccc"  />
           </>
            )

            }
           </View>
           </TouchableOpacity>

           <TouchableOpacity onPress={() => navigation.navigate('FaceBook')} disabled={verifiedFb} >
            <View style={[styles.detailItem,{borderBottomWidth:1, borderBottomColor:'gray', paddingBottom:10,}]}>
            <MaterialCommunityIcons name="facebook" size={24} color="white" style={{backgroundColor:'#0077C8', borderRadius:4, padding:3, marginRight:8}}/>
            <Text style={[styles.itemsText,{color:activeColors.TextColor}]}>Facebook</Text>
            {verifiedFb ? (
           <Text style={{marginLeft:'auto',color:'green', fontSize:16, fontWeight:'bold'}}>Verified</Text>
           ): (
            <>
            <Text style={ {marginLeft:'auto', color:'#FF0000', fontSize:16, fontWeight:'bold', }}>Not Verified</Text>
           <Ionicons name="chevron-forward-outline" size={24} color="#ccc"  />
           </>
           )}
            </View>
           </TouchableOpacity>

           <TouchableOpacity onPress={handlePress} disabled={verifiedProfile} >
           <View style={[styles.detailItem,{borderBottomWidth:1, borderBottomColor:'gray', paddingBottom:10,}]}>
           <Ionicons name="person-sharp" size={24} color="white" style={{backgroundColor:'#E0D26A', borderRadius:4, padding:3, marginRight:8}}/>
           <Text style={[styles.itemsText,{color:activeColors.TextColor}]}>Profile</Text>
           {verifiedProfile ? (
           <Text style={ {marginLeft:'auto', color:'#1DB954', fontSize:16, fontWeight:'bold'}}>Completed</Text>
           ): (
            <>
            <Text style={ {marginLeft:'auto', color:'#FF0000', fontSize:16, fontWeight:'bold', }}>Not completed</Text>
           <Ionicons name="chevron-forward-outline" size={24} color="#ccc"  />
           </>
           )}
           </View>
           </TouchableOpacity>

           <TouchableOpacity onPress={() => navigation.navigate('ID verifications')} disabled={verifiedID} >
           <View style={[styles.detailItem]}>
           <FontAwesome name="id-card-o" size={24} color="white" style={{backgroundColor:'#616B1B', borderRadius:4, padding:3, marginRight:8}}/>
           <Text style={[styles.itemsText,{color:activeColors.TextColor}]}>ID documents</Text>
           {verifiedID ? (
           <Text style={ {marginLeft:'auto', color:'#1DB954', fontSize:16, fontWeight:'bold'}}>Verified</Text>
           ): (
            <>
            <Text style={ {marginLeft:'auto', color:'#FF0000', fontSize:16, fontWeight:'bold', }}>Not Verified</Text>
           <Ionicons name="chevron-forward-outline" size={24} color="#ccc"  />
           </>
           )}
          </View>
          </TouchableOpacity>
         </View>
     </View>
     </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        // backgroundColor:'#fff',
        
    },
    content:{
       marginHorizontal:10
        
    },
    iconImage:{
        width:80,
        height:80,
    },
    imageSection:{
        justifyContent:'center',
        alignItems:'center',
        marginVertical:10
    },
    verificationSection:{
        
        marginHorizontal:35
        
        
    },
    verificationTexts:{
       fontWeight:'bold',
       textAlign:'center',
       fontSize:16
    },
    icons: {
        alignItems: 'center',
        marginVertical:10
      },
      detailBox: {
        paddingHorizontal: 16,
        paddingVertical: 4,
        // backgroundColor: '#F0F0F0',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        margin: 8,
        
      },
      detailItem: {
        flexDirection:'row',
        alignItems:'center',
        marginVertical:10,
        
      },
      itemsText: {
        fontWeight: 'bold',
        fontSize:16,
         
      },
})
export default VerifyProfile