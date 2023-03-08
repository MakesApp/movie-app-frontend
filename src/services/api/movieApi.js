import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../CONSTANS/constants";
import {
	GET_LATEST_MOVIES,
	GET_MOVIE_BY_SEARCH_TERM,
	GET_DETAILED_MOVIE,
	ADD_MOVE_TO_WATCH_LATER,
	GET_WATCH_LATER_MOVIES,
	DELETE_MOVE_FROM_WATCH_LATER,
	GET_RANDOM_MOVIES,
	ADD_MOVIE_REVIEWS,
} from "./constants";
import { GET_TOP_MOVIES } from "./constants";

export const moviesApi = createApi({
	reducerPath: "moviesApi",
	baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}` }),
	tagTypes: ["Moviesapi", "watchLater"],
	endpoints: (builder) => ({
		getLatestMovies: builder.query({
			query: () => GET_LATEST_MOVIES(),
			providesTags: ["Moviesapi"],
		}),

		getTopMovies: builder.query({
			query: () => GET_TOP_MOVIES(),
			providesTags: ["Moviesapi"],
		}),

		getMovieBySearchTerm: builder.query({
			query: ({ searchTerm, page }) =>
				GET_MOVIE_BY_SEARCH_TERM(searchTerm, page),
			providesTags: ["Moviesapi"],
		}),
		getMovieDetail: builder.query({
			query: (id) => GET_DETAILED_MOVIE(id),
		}),
		addMovieToWatchLater: builder.mutation({
			query: ({ userId, movieId }) => {
				return {
					url: ADD_MOVE_TO_WATCH_LATER(userId),
					method: "POST",
					body: { movieId },
				};
			},
			invalidatesTags: ["watchLater"],
		}),
		getWatchLaterMovies: builder.query({
			query: (userId) => GET_WATCH_LATER_MOVIES(userId),
			providesTags: ["watchLater"],
		}),
		deleteMovieFromWatchLater: builder.mutation({
			query: ({ userId, movieId }) => {
				return {
					url: DELETE_MOVE_FROM_WATCH_LATER(userId),
					method: "DELETE",
					body: { movieId },
				};
			},
			invalidatesTags: ["watchLater"],
		}),
		getRandomMovies: builder.query({
			query: () => GET_RANDOM_MOVIES(),
		}),
		addMovieRating: builder.mutation({
			query: ({ movieId, userId, rating }) => {
				return {
					url: ADD_MOVIE_REVIEWS(movieId, userId),
					method: "POST",
					body: { rating },
				};
			},
		}),
	}),
});
export const {
	useGetLatestMoviesQuery,
	useGetTopMoviesQuery,
	useGetMovieBySearchTermQuery,
	useGetMovieDetailQuery,
	useAddMovieToWatchLaterMutation,
	useGetWatchLaterMoviesQuery,
	useDeleteMovieFromWatchLaterMutation,
	useGetRandomMoviesQuery,
	useAddMovieRatingMutation,
} = moviesApi;
