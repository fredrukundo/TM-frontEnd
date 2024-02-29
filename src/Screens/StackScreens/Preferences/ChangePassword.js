import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import { colors } from '../../../../Config/theme/colors';
import { useContext } from 'react';
import { ThemeContext } from '../../../../contexts/ThemeContext';

const ChangePassword = () => {

// theme colors
const {theme} = useContext(ThemeContext);
const activeColors = colors[theme.mode];

  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [isOldPasswordVisible, setIsOldPasswordVisible] = useState(false);
  const [isNewPasswordVisible, setIsNewPasswordVisible] = useState(false);
  const [isCapitalLetter, setIsCapitalLetter] = useState(false);
  const [hasNumber, setHasNumber] = useState(false);
  const [isLengthValid, setIsLengthValid] = useState(false);

  const toggleOldPasswordVisibility = () => {
    setIsOldPasswordVisible(!isOldPasswordVisible);
  };

  const toggleNewPasswordVisibility = () => {
    setIsNewPasswordVisible(!isNewPasswordVisible);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9]).{8,}$/;
    return passwordRegex.test(password);
  };

  const handleChangePassword = () => {
    if (validatePassword(newPassword)) {
      // Perform password change logic here
      console.log('Password changed successfully');
    } else {
      console.log('Invalid password');
      // Display an error message or perform some action for invalid password
    }
  };

  const handleNextPress = () => {
    console.log('newPassword is set');
  };

  const handleNewPasswordChange = (password) => {
    setNewPassword(password);
    setIsCapitalLetter(/[A-Z]/.test(password));
    setHasNumber(/[0-9]/.test(password));
    setIsLengthValid(password.length >= 8);
  };

  return (
    <View style={[styles.container,{backgroundColor:activeColors.bgcolor}]}>
      <View style={styles.content}>
        <Text style={[styles.label,{color:activeColors.TextColor}]}>Old Password</Text>
        <View style={styles.inputContainer}>
          <TextInput
            secureTextEntry={!isOldPasswordVisible}
            placeholder="Old Password"
            value={oldPassword}
            onChangeText={setOldPassword}
            style={styles.input}
          />
          <View style={styles.verticalLine} />
          <TouchableOpacity onPress={toggleOldPasswordVisibility} style={styles.eyeIcon}>
            <MaterialIcons
              name={isOldPasswordVisible ? 'visibility' : 'visibility-off'}
              size={24}
              color="gray"
            />
          </TouchableOpacity>
        </View>

        <Text style={[styles.label,{color:activeColors.TextColor}]}>New Password</Text>
        <View style={styles.inputContainer}>
          <TextInput
            secureTextEntry={!isNewPasswordVisible}
            placeholder="New Password"
            value={newPassword}
            onChangeText={handleNewPasswordChange}
            style={styles.input}
          />
          <View style={styles.verticalLine} />
          <TouchableOpacity onPress={toggleNewPasswordVisibility} style={styles.eyeIcon}>
            <MaterialIcons
              name={isNewPasswordVisible ? 'visibility' : 'visibility-off'}
              size={24}
              color="gray"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.validationCondition}>
          <AntDesign
            name={isCapitalLetter ? 'checkcircle' : 'closecircle'}
            size={20}
            color={isCapitalLetter ? 'green' : 'red'}
            style={{ paddingRight: 6 }}
          />
          <Text style={{color:activeColors.TextColor}}>At least 1 capital letter</Text>
        </View>

        <View style={styles.validationCondition}>
          <AntDesign
            name={hasNumber ? 'checkcircle' : 'closecircle'}
            size={20}
            color={hasNumber ? 'green' : 'red'}
            style={{ paddingRight: 6 }}
          />
          <Text style={{color:activeColors.TextColor}}>At least 1 number</Text>
        </View>

        <View style={styles.validationCondition}>
          <AntDesign
            name={isLengthValid ? 'checkcircle' : 'closecircle'}
            size={20}
            color={isLengthValid ? 'green' : 'red'}
            style={{ paddingRight: 6 }}
          />
          <Text style={{color:activeColors.TextColor}}>At least 8 characters</Text>
        </View>

        <TouchableOpacity style={styles.DoneButton} onPress={handleNextPress}>
          <Text style={styles.DoneText}>Done</Text>
          <AntDesign name="checkcircle" size={40} color="green" style={{ paddingLeft: 6 }} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'white',
  },
  content: {
    marginTop: 15,
    marginHorizontal: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 15,
    paddingVertical: 10,
    backgroundColor:'white'
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
  },
  eyeIcon: {
    paddingHorizontal: 10,
  },
  verticalLine: {
    width: 1,
    height: '150%',
    backgroundColor: 'gray',
  },
  validationCondition: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  DoneButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto',
    marginTop: 90,
  },
  DoneText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default ChangePassword;
