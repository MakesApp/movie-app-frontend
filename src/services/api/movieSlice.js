import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../CONSTANS/constants";
import { GET_LATEST_MOVIES, GET_MOVIE_BY_SEARCH_TERM,GET_DETAILED_MOVIE } from "./constants";
import { GET_TOP_MOVIES } from "./constants";
export const moviesApi = createApi({
	reducerPath: "moviesApi",
	baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}` }),
	tagTypes: ["Moviesapi"],

	endpoints: (builder) => ({
		getLatestMovies: builder.query({
			query: () => GET_LATEST_MOVIES(),
		}),
		getTopMovies: builder.query({
			query: () => GET_TOP_MOVIES(),
		}),
		getMovieBySearchTerm: builder.query({
			query: (searchTerm) => GET_MOVIE_BY_SEARCH_TERM(searchTerm),
		}),
		getMovieDetail: builder.query({
			query: (id) => GET_DETAILED_MOVIE(id),
		}),
	}),
});
export const {
	useGetLatestMoviesQuery,
	useGetTopMoviesQuery,
	useGetMovieBySearchTermQuery,
	useGetMovieDetailQuery,
} = moviesApi;
