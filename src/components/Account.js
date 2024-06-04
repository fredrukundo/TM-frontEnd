import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Modal,
  ScrollView,
  Linking,
} from "react-native";
import React, { useState } from "react";
import {
  Feather,
  MaterialCommunityIcons,
  AntDesign,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import CustomButton from "./CustomButton";
import Footer from "./Footer";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../Config/theme/colors";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import {privacy_URL,terms_conditions_URL,faq_URL} from '@env'


const Account = () => {
  // theme colors
  const { theme, updateTheme } = useContext(ThemeContext);
  const activeColors = colors[theme.mode];

  const [showModalL, setShowModalL] = useState(false);
  const [showModalT, setShowModalT] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [selectedTheme, setSelectedTheme] = useState("Light");

  const selectTheme = (theme) => {
    setSelectedTheme(theme);
    setShowModalT(false);
    updateTheme(); // logic for changing theme
  };
  const selectLanguage = (language) => {
    setSelectedLanguage(language);
    setShowModalL(false);
    // Implement logic to change the app's language based on the selected language
  };

  // links to website pages

  // privacy policy
  const privacyPolicyPress = async () => {
    const url = "https://travomate.godaddysites.com/privacy-notice";
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      console.log("Don't know how to open URI: " + url);
    }
  };
  // Terms and condiitions
  const TermsConditions = async () => {
    const url = "https://travomate.godaddysites.com/terms-and-conditions";
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      console.log("Don't know how to open URI: " + url);
    }
  };
  // frequently asked questions
  const faQuestions = async () => {
    const url = "https://travomate.godaddysites.com/faq";
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      console.log("Don't know how to open URI: " + url);
    }
  };

  const navigation = useNavigation();
  const AppVersion = require("../../package.json").version;
  return (
    <View style={[styles.container, { backgroundColor: activeColors.bgcolor }]}>
      <ScrollView>
        {/* LISTINGS SECTON*/}
        <Text style={[styles.Titles2, { color: activeColors.TextColor }]}>
          Listings
        </Text>
        <View style={styles.detailBox}>
          <Pressable onPress={() => navigation.navigate("Published Listings")}>
            <View
              style={[
                styles.detailItem,
                {
                  borderBottomWidth: 1,
                  borderBottomColor: "gray",
                  paddingBottom: 10,
                },
              ]}
            >
              <MaterialCommunityIcons
                name="shield-airplane"
                size={27}
                color="white"
                style={{
                  backgroundColor: "#E0D26A",
                  borderRadius: 4,
                  padding: 3,
                  marginRight: 8,
                }}
              />
              <Text
                style={[styles.itemsText, { color: activeColors.TextColor }]}
              >
                Published listings
              </Text>
              <Ionicons
                name="chevron-forward-outline"
                size={24}
                color="#ccc"
                style={{ marginLeft: "auto" }}
              />
            </View>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate("Reservation in Progress")}
          >
            <View style={[styles.detailItem]}>
              <MaterialCommunityIcons
                name="email-send"
                size={24}
                color="white"
                style={{
                  backgroundColor: "#FF0000",
                  borderRadius: 4,
                  padding: 3,
                  marginRight: 8,
                }}
              />
              <Text
                style={[styles.itemsText, { color: activeColors.TextColor }]}
              >
                Booking in progress
              </Text>
              <Ionicons
                name="chevron-forward-outline"
                size={24}
                color="#ccc"
                style={{ marginLeft: "auto" }}
              />
            </View>
          </Pressable>
        </View>

        {/* ALERTS SECTION*/}
        <Text style={[styles.Titles2, { color: activeColors.TextColor }]}>
          Alerts
        </Text>
        <View style={styles.detailBox}>
          <Pressable onPress={() => navigation.navigate("Alerts")}>
            <View style={[styles.detailItem]}>
              <Ionicons
                name="notifications"
                size={24}
                color="white"
                style={{
                  backgroundColor: "#25D366",
                  borderRadius: 4,
                  padding: 3,
                  marginRight: 8,
                }}
              />
              <Text
                style={[styles.itemsText, { color: activeColors.TextColor }]}
              >
                Manage Alerts
              </Text>
              <Ionicons
                name="chevron-forward-outline"
                size={24}
                color="#ccc"
                style={{ marginLeft: "auto" }}
              />
            </View>
          </Pressable>
        </View>
        {/* REVIEW SECTION */}
        <Text style={[styles.Titles2, { color: activeColors.TextColor }]}>
          Review
        </Text>
        <View style={styles.detailBox}>
          <Pressable onPress={() => navigation.navigate("Reviews Recieved")}>
            <View
              style={[
                styles.detailItem,
                {
                  borderBottomWidth: 1,
                  borderBottomColor: "gray",
                  paddingBottom: 10,
                },
              ]}
            >
              <MaterialCommunityIcons
                name="shield-star-outline"
                size={24}
                color="white"
                style={{
                  backgroundColor: "#1E88E5",
                  borderRadius: 4,
                  padding: 3,
                  marginRight: 8,
                }}
              />
              <Text
                style={[styles.itemsText, { color: activeColors.TextColor }]}
              >
                Review recieved
              </Text>
              <Ionicons
                name="chevron-forward-outline"
                size={24}
                color="#ccc"
                style={{ marginLeft: "auto" }}
              />
            </View>
          </Pressable>

          <Pressable onPress={() => navigation.navigate("Reviews submitted")}>
            <View style={[styles.detailItem]}>
              <MaterialCommunityIcons
                name="star-box"
                size={27}
                color="white"
                style={{
                  backgroundColor: "#FFA800",
                  borderRadius: 4,
                  padding: 3,
                  marginRight: 8,
                }}
              />
              <Text
                style={[styles.itemsText, { color: activeColors.TextColor }]}
              >
                Review submitted
              </Text>
              <Ionicons
                name="chevron-forward-outline"
                size={24}
                color="#ccc"
                style={{ marginLeft: "auto" }}
              />
            </View>
          </Pressable>
        </View>
        {/* PREFERENCES SECTION */}
        <Text style={[styles.Titles2, { color: activeColors.TextColor }]}>
          Preferences
        </Text>
        <View style={styles.detailBox}>
          <Pressable onPress={() => navigation.navigate("Change Email")}>
            <View
              style={[
                styles.detailItem,
                {
                  borderBottomWidth: 1,
                  borderBottomColor: "gray",
                  paddingBottom: 10,
                },
              ]}
            >
              <MaterialCommunityIcons
                name="email-sync"
                size={24}
                color="white"
                style={{
                  backgroundColor: "#FF0000",
                  borderRadius: 4,
                  padding: 3,
                  marginRight: 8,
                }}
              />
              <Text
                style={[styles.itemsText, { color: activeColors.TextColor }]}
              >
                Change email address
              </Text>
              <Ionicons
                name="chevron-forward-outline"
                size={24}
                color="#ccc"
                style={{ marginLeft: "auto" }}
              />
            </View>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("Change Password")}>
            <View
              style={[
                styles.detailItem,
                {
                  borderBottomWidth: 1,
                  borderBottomColor: "gray",
                  paddingBottom: 10,
                },
              ]}
            >
              <MaterialCommunityIcons
                name="form-textbox-password"
                size={24}
                color="white"
                style={{
                  backgroundColor: "#616B1B",
                  borderRadius: 4,
                  padding: 3,
                  marginRight: 8,
                }}
              />
              <Text
                style={[styles.itemsText, { color: activeColors.TextColor }]}
              >
                Change password
              </Text>
              <Ionicons
                name="chevron-forward-outline"
                size={24}
                color="#ccc"
                style={{ marginLeft: "auto" }}
              />
            </View>
          </Pressable>

          <Pressable onPress={() => setShowModalL(true)}>
            <View
              style={[
                styles.detailItem,
                {
                  borderBottomWidth: 1,
                  borderBottomColor: "gray",
                  paddingBottom: 10,
                },
              ]}
            >
              <MaterialIcons
                name="language"
                size={24}
                color="white"
                style={{
                  backgroundColor: "#0077C8",
                  borderRadius: 4,
                  padding: 3,
                  marginRight: 8,
                }}
              />
              <Text
                style={[styles.itemsText, { color: activeColors.TextColor }]}
              >
                Change language
              </Text>
              <Ionicons
                name="chevron-forward-outline"
                size={24}
                color="#ccc"
                style={{ marginLeft: "auto" }}
              />
            </View>
          </Pressable>
          <Modal
            animationType="fade"
            transparent={true}
            visible={showModalL}
            onRequestClose={() => setShowModalL(false)}
          >
            <Pressable
              style={styles.modalContainer}
              onPress={() => setShowModalL(false)}
            >
              <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>Choose Language</Text>
                <Pressable onPress={() => selectLanguage("English")}>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Ionicons
                      name={
                        selectedLanguage === "English"
                          ? "radio-button-on"
                          : "radio-button-off"
                      }
                      size={24}
                      color={selectedLanguage === "English" ? "blue" : "gray"}
                    />
                    <Text style={{ marginLeft: 10 }}>English</Text>
                  </View>
                </Pressable>
                <Pressable onPress={() => selectLanguage("French")}>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginTop: 10,
                    }}
                  >
                    <Ionicons
                      name={
                        selectedLanguage === "French"
                          ? "radio-button-on"
                          : "radio-button-off"
                      }
                      size={24}
                      color={selectedLanguage === "French" ? "blue" : "gray"}
                    />
                    <Text style={{ marginLeft: 10 }}>French</Text>
                  </View>
                </Pressable>
              </View>
            </Pressable>
          </Modal>

          <Pressable onPress={() => setShowModalT(true)}>
            <View
              style={[
                styles.detailItem,
                {
                  borderBottomWidth: 1,
                  borderBottomColor: "gray",
                  paddingBottom: 10,
                },
              ]}
            >
              <MaterialCommunityIcons
                name="theme-light-dark"
                size={24}
                color="white"
                style={{
                  backgroundColor: "#E0D26A",
                  borderRadius: 4,
                  padding: 3,
                  marginRight: 8,
                }}
              />
              <Text
                style={[styles.itemsText, { color: activeColors.TextColor }]}
              >
                Change theme
              </Text>
              <Ionicons
                name="chevron-forward-outline"
                size={24}
                color="#ccc"
                style={{ marginLeft: "auto" }}
              />
            </View>
          </Pressable>
          <Modal
            animationType="fade"
            transparent={true}
            visible={showModalT}
            onRequestClose={() => setShowModalT(false)}
          >
            <Pressable
              style={styles.modalContainer}
              onPress={() => setShowModalT(false)}
            >
              <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>Choose Theme</Text>
                <Pressable onPress={() => selectTheme("Light")}>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Ionicons
                      name={
                        selectedTheme === "Light"
                          ? "radio-button-on"
                          : "radio-button-off"
                      }
                      size={24}
                      color={selectedTheme === "Light" ? "blue" : "gray"}
                    />
                    <Text style={{ marginLeft: 10 }}>Light</Text>
                  </View>
                </Pressable>
                <Pressable onPress={() => selectTheme("Dark")}>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginTop: 10,
                    }}
                  >
                    <Ionicons
                      name={
                        selectedTheme === "Dark"
                          ? "radio-button-on"
                          : "radio-button-off"
                      }
                      size={24}
                      color={selectedTheme === "Dark" ? "blue" : "gray"}
                    />
                    <Text style={{ marginLeft: 10 }}>Dark</Text>
                  </View>
                </Pressable>
              </View>
            </Pressable>
          </Modal>

          <Pressable
            onPress={() => navigation.navigate("Change Preferred currency")}
          >
            <View style={[styles.detailItem]}>
              <AntDesign
                name="wallet"
                size={24}
                color="white"
                style={{
                  backgroundColor: "green",
                  borderRadius: 4,
                  padding: 3,
                  marginRight: 8,
                }}
              />
              <Text
                style={[styles.itemsText, { color: activeColors.TextColor }]}
              >
                Change your preferred currency
              </Text>
              <Ionicons
                name="chevron-forward-outline"
                size={24}
                color="#ccc"
                style={{ marginLeft: "auto" }}
              />
            </View>
          </Pressable>
        </View>
        {/* ABOUT */}
        <Text style={[styles.Titles2, { color: activeColors.TextColor }]}>
          About
        </Text>
        <View style={styles.detailBox}>
          <Pressable onPress={() => navigation.navigate("Help")}>
            <View
              style={[
                styles.detailItem,
                {
                  borderBottomWidth: 1,
                  borderBottomColor: "gray",
                  paddingBottom: 10,
                },
              ]}
            >
              <MaterialIcons
                name="contact-mail"
                size={24}
                color="white"
                style={{
                  backgroundColor: "#1E88E5",
                  borderRadius: 4,
                  padding: 3,
                  marginRight: 8,
                }}
              />
              <Text
                style={[styles.itemsText, { color: activeColors.TextColor }]}
              >
                Contact us
              </Text>
              <Ionicons
                name="chevron-forward-outline"
                size={24}
                color="#ccc"
                style={{ marginLeft: "auto" }}
              />
            </View>
          </Pressable>
          {/* <Pressable onPress={() => navigation.navigate('privacy policy')}> */}
          <Pressable onPress={privacyPolicyPress}>
            <View
              style={[
                styles.detailItem,
                {
                  borderBottomWidth: 1,
                  borderBottomColor: "gray",
                  paddingBottom: 10,
                },
              ]}
            >
              <Feather
                name="lock"
                size={24}
                color="white"
                style={{
                  backgroundColor: "#25D366",
                  borderRadius: 4,
                  padding: 3,
                  marginRight: 8,
                }}
              />
              <Text
                style={[styles.itemsText, { color: activeColors.TextColor }]}
              >
                Privacy policy
              </Text>
              <Ionicons
                name="chevron-forward-outline"
                size={24}
                color="#ccc"
                style={{ marginLeft: "auto" }}
              />
            </View>
          </Pressable>

          {/* <Pressable onPress={() => navigation.navigate('terms and conditions')}> */}
          <Pressable onPress={TermsConditions}>
            <View
              style={[
                styles.detailItem,
                {
                  borderBottomWidth: 1,
                  borderBottomColor: "gray",
                  paddingBottom: 10,
                },
              ]}
            >
              <MaterialCommunityIcons
                name="file-document"
                size={24}
                color="white"
                style={{
                  backgroundColor: "#FFBF00",
                  borderRadius: 4,
                  padding: 3,
                  marginRight: 8,
                }}
              />
              <Text
                style={[styles.itemsText, { color: activeColors.TextColor }]}
              >
                Terms and conditions
              </Text>
              <Ionicons
                name="chevron-forward-outline"
                size={24}
                color="#ccc"
                style={{ marginLeft: "auto" }}
              />
            </View>
          </Pressable>

          {/* <Pressable onPress={() => navigation.navigate('FAQs')}> */}
          <Pressable onPress={faQuestions}>
            <View
              style={[
                styles.detailItem,
                {
                  borderBottomWidth: 1,
                  borderBottomColor: "gray",
                  paddingBottom: 10,
                },
              ]}
            >
              <MaterialIcons
                name="feedback"
                size={24}
                color="white"
                style={{
                  backgroundColor: "#1E88E5",
                  borderRadius: 4,
                  padding: 3,
                  marginRight: 8,
                }}
              />
              <Text
                style={[styles.itemsText, { color: activeColors.TextColor }]}
              >
                FAQs
              </Text>
              <Ionicons
                name="chevron-forward-outline"
                size={24}
                color="#ccc"
                style={{ marginLeft: "auto" }}
              />
            </View>
          </Pressable>

          <Pressable onPress={() => console.warn("deleting account??")}>
            <View
              style={[
                styles.detailItem,
                {
                  borderBottomWidth: 1,
                  borderBottomColor: "gray",
                  paddingBottom: 10,
                },
              ]}
            >
              <MaterialIcons
                name="delete"
                size={24}
                color="white"
                style={{
                  backgroundColor: "#93211E",
                  borderRadius: 4,
                  padding: 3,
                  marginRight: 8,
                }}
              />
              <Text
                style={[styles.itemsText, { color: activeColors.TextColor }]}
              >
                Delete my account
              </Text>
              <Ionicons
                name="chevron-forward-outline"
                size={24}
                color="#ccc"
                style={{ marginLeft: "auto" }}
              />
            </View>
          </Pressable>

          <Pressable onPress={() => console.warn("rate the app")}>
            <View style={[styles.detailItem]}>
              <MaterialIcons
                name="phone-android"
                size={24}
                color="white"
                style={{
                  backgroundColor: "#616B1B",
                  borderRadius: 4,
                  padding: 3,
                  marginRight: 8,
                }}
              />
              <Text
                style={[styles.itemsText, { color: activeColors.TextColor }]}
              >
                Rate the app
              </Text>
              <Ionicons
                name="chevron-forward-outline"
                size={24}
                color="#ccc"
                style={{ marginLeft: "auto" }}
              />
            </View>
          </Pressable>
        </View>

        {/* sign out button */}
        <View style={styles.SignOutButton}>
          <CustomButton
            text="Sign Out"
            buttonStyle={styles.button}
            textStyle={styles.buttonText}
            onPress={() => navigation.navigate("Sign Out")}
          />
        </View>
        {/* social medias */}
        <View style={{ alignItems: "center" }}>
          <Footer />
        </View>
        {/* version and footer */}
        <View style={styles.appVersion}>
          <Text style={styles.versionText}>Version: {AppVersion}</Text>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor:'#fff'
  },
  Titles2: {
    fontWeight: "bold",
    fontSize: 18,
    marginHorizontal: 20,
    marginTop: 10,
  },
  body: {
    marginHorizontal: 5,
  },
  bodyChild: {
    marginVertical: 20,
  },
  TitleSection: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  editButton: {
    fontWeight: "bold",
    fontSize: 18,
    marginHorizontal: 20,
    color: "#dc661f",
  },
  detailBox: {
    paddingHorizontal: 16,
    paddingVertical: 4,
    // backgroundColor: '#F0F0F0',
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    margin: 8,
  },
  detailItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  itemsText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  subItemsText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "gray",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
  content: {
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  list: {
    paddingBottom: 10,
  },

  listItem: {
    paddingLeft: 10,
    marginBottom: 5,
    color: "gray",
    fontSize: 18,
  },
  memberSince: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    marginBottom: 10,
  },
  memberSinceText: {
    color: "gray",
    fontSize: 16,
  },
  SignOutButton: {
    alignItems: "center",
    marginVertical: 20,
  },
  button: {
    backgroundColor: "#800020",
    paddingHorizontal: 90,
  },
  buttonText: {
    fontWeight: "bold",
  },
  appVersion: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  versionText: {
    fontSize: 18,
    color: "gray",
    fontWeight: "bold",
  },
  iconBox: {
    // width: 30,
    // height: 30,
    // borderWidth: 1,
    // borderRadius: 3,
    // justifyContent: 'center',
    // alignItems: 'center',
    marginRight: 8,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 5,
    padding: 30,
  },
  modalTitle: {
    marginBottom: 10,
    fontWeight: "700",
  },
});

export default Account;
