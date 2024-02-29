import React, { useState } from 'react';
import { StyleSheet, View, TextInput, ScrollView, Text,Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const SearchSection = ({ recipients }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredrecipients = recipients.filter(location =>
    location.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = () => {
    // Handle search functionality here, e.g. API call or filtering
    console.log('Search for:', searchQuery);
  };

  const renderLocation = () =>
    filteredrecipients.map(location => (
      <View style={styles.location} key={location.id}>
        <Text>{location.name}</Text>
        <Text>{location.address}</Text>
      </View>
    ));

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search for destination"
          onChangeText={setSearchQuery}
          value={searchQuery}
        />
        <MaterialIcons
          name="search"
          size={20}
          color="black"
          onPress={handleSearch}
        />
      </View>

      {searchQuery && filteredrecipients.length > 0 ? (
        <ScrollView>{renderLocation()}</ScrollView>
      ) : (
        searchQuery && <Text>No matching recipients</Text>
      )}
    </View>
  );
};
const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    // marginBottom: 30,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    padding: 5,
    height: 40,
    width: windowWidth - 90,
    
    
  },
  searchInput: {
    flex: 1,
    height: 40,
  },
  location: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
});

export default SearchSection;