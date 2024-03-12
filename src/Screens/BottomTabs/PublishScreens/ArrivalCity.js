import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { Country, City } from "country-state-city";
import { Picker } from "@react-native-picker/picker";
import { colors } from "../../../../Config/theme/colors";
import { ThemeContext } from "../../../../contexts/ThemeContext";
import { FontAwesome,AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useDataContext } from "../../../../contexts/DataContext";

const ArrivalCity = () => {
  const navigation = useNavigation();
  const {userData, updateUserData} = useDataContext();

  const countries = Country.getAllCountries();
  const cities = userData.arr_country
    ? City.getCitiesOfCountry(userData.arr_country.isoCode)
    : [];

    const handleCountryChange = (country) => {
      updateUserData({ arr_country: country});
    };
  
    const handleCityChange = (city) => {
      updateUserData({ arr_city: city });
    };

  // theme colors
  const { theme } = useContext(ThemeContext);
  const activeColors = colors[theme.mode];

  const handleNextPress = () => {
    console.log(userData.arr_country.name ,userData.arr_country.flag , userData.arr_city.name);
    navigation.navigate("Kilos to sell");
  };

  const handleArrowBackPress = () => {
    navigation.goBack();
  };

  // Determine if both selectedCountry and userData.arr_city are not null
  const isNextButtonVisible = userData.arr_country !== null && userData.arr_city !== null;

  return (
    <View style={[styles.container, { backgroundColor: activeColors.bgcolor }]}>
      <View style={styles.content}>

       
        <View style={styles.TextSection}>
          <Text style={[styles.TextHeader, { color: activeColors.TextColor }]}>
            where are you going?
          </Text>
        </View>

        <View style={styles.inputContainer}>
          <Text style={[styles.label, { color: activeColors.TextColor }]}>
            Arrival Country:
          </Text>
          <View style={styles.pickerStyle}>
            <Picker
              style={styles.dropdown}
              selectedValue={userData.arr_country}
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
            Arrival City:
          </Text>
          <View style={styles.pickerStyle}>
            <Picker
              style={styles.dropdown}
              selectedValue={userData.arr_city}
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
  ArrowSection: {
    marginVertical:20,
    marginHorizontal:10
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
    marginTop:'30%'
  },
  nextText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
});
export default ArrivalCity;