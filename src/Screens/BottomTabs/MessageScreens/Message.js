import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList,Pressable } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { colors } from '../../../../Config/theme/colors';
import { useContext } from 'react';
import { ThemeContext } from '../../../../contexts/ThemeContext';


const Messages = [
  {
    id: '1',
    userName: 'Jenny Doe',
    userImg: require('../../../../assets/images/duke1.jpg'),
    messageTime: '4 mins ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '2',
    userName: 'John Doe',
    userImg: require('../../../../assets/images/girl.jpg'),
    messageTime: '2 hours ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '3',
    userName: 'Ken William',
    userImg: require('../../../../assets/images/lebron.jpg'),
    messageTime: '1 hours ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '4',
    userName: 'Selina Paul',
    userImg: require('../../../../assets/images/bg1.jpg'),
    messageTime: '1 day ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '5',
    userName: 'Christy Alex',
    userImg: require('../../../../assets/images/zucker.jpg'),
    messageTime: '2 days ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
];

const Message = ({ navigation }) => {

  // theme color
  const {theme} = useContext(ThemeContext);
  const activeColors = colors[theme.mode];

  const renderNoMessages = () => {
    return (
      <View style={styles.container}>
        <View style={styles.contents}>
        {/* header section */}
          <View style={styles.headerSection}>
            <Text style={styles.titles}>Messages</Text>
            <TouchableOpacity onPress={() => console.log('three dots')} style={{marginLeft:'auto'}}>
              <Entypo name="dots-three-vertical" size={24} color="#dc661f" />
            </TouchableOpacity>
          </View>
          {/* no message illustration photo */}
          <View style={styles.iconImageSection}>
            <Image source={require('../../../../assets/images/Messaging-bro.png')} style={styles.iconImage} />
          </View>
          {/* no message texts */}
          <View style={styles.textSection1}>
            <Text style={[styles.title2,{color:activeColors.TextColor}]}>No Messages at the moment</Text>
            <Text style={styles.title3}>Your Messages will be displayed here</Text>
          </View>

        </View>
      </View>
    );
  };

  const renderMessageItem = ({ item }) => {
    return (
      <>
      <TouchableOpacity onPress={() => navigation.navigate('chatScreen', { userName: item.userName })} style={styles.card}>
        <View style={styles.userInfo}>
          <View style={styles.userImgWrapper}>
            <Image style={styles.userImg} source={item.userImg} />
          </View>
          <View style={styles.textSection}>
            <View style={styles.userInfoText}>
              <Text style={[styles.userName,{color:activeColors.TextColor}]}>{item.userName}</Text>
              <Text style={[styles.postTime,{color:activeColors.mediumGray}]}>{item.messageTime}</Text>
            </View>
            <Text style={[styles.messageText,{color:activeColors.mediumGray}]}>{item.messageText}</Text>
          </View>
        </View>
      </TouchableOpacity>
      </>
    );
  };

  return (
    <View style={[styles.container,{backgroundColor:activeColors.bgcolor}]}>
    
      {Messages.length > 0 ? (
        <>
        <View style={[styles.headerSection, {paddingRight:15}]}>
        <View style={{flex:1,justifyContent:'center', alignItems:'center'}}>
        <Text style={styles.titles}>Messages</Text>
        </View>
          <Pressable style={{marginLeft:'auto'}} onPress={() => console.log('three dots')}>
          <Entypo name="dots-three-vertical" size={24} color="#dc661f" />
          </Pressable>
       </View>
        <View style={styles.bodyMsg}>
        
        <FlatList
          data={Messages}
          keyExtractor={(item) => item.id}
          renderItem={renderMessageItem}
        />
        
        </View>
        </>
      ) : (
        renderNoMessages()
      )}
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
  },
  bodyMsg: {
    padding: 20,
    alignItems: 'center',
    // backgroundColor: '#ffffff',
  },
  contents: {
    margin: 15,
  },
  headerSection: {
    marginTop: 50,
    flexDirection: 'row',
  },
  titles: {
    fontWeight: 'bold',
    fontSize: 18,
    color: "#dc661f",
  },
  title2: {
    fontWeight: 'bold',
    fontSize: 28,
    marginVertical: 10,
    marginHorizontal: 45,
  },
  title3: {
    fontWeight: 'bold',
    fontSize: 18,
    marginVertical: 10,
    color: 'gray',
    marginHorizontal: 20,
  },
  iconImage: {
    width: 280,
    height: 280,
    marginTop: 20,
  },
  iconImageSection: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textSection: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '100%',
  },
  userInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  userImgWrapper: {
    paddingTop: 15,
    paddingBottom: 15,
  },
  userImg: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  textSection1:{
    justifyContent:'center',
    alignItems:'center'
 },
  textSection: {
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 15,
    paddingLeft: 0,
    marginLeft: 10,
    width: 300,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  userInfoText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  postTime: {
    fontSize: 12,
    // color: '#999999',
    paddingRight: 30,
  },
  messageText: {
    fontSize: 14,
    // color: '#333333',
  },
});

export default Message;
