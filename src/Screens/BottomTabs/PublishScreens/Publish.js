import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Country, City } from "country-state-city";
import { Picker } from "@react-native-picker/picker";
import { colors } from "../../../../Config/theme/colors";
import { ThemeContext } from "../../../../contexts/ThemeContext";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useDataContext } from "../../../../contexts/DataContext";

const Publish = () => {
  const navigation = useNavigation();
  const { userData, updateUserData } = useDataContext();

  const countries = Country.getAllCountries();
  const cities = userData.dep_country
    ? City.getCitiesOfCountry(userData.dep_country.isoCode)
    : [];

  const handleCountryChange = (country) => {
    updateUserData({ dep_country: country});
  };

  const handleCityChange = (city) => {
    updateUserData({ dep_city: city });
  };

  // theme colors
  const { theme } = useContext(ThemeContext);
  const activeColors = colors[theme.mode];

  const handleNextPress = () => {
    console.log(userData.dep_country?.name, userData.dep_country?.flag, userData.dep_city?.name);
    navigation.navigate("Arrival city");
    
  };

  const isNextButtonVisible = userData.dep_country !== null && userData.dep_city !== null;

  return (
    <View style={[styles.container, { backgroundColor: activeColors.bgcolor }]}>
      <View style={styles.content}>
        <View style={styles.TextSection}>
          <Text style={[styles.TextHeader, { color: activeColors.TextColor }]}>
            where do you start from?
          </Text>
        </View>

        <View style={styles.inputContainer}>
          <Text style={[styles.label, { color: activeColors.TextColor }]}>
            Departure Country:
          </Text>
          <View style={styles.pickerStyle}>
            <Picker
              style={styles.dropdown}
              selectedValue={userData.dep_country}
              onValueChange={handleCountryChange}
            >
              <Picker.Item label="Select Country" value={null} />
              {countries.map((country) => (
                <Picker.Item
                  key={country.isoCode}
                  label={country.name}
                  value={country}
                />
              ))}
            </Picker>
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={[styles.label, { color: activeColors.TextColor }]}>
            Departure City:
          </Text>
          <View style={styles.pickerStyle}>
            <Picker
              style={styles.dropdown}
              selectedValue={userData.dep_city}
              onValueChange={handleCityChange}
            >
              <Picker.Item label="Select City" value={null} />
              {cities.map((city) => (
                <Picker.Item key={city.name} label={city.name} value={city} />
              ))}
            </Picker>
          </View>
        </View>
        <View style={{ marginTop: 50 }}>
          {isNextButtonVisible && (
            <TouchableOpacity
              style={styles.nextButton}
              onPress={handleNextPress}
            >
              <Text style={styles.nextText}>Next</Text>
              <FontAwesome
                name="arrow-circle-right"
                size={50}
                color="#dc661f"
                style={{ paddingLeft: 6 }}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    marginHorizontal: 20,
  },
  TextSection: {
    marginVertical: 30,
    justifyContent: "center",
    alignItems: "center",
    top:20
  },
  TextHeader: {
    fontSize: 24,
    fontWeight: "700",
  },
  pickerStyle: {
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    backgroundColor: "#F9FBFC",
  },
  inputContainer: {
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
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
});

export default Publish;