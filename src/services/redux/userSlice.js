import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const intialUserState = null;
export const fetchUser = createAsyncThunk("userSlice/fetchUser", async () => {
	const response = await axios.get(
		process.env.REACT_APP_API_URL + "api/auth/user",
		{
			withCredentials: true,
		}
	);
	return response.data;
});

const userSlice = createSlice({
	name: "userSlice",
	initialState: null,
	reducers: {
		addToWatchLater: (state, action) => {
			state.watchLater.push(action.payload);
		},
		removeFromWatchLater: (state, action) => {
			state.watchLater = state.watchLater.filter(
				(movieId) => movieId !== action.payload
			);
		},
		clearList: (state) => {
			return [];
		},
		setUser: (state, action) => {
			state = action.payload;
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
