import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, FlatList, Pressable } from 'react-native';

const countriesData = [
  { country: 'USA', cities: ['New York', 'Los Angeles', 'Chicago', 'Houston', 'San Francisco'] },
  { country: 'Canada', cities: ['Toronto', 'Montreal', 'Vancouver', 'Calgary', 'Ottawa'] },
  { country: 'United Kingdom', cities: ['London', 'Manchester', 'Birmingham', 'Edinburgh', 'Glasgow'] },
  { country: 'Australia', cities: ['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide'] },
  { country: 'Germany', cities: ['Berlin', 'Munich', 'Hamburg', 'Frankfurt', 'Cologne'] },
];

const SearchResults = () => {
  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleTextChange = (text) => {
    setInput(text);

    const filteredSuggestions = countriesData.reduce((acc, curr) => {
      const filteredCities = curr.cities.filter((city) =>
        city.toLowerCase().startsWith(text.toLowerCase())
      );
      return [...acc, ...filteredCities.map((city) => `${city}, ${curr.country}`)];
    }, []);

    setSuggestions(filteredSuggestions);
  };

  const handlePress = (selectedCity) => {
    setInput(selectedCity);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={input}
        onChangeText={handleTextChange}
        placeholder="Enter a city"
      />
      {suggestions.length > 0 && (
        <FlatList
          data={suggestions}
          renderItem={({ item }) => (
            <Pressable style={styles.pressable} onPress={() => handlePress(item)}>
              <Text style={styles.suggestionText}>{item}</Text>
            </Pressable>
          )}
          keyExtractor={(item) => item}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  pressable: {
    backgroundColor: '#e5e5e5',
    padding: 10,
    borderRadius: 5,
    marginBottom: 5,
  },
  suggestionText: {
    fontSize: 15,
    fontWeight: '500',
  },
});

export default SearchResults;
