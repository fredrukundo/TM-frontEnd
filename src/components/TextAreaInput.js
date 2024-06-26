import React, {useContext}from "react";
import { View,TextInput,StyleSheet } from "react-native";
import { colors } from "../../Config/theme/colors";
import { ThemeContext } from "../../contexts/ThemeContext";


const TextAreaInput = ({value,setValue,placeholder,secureTextEntry,keyboardType,defaultValue}) =>{

    // Theme colors
  const { theme } = useContext(ThemeContext);
  const activeColors = colors[theme.mode];
    return(
        <View style={styles.container}>
        
            <TextInput
            values={value}
            onChange={setValue}
            placeholder={placeholder}
            defaultValue={defaultValue}
            style={[styles.input, { color: activeColors.TextColor }]}
            secureTextEntry={secureTextEntry}  
            keyboardType={keyboardType}  
    
            />
        </View>


    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#F9FBFC',
        width: '100%',
        borderColor:'#e8e8e8',
        borderWidth: 1,
        borderRadius: 9,

        paddingHorizontal: 10,
        marginVertical: 5,

    },
    input:{
    padding: 10,
    }

});
export default TextAreaInput