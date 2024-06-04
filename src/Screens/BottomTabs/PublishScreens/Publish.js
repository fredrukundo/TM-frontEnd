import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Pressable,
  FlatList,
} from "react-native";
import React, { useState, useContext, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { ThemeContext } from "../../../../contexts/ThemeContext";
import { colors } from "../../../../Config/theme/colors";
import { useDataContext } from "../../../../contexts/DataContext";
import countriesData from "../../../../Datas/countriesData.json";

const Publish = () => {
  const navigation = useNavigation();
  const { userData, updateUserData } = useDataContext();

  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [inputCountry, setInputCountry] = useState("");
  const [inputCity, setInputCity] = useState("");
  const [countrySuggestions, setCountrySuggestions] = useState([]);
  const [citySuggestions, setCitySuggestions] = useState([]);
  const [isCountryFocus, setIsCountryFocus] = useState(false);
  const [isCityFocus, setIsCityFocus] = useState(false);

  useEffect(() => {
    setCountries(countriesData);
  }, []);

  const handleCountryChange = (text) => {
    setInputCountry(text);
    const filteredCountries = countries.filter((country) =>
      country.country.toLowerCase().startsWith(text.toLowerCase())
    );
    setCountrySuggestions(filteredCountries);
  };

  const handleCityChange = (text) => {
    setInputCity(text);
    if (userData.dep_country) {
      const filteredCities = userData.dep_country.cities.filter((city) =>
        city.toLowerCase().startsWith(text.toLowerCase())
      );
      setCitySuggestions(filteredCities);
    }
  };

  const handleCountrySelect = (countryName) => {
    const selectedCountry = countries.find((c) => c.country === countryName);
    updateUserData({ dep_country: selectedCountry });
    setCities(selectedCountry ? selectedCountry.cities : []);
    updateUserData({ dep_city: null });
    setInputCountry(countryName);
    setCountrySuggestions([]);
    setIsCountryFocus(false); // Unfocus after selection
  };

  const handleCitySelect = (cityName) => {
    updateUserData({ dep_city: cityName });
    setInputCity(cityName);
    setCitySuggestions([]);
    setIsCityFocus(false); // Unfocus after selection
  };

  const handleNextPress = () => {
    console.log(userData.dep_country?.country, userData.dep_city);
    navigation.navigate("Arrival city");
  };

  const { theme } = useContext(ThemeContext);
  const activeColors = colors[theme.mode];
  const isNextButtonVisible = inputCountry !== "" && inputCity !== "";

  return (
    <View style={[styles.container, { backgroundColor: activeColors.bgcolor }]}>
      <View style={styles.TitleSection}>
        <Text style={[styles.title, { color: activeColors.TextColor }]}>
          Where do you start from?
        </Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={[styles.label, { color: activeColors.TextColor }]}>
          Departure Country:
        </Text>
        <View
          style={[
            styles.inputButton,
            isCountryFocus && { borderColor: "blue" },
          ]}
        >
          <TextInput
            placeholder={!isCountryFocus ? "ex. Rwanda" : " "}
            value={inputCountry}
            onChangeText={handleCountryChange}
            onFocus={() => setIsCountryFocus(true)}
            onBlur={() => setIsCountryFocus(false)}
            placeholderTextColor="gray"
            style={[styles.textInput, { color: activeColors.TextColor }]}
          />
          {inputCountry !== "" && (
            <TouchableOpacity
              onPress={() => setInputCountry("")}
              style={styles.cancelIcon}
            >
              <Ionicons name="close" size={20} color="gray" />
            </TouchableOpacity>
          )}
        </View>
        {countrySuggestions.length > 0 && (
          <FlatList
            data={countrySuggestions}
            renderItem={({ item }) => (
              <Pressable
                style={styles.pressable}
                onPress={() => handleCountrySelect(item.country)}
              >
                <Text style={styles.suggestionText}>{item.country}</Text>
              </Pressable>
            )}
            keyExtractor={(item, index) => `${item.country}-${index}`}
          />
        )}
      </View>

      
        <View style={styles.inputContainer}>
          <Text style={[styles.label, { color: activeColors.TextColor }]}>
            Departure City:
          </Text>
          <View
            style={[styles.inputButton, isCityFocus && { borderColor: "blue" }]}
          >
            <TextInput
              placeholder={!isCityFocus ? "ex. Kigali" : " "}
              value={inputCity}
              onChangeText={handleCityChange}
              onFocus={() => setIsCityFocus(true)}
              onBlur={() => setIsCityFocus(false)}
              placeholderTextColor="gray"
              style={[styles.textInput, { color: activeColors.TextColor }]}
            />
            {inputCity !== "" && (
              <TouchableOpacity
                onPress={() => setInputCity("")}
                style={styles.cancelIcon}
              >
                <Ionicons name="close" size={20} color="gray" />
              </TouchableOpacity>
            )}
          </View>
          {citySuggestions.length > 0 && (
            <FlatList
              data={citySuggestions}
              renderItem={({ item }) => (
                <Pressable
                  style={styles.pressable}
                  onPress={() => handleCitySelect(item)}
                >
                  <Text style={styles.suggestionText}>{item}</Text>
                </Pressable>
              )}
              keyExtractor={(item, index) => `${item}-${index}`}
            />
          )}
        </View>
     

      <View style={{ marginTop: 50 }}>
        {isNextButtonVisible && (
          <TouchableOpacity style={styles.nextButton} onPress={handleNextPress}>
            <Text style={[styles.nextText, { color: activeColors.TextColor }]}>Next</Text>
            <Ionicons
              name="arrow-forward-circle"
              size={50}
              color="#dc661f"
              style={{ paddingLeft: 6 }}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Publish;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  TitleSection: {
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 10,
  },
  inputButton: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  textInput: {
    flex: 1,
    fontSize: 16,
  },
  inputContainer: {
    marginTop: 20,
    padding: 20,
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 2,
  },
  pressable: {
    backgroundColor: "#e5e5e5",
    padding: 10,
    borderRadius: 5,
    marginBottom: 5,
  },
  suggestionText: {
    fontSize: 15,
    fontWeight: "500",
  },
  nextButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  nextText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  cancelIcon: {
    marginLeft: 10,
  },
});
