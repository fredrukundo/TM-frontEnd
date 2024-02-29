import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const StarRating = () => {
  return (
    <SafeAreaView >
        <View style={styles.stars}>
        <MaterialIcons name="star" size={20} color="#ABB2B9" />
        <MaterialIcons name="star" size={20} color="#ABB2B9" />
        <MaterialIcons name="star" size={20} color="#ABB2B9" />
        <MaterialIcons name="star" size={20} color="#ABB2B9" />
        <MaterialIcons name="star" size={20} color="#ABB2B9" />
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  stars: {
    flexDirection: 'row',
      
    flex:1
  },
});

export default StarRating