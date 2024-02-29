import React from 'react';
import { View, TextInput, StyleSheet,Dimensions } from 'react-native';
import { Entypo,MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const HeaderSection = () => {
  const navigation = useNavigation(); 
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Entypo name="menu" size={44} color="black" />
      </TouchableOpacity>
      
        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
        <View style={styles.searchContainer}>
        <MaterialIcons name="search" size={24} color="black" style={styles.icon}/>
          <TextInput placeholder="Search" style={styles.searchInput} editable={false} />
          </View>
          </TouchableOpacity>
         
      <TouchableOpacity onPress={() => navigation.navigate('Help')}>  
      <MaterialIcons name="help" size={34} color="#003580" />
      </TouchableOpacity>
    </View>
  );
};
const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    
    
  },
  icon: {
   marginLeft:40
  },
  searchInput: {
    flex: 1,
    height: 40,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#003580',
    borderRadius: 10,
    padding: 5,
    height: 40,
    width: windowWidth - 90,
  },
});

export default HeaderSection;
