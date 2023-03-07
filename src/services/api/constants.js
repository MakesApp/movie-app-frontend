export const GET_LATEST_MOVIES = () => `api/movies/latest`;
export const GET_MOVIE_BY_SEARCH_TERM = (searchTerm) =>
	`api/movies/search/movie?searchTerm=${searchTerm}`;
export const GET_TOP_MOVIES = () => "api/movies/getTopMovies";
export const GET_DETAILED_MOVIE = (id) => `api/movies/${id}`;
export const ADD_MOVE_TO_WATCH_LATER = (id) =>
	`api/user/${id}/movies/watchLater/add`;
export const GET_WATCH_LATER_MOVIES = (userId) =>
	`api/user/${userId}/movies/watchLater`;
export const DELETE_MOVE_FROM_WATCH_LATER = (userId) =>
	`api/user/${userId}/movies/watchLater/delete`;
