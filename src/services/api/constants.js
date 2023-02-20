export const GET_LATEST_MOVIES = () => "api/movies/latest";
export const GET_TOP_MOVIES = () => "api/movies/movies/getTopMovies";
export const GET_MOVIE_BY_SEARCH_TERM = (searchTerm) =>
	`api/movies/search/movie?searchTerm=${searchTerm}`;
