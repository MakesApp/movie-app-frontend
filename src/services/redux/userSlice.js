import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const intialUserState = { watchLater: [] } || null;
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
	initialState: { watchLater: [], addedMovieIds: [] },
	reducers: {
		addToWatchLater: (state, action) => {
			 if (!state.watchLater.find((movie) => movie.id === action.payload.id)) {
					const movieToAdd = { ...action.payload, isAddedToWatchLater: true };
					state.watchLater.push(movieToAdd);
					state.addedMovieIds.push(action.payload.id);
				}
		},
		removeFromWatchLater: (state, action) => {
			 state.watchLater = state.watchLater.filter(
					(movie) => movie.id !== action.payload.id
				);
			state.addedMovieIds = state.addedMovieIds.filter(
				(id) => id !== action.payload.id
			);
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

export const { setUser, addToWatchLater, removeFromWatchLater, clearList } =
	userSlice.actions;

export default userSlice.reducer;
