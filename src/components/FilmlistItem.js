import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';

const RestaurantListItem = ({ onClick, filmData }) => {

    /*const getThumbnail = () => {
      if (restaurantData.thumb) {
        return (
          <Image style={styles.thumbnail} source={{ uri: restaurantData.thumb }} />
        );
      };
      return (
        <View style={styles.noThumbnailContainer}>
        </View>
      );
    };*/
  
    return (
        <TouchableOpacity style={styles.container} onPress={onClick}>
          <View style={styles.informationContainer}>
            <Text style={styles.title}>
              {filmData.original_title}
            </Text>
            <Text style={[styles.data, styles.cuisine]}
              numberOfLines={1}>
              {filmData.overview}
            </Text>
          </View>
        </TouchableOpacity>
      );
    };
    
    export default RestaurantListItem;

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