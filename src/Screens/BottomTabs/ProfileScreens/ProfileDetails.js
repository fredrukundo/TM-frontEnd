import { View, Text, StyleSheet,TouchableOpacity,ScrollView } from 'react-native';
import React,{useState} from 'react';
import { MaterialCommunityIcons,MaterialIcons,Ionicons,FontAwesome,Entypo } from '@expo/vector-icons';
import { colors } from '../../../../Config/theme/colors';
import { useContext } from 'react';
import { ThemeContext } from '../../../../contexts/ThemeContext';

const ProfileDetails = ({route}) => {

// theme colors
const {theme} = useContext(ThemeContext);
const activeColors = colors[theme.mode];

    const {id,post} = route.params;
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <View style={[styles.container,{backgroundColor:activeColors.bgcolor}]}>
    <ScrollView>
    <View style={styles.content}>
    <View style={styles.infoHead}>
        <Entypo name="info-with-circle" size={20} color="#dc661f" />
        <Text style={styles.title2}>Information</Text>
      </View>
      <View style={{marginBottom:10}}>
      <Text style={styles.infoSection}>
      Your data is only accessible by you. Your private info is not visible on you public profile.
        </Text>
        </View>
        {/* form here */}
        
        <View style={styles.bodyChild}>
        <View style={styles.detailBox}>
           <View style={[styles.detailItem,{borderBottomWidth:1, borderBottomColor:'gray', paddingBottom:10,}]}>
                <Text style={[styles.itemsText,{color:activeColors.TextColor}]}>Names</Text>
                  <Text style={[styles.subItemsText, {marginLeft:'auto'}]}>{post.user.name}</Text>
           </View>
           <View style={[styles.detailItem,{borderBottomWidth:1, borderBottomColor:'gray', paddingBottom:10,}]}>
                <Text style={[styles.itemsText,{color:activeColors.TextColor}]}>Wallet</Text>
                  <Text style={[styles.subItemsText, {marginLeft:'auto'}]}>{post.user.wallet}</Text>
           </View>
           <View style={[styles.detailItem,{borderBottomWidth:1, borderBottomColor:'gray', paddingBottom:10,}]}>
                <Text style={[styles.itemsText,{color:activeColors.TextColor}]}>Phone</Text>
                  <Text style={[styles.subItemsText, {marginLeft:'auto'}]}>{post.user.phone}</Text>
           </View>

           <View style={[styles.detailItem,{borderBottomWidth:1, borderBottomColor:'gray', paddingBottom:10,}]}>
                <Text style={[styles.itemsText,{color:activeColors.TextColor}]}>Email</Text>
                  <Text style={[styles.subItemsText, {marginLeft:'auto'}]}>{post.user.email}</Text>
           </View>
           
           <View style={[styles.detailItem,{borderBottomWidth:1, borderBottomColor:'gray', paddingBottom:10,}]}>
                <Text style={[styles.itemsText,{color:activeColors.TextColor}]}>Gender</Text>
                  <Text style={[styles.subItemsText, {marginLeft:'auto'}]}>{post.user.gender}</Text>
           </View>
           <View style={[styles.detailItem,{borderBottomWidth:1, borderBottomColor:'gray', paddingBottom:10,}]}>
                <Text style={[styles.itemsText,{color:activeColors.TextColor}]}>Nationality</Text>
                  <Text style={[styles.subItemsText, {marginLeft:'auto'}]}>{post.user.nationality}</Text>
           </View>
           <View style={[styles.detailItem,{borderBottomWidth:1, borderBottomColor:'gray', paddingBottom:10,}]}>
                <Text style={[styles.itemsText,{color:activeColors.TextColor}]}>Date of Birth</Text>
                  <Text style={[styles.subItemsText, {marginLeft:'auto'}]}>{post.user.birth}</Text>
           </View>
           
           <View style={[styles.detailItem,{borderBottomWidth:1, borderBottomColor:'gray', paddingBottom:10,}]}>
                <Text style={[styles.itemsText,{color:activeColors.TextColor}]}>Address</Text>
                  <Text style={[styles.subItemsText, {marginLeft:'auto'}]}>{post.user.address}</Text>
           </View>

           <View style={[styles.detailItem,{borderBottomWidth:1, borderBottomColor:'gray', paddingBottom:10,}]}>
              <Text style={[styles.itemsText,{color:activeColors.TextColor}]}> Preferred Currency</Text>
               <Text style={[styles.subItemsText,{marginLeft:'auto'}]}>{post.user.PreferredCurrency}</Text>
           </View>
           <>
           <TouchableOpacity style={styles.header} onPress={toggleExpand}>
              <Text style={[styles.headerText,{color:activeColors.TextColor}]}>Transported items</Text>
              <Ionicons
                name={isExpanded ? 'chevron-up' : 'chevron-down'}
                size={24}
                color={activeColors.TextColor}
              />
      </TouchableOpacity>
      
      { isExpanded && (
         <>
        <View style={styles.list}>
      <Text style={styles.listItem}>• Documents</Text>
      <Text style={styles.listItem}>• Clothes-Shoes</Text>
      <Text style={styles.listItem}>• Electronics</Text>
      <Text style={styles.listItem}>• Jewellery</Text>
      <Text style={styles.listItem}>• Food</Text>
      <Text style={styles.listItem}>• Cosmetics</Text>
      <Text style={styles.listItem}>• Others</Text>
    </View>
    </>
      )}
      </>
        </View>
        </View>
        
        <View style={styles.memberSince}>
          <Text style={styles.memberSinceText}>Member Since {post.user.memberSince}</Text>
        </View>
      </View>
    </ScrollView>
      
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        // backgroundColor:'#fff'
    },
    content:{
        marginHorizontal:0
    },
    infoSection: {
        fontSize: 16,
        color: 'gray' 
      },
      infoHead: {
        flexDirection:'row',
        marginVertical:10
      },
      title2: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft:5,
        color:"#dc661f"
      },
      
      
      bodyChild: {
        marginVertical:20,
       
      },
      detailBox: {
        paddingHorizontal: 16,
        paddingVertical: 4,
        // backgroundColor: '#F0F0F0',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        // margin: 8,
        
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
        justifyContent: 'space-between',
        
      },
      headerText: {
        fontSize: 16,
        fontWeight: 'bold',
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
export default ProfileDetails