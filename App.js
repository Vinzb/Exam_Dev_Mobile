import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, FlatList } from 'react-native';
import Search from './src/components/Search';
import StackNavigator from './src/navigation/StackNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { getSearchMovies, getPopularMovies, getMovies } from './src/api/themoviedb';
import Film from './src/components/Film';

/*const getMoviesFromApiAsync = async () => {
  try {
    const response = await fetch('https://reactnative.dev/movies.json');
    const json = await response.json();
    return json.movies;
  } catch (error) {
    console.error(error);
  }
};*/


export default App = () => {

    
  return (
    <View style={{ flex: 1, padding: 50}}>
      <NavigationContainer>
        <StackNavigator/>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginTop: 24, // correction barre d'état
  },
});
