import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList,Image } from 'react-native';
import { colors } from '../../../../Config/theme/colors';
import { useContext } from 'react';
import { ThemeContext } from '../../../../contexts/ThemeContext';

const ReviewsSubmitted  = () => {

  //  theme colors
  const {theme} = useContext(ThemeContext);
const activeColors = colors[theme.mode];

  const [reviewsS, setReviewsS] = useState([
    // {
    //   id: '1',
    //   name: 'John Doe',
    //   rating: 4.5,
    //   comment: 'Great experience! Highly recommended.',
    // },
    // {
    //   id: '2',
    //   name: 'Jane Smith',
    //   rating: 5.0,
    //   comment: 'Excellent service. Will definitely come back.',
    // },
    // {
    //   id: '3',
    //   name: 'Alex Johnson',
    //   rating: 3.5,
    //   comment: 'Average experience. Could be better.',
    // },
  ]);

  const renderReviewItem = ({ item }) => (
    <View style={styles.reviewItem}>
      <Text style={[styles.reviewName,{color:activeColors.TextColor}]}>{item.name}</Text>
      <Text style={styles.reviewRating}>Rating: {item.rating}</Text>
      <Text style={[styles.reviewCommentreviewName,{color:activeColors.TextColor}]}>{item.comment}</Text>
    </View>
  );

  // no reviews submitted section
  const renderNoReviewsSubmitted = () => {
    return (
      <View style={styles.container}>
      <View style={styles.Contents}>
      
      <View style={styles.iconImageSection}>
      <Image 
        source={require('../../../../assets/images/Review.png')}
        style={styles.iconImage}
      />
      </View>
      <View style={styles.textSection}>
      <Text style={[styles.Title2,{color:activeColors.TextColor}]}> No Review found</Text>
      <Text style={styles.Title3}> You haven't given a review yet. Go to your pending reviews and give your opinion on the people you have worked with.</Text>
      </View>
      
      
      </View>
      </View>
    );
  };

  return (
    <View style={[styles.container,{backgroundColor:activeColors.bgcolor}]}>
   {
    reviewsS.length > 0 ? (
      <View style={styles.container1}>
      <FlatList
        data={reviewsS}
        renderItem={renderReviewItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
    ) : (
      renderNoReviewsSubmitted()
    )

   }
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    // backgroundColor:'#fff'
  },
  container1: {
    flex: 1,
    // backgroundColor: '#fff',
    padding: 16,
  },
  listContainer: {
    paddingBottom: 16,
  },
  reviewItem: {
    // backgroundColor: '#F5F5F5',
    borderRadius: 8,
    padding: 16,
    marginBottom: 8,
  },
  reviewName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  reviewRating: {
    fontSize: 16,
    marginBottom: 8,
    color: 'gray',
  },
  reviewComment: {
    fontSize: 16,
    color: 'black',
  },
  Contents:{
    margin:10,
  },
  Title2: { 
    fontWeight: 'bold',
    fontSize: 28,
    marginVertical:10,
    marginHorizontal:45
   
  },
  Title3: { 
    fontWeight: '600',
    fontSize: 18,
    marginVertical:10,
    color:'gray',
    marginHorizontal:20
    
  },
  iconImage:{
    width:280,
    height:280,
    marginTop:20,
},
iconImageSection:{
   justifyContent:'center',
   alignItems:'center',
  
},
textSection:{
   justifyContent:'center',
   alignItems:'center'
},
});

export default ReviewsSubmitted ;
