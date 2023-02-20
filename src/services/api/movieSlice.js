import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../CONSTANS/constants";
import { GET_LATEST_MOVIES, GET_MOVIE_BY_SEARCH } from "./constants";
import { GET_TOP_MOVIES } from "./constants";
export const moviesApi = createApi({
	reducerPath: "moviesApi",
	baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:5000/` }),
	tagTypes: ["Moviesapi"],

	endpoints: (builder) => ({
		getLatestMovies: builder.query({
			query: () => GET_LATEST_MOVIES(),
		}),
		getTopMovies: builder.query({
			query: () => GET_TOP_MOVIES(),
		}),
		getMovieBySearch: builder.query({
			query: ({ query }) => {
				return {
					url:GET_MOVIE_BY_SEARCH(query) ,
					method:"get"

				};
			},
		}),
	}),
});
export const {
	useGetLatestMoviesQuery,
	useGetTopMoviesQuery,
	useGetMovieBySearchQuery,
} = moviesApi;
