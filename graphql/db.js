import axios from "axios";

// const BASE_URL = "https://yts.mx/api/v2/";
// const LIST_MOVIES_URL = `${BASE_URL}list_movies.json`;
// const MOVIE_DETAILS_URL = `${BASE_URL}movie_details.json`;
// const MOVIE_SUGGESTIONS_URL = `${BASE_URL}movie_suggestion.json`;

export const getMovies = async (limit, rating) => {
    const {
        data: {
            data: { movies },
        },
    } = await axios.get("https://yts.mx/api/v2/list_movies.json", {
        params: {
            limit,
            minimum_rating: rating,
        },
    });

    return movies;
};

export const getMovie = async (id) => {
    const {
        data: {
            data: { movie },
        },
    } = await axios.get("https://yts.mx/api/v2/movie_details.json", {
        params: {
            movie_id: id,
        },
    });
    return movie;
};

export const getSuggestions = async (id) => {
    const {
        data: {
            data: { movies },
        },
    } = await axios.get("https://yts.mx/api/v2/movie_suggestions.json", {
        params: {
            movie_id: id,
        },
    });
    console.log(movies);
    return movies;
};

// const getMovies = (limit, rating) => {
//     fetch(`${API_URL}`)
//         .then((res) => res.json())
//         .then((json) => json.data.movies);
// };
