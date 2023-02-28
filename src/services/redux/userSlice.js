import { createSlice } from "@reduxjs/toolkit";
export const intialUserState = { watchLater: [] };

const userSlice = createSlice({
	name: "userSlice",
	initialState: intialUserState,
	reducers: {
		addMovie: (state, action) => {
			if (!state.watchLater.find((movie) => movie.id === action.payload.id)) {
				state.watchLater.push(action.payload);
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
	},
});

export const { addMovie, removeMovie, clearList } = userSlice.actions;
export default userSlice.reducer;
