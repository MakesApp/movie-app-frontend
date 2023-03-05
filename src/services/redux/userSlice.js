import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const intialUserState = {watchLater:[]} || null;
export const fetchUser = createAsyncThunk("userSlice/fetchUser", async () => {
	const response = await axios.get(
		process.env.REACT_APP_BASE_URL + "api/auth/user",
		{
			withCredentials: true,
		}
	);
	return response.data;
});

const userSlice = createSlice({
	name: "userSlice",
	initialState: intialUserState,
	reducers: {
		addMovie: (state, action) => {
			const existingMovie = state.watchLater.find(
				(movie) => movie.id === action.payload.id
			);
			if (!existingMovie) {
				const movieToAdd = { ...action.payload, isAddedToWatchLater: true };
				state.watchLater.push(movieToAdd);
			} else {
				existingMovie.isAddedToWatchLater = true;
			}
		},
		removeMovie: (state, action) => {
			state.watchLater = state.watchLater.filter((movie) => {
				return movie.id !== action.payload.id;
			});
		},
		clearList: (state) => {
			return [];
		},
		setUser: (state, action) => {
			return action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchUser.pending, (state) => {});
		builder.addCase(fetchUser.fulfilled, (state, action) => {
			return action.payload;
		});
		builder.addCase(fetchUser.rejected, (state, action) => {});
	},
});

export const { setUser, addMovie, removeMovie, clearList } = userSlice.actions;
export default userSlice.reducer;
