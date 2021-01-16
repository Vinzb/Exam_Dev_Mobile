import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, ActivityIndicator, ScrollView, Image, Button } from 'react-native';
import { connect } from 'react-redux';

import { getMovie, getPopularMovies } from '../api/themoviedb';

const Film = ({ filmID }) => {

    const [film, setFilm] = useState(null);

    useEffect(() => {
         requestFilm();
      }, []);


    const requestFilm = async() => {
        try {
            const getFilm = await getMovie(filmID);
            setFilm(getFilm);
        } catch (error) {
          console.error(error);
          throw error;
        }
      };


    return (
        <View style={styles.container}>
                <View style={styles.containerCardTop}>
                <View style={styles.containerEstab}>
                    <Text style={styles.textName}>
                    {film.title}
                    </Text>
                    <Text>
                        {film.release_date}
                    </Text>
                </View>
                </View>
                <View style={styles.containerCardBottom}>
                    <Text>
                    {film.overview}
                    </Text>
                </View>
        </View>
    );
};

/*const mapStateToProps = (state) => {
  return {
    favMovies: state.favMoviesID
  }
}

export default connect(mapStateToProps)(Film);*/

export default Film;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerLoading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerScroll: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 16,
  },
  containerCardTop: {
    elevation: 1,
    borderRadius: 3,
    padding: 12,
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  containerCardBottom: {
    elevation: 1,
    marginTop: 16,
    borderRadius: 3,
    padding: 12,
    backgroundColor: 'white',
  },
  containerNoRestaurantImage: {
    height: 128,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    backgroundColor: 'white',
  },
  restaurantImage: {
    height: 180,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
  },
  containerEstab: {
    flex: 4,
  },
  containerNoteAndVotes: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerNote: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 3,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  textNote: {
    color: 'white',
    fontWeight: "bold",
    fontSize: 16,
  },
  textMaxNote: {
    fontSize: 12,
    marginLeft: 3,
    color: 'white',
  },
  textVotes: {
    fontStyle: "italic",
    fontSize: 12,
  },
  textName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  textTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 16,
  },
  textContent: {
    fontSize: 16,
  },
});