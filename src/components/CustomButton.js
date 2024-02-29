import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 

const CustomButton = ({ text, iconSource, onPress, buttonStyle, textStyle }) => {
  return (
    <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
      <Icon name={iconSource} style={styles.icon} />
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#25D366',
    paddingVertical: 9,
    paddingHorizontal: 24,
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    color: '#fff',
    marginLeft: 8,
    fontWeight: 'bold',
  },
  icon: {
    fontSize: 24,
    color: '#fff',
  },
});

export default CustomButton;
