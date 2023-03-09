export const GET_LATEST_MOVIES = () => `api/movies/latest`;
export const GET_MOVIE_BY_SEARCH_TERM = (searchTerm, page) =>
	`api/movies/search/movie?searchTerm=${searchTerm}&page=${page}`;
export const GET_TOP_MOVIES = () => "api/movies/getTopMovies";
export const GET_DETAILED_MOVIE = (id) => `api/movies/${id}`;
export const GET_ADVANCED_SEARCH = (queries) =>
	`api/movies/advancesearch/movie${queries}`;
export const ADD_MOVE_TO_WATCH_LATER = (id) =>
	`api/user/${id}/movies/watchLater/add`;
export const GET_WATCH_LATER_MOVIES = (userId) =>
	`api/user/${userId}/movies/watchLater`;
export const DELETE_MOVE_FROM_WATCH_LATER = (userId) =>
	`api/user/${userId}/movies/watchLater/delete`;
export const GET_RANDOM_MOVIES = () => `api/movies/randomMovies`;
