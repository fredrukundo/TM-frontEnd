import { View, Text,StyleSheet, Image,TouchableOpacity,Pressable } from 'react-native'
import React, { useState } from 'react'
import { MaterialCommunityIcons,AntDesign,Ionicons,FontAwesome } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../Config/theme/colors';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

const post = {
  user: {
    id: 11,
    name: "John Smith",
    firstName:'John',
    lastName:"Smith",
    image: require('../../assets/images/profile.jpg'),
    oneKilo: 5.50,
    KilosRemaining: 25,
    gender: "Male",
    PreferredCurrency: "USD",
    memberSince: "july 2021",
    wallet: 0,
    phone: '+212626103440',
    email: 'Dukefred9@gmail.com',
    nationality: 'Rwandan',
    birth:'jan 01, 2000',
    address:'Not set'

  },
  
  from: {
    country: "United States",
    city: "New York",
    flag: require('../../assets/images/USA.png')
  },
  to: {
    country: "France",
    city: "Paris",
    flag: require('../../assets/images/france.png')
  },
  departureDate: {
    day: 24,
    month: "May",
    year: 2023
  },
  ArrivalDate: {
    day: 25,
    month: "May",
    year: 2023
  }
}
const Informations = () => {
 const navigation = useNavigation();
 const [verifiedPhone, setVerifiedPhone] = useState(true);
 const [verifiedEmail, setVerifiedEmail] = useState(true);
 const [verifiedFb, setVerifiedFb] = useState(false);
 const [verifiedProfile, setVerifiedProfile] = useState(false);
 const [verifiedID, setVerifiedID] = useState(false);

// theme colors
const {theme} = useContext(ThemeContext);
const activeColors = colors[theme.mode];

 const handlePress = () => {
  // Navigate to the next screen here
  console.log('Navigate to the next screen');
};

    return ( 
      <View style={[styles.container,{backgroundColor:activeColors.bgcolor}]}>
        
        <ScrollView>
          <View style={styles.body}>
          <View style={styles.bodyChild}>
          <View style={styles.TitleSection}>
          <Text style={[styles.Titles2,{color:activeColors.TextColor}]}>About</Text>
          <Pressable onPress={()=> navigation.navigate('Edit my profile', { Id: post.user.id, post })}>
          <Text style={[styles.editButton,{color:colors.tertiary}]}>Edit</Text>
          </Pressable>
          </View>
          
          <View style={[styles.detailBox,{backgroundColor:activeColors.bgcolor}]}>
             
             <View style={[styles.detailItem,{borderBottomWidth:1, borderBottomColor:'gray', paddingBottom:10,}]}>
                  <Text style={[styles.itemsText,{color:activeColors.TextColor}]}>Phone</Text>
                    <Text style={[styles.subItemsText, {marginLeft:'auto'}]}>{post.user.phone}</Text>
             </View>
  
             <View style={[styles.detailItem,{borderBottomWidth:1, borderBottomColor:'gray', paddingBottom:10,}]}>
                <Text style={[styles.itemsText,{color:activeColors.TextColor}]}>Names</Text>
                 <Text style={[styles.subItemsText,{marginLeft:'auto'}]}>{post.user.name}</Text>
             </View>
             <View style={[styles.detailItem,{borderBottomWidth:1, borderBottomColor:'gray', paddingBottom:10,}]}>
                <Text style={[styles.itemsText,{color:activeColors.TextColor}]}>Email</Text>
                 <Text style={[styles.subItemsText,{marginLeft:'auto'}]}>{post.user.email}</Text>
             </View>
             <View>
             <TouchableOpacity style={styles.header} onPress={()=> navigation.navigate('User profile details', {id:post.user.id, post})}>
             <AntDesign name="arrowright" size={24} color="#dc661f" />
                <Text style={[styles.headerText,{color:activeColors.TextColor}]}>See more</Text>
              </TouchableOpacity>
             </View>
            
          </View>
          </View>
  
   <View style={styles.bodyChild}>


         <View style={styles.TitleSection}>
          <Text style={[styles.Titles2,{color:activeColors.TextColor}]}>Verifications</Text>
          <Pressable onPress={()=> navigation.navigate('Verify my profile')}>
          <Text style={[styles.editButton,{color:colors.tertiary}]}>See more</Text>
          </Pressable>
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

           <TouchableOpacity onPress={()=> navigation.navigate('Edit my profile', { Id: post.user.id, post })} disabled={verifiedProfile} >
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
          </View>
          <View style={styles.memberSince}>
          <Text style={styles.memberSinceText}>Member Since {post.user.memberSince}</Text>
        </View>
          </ScrollView>
  
      </View>
    )
  }
  const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    Titles2: { 
      fontWeight: 'bold',
      fontSize: 18,
      marginHorizontal:20,
      
    },
    body: {
      marginHorizontal:5,
     
    },
    bodyChild: {
      marginVertical:20,
     
    },
    TitleSection: {
        flexDirection:'row',
      justifyContent:'space-between'
     
    },
    editButton: { 
        fontWeight: 'bold',
        fontSize: 18,
        marginHorizontal:20,
        // color:"#dc661f"
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
    subItemsText: {
      fontWeight: 'bold',
      fontSize:16,
      color:'gray'
       
    },
    header: {
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'center',
   
      
    },
    headerText: {
      fontSize: 18,
      fontWeight: 'bold',
      marginLeft:10,
    },
    content: {
      paddingHorizontal: 20,
      paddingBottom: 10,
    },
    list: {
      paddingBottom: 10,
      
    },
  
    listItem: {
      paddingLeft: 10,
      marginBottom: 5,
      color:'gray',
      fontSize:18
    },
    memberSince: {
        justifyContent:'center',
         alignItems:'center',
        marginVertical:10,
        marginBottom:10,
        },
        memberSinceText: {
        color:'gray',
        fontSize:16
        },
  })

export default Informations