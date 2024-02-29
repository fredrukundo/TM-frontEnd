import React from 'react';
import { StyleSheet, Text, View, Image,TouchableOpacity, ImageBackground } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '../../Config/theme/colors';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';


const Post = ({ post }) => {
  const navigation = useNavigation();

  // theme colors
  const {theme} = useContext(ThemeContext);
  const activeColors = colors[theme.mode];


  return (
    <TouchableOpacity onPress={() => navigation.navigate('Details', { postId: post.id, post })} activeOpacity={0.8}>
    <View style={styles.post}>
      <View style={styles.header}>
        <Image
          source={post.user.image}
          style={styles.profileImage}
        />
        <View>
        <View style={{flexDirection:'row'}}>
          <Text style={[styles.name,{color: activeColors.TextColor}]}>{post.user.name}</Text> 
          <MaterialIcons name="verified" size={18} color="#0A64EF" />
          </View>
          <Text style={styles.subtitle}>{post.createdAt} Ago</Text>
          </View>
        
        <View style={styles.Kilos}>
          <Text style={[styles.oneKilos,{color: activeColors.TextColor}]}>$ {post.user.oneKilo}/<MaterialCommunityIcons name="weight-kilogram" size={24} color="#dc661f" /></Text>
          <Text style={[styles.KilosRemaining, {color: activeColors.TextColor}]}>{post.user.KilosRemaining} kg Remaining</Text>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.FromAndTO}>
          <View style={styles.from}>
            <Text style={styles.FromAndTOText}>
              From:
            </Text>
            <View style={styles.fromDetails}>
               <View style={styles.cityFlag}>
                 <Text style={[styles.city,{color: activeColors.TextColor}]}>{post.from.city}</Text>
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
                <Text style={[styles.city,{color: activeColors.TextColor}]}>{post.to.city}</Text>
                <Image
                  source={post.to.flag}
                  style={styles.flags}
                />
              </View>
              <Text style={styles.country}>{post.to.country}</Text>
            </View>
          </View>
        </View>
        <View style={styles.dates}>
          <Text style={[styles.day,{color: activeColors.TextColor}]}>{post.departureDate.day}</Text>
          <Text style={styles.month}>{post.departureDate.month}</Text>
          <Text style={styles.year}>{post.departureDate.year}</Text>
        </View>
      </View>
    </View>
    </TouchableOpacity>
    
  );
}

const styles = StyleSheet.create({
  
  post: {
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'gray',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
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
  Kilos: {
    marginLeft: 'auto',
  },
  oneKilos: {
    fontWeight: 'bold',
  },
  KilosRemaining: {
    fontWeight: 'bold',
  },
  body: {
    flexDirection: 'row',
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
  from: {
    flexDirection: 'row',
    paddingTop: 10,
    
  },
  to: {
    flexDirection: 'row',
    paddingTop: 10,
  },
  cityFlag: {
    flexDirection: 'row',
  },
  city: {
    marginRight: 5,
    fontWeight: 'bold',
    fontSize: 18,
  },
  country: {
    color: 'gray',
  },
  flags: {
    width: 40,
    height: 20,
  },
  dates: {
    marginLeft: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
  },
  day: {
    fontSize: 34,
    fontWeight: 'bold',
  },
  month: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#dc661f',
  },
  year: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'gray',
  },
});

export default Post;