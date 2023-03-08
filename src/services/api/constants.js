export const GET_LATEST_MOVIES = () => `api/movies/latest`;
export const GET_MOVIE_BY_SEARCH_TERM = (searchTerm) =>
	`api/movies/search/movie?searchTerm=${searchTerm}`;
export const GET_TOP_MOVIES = () => "api/movies/getTopMovies";
export const GET_DETAILED_MOVIE = (id) => `api/movies/${id}`;
export const GET_RANDOM_MOVIES = () => `api/movies/randomMovies`;
export const GET_COMEDIANS = () => "api/comedians";
