import React,{useContext} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '../../Config/theme/colors';
import { ThemeContext } from '../../contexts/ThemeContext';

const VerifiedButton = ({ text, iconName, iconColor, backgroundColor, borderColor, wallet }) => {

  //  theme colors
  const {theme} = useContext(ThemeContext);
  const activeColors = colors[theme.mode];

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <View style={[styles.button, { borderColor }]}>
        <Text style={[styles.text, {color:activeColors.TextColor}]}>{text}</Text>
        <Text style={[styles.text, {color:activeColors.TextColor}]}>{wallet}</Text>
        <MaterialIcons name={iconName} size={18} color={iconColor} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  button: {
    flexDirection: 'row',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignItems: 'center',
    borderWidth: 1,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 5,
  },
});

export default VerifiedButton;
