import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SearchScreen from '../searching/SearchScreen';
import { useNavigation } from '@react-navigation/native';

const FloatingButton = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.floatingButtonContainer}>
        <TouchableOpacity style={styles.floatingButton} onPress={() => navigation.navigate('Search')}>
          <Icon name="send" size={24} color="#FFF" />
          <Text style={styles.buttonText}>Send</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.floatingButton} onPress={() => navigation.navigate('publish')}>
          <Icon name="local-shipping" size={24} color="#FFF" />
          <Text style={styles.buttonText}>Deliver</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      justifyContent: 'flex-end', // Push content to the bottom
    },
    floatingButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10, // Add some space from the bottom
      },
      floatingButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#800020',
        borderRadius: 30,
        padding: 10,
        paddingHorizontal: 20,
        elevation: 5, // Android shadow
        shadowColor: '#000', // iOS shadow
        shadowOffset: { width: 0, height: 10 }, // iOS shadow
        shadowOpacity: 0.3, // iOS shadow
        shadowRadius: 10, // iOS shadow
      },
      buttonText: {
        color: '#FFF',
        marginLeft: 10,
      },
  });

export default FloatingButton