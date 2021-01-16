import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, FlatList, Keyboard } from 'react-native';

import FilmlistItem from './FilmlistItem';


import { getMovies, getPopularMovies, getSearchMovies } from '../api/themoviedb';

const Search = ({ navigation }) => {

  const [films, setFilms] = useState([]);
  const [filmID, setID] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [nextOffset, setNextOffset] = useState(0);
  const [isMoreResults, setIsMoreResults] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isError, setIsError] = useState(false);

  const requestFilms = async (prevfilms, offset) => {
    setIsRefreshing(true);
    setIsError(false);
    try {
      const filmsSearchResult = await getPopularMovies();
      setFilms(filmsSearchResult);
      /*if (filmsSearchResult.results_start + filmsSearchResult.results_shown < filmsSearchResult.total_results) {
        setIsMoreResults(true);
        setNextOffset(filmsSearchResult.results + filmsSearchResult.results_shown);
      } else {
        setIsMoreResults(false);
      }*/
    } catch (error) {
      setIsError(true);
      setFilms([]);
      setIsMoreResults(true);
      setNextOffset(0);
    }
    setIsRefreshing(false);
  };

 /* const loadMoreFilms = () => {
    if (isMoreResults) {
      requestFilms(films, nextOffset);
    };
  };
*/
  const navigateToFilmDetails = (filmID) => {
    navigation.navigate("ViewFilm", {filmID});
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder='Nom du film'
          style={styles.inputRestaurantName}
          onChangeText={(text) => setSearchTerm(text)}
          onSubmitEditing={requestFilms}
        />
        <Button
          title='Rechercher'
          onPress={requestFilms}
        />
      </View>
      {
        isError ?
          (<DisplayError message='Impossible de récupérer les films' />) :
          (<FlatList
            data={films}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <FilmlistItem filmData = {item} onClick={navigateToFilmDetails} />
            )}
          />)
      }
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
    marginTop: 16,
  },
  searchContainer: {
    marginBottom: 16,
  },
  inputRestaurantName: {
    marginBottom: 8,
  },
});