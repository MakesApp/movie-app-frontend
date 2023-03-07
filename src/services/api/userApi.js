import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../CONSTANS/constants";
import { ADD_MOVE_TO_WATCH_LATER } from "./constants";

export const userApi = createApi({
	reducerPath: "userApi",
	baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}` }),
	tagTypes: "user",
	endpoints: (builder) => ({
		fetchUser: builder.query({
			query: () => FETCH_USER(),
		}),
		addMovieToWatchLater: builder.mutation({
			query: (id) => ADD_MOVE_TO_WATCH_LATER(id),
		}),
	}),
});
export const { useAddMovieToWatchLaterMutation } = userApi;
