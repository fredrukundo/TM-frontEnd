import React from 'react';
import { StyleSheet, Text, View, Image,TouchableOpacity,Pressable} from 'react-native';
import VerifiedButton from '../../../../components/VerifiedButton';
import { FontAwesome5,MaterialCommunityIcons,MaterialIcons,Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import CustomButton from '../../../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../../../../Config/theme/colors';
import { useContext } from 'react';
import { ThemeContext } from '../../../../../contexts/ThemeContext';


const DetailsScreen = ({ route }) => {

const navigation = useNavigation();

  const { postId, post } = route.params;
 const verifiedPressed = () =>{
  console.warn('verified pressed');
 } 
 const handlePressBook = () =>{
  // navigation.navigate('important before booking')
  navigation.navigate('Message')
 } 
 const handlePressInfo = () =>{
  console.warn('more infos');
 } 
 const handleReport = () =>{
  console.warn('report profile');
 }
 
//  theme colors
const {theme} = useContext(ThemeContext);
const activeColors = colors[theme.mode];

  return (
    <ScrollView>
    <View style={[styles.container, {backgroundColor: activeColors.bgcolor}]}>
    {/* Departure section */}
      <Text style={styles.Titles}>Departure:</Text>

      <View style={styles.Departuredates}>
         <Text style={[styles.dateTexts,{color:activeColors.TextColor}]}>{post.departureDate.month}</Text>
          <Text style={[styles.dateTexts,{color:activeColors.TextColor}]}>{post.departureDate.day},</Text>
          <Text style={[styles.dateTexts,{color:activeColors.TextColor}]}>{post.departureDate.year}</Text>
         </View>
         <View style={styles.FromAndTO}>
          <View style={styles.from}>
            <Text style={styles.FromAndTOText}>
              From:
            </Text>
            <View style={styles.fromDetails}>
               <View style={styles.cityFlag}>
                 <Text style={[styles.city,{color:activeColors.TextColor}]}>{post.from.city}</Text>
                 <Image
                  source={post.from.flag}
                  style={styles.flags}
                 />
               </View>
               <Text style={styles.country}>{post.from.country}</Text>
            </View>
          </View>
          <View style={styles.to}>
            <Text style={styles.FromAndTOText}>
              To:
            </Text>
            <View style={styles.toDetails}>
              <View style={styles.cityFlag}>
                <Text style={[styles.city,{color:activeColors.TextColor}]}>{post.to.city}</Text>
                <Image
                  source={post.to.flag}
                  style={styles.flags}
                />
              </View>
              <Text style={styles.country}>{post.to.country}</Text>
            </View>
          </View>
        </View>
        {/* verified air ticket button */}
        <View >
        <VerifiedButton
        text="Verified Air Ticket"
        iconName="verified"
        iconColor="#0A64EF"
        borderColor="#dc661f"
      />
        </View>

        {/* Details section */}
        <Text style={[styles.Titles2,{color:activeColors.TextColor}]}>Details</Text>
        <View style={[styles.detailBox, {backgroundColor:activeColors.bgcolor}]}>
           <View style={[styles.detailItem,{borderBottomWidth:1, borderBottomColor:'gray', paddingBottom:10,}]}>
            <FontAwesome5 name="plane-arrival" size={24} color="#CC9A43" />
              <Text style={[styles.itemsText,{color:activeColors.TextColor}]}>Arrival</Text>
                <View style={styles.Arrivaldates}>
                  <Text style={[styles.ArrivaldateTexts,{color:activeColors.TextColor}]}>{post.ArrivalDate.month}</Text>
                  <Text style={[styles.ArrivaldateTexts,{color:activeColors.TextColor}]}>{post.ArrivalDate.day},</Text>
                  <Text style={[styles.ArrivaldateTexts,{color:activeColors.TextColor}]}>{post.ArrivalDate.year}</Text>
                </View>
           </View>
           <View style={[styles.detailItem,{borderBottomWidth:1, borderBottomColor:'gray', paddingBottom:10,}]}>
              
                <MaterialCommunityIcons name="weight-kilogram" size={24} color="#93211E" />
                <Text style={[styles.itemsText,{color:activeColors.TextColor}]}>Number of kilos</Text>
                  <Text style={[styles.ArrivaldateTexts, {marginLeft:'auto', color:activeColors.TextColor}]}>{post.user.KilosRemaining}</Text>
                 
           </View>
           <View style={[styles.detailItem,{borderBottomWidth:1, borderBottomColor:'gray', paddingBottom:10,}]}>
            <FontAwesome5 name="money-check-alt" size={24} color="#616B1B"/>
              <Text style={[styles.itemsText,{color:activeColors.TextColor}]}>Price for one kilo</Text>
               <Text style={[styles.ArrivaldateTexts,{marginLeft:'auto',color:activeColors.TextColor}]}>${post.user.oneKilo}</Text>

           </View>
           
           <View style={[styles.detailItem,{flexDirection:'row'}]}>
           <FontAwesome5 name="luggage-cart" size={24} color="#E0D26A" />
              <Text style={[styles.itemsText,{color:activeColors.TextColor}]}>I sell my kilos in detail</Text>
           </View>

        </View>
        {/* Profile section */}
        <TouchableOpacity style={{flexDirection:'row', alignItems:'center', }} onPress={() => navigation.navigate('User Profile', { Id: post.id, post })}>
        <View style={styles.profileDetails}>
        <Image
          source={post.user.image}
          style={styles.profileImage}
        />
        <View>
        <View style={{flexDirection:'row'}}>
          <Text style={[styles.name,{color:activeColors.TextColor}]}>{post.user.name}</Text>
          <MaterialIcons name="verified" size={18} color="#0A64EF" />
          </View>
          <View style={{flexDirection:'row'}}>
          <MaterialIcons name="star" size={20} color="#ABB2B9" />
          <Text style={styles.subtitle}> 0/5 -- </Text>
          <Text style={styles.subtitle}> 0 Reviews</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Text style={{color:'green', marginRight:5}}>Verified identity</Text>
            <FontAwesome5 name="award" size={18} color="green" />
          </View>
          </View>
        </View>
        <Ionicons name="chevron-forward-outline" size={30} color="#dc661f" style={{marginLeft:'auto'}}/>
        </TouchableOpacity>

        {/* travo mate infos section */}
        <View style={{flexDirection:'row',alignItems:'center'}}>
          <Text style={styles.logo}>TravoMate</Text>
          <Text style={{fontSize:16,fontWeight:'bold',color:activeColors.TextColor }}>Cover</Text>
        </View>
        <Text style={{fontWeight:'700', fontSize:16, marginVertical:10,color:activeColors.TextColor}}>
          Each reservation includes free protection in case of 
          cancellation by the traveler or inaccurancies in the description of the listing.
        </Text>
        <TouchableOpacity onPress={handlePressInfo}>
      <Text style={styles.link}>For more information</Text>
    </TouchableOpacity>
    <View style={{alignItems:'center'}}>
    <CustomButton
        text="Book"
        buttonStyle={styles.button}
        textStyle={styles.buttonText}
        onPress={handlePressBook}
      />
    </View>
    <Pressable onPress={handleReport} style={styles.reportProfile}>
      <Text style={styles.reportProfileText}>Report this Profile</Text>
    </Pressable>
      </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   padding:10,

  },
  flags: {
    width: 40,
    height: 20,
  },
  Titles: {
    fontWeight: 'bold',
    fontSize: 22,
    color:'gray'
  },
  Titles2: {
    fontWeight: 'bold',
    fontSize: 18,
    
  },
  Departuredates: {
   flexDirection:'row',
   paddingHorizontal:10
  },
  Arrivaldates: {
   flexDirection:'row',
   marginLeft:'auto'
  },
  dateTexts: {
    fontWeight: '700',
    fontSize: 40,
    marginRight:15, 
  },
  ArrivaldateTexts: {
    fontWeight: '700',
    fontSize:18,
    paddingHorizontal:1
     
  },
  itemsText: {
    fontWeight: '700',
    paddingLeft:10,
    fontSize:16,
     
  },
  from: {
    flexDirection: 'row',
    paddingTop: 10,
    
  },
  to: {
    flexDirection: 'row',
    paddingTop: 10,
  },
  FromAndTO: {
    marginVertical: 20,
  },
  FromAndTOText: {
    fontWeight: 'bold',
    fontSize: 20,
    marginRight: 5,
    color:'gray'
  },
  cityFlag: {
    flexDirection: 'row',
  },
  city: {
    marginRight: 5,
    fontWeight: 'bold',
    fontSize:22,
  },
  country: {
    color: 'gray',
    fontSize:20,
    fontWeight:'600'
  },
  
  detailItem: {
    flexDirection:'row',
    alignItems:'center',
    marginVertical:10,
    
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
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  subtitle: {
    color: 'gray',
    
  },
  profileDetails: {
    flexDirection: 'row',
    alignItems:'center',
    marginVertical:20
  },
  logo: {
    color:"#dc661f",
    fontSize:18,
    fontWeight:'bold',
    marginRight:1,
    
  },
  link: {
    color: "#dc661f",
    textDecorationLine: 'underline',
    fontSize:16,
    fontWeight:'bold'

  },
  button: {
    marginVertical:25,
    backgroundColor: '#800020',
    justifyContent:'center',
    alignItems:'center',
   paddingHorizontal:100 
  },
  buttonText: {
    fontWeight: 'bold',
  },
  reportProfile: {
    justifyContent:'center',
     alignItems:'center',
     marginBottom:10,

    },
  reportProfileText: {
    color:'red',
    fontSize:16,
    fontWeight:'bold'


    },
});

export default DetailsScreen;
