import { createApi } from '@reduxjs/toolkit/query/react';
import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const moviesApi = createApi({
	reducerPath: 'moviesApi',
	baseQuery: fetchBaseQuery({ baseUrl: '' }),
	/* eslint-disable */
	endpoints: (builder) => ({}),
});
export const {} = moviesApi;
