// import React, { useState, useContext } from "react";
// import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
// import { Country, City } from "country-state-city";
// import { Picker } from "@react-native-picker/picker";
// import { colors } from "../../../../Config/theme/colors";
// import { ThemeContext } from "../../../../contexts/ThemeContext";
// import { FontAwesome,AntDesign } from "@expo/vector-icons";
// import { useNavigation } from "@react-navigation/native";
// import { useDataContext } from "../../../../contexts/DataContext";

// const ArrivalCity = () => {
//   const navigation = useNavigation();
//   const {userData, updateUserData} = useDataContext();

//   const countries = Country.getAllCountries();
//   const cities = userData.arr_country
//     ? City.getCitiesOfCountry(userData.arr_country.isoCode)
//     : [];

//     const handleCountryChange = (country) => {
//       updateUserData({ arr_country: country});
//     };
  
//     const handleCityChange = (city) => {
//       updateUserData({ arr_city: city });
//     };

//   // theme colors
//   const { theme } = useContext(ThemeContext);
//   const activeColors = colors[theme.mode];

//   const handleNextPress = () => {
//     console.log(userData.arr_country.name ,userData.arr_country.flag , userData.arr_city.name);
//     navigation.navigate("Kilos to sell");
//   };

//   const handleArrowBackPress = () => {
//     navigation.goBack();
//   };

//   // Determine if both selectedCountry and userData.arr_city are not null
//   const isNextButtonVisible = userData.arr_country !== null && userData.arr_city !== null;

//   return (
//     <View style={[styles.container, { backgroundColor: activeColors.bgcolor }]}>
//       <View style={styles.content}>

       
//         <View style={styles.TextSection}>
//           <Text style={[styles.TextHeader, { color: activeColors.TextColor }]}>
//             where are you going?
//           </Text>
//         </View>

//         <View style={styles.inputContainer}>
//           <Text style={[styles.label, { color: activeColors.TextColor }]}>
//             Arrival Country:
//           </Text>
//           <View style={styles.pickerStyle}>
//             <Picker
//               style={styles.dropdown}
//               selectedValue={userData.arr_country}
//               onValueChange={handleCountryChange}
//             >
//               <Picker.Item label="Select Country" value={null} />
//               {countries.map((country) => (
//                 <Picker.Item
//                   key={country.isoCode}
//                   label={country.name}
//                   value={country}
//                 />
//               ))}
//             </Picker>
//           </View>
//         </View>

//         <View style={styles.inputContainer}>
//           <Text style={[styles.label, { color: activeColors.TextColor }]}>
//             Arrival City:
//           </Text>
//           <View style={styles.pickerStyle}>
//             <Picker
//               style={styles.dropdown}
//               selectedValue={userData.arr_city}
//               onValueChange={handleCityChange}
//             >
//               <Picker.Item label="Select City" value={null} />
//               {cities.map((city) => (
//                 <Picker.Item key={city.name} label={city.name} value={city} />
//               ))}
//             </Picker>
//           </View>
//         </View>
//         <View style={{ marginTop: 50 }}>
//           {isNextButtonVisible && (
//             <TouchableOpacity
//               style={styles.nextButton}
//               onPress={handleNextPress}
//             >
//               <Text style={styles.nextText}>Next</Text>
//               <FontAwesome
//                 name="arrow-circle-right"
//                 size={50}
//                 color="#dc661f"
//                 style={{ paddingLeft: 6 }}
//               />
//             </TouchableOpacity>
//           )}
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   ArrowSection: {
//     marginVertical:20,
//     marginHorizontal:10
//   },
//   content: {
//     marginHorizontal: 20,
//   },
//   TextSection: {
//     marginVertical: 15,
//     justifyContent: "center",
//     alignItems: "center",
//     //top:20
//   },
//   TextHeader: {
//     fontSize: 24,
//     fontWeight: "700",
//   },
//   pickerStyle: {
//     borderColor: "gray",
//     borderWidth: 1,
//     borderRadius: 8,
//     paddingHorizontal: 8,
//     backgroundColor: "#F9FBFC",
//   },
//   inputContainer: {
//     marginVertical: 10,
//   },
//   label: {
//     fontSize: 16,
//     fontWeight: "bold",
//     marginBottom: 10,
//   },
//   nextButton: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "flex-end",
//     marginTop:'30%'
//   },
//   nextText: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "#333",
//   },
// });
// export default ArrivalCity;

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
    if (userData.arr_country) {
      const filteredCities = userData.arr_country.cities.filter((city) =>
        city.toLowerCase().startsWith(text.toLowerCase())
      );
      setCitySuggestions(filteredCities);
    }
  };

  const handleCountrySelect = (countryName) => {
    const selectedCountry = countries.find((c) => c.country === countryName);
    updateUserData({ arr_country: selectedCountry });
    setCities(selectedCountry ? selectedCountry.cities : []);
    updateUserData({ arr_city: null });
    setInputCountry(countryName);
    setCountrySuggestions([]);
    setIsCountryFocus(false); // Unfocus after selection
  };

  const handleCitySelect = (cityName) => {
    updateUserData({ arr_city: cityName });
    setInputCity(cityName);
    setCitySuggestions([]);
    setIsCityFocus(false); // Unfocus after selection
  };

  const handleNextPress = () => {
    console.log(userData.arr_country?.country, userData.arr_city);
    navigation.navigate("Kilos to sell");
  };

  const { theme } = useContext(ThemeContext);
  const activeColors = colors[theme.mode];
  const isNextButtonVisible = inputCountry !== "" && inputCity !== "";

  return (
    <View style={[styles.container, { backgroundColor: activeColors.bgcolor }]}>
      <View style={styles.TitleSection}>
        <Text style={[styles.title, { color: activeColors.TextColor }]}>
        where are you going?
        </Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={[styles.label, { color: activeColors.TextColor }]}>
          Arrival Country:
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
            Arrival City:
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
