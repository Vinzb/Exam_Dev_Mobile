const API_KEY = '7fee81eee4a1ee7cdf8f760b3d8476fd';


export async function getMovies () {
    try {
      const url = `https://api.themoviedb.org/3/movie/550?api_key=${API_KEY}`;
      const response = await fetch(url);
      const json = await response.json();
      console.log(json);

      return json;
    } catch (error) {
      console.error(error);
      throw error;
    }
};

export async function getPopularMovies () {
  try {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=fr&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);

    return json;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export async function getSearchMovies ( Search = "Batman" ) {
  try {
    const url = `https://api.themoviedb.org/3/search/company?api_key=${API_KEY}&query=${Search}&page=1`;
    const response = await fetch(url);
    const json = await response.json();
    console.debug(json.results);

    return json;
  } catch (error) {
    console.error(error);
    throw error;
  }
};