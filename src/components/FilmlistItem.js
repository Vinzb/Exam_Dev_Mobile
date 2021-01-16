import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';

const RestaurantlistItem = ({ onClick, filmData }) => {

    const linkImg = 'https://image.tmdb.org/t/p/w500'+filmData.poster_path;

    const getThumbnail = () => {
        return (
          <Image style={styles.thumbnail} source={{ uri: linkImg }} />
        );
    };
  
    return (
        <TouchableOpacity style={styles.container} onPress={() => { onClick(filmData.id) }}>
          <View style={styles.informationContainer}>
            {getThumbnail()}
            <Text>
              {filmData.title}
            </Text>
            <Text>
              {filmData.date}
            </Text>
            <Text>
              {filmData.overview}
            </Text>
          </View>
        </TouchableOpacity>
      );
    };
    
    export default RestaurantlistItem;

    const styles = StyleSheet.create({
        container: {
          flexDirection: 'row',
          paddingVertical: 8,
        },
        informationContainer: {
          flex: 1,
          marginLeft: 12,
          justifyContent: 'center',
        },
        statsContainer: {
          flexDirection: 'row',
          marginTop: 12,
        },
        statContainer: {
          flexDirection: 'row',
          marginRight: 8,
        },
        noThumbnailContainer: {
          width: 128,
          height: 128,
          alignItems: 'center',
          justifyContent: 'center',
        },
        thumbnail: {
          width: 128,
          height: 128,
          borderRadius: 12,
        },
        title: {
          fontSize: 20,
          fontWeight: 'bold',
        },
        data: {
          fontSize: 16,
        },
        cuisine: {
          fontStyle: 'italic',
        },
        stat: {
          marginLeft: 4,
        },
      });