import { View, Text, Image, TouchableOpacity, Switch, StyleSheet } from 'react-native';
import React, { useState, useContext } from 'react';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Octicons, Ionicons } from '@expo/vector-icons';
import StarRating from '../components/StarRating';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../Config/theme/colors';
import { ThemeContext } from '../../contexts/ThemeContext';
import { SafeAreaView } from 'react-native-safe-area-context';

const CustomDrawer = (props) => {
  // theme colors
  const { theme, updateTheme } = useContext(ThemeContext);
  const activeColors = colors[theme.mode];

  const navigation = useNavigation();
  const [isActive, setIsActive] = useState(theme.mode === 'dark');

  const toggleTheme = () => {
    updateTheme();
    setIsActive((previousState) => !previousState);
  };

  return (
    <View style={[styles.container, { backgroundColor: activeColors.bgcolor }]}>
    <View style={styles.contentDrawer}>

      <DrawerContentScrollView {...props}>
          {/* Header section */}
          <View style={styles.SectionLine}>
            <Text style={[styles.Titles1, { color: activeColors.TextColor }]}>TravoMate</Text>
            <Image
              source={require('../../assets/images/profile.jpg')}
              style={{
                height: 80,
                width: 80,
                borderRadius: 40,
                marginBottom: 10,
              }}
            />
            <Text style={[styles.Titles1, { color: activeColors.TextColor }]}>Duke Fred</Text>
            <Text style={{ marginBottom: 10 }}>
              <StarRating />
            </Text>
          </View>
          {/* LANGUAGE & THEME SECTION */}
          <View style={styles.SectionLine}>
            {/* LANGUAGE SECTION */}
            <TouchableOpacity onPress={() => {}} style={{ paddingVertical: 8 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={[{ fontSize: 18 }, { color: activeColors.TextColor }]}>Language:</Text>
                <Image
                  source={require('../../assets/images/usaIcon.png')}
                  style={{
                    height: 20,
                    width: 40,
                    marginLeft: 'auto',
                  }}
                />
              </View>
            </TouchableOpacity>
            {/* THEME SECTION */}
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flexDirection: 'row', paddingVertical: 8 }}>
                <Text style={[{ fontSize: 18, marginRight: 5 }, { color: activeColors.TextColor }]}>Theme:</Text>
                <Text style={{ fontSize: 18, color: 'gray' }}>{theme.mode}</Text>
              </View>
              <Switch
                trackColor={{ false: '#767577', true: '#81b0ff' }}
                thumbColor={'#f5dd4b'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleTheme}
                value={isActive}
                style={{ marginLeft: 'auto' }}
              />
            </View>
          </View>
          {/* Drawer List Items */}
          <View style={{ flex: 1, paddingTop: 5 }}>
            <DrawerItemList {...props} />
          </View>
       
      </DrawerContentScrollView>
    </View>
      {/* Footer section */}
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => { navigation.navigate('Profile') }} style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Ionicons name="person-circle" size={27} color="#0A64EF" />
            <Text style={[{ fontSize: 15, marginLeft: 5 }, { color: activeColors.TextColor }]}>
              Profile
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { navigation.navigate('Sign Out') }} style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Octicons name="sign-out" size={24} color="#0A64EF" />
            <Text style={[{ fontSize: 15, marginLeft: 5 }, { color: activeColors.TextColor }]}>
              Sign Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentDrawer: {
    flex: 1,
  },
  Titles1: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  SectionLine: {
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingHorizontal: 20,
  },
});

export default CustomDrawer;