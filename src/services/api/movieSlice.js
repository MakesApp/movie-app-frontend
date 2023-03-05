import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../CONSTANS/constants";
import {
	GET_LATEST_MOVIES,
	GET_MOVIE_BY_SEARCH_TERM,
	GET_DETAILED_MOVIE,
	GET_ADVANCED_SEARCH,
	GET_ALL_MOVIES,
} from "./constants";
import { GET_TOP_MOVIES } from "./constants";
export const moviesApi = createApi({
	reducerPath: "moviesApi",
	baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}` }),
	tagTypes: "Moviesapi",
	endpoints: (builder) => ({
		getLatestMovies: builder.query({
			query: () => GET_LATEST_MOVIES(),
			providesTags: "Moviesapi",
		}),

		getTopMovies: builder.query({
			query: () => GET_TOP_MOVIES(),
			providesTags: "Moviesapi",
		}),

		getMovieBySearchTerm: builder.query({
			query: (searchTerm) => GET_MOVIE_BY_SEARCH_TERM(searchTerm),
			providesTags: "Moviesapi",
		}),
		getMovieDetail: builder.query({
			query: (id) => GET_DETAILED_MOVIE(id),
		}),
		getAdvancedSearch: builder.query({
			query: (movieProps) => GET_ADVANCED_SEARCH(movieProps),
		}),
	}),
});
export const {
	useGetLatestMoviesQuery,
	useGetTopMoviesQuery,
	useGetMovieBySearchTermQuery,
	useGetMovieDetailQuery,
	useGetAdvancedSearchQuery,
	useGetAllMoviesQuery,
} = moviesApi;
