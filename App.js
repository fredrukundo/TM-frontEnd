import { StatusBar } from 'expo-status-bar';
import { useState} from 'react';
import { StyleSheet, View} from 'react-native';
import Navigation from './src/Navigations/Navigation';
import { ThemeContext } from './contexts/ThemeContext';
import * as Updates from 'expo-updates';
import { DataProvider } from './contexts/DataContext';

export default function App() {

  //this part is for expo updates
  //in the future u want to make chnges and publish
  //to expo go it will be easy
  async function onFetchUpdateAsync() {
    try {
      const update = await Updates.checkForUpdateAsync();

      if (update.isAvailable) {
        await Updates.fetchUpdateAsync();
        await Updates.reloadAsync();
      }
    } catch (error) {
      // You can also add an alert() to see the error message in case of an error when fetching updates.
      alert(`Error fetching latest Expo update: ${error}`);
    }
  }


const [theme, setTheme] = useState({mode: "light"})

const updateTheme = (newTheme) =>{
  let mode;
if(!newTheme){
  mode = theme.mode === 'dark' ? 'light' : 'dark';
  newTheme = {mode};
}
setTheme(newTheme);
}

  return (
    <DataProvider>
    <ThemeContext.Provider value={{theme, updateTheme}}>
    {/* <View style={[styles.container,{backgroundColor:activeColors.bgcolor}]}> */}
    <Navigation/>
    <StatusBar style={theme.mode == "dark" ? "light" : "dark"} />
    {/* </View> */}
    </ThemeContext.Provider>
    </DataProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    
  },
});





